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
import type { V1beta1VolumeBackup } from './V1beta1VolumeBackup.js';
import {
    V1beta1VolumeBackupFromJSON,
    V1beta1VolumeBackupFromJSONTyped,
    V1beta1VolumeBackupToJSON,
    V1beta1VolumeBackupToJSONTyped,
} from './V1beta1VolumeBackup.js';
import type { V1beta1SourceSpec } from './V1beta1SourceSpec.js';
import {
    V1beta1SourceSpecFromJSON,
    V1beta1SourceSpecFromJSONTyped,
    V1beta1SourceSpecToJSON,
    V1beta1SourceSpecToJSONTyped,
} from './V1beta1SourceSpec.js';

/**
 * VirtualMachineSnapshotContentSpec is the spec for a VirtualMachineSnapshotContent resource
 * @export
 * @interface V1beta1VirtualMachineSnapshotContentSpec
 */
export interface V1beta1VirtualMachineSnapshotContentSpec {
    /**
     * 
     * @type {V1beta1SourceSpec}
     * @memberof V1beta1VirtualMachineSnapshotContentSpec
     */
    source: V1beta1SourceSpec;
    /**
     * 
     * @type {string}
     * @memberof V1beta1VirtualMachineSnapshotContentSpec
     */
    virtualMachineSnapshotName?: string;
    /**
     * 
     * @type {Array<V1beta1VolumeBackup>}
     * @memberof V1beta1VirtualMachineSnapshotContentSpec
     */
    volumeBackups?: Array<V1beta1VolumeBackup>;
}

/**
 * Check if a given object implements the V1beta1VirtualMachineSnapshotContentSpec interface.
 */
export function instanceOfV1beta1VirtualMachineSnapshotContentSpec(value: object): value is V1beta1VirtualMachineSnapshotContentSpec {
    if (!('source' in value) || value['source'] === undefined) return false;
    return true;
}

export function V1beta1VirtualMachineSnapshotContentSpecFromJSON(json: any): V1beta1VirtualMachineSnapshotContentSpec {
    return V1beta1VirtualMachineSnapshotContentSpecFromJSONTyped(json, false);
}

export function V1beta1VirtualMachineSnapshotContentSpecFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1beta1VirtualMachineSnapshotContentSpec {
    if (json == null) {
        return json;
    }
    return {
        
        'source': V1beta1SourceSpecFromJSON(json['source']),
        'virtualMachineSnapshotName': json['virtualMachineSnapshotName'] == null ? undefined : json['virtualMachineSnapshotName'],
        'volumeBackups': json['volumeBackups'] == null ? undefined : ((json['volumeBackups'] as Array<any>).map(V1beta1VolumeBackupFromJSON)),
    };
}

export function V1beta1VirtualMachineSnapshotContentSpecToJSON(json: any): V1beta1VirtualMachineSnapshotContentSpec {
    return V1beta1VirtualMachineSnapshotContentSpecToJSONTyped(json, false);
}

export function V1beta1VirtualMachineSnapshotContentSpecToJSONTyped(value?: V1beta1VirtualMachineSnapshotContentSpec | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'source': V1beta1SourceSpecToJSON(value['source']),
        'virtualMachineSnapshotName': value['virtualMachineSnapshotName'],
        'volumeBackups': value['volumeBackups'] == null ? undefined : ((value['volumeBackups'] as Array<any>).map(V1beta1VolumeBackupToJSON)),
    };
}

