import fs from 'node:fs';
import https from 'node:https';
import path from 'node:path';
import { KubeConfig as k8sKubeConfig } from '@kubernetes/client-node';
import { Cluster, User, Context } from '@kubernetes/client-node';


import {
    SecurityAuthentication,
    AuthMethodsConfiguration,
    createConfiguration,
    ServerConfiguration,
    Configuration,
} from './api.js';
import { Headers, RequestInit } from 'node-fetch';
import { RequestContext } from './api.js';
import WebSocket from 'isomorphic-ws';

import { Authenticator } from './auth.js'
import { FileAuth } from './file_auth.js';
import { ExecAuth } from './exec_auth.js';
import { OpenIDConnectAuth } from './oidc_auth.js';


// TODO: the empty interface breaks the linter, but this type
// will be needed later to get the object and cache features working again
// tslint:disable-next-line:no-empty-interface
export interface ApiType { }

export class KubeVirtKubeConfig implements SecurityAuthentication {
    private static authenticators: Authenticator[] = [
        new ExecAuth(),
        new FileAuth(),
        new OpenIDConnectAuth(),
    ];
    /**
     * The list of all known clusters
     */
    public 'clusters': Cluster[];

    /**
     * The list of all known users
     */
    public 'users': User[];

    /**
     * The list of all known contexts
     */
    public 'contexts': Context[];

    /**
     * The name of the current context
     */
    public 'currentContext': string;

    constructor() {
        this.contexts = [];
        this.clusters = [];
        this.users = [];
    }

    public getContexts(): Context[] {
        return this.contexts;
    }

    public getClusters(): Cluster[] {
        return this.clusters;
    }

    public getUsers(): User[] {
        return this.users;
    }

    public getCurrentContext(): string {
        return this.currentContext;
    }

    public setCurrentContext(context: string): void {
        this.currentContext = context;
    }

    public getContextObject(name: string): Context | null {
        if (!this.contexts) {
            return null;
        }
        return findObject(this.contexts, name, 'context');
    }

    public getCurrentCluster(): Cluster | null {
        const context = this.getCurrentContextObject();
        if (!context) {
            return null;
        }
        return this.getCluster(context.cluster);
    }

    public getCluster(name: string): Cluster | null {
        return findObject(this.clusters, name, 'cluster');
    }

    public getCurrentUser(): User | null {
        const ctx = this.getCurrentContextObject();
        if (!ctx) {
            return null;
        }
        return this.getUser(ctx.user);
    }

    public getUser(name: string): User | null {
        return findObject(this.users, name, 'user');
    }


    public async applyToFetchOptions(opts: https.RequestOptions): Promise<RequestInit> {
        await this.applyToHTTPSOptions(opts);
        const headers = new Headers();
        for (const [key, val] of Object.entries(opts.headers || {})) {
            if (Array.isArray(val)) {
                val.forEach((innerVal) => {
                    headers.append(key, innerVal);
                });
            } else if (typeof val === 'number' || typeof val === 'string') {
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

    public async applyToHTTPSOptions(opts: https.RequestOptions | WebSocket.ClientOptions): Promise<void> {
        const user = this.getCurrentUser();

        await this.applyOptions(opts);

        if (user && user.username) {
            // The ws docs say that it accepts anything that https.RequestOptions accepts,
            // but Typescript doesn't understand that idea (yet) probably could be fixed in
            // the typings, but for now just cast to any
            (opts as any).auth = `${user.username}:${user.password}`;
        }

        const agentOptions: https.AgentOptions = {};

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
        agentOptions.timeout = (opts as any).timeout;
        agentOptions.servername = (opts as any).servername;
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
    public async applySecurityAuthentication(context: RequestContext): Promise<void> {
        const cluster = this.getCurrentCluster();
        const user = this.getCurrentUser();

        const agentOptions: https.AgentOptions = {};
        const httpsOptions: https.RequestOptions = {};

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
    }

    /**
     * Returns name of this security authentication method
     * @returns string
     */
    public getName(): string {
        return 'kubeconfig authentication';
    }

    public loadFromK8sConfig(kubeconfig: k8sKubeConfig): void {
        this.clusters = kubeconfig.clusters
        this.contexts = kubeconfig.contexts
        this.users = kubeconfig.users
        this.currentContext = kubeconfig.currentContext
    }


    public loadFromOptions(options: any): void {
        this.clusters = options.clusters;
        this.contexts = options.contexts;
        this.users = options.users;
        this.currentContext = options.currentContext;
    }






    public makeApiClient<T extends ApiType>(apiClientType: ApiConstructor<T>): T {
        const cluster = this.getCurrentCluster();
        if (!cluster) {
            throw new Error('No active cluster!');
        }
        const authConfig: AuthMethodsConfiguration = {
            default: this,
        };
        const baseServerConfig: ServerConfiguration<{}> = new ServerConfiguration<{}>(cluster.server, {});
        const config: Configuration = createConfiguration({
            baseServer: baseServerConfig,
            authMethods: authConfig,
        });

        const apiClient = new apiClientType(config);

        return apiClient;
    }

    public makePathsAbsolute(rootDirectory: string): void {
        this.clusters.forEach((cluster: Cluster) => {
            if (cluster.caFile) {
                cluster.caFile = makeAbsolutePath(rootDirectory, cluster.caFile);
            }
        });
        this.users.forEach((user: User) => {
            if (user.certFile) {
                user.certFile = makeAbsolutePath(rootDirectory, user.certFile);
            }
            if (user.keyFile) {
                user.keyFile = makeAbsolutePath(rootDirectory, user.keyFile);
            }
        });
    }


    private getCurrentContextObject(): Context | null {
        return this.getContextObject(this.currentContext);
    }

    private applyHTTPSOptions(opts: https.RequestOptions | WebSocket.ClientOptions): void {
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
            (opts as any).servername = cluster.tlsServerName;
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

    private async applyAuthorizationHeader(
        opts: https.RequestOptions | WebSocket.ClientOptions,
    ): Promise<void> {
        const user = this.getCurrentUser();
        if (!user) {
            return;
        }
        const authenticator = KubeVirtKubeConfig.authenticators.find((elt: Authenticator) => {
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

    private async applyOptions(opts: https.RequestOptions | WebSocket.ClientOptions): Promise<void> {
        this.applyHTTPSOptions(opts);
        await this.applyAuthorizationHeader(opts);
    }
}

type ApiConstructor<T extends ApiType> = new (config: Configuration) => T;

export function makeAbsolutePath(root: string, file: string): string {
    if (!root || path.isAbsolute(file)) {
        return file;
    }
    return path.join(root, file);
}

// This is public really only for testing.
export function bufferFromFileOrString(file?: string, data?: string): Buffer | null {
    if (file) {
        return fs.readFileSync(file);
    }
    if (data) {
        return Buffer.from(data, 'base64');
    }
    return null;
}

function dropDuplicatesAndNils(a: string[]): string[] {
    return a.reduce((acceptedValues, currentValue) => {
        // Good-enough algorithm for reducing a small (3 items at this point) array into an ordered list
        // of unique non-empty strings.
        if (currentValue && !acceptedValues.includes(currentValue)) {
            return acceptedValues.concat(currentValue);
        } else {
            return acceptedValues;
        }
    }, [] as string[]);
}

// Only public for testing.
export function findHomeDir(): string | null {
    if (process.platform !== 'win32') {
        if (process.env.HOME) {
            try {
                fs.accessSync(process.env.HOME);
                return process.env.HOME;
                // tslint:disable-next-line:no-empty
            } catch (ignore) { }
        }
        return null;
    }
    // $HOME is always favoured, but the k8s go-client prefers the other two env vars
    // differently depending on whether .kube/config exists or not.
    const homeDrivePath =
        process.env.HOMEDRIVE && process.env.HOMEPATH
            ? path.join(process.env.HOMEDRIVE, process.env.HOMEPATH)
            : '';
    const homePath = process.env.HOME || '';
    const userProfile = process.env.USERPROFILE || '';
    const favourHomeDrivePathList: string[] = dropDuplicatesAndNils([homePath, homeDrivePath, userProfile]);
    const favourUserProfileList: string[] = dropDuplicatesAndNils([homePath, userProfile, homeDrivePath]);
    // 1. the first of %HOME%, %HOMEDRIVE%%HOMEPATH%, %USERPROFILE% containing a `.kube\config` file is returned.
    for (const dir of favourHomeDrivePathList) {
        try {
            fs.accessSync(path.join(dir, '.kube', 'config'));
            return dir;
            // tslint:disable-next-line:no-empty
        } catch (ignore) { }
    }
    // 2. ...the first of %HOME%, %USERPROFILE%, %HOMEDRIVE%%HOMEPATH% that exists and is writeable is returned
    for (const dir of favourUserProfileList) {
        try {
            fs.accessSync(dir, fs.constants.W_OK);
            return dir;
            // tslint:disable-next-line:no-empty
        } catch (ignore) { }
    }
    // 3. ...the first of %HOME%, %USERPROFILE%, %HOMEDRIVE%%HOMEPATH% that exists is returned.
    for (const dir of favourUserProfileList) {
        try {
            fs.accessSync(dir);
            return dir;
            // tslint:disable-next-line:no-empty
        } catch (ignore) { }
    }
    // 4. if none of those locations exists, the first of
    // %HOME%, %USERPROFILE%, %HOMEDRIVE%%HOMEPATH% that is set is returned.
    return favourUserProfileList[0] || null;
}

export interface Named {
    name: string;
}

// Only really public for testing...
export function findObject<T extends Named>(list: T[], name: string, key: string): T | null {
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