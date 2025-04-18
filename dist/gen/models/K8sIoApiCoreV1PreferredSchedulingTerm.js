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
exports.K8sIoApiCoreV1PreferredSchedulingTerm = void 0;
/**
* An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it\'s a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
*/
class K8sIoApiCoreV1PreferredSchedulingTerm {
    'preference';
    /**
    * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
    */
    'weight';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "preference",
            "baseName": "preference",
            "type": "K8sIoApiCoreV1NodeSelectorTerm",
            "format": ""
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "number",
            "format": "int32"
        }
    ];
    static getAttributeTypeMap() {
        return K8sIoApiCoreV1PreferredSchedulingTerm.attributeTypeMap;
    }
    constructor() {
    }
}
exports.K8sIoApiCoreV1PreferredSchedulingTerm = K8sIoApiCoreV1PreferredSchedulingTerm;
//# sourceMappingURL=K8sIoApiCoreV1PreferredSchedulingTerm.js.map