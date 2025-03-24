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
 * @interface V1RTCTimer
 */
export interface V1RTCTimer {
    /**
     * Enabled set to false makes sure that the machine type or a preset can't add the timer. Defaults to true.
     * @type {boolean}
     * @memberof V1RTCTimer
     */
    present?: boolean;
    /**
     * TickPolicy determines what happens when QEMU misses a deadline for injecting a tick to the guest. One of "delay", "catchup".
     * @type {string}
     * @memberof V1RTCTimer
     */
    tickPolicy?: string;
    /**
     * Track the guest or the wall clock.
     * @type {string}
     * @memberof V1RTCTimer
     */
    track?: string;
}

/**
 * Check if a given object implements the V1RTCTimer interface.
 */
export function instanceOfV1RTCTimer(value: object): value is V1RTCTimer {
    return true;
}

export function V1RTCTimerFromJSON(json: any): V1RTCTimer {
    return V1RTCTimerFromJSONTyped(json, false);
}

export function V1RTCTimerFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1RTCTimer {
    if (json == null) {
        return json;
    }
    return {
        
        'present': json['present'] == null ? undefined : json['present'],
        'tickPolicy': json['tickPolicy'] == null ? undefined : json['tickPolicy'],
        'track': json['track'] == null ? undefined : json['track'],
    };
}

export function V1RTCTimerToJSON(json: any): V1RTCTimer {
    return V1RTCTimerToJSONTyped(json, false);
}

export function V1RTCTimerToJSONTyped(value?: V1RTCTimer | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'present': value['present'],
        'tickPolicy': value['tickPolicy'],
        'track': value['track'],
    };
}

