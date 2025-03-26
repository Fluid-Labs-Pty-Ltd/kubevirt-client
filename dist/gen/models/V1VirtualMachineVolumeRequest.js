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
exports.V1VirtualMachineVolumeRequest = void 0;
class V1VirtualMachineVolumeRequest {
    'addVolumeOptions';
    'removeVolumeOptions';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "addVolumeOptions",
            "baseName": "addVolumeOptions",
            "type": "V1AddVolumeOptions",
            "format": ""
        },
        {
            "name": "removeVolumeOptions",
            "baseName": "removeVolumeOptions",
            "type": "V1RemoveVolumeOptions",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1VirtualMachineVolumeRequest.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1VirtualMachineVolumeRequest = V1VirtualMachineVolumeRequest;
//# sourceMappingURL=V1VirtualMachineVolumeRequest.js.map