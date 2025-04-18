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
/**
* A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
*/
export declare class K8sIoApiCoreV1NodeSelectorRequirement {
    /**
    * The label key that the selector applies to.
    */
    'key': string;
    /**
    * Represents a key\'s relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.  Possible enum values:  - `\"DoesNotExist\"`  - `\"Exists\"`  - `\"Gt\"`  - `\"In\"`  - `\"Lt\"`  - `\"NotIn\"`
    */
    'operator': K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum;
    /**
    * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
    */
    'values'?: Array<string>;
    static readonly discriminator: string | undefined;
    static readonly mapping: {
        [index: string]: string;
    } | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export declare enum K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum {
    DoesNotExist = "DoesNotExist",
    Exists = "Exists",
    Gt = "Gt",
    In = "In",
    Lt = "Lt",
    NotIn = "NotIn"
}
//# sourceMappingURL=K8sIoApiCoreV1NodeSelectorRequirement.d.ts.map