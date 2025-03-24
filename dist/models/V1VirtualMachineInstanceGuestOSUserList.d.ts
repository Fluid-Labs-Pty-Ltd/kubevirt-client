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
import type { V1VirtualMachineInstanceGuestOSUser } from './V1VirtualMachineInstanceGuestOSUser.js';
/**
 * VirtualMachineInstanceGuestOSUserList comprises the list of all active users on guest machine
 * @export
 * @interface V1VirtualMachineInstanceGuestOSUserList
 */
export interface V1VirtualMachineInstanceGuestOSUserList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1VirtualMachineInstanceGuestOSUserList
     */
    apiVersion?: string;
    /**
     *
     * @type {Array<V1VirtualMachineInstanceGuestOSUser>}
     * @memberof V1VirtualMachineInstanceGuestOSUserList
     */
    items: Array<V1VirtualMachineInstanceGuestOSUser>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1VirtualMachineInstanceGuestOSUserList
     */
    kind?: string;
    /**
     *
     * @type {K8sIoApimachineryPkgApisMetaV1ListMeta}
     * @memberof V1VirtualMachineInstanceGuestOSUserList
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ListMeta;
}
/**
 * Check if a given object implements the V1VirtualMachineInstanceGuestOSUserList interface.
 */
export declare function instanceOfV1VirtualMachineInstanceGuestOSUserList(value: object): value is V1VirtualMachineInstanceGuestOSUserList;
export declare function V1VirtualMachineInstanceGuestOSUserListFromJSON(json: any): V1VirtualMachineInstanceGuestOSUserList;
export declare function V1VirtualMachineInstanceGuestOSUserListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VirtualMachineInstanceGuestOSUserList;
export declare function V1VirtualMachineInstanceGuestOSUserListToJSON(json: any): V1VirtualMachineInstanceGuestOSUserList;
export declare function V1VirtualMachineInstanceGuestOSUserListToJSONTyped(value?: V1VirtualMachineInstanceGuestOSUserList | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1VirtualMachineInstanceGuestOSUserList.d.ts.map