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
exports.K8sIoApiCoreV1ResourceRequirements = void 0;
/**
* ResourceRequirements describes the compute resource requirements.
*/
class K8sIoApiCoreV1ResourceRequirements {
    /**
    * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container.  This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.  This field is immutable. It can only be set for containers.
    */
    'claims';
    /**
    * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
    */
    'limits';
    /**
    * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
    */
    'requests';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "claims",
            "baseName": "claims",
            "type": "Array<K8sIoApiCoreV1ResourceClaim>",
            "format": ""
        },
        {
            "name": "limits",
            "baseName": "limits",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "requests",
            "baseName": "requests",
            "type": "{ [key: string]: string; }",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return K8sIoApiCoreV1ResourceRequirements.attributeTypeMap;
    }
    constructor() {
    }
}
exports.K8sIoApiCoreV1ResourceRequirements = K8sIoApiCoreV1ResourceRequirements;
//# sourceMappingURL=K8sIoApiCoreV1ResourceRequirements.js.map