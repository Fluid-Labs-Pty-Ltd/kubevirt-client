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
import type { V1UserPasswordAccessCredential } from './V1UserPasswordAccessCredential.js';
import {
    V1UserPasswordAccessCredentialFromJSON,
    V1UserPasswordAccessCredentialFromJSONTyped,
    V1UserPasswordAccessCredentialToJSON,
    V1UserPasswordAccessCredentialToJSONTyped,
} from './V1UserPasswordAccessCredential.js';
import type { V1SSHPublicKeyAccessCredential } from './V1SSHPublicKeyAccessCredential.js';
import {
    V1SSHPublicKeyAccessCredentialFromJSON,
    V1SSHPublicKeyAccessCredentialFromJSONTyped,
    V1SSHPublicKeyAccessCredentialToJSON,
    V1SSHPublicKeyAccessCredentialToJSONTyped,
} from './V1SSHPublicKeyAccessCredential.js';

/**
 * AccessCredential represents a credential source that can be used to authorize remote access to the vm guest Only one of its members may be specified.
 * @export
 * @interface V1AccessCredential
 */
export interface V1AccessCredential {
    /**
     * 
     * @type {V1SSHPublicKeyAccessCredential}
     * @memberof V1AccessCredential
     */
    sshPublicKey?: V1SSHPublicKeyAccessCredential;
    /**
     * 
     * @type {V1UserPasswordAccessCredential}
     * @memberof V1AccessCredential
     */
    userPassword?: V1UserPasswordAccessCredential;
}

/**
 * Check if a given object implements the V1AccessCredential interface.
 */
export function instanceOfV1AccessCredential(value: object): value is V1AccessCredential {
    return true;
}

export function V1AccessCredentialFromJSON(json: any): V1AccessCredential {
    return V1AccessCredentialFromJSONTyped(json, false);
}

export function V1AccessCredentialFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1AccessCredential {
    if (json == null) {
        return json;
    }
    return {
        
        'sshPublicKey': json['sshPublicKey'] == null ? undefined : V1SSHPublicKeyAccessCredentialFromJSON(json['sshPublicKey']),
        'userPassword': json['userPassword'] == null ? undefined : V1UserPasswordAccessCredentialFromJSON(json['userPassword']),
    };
}

export function V1AccessCredentialToJSON(json: any): V1AccessCredential {
    return V1AccessCredentialToJSONTyped(json, false);
}

export function V1AccessCredentialToJSONTyped(value?: V1AccessCredential | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'sshPublicKey': V1SSHPublicKeyAccessCredentialToJSON(value['sshPublicKey']),
        'userPassword': V1UserPasswordAccessCredentialToJSON(value['userPassword']),
    };
}

