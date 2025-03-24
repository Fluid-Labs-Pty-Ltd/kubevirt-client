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
 * UnpauseOptions may be provided on unpause request.
 * @export
 * @interface V1UnpauseOptions
 */
export interface V1UnpauseOptions {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1UnpauseOptions
     */
    apiVersion?: string;
    /**
     * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @type {Array<string>}
     * @memberof V1UnpauseOptions
     */
    dryRun?: Array<string>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1UnpauseOptions
     */
    kind?: string;
}

/**
 * Check if a given object implements the V1UnpauseOptions interface.
 */
export function instanceOfV1UnpauseOptions(value: object): value is V1UnpauseOptions {
    return true;
}

export function V1UnpauseOptionsFromJSON(json: any): V1UnpauseOptions {
    return V1UnpauseOptionsFromJSONTyped(json, false);
}

export function V1UnpauseOptionsFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1UnpauseOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'dryRun': json['dryRun'] == null ? undefined : json['dryRun'],
        'kind': json['kind'] == null ? undefined : json['kind'],
    };
}

export function V1UnpauseOptionsToJSON(json: any): V1UnpauseOptions {
    return V1UnpauseOptionsToJSONTyped(json, false);
}

export function V1UnpauseOptionsToJSONTyped(value?: V1UnpauseOptions | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'apiVersion': value['apiVersion'],
        'dryRun': value['dryRun'],
        'kind': value['kind'],
    };
}

