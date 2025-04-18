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

export class V1USBSelector {
    'product': string;
    'vendor': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "product",
            "baseName": "product",
            "type": "string",
            "format": ""
        },
        {
            "name": "vendor",
            "baseName": "vendor",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1USBSelector.attributeTypeMap;
    }

    public constructor() {
    }
}
