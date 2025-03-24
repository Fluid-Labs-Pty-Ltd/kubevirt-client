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
import type { V1alpha1VirtualMachineClone } from './V1alpha1VirtualMachineClone.js';
/**
 * VirtualMachineCloneList is a list of MigrationPolicy
 * @export
 * @interface V1alpha1VirtualMachineCloneList
 */
export interface V1alpha1VirtualMachineCloneList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1alpha1VirtualMachineCloneList
     */
    apiVersion?: string;
    /**
     *
     * @type {Array<V1alpha1VirtualMachineClone>}
     * @memberof V1alpha1VirtualMachineCloneList
     */
    items: Array<V1alpha1VirtualMachineClone>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1alpha1VirtualMachineCloneList
     */
    kind?: string;
    /**
     *
     * @type {K8sIoApimachineryPkgApisMetaV1ListMeta}
     * @memberof V1alpha1VirtualMachineCloneList
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ListMeta;
}
/**
 * Check if a given object implements the V1alpha1VirtualMachineCloneList interface.
 */
export declare function instanceOfV1alpha1VirtualMachineCloneList(value: object): value is V1alpha1VirtualMachineCloneList;
export declare function V1alpha1VirtualMachineCloneListFromJSON(json: any): V1alpha1VirtualMachineCloneList;
export declare function V1alpha1VirtualMachineCloneListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1VirtualMachineCloneList;
export declare function V1alpha1VirtualMachineCloneListToJSON(json: any): V1alpha1VirtualMachineCloneList;
export declare function V1alpha1VirtualMachineCloneListToJSONTyped(value?: V1alpha1VirtualMachineCloneList | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1alpha1VirtualMachineCloneList.d.ts.map