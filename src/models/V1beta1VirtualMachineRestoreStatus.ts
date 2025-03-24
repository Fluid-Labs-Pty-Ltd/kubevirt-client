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
import type { V1beta1VolumeRestore } from './V1beta1VolumeRestore';
import {
    V1beta1VolumeRestoreFromJSON,
    V1beta1VolumeRestoreFromJSONTyped,
    V1beta1VolumeRestoreToJSON,
    V1beta1VolumeRestoreToJSONTyped,
} from './V1beta1VolumeRestore';
import type { V1beta1Condition } from './V1beta1Condition';
import {
    V1beta1ConditionFromJSON,
    V1beta1ConditionFromJSONTyped,
    V1beta1ConditionToJSON,
    V1beta1ConditionToJSONTyped,
} from './V1beta1Condition';

/**
 * VirtualMachineRestoreStatus is the spec for a VirtualMachineRestoreresource
 * @export
 * @interface V1beta1VirtualMachineRestoreStatus
 */
export interface V1beta1VirtualMachineRestoreStatus {
    /**
     * 
     * @type {boolean}
     * @memberof V1beta1VirtualMachineRestoreStatus
     */
    complete?: boolean;
    /**
     * 
     * @type {Array<V1beta1Condition>}
     * @memberof V1beta1VirtualMachineRestoreStatus
     */
    conditions?: Array<V1beta1Condition>;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1beta1VirtualMachineRestoreStatus
     */
    deletedDataVolumes?: Array<string>;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {string}
     * @memberof V1beta1VirtualMachineRestoreStatus
     */
    restoreTime?: string;
    /**
     * 
     * @type {Array<V1beta1VolumeRestore>}
     * @memberof V1beta1VirtualMachineRestoreStatus
     */
    restores?: Array<V1beta1VolumeRestore>;
}

/**
 * Check if a given object implements the V1beta1VirtualMachineRestoreStatus interface.
 */
export function instanceOfV1beta1VirtualMachineRestoreStatus(value: object): value is V1beta1VirtualMachineRestoreStatus {
    return true;
}

export function V1beta1VirtualMachineRestoreStatusFromJSON(json: any): V1beta1VirtualMachineRestoreStatus {
    return V1beta1VirtualMachineRestoreStatusFromJSONTyped(json, false);
}

export function V1beta1VirtualMachineRestoreStatusFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1beta1VirtualMachineRestoreStatus {
    if (json == null) {
        return json;
    }
    return {
        
        'complete': json['complete'] == null ? undefined : json['complete'],
        'conditions': json['conditions'] == null ? undefined : ((json['conditions'] as Array<any>).map(V1beta1ConditionFromJSON)),
        'deletedDataVolumes': json['deletedDataVolumes'] == null ? undefined : json['deletedDataVolumes'],
        'restoreTime': json['restoreTime'] == null ? undefined : json['restoreTime'],
        'restores': json['restores'] == null ? undefined : ((json['restores'] as Array<any>).map(V1beta1VolumeRestoreFromJSON)),
    };
}

export function V1beta1VirtualMachineRestoreStatusToJSON(json: any): V1beta1VirtualMachineRestoreStatus {
    return V1beta1VirtualMachineRestoreStatusToJSONTyped(json, false);
}

export function V1beta1VirtualMachineRestoreStatusToJSONTyped(value?: V1beta1VirtualMachineRestoreStatus | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'complete': value['complete'],
        'conditions': value['conditions'] == null ? undefined : ((value['conditions'] as Array<any>).map(V1beta1ConditionToJSON)),
        'deletedDataVolumes': value['deletedDataVolumes'],
        'restoreTime': value['restoreTime'],
        'restores': value['restores'] == null ? undefined : ((value['restores'] as Array<any>).map(V1beta1VolumeRestoreToJSON)),
    };
}

