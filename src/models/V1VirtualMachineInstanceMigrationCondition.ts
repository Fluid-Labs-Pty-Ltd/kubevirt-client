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
 * 
 * @export
 * @interface V1VirtualMachineInstanceMigrationCondition
 */
export interface V1VirtualMachineInstanceMigrationCondition {
    /**
     * 
     * @type {string}
     * @memberof V1VirtualMachineInstanceMigrationCondition
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof V1VirtualMachineInstanceMigrationCondition
     */
    reason?: string;
    /**
     * 
     * @type {string}
     * @memberof V1VirtualMachineInstanceMigrationCondition
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof V1VirtualMachineInstanceMigrationCondition
     */
    type: string;
}

/**
 * Check if a given object implements the V1VirtualMachineInstanceMigrationCondition interface.
 */
export function instanceOfV1VirtualMachineInstanceMigrationCondition(value: object): value is V1VirtualMachineInstanceMigrationCondition {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function V1VirtualMachineInstanceMigrationConditionFromJSON(json: any): V1VirtualMachineInstanceMigrationCondition {
    return V1VirtualMachineInstanceMigrationConditionFromJSONTyped(json, false);
}

export function V1VirtualMachineInstanceMigrationConditionFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1VirtualMachineInstanceMigrationCondition {
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

export function V1VirtualMachineInstanceMigrationConditionToJSON(json: any): V1VirtualMachineInstanceMigrationCondition {
    return V1VirtualMachineInstanceMigrationConditionToJSONTyped(json, false);
}

export function V1VirtualMachineInstanceMigrationConditionToJSONTyped(value?: V1VirtualMachineInstanceMigrationCondition | null, _ignoreDiscriminator: boolean = false): any {
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

