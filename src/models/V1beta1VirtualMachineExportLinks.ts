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
import type { V1beta1VirtualMachineExportLink } from './V1beta1VirtualMachineExportLink';
import {
    V1beta1VirtualMachineExportLinkFromJSON,
    V1beta1VirtualMachineExportLinkFromJSONTyped,
    V1beta1VirtualMachineExportLinkToJSON,
    V1beta1VirtualMachineExportLinkToJSONTyped,
} from './V1beta1VirtualMachineExportLink';

/**
 * VirtualMachineExportLinks contains the links that point the exported VM resources
 * @export
 * @interface V1beta1VirtualMachineExportLinks
 */
export interface V1beta1VirtualMachineExportLinks {
    /**
     * 
     * @type {V1beta1VirtualMachineExportLink}
     * @memberof V1beta1VirtualMachineExportLinks
     */
    external?: V1beta1VirtualMachineExportLink;
    /**
     * 
     * @type {V1beta1VirtualMachineExportLink}
     * @memberof V1beta1VirtualMachineExportLinks
     */
    internal?: V1beta1VirtualMachineExportLink;
}

/**
 * Check if a given object implements the V1beta1VirtualMachineExportLinks interface.
 */
export function instanceOfV1beta1VirtualMachineExportLinks(value: object): value is V1beta1VirtualMachineExportLinks {
    return true;
}

export function V1beta1VirtualMachineExportLinksFromJSON(json: any): V1beta1VirtualMachineExportLinks {
    return V1beta1VirtualMachineExportLinksFromJSONTyped(json, false);
}

export function V1beta1VirtualMachineExportLinksFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1beta1VirtualMachineExportLinks {
    if (json == null) {
        return json;
    }
    return {
        
        'external': json['external'] == null ? undefined : V1beta1VirtualMachineExportLinkFromJSON(json['external']),
        'internal': json['internal'] == null ? undefined : V1beta1VirtualMachineExportLinkFromJSON(json['internal']),
    };
}

export function V1beta1VirtualMachineExportLinksToJSON(json: any): V1beta1VirtualMachineExportLinks {
    return V1beta1VirtualMachineExportLinksToJSONTyped(json, false);
}

export function V1beta1VirtualMachineExportLinksToJSONTyped(value?: V1beta1VirtualMachineExportLinks | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'external': V1beta1VirtualMachineExportLinkToJSON(value['external']),
        'internal': V1beta1VirtualMachineExportLinkToJSON(value['internal']),
    };
}

