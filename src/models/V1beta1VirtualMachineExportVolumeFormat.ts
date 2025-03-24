/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime.js';
/**
 * VirtualMachineExportVolumeFormat contains the format type and URL to get the volume in that format
 * @export
 * @interface V1beta1VirtualMachineExportVolumeFormat
 */
export interface V1beta1VirtualMachineExportVolumeFormat {
    /**
     * Format is the format of the image at the specified URL
     * @type {string}
     * @memberof V1beta1VirtualMachineExportVolumeFormat
     */
    format: string;
    /**
     * Url is the url that contains the volume in the format specified
     * @type {string}
     * @memberof V1beta1VirtualMachineExportVolumeFormat
     */
    url: string;
}

/**
 * Check if a given object implements the V1beta1VirtualMachineExportVolumeFormat interface.
 */
export function instanceOfV1beta1VirtualMachineExportVolumeFormat(value: object): value is V1beta1VirtualMachineExportVolumeFormat {
    if (!('format' in value) || value['format'] === undefined) return false;
    if (!('url' in value) || value['url'] === undefined) return false;
    return true;
}

export function V1beta1VirtualMachineExportVolumeFormatFromJSON(json: any): V1beta1VirtualMachineExportVolumeFormat {
    return V1beta1VirtualMachineExportVolumeFormatFromJSONTyped(json, false);
}

export function V1beta1VirtualMachineExportVolumeFormatFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1beta1VirtualMachineExportVolumeFormat {
    if (json == null) {
        return json;
    }
    return {
        
        'format': json['format'],
        'url': json['url'],
    };
}

export function V1beta1VirtualMachineExportVolumeFormatToJSON(json: any): V1beta1VirtualMachineExportVolumeFormat {
    return V1beta1VirtualMachineExportVolumeFormatToJSONTyped(json, false);
}

export function V1beta1VirtualMachineExportVolumeFormatToJSONTyped(value?: V1beta1VirtualMachineExportVolumeFormat | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'format': value['format'],
        'url': value['url'],
    };
}

