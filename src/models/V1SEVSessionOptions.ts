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
 * SEVSessionOptions is used to provide SEV session parameters.
 * @export
 * @interface V1SEVSessionOptions
 */
export interface V1SEVSessionOptions {
    /**
     * Base64 encoded guest owner's Diffie-Hellman key.
     * @type {string}
     * @memberof V1SEVSessionOptions
     */
    dhCert?: string;
    /**
     * Base64 encoded session blob.
     * @type {string}
     * @memberof V1SEVSessionOptions
     */
    session?: string;
}

/**
 * Check if a given object implements the V1SEVSessionOptions interface.
 */
export function instanceOfV1SEVSessionOptions(value: object): value is V1SEVSessionOptions {
    return true;
}

export function V1SEVSessionOptionsFromJSON(json: any): V1SEVSessionOptions {
    return V1SEVSessionOptionsFromJSONTyped(json, false);
}

export function V1SEVSessionOptionsFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1SEVSessionOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'dhCert': json['dhCert'] == null ? undefined : json['dhCert'],
        'session': json['session'] == null ? undefined : json['session'],
    };
}

export function V1SEVSessionOptionsToJSON(json: any): V1SEVSessionOptions {
    return V1SEVSessionOptionsToJSONTyped(json, false);
}

export function V1SEVSessionOptionsToJSONTyped(value?: V1SEVSessionOptions | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'dhCert': value['dhCert'],
        'session': value['session'],
    };
}

