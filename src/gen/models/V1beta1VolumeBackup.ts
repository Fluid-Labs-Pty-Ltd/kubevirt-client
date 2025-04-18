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
import { HttpFile } from '../http/http.js';

/**
* VolumeBackup contains the data neeed to restore a PVC
*/
export class V1beta1VolumeBackup {
    'persistentVolumeClaim': V1beta1PersistentVolumeClaim;
    'volumeName': string;
    'volumeSnapshotName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "persistentVolumeClaim",
            "baseName": "persistentVolumeClaim",
            "type": "V1beta1PersistentVolumeClaim",
            "format": ""
        },
        {
            "name": "volumeName",
            "baseName": "volumeName",
            "type": "string",
            "format": ""
        },
        {
            "name": "volumeSnapshotName",
            "baseName": "volumeSnapshotName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1beta1VolumeBackup.attributeTypeMap;
    }

    public constructor() {
    }
}
