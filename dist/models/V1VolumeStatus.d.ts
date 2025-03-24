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
import type { V1ContainerDiskInfo } from './V1ContainerDiskInfo.js';
import type { V1HotplugVolumeStatus } from './V1HotplugVolumeStatus.js';
import type { V1DomainMemoryDumpInfo } from './V1DomainMemoryDumpInfo.js';
import type { V1PersistentVolumeClaimInfo } from './V1PersistentVolumeClaimInfo.js';
/**
 * VolumeStatus represents information about the status of volumes attached to the VirtualMachineInstance.
 * @export
 * @interface V1VolumeStatus
 */
export interface V1VolumeStatus {
    /**
     *
     * @type {V1ContainerDiskInfo}
     * @memberof V1VolumeStatus
     */
    containerDiskVolume?: V1ContainerDiskInfo;
    /**
     *
     * @type {V1HotplugVolumeStatus}
     * @memberof V1VolumeStatus
     */
    hotplugVolume?: V1HotplugVolumeStatus;
    /**
     *
     * @type {V1DomainMemoryDumpInfo}
     * @memberof V1VolumeStatus
     */
    memoryDumpVolume?: V1DomainMemoryDumpInfo;
    /**
     * Message is a detailed message about the current hotplug volume phase
     * @type {string}
     * @memberof V1VolumeStatus
     */
    message?: string;
    /**
     * Name is the name of the volume
     * @type {string}
     * @memberof V1VolumeStatus
     */
    name: string;
    /**
     *
     * @type {V1PersistentVolumeClaimInfo}
     * @memberof V1VolumeStatus
     */
    persistentVolumeClaimInfo?: V1PersistentVolumeClaimInfo;
    /**
     * Phase is the phase
     * @type {string}
     * @memberof V1VolumeStatus
     */
    phase?: string;
    /**
     * Reason is a brief description of why we are in the current hotplug volume phase
     * @type {string}
     * @memberof V1VolumeStatus
     */
    reason?: string;
    /**
     * Represents the size of the volume
     * @type {number}
     * @memberof V1VolumeStatus
     */
    size?: number;
    /**
     * Target is the target name used when adding the volume to the VM, eg: vda
     * @type {string}
     * @memberof V1VolumeStatus
     */
    target: string;
}
/**
 * Check if a given object implements the V1VolumeStatus interface.
 */
export declare function instanceOfV1VolumeStatus(value: object): value is V1VolumeStatus;
export declare function V1VolumeStatusFromJSON(json: any): V1VolumeStatus;
export declare function V1VolumeStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VolumeStatus;
export declare function V1VolumeStatusToJSON(json: any): V1VolumeStatus;
export declare function V1VolumeStatusToJSONTyped(value?: V1VolumeStatus | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1VolumeStatus.d.ts.map