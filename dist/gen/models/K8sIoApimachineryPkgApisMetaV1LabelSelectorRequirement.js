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
exports.K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement = void 0;
/**
* A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
*/
class K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement {
    /**
    * key is the label key that the selector applies to.
    */
    'key';
    /**
    * operator represents a key\'s relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
    */
    'operator';
    /**
    * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
    */
    'values';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "string",
            "format": ""
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<string>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement.attributeTypeMap;
    }
    constructor() {
    }
}
exports.K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement = K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement;
//# sourceMappingURL=K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement.js.map