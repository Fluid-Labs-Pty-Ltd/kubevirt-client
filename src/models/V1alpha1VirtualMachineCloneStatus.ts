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
import type { V1alpha1Condition } from './V1alpha1Condition';
import {
    V1alpha1ConditionFromJSON,
    V1alpha1ConditionFromJSONTyped,
    V1alpha1ConditionToJSON,
    V1alpha1ConditionToJSONTyped,
} from './V1alpha1Condition';

/**
 * 
 * @export
 * @interface V1alpha1VirtualMachineCloneStatus
 */
export interface V1alpha1VirtualMachineCloneStatus {
    /**
     * 
     * @type {Array<V1alpha1Condition>}
     * @memberof V1alpha1VirtualMachineCloneStatus
     */
    conditions?: Array<V1alpha1Condition>;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {string}
     * @memberof V1alpha1VirtualMachineCloneStatus
     */
    creationTime?: string;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1VirtualMachineCloneStatus
     */
    phase?: string;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1VirtualMachineCloneStatus
     */
    restoreName?: string;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1VirtualMachineCloneStatus
     */
    snapshotName?: string;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1VirtualMachineCloneStatus
     */
    targetName?: string;
}

/**
 * Check if a given object implements the V1alpha1VirtualMachineCloneStatus interface.
 */
export function instanceOfV1alpha1VirtualMachineCloneStatus(value: object): value is V1alpha1VirtualMachineCloneStatus {
    return true;
}

export function V1alpha1VirtualMachineCloneStatusFromJSON(json: any): V1alpha1VirtualMachineCloneStatus {
    return V1alpha1VirtualMachineCloneStatusFromJSONTyped(json, false);
}

export function V1alpha1VirtualMachineCloneStatusFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1alpha1VirtualMachineCloneStatus {
    if (json == null) {
        return json;
    }
    return {
        
        'conditions': json['conditions'] == null ? undefined : ((json['conditions'] as Array<any>).map(V1alpha1ConditionFromJSON)),
        'creationTime': json['creationTime'] == null ? undefined : json['creationTime'],
        'phase': json['phase'] == null ? undefined : json['phase'],
        'restoreName': json['restoreName'] == null ? undefined : json['restoreName'],
        'snapshotName': json['snapshotName'] == null ? undefined : json['snapshotName'],
        'targetName': json['targetName'] == null ? undefined : json['targetName'],
    };
}

export function V1alpha1VirtualMachineCloneStatusToJSON(json: any): V1alpha1VirtualMachineCloneStatus {
    return V1alpha1VirtualMachineCloneStatusToJSONTyped(json, false);
}

export function V1alpha1VirtualMachineCloneStatusToJSONTyped(value?: V1alpha1VirtualMachineCloneStatus | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'conditions': value['conditions'] == null ? undefined : ((value['conditions'] as Array<any>).map(V1alpha1ConditionToJSON)),
        'creationTime': value['creationTime'],
        'phase': value['phase'],
        'restoreName': value['restoreName'],
        'snapshotName': value['snapshotName'],
        'targetName': value['targetName'],
    };
}

