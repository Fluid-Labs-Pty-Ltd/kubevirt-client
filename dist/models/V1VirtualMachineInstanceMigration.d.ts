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
import type { V1VirtualMachineInstanceMigrationStatus } from './V1VirtualMachineInstanceMigrationStatus.js';
import type { V1VirtualMachineInstanceMigrationSpec } from './V1VirtualMachineInstanceMigrationSpec.js';
import type { K8sIoApimachineryPkgApisMetaV1ObjectMeta } from './K8sIoApimachineryPkgApisMetaV1ObjectMeta.js';
/**
 * VirtualMachineInstanceMigration represents the object tracking a VMI's migration to another host in the cluster
 * @export
 * @interface V1VirtualMachineInstanceMigration
 */
export interface V1VirtualMachineInstanceMigration {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1VirtualMachineInstanceMigration
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1VirtualMachineInstanceMigration
     */
    kind?: string;
    /**
     *
     * @type {K8sIoApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof V1VirtualMachineInstanceMigration
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
    /**
     *
     * @type {V1VirtualMachineInstanceMigrationSpec}
     * @memberof V1VirtualMachineInstanceMigration
     */
    spec: V1VirtualMachineInstanceMigrationSpec;
    /**
     *
     * @type {V1VirtualMachineInstanceMigrationStatus}
     * @memberof V1VirtualMachineInstanceMigration
     */
    status?: V1VirtualMachineInstanceMigrationStatus;
}
/**
 * Check if a given object implements the V1VirtualMachineInstanceMigration interface.
 */
export declare function instanceOfV1VirtualMachineInstanceMigration(value: object): value is V1VirtualMachineInstanceMigration;
export declare function V1VirtualMachineInstanceMigrationFromJSON(json: any): V1VirtualMachineInstanceMigration;
export declare function V1VirtualMachineInstanceMigrationFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VirtualMachineInstanceMigration;
export declare function V1VirtualMachineInstanceMigrationToJSON(json: any): V1VirtualMachineInstanceMigration;
export declare function V1VirtualMachineInstanceMigrationToJSONTyped(value?: V1VirtualMachineInstanceMigration | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1VirtualMachineInstanceMigration.d.ts.map