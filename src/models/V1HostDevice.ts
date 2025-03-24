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
 * @interface V1HostDevice
 */
export interface V1HostDevice {
    /**
     * DeviceName is the resource name of the host device exposed by a device plugin
     * @type {string}
     * @memberof V1HostDevice
     */
    deviceName: string;
    /**
     * 
     * @type {string}
     * @memberof V1HostDevice
     */
    name: string;
    /**
     * If specified, the virtual network interface address and its tag will be provided to the guest via config drive
     * @type {string}
     * @memberof V1HostDevice
     */
    tag?: string;
}

/**
 * Check if a given object implements the V1HostDevice interface.
 */
export function instanceOfV1HostDevice(value: object): value is V1HostDevice {
    if (!('deviceName' in value) || value['deviceName'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function V1HostDeviceFromJSON(json: any): V1HostDevice {
    return V1HostDeviceFromJSONTyped(json, false);
}

export function V1HostDeviceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HostDevice {
    if (json == null) {
        return json;
    }
    return {
        
        'deviceName': json['deviceName'],
        'name': json['name'],
        'tag': json['tag'] == null ? undefined : json['tag'],
    };
}

export function V1HostDeviceToJSON(json: any): V1HostDevice {
    return V1HostDeviceToJSONTyped(json, false);
}

export function V1HostDeviceToJSONTyped(value?: V1HostDevice | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'deviceName': value['deviceName'],
        'name': value['name'],
        'tag': value['tag'],
    };
}

