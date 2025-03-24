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
 * @interface V1PITTimer
 */
export interface V1PITTimer {
    /**
     * Enabled set to false makes sure that the machine type or a preset can't add the timer. Defaults to true.
     * @type {boolean}
     * @memberof V1PITTimer
     */
    present?: boolean;
    /**
     * TickPolicy determines what happens when QEMU misses a deadline for injecting a tick to the guest. One of "delay", "catchup", "discard".
     * @type {string}
     * @memberof V1PITTimer
     */
    tickPolicy?: string;
}

/**
 * Check if a given object implements the V1PITTimer interface.
 */
export function instanceOfV1PITTimer(value: object): value is V1PITTimer {
    return true;
}

export function V1PITTimerFromJSON(json: any): V1PITTimer {
    return V1PITTimerFromJSONTyped(json, false);
}

export function V1PITTimerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PITTimer {
    if (json == null) {
        return json;
    }
    return {
        
        'present': json['present'] == null ? undefined : json['present'],
        'tickPolicy': json['tickPolicy'] == null ? undefined : json['tickPolicy'],
    };
}

export function V1PITTimerToJSON(json: any): V1PITTimer {
    return V1PITTimerToJSONTyped(json, false);
}

export function V1PITTimerToJSONTyped(value?: V1PITTimer | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'present': value['present'],
        'tickPolicy': value['tickPolicy'],
    };
}

