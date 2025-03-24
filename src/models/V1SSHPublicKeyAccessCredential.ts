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
import type { V1SSHPublicKeyAccessCredentialPropagationMethod } from './V1SSHPublicKeyAccessCredentialPropagationMethod.js';
import {
    V1SSHPublicKeyAccessCredentialPropagationMethodFromJSON,
    V1SSHPublicKeyAccessCredentialPropagationMethodFromJSONTyped,
    V1SSHPublicKeyAccessCredentialPropagationMethodToJSON,
    V1SSHPublicKeyAccessCredentialPropagationMethodToJSONTyped,
} from './V1SSHPublicKeyAccessCredentialPropagationMethod.js';
import type { V1SSHPublicKeyAccessCredentialSource } from './V1SSHPublicKeyAccessCredentialSource.js';
import {
    V1SSHPublicKeyAccessCredentialSourceFromJSON,
    V1SSHPublicKeyAccessCredentialSourceFromJSONTyped,
    V1SSHPublicKeyAccessCredentialSourceToJSON,
    V1SSHPublicKeyAccessCredentialSourceToJSONTyped,
} from './V1SSHPublicKeyAccessCredentialSource.js';

/**
 * SSHPublicKeyAccessCredential represents a source and propagation method for injecting ssh public keys into a vm guest
 * @export
 * @interface V1SSHPublicKeyAccessCredential
 */
export interface V1SSHPublicKeyAccessCredential {
    /**
     * 
     * @type {V1SSHPublicKeyAccessCredentialPropagationMethod}
     * @memberof V1SSHPublicKeyAccessCredential
     */
    propagationMethod: V1SSHPublicKeyAccessCredentialPropagationMethod;
    /**
     * 
     * @type {V1SSHPublicKeyAccessCredentialSource}
     * @memberof V1SSHPublicKeyAccessCredential
     */
    source: V1SSHPublicKeyAccessCredentialSource;
}

/**
 * Check if a given object implements the V1SSHPublicKeyAccessCredential interface.
 */
export function instanceOfV1SSHPublicKeyAccessCredential(value: object): value is V1SSHPublicKeyAccessCredential {
    if (!('propagationMethod' in value) || value['propagationMethod'] === undefined) return false;
    if (!('source' in value) || value['source'] === undefined) return false;
    return true;
}

export function V1SSHPublicKeyAccessCredentialFromJSON(json: any): V1SSHPublicKeyAccessCredential {
    return V1SSHPublicKeyAccessCredentialFromJSONTyped(json, false);
}

export function V1SSHPublicKeyAccessCredentialFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1SSHPublicKeyAccessCredential {
    if (json == null) {
        return json;
    }
    return {
        
        'propagationMethod': V1SSHPublicKeyAccessCredentialPropagationMethodFromJSON(json['propagationMethod']),
        'source': V1SSHPublicKeyAccessCredentialSourceFromJSON(json['source']),
    };
}

export function V1SSHPublicKeyAccessCredentialToJSON(json: any): V1SSHPublicKeyAccessCredential {
    return V1SSHPublicKeyAccessCredentialToJSONTyped(json, false);
}

export function V1SSHPublicKeyAccessCredentialToJSONTyped(value?: V1SSHPublicKeyAccessCredential | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'propagationMethod': V1SSHPublicKeyAccessCredentialPropagationMethodToJSON(value['propagationMethod']),
        'source': V1SSHPublicKeyAccessCredentialSourceToJSON(value['source']),
    };
}

