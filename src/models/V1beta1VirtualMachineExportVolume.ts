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

import { mapValues } from '../runtime';
import type { V1beta1VirtualMachineExportVolumeFormat } from './V1beta1VirtualMachineExportVolumeFormat';
import {
    V1beta1VirtualMachineExportVolumeFormatFromJSON,
    V1beta1VirtualMachineExportVolumeFormatFromJSONTyped,
    V1beta1VirtualMachineExportVolumeFormatToJSON,
    V1beta1VirtualMachineExportVolumeFormatToJSONTyped,
} from './V1beta1VirtualMachineExportVolumeFormat';

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
export function instanceOfV1beta1VirtualMachineExportVolume(value: object): value is V1beta1VirtualMachineExportVolume {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function V1beta1VirtualMachineExportVolumeFromJSON(json: any): V1beta1VirtualMachineExportVolume {
    return V1beta1VirtualMachineExportVolumeFromJSONTyped(json, false);
}

export function V1beta1VirtualMachineExportVolumeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1VirtualMachineExportVolume {
    if (json == null) {
        return json;
    }
    return {
        
        'formats': json['formats'] == null ? undefined : ((json['formats'] as Array<any>).map(V1beta1VirtualMachineExportVolumeFormatFromJSON)),
        'name': json['name'],
    };
}

export function V1beta1VirtualMachineExportVolumeToJSON(json: any): V1beta1VirtualMachineExportVolume {
    return V1beta1VirtualMachineExportVolumeToJSONTyped(json, false);
}

export function V1beta1VirtualMachineExportVolumeToJSONTyped(value?: V1beta1VirtualMachineExportVolume | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'formats': value['formats'] == null ? undefined : ((value['formats'] as Array<any>).map(V1beta1VirtualMachineExportVolumeFormatToJSON)),
        'name': value['name'],
    };
}

