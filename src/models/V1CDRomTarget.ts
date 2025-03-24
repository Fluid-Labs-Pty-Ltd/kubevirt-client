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
 * @interface V1CDRomTarget
 */
export interface V1CDRomTarget {
    /**
     * Bus indicates the type of disk device to emulate. supported values: virtio, sata, scsi.
     * @type {string}
     * @memberof V1CDRomTarget
     */
    bus?: string;
    /**
     * ReadOnly. Defaults to true.
     * @type {boolean}
     * @memberof V1CDRomTarget
     */
    readonly?: boolean;
    /**
     * Tray indicates if the tray of the device is open or closed. Allowed values are "open" and "closed". Defaults to closed.
     * @type {string}
     * @memberof V1CDRomTarget
     */
    tray?: string;
}

/**
 * Check if a given object implements the V1CDRomTarget interface.
 */
export function instanceOfV1CDRomTarget(value: object): value is V1CDRomTarget {
    return true;
}

export function V1CDRomTargetFromJSON(json: any): V1CDRomTarget {
    return V1CDRomTargetFromJSONTyped(json, false);
}

export function V1CDRomTargetFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CDRomTarget {
    if (json == null) {
        return json;
    }
    return {
        
        'bus': json['bus'] == null ? undefined : json['bus'],
        'readonly': json['readonly'] == null ? undefined : json['readonly'],
        'tray': json['tray'] == null ? undefined : json['tray'],
    };
}

export function V1CDRomTargetToJSON(json: any): V1CDRomTarget {
    return V1CDRomTargetToJSONTyped(json, false);
}

export function V1CDRomTargetToJSONTyped(value?: V1CDRomTarget | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'bus': value['bus'],
        'readonly': value['readonly'],
        'tray': value['tray'],
    };
}

