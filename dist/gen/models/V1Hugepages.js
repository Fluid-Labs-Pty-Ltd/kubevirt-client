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
exports.V1Hugepages = void 0;
/**
* Hugepages allow to use hugepages for the VirtualMachineInstance instead of regular memory.
*/
class V1Hugepages {
    /**
    * PageSize specifies the hugepage size, for x86_64 architecture valid values are 1Gi and 2Mi.
    */
    'pageSize';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "pageSize",
            "baseName": "pageSize",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1Hugepages.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1Hugepages = V1Hugepages;
//# sourceMappingURL=V1Hugepages.js.map