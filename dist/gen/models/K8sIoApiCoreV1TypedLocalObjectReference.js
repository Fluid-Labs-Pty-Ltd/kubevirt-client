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
exports.K8sIoApiCoreV1TypedLocalObjectReference = void 0;
/**
* TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.
*/
class K8sIoApiCoreV1TypedLocalObjectReference {
    /**
    * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
    */
    'apiGroup';
    /**
    * Kind is the type of resource being referenced
    */
    'kind';
    /**
    * Name is the name of resource being referenced
    */
    'name';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "apiGroup",
            "baseName": "apiGroup",
            "type": "string",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return K8sIoApiCoreV1TypedLocalObjectReference.attributeTypeMap;
    }
    constructor() {
    }
}
exports.K8sIoApiCoreV1TypedLocalObjectReference = K8sIoApiCoreV1TypedLocalObjectReference;
//# sourceMappingURL=K8sIoApiCoreV1TypedLocalObjectReference.js.map