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

import { K8sIoApiCoreV1TypedLocalObjectReference } from '../models/K8sIoApiCoreV1TypedLocalObjectReference.js';
import { HttpFile } from '../http/http.js';

/**
* VirtualMachineRestoreSpec is the spec for a VirtualMachineRestoreresource
*/
export class V1beta1VirtualMachineRestoreSpec {
    /**
    * If the target for the restore does not exist, it will be created. Patches holds JSON patches that would be applied to the target manifest before it\'s created. Patches should fit the target\'s Kind.  Example for a patch: {\"op\": \"replace\", \"path\": \"/metadata/name\", \"value\": \"new-vm-name\"}
    */
    'patches'?: Array<string>;
    'target': K8sIoApiCoreV1TypedLocalObjectReference;
    'virtualMachineSnapshotName': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "patches",
            "baseName": "patches",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "target",
            "baseName": "target",
            "type": "K8sIoApiCoreV1TypedLocalObjectReference",
            "format": ""
        },
        {
            "name": "virtualMachineSnapshotName",
            "baseName": "virtualMachineSnapshotName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1beta1VirtualMachineRestoreSpec.attributeTypeMap;
    }

    public constructor() {
    }
}
