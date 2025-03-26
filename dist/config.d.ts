import https from 'node:https';
import { KubeConfig as k8sKubeConfig } from '@kubernetes/client-node';
import { Cluster, User, Context } from '@kubernetes/client-node';
import { SecurityAuthentication, Configuration } from './api.js';
import { RequestInit } from 'node-fetch';
import { RequestContext } from './api.js';
import WebSocket from 'isomorphic-ws';
export interface ApiType {
}
export declare class KubeVirtKubeConfig implements SecurityAuthentication {
    private static authenticators;
    /**
     * The list of all known clusters
     */
    'clusters': Cluster[];
    /**
     * The list of all known users
     */
    'users': User[];
    /**
     * The list of all known contexts
     */
    'contexts': Context[];
    /**
     * The name of the current context
     */
    'currentContext': string;
    constructor();
    getContexts(): Context[];
    getClusters(): Cluster[];
    getUsers(): User[];
    getCurrentContext(): string;
    setCurrentContext(context: string): void;
    getContextObject(name: string): Context | null;
    getCurrentCluster(): Cluster | null;
    getCluster(name: string): Cluster | null;
    getCurrentUser(): User | null;
    getUser(name: string): User | null;
    applyToFetchOptions(opts: https.RequestOptions): Promise<RequestInit>;
    applyToHTTPSOptions(opts: https.RequestOptions | WebSocket.ClientOptions): Promise<void>;
    /**
     * Applies SecurityAuthentication to RequestContext of an API Call from API Client
     * @param context
     */
    applySecurityAuthentication(context: RequestContext): Promise<void>;
    /**
     * Returns name of this security authentication method
     * @returns string
     */
    getName(): string;
    loadFromK8sConfig(kubeconfig: k8sKubeConfig): void;
    loadFromOptions(options: any): void;
    makeApiClient<T extends ApiType>(apiClientType: ApiConstructor<T>): T;
    makePathsAbsolute(rootDirectory: string): void;
    private getCurrentContextObject;
    private applyHTTPSOptions;
    private applyAuthorizationHeader;
    private applyOptions;
}
type ApiConstructor<T extends ApiType> = new (config: Configuration) => T;
export declare function makeAbsolutePath(root: string, file: string): string;
export declare function bufferFromFileOrString(file?: string, data?: string): Buffer | null;
export declare function findHomeDir(): string | null;
export interface Named {
    name: string;
}
export declare function findObject<T extends Named>(list: T[], name: string, key: string): T | null;
export {};
//# sourceMappingURL=config.d.ts.map