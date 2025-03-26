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
exports.V1beta1PreferenceRequirements = void 0;
class V1beta1PreferenceRequirements {
    'cpu';
    'memory';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "cpu",
            "baseName": "cpu",
            "type": "V1beta1CPUPreferenceRequirement",
            "format": ""
        },
        {
            "name": "memory",
            "baseName": "memory",
            "type": "V1beta1MemoryPreferenceRequirement",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1beta1PreferenceRequirements.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1beta1PreferenceRequirements = V1beta1PreferenceRequirements;
//# sourceMappingURL=V1beta1PreferenceRequirements.js.map