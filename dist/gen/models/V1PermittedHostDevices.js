"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PermittedHostDevices = void 0;
/**
* PermittedHostDevices holds information about devices allowed for passthrough
*/
class V1PermittedHostDevices {
    'mediatedDevices';
    'pciHostDevices';
    'usb';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
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
        }
    ];
    static getAttributeTypeMap() {
        return V1PermittedHostDevices.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1PermittedHostDevices = V1PermittedHostDevices;
//# sourceMappingURL=V1PermittedHostDevices.js.map