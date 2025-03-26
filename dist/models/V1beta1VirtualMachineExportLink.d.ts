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
import { V1beta1VirtualMachineExportManifest } from '../models/V1beta1VirtualMachineExportManifest.js';
import { V1beta1VirtualMachineExportVolume } from '../models/V1beta1VirtualMachineExportVolume.js';
/**
* VirtualMachineExportLink contains a list of volumes available for export, as well as the URLs to obtain these volumes
*/
export declare class V1beta1VirtualMachineExportLink {
    /**
    * Cert is the public CA certificate base64 encoded
    */
    'cert': string;
    /**
    * Manifests is a list of available manifests for the export
    */
    'manifests'?: Array<V1beta1VirtualMachineExportManifest>;
    /**
    * Volumes is a list of available volumes to export
    */
    'volumes'?: Array<V1beta1VirtualMachineExportVolume>;
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
//# sourceMappingURL=V1beta1VirtualMachineExportLink.d.ts.map