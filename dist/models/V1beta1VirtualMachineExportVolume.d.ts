/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { V1beta1VirtualMachineExportVolumeFormat } from './V1beta1VirtualMachineExportVolumeFormat.js';
/**
 * VirtualMachineExportVolume contains the name and available formats for the exported volume
 * @export
 * @interface V1beta1VirtualMachineExportVolume
 */
export interface V1beta1VirtualMachineExportVolume {
    /**
     *
     * @type {Array<V1beta1VirtualMachineExportVolumeFormat>}
     * @memberof V1beta1VirtualMachineExportVolume
     */
    formats?: Array<V1beta1VirtualMachineExportVolumeFormat>;
    /**
     * Name is the name of the exported volume
     * @type {string}
     * @memberof V1beta1VirtualMachineExportVolume
     */
    name: string;
}
/**
 * Check if a given object implements the V1beta1VirtualMachineExportVolume interface.
 */
export declare function instanceOfV1beta1VirtualMachineExportVolume(value: object): value is V1beta1VirtualMachineExportVolume;
export declare function V1beta1VirtualMachineExportVolumeFromJSON(json: any): V1beta1VirtualMachineExportVolume;
export declare function V1beta1VirtualMachineExportVolumeFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1beta1VirtualMachineExportVolume;
export declare function V1beta1VirtualMachineExportVolumeToJSON(json: any): V1beta1VirtualMachineExportVolume;
export declare function V1beta1VirtualMachineExportVolumeToJSONTyped(value?: V1beta1VirtualMachineExportVolume | null, _ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1beta1VirtualMachineExportVolume.d.ts.map