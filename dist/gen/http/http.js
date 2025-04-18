"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpInfo = exports.ResponseContext = exports.SelfDecodingBody = exports.RequestContext = exports.HttpException = exports.HttpMethod = void 0;
exports.wrapHttpLibrary = wrapHttpLibrary;
const url_1 = require("url");
const rxjsStub_js_1 = require("../rxjsStub.js");
__exportStar(require("./isomorphic-fetch.js"), exports);
/**
 * Represents an HTTP method.
 */
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["HEAD"] = "HEAD";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["DELETE"] = "DELETE";
    HttpMethod["CONNECT"] = "CONNECT";
    HttpMethod["OPTIONS"] = "OPTIONS";
    HttpMethod["TRACE"] = "TRACE";
    HttpMethod["PATCH"] = "PATCH";
})(HttpMethod || (exports.HttpMethod = HttpMethod = {}));
class HttpException extends Error {
    constructor(msg) {
        super(msg);
    }
}
exports.HttpException = HttpException;
function ensureAbsoluteUrl(url) {
    if (url.startsWith("http://") || url.startsWith("https://")) {
        return url;
    }
    throw new Error("You need to define an absolute base url for the server.");
}
/**
 * Represents an HTTP request context
 */
class RequestContext {
    httpMethod;
    headers = {};
    body = undefined;
    url;
    agent = undefined;
    /**
     * Creates the request context using a http method and request resource url
     *
     * @param url url of the requested resource
     * @param httpMethod http method
     */
    constructor(url, httpMethod) {
        this.httpMethod = httpMethod;
        this.url = new url_1.URL(ensureAbsoluteUrl(url));
    }
    /*
     * Returns the url set in the constructor including the query string
     *
     */
    getUrl() {
        return this.url.toString().endsWith("/") ?
            this.url.toString().slice(0, -1)
            : this.url.toString();
    }
    /**
     * Replaces the url set in the constructor with this url.
     *
     */
    setUrl(url) {
        this.url = new url_1.URL(ensureAbsoluteUrl(url));
    }
    /**
     * Sets the body of the http request either as a string or FormData
     *
     * Note that setting a body on a HTTP GET, HEAD, DELETE, CONNECT or TRACE
     * request is discouraged.
     * https://httpwg.org/http-core/draft-ietf-httpbis-semantics-latest.html#rfc.section.7.3.1
     *
     * @param body the body of the request
     */
    setBody(body) {
        this.body = body;
    }
    getHttpMethod() {
        return this.httpMethod;
    }
    getHeaders() {
        return this.headers;
    }
    getBody() {
        return this.body;
    }
    setQueryParam(name, value) {
        this.url.searchParams.set(name, value);
    }
    appendQueryParam(name, value) {
        this.url.searchParams.append(name, value);
    }
    /**
     * Sets a cookie with the name and value. NO check  for duplicate cookies is performed
     *
     */
    addCookie(name, value) {
        if (!this.headers["Cookie"]) {
            this.headers["Cookie"] = "";
        }
        this.headers["Cookie"] += name + "=" + value + "; ";
    }
    setHeaderParam(key, value) {
        this.headers[key] = value;
    }
    setAgent(agent) {
        this.agent = agent;
    }
    getAgent() {
        return this.agent;
    }
}
exports.RequestContext = RequestContext;
/**
 * Helper class to generate a `ResponseBody` from binary data
 */
class SelfDecodingBody {
    dataSource;
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    binary() {
        return this.dataSource;
    }
    async text() {
        const data = await this.dataSource;
        return data.toString();
    }
}
exports.SelfDecodingBody = SelfDecodingBody;
class ResponseContext {
    httpStatusCode;
    headers;
    body;
    constructor(httpStatusCode, headers, body) {
        this.httpStatusCode = httpStatusCode;
        this.headers = headers;
        this.body = body;
    }
    /**
     * Parse header value in the form `value; param1="value1"`
     *
     * E.g. for Content-Type or Content-Disposition
     * Parameter names are converted to lower case
     * The first parameter is returned with the key `""`
     */
    getParsedHeader(headerName) {
        const result = {};
        if (!this.headers[headerName]) {
            return result;
        }
        const parameters = this.headers[headerName].split(";");
        for (const parameter of parameters) {
            let [key, value] = parameter.split("=", 2);
            if (!key) {
                continue;
            }
            key = key.toLowerCase().trim();
            if (value === undefined) {
                result[""] = key;
            }
            else {
                value = value.trim();
                if (value.startsWith('"') && value.endsWith('"')) {
                    value = value.substring(1, value.length - 1);
                }
                result[key] = value;
            }
        }
        return result;
    }
    async getBodyAsFile() {
        const data = await this.body.binary();
        const fileName = this.getParsedHeader("content-disposition")["filename"] || "";
        return { data, name: fileName };
    }
    /**
     * Use a heuristic to get a body of unknown data structure.
     * Return as string if possible, otherwise as binary.
     */
    getBodyAsAny() {
        try {
            return this.body.text();
        }
        catch { }
        try {
            return this.body.binary();
        }
        catch { }
        return Promise.resolve(undefined);
    }
}
exports.ResponseContext = ResponseContext;
function wrapHttpLibrary(promiseHttpLibrary) {
    return {
        send(request) {
            return (0, rxjsStub_js_1.from)(promiseHttpLibrary.send(request));
        }
    };
}
class HttpInfo extends ResponseContext {
    data;
    constructor(httpStatusCode, headers, body, data) {
        super(httpStatusCode, headers, body);
        this.data = data;
    }
}
exports.HttpInfo = HttpInfo;
//# sourceMappingURL=http.js.map