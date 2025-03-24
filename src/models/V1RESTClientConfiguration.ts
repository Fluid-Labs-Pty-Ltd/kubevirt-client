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

import { mapValues } from '../runtime';
import type { V1RateLimiter } from './V1RateLimiter';
import {
    V1RateLimiterFromJSON,
    V1RateLimiterFromJSONTyped,
    V1RateLimiterToJSON,
    V1RateLimiterToJSONTyped,
} from './V1RateLimiter';

/**
 * RESTClientConfiguration allows configuring certain aspects of the k8s rest client.
 * @export
 * @interface V1RESTClientConfiguration
 */
export interface V1RESTClientConfiguration {
    /**
     * 
     * @type {V1RateLimiter}
     * @memberof V1RESTClientConfiguration
     */
    rateLimiter?: V1RateLimiter;
}

/**
 * Check if a given object implements the V1RESTClientConfiguration interface.
 */
export function instanceOfV1RESTClientConfiguration(value: object): value is V1RESTClientConfiguration {
    return true;
}

export function V1RESTClientConfigurationFromJSON(json: any): V1RESTClientConfiguration {
    return V1RESTClientConfigurationFromJSONTyped(json, false);
}

export function V1RESTClientConfigurationFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1RESTClientConfiguration {
    if (json == null) {
        return json;
    }
    return {
        
        'rateLimiter': json['rateLimiter'] == null ? undefined : V1RateLimiterFromJSON(json['rateLimiter']),
    };
}

export function V1RESTClientConfigurationToJSON(json: any): V1RESTClientConfiguration {
    return V1RESTClientConfigurationToJSONTyped(json, false);
}

export function V1RESTClientConfigurationToJSONTyped(value?: V1RESTClientConfiguration | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'rateLimiter': V1RateLimiterToJSON(value['rateLimiter']),
    };
}

