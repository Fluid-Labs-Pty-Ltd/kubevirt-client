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
 * @interface V1Input
 */
export interface V1Input {
    /**
     * Bus indicates the bus of input device to emulate. Supported values: virtio, usb.
     * @type {string}
     * @memberof V1Input
     */
    bus?: string;
    /**
     * Name is the device name
     * @type {string}
     * @memberof V1Input
     */
    name: string;
    /**
     * Type indicated the type of input device. Supported values: tablet.
     * @type {string}
     * @memberof V1Input
     */
    type: string;
}

/**
 * Check if a given object implements the V1Input interface.
 */
export function instanceOfV1Input(value: object): value is V1Input {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function V1InputFromJSON(json: any): V1Input {
    return V1InputFromJSONTyped(json, false);
}

export function V1InputFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1Input {
    if (json == null) {
        return json;
    }
    return {
        
        'bus': json['bus'] == null ? undefined : json['bus'],
        'name': json['name'],
        'type': json['type'],
    };
}

export function V1InputToJSON(json: any): V1Input {
    return V1InputToJSONTyped(json, false);
}

export function V1InputToJSONTyped(value?: V1Input | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'bus': value['bus'],
        'name': value['name'],
        'type': value['type'],
    };
}

