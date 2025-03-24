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
 * @interface V1MemoryDumpVolumeSource
 */
export interface V1MemoryDumpVolumeSource {
    /**
     * claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
     * @type {string}
     * @memberof V1MemoryDumpVolumeSource
     */
    claimName: string;
    /**
     * Hotpluggable indicates whether the volume can be hotplugged and hotunplugged.
     * @type {boolean}
     * @memberof V1MemoryDumpVolumeSource
     */
    hotpluggable?: boolean;
    /**
     * readOnly Will force the ReadOnly setting in VolumeMounts. Default false.
     * @type {boolean}
     * @memberof V1MemoryDumpVolumeSource
     */
    readOnly?: boolean;
}

/**
 * Check if a given object implements the V1MemoryDumpVolumeSource interface.
 */
export function instanceOfV1MemoryDumpVolumeSource(value: object): value is V1MemoryDumpVolumeSource {
    if (!('claimName' in value) || value['claimName'] === undefined) return false;
    return true;
}

export function V1MemoryDumpVolumeSourceFromJSON(json: any): V1MemoryDumpVolumeSource {
    return V1MemoryDumpVolumeSourceFromJSONTyped(json, false);
}

export function V1MemoryDumpVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1MemoryDumpVolumeSource {
    if (json == null) {
        return json;
    }
    return {
        
        'claimName': json['claimName'],
        'hotpluggable': json['hotpluggable'] == null ? undefined : json['hotpluggable'],
        'readOnly': json['readOnly'] == null ? undefined : json['readOnly'],
    };
}

export function V1MemoryDumpVolumeSourceToJSON(json: any): V1MemoryDumpVolumeSource {
    return V1MemoryDumpVolumeSourceToJSONTyped(json, false);
}

export function V1MemoryDumpVolumeSourceToJSONTyped(value?: V1MemoryDumpVolumeSource | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'claimName': value['claimName'],
        'hotpluggable': value['hotpluggable'],
        'readOnly': value['readOnly'],
    };
}

