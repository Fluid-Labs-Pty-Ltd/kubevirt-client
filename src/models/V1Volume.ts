/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
import type { V1SysprepSource } from './V1SysprepSource';
import {
    V1SysprepSourceFromJSON,
    V1SysprepSourceFromJSONTyped,
    V1SysprepSourceToJSON,
    V1SysprepSourceToJSONTyped,
} from './V1SysprepSource';
import type { V1DownwardAPIVolumeSource } from './V1DownwardAPIVolumeSource';
import {
    V1DownwardAPIVolumeSourceFromJSON,
    V1DownwardAPIVolumeSourceFromJSONTyped,
    V1DownwardAPIVolumeSourceToJSON,
    V1DownwardAPIVolumeSourceToJSONTyped,
} from './V1DownwardAPIVolumeSource';
import type { V1EmptyDiskSource } from './V1EmptyDiskSource';
import {
    V1EmptyDiskSourceFromJSON,
    V1EmptyDiskSourceFromJSONTyped,
    V1EmptyDiskSourceToJSON,
    V1EmptyDiskSourceToJSONTyped,
} from './V1EmptyDiskSource';
import type { V1MemoryDumpVolumeSource } from './V1MemoryDumpVolumeSource';
import {
    V1MemoryDumpVolumeSourceFromJSON,
    V1MemoryDumpVolumeSourceFromJSONTyped,
    V1MemoryDumpVolumeSourceToJSON,
    V1MemoryDumpVolumeSourceToJSONTyped,
} from './V1MemoryDumpVolumeSource';
import type { V1DataVolumeSource } from './V1DataVolumeSource';
import {
    V1DataVolumeSourceFromJSON,
    V1DataVolumeSourceFromJSONTyped,
    V1DataVolumeSourceToJSON,
    V1DataVolumeSourceToJSONTyped,
} from './V1DataVolumeSource';
import type { V1SecretVolumeSource } from './V1SecretVolumeSource';
import {
    V1SecretVolumeSourceFromJSON,
    V1SecretVolumeSourceFromJSONTyped,
    V1SecretVolumeSourceToJSON,
    V1SecretVolumeSourceToJSONTyped,
} from './V1SecretVolumeSource';
import type { V1EphemeralVolumeSource } from './V1EphemeralVolumeSource';
import {
    V1EphemeralVolumeSourceFromJSON,
    V1EphemeralVolumeSourceFromJSONTyped,
    V1EphemeralVolumeSourceToJSON,
    V1EphemeralVolumeSourceToJSONTyped,
} from './V1EphemeralVolumeSource';
import type { V1HostDisk } from './V1HostDisk';
import {
    V1HostDiskFromJSON,
    V1HostDiskFromJSONTyped,
    V1HostDiskToJSON,
    V1HostDiskToJSONTyped,
} from './V1HostDisk';
import type { V1CloudInitNoCloudSource } from './V1CloudInitNoCloudSource';
import {
    V1CloudInitNoCloudSourceFromJSON,
    V1CloudInitNoCloudSourceFromJSONTyped,
    V1CloudInitNoCloudSourceToJSON,
    V1CloudInitNoCloudSourceToJSONTyped,
} from './V1CloudInitNoCloudSource';
import type { V1ContainerDiskSource } from './V1ContainerDiskSource';
import {
    V1ContainerDiskSourceFromJSON,
    V1ContainerDiskSourceFromJSONTyped,
    V1ContainerDiskSourceToJSON,
    V1ContainerDiskSourceToJSONTyped,
} from './V1ContainerDiskSource';
import type { V1ServiceAccountVolumeSource } from './V1ServiceAccountVolumeSource';
import {
    V1ServiceAccountVolumeSourceFromJSON,
    V1ServiceAccountVolumeSourceFromJSONTyped,
    V1ServiceAccountVolumeSourceToJSON,
    V1ServiceAccountVolumeSourceToJSONTyped,
} from './V1ServiceAccountVolumeSource';
import type { V1PersistentVolumeClaimVolumeSource } from './V1PersistentVolumeClaimVolumeSource';
import {
    V1PersistentVolumeClaimVolumeSourceFromJSON,
    V1PersistentVolumeClaimVolumeSourceFromJSONTyped,
    V1PersistentVolumeClaimVolumeSourceToJSON,
    V1PersistentVolumeClaimVolumeSourceToJSONTyped,
} from './V1PersistentVolumeClaimVolumeSource';
import type { V1CloudInitConfigDriveSource } from './V1CloudInitConfigDriveSource';
import {
    V1CloudInitConfigDriveSourceFromJSON,
    V1CloudInitConfigDriveSourceFromJSONTyped,
    V1CloudInitConfigDriveSourceToJSON,
    V1CloudInitConfigDriveSourceToJSONTyped,
} from './V1CloudInitConfigDriveSource';
import type { V1ConfigMapVolumeSource } from './V1ConfigMapVolumeSource';
import {
    V1ConfigMapVolumeSourceFromJSON,
    V1ConfigMapVolumeSourceFromJSONTyped,
    V1ConfigMapVolumeSourceToJSON,
    V1ConfigMapVolumeSourceToJSONTyped,
} from './V1ConfigMapVolumeSource';

/**
 * Volume represents a named volume in a vmi.
 * @export
 * @interface V1Volume
 */
export interface V1Volume {
    /**
     * 
     * @type {V1CloudInitConfigDriveSource}
     * @memberof V1Volume
     */
    cloudInitConfigDrive?: V1CloudInitConfigDriveSource;
    /**
     * 
     * @type {V1CloudInitNoCloudSource}
     * @memberof V1Volume
     */
    cloudInitNoCloud?: V1CloudInitNoCloudSource;
    /**
     * 
     * @type {V1ConfigMapVolumeSource}
     * @memberof V1Volume
     */
    configMap?: V1ConfigMapVolumeSource;
    /**
     * 
     * @type {V1ContainerDiskSource}
     * @memberof V1Volume
     */
    containerDisk?: V1ContainerDiskSource;
    /**
     * 
     * @type {V1DataVolumeSource}
     * @memberof V1Volume
     */
    dataVolume?: V1DataVolumeSource;
    /**
     * 
     * @type {V1DownwardAPIVolumeSource}
     * @memberof V1Volume
     */
    downwardAPI?: V1DownwardAPIVolumeSource;
    /**
     * DownwardMetricsVolumeSource adds a very small disk to VMIs which contains a limited view of host and guest metrics. The disk content is compatible with vhostmd (https://github.com/vhostmd/vhostmd) and vm-dump-metrics.
     * @type {object}
     * @memberof V1Volume
     */
    downwardMetrics?: object;
    /**
     * 
     * @type {V1EmptyDiskSource}
     * @memberof V1Volume
     */
    emptyDisk?: V1EmptyDiskSource;
    /**
     * 
     * @type {V1EphemeralVolumeSource}
     * @memberof V1Volume
     */
    ephemeral?: V1EphemeralVolumeSource;
    /**
     * 
     * @type {V1HostDisk}
     * @memberof V1Volume
     */
    hostDisk?: V1HostDisk;
    /**
     * 
     * @type {V1MemoryDumpVolumeSource}
     * @memberof V1Volume
     */
    memoryDump?: V1MemoryDumpVolumeSource;
    /**
     * Volume's name. Must be a DNS_LABEL and unique within the vmi. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * @type {string}
     * @memberof V1Volume
     */
    name: string;
    /**
     * 
     * @type {V1PersistentVolumeClaimVolumeSource}
     * @memberof V1Volume
     */
    persistentVolumeClaim?: V1PersistentVolumeClaimVolumeSource;
    /**
     * 
     * @type {V1SecretVolumeSource}
     * @memberof V1Volume
     */
    secret?: V1SecretVolumeSource;
    /**
     * 
     * @type {V1ServiceAccountVolumeSource}
     * @memberof V1Volume
     */
    serviceAccount?: V1ServiceAccountVolumeSource;
    /**
     * 
     * @type {V1SysprepSource}
     * @memberof V1Volume
     */
    sysprep?: V1SysprepSource;
}

/**
 * Check if a given object implements the V1Volume interface.
 */
export function instanceOfV1Volume(value: object): value is V1Volume {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function V1VolumeFromJSON(json: any): V1Volume {
    return V1VolumeFromJSONTyped(json, false);
}

export function V1VolumeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Volume {
    if (json == null) {
        return json;
    }
    return {
        
        'cloudInitConfigDrive': json['cloudInitConfigDrive'] == null ? undefined : V1CloudInitConfigDriveSourceFromJSON(json['cloudInitConfigDrive']),
        'cloudInitNoCloud': json['cloudInitNoCloud'] == null ? undefined : V1CloudInitNoCloudSourceFromJSON(json['cloudInitNoCloud']),
        'configMap': json['configMap'] == null ? undefined : V1ConfigMapVolumeSourceFromJSON(json['configMap']),
        'containerDisk': json['containerDisk'] == null ? undefined : V1ContainerDiskSourceFromJSON(json['containerDisk']),
        'dataVolume': json['dataVolume'] == null ? undefined : V1DataVolumeSourceFromJSON(json['dataVolume']),
        'downwardAPI': json['downwardAPI'] == null ? undefined : V1DownwardAPIVolumeSourceFromJSON(json['downwardAPI']),
        'downwardMetrics': json['downwardMetrics'] == null ? undefined : json['downwardMetrics'],
        'emptyDisk': json['emptyDisk'] == null ? undefined : V1EmptyDiskSourceFromJSON(json['emptyDisk']),
        'ephemeral': json['ephemeral'] == null ? undefined : V1EphemeralVolumeSourceFromJSON(json['ephemeral']),
        'hostDisk': json['hostDisk'] == null ? undefined : V1HostDiskFromJSON(json['hostDisk']),
        'memoryDump': json['memoryDump'] == null ? undefined : V1MemoryDumpVolumeSourceFromJSON(json['memoryDump']),
        'name': json['name'],
        'persistentVolumeClaim': json['persistentVolumeClaim'] == null ? undefined : V1PersistentVolumeClaimVolumeSourceFromJSON(json['persistentVolumeClaim']),
        'secret': json['secret'] == null ? undefined : V1SecretVolumeSourceFromJSON(json['secret']),
        'serviceAccount': json['serviceAccount'] == null ? undefined : V1ServiceAccountVolumeSourceFromJSON(json['serviceAccount']),
        'sysprep': json['sysprep'] == null ? undefined : V1SysprepSourceFromJSON(json['sysprep']),
    };
}

export function V1VolumeToJSON(json: any): V1Volume {
    return V1VolumeToJSONTyped(json, false);
}

export function V1VolumeToJSONTyped(value?: V1Volume | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'cloudInitConfigDrive': V1CloudInitConfigDriveSourceToJSON(value['cloudInitConfigDrive']),
        'cloudInitNoCloud': V1CloudInitNoCloudSourceToJSON(value['cloudInitNoCloud']),
        'configMap': V1ConfigMapVolumeSourceToJSON(value['configMap']),
        'containerDisk': V1ContainerDiskSourceToJSON(value['containerDisk']),
        'dataVolume': V1DataVolumeSourceToJSON(value['dataVolume']),
        'downwardAPI': V1DownwardAPIVolumeSourceToJSON(value['downwardAPI']),
        'downwardMetrics': value['downwardMetrics'],
        'emptyDisk': V1EmptyDiskSourceToJSON(value['emptyDisk']),
        'ephemeral': V1EphemeralVolumeSourceToJSON(value['ephemeral']),
        'hostDisk': V1HostDiskToJSON(value['hostDisk']),
        'memoryDump': V1MemoryDumpVolumeSourceToJSON(value['memoryDump']),
        'name': value['name'],
        'persistentVolumeClaim': V1PersistentVolumeClaimVolumeSourceToJSON(value['persistentVolumeClaim']),
        'secret': V1SecretVolumeSourceToJSON(value['secret']),
        'serviceAccount': V1ServiceAccountVolumeSourceToJSON(value['serviceAccount']),
        'sysprep': V1SysprepSourceToJSON(value['sysprep']),
    };
}

