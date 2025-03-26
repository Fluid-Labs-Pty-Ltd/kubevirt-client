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
exports.K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum = exports.K8sIoApiCoreV1NodeSelectorRequirement = void 0;
/**
* A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
*/
class K8sIoApiCoreV1NodeSelectorRequirement {
    /**
    * The label key that the selector applies to.
    */
    'key';
    /**
    * Represents a key\'s relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.  Possible enum values:  - `\"DoesNotExist\"`  - `\"Exists\"`  - `\"Gt\"`  - `\"In\"`  - `\"Lt\"`  - `\"NotIn\"`
    */
    'operator';
    /**
    * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
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
            "type": "K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum",
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
        return K8sIoApiCoreV1NodeSelectorRequirement.attributeTypeMap;
    }
    constructor() {
    }
}
exports.K8sIoApiCoreV1NodeSelectorRequirement = K8sIoApiCoreV1NodeSelectorRequirement;
var K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum;
(function (K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum) {
    K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum["DoesNotExist"] = "DoesNotExist";
    K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum["Exists"] = "Exists";
    K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum["Gt"] = "Gt";
    K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum["In"] = "In";
    K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum["Lt"] = "Lt";
    K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum["NotIn"] = "NotIn";
})(K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum || (exports.K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum = K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum = {}));
//# sourceMappingURL=K8sIoApiCoreV1NodeSelectorRequirement.js.map