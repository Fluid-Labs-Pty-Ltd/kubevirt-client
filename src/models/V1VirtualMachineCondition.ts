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
 * VirtualMachineCondition represents the state of VirtualMachine
 * @export
 * @interface V1VirtualMachineCondition
 */
export interface V1VirtualMachineCondition {
    /**
     * 
     * @type {string}
     * @memberof V1VirtualMachineCondition
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof V1VirtualMachineCondition
     */
    reason?: string;
    /**
     * 
     * @type {string}
     * @memberof V1VirtualMachineCondition
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof V1VirtualMachineCondition
     */
    type: string;
}

/**
 * Check if a given object implements the V1VirtualMachineCondition interface.
 */
export function instanceOfV1VirtualMachineCondition(value: object): value is V1VirtualMachineCondition {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function V1VirtualMachineConditionFromJSON(json: any): V1VirtualMachineCondition {
    return V1VirtualMachineConditionFromJSONTyped(json, false);
}

export function V1VirtualMachineConditionFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1VirtualMachineCondition {
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

export function V1VirtualMachineConditionToJSON(json: any): V1VirtualMachineCondition {
    return V1VirtualMachineConditionToJSONTyped(json, false);
}

export function V1VirtualMachineConditionToJSONTyped(value?: V1VirtualMachineCondition | null, _ignoreDiscriminator: boolean = false): any {
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

