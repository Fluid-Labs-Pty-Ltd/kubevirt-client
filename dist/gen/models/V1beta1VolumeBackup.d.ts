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
import { V1beta1PersistentVolumeClaim } from '../models/V1beta1PersistentVolumeClaim.js';
/**
* VolumeBackup contains the data neeed to restore a PVC
*/
export declare class V1beta1VolumeBackup {
    'persistentVolumeClaim': V1beta1PersistentVolumeClaim;
    'volumeName': string;
    'volumeSnapshotName'?: string;
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
//# sourceMappingURL=V1beta1VolumeBackup.d.ts.map