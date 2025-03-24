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
 * @interface V1DiskTarget
 */
export interface V1DiskTarget {
    /**
     * Bus indicates the type of disk device to emulate. supported values: virtio, sata, scsi, usb.
     * @type {string}
     * @memberof V1DiskTarget
     */
    bus?: string;
    /**
     * If specified, the virtual disk will be placed on the guests pci address with the specified PCI address. For example: 0000:81:01.10
     * @type {string}
     * @memberof V1DiskTarget
     */
    pciAddress?: string;
    /**
     * ReadOnly. Defaults to false.
     * @type {boolean}
     * @memberof V1DiskTarget
     */
    readonly?: boolean;
}

/**
 * Check if a given object implements the V1DiskTarget interface.
 */
export function instanceOfV1DiskTarget(value: object): value is V1DiskTarget {
    return true;
}

export function V1DiskTargetFromJSON(json: any): V1DiskTarget {
    return V1DiskTargetFromJSONTyped(json, false);
}

export function V1DiskTargetFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DiskTarget {
    if (json == null) {
        return json;
    }
    return {
        
        'bus': json['bus'] == null ? undefined : json['bus'],
        'pciAddress': json['pciAddress'] == null ? undefined : json['pciAddress'],
        'readonly': json['readonly'] == null ? undefined : json['readonly'],
    };
}

export function V1DiskTargetToJSON(json: any): V1DiskTarget {
    return V1DiskTargetToJSONTyped(json, false);
}

export function V1DiskTargetToJSONTyped(value?: V1DiskTarget | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'bus': value['bus'],
        'pciAddress': value['pciAddress'],
        'readonly': value['readonly'],
    };
}

