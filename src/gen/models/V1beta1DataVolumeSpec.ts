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

import { K8sIoApiCoreV1PersistentVolumeClaimSpec } from '../models/K8sIoApiCoreV1PersistentVolumeClaimSpec.js';
import { V1beta1DataVolumeCheckpoint } from '../models/V1beta1DataVolumeCheckpoint.js';
import { V1beta1DataVolumeSource } from '../models/V1beta1DataVolumeSource.js';
import { V1beta1DataVolumeSourceRef } from '../models/V1beta1DataVolumeSourceRef.js';
import { V1beta1StorageSpec } from '../models/V1beta1StorageSpec.js';
import { HttpFile } from '../http/http.js';

/**
* DataVolumeSpec defines the DataVolume type specification
*/
export class V1beta1DataVolumeSpec {
    /**
    * Checkpoints is a list of DataVolumeCheckpoints, representing stages in a multistage import.
    */
    'checkpoints'?: Array<V1beta1DataVolumeCheckpoint>;
    /**
    * DataVolumeContentType options: \"kubevirt\", \"archive\"
    */
    'contentType'?: string;
    /**
    * FinalCheckpoint indicates whether the current DataVolumeCheckpoint is the final checkpoint.
    */
    'finalCheckpoint'?: boolean;
    /**
    * Preallocation controls whether storage for DataVolumes should be allocated in advance.
    */
    'preallocation'?: boolean;
    /**
    * PriorityClassName for Importer, Cloner and Uploader pod
    */
    'priorityClassName'?: string;
    'pvc'?: K8sIoApiCoreV1PersistentVolumeClaimSpec;
    'source'?: V1beta1DataVolumeSource;
    'sourceRef'?: V1beta1DataVolumeSourceRef;
    'storage'?: V1beta1StorageSpec;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "checkpoints",
            "baseName": "checkpoints",
            "type": "Array<V1beta1DataVolumeCheckpoint>",
            "format": ""
        },
        {
            "name": "contentType",
            "baseName": "contentType",
            "type": "string",
            "format": ""
        },
        {
            "name": "finalCheckpoint",
            "baseName": "finalCheckpoint",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "preallocation",
            "baseName": "preallocation",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "priorityClassName",
            "baseName": "priorityClassName",
            "type": "string",
            "format": ""
        },
        {
            "name": "pvc",
            "baseName": "pvc",
            "type": "K8sIoApiCoreV1PersistentVolumeClaimSpec",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "V1beta1DataVolumeSource",
            "format": ""
        },
        {
            "name": "sourceRef",
            "baseName": "sourceRef",
            "type": "V1beta1DataVolumeSourceRef",
            "format": ""
        },
        {
            "name": "storage",
            "baseName": "storage",
            "type": "V1beta1StorageSpec",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1beta1DataVolumeSpec.attributeTypeMap;
    }

    public constructor() {
    }
}
