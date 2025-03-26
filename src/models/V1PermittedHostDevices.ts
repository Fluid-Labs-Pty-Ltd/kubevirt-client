/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1MediatedHostDevice } from '../models/V1MediatedHostDevice.js';
import { V1PciHostDevice } from '../models/V1PciHostDevice.js';
import { V1USBHostDevice } from '../models/V1USBHostDevice.js';
import { HttpFile } from '../http/http.js';

/**
* PermittedHostDevices holds information about devices allowed for passthrough
*/
export class V1PermittedHostDevices {
    'mediatedDevices'?: Array<V1MediatedHostDevice>;
    'pciHostDevices'?: Array<V1PciHostDevice>;
    'usb'?: Array<V1USBHostDevice>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "mediatedDevices",
            "baseName": "mediatedDevices",
            "type": "Array<V1MediatedHostDevice>",
            "format": ""
        },
        {
            "name": "pciHostDevices",
            "baseName": "pciHostDevices",
            "type": "Array<V1PciHostDevice>",
            "format": ""
        },
        {
            "name": "usb",
            "baseName": "usb",
            "type": "Array<V1USBHostDevice>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PermittedHostDevices.attributeTypeMap;
    }

    public constructor() {
    }
}
