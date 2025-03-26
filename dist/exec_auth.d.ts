import https from 'node:https';
import { Authenticator } from './auth.js';
import { User } from '@kubernetes/client-node';
export interface CredentialStatus {
    readonly token: string;
    readonly clientCertificateData: string;
    readonly clientKeyData: string;
    readonly expirationTimestamp: string;
}
export interface Credential {
    readonly status: CredentialStatus;
}
export declare class ExecAuth implements Authenticator {
    private readonly tokenCache;
    private execFn;
    isAuthProvider(user: User): boolean;
    applyAuthentication(user: User, opts: https.RequestOptions): Promise<void>;
    private getToken;
    private getCredential;
}
//# sourceMappingURL=exec_auth.d.ts.map