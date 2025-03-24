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
 * @interface V1TPMDevice
 */
export interface V1TPMDevice {
    /**
     * Persistent indicates the state of the TPM device should be kept accross reboots Defaults to false
     * @type {boolean}
     * @memberof V1TPMDevice
     */
    persistent?: boolean;
}

/**
 * Check if a given object implements the V1TPMDevice interface.
 */
export function instanceOfV1TPMDevice(value: object): value is V1TPMDevice {
    return true;
}

export function V1TPMDeviceFromJSON(json: any): V1TPMDevice {
    return V1TPMDeviceFromJSONTyped(json, false);
}

export function V1TPMDeviceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1TPMDevice {
    if (json == null) {
        return json;
    }
    return {
        
        'persistent': json['persistent'] == null ? undefined : json['persistent'],
    };
}

export function V1TPMDeviceToJSON(json: any): V1TPMDevice {
    return V1TPMDeviceToJSONTyped(json, false);
}

export function V1TPMDeviceToJSONTyped(value?: V1TPMDevice | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'persistent': value['persistent'],
    };
}

