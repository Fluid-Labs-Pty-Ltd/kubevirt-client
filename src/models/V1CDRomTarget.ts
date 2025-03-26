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

import { HttpFile } from '../http/http.js';

export class V1CDRomTarget {
    /**
    * Bus indicates the type of disk device to emulate. supported values: virtio, sata, scsi.
    */
    'bus'?: string;
    /**
    * ReadOnly. Defaults to true.
    */
    'readonly'?: boolean;
    /**
    * Tray indicates if the tray of the device is open or closed. Allowed values are \"open\" and \"closed\". Defaults to closed.
    */
    'tray'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bus",
            "baseName": "bus",
            "type": "string",
            "format": ""
        },
        {
            "name": "readonly",
            "baseName": "readonly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "tray",
            "baseName": "tray",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1CDRomTarget.attributeTypeMap;
    }

    public constructor() {
    }
}
