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
 * RestartOptions may be provided when deleting an API object.
 * @export
 * @interface V1RestartOptions
 */
export interface V1RestartOptions {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1RestartOptions
     */
    apiVersion?: string;
    /**
     * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @type {Array<string>}
     * @memberof V1RestartOptions
     */
    dryRun?: Array<string>;
    /**
     * The duration in seconds before the object should be force-restarted. Value must be non-negative integer. The value zero indicates, restart immediately. If this value is nil, the default grace period for deletion of the corresponding VMI for the specified type will be used to determine on how much time to give the VMI to restart. Defaults to a per object value if not specified. zero means restart immediately. Allowed Values: nil and 0
     * @type {number}
     * @memberof V1RestartOptions
     */
    gracePeriodSeconds?: number;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1RestartOptions
     */
    kind?: string;
}

/**
 * Check if a given object implements the V1RestartOptions interface.
 */
export function instanceOfV1RestartOptions(value: object): value is V1RestartOptions {
    return true;
}

export function V1RestartOptionsFromJSON(json: any): V1RestartOptions {
    return V1RestartOptionsFromJSONTyped(json, false);
}

export function V1RestartOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RestartOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'dryRun': json['dryRun'] == null ? undefined : json['dryRun'],
        'gracePeriodSeconds': json['gracePeriodSeconds'] == null ? undefined : json['gracePeriodSeconds'],
        'kind': json['kind'] == null ? undefined : json['kind'],
    };
}

export function V1RestartOptionsToJSON(json: any): V1RestartOptions {
    return V1RestartOptionsToJSONTyped(json, false);
}

export function V1RestartOptionsToJSONTyped(value?: V1RestartOptions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'apiVersion': value['apiVersion'],
        'dryRun': value['dryRun'],
        'gracePeriodSeconds': value['gracePeriodSeconds'],
        'kind': value['kind'],
    };
}

