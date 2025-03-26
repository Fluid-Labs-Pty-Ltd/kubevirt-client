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
exports.V1beta1VirtualMachineSnapshotContentList = void 0;
/**
* VirtualMachineSnapshotContentList is a list of VirtualMachineSnapshot resources
*/
class V1beta1VirtualMachineSnapshotContentList {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion';
    'items';
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind';
    'metadata';
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
            "name": "items",
            "baseName": "items",
            "type": "Array<V1beta1VirtualMachineSnapshotContent>",
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
            "type": "K8sIoApimachineryPkgApisMetaV1ListMeta",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1beta1VirtualMachineSnapshotContentList.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1beta1VirtualMachineSnapshotContentList = V1beta1VirtualMachineSnapshotContentList;
//# sourceMappingURL=V1beta1VirtualMachineSnapshotContentList.js.map