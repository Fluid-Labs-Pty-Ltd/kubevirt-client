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
import type { V1AccessCredentialSecretSource } from './V1AccessCredentialSecretSource';
import {
    V1AccessCredentialSecretSourceFromJSON,
    V1AccessCredentialSecretSourceFromJSONTyped,
    V1AccessCredentialSecretSourceToJSON,
    V1AccessCredentialSecretSourceToJSONTyped,
} from './V1AccessCredentialSecretSource';

/**
 * UserPasswordAccessCredentialSource represents where to retrieve the user password credentials Only one of its members may be specified.
 * @export
 * @interface V1UserPasswordAccessCredentialSource
 */
export interface V1UserPasswordAccessCredentialSource {
    /**
     * 
     * @type {V1AccessCredentialSecretSource}
     * @memberof V1UserPasswordAccessCredentialSource
     */
    secret?: V1AccessCredentialSecretSource;
}

/**
 * Check if a given object implements the V1UserPasswordAccessCredentialSource interface.
 */
export function instanceOfV1UserPasswordAccessCredentialSource(value: object): value is V1UserPasswordAccessCredentialSource {
    return true;
}

export function V1UserPasswordAccessCredentialSourceFromJSON(json: any): V1UserPasswordAccessCredentialSource {
    return V1UserPasswordAccessCredentialSourceFromJSONTyped(json, false);
}

export function V1UserPasswordAccessCredentialSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UserPasswordAccessCredentialSource {
    if (json == null) {
        return json;
    }
    return {
        
        'secret': json['secret'] == null ? undefined : V1AccessCredentialSecretSourceFromJSON(json['secret']),
    };
}

export function V1UserPasswordAccessCredentialSourceToJSON(json: any): V1UserPasswordAccessCredentialSource {
    return V1UserPasswordAccessCredentialSourceToJSONTyped(json, false);
}

export function V1UserPasswordAccessCredentialSourceToJSONTyped(value?: V1UserPasswordAccessCredentialSource | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'secret': V1AccessCredentialSecretSourceToJSON(value['secret']),
    };
}

