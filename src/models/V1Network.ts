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

import { V1MultusNetwork } from '../models/V1MultusNetwork.js';
import { V1PodNetwork } from '../models/V1PodNetwork.js';
import { HttpFile } from '../http/http.js';

/**
* Network represents a network type and a resource that should be connected to the vm.
*/
export class V1Network {
    'multus'?: V1MultusNetwork;
    /**
    * Network name. Must be a DNS_LABEL and unique within the vm. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
    */
    'name': string;
    'pod'?: V1PodNetwork;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "multus",
            "baseName": "multus",
            "type": "V1MultusNetwork",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "pod",
            "baseName": "pod",
            "type": "V1PodNetwork",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1Network.attributeTypeMap;
    }

    public constructor() {
    }
}
