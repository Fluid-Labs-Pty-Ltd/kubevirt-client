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
 * @interface V1beta1VolumePreferences
 */
export interface V1beta1VolumePreferences {
    /**
     * PreffereedStorageClassName optionally defines the preferred storageClass
     * @type {string}
     * @memberof V1beta1VolumePreferences
     */
    preferredStorageClassName?: string;
}

/**
 * Check if a given object implements the V1beta1VolumePreferences interface.
 */
export function instanceOfV1beta1VolumePreferences(value: object): value is V1beta1VolumePreferences {
    return true;
}

export function V1beta1VolumePreferencesFromJSON(json: any): V1beta1VolumePreferences {
    return V1beta1VolumePreferencesFromJSONTyped(json, false);
}

export function V1beta1VolumePreferencesFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1VolumePreferences {
    if (json == null) {
        return json;
    }
    return {
        
        'preferredStorageClassName': json['preferredStorageClassName'] == null ? undefined : json['preferredStorageClassName'],
    };
}

export function V1beta1VolumePreferencesToJSON(json: any): V1beta1VolumePreferences {
    return V1beta1VolumePreferencesToJSONTyped(json, false);
}

export function V1beta1VolumePreferencesToJSONTyped(value?: V1beta1VolumePreferences | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'preferredStorageClassName': value['preferredStorageClassName'],
    };
}

