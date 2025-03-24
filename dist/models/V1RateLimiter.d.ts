/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { V1TokenBucketRateLimiter } from './V1TokenBucketRateLimiter.js';
/**
 *
 * @export
 * @interface V1RateLimiter
 */
export interface V1RateLimiter {
    /**
     *
     * @type {V1TokenBucketRateLimiter}
     * @memberof V1RateLimiter
     */
    tokenBucketRateLimiter?: V1TokenBucketRateLimiter;
}
/**
 * Check if a given object implements the V1RateLimiter interface.
 */
export declare function instanceOfV1RateLimiter(value: object): value is V1RateLimiter;
export declare function V1RateLimiterFromJSON(json: any): V1RateLimiter;
export declare function V1RateLimiterFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RateLimiter;
export declare function V1RateLimiterToJSON(json: any): V1RateLimiter;
export declare function V1RateLimiterToJSONTyped(value?: V1RateLimiter | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1RateLimiter.d.ts.map