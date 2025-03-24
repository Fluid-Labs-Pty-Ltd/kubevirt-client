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
 * 
 * @export
 * @interface V1InstancetypeConfiguration
 */
export interface V1InstancetypeConfiguration {
    /**
     * ReferencePolicy defines how an instance type or preference should be referenced by the VM after submission, supported values are: reference (default) - Where a copy of the original object is stashed in a ControllerRevision and referenced by the VM. expand - Where the instance type or preference are expanded into the VM if no revisionNames have been populated. expandAll - Where the instance type or preference are expanded into the VM regardless of revisionNames previously being populated.
     * @type {string}
     * @memberof V1InstancetypeConfiguration
     */
    referencePolicy?: string;
}

/**
 * Check if a given object implements the V1InstancetypeConfiguration interface.
 */
export function instanceOfV1InstancetypeConfiguration(value: object): value is V1InstancetypeConfiguration {
    return true;
}

export function V1InstancetypeConfigurationFromJSON(json: any): V1InstancetypeConfiguration {
    return V1InstancetypeConfigurationFromJSONTyped(json, false);
}

export function V1InstancetypeConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1InstancetypeConfiguration {
    if (json == null) {
        return json;
    }
    return {
        
        'referencePolicy': json['referencePolicy'] == null ? undefined : json['referencePolicy'],
    };
}

export function V1InstancetypeConfigurationToJSON(json: any): V1InstancetypeConfiguration {
    return V1InstancetypeConfigurationToJSONTyped(json, false);
}

export function V1InstancetypeConfigurationToJSONTyped(value?: V1InstancetypeConfiguration | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'referencePolicy': value['referencePolicy'],
    };
}

