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
import type { V1USBSelector } from './V1USBSelector.js';
import {
    V1USBSelectorFromJSON,
    V1USBSelectorFromJSONTyped,
    V1USBSelectorToJSON,
    V1USBSelectorToJSONTyped,
} from './V1USBSelector.js';

/**
 * 
 * @export
 * @interface V1USBHostDevice
 */
export interface V1USBHostDevice {
    /**
     * If true, KubeVirt will leave the allocation and monitoring to an external device plugin
     * @type {boolean}
     * @memberof V1USBHostDevice
     */
    externalResourceProvider?: boolean;
    /**
     * Identifies the list of USB host devices. e.g: kubevirt.io/storage, kubevirt.io/bootable-usb, etc
     * @type {string}
     * @memberof V1USBHostDevice
     */
    resourceName: string;
    /**
     * 
     * @type {Array<V1USBSelector>}
     * @memberof V1USBHostDevice
     */
    selectors?: Array<V1USBSelector>;
}

/**
 * Check if a given object implements the V1USBHostDevice interface.
 */
export function instanceOfV1USBHostDevice(value: object): value is V1USBHostDevice {
    if (!('resourceName' in value) || value['resourceName'] === undefined) return false;
    return true;
}

export function V1USBHostDeviceFromJSON(json: any): V1USBHostDevice {
    return V1USBHostDeviceFromJSONTyped(json, false);
}

export function V1USBHostDeviceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1USBHostDevice {
    if (json == null) {
        return json;
    }
    return {
        
        'externalResourceProvider': json['externalResourceProvider'] == null ? undefined : json['externalResourceProvider'],
        'resourceName': json['resourceName'],
        'selectors': json['selectors'] == null ? undefined : ((json['selectors'] as Array<any>).map(V1USBSelectorFromJSON)),
    };
}

export function V1USBHostDeviceToJSON(json: any): V1USBHostDevice {
    return V1USBHostDeviceToJSONTyped(json, false);
}

export function V1USBHostDeviceToJSONTyped(value?: V1USBHostDevice | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'externalResourceProvider': value['externalResourceProvider'],
        'resourceName': value['resourceName'],
        'selectors': value['selectors'] == null ? undefined : ((value['selectors'] as Array<any>).map(V1USBSelectorToJSON)),
    };
}

