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
 * VirtualMachineExportManifest contains the type and URL of the exported manifest
 * @export
 * @interface V1beta1VirtualMachineExportManifest
 */
export interface V1beta1VirtualMachineExportManifest {
    /**
     * Type is the type of manifest returned
     * @type {string}
     * @memberof V1beta1VirtualMachineExportManifest
     */
    type: string;
    /**
     * Url is the url of the endpoint that returns the manifest
     * @type {string}
     * @memberof V1beta1VirtualMachineExportManifest
     */
    url: string;
}

/**
 * Check if a given object implements the V1beta1VirtualMachineExportManifest interface.
 */
export function instanceOfV1beta1VirtualMachineExportManifest(value: object): value is V1beta1VirtualMachineExportManifest {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('url' in value) || value['url'] === undefined) return false;
    return true;
}

export function V1beta1VirtualMachineExportManifestFromJSON(json: any): V1beta1VirtualMachineExportManifest {
    return V1beta1VirtualMachineExportManifestFromJSONTyped(json, false);
}

export function V1beta1VirtualMachineExportManifestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1VirtualMachineExportManifest {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'url': json['url'],
    };
}

export function V1beta1VirtualMachineExportManifestToJSON(json: any): V1beta1VirtualMachineExportManifest {
    return V1beta1VirtualMachineExportManifestToJSONTyped(json, false);
}

export function V1beta1VirtualMachineExportManifestToJSONTyped(value?: V1beta1VirtualMachineExportManifest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'url': value['url'],
    };
}

