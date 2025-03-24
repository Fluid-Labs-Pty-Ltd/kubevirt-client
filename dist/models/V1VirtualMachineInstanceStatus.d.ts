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
import type { V1VolumeStatus } from './V1VolumeStatus.js';
import type { V1VirtualMachineInstancePhaseTransitionTimestamp } from './V1VirtualMachineInstancePhaseTransitionTimestamp.js';
import type { V1VirtualMachineInstanceCondition } from './V1VirtualMachineInstanceCondition.js';
import type { V1CPUTopology } from './V1CPUTopology.js';
import type { V1StorageMigratedVolumeInfo } from './V1StorageMigratedVolumeInfo.js';
import type { V1MemoryStatus } from './V1MemoryStatus.js';
import type { V1VirtualMachineInstanceGuestOSInfo } from './V1VirtualMachineInstanceGuestOSInfo.js';
import type { V1VirtualMachineInstanceMigrationState } from './V1VirtualMachineInstanceMigrationState.js';
import type { V1VirtualMachineInstanceNetworkInterface } from './V1VirtualMachineInstanceNetworkInterface.js';
import type { V1KernelBootStatus } from './V1KernelBootStatus.js';
import type { V1TopologyHints } from './V1TopologyHints.js';
import type { V1Machine } from './V1Machine.js';
/**
 * VirtualMachineInstanceStatus represents information about the status of a VirtualMachineInstance. Status may trail the actual state of a system.
 * @export
 * @interface V1VirtualMachineInstanceStatus
 */
export interface V1VirtualMachineInstanceStatus {
    /**
     * VSOCKCID is used to track the allocated VSOCK CID in the VM.
     * @type {number}
     * @memberof V1VirtualMachineInstanceStatus
     */
    vSOCKCID?: number;
    /**
     * ActivePods is a mapping of pod UID to node name. It is possible for multiple pods to be running for a single VMI during migration.
     * @type {{ [key: string]: string; }}
     * @memberof V1VirtualMachineInstanceStatus
     */
    activePods?: {
        [key: string]: string;
    };
    /**
     * Conditions are specific points in VirtualMachineInstance's pod runtime.
     * @type {Array<V1VirtualMachineInstanceCondition>}
     * @memberof V1VirtualMachineInstanceStatus
     */
    conditions?: Array<V1VirtualMachineInstanceCondition>;
    /**
     *
     * @type {V1CPUTopology}
     * @memberof V1VirtualMachineInstanceStatus
     */
    currentCPUTopology?: V1CPUTopology;
    /**
     * EvacuationNodeName is used to track the eviction process of a VMI. It stores the name of the node that we want to evacuate. It is meant to be used by KubeVirt core components only and can't be set or modified by users.
     * @type {string}
     * @memberof V1VirtualMachineInstanceStatus
     */
    evacuationNodeName?: string;
    /**
     * FSFreezeStatus is the state of the fs of the guest it can be either frozen or thawed
     * @type {string}
     * @memberof V1VirtualMachineInstanceStatus
     */
    fsFreezeStatus?: string;
    /**
     *
     * @type {V1VirtualMachineInstanceGuestOSInfo}
     * @memberof V1VirtualMachineInstanceStatus
     */
    guestOSInfo?: V1VirtualMachineInstanceGuestOSInfo;
    /**
     * Interfaces represent the details of available network interfaces.
     * @type {Array<V1VirtualMachineInstanceNetworkInterface>}
     * @memberof V1VirtualMachineInstanceStatus
     */
    interfaces?: Array<V1VirtualMachineInstanceNetworkInterface>;
    /**
     *
     * @type {V1KernelBootStatus}
     * @memberof V1VirtualMachineInstanceStatus
     */
    kernelBootStatus?: V1KernelBootStatus;
    /**
     * LauncherContainerImageVersion indicates what container image is currently active for the vmi.
     * @type {string}
     * @memberof V1VirtualMachineInstanceStatus
     */
    launcherContainerImageVersion?: string;
    /**
     *
     * @type {V1Machine}
     * @memberof V1VirtualMachineInstanceStatus
     */
    machine?: V1Machine;
    /**
     *
     * @type {V1MemoryStatus}
     * @memberof V1VirtualMachineInstanceStatus
     */
    memory?: V1MemoryStatus;
    /**
     * MigratedVolumes lists the source and destination volumes during the volume migration
     * @type {Array<V1StorageMigratedVolumeInfo>}
     * @memberof V1VirtualMachineInstanceStatus
     */
    migratedVolumes?: Array<V1StorageMigratedVolumeInfo>;
    /**
     * Represents the method using which the vmi can be migrated: live migration or block migration
     * @type {string}
     * @memberof V1VirtualMachineInstanceStatus
     */
    migrationMethod?: string;
    /**
     *
     * @type {V1VirtualMachineInstanceMigrationState}
     * @memberof V1VirtualMachineInstanceStatus
     */
    migrationState?: V1VirtualMachineInstanceMigrationState;
    /**
     * This represents the migration transport
     * @type {string}
     * @memberof V1VirtualMachineInstanceStatus
     */
    migrationTransport?: string;
    /**
     * NodeName is the name where the VirtualMachineInstance is currently running.
     * @type {string}
     * @memberof V1VirtualMachineInstanceStatus
     */
    nodeName?: string;
    /**
     * Phase is the status of the VirtualMachineInstance in kubernetes world. It is not the VirtualMachineInstance status, but partially correlates to it.
     * @type {string}
     * @memberof V1VirtualMachineInstanceStatus
     */
    phase?: string;
    /**
     * PhaseTransitionTimestamp is the timestamp of when the last phase change occurred
     * @type {Array<V1VirtualMachineInstancePhaseTransitionTimestamp>}
     * @memberof V1VirtualMachineInstanceStatus
     */
    phaseTransitionTimestamps?: Array<V1VirtualMachineInstancePhaseTransitionTimestamp>;
    /**
     * The Quality of Service (QOS) classification assigned to the virtual machine instance based on resource requirements See PodQOSClass type for available QOS classes More info: https://git.k8s.io/community/contributors/design-proposals/node/resource-qos.md
     *
     * Possible enum values:
     *  - `"BestEffort"` is the BestEffort qos class.
     *  - `"Burstable"` is the Burstable qos class.
     *  - `"Guaranteed"` is the Guaranteed qos class.
     * @type {string}
     * @memberof V1VirtualMachineInstanceStatus
     */
    qosClass?: V1VirtualMachineInstanceStatusQosClassEnum;
    /**
     * A brief CamelCase message indicating details about why the VMI is in this state. e.g. 'NodeUnresponsive'
     * @type {string}
     * @memberof V1VirtualMachineInstanceStatus
     */
    reason?: string;
    /**
     * RuntimeUser is used to determine what user will be used in launcher
     * @type {number}
     * @memberof V1VirtualMachineInstanceStatus
     */
    runtimeUser?: number;
    /**
     * SELinuxContext is the actual SELinux context of the virt-launcher pod
     * @type {string}
     * @memberof V1VirtualMachineInstanceStatus
     */
    selinuxContext?: string;
    /**
     *
     * @type {V1TopologyHints}
     * @memberof V1VirtualMachineInstanceStatus
     */
    topologyHints?: V1TopologyHints;
    /**
     * VirtualMachineRevisionName is used to get the vm revision of the vmi when doing an online vm snapshot
     * @type {string}
     * @memberof V1VirtualMachineInstanceStatus
     */
    virtualMachineRevisionName?: string;
    /**
     * VolumeStatus contains the statuses of all the volumes
     * @type {Array<V1VolumeStatus>}
     * @memberof V1VirtualMachineInstanceStatus
     */
    volumeStatus?: Array<V1VolumeStatus>;
}
/**
 * @export
 */
export declare const V1VirtualMachineInstanceStatusQosClassEnum: {
    readonly BestEffort: "BestEffort";
    readonly Burstable: "Burstable";
    readonly Guaranteed: "Guaranteed";
};
export type V1VirtualMachineInstanceStatusQosClassEnum = typeof V1VirtualMachineInstanceStatusQosClassEnum[keyof typeof V1VirtualMachineInstanceStatusQosClassEnum];
/**
 * Check if a given object implements the V1VirtualMachineInstanceStatus interface.
 */
export declare function instanceOfV1VirtualMachineInstanceStatus(value: object): value is V1VirtualMachineInstanceStatus;
export declare function V1VirtualMachineInstanceStatusFromJSON(json: any): V1VirtualMachineInstanceStatus;
export declare function V1VirtualMachineInstanceStatusFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1VirtualMachineInstanceStatus;
export declare function V1VirtualMachineInstanceStatusToJSON(json: any): V1VirtualMachineInstanceStatus;
export declare function V1VirtualMachineInstanceStatusToJSONTyped(value?: V1VirtualMachineInstanceStatus | null, _ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1VirtualMachineInstanceStatus.d.ts.map