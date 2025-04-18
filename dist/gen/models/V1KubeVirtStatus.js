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
exports.V1KubeVirtStatus = void 0;
/**
* KubeVirtStatus represents information pertaining to a KubeVirt deployment.
*/
class V1KubeVirtStatus {
    'conditions';
    'defaultArchitecture';
    'generations';
    'observedDeploymentConfig';
    'observedDeploymentID';
    'observedGeneration';
    'observedKubeVirtRegistry';
    'observedKubeVirtVersion';
    'operatorVersion';
    'outdatedVirtualMachineInstanceWorkloads';
    'phase';
    'targetDeploymentConfig';
    'targetDeploymentID';
    'targetKubeVirtRegistry';
    'targetKubeVirtVersion';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1KubeVirtCondition>",
            "format": ""
        },
        {
            "name": "defaultArchitecture",
            "baseName": "defaultArchitecture",
            "type": "string",
            "format": ""
        },
        {
            "name": "generations",
            "baseName": "generations",
            "type": "Array<V1GenerationStatus>",
            "format": ""
        },
        {
            "name": "observedDeploymentConfig",
            "baseName": "observedDeploymentConfig",
            "type": "string",
            "format": ""
        },
        {
            "name": "observedDeploymentID",
            "baseName": "observedDeploymentID",
            "type": "string",
            "format": ""
        },
        {
            "name": "observedGeneration",
            "baseName": "observedGeneration",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "observedKubeVirtRegistry",
            "baseName": "observedKubeVirtRegistry",
            "type": "string",
            "format": ""
        },
        {
            "name": "observedKubeVirtVersion",
            "baseName": "observedKubeVirtVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "operatorVersion",
            "baseName": "operatorVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "outdatedVirtualMachineInstanceWorkloads",
            "baseName": "outdatedVirtualMachineInstanceWorkloads",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "phase",
            "baseName": "phase",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetDeploymentConfig",
            "baseName": "targetDeploymentConfig",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetDeploymentID",
            "baseName": "targetDeploymentID",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetKubeVirtRegistry",
            "baseName": "targetKubeVirtRegistry",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetKubeVirtVersion",
            "baseName": "targetKubeVirtVersion",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1KubeVirtStatus.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1KubeVirtStatus = V1KubeVirtStatus;
//# sourceMappingURL=V1KubeVirtStatus.js.map