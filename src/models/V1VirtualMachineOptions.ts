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
* VirtualMachineOptions holds the cluster level information regarding the virtual machine.
*/
export class V1VirtualMachineOptions {
    'disableFreePageReporting'?: any;
    'disableSerialConsoleLog'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "disableFreePageReporting",
            "baseName": "disableFreePageReporting",
            "type": "any",
            "format": ""
        },
        {
            "name": "disableSerialConsoleLog",
            "baseName": "disableSerialConsoleLog",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1VirtualMachineOptions.attributeTypeMap;
    }

    public constructor() {
    }
}
