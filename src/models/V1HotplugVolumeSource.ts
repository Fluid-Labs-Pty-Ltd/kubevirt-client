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
import type { V1PersistentVolumeClaimVolumeSource } from './V1PersistentVolumeClaimVolumeSource.js';
import {
    V1PersistentVolumeClaimVolumeSourceFromJSON,
    V1PersistentVolumeClaimVolumeSourceFromJSONTyped,
    V1PersistentVolumeClaimVolumeSourceToJSON,
    V1PersistentVolumeClaimVolumeSourceToJSONTyped,
} from './V1PersistentVolumeClaimVolumeSource.js';
import type { V1DataVolumeSource } from './V1DataVolumeSource.js';
import {
    V1DataVolumeSourceFromJSON,
    V1DataVolumeSourceFromJSONTyped,
    V1DataVolumeSourceToJSON,
    V1DataVolumeSourceToJSONTyped,
} from './V1DataVolumeSource.js';

/**
 * HotplugVolumeSource Represents the source of a volume to mount which are capable of being hotplugged on a live running VMI. Only one of its members may be specified.
 * @export
 * @interface V1HotplugVolumeSource
 */
export interface V1HotplugVolumeSource {
    /**
     * 
     * @type {V1DataVolumeSource}
     * @memberof V1HotplugVolumeSource
     */
    dataVolume?: V1DataVolumeSource;
    /**
     * 
     * @type {V1PersistentVolumeClaimVolumeSource}
     * @memberof V1HotplugVolumeSource
     */
    persistentVolumeClaim?: V1PersistentVolumeClaimVolumeSource;
}

/**
 * Check if a given object implements the V1HotplugVolumeSource interface.
 */
export function instanceOfV1HotplugVolumeSource(value: object): value is V1HotplugVolumeSource {
    return true;
}

export function V1HotplugVolumeSourceFromJSON(json: any): V1HotplugVolumeSource {
    return V1HotplugVolumeSourceFromJSONTyped(json, false);
}

export function V1HotplugVolumeSourceFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1HotplugVolumeSource {
    if (json == null) {
        return json;
    }
    return {
        
        'dataVolume': json['dataVolume'] == null ? undefined : V1DataVolumeSourceFromJSON(json['dataVolume']),
        'persistentVolumeClaim': json['persistentVolumeClaim'] == null ? undefined : V1PersistentVolumeClaimVolumeSourceFromJSON(json['persistentVolumeClaim']),
    };
}

export function V1HotplugVolumeSourceToJSON(json: any): V1HotplugVolumeSource {
    return V1HotplugVolumeSourceToJSONTyped(json, false);
}

export function V1HotplugVolumeSourceToJSONTyped(value?: V1HotplugVolumeSource | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'dataVolume': V1DataVolumeSourceToJSON(value['dataVolume']),
        'persistentVolumeClaim': V1PersistentVolumeClaimVolumeSourceToJSON(value['persistentVolumeClaim']),
    };
}

