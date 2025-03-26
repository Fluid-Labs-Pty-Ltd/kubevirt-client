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
exports.V1VirtualMachineInstanceFileSystemInfo = void 0;
/**
* VirtualMachineInstanceFileSystemInfo represents information regarding single guest os filesystem
*/
class V1VirtualMachineInstanceFileSystemInfo {
    'disks';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "disks",
            "baseName": "disks",
            "type": "Array<V1VirtualMachineInstanceFileSystem>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1VirtualMachineInstanceFileSystemInfo.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1VirtualMachineInstanceFileSystemInfo = V1VirtualMachineInstanceFileSystemInfo;
//# sourceMappingURL=V1VirtualMachineInstanceFileSystemInfo.js.map