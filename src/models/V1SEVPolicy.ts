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
 * 
 * @export
 * @interface V1SEVPolicy
 */
export interface V1SEVPolicy {
    /**
     * SEV-ES is required. Defaults to false.
     * @type {boolean}
     * @memberof V1SEVPolicy
     */
    encryptedState?: boolean;
}

/**
 * Check if a given object implements the V1SEVPolicy interface.
 */
export function instanceOfV1SEVPolicy(value: object): value is V1SEVPolicy {
    return true;
}

export function V1SEVPolicyFromJSON(json: any): V1SEVPolicy {
    return V1SEVPolicyFromJSONTyped(json, false);
}

export function V1SEVPolicyFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1SEVPolicy {
    if (json == null) {
        return json;
    }
    return {
        
        'encryptedState': json['encryptedState'] == null ? undefined : json['encryptedState'],
    };
}

export function V1SEVPolicyToJSON(json: any): V1SEVPolicy {
    return V1SEVPolicyToJSONTyped(json, false);
}

export function V1SEVPolicyToJSONTyped(value?: V1SEVPolicy | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'encryptedState': value['encryptedState'],
    };
}

