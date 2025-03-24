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
/**
 * 
 * @export
 * @interface V1NUMA
 */
export interface V1NUMA {
    /**
     * NUMAGuestMappingPassthrough instructs kubevirt to model numa topology which is compatible with the CPU pinning on the guest. This will result in a subset of the node numa topology being passed through, ensuring that virtual numa nodes and their memory never cross boundaries coming from the node numa mapping.
     * @type {object}
     * @memberof V1NUMA
     */
    guestMappingPassthrough?: object;
}

/**
 * Check if a given object implements the V1NUMA interface.
 */
export function instanceOfV1NUMA(value: object): value is V1NUMA {
    return true;
}

export function V1NUMAFromJSON(json: any): V1NUMA {
    return V1NUMAFromJSONTyped(json, false);
}

export function V1NUMAFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1NUMA {
    if (json == null) {
        return json;
    }
    return {
        
        'guestMappingPassthrough': json['guestMappingPassthrough'] == null ? undefined : json['guestMappingPassthrough'],
    };
}

export function V1NUMAToJSON(json: any): V1NUMA {
    return V1NUMAToJSONTyped(json, false);
}

export function V1NUMAToJSONTyped(value?: V1NUMA | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'guestMappingPassthrough': value['guestMappingPassthrough'],
    };
}

