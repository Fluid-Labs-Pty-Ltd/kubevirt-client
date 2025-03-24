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
import type { V1VirtualMachineInstance } from './V1VirtualMachineInstance.js';
/**
 * VirtualMachineInstanceList is a list of VirtualMachines
 * @export
 * @interface V1VirtualMachineInstanceList
 */
export interface V1VirtualMachineInstanceList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1VirtualMachineInstanceList
     */
    apiVersion?: string;
    /**
     *
     * @type {Array<V1VirtualMachineInstance>}
     * @memberof V1VirtualMachineInstanceList
     */
    items: Array<V1VirtualMachineInstance>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1VirtualMachineInstanceList
     */
    kind?: string;
    /**
     *
     * @type {K8sIoApimachineryPkgApisMetaV1ListMeta}
     * @memberof V1VirtualMachineInstanceList
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ListMeta;
}
/**
 * Check if a given object implements the V1VirtualMachineInstanceList interface.
 */
export declare function instanceOfV1VirtualMachineInstanceList(value: object): value is V1VirtualMachineInstanceList;
export declare function V1VirtualMachineInstanceListFromJSON(json: any): V1VirtualMachineInstanceList;
export declare function V1VirtualMachineInstanceListFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1VirtualMachineInstanceList;
export declare function V1VirtualMachineInstanceListToJSON(json: any): V1VirtualMachineInstanceList;
export declare function V1VirtualMachineInstanceListToJSONTyped(value?: V1VirtualMachineInstanceList | null, _ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1VirtualMachineInstanceList.d.ts.map