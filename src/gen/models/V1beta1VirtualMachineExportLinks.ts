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

import { V1beta1VirtualMachineExportLink } from '../models/V1beta1VirtualMachineExportLink.js';
import { HttpFile } from '../http/http.js';

/**
* VirtualMachineExportLinks contains the links that point the exported VM resources
*/
export class V1beta1VirtualMachineExportLinks {
    'external'?: V1beta1VirtualMachineExportLink;
    'internal'?: V1beta1VirtualMachineExportLink;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "external",
            "baseName": "external",
            "type": "V1beta1VirtualMachineExportLink",
            "format": ""
        },
        {
            "name": "internal",
            "baseName": "internal",
            "type": "V1beta1VirtualMachineExportLink",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1beta1VirtualMachineExportLinks.attributeTypeMap;
    }

    public constructor() {
    }
}
