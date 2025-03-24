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
 * @interface V1alpha1VirtualMachineCloneTemplateFilters
 */
export interface V1alpha1VirtualMachineCloneTemplateFilters {
    /**
     * Example use: "!some/key*". For a detailed description, please refer to https://kubevirt.io/user-guide/operations/clone_api/#label-annotation-filters.
     * @type {Array<string>}
     * @memberof V1alpha1VirtualMachineCloneTemplateFilters
     */
    annotationFilters?: Array<string>;
    /**
     * Example use: "!some/key*". For a detailed description, please refer to https://kubevirt.io/user-guide/operations/clone_api/#label-annotation-filters.
     * @type {Array<string>}
     * @memberof V1alpha1VirtualMachineCloneTemplateFilters
     */
    labelFilters?: Array<string>;
}

/**
 * Check if a given object implements the V1alpha1VirtualMachineCloneTemplateFilters interface.
 */
export function instanceOfV1alpha1VirtualMachineCloneTemplateFilters(value: object): value is V1alpha1VirtualMachineCloneTemplateFilters {
    return true;
}

export function V1alpha1VirtualMachineCloneTemplateFiltersFromJSON(json: any): V1alpha1VirtualMachineCloneTemplateFilters {
    return V1alpha1VirtualMachineCloneTemplateFiltersFromJSONTyped(json, false);
}

export function V1alpha1VirtualMachineCloneTemplateFiltersFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1alpha1VirtualMachineCloneTemplateFilters {
    if (json == null) {
        return json;
    }
    return {
        
        'annotationFilters': json['annotationFilters'] == null ? undefined : json['annotationFilters'],
        'labelFilters': json['labelFilters'] == null ? undefined : json['labelFilters'],
    };
}

export function V1alpha1VirtualMachineCloneTemplateFiltersToJSON(json: any): V1alpha1VirtualMachineCloneTemplateFilters {
    return V1alpha1VirtualMachineCloneTemplateFiltersToJSONTyped(json, false);
}

export function V1alpha1VirtualMachineCloneTemplateFiltersToJSONTyped(value?: V1alpha1VirtualMachineCloneTemplateFilters | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'annotationFilters': value['annotationFilters'],
        'labelFilters': value['labelFilters'],
    };
}

