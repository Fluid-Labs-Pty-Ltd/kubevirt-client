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
exports.K8sIoApiCoreV1Affinity = void 0;
/**
* Affinity is a group of affinity scheduling rules.
*/
class K8sIoApiCoreV1Affinity {
    'nodeAffinity';
    'podAffinity';
    'podAntiAffinity';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "nodeAffinity",
            "baseName": "nodeAffinity",
            "type": "K8sIoApiCoreV1NodeAffinity",
            "format": ""
        },
        {
            "name": "podAffinity",
            "baseName": "podAffinity",
            "type": "K8sIoApiCoreV1PodAffinity",
            "format": ""
        },
        {
            "name": "podAntiAffinity",
            "baseName": "podAntiAffinity",
            "type": "K8sIoApiCoreV1PodAntiAffinity",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return K8sIoApiCoreV1Affinity.attributeTypeMap;
    }
    constructor() {
    }
}
exports.K8sIoApiCoreV1Affinity = K8sIoApiCoreV1Affinity;
//# sourceMappingURL=K8sIoApiCoreV1Affinity.js.map