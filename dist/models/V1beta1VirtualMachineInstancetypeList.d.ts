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
import type { V1beta1VirtualMachineInstancetype } from './V1beta1VirtualMachineInstancetype.js';
/**
 * VirtualMachineInstancetypeList is a list of VirtualMachineInstancetype resources.
 * @export
 * @interface V1beta1VirtualMachineInstancetypeList
 */
export interface V1beta1VirtualMachineInstancetypeList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta1VirtualMachineInstancetypeList
     */
    apiVersion?: string;
    /**
     *
     * @type {Array<V1beta1VirtualMachineInstancetype>}
     * @memberof V1beta1VirtualMachineInstancetypeList
     */
    items: Array<V1beta1VirtualMachineInstancetype>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta1VirtualMachineInstancetypeList
     */
    kind?: string;
    /**
     *
     * @type {K8sIoApimachineryPkgApisMetaV1ListMeta}
     * @memberof V1beta1VirtualMachineInstancetypeList
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ListMeta;
}
/**
 * Check if a given object implements the V1beta1VirtualMachineInstancetypeList interface.
 */
export declare function instanceOfV1beta1VirtualMachineInstancetypeList(value: object): value is V1beta1VirtualMachineInstancetypeList;
export declare function V1beta1VirtualMachineInstancetypeListFromJSON(json: any): V1beta1VirtualMachineInstancetypeList;
export declare function V1beta1VirtualMachineInstancetypeListFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1beta1VirtualMachineInstancetypeList;
export declare function V1beta1VirtualMachineInstancetypeListToJSON(json: any): V1beta1VirtualMachineInstancetypeList;
export declare function V1beta1VirtualMachineInstancetypeListToJSONTyped(value?: V1beta1VirtualMachineInstancetypeList | null, _ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1beta1VirtualMachineInstancetypeList.d.ts.map