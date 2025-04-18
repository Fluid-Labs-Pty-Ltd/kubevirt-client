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

import { V1VirtualMachineInstanceProfile } from '../models/V1VirtualMachineInstanceProfile.js';
import { HttpFile } from '../http/http.js';

/**
* SeccompConfiguration holds Seccomp configuration for Kubevirt components
*/
export class V1SeccompConfiguration {
    'virtualMachineInstanceProfile'?: V1VirtualMachineInstanceProfile;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "virtualMachineInstanceProfile",
            "baseName": "virtualMachineInstanceProfile",
            "type": "V1VirtualMachineInstanceProfile",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1SeccompConfiguration.attributeTypeMap;
    }

    public constructor() {
    }
}
