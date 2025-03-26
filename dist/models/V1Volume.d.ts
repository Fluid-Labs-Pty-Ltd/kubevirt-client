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
import { V1CloudInitConfigDriveSource } from '../models/V1CloudInitConfigDriveSource.js';
import { V1CloudInitNoCloudSource } from '../models/V1CloudInitNoCloudSource.js';
import { V1ConfigMapVolumeSource } from '../models/V1ConfigMapVolumeSource.js';
import { V1ContainerDiskSource } from '../models/V1ContainerDiskSource.js';
import { V1DataVolumeSource } from '../models/V1DataVolumeSource.js';
import { V1DownwardAPIVolumeSource } from '../models/V1DownwardAPIVolumeSource.js';
import { V1EmptyDiskSource } from '../models/V1EmptyDiskSource.js';
import { V1EphemeralVolumeSource } from '../models/V1EphemeralVolumeSource.js';
import { V1HostDisk } from '../models/V1HostDisk.js';
import { V1MemoryDumpVolumeSource } from '../models/V1MemoryDumpVolumeSource.js';
import { V1PersistentVolumeClaimVolumeSource } from '../models/V1PersistentVolumeClaimVolumeSource.js';
import { V1SecretVolumeSource } from '../models/V1SecretVolumeSource.js';
import { V1ServiceAccountVolumeSource } from '../models/V1ServiceAccountVolumeSource.js';
import { V1SysprepSource } from '../models/V1SysprepSource.js';
/**
* Volume represents a named volume in a vmi.
*/
export declare class V1Volume {
    'cloudInitConfigDrive'?: V1CloudInitConfigDriveSource;
    'cloudInitNoCloud'?: V1CloudInitNoCloudSource;
    'configMap'?: V1ConfigMapVolumeSource;
    'containerDisk'?: V1ContainerDiskSource;
    'dataVolume'?: V1DataVolumeSource;
    'downwardAPI'?: V1DownwardAPIVolumeSource;
    /**
    * DownwardMetricsVolumeSource adds a very small disk to VMIs which contains a limited view of host and guest metrics. The disk content is compatible with vhostmd (https://github.com/vhostmd/vhostmd) and vm-dump-metrics.
    */
    'downwardMetrics'?: any;
    'emptyDisk'?: V1EmptyDiskSource;
    'ephemeral'?: V1EphemeralVolumeSource;
    'hostDisk'?: V1HostDisk;
    'memoryDump'?: V1MemoryDumpVolumeSource;
    /**
    * Volume\'s name. Must be a DNS_LABEL and unique within the vmi. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
    */
    'name': string;
    'persistentVolumeClaim'?: V1PersistentVolumeClaimVolumeSource;
    'secret'?: V1SecretVolumeSource;
    'serviceAccount'?: V1ServiceAccountVolumeSource;
    'sysprep'?: V1SysprepSource;
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
//# sourceMappingURL=V1Volume.d.ts.map