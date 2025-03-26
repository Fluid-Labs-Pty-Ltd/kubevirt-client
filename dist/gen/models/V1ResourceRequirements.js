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
exports.V1ResourceRequirements = void 0;
class V1ResourceRequirements {
    /**
    * Limits describes the maximum amount of compute resources allowed. Valid resource keys are \"memory\" and \"cpu\".
    */
    'limits';
    /**
    * Don\'t ask the scheduler to take the guest-management overhead into account. Instead put the overhead only into the container\'s memory limit. This can lead to crashes if all memory is in use on a node. Defaults to false.
    */
    'overcommitGuestOverhead';
    /**
    * Requests is a description of the initial vmi resources. Valid resource keys are \"memory\" and \"cpu\".
    */
    'requests';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "limits",
            "baseName": "limits",
            "type": "any",
            "format": ""
        },
        {
            "name": "overcommitGuestOverhead",
            "baseName": "overcommitGuestOverhead",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "requests",
            "baseName": "requests",
            "type": "any",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1ResourceRequirements.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1ResourceRequirements = V1ResourceRequirements;
//# sourceMappingURL=V1ResourceRequirements.js.map