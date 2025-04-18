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
exports.V1alpha1VirtualMachinePoolSpec = void 0;
class V1alpha1VirtualMachinePoolSpec {
    /**
    * Indicates that the pool is paused.
    */
    'paused';
    /**
    * Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
    */
    'replicas';
    'selector';
    'virtualMachineTemplate';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "paused",
            "baseName": "paused",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "replicas",
            "baseName": "replicas",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "selector",
            "baseName": "selector",
            "type": "K8sIoApimachineryPkgApisMetaV1LabelSelector",
            "format": ""
        },
        {
            "name": "virtualMachineTemplate",
            "baseName": "virtualMachineTemplate",
            "type": "V1alpha1VirtualMachineTemplateSpec",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1alpha1VirtualMachinePoolSpec.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1alpha1VirtualMachinePoolSpec = V1alpha1VirtualMachinePoolSpec;
//# sourceMappingURL=V1alpha1VirtualMachinePoolSpec.js.map