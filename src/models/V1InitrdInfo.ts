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
 * InitrdInfo show info about the initrd file
 * @export
 * @interface V1InitrdInfo
 */
export interface V1InitrdInfo {
    /**
     * Checksum is the checksum of the initrd file
     * @type {number}
     * @memberof V1InitrdInfo
     */
    checksum?: number;
}

/**
 * Check if a given object implements the V1InitrdInfo interface.
 */
export function instanceOfV1InitrdInfo(value: object): value is V1InitrdInfo {
    return true;
}

export function V1InitrdInfoFromJSON(json: any): V1InitrdInfo {
    return V1InitrdInfoFromJSONTyped(json, false);
}

export function V1InitrdInfoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1InitrdInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'checksum': json['checksum'] == null ? undefined : json['checksum'],
    };
}

export function V1InitrdInfoToJSON(json: any): V1InitrdInfo {
    return V1InitrdInfoToJSONTyped(json, false);
}

export function V1InitrdInfoToJSONTyped(value?: V1InitrdInfo | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'checksum': value['checksum'],
    };
}

