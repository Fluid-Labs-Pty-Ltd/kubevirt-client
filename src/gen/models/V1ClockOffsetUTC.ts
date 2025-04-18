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
* UTC sets the guest clock to UTC on each boot.
*/
export class V1ClockOffsetUTC {
    /**
    * OffsetSeconds specifies an offset in seconds, relative to UTC. If set, guest changes to the clock will be kept during reboots and not reset.
    */
    'offsetSeconds'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "offsetSeconds",
            "baseName": "offsetSeconds",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return V1ClockOffsetUTC.attributeTypeMap;
    }

    public constructor() {
    }
}
