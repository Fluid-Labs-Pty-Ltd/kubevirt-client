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
import type { V1StorageMigratedVolumeInfo } from './V1StorageMigratedVolumeInfo';
import {
    V1StorageMigratedVolumeInfoFromJSON,
    V1StorageMigratedVolumeInfoFromJSONTyped,
    V1StorageMigratedVolumeInfoToJSON,
    V1StorageMigratedVolumeInfoToJSONTyped,
} from './V1StorageMigratedVolumeInfo';

/**
 * 
 * @export
 * @interface V1VolumeMigrationState
 */
export interface V1VolumeMigrationState {
    /**
     * MigratedVolumes lists the source and destination volumes during the volume migration
     * @type {Array<V1StorageMigratedVolumeInfo>}
     * @memberof V1VolumeMigrationState
     */
    migratedVolumes?: Array<V1StorageMigratedVolumeInfo>;
}

/**
 * Check if a given object implements the V1VolumeMigrationState interface.
 */
export function instanceOfV1VolumeMigrationState(value: object): value is V1VolumeMigrationState {
    return true;
}

export function V1VolumeMigrationStateFromJSON(json: any): V1VolumeMigrationState {
    return V1VolumeMigrationStateFromJSONTyped(json, false);
}

export function V1VolumeMigrationStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VolumeMigrationState {
    if (json == null) {
        return json;
    }
    return {
        
        'migratedVolumes': json['migratedVolumes'] == null ? undefined : ((json['migratedVolumes'] as Array<any>).map(V1StorageMigratedVolumeInfoFromJSON)),
    };
}

export function V1VolumeMigrationStateToJSON(json: any): V1VolumeMigrationState {
    return V1VolumeMigrationStateToJSONTyped(json, false);
}

export function V1VolumeMigrationStateToJSONTyped(value?: V1VolumeMigrationState | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'migratedVolumes': value['migratedVolumes'] == null ? undefined : ((value['migratedVolumes'] as Array<any>).map(V1StorageMigratedVolumeInfoToJSON)),
    };
}

