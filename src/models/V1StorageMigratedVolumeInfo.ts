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
import type { V1PersistentVolumeClaimInfo } from './V1PersistentVolumeClaimInfo';
import {
    V1PersistentVolumeClaimInfoFromJSON,
    V1PersistentVolumeClaimInfoFromJSONTyped,
    V1PersistentVolumeClaimInfoToJSON,
    V1PersistentVolumeClaimInfoToJSONTyped,
} from './V1PersistentVolumeClaimInfo';

/**
 * StorageMigratedVolumeInfo tracks the information about the source and destination volumes during the volume migration
 * @export
 * @interface V1StorageMigratedVolumeInfo
 */
export interface V1StorageMigratedVolumeInfo {
    /**
     * 
     * @type {V1PersistentVolumeClaimInfo}
     * @memberof V1StorageMigratedVolumeInfo
     */
    destinationPVCInfo?: V1PersistentVolumeClaimInfo;
    /**
     * 
     * @type {V1PersistentVolumeClaimInfo}
     * @memberof V1StorageMigratedVolumeInfo
     */
    sourcePVCInfo?: V1PersistentVolumeClaimInfo;
    /**
     * VolumeName is the name of the volume that is being migrated
     * @type {string}
     * @memberof V1StorageMigratedVolumeInfo
     */
    volumeName: string;
}

/**
 * Check if a given object implements the V1StorageMigratedVolumeInfo interface.
 */
export function instanceOfV1StorageMigratedVolumeInfo(value: object): value is V1StorageMigratedVolumeInfo {
    if (!('volumeName' in value) || value['volumeName'] === undefined) return false;
    return true;
}

export function V1StorageMigratedVolumeInfoFromJSON(json: any): V1StorageMigratedVolumeInfo {
    return V1StorageMigratedVolumeInfoFromJSONTyped(json, false);
}

export function V1StorageMigratedVolumeInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1StorageMigratedVolumeInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'destinationPVCInfo': json['destinationPVCInfo'] == null ? undefined : V1PersistentVolumeClaimInfoFromJSON(json['destinationPVCInfo']),
        'sourcePVCInfo': json['sourcePVCInfo'] == null ? undefined : V1PersistentVolumeClaimInfoFromJSON(json['sourcePVCInfo']),
        'volumeName': json['volumeName'],
    };
}

export function V1StorageMigratedVolumeInfoToJSON(json: any): V1StorageMigratedVolumeInfo {
    return V1StorageMigratedVolumeInfoToJSONTyped(json, false);
}

export function V1StorageMigratedVolumeInfoToJSONTyped(value?: V1StorageMigratedVolumeInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'destinationPVCInfo': V1PersistentVolumeClaimInfoToJSON(value['destinationPVCInfo']),
        'sourcePVCInfo': V1PersistentVolumeClaimInfoToJSON(value['sourcePVCInfo']),
        'volumeName': value['volumeName'],
    };
}

