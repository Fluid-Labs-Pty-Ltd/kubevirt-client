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
import type { V1PciHostDevice } from './V1PciHostDevice';
import {
    V1PciHostDeviceFromJSON,
    V1PciHostDeviceFromJSONTyped,
    V1PciHostDeviceToJSON,
    V1PciHostDeviceToJSONTyped,
} from './V1PciHostDevice';
import type { V1USBHostDevice } from './V1USBHostDevice';
import {
    V1USBHostDeviceFromJSON,
    V1USBHostDeviceFromJSONTyped,
    V1USBHostDeviceToJSON,
    V1USBHostDeviceToJSONTyped,
} from './V1USBHostDevice';
import type { V1MediatedHostDevice } from './V1MediatedHostDevice';
import {
    V1MediatedHostDeviceFromJSON,
    V1MediatedHostDeviceFromJSONTyped,
    V1MediatedHostDeviceToJSON,
    V1MediatedHostDeviceToJSONTyped,
} from './V1MediatedHostDevice';

/**
 * PermittedHostDevices holds information about devices allowed for passthrough
 * @export
 * @interface V1PermittedHostDevices
 */
export interface V1PermittedHostDevices {
    /**
     * 
     * @type {Array<V1MediatedHostDevice>}
     * @memberof V1PermittedHostDevices
     */
    mediatedDevices?: Array<V1MediatedHostDevice>;
    /**
     * 
     * @type {Array<V1PciHostDevice>}
     * @memberof V1PermittedHostDevices
     */
    pciHostDevices?: Array<V1PciHostDevice>;
    /**
     * 
     * @type {Array<V1USBHostDevice>}
     * @memberof V1PermittedHostDevices
     */
    usb?: Array<V1USBHostDevice>;
}

/**
 * Check if a given object implements the V1PermittedHostDevices interface.
 */
export function instanceOfV1PermittedHostDevices(value: object): value is V1PermittedHostDevices {
    return true;
}

export function V1PermittedHostDevicesFromJSON(json: any): V1PermittedHostDevices {
    return V1PermittedHostDevicesFromJSONTyped(json, false);
}

export function V1PermittedHostDevicesFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1PermittedHostDevices {
    if (json == null) {
        return json;
    }
    return {
        
        'mediatedDevices': json['mediatedDevices'] == null ? undefined : ((json['mediatedDevices'] as Array<any>).map(V1MediatedHostDeviceFromJSON)),
        'pciHostDevices': json['pciHostDevices'] == null ? undefined : ((json['pciHostDevices'] as Array<any>).map(V1PciHostDeviceFromJSON)),
        'usb': json['usb'] == null ? undefined : ((json['usb'] as Array<any>).map(V1USBHostDeviceFromJSON)),
    };
}

export function V1PermittedHostDevicesToJSON(json: any): V1PermittedHostDevices {
    return V1PermittedHostDevicesToJSONTyped(json, false);
}

export function V1PermittedHostDevicesToJSONTyped(value?: V1PermittedHostDevices | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'mediatedDevices': value['mediatedDevices'] == null ? undefined : ((value['mediatedDevices'] as Array<any>).map(V1MediatedHostDeviceToJSON)),
        'pciHostDevices': value['pciHostDevices'] == null ? undefined : ((value['pciHostDevices'] as Array<any>).map(V1PciHostDeviceToJSON)),
        'usb': value['usb'] == null ? undefined : ((value['usb'] as Array<any>).map(V1USBHostDeviceToJSON)),
    };
}

