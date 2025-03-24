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
 * MigrateOptions may be provided on migrate request.
 * @export
 * @interface V1MigrateOptions
 */
export interface V1MigrateOptions {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1MigrateOptions
     */
    apiVersion?: string;
    /**
     * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @type {Array<string>}
     * @memberof V1MigrateOptions
     */
    dryRun?: Array<string>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1MigrateOptions
     */
    kind?: string;
}

/**
 * Check if a given object implements the V1MigrateOptions interface.
 */
export function instanceOfV1MigrateOptions(value: object): value is V1MigrateOptions {
    return true;
}

export function V1MigrateOptionsFromJSON(json: any): V1MigrateOptions {
    return V1MigrateOptionsFromJSONTyped(json, false);
}

export function V1MigrateOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1MigrateOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'dryRun': json['dryRun'] == null ? undefined : json['dryRun'],
        'kind': json['kind'] == null ? undefined : json['kind'],
    };
}

export function V1MigrateOptionsToJSON(json: any): V1MigrateOptions {
    return V1MigrateOptionsToJSONTyped(json, false);
}

export function V1MigrateOptionsToJSONTyped(value?: V1MigrateOptions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'apiVersion': value['apiVersion'],
        'dryRun': value['dryRun'],
        'kind': value['kind'],
    };
}

