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
 * Realtime holds the tuning knobs specific for realtime workloads.
 * @export
 * @interface V1Realtime
 */
export interface V1Realtime {
    /**
     * Mask defines the vcpu mask expression that defines which vcpus are used for realtime. Format matches libvirt's expressions. Example: "0-3,^1","0,2,3","2-3"
     * @type {string}
     * @memberof V1Realtime
     */
    mask?: string;
}

/**
 * Check if a given object implements the V1Realtime interface.
 */
export function instanceOfV1Realtime(value: object): value is V1Realtime {
    return true;
}

export function V1RealtimeFromJSON(json: any): V1Realtime {
    return V1RealtimeFromJSONTyped(json, false);
}

export function V1RealtimeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Realtime {
    if (json == null) {
        return json;
    }
    return {
        
        'mask': json['mask'] == null ? undefined : json['mask'],
    };
}

export function V1RealtimeToJSON(json: any): V1Realtime {
    return V1RealtimeToJSONTyped(json, false);
}

export function V1RealtimeToJSONTyped(value?: V1Realtime | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'mask': value['mask'],
    };
}

