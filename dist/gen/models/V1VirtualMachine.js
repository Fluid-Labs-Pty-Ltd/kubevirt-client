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
exports.V1VirtualMachine = void 0;
/**
* VirtualMachine handles the VirtualMachines that are not running or are in a stopped state The VirtualMachine contains the template to create the VirtualMachineInstance. It also mirrors the running state of the created VirtualMachineInstance in its status.
*/
class V1VirtualMachine {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion';
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind';
    'metadata';
    'spec';
    'status';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
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
            "name": "metadata",
            "baseName": "metadata",
            "type": "K8sIoApimachineryPkgApisMetaV1ObjectMeta",
            "format": ""
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "V1VirtualMachineSpec",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "V1VirtualMachineStatus",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1VirtualMachine.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1VirtualMachine = V1VirtualMachine;
//# sourceMappingURL=V1VirtualMachine.js.map