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
import { V1AddVolumeOptions } from '../models/V1AddVolumeOptions.js';
import { V1RemoveVolumeOptions } from '../models/V1RemoveVolumeOptions.js';
export declare class V1VirtualMachineVolumeRequest {
    'addVolumeOptions'?: V1AddVolumeOptions;
    'removeVolumeOptions'?: V1RemoveVolumeOptions;
    static readonly discriminator: string | undefined;
    static readonly mapping: {
        [index: string]: string;
    } | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
//# sourceMappingURL=V1VirtualMachineVolumeRequest.d.ts.map