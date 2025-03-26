"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseMiddlewareWrapper = void 0;
const rxjsStub_js_1 = require("./rxjsStub.js");
class PromiseMiddlewareWrapper {
    middleware;
    constructor(middleware) {
        this.middleware = middleware;
    }
    pre(context) {
        return (0, rxjsStub_js_1.from)(this.middleware.pre(context));
    }
    post(context) {
        return (0, rxjsStub_js_1.from)(this.middleware.post(context));
    }
}
exports.PromiseMiddlewareWrapper = PromiseMiddlewareWrapper;
//# sourceMappingURL=middleware.js.map