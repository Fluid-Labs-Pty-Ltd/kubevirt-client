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

/**
* Hugepages allow to use hugepages for the VirtualMachineInstance instead of regular memory.
*/
export class V1Hugepages {
    /**
    * PageSize specifies the hugepage size, for x86_64 architecture valid values are 1Gi and 2Mi.
    */
    'pageSize'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pageSize",
            "baseName": "pageSize",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1Hugepages.attributeTypeMap;
    }

    public constructor() {
    }
}
