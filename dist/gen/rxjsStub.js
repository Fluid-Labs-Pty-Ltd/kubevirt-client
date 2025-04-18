"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observable = void 0;
exports.from = from;
exports.of = of;
exports.mergeMap = mergeMap;
exports.map = map;
class Observable {
    promise;
    constructor(promise) {
        this.promise = promise;
    }
    toPromise() {
        return this.promise;
    }
    pipe(callback) {
        return new Observable(this.promise.then(callback));
    }
}
exports.Observable = Observable;
function from(promise) {
    return new Observable(promise);
}
function of(value) {
    return new Observable(Promise.resolve(value));
}
function mergeMap(callback) {
    return (value) => callback(value).toPromise();
}
function map(callback) {
    return callback;
}
//# sourceMappingURL=rxjsStub.js.map