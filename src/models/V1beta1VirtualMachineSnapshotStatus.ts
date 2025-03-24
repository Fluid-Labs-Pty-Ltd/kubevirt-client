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
import type { V1beta1Error } from './V1beta1Error';
import {
    V1beta1ErrorFromJSON,
    V1beta1ErrorFromJSONTyped,
    V1beta1ErrorToJSON,
    V1beta1ErrorToJSONTyped,
} from './V1beta1Error';
import type { V1beta1SnapshotVolumesLists } from './V1beta1SnapshotVolumesLists';
import {
    V1beta1SnapshotVolumesListsFromJSON,
    V1beta1SnapshotVolumesListsFromJSONTyped,
    V1beta1SnapshotVolumesListsToJSON,
    V1beta1SnapshotVolumesListsToJSONTyped,
} from './V1beta1SnapshotVolumesLists';
import type { V1beta1Condition } from './V1beta1Condition';
import {
    V1beta1ConditionFromJSON,
    V1beta1ConditionFromJSONTyped,
    V1beta1ConditionToJSON,
    V1beta1ConditionToJSONTyped,
} from './V1beta1Condition';

/**
 * VirtualMachineSnapshotStatus is the status for a VirtualMachineSnapshot resource
 * @export
 * @interface V1beta1VirtualMachineSnapshotStatus
 */
export interface V1beta1VirtualMachineSnapshotStatus {
    /**
     * 
     * @type {Array<V1beta1Condition>}
     * @memberof V1beta1VirtualMachineSnapshotStatus
     */
    conditions?: Array<V1beta1Condition>;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {string}
     * @memberof V1beta1VirtualMachineSnapshotStatus
     */
    creationTime?: string;
    /**
     * 
     * @type {V1beta1Error}
     * @memberof V1beta1VirtualMachineSnapshotStatus
     */
    error?: V1beta1Error;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1beta1VirtualMachineSnapshotStatus
     */
    indications?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof V1beta1VirtualMachineSnapshotStatus
     */
    phase?: string;
    /**
     * 
     * @type {boolean}
     * @memberof V1beta1VirtualMachineSnapshotStatus
     */
    readyToUse?: boolean;
    /**
     * 
     * @type {V1beta1SnapshotVolumesLists}
     * @memberof V1beta1VirtualMachineSnapshotStatus
     */
    snapshotVolumes?: V1beta1SnapshotVolumesLists;
    /**
     * 
     * @type {string}
     * @memberof V1beta1VirtualMachineSnapshotStatus
     */
    sourceUID?: string;
    /**
     * 
     * @type {string}
     * @memberof V1beta1VirtualMachineSnapshotStatus
     */
    virtualMachineSnapshotContentName?: string;
}

/**
 * Check if a given object implements the V1beta1VirtualMachineSnapshotStatus interface.
 */
export function instanceOfV1beta1VirtualMachineSnapshotStatus(value: object): value is V1beta1VirtualMachineSnapshotStatus {
    return true;
}

export function V1beta1VirtualMachineSnapshotStatusFromJSON(json: any): V1beta1VirtualMachineSnapshotStatus {
    return V1beta1VirtualMachineSnapshotStatusFromJSONTyped(json, false);
}

export function V1beta1VirtualMachineSnapshotStatusFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1beta1VirtualMachineSnapshotStatus {
    if (json == null) {
        return json;
    }
    return {
        
        'conditions': json['conditions'] == null ? undefined : ((json['conditions'] as Array<any>).map(V1beta1ConditionFromJSON)),
        'creationTime': json['creationTime'] == null ? undefined : json['creationTime'],
        'error': json['error'] == null ? undefined : V1beta1ErrorFromJSON(json['error']),
        'indications': json['indications'] == null ? undefined : json['indications'],
        'phase': json['phase'] == null ? undefined : json['phase'],
        'readyToUse': json['readyToUse'] == null ? undefined : json['readyToUse'],
        'snapshotVolumes': json['snapshotVolumes'] == null ? undefined : V1beta1SnapshotVolumesListsFromJSON(json['snapshotVolumes']),
        'sourceUID': json['sourceUID'] == null ? undefined : json['sourceUID'],
        'virtualMachineSnapshotContentName': json['virtualMachineSnapshotContentName'] == null ? undefined : json['virtualMachineSnapshotContentName'],
    };
}

export function V1beta1VirtualMachineSnapshotStatusToJSON(json: any): V1beta1VirtualMachineSnapshotStatus {
    return V1beta1VirtualMachineSnapshotStatusToJSONTyped(json, false);
}

export function V1beta1VirtualMachineSnapshotStatusToJSONTyped(value?: V1beta1VirtualMachineSnapshotStatus | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'conditions': value['conditions'] == null ? undefined : ((value['conditions'] as Array<any>).map(V1beta1ConditionToJSON)),
        'creationTime': value['creationTime'],
        'error': V1beta1ErrorToJSON(value['error']),
        'indications': value['indications'],
        'phase': value['phase'],
        'readyToUse': value['readyToUse'],
        'snapshotVolumes': V1beta1SnapshotVolumesListsToJSON(value['snapshotVolumes']),
        'sourceUID': value['sourceUID'],
        'virtualMachineSnapshotContentName': value['virtualMachineSnapshotContentName'],
    };
}

