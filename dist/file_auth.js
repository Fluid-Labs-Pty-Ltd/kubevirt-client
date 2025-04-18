import fs from 'node:fs';
export class FileAuth {
    token = null;
    lastRead = null;
    isAuthProvider(user) {
        return user.authProvider && user.authProvider.config && user.authProvider.config.tokenFile;
    }
    async applyAuthentication(user, opts) {
        if (this.token == null) {
            this.refreshToken(user.authProvider.config.tokenFile);
        }
        if (this.isTokenExpired()) {
            this.refreshToken(user.authProvider.config.tokenFile);
        }
        if (this.token) {
            opts.headers.Authorization = `Bearer ${this.token}`;
        }
    }
    refreshToken(filePath) {
        // TODO make this async?
        this.token = fs.readFileSync(filePath).toString('utf-8');
        this.lastRead = new Date();
    }
    isTokenExpired() {
        if (this.lastRead === null) {
            return true;
        }
        const now = new Date();
        const delta = (now.getTime() - this.lastRead.getTime()) / 1000;
        // For now just refresh every 60 seconds. This is imperfect since the token
        // could be out of date for this time, but it is unlikely and it's also what
        // the client-go library does.
        // TODO: Use file notifications instead?
        return delta > 60;
    }
}
//# sourceMappingURL=file_auth.js.map