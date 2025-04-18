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
exports.V1DiskTarget = void 0;
class V1DiskTarget {
    /**
    * Bus indicates the type of disk device to emulate. supported values: virtio, sata, scsi, usb.
    */
    'bus';
    /**
    * If specified, the virtual disk will be placed on the guests pci address with the specified PCI address. For example: 0000:81:01.10
    */
    'pciAddress';
    /**
    * ReadOnly. Defaults to false.
    */
    'readonly';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "bus",
            "baseName": "bus",
            "type": "string",
            "format": ""
        },
        {
            "name": "pciAddress",
            "baseName": "pciAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "readonly",
            "baseName": "readonly",
            "type": "boolean",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1DiskTarget.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1DiskTarget = V1DiskTarget;
//# sourceMappingURL=V1DiskTarget.js.map