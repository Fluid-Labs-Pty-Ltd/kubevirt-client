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

import { V1ContainerDiskInfo } from '../models/V1ContainerDiskInfo.js';
import { V1DomainMemoryDumpInfo } from '../models/V1DomainMemoryDumpInfo.js';
import { V1HotplugVolumeStatus } from '../models/V1HotplugVolumeStatus.js';
import { V1PersistentVolumeClaimInfo } from '../models/V1PersistentVolumeClaimInfo.js';
import { HttpFile } from '../http/http.js';

/**
* VolumeStatus represents information about the status of volumes attached to the VirtualMachineInstance.
*/
export class V1VolumeStatus {
    'containerDiskVolume'?: V1ContainerDiskInfo;
    'hotplugVolume'?: V1HotplugVolumeStatus;
    'memoryDumpVolume'?: V1DomainMemoryDumpInfo;
    /**
    * Message is a detailed message about the current hotplug volume phase
    */
    'message'?: string;
    /**
    * Name is the name of the volume
    */
    'name': string;
    'persistentVolumeClaimInfo'?: V1PersistentVolumeClaimInfo;
    /**
    * Phase is the phase
    */
    'phase'?: string;
    /**
    * Reason is a brief description of why we are in the current hotplug volume phase
    */
    'reason'?: string;
    /**
    * Represents the size of the volume
    */
    'size'?: number;
    /**
    * Target is the target name used when adding the volume to the VM, eg: vda
    */
    'target': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "containerDiskVolume",
            "baseName": "containerDiskVolume",
            "type": "V1ContainerDiskInfo",
            "format": ""
        },
        {
            "name": "hotplugVolume",
            "baseName": "hotplugVolume",
            "type": "V1HotplugVolumeStatus",
            "format": ""
        },
        {
            "name": "memoryDumpVolume",
            "baseName": "memoryDumpVolume",
            "type": "V1DomainMemoryDumpInfo",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "persistentVolumeClaimInfo",
            "baseName": "persistentVolumeClaimInfo",
            "type": "V1PersistentVolumeClaimInfo",
            "format": ""
        },
        {
            "name": "phase",
            "baseName": "phase",
            "type": "string",
            "format": ""
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string",
            "format": ""
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "target",
            "baseName": "target",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1VolumeStatus.attributeTypeMap;
    }

    public constructor() {
    }
}
