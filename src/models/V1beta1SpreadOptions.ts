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
/**
 * 
 * @export
 * @interface V1beta1SpreadOptions
 */
export interface V1beta1SpreadOptions {
    /**
     * Across optionally defines how to spread vCPUs across the guest visible topology. Default: SocketsCores
     * @type {string}
     * @memberof V1beta1SpreadOptions
     */
    across?: string;
    /**
     * Ratio optionally defines the ratio to spread vCPUs across the guest visible topology:
     * 
     * CoresThreads        - 1:2   - Controls the ratio of cores to threads. Only a ratio of 2 is currently accepted. SocketsCores        - 1:N   - Controls the ratio of socket to cores. SocketsCoresThreads - 1:N:2 - Controls the ratio of socket to cores. Each core providing 2 threads.
     * 
     * Default: 2
     * @type {number}
     * @memberof V1beta1SpreadOptions
     */
    ratio?: number;
}

/**
 * Check if a given object implements the V1beta1SpreadOptions interface.
 */
export function instanceOfV1beta1SpreadOptions(value: object): value is V1beta1SpreadOptions {
    return true;
}

export function V1beta1SpreadOptionsFromJSON(json: any): V1beta1SpreadOptions {
    return V1beta1SpreadOptionsFromJSONTyped(json, false);
}

export function V1beta1SpreadOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1SpreadOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'across': json['across'] == null ? undefined : json['across'],
        'ratio': json['ratio'] == null ? undefined : json['ratio'],
    };
}

export function V1beta1SpreadOptionsToJSON(json: any): V1beta1SpreadOptions {
    return V1beta1SpreadOptionsToJSONTyped(json, false);
}

export function V1beta1SpreadOptionsToJSONTyped(value?: V1beta1SpreadOptions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'across': value['across'],
        'ratio': value['ratio'],
    };
}

