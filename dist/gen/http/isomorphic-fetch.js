"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsomorphicFetchHttpLibrary = void 0;
const http_js_1 = require("./http.js");
const rxjsStub_js_1 = require("../rxjsStub.js");
const node_fetch_1 = __importDefault(require("node-fetch"));
class IsomorphicFetchHttpLibrary {
    send(request) {
        let method = request.getHttpMethod().toString();
        let body = request.getBody();
        const resultPromise = (0, node_fetch_1.default)(request.getUrl(), {
            method: method,
            body: body,
            headers: request.getHeaders(),
            agent: request.getAgent(),
        }).then((resp) => {
            const headers = {};
            resp.headers.forEach((value, name) => {
                headers[name] = value;
            });
            const body = {
                text: () => resp.text(),
                binary: () => resp.buffer()
            };
            return new http_js_1.ResponseContext(resp.status, headers, body);
        });
        return (0, rxjsStub_js_1.from)(resultPromise);
    }
}
exports.IsomorphicFetchHttpLibrary = IsomorphicFetchHttpLibrary;
//# sourceMappingURL=isomorphic-fetch.js.map