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
 * @interface V1KVMTimer
 */
export interface V1KVMTimer {
    /**
     * Enabled set to false makes sure that the machine type or a preset can't add the timer. Defaults to true.
     * @type {boolean}
     * @memberof V1KVMTimer
     */
    present?: boolean;
}

/**
 * Check if a given object implements the V1KVMTimer interface.
 */
export function instanceOfV1KVMTimer(value: object): value is V1KVMTimer {
    return true;
}

export function V1KVMTimerFromJSON(json: any): V1KVMTimer {
    return V1KVMTimerFromJSONTyped(json, false);
}

export function V1KVMTimerFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1KVMTimer {
    if (json == null) {
        return json;
    }
    return {
        
        'present': json['present'] == null ? undefined : json['present'],
    };
}

export function V1KVMTimerToJSON(json: any): V1KVMTimer {
    return V1KVMTimerToJSONTyped(json, false);
}

export function V1KVMTimerToJSONTyped(value?: V1KVMTimer | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'present': value['present'],
    };
}

