/**
 * Represents an error caused by an api call i.e. it has attributes for a HTTP status code
 * and the returned body object.
 *
 * Example
 * API returns a ErrorMessageObject whenever HTTP status code is not in [200, 299]
 * => ApiException(404, someErrorMessageObject)
 *
 */
export declare class ApiException<T> extends Error {
    code: number;
    body: T;
    headers: {
        [key: string]: string;
    };
    constructor(code: number, message: string, body: T, headers: {
        [key: string]: string;
    });
}
//# sourceMappingURL=exception.d.ts.map