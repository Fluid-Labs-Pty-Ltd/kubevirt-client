import fs from 'node:fs';
import https from 'node:https';
import path from 'node:path';
import { createConfiguration, ServerConfiguration, } from './api.js';
import { Headers } from 'node-fetch';
import { FileAuth } from './file_auth.js';
import { ExecAuth } from './exec_auth.js';
import { OpenIDConnectAuth } from './oidc_auth.js';
import { trace, SpanStatusCode } from '@opentelemetry/api';
const tracer = trace.getTracer('kubevirt-client');
export class KubeVirtKubeConfig {
    static authenticators = [
        new ExecAuth(),
        new FileAuth(),
        new OpenIDConnectAuth(),
    ];
    /**
     * The list of all known clusters
     */
    'clusters';
    /**
     * The list of all known users
     */
    'users';
    /**
     * The list of all known contexts
     */
    'contexts';
    /**
     * The name of the current context
     */
    'currentContext';
    constructor() {
        this.contexts = [];
        this.clusters = [];
        this.users = [];
    }
    getContexts() {
        return this.contexts;
    }
    getClusters() {
        return this.clusters;
    }
    getUsers() {
        return this.users;
    }
    getCurrentContext() {
        return this.currentContext;
    }
    setCurrentContext(context) {
        this.currentContext = context;
    }
    getContextObject(name) {
        if (!this.contexts) {
            return null;
        }
        return findObject(this.contexts, name, 'context');
    }
    getCurrentCluster() {
        const context = this.getCurrentContextObject();
        if (!context) {
            return null;
        }
        return this.getCluster(context.cluster);
    }
    getCluster(name) {
        return findObject(this.clusters, name, 'cluster');
    }
    getCurrentUser() {
        const ctx = this.getCurrentContextObject();
        if (!ctx) {
            return null;
        }
        return this.getUser(ctx.user);
    }
    getUser(name) {
        return findObject(this.users, name, 'user');
    }
    async applyToFetchOptions(opts) {
        await this.applyToHTTPSOptions(opts);
        const headers = new Headers();
        for (const [key, val] of Object.entries(opts.headers || {})) {
            if (Array.isArray(val)) {
                val.forEach((innerVal) => {
                    headers.append(key, innerVal);
                });
            }
            else if (typeof val === 'number' || typeof val === 'string') {
                headers.set(key, val.toString());
            }
        }
        if (opts.auth) {
            headers.set('Authorization', 'Basic ' + Buffer.from(opts.auth).toString('base64'));
        }
        return {
            agent: opts.agent,
            headers,
            method: opts.method,
            signal: AbortSignal.timeout(opts.timeout || 5000)
        };
    }
    async applyToHTTPSOptions(opts) {
        const user = this.getCurrentUser();
        await this.applyOptions(opts);
        if (user && user.username) {
            // The ws docs say that it accepts anything that https.RequestOptions accepts,
            // but Typescript doesn't understand that idea (yet) probably could be fixed in
            // the typings, but for now just cast to any
            opts.auth = `${user.username}:${user.password}`;
        }
        const agentOptions = {};
        // Copy AgentOptions from RequestOptions
        agentOptions.ca = opts.ca;
        agentOptions.cert = opts.cert;
        agentOptions.key = opts.key;
        agentOptions.pfx = opts.pfx;
        agentOptions.passphrase = opts.passphrase;
        agentOptions.rejectUnauthorized = opts.rejectUnauthorized;
        // The ws docs say that it accepts anything that https.RequestOptions accepts,
        // but Typescript doesn't understand that idea (yet) probably could be fixed in
        // the typings, but for now just cast to any
        agentOptions.timeout = opts.timeout;
        agentOptions.servername = opts.servername;
        agentOptions.ciphers = opts.ciphers;
        agentOptions.honorCipherOrder = opts.honorCipherOrder;
        agentOptions.ecdhCurve = opts.ecdhCurve;
        agentOptions.clientCertEngine = opts.clientCertEngine;
        agentOptions.crl = opts.crl;
        agentOptions.dhparam = opts.dhparam;
        agentOptions.secureOptions = opts.secureOptions;
        agentOptions.secureProtocol = opts.secureProtocol;
        agentOptions.sessionIdContext = opts.sessionIdContext;
        opts.agent = new https.Agent(agentOptions);
    }
    /**
     * Applies SecurityAuthentication to RequestContext of an API Call from API Client
     * @param context
     */
    async applySecurityAuthentication(context) {
        return tracer.startActiveSpan('add-authentication-headers', async (span) => {
            try {
                const cluster = this.getCurrentCluster();
                const user = this.getCurrentUser();
                const agentOptions = {};
                const httpsOptions = {};
                await this.applyOptions(httpsOptions);
                if (cluster && cluster.skipTLSVerify) {
                    agentOptions.rejectUnauthorized = false;
                }
                if (cluster && cluster.tlsServerName) {
                    agentOptions.servername = cluster.tlsServerName;
                }
                if (user && user.username) {
                    const auth = Buffer.from(`${user.username}:${user.password}`).toString('base64');
                    context.setHeaderParam('Authorization', `Basic ${auth}`);
                }
                // Copy headers from httpsOptions to RequestContext
                const headers = httpsOptions.headers || {};
                Object.entries(headers).forEach(([key, value]) => {
                    context.setHeaderParam(key, `${value}`);
                });
                // Copy AgentOptions from RequestOptions
                agentOptions.ca = httpsOptions.ca;
                agentOptions.cert = httpsOptions.cert;
                agentOptions.key = httpsOptions.key;
                agentOptions.pfx = httpsOptions.pfx;
                agentOptions.passphrase = httpsOptions.passphrase;
                agentOptions.rejectUnauthorized = httpsOptions.rejectUnauthorized;
                context.setAgent(new https.Agent(agentOptions));
                const contextHeaders = context.getHeaders();
                const contextAddress = context.getUrl();
                const contextHttpMethod = context.getHttpMethod();
                const spanAttributes = {};
                spanAttributes['http.url'] = contextAddress;
                spanAttributes['http.method'] = contextHttpMethod;
                for (const [key, value] of Object.entries(contextHeaders)) {
                    let santisedValue = `${value}`;
                    if (key == 'Authorization') {
                        santisedValue = 'REDACTED';
                    }
                    spanAttributes[`http.headers.${key}`] = santisedValue;
                }
                ;
                return;
            }
            catch (exc) {
                if (exc instanceof Error) {
                    span.recordException(exc);
                    span.setStatus({ code: SpanStatusCode.ERROR, message: `Error adding security headers to api request: ${exc.message}` });
                }
            }
            finally {
                span.end();
            }
        });
    }
    /**
     * Returns name of this security authentication method
     * @returns string
     */
    getName() {
        return 'kubeconfig authentication';
    }
    loadFromK8sConfig(kubeconfig) {
        this.clusters = kubeconfig.clusters;
        this.contexts = kubeconfig.contexts;
        this.users = kubeconfig.users;
        this.currentContext = kubeconfig.currentContext;
    }
    loadFromOptions(options) {
        this.clusters = options.clusters;
        this.contexts = options.contexts;
        this.users = options.users;
        this.currentContext = options.currentContext;
    }
    makeApiClient(apiClientType) {
        const cluster = this.getCurrentCluster();
        if (!cluster) {
            throw new Error('No active cluster!');
        }
        const authConfig = {
            default: this,
        };
        const baseServerConfig = new ServerConfiguration(cluster.server, {});
        const config = createConfiguration({
            baseServer: baseServerConfig,
            authMethods: authConfig,
        });
        const apiClient = new apiClientType(config);
        return apiClient;
    }
    makePathsAbsolute(rootDirectory) {
        this.clusters.forEach((cluster) => {
            if (cluster.caFile) {
                cluster.caFile = makeAbsolutePath(rootDirectory, cluster.caFile);
            }
        });
        this.users.forEach((user) => {
            if (user.certFile) {
                user.certFile = makeAbsolutePath(rootDirectory, user.certFile);
            }
            if (user.keyFile) {
                user.keyFile = makeAbsolutePath(rootDirectory, user.keyFile);
            }
        });
    }
    getCurrentContextObject() {
        return this.getContextObject(this.currentContext);
    }
    applyHTTPSOptions(opts) {
        const cluster = this.getCurrentCluster();
        const user = this.getCurrentUser();
        if (!user) {
            return;
        }
        if (cluster != null && cluster.skipTLSVerify) {
            opts.rejectUnauthorized = false;
        }
        if (cluster != null && cluster.tlsServerName) {
            // WebSocket.ClientOptions types are missing the servername
            opts.servername = cluster.tlsServerName;
        }
        const ca = cluster != null ? bufferFromFileOrString(cluster.caFile, cluster.caData) : null;
        if (ca) {
            opts.ca = ca;
        }
        const cert = bufferFromFileOrString(user.certFile, user.certData);
        if (cert) {
            opts.cert = cert;
        }
        const key = bufferFromFileOrString(user.keyFile, user.keyData);
        if (key) {
            opts.key = key;
        }
    }
    async applyAuthorizationHeader(opts) {
        const user = this.getCurrentUser();
        if (!user) {
            return;
        }
        const authenticator = KubeVirtKubeConfig.authenticators.find((elt) => {
            return elt.isAuthProvider(user);
        });
        if (!opts.headers) {
            opts.headers = {};
        }
        if (authenticator) {
            await authenticator.applyAuthentication(user, opts);
        }
        if (user.token) {
            opts.headers.Authorization = `Bearer ${user.token}`;
        }
    }
    async applyOptions(opts) {
        this.applyHTTPSOptions(opts);
        await this.applyAuthorizationHeader(opts);
    }
}
export function makeAbsolutePath(root, file) {
    if (!root || path.isAbsolute(file)) {
        return file;
    }
    return path.join(root, file);
}
// This is public really only for testing.
export function bufferFromFileOrString(file, data) {
    if (file) {
        return fs.readFileSync(file);
    }
    if (data) {
        return Buffer.from(data, 'base64');
    }
    return null;
}
function dropDuplicatesAndNils(a) {
    return a.reduce((acceptedValues, currentValue) => {
        // Good-enough algorithm for reducing a small (3 items at this point) array into an ordered list
        // of unique non-empty strings.
        if (currentValue && !acceptedValues.includes(currentValue)) {
            return acceptedValues.concat(currentValue);
        }
        else {
            return acceptedValues;
        }
    }, []);
}
// Only public for testing.
export function findHomeDir() {
    if (process.platform !== 'win32') {
        if (process.env.HOME) {
            try {
                fs.accessSync(process.env.HOME);
                return process.env.HOME;
                // tslint:disable-next-line:no-empty
            }
            catch (ignore) { }
        }
        return null;
    }
    // $HOME is always favoured, but the k8s go-client prefers the other two env vars
    // differently depending on whether .kube/config exists or not.
    const homeDrivePath = process.env.HOMEDRIVE && process.env.HOMEPATH
        ? path.join(process.env.HOMEDRIVE, process.env.HOMEPATH)
        : '';
    const homePath = process.env.HOME || '';
    const userProfile = process.env.USERPROFILE || '';
    const favourHomeDrivePathList = dropDuplicatesAndNils([homePath, homeDrivePath, userProfile]);
    const favourUserProfileList = dropDuplicatesAndNils([homePath, userProfile, homeDrivePath]);
    // 1. the first of %HOME%, %HOMEDRIVE%%HOMEPATH%, %USERPROFILE% containing a `.kube\config` file is returned.
    for (const dir of favourHomeDrivePathList) {
        try {
            fs.accessSync(path.join(dir, '.kube', 'config'));
            return dir;
            // tslint:disable-next-line:no-empty
        }
        catch (ignore) { }
    }
    // 2. ...the first of %HOME%, %USERPROFILE%, %HOMEDRIVE%%HOMEPATH% that exists and is writeable is returned
    for (const dir of favourUserProfileList) {
        try {
            fs.accessSync(dir, fs.constants.W_OK);
            return dir;
            // tslint:disable-next-line:no-empty
        }
        catch (ignore) { }
    }
    // 3. ...the first of %HOME%, %USERPROFILE%, %HOMEDRIVE%%HOMEPATH% that exists is returned.
    for (const dir of favourUserProfileList) {
        try {
            fs.accessSync(dir);
            return dir;
            // tslint:disable-next-line:no-empty
        }
        catch (ignore) { }
    }
    // 4. if none of those locations exists, the first of
    // %HOME%, %USERPROFILE%, %HOMEDRIVE%%HOMEPATH% that is set is returned.
    return favourUserProfileList[0] || null;
}
// Only really public for testing...
export function findObject(list, name, key) {
    if (!list) {
        return null;
    }
    for (const obj of list) {
        if (obj.name === name) {
            if (obj[key]) {
                obj[key].name = name;
                return obj[key];
            }
            return obj;
        }
    }
    return null;
}
//# sourceMappingURL=config.js.map