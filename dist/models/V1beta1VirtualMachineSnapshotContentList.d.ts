/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { K8sIoApimachineryPkgApisMetaV1ListMeta } from './K8sIoApimachineryPkgApisMetaV1ListMeta.js';
import type { V1beta1VirtualMachineSnapshotContent } from './V1beta1VirtualMachineSnapshotContent.js';
/**
 * VirtualMachineSnapshotContentList is a list of VirtualMachineSnapshot resources
 * @export
 * @interface V1beta1VirtualMachineSnapshotContentList
 */
export interface V1beta1VirtualMachineSnapshotContentList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta1VirtualMachineSnapshotContentList
     */
    apiVersion?: string;
    /**
     *
     * @type {Array<V1beta1VirtualMachineSnapshotContent>}
     * @memberof V1beta1VirtualMachineSnapshotContentList
     */
    items: Array<V1beta1VirtualMachineSnapshotContent>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta1VirtualMachineSnapshotContentList
     */
    kind?: string;
    /**
     *
     * @type {K8sIoApimachineryPkgApisMetaV1ListMeta}
     * @memberof V1beta1VirtualMachineSnapshotContentList
     */
    metadata: K8sIoApimachineryPkgApisMetaV1ListMeta;
}
/**
 * Check if a given object implements the V1beta1VirtualMachineSnapshotContentList interface.
 */
export declare function instanceOfV1beta1VirtualMachineSnapshotContentList(value: object): value is V1beta1VirtualMachineSnapshotContentList;
export declare function V1beta1VirtualMachineSnapshotContentListFromJSON(json: any): V1beta1VirtualMachineSnapshotContentList;
export declare function V1beta1VirtualMachineSnapshotContentListFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1beta1VirtualMachineSnapshotContentList;
export declare function V1beta1VirtualMachineSnapshotContentListToJSON(json: any): V1beta1VirtualMachineSnapshotContentList;
export declare function V1beta1VirtualMachineSnapshotContentListToJSONTyped(value?: V1beta1VirtualMachineSnapshotContentList | null, _ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1beta1VirtualMachineSnapshotContentList.d.ts.map