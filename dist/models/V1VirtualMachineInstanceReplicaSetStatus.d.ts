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
import type { V1VirtualMachineInstanceReplicaSetCondition } from './V1VirtualMachineInstanceReplicaSetCondition.js';
/**
 *
 * @export
 * @interface V1VirtualMachineInstanceReplicaSetStatus
 */
export interface V1VirtualMachineInstanceReplicaSetStatus {
    /**
     *
     * @type {Array<V1VirtualMachineInstanceReplicaSetCondition>}
     * @memberof V1VirtualMachineInstanceReplicaSetStatus
     */
    conditions?: Array<V1VirtualMachineInstanceReplicaSetCondition>;
    /**
     * Canonical form of the label selector for HPA which consumes it through the scale subresource.
     * @type {string}
     * @memberof V1VirtualMachineInstanceReplicaSetStatus
     */
    labelSelector?: string;
    /**
     * The number of ready replicas for this replica set.
     * @type {number}
     * @memberof V1VirtualMachineInstanceReplicaSetStatus
     */
    readyReplicas?: number;
    /**
     * Total number of non-terminated pods targeted by this deployment (their labels match the selector).
     * @type {number}
     * @memberof V1VirtualMachineInstanceReplicaSetStatus
     */
    replicas?: number;
}
/**
 * Check if a given object implements the V1VirtualMachineInstanceReplicaSetStatus interface.
 */
export declare function instanceOfV1VirtualMachineInstanceReplicaSetStatus(value: object): value is V1VirtualMachineInstanceReplicaSetStatus;
export declare function V1VirtualMachineInstanceReplicaSetStatusFromJSON(json: any): V1VirtualMachineInstanceReplicaSetStatus;
export declare function V1VirtualMachineInstanceReplicaSetStatusFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1VirtualMachineInstanceReplicaSetStatus;
export declare function V1VirtualMachineInstanceReplicaSetStatusToJSON(json: any): V1VirtualMachineInstanceReplicaSetStatus;
export declare function V1VirtualMachineInstanceReplicaSetStatusToJSONTyped(value?: V1VirtualMachineInstanceReplicaSetStatus | null, _ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1VirtualMachineInstanceReplicaSetStatus.d.ts.map