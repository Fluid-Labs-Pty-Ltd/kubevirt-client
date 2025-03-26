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
exports.V1KubeVirtCertificateRotateStrategy = void 0;
class V1KubeVirtCertificateRotateStrategy {
    'selfSigned';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "selfSigned",
            "baseName": "selfSigned",
            "type": "V1KubeVirtSelfSignConfiguration",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1KubeVirtCertificateRotateStrategy.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1KubeVirtCertificateRotateStrategy = V1KubeVirtCertificateRotateStrategy;
//# sourceMappingURL=V1KubeVirtCertificateRotateStrategy.js.map