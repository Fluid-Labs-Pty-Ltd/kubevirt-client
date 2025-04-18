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

import { V1VirtualMachineInstanceFileSystemDisk } from '../models/V1VirtualMachineInstanceFileSystemDisk.js';
import { HttpFile } from '../http/http.js';

/**
* VirtualMachineInstanceFileSystem represents guest os disk
*/
export class V1VirtualMachineInstanceFileSystem {
    'disk'?: Array<V1VirtualMachineInstanceFileSystemDisk>;
    'diskName': string;
    'fileSystemType': string;
    'mountPoint': string;
    'totalBytes': number;
    'usedBytes': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "disk",
            "baseName": "disk",
            "type": "Array<V1VirtualMachineInstanceFileSystemDisk>",
            "format": ""
        },
        {
            "name": "diskName",
            "baseName": "diskName",
            "type": "string",
            "format": ""
        },
        {
            "name": "fileSystemType",
            "baseName": "fileSystemType",
            "type": "string",
            "format": ""
        },
        {
            "name": "mountPoint",
            "baseName": "mountPoint",
            "type": "string",
            "format": ""
        },
        {
            "name": "totalBytes",
            "baseName": "totalBytes",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "usedBytes",
            "baseName": "usedBytes",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return V1VirtualMachineInstanceFileSystem.attributeTypeMap;
    }

    public constructor() {
    }
}
