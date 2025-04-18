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
* KernelInfo show info about the kernel image
*/
export class V1KernelInfo {
    /**
    * Checksum is the checksum of the kernel image
    */
    'checksum'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "checksum",
            "baseName": "checksum",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return V1KernelInfo.attributeTypeMap;
    }

    public constructor() {
    }
}
