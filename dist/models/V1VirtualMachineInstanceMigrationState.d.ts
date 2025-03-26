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
import { V1MigrationConfiguration } from '../models/V1MigrationConfiguration.js';
export declare class V1VirtualMachineInstanceMigrationState {
    /**
    * Indicates that the migration has been requested to abort
    */
    'abortRequested'?: boolean;
    /**
    * Indicates the final status of the live migration abortion
    */
    'abortStatus'?: string;
    /**
    * Indicates the migration completed
    */
    'completed'?: boolean;
    /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
    'endTimestamp'?: string;
    /**
    * Indicates that the migration failed
    */
    'failed'?: boolean;
    /**
    * Contains the reason why the migration failed
    */
    'failureReason'?: string;
    'migrationConfiguration'?: V1MigrationConfiguration;
    /**
    * Name of the migration policy. If string is empty, no policy is matched
    */
    'migrationPolicyName'?: string;
    /**
    * The VirtualMachineInstanceMigration object associated with this migration
    */
    'migrationUid'?: string;
    /**
    * Lets us know if the vmi is currently running pre or post copy migration
    */
    'mode'?: string;
    /**
    * The source node that the VMI originated on
    */
    'sourceNode'?: string;
    /**
    * If the VMI being migrated uses persistent features (backend-storage), its source PVC name is saved here
    */
    'sourcePersistentStatePVCName'?: string;
    'sourcePod'?: string;
    /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
    'startTimestamp'?: string;
    /**
    * The UID of the target attachment pod for hotplug volumes
    */
    'targetAttachmentPodUID'?: string;
    /**
    * If the VMI requires dedicated CPUs, this field will hold the dedicated CPU set on the target node
    */
    'targetCPUSet'?: Array<number>;
    /**
    * The list of ports opened for live migration on the destination node
    */
    'targetDirectMigrationNodePorts'?: {
        [key: string]: number;
    };
    /**
    * The target node that the VMI is moving to
    */
    'targetNode'?: string;
    /**
    * The address of the target node to use for the migration
    */
    'targetNodeAddress'?: string;
    /**
    * The Target Node has seen the Domain Start Event
    */
    'targetNodeDomainDetected'?: boolean;
    /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
    'targetNodeDomainReadyTimestamp'?: string;
    /**
    * If the VMI requires dedicated CPUs, this field will hold the numa topology on the target node
    */
    'targetNodeTopology'?: string;
    /**
    * If the VMI being migrated uses persistent features (backend-storage), its target PVC name is saved here
    */
    'targetPersistentStatePVCName'?: string;
    /**
    * The target pod that the VMI is moving to
    */
    'targetPod'?: string;
    static readonly discriminator: string | undefined;
    static readonly mapping: {
        [index: string]: string;
    } | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
//# sourceMappingURL=V1VirtualMachineInstanceMigrationState.d.ts.map