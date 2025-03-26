import https from 'node:https';
import { Authenticator } from './auth.js';
import { User } from '@kubernetes/client-node';
export declare class FileAuth implements Authenticator {
    private token;
    private lastRead;
    isAuthProvider(user: User): boolean;
    applyAuthentication(user: User, opts: https.RequestOptions): Promise<void>;
    private refreshToken;
    private isTokenExpired;
}
//# sourceMappingURL=file_auth.d.ts.map