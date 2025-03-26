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
exports.V1Filesystem = void 0;
class V1Filesystem {
    /**
    * Name is the device name
    */
    'name';
    'virtiofs';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "virtiofs",
            "baseName": "virtiofs",
            "type": "any",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1Filesystem.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1Filesystem = V1Filesystem;
//# sourceMappingURL=V1Filesystem.js.map