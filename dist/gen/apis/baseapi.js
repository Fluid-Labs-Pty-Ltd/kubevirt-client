"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredError = exports.BaseAPIRequestFactory = exports.COLLECTION_FORMATS = void 0;
/**
 *
 * @export
 */
exports.COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};
/**
 *
 * @export
 * @class BaseAPI
 */
class BaseAPIRequestFactory {
    configuration;
    constructor(configuration) {
        this.configuration = configuration;
    }
}
exports.BaseAPIRequestFactory = BaseAPIRequestFactory;
;
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
class RequiredError extends Error {
    api;
    method;
    field;
    name = "RequiredError";
    constructor(api, method, field) {
        super("Required parameter " + field + " was null or undefined when calling " + api + "." + method + ".");
        this.api = api;
        this.method = method;
        this.field = field;
    }
}
exports.RequiredError = RequiredError;
//# sourceMappingURL=baseapi.js.map