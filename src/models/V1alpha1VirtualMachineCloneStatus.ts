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

import { V1alpha1Condition } from '../models/V1alpha1Condition.js';
import { HttpFile } from '../http/http.js';

export class V1alpha1VirtualMachineCloneStatus {
    'conditions'?: Array<V1alpha1Condition>;
    /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
    'creationTime'?: string;
    'phase'?: string;
    'restoreName'?: string;
    'snapshotName'?: string;
    'targetName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1alpha1Condition>",
            "format": ""
        },
        {
            "name": "creationTime",
            "baseName": "creationTime",
            "type": "string",
            "format": "date-time"
        },
        {
            "name": "phase",
            "baseName": "phase",
            "type": "string",
            "format": ""
        },
        {
            "name": "restoreName",
            "baseName": "restoreName",
            "type": "string",
            "format": ""
        },
        {
            "name": "snapshotName",
            "baseName": "snapshotName",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetName",
            "baseName": "targetName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1VirtualMachineCloneStatus.attributeTypeMap;
    }

    public constructor() {
    }
}
