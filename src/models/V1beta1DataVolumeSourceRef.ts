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
 * DataVolumeSourceRef defines an indirect reference to the source of data for the DataVolume
 * @export
 * @interface V1beta1DataVolumeSourceRef
 */
export interface V1beta1DataVolumeSourceRef {
    /**
     * The kind of the source reference, currently only "DataSource" is supported
     * @type {string}
     * @memberof V1beta1DataVolumeSourceRef
     */
    kind: string;
    /**
     * The name of the source reference
     * @type {string}
     * @memberof V1beta1DataVolumeSourceRef
     */
    name: string;
    /**
     * The namespace of the source reference, defaults to the DataVolume namespace
     * @type {string}
     * @memberof V1beta1DataVolumeSourceRef
     */
    namespace?: string;
}

/**
 * Check if a given object implements the V1beta1DataVolumeSourceRef interface.
 */
export function instanceOfV1beta1DataVolumeSourceRef(value: object): value is V1beta1DataVolumeSourceRef {
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function V1beta1DataVolumeSourceRefFromJSON(json: any): V1beta1DataVolumeSourceRef {
    return V1beta1DataVolumeSourceRefFromJSONTyped(json, false);
}

export function V1beta1DataVolumeSourceRefFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1DataVolumeSourceRef {
    if (json == null) {
        return json;
    }
    return {
        
        'kind': json['kind'],
        'name': json['name'],
        'namespace': json['namespace'] == null ? undefined : json['namespace'],
    };
}

export function V1beta1DataVolumeSourceRefToJSON(json: any): V1beta1DataVolumeSourceRef {
    return V1beta1DataVolumeSourceRefToJSONTyped(json, false);
}

export function V1beta1DataVolumeSourceRefToJSONTyped(value?: V1beta1DataVolumeSourceRef | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'kind': value['kind'],
        'name': value['name'],
        'namespace': value['namespace'],
    };
}

