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
* DHCPExtraOptions defines Extra DHCP options for a VM.
*/
export class V1DHCPPrivateOptions {
    /**
    * Option is an Integer value from 224-254 Required.
    */
    'option': number;
    /**
    * Value is a String value for the Option provided Required.
    */
    'value': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "option",
            "baseName": "option",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1DHCPPrivateOptions.attributeTypeMap;
    }

    public constructor() {
    }
}
