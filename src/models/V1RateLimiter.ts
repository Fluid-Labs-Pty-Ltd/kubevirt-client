/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime.js';
import type { V1TokenBucketRateLimiter } from './V1TokenBucketRateLimiter.js';
import {
    V1TokenBucketRateLimiterFromJSON,
    V1TokenBucketRateLimiterFromJSONTyped,
    V1TokenBucketRateLimiterToJSON,
    V1TokenBucketRateLimiterToJSONTyped,
} from './V1TokenBucketRateLimiter.js';

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
export function instanceOfV1RateLimiter(value: object): value is V1RateLimiter {
    return true;
}

export function V1RateLimiterFromJSON(json: any): V1RateLimiter {
    return V1RateLimiterFromJSONTyped(json, false);
}

export function V1RateLimiterFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RateLimiter {
    if (json == null) {
        return json;
    }
    return {
        
        'tokenBucketRateLimiter': json['tokenBucketRateLimiter'] == null ? undefined : V1TokenBucketRateLimiterFromJSON(json['tokenBucketRateLimiter']),
    };
}

export function V1RateLimiterToJSON(json: any): V1RateLimiter {
    return V1RateLimiterToJSONTyped(json, false);
}

export function V1RateLimiterToJSONTyped(value?: V1RateLimiter | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'tokenBucketRateLimiter': V1TokenBucketRateLimiterToJSON(value['tokenBucketRateLimiter']),
    };
}

