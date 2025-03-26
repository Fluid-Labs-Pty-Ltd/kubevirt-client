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
exports.V1TopologyHints = void 0;
class V1TopologyHints {
    'tscFrequency';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "tscFrequency",
            "baseName": "tscFrequency",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return V1TopologyHints.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1TopologyHints = V1TopologyHints;
//# sourceMappingURL=V1TopologyHints.js.map