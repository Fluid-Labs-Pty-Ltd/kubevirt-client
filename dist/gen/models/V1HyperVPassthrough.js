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
exports.V1HyperVPassthrough = void 0;
class V1HyperVPassthrough {
    'enabled';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1HyperVPassthrough.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1HyperVPassthrough = V1HyperVPassthrough;
//# sourceMappingURL=V1HyperVPassthrough.js.map