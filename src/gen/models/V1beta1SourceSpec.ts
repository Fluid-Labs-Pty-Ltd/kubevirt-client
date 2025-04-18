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

import { V1beta1VirtualMachine } from '../models/V1beta1VirtualMachine.js';
import { HttpFile } from '../http/http.js';

/**
* SourceSpec contains the appropriate spec for the resource being snapshotted
*/
export class V1beta1SourceSpec {
    'virtualMachine'?: V1beta1VirtualMachine;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "virtualMachine",
            "baseName": "virtualMachine",
            "type": "V1beta1VirtualMachine",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1beta1SourceSpec.attributeTypeMap;
    }

    public constructor() {
    }
}
