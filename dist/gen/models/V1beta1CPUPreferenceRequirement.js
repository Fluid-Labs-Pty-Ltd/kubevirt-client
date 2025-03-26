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
exports.V1beta1CPUPreferenceRequirement = void 0;
class V1beta1CPUPreferenceRequirement {
    /**
    * Minimal number of vCPUs required by the preference.
    */
    'guest';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "guest",
            "baseName": "guest",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return V1beta1CPUPreferenceRequirement.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1beta1CPUPreferenceRequirement = V1beta1CPUPreferenceRequirement;
//# sourceMappingURL=V1beta1CPUPreferenceRequirement.js.map