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

import { V1beta1Error } from '../models/V1beta1Error.js';
import { HttpFile } from '../http/http.js';

/**
* VolumeSnapshotStatus is the status of a VolumeSnapshot
*/
export class V1beta1VolumeSnapshotStatus {
    /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
    'creationTime'?: string;
    'error'?: V1beta1Error;
    'readyToUse'?: boolean;
    'volumeSnapshotName': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "creationTime",
            "baseName": "creationTime",
            "type": "string",
            "format": "date-time"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "V1beta1Error",
            "format": ""
        },
        {
            "name": "readyToUse",
            "baseName": "readyToUse",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "volumeSnapshotName",
            "baseName": "volumeSnapshotName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1beta1VolumeSnapshotStatus.attributeTypeMap;
    }

    public constructor() {
    }
}
