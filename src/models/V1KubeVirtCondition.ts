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
 * KubeVirtCondition represents a condition of a KubeVirt deployment
 * @export
 * @interface V1KubeVirtCondition
 */
export interface V1KubeVirtCondition {
    /**
     * 
     * @type {string}
     * @memberof V1KubeVirtCondition
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof V1KubeVirtCondition
     */
    reason?: string;
    /**
     * 
     * @type {string}
     * @memberof V1KubeVirtCondition
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof V1KubeVirtCondition
     */
    type: string;
}

/**
 * Check if a given object implements the V1KubeVirtCondition interface.
 */
export function instanceOfV1KubeVirtCondition(value: object): value is V1KubeVirtCondition {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function V1KubeVirtConditionFromJSON(json: any): V1KubeVirtCondition {
    return V1KubeVirtConditionFromJSONTyped(json, false);
}

export function V1KubeVirtConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1KubeVirtCondition {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
        'reason': json['reason'] == null ? undefined : json['reason'],
        'status': json['status'],
        'type': json['type'],
    };
}

export function V1KubeVirtConditionToJSON(json: any): V1KubeVirtCondition {
    return V1KubeVirtConditionToJSONTyped(json, false);
}

export function V1KubeVirtConditionToJSONTyped(value?: V1KubeVirtCondition | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
        'reason': value['reason'],
        'status': value['status'],
        'type': value['type'],
    };
}

