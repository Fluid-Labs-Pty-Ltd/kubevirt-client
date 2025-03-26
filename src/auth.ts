import https from 'node:https';

import { User } from '@kubernetes/client-node';
import WebSocket from 'isomorphic-ws';

export interface Authenticator {
    isAuthProvider(user: User): boolean;
    applyAuthentication(user: User, opts: https.RequestOptions | WebSocket.ClientOptions): Promise<void>;
}