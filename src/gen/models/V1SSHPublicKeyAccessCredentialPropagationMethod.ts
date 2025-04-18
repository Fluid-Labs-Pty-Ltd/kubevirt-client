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

import { V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagation } from '../models/V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagation.js';
import { HttpFile } from '../http/http.js';

/**
* SSHPublicKeyAccessCredentialPropagationMethod represents the method used to inject a ssh public key into the vm guest. Only one of its members may be specified.
*/
export class V1SSHPublicKeyAccessCredentialPropagationMethod {
    'configDrive'?: any;
    'noCloud'?: any;
    'qemuGuestAgent'?: V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagation;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "configDrive",
            "baseName": "configDrive",
            "type": "any",
            "format": ""
        },
        {
            "name": "noCloud",
            "baseName": "noCloud",
            "type": "any",
            "format": ""
        },
        {
            "name": "qemuGuestAgent",
            "baseName": "qemuGuestAgent",
            "type": "V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagation",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1SSHPublicKeyAccessCredentialPropagationMethod.attributeTypeMap;
    }

    public constructor() {
    }
}
