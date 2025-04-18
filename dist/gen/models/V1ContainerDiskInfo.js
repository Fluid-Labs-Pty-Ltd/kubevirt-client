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
exports.V1ContainerDiskInfo = void 0;
/**
* ContainerDiskInfo shows info about the containerdisk
*/
class V1ContainerDiskInfo {
    /**
    * Checksum is the checksum of the rootdisk or kernel artifacts inside the containerdisk
    */
    'checksum';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "checksum",
            "baseName": "checksum",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return V1ContainerDiskInfo.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1ContainerDiskInfo = V1ContainerDiskInfo;
//# sourceMappingURL=V1ContainerDiskInfo.js.map