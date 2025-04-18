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
import { V1beta1VirtualMachineExportVolumeFormat } from '../models/V1beta1VirtualMachineExportVolumeFormat.js';
/**
* VirtualMachineExportVolume contains the name and available formats for the exported volume
*/
export declare class V1beta1VirtualMachineExportVolume {
    'formats'?: Array<V1beta1VirtualMachineExportVolumeFormat>;
    /**
    * Name is the name of the exported volume
    */
    'name': string;
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
//# sourceMappingURL=V1beta1VirtualMachineExportVolume.d.ts.map