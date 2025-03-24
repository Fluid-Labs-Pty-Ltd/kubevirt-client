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
/**
 * 
 * @export
 * @interface V1HPETTimer
 */
export interface V1HPETTimer {
    /**
     * Enabled set to false makes sure that the machine type or a preset can't add the timer. Defaults to true.
     * @type {boolean}
     * @memberof V1HPETTimer
     */
    present?: boolean;
    /**
     * TickPolicy determines what happens when QEMU misses a deadline for injecting a tick to the guest. One of "delay", "catchup", "merge", "discard".
     * @type {string}
     * @memberof V1HPETTimer
     */
    tickPolicy?: string;
}

/**
 * Check if a given object implements the V1HPETTimer interface.
 */
export function instanceOfV1HPETTimer(value: object): value is V1HPETTimer {
    return true;
}

export function V1HPETTimerFromJSON(json: any): V1HPETTimer {
    return V1HPETTimerFromJSONTyped(json, false);
}

export function V1HPETTimerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HPETTimer {
    if (json == null) {
        return json;
    }
    return {
        
        'present': json['present'] == null ? undefined : json['present'],
        'tickPolicy': json['tickPolicy'] == null ? undefined : json['tickPolicy'],
    };
}

export function V1HPETTimerToJSON(json: any): V1HPETTimer {
    return V1HPETTimerToJSONTyped(json, false);
}

export function V1HPETTimerToJSONTyped(value?: V1HPETTimer | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'present': value['present'],
        'tickPolicy': value['tickPolicy'],
    };
}

