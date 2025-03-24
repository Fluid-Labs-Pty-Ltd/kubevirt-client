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
 * SEVPlatformInfo contains information about the AMD SEV features for the node.
 * @export
 * @interface V1SEVPlatformInfo
 */
export interface V1SEVPlatformInfo {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1SEVPlatformInfo
     */
    apiVersion?: string;
    /**
     * Base64 encoded SEV certificate chain.
     * @type {string}
     * @memberof V1SEVPlatformInfo
     */
    certChain?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1SEVPlatformInfo
     */
    kind?: string;
    /**
     * Base64 encoded platform Diffie-Hellman key.
     * @type {string}
     * @memberof V1SEVPlatformInfo
     */
    pdh?: string;
}

/**
 * Check if a given object implements the V1SEVPlatformInfo interface.
 */
export function instanceOfV1SEVPlatformInfo(value: object): value is V1SEVPlatformInfo {
    return true;
}

export function V1SEVPlatformInfoFromJSON(json: any): V1SEVPlatformInfo {
    return V1SEVPlatformInfoFromJSONTyped(json, false);
}

export function V1SEVPlatformInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1SEVPlatformInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'certChain': json['certChain'] == null ? undefined : json['certChain'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'pdh': json['pdh'] == null ? undefined : json['pdh'],
    };
}

export function V1SEVPlatformInfoToJSON(json: any): V1SEVPlatformInfo {
    return V1SEVPlatformInfoToJSONTyped(json, false);
}

export function V1SEVPlatformInfoToJSONTyped(value?: V1SEVPlatformInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'apiVersion': value['apiVersion'],
        'certChain': value['certChain'],
        'kind': value['kind'],
        'pdh': value['pdh'],
    };
}

