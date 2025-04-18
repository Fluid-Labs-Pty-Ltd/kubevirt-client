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
exports.V1ResourceRequirementsWithoutClaims = void 0;
/**
* ResourceRequirementsWithoutClaims describes the compute resource requirements. This struct was taken from the k8s.ResourceRequirements and cleaned up the `Claims` field.
*/
class V1ResourceRequirementsWithoutClaims {
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
        return V1ResourceRequirementsWithoutClaims.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1ResourceRequirementsWithoutClaims = V1ResourceRequirementsWithoutClaims;
//# sourceMappingURL=V1ResourceRequirementsWithoutClaims.js.map