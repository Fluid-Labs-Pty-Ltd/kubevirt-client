"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfiguration = createConfiguration;
const middleware_js_1 = require("./middleware.js");
const isomorphic_fetch_js_1 = require("./http/isomorphic-fetch.js");
const servers_js_1 = require("./servers.js");
const auth_js_1 = require("./auth/auth.js");
/**
 * Provide your `ConfigurationParameters` to this function to get a `Configuration`
 * object that can be used to configure your APIs (in the constructor or
 * for each request individually).
 *
 * If a property is not included in conf, a default is used:
 *    - baseServer: server1
 *    - httpApi: IsomorphicFetchHttpLibrary
 *    - middleware: []
 *    - promiseMiddleware: []
 *    - authMethods: {}
 *
 * @param conf partial configuration
 */
function createConfiguration(conf = {}) {
    const configuration = {
        baseServer: conf.baseServer !== undefined ? conf.baseServer : servers_js_1.server1,
        httpApi: conf.httpApi || new isomorphic_fetch_js_1.IsomorphicFetchHttpLibrary(),
        middleware: conf.middleware || [],
        authMethods: (0, auth_js_1.configureAuthMethods)(conf.authMethods)
    };
    if (conf.promiseMiddleware) {
        conf.promiseMiddleware.forEach(m => configuration.middleware.push(new middleware_js_1.PromiseMiddlewareWrapper(m)));
    }
    return configuration;
}
//# sourceMappingURL=configuration.js.map