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
 * CustomBlockSize represents the desired logical and physical block size for a VM disk.
 * @export
 * @interface V1CustomBlockSize
 */
export interface V1CustomBlockSize {
    /**
     * 
     * @type {number}
     * @memberof V1CustomBlockSize
     */
    logical: number;
    /**
     * 
     * @type {number}
     * @memberof V1CustomBlockSize
     */
    physical: number;
}

/**
 * Check if a given object implements the V1CustomBlockSize interface.
 */
export function instanceOfV1CustomBlockSize(value: object): value is V1CustomBlockSize {
    if (!('logical' in value) || value['logical'] === undefined) return false;
    if (!('physical' in value) || value['physical'] === undefined) return false;
    return true;
}

export function V1CustomBlockSizeFromJSON(json: any): V1CustomBlockSize {
    return V1CustomBlockSizeFromJSONTyped(json, false);
}

export function V1CustomBlockSizeFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1CustomBlockSize {
    if (json == null) {
        return json;
    }
    return {
        
        'logical': json['logical'],
        'physical': json['physical'],
    };
}

export function V1CustomBlockSizeToJSON(json: any): V1CustomBlockSize {
    return V1CustomBlockSizeToJSONTyped(json, false);
}

export function V1CustomBlockSizeToJSONTyped(value?: V1CustomBlockSize | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'logical': value['logical'],
        'physical': value['physical'],
    };
}

