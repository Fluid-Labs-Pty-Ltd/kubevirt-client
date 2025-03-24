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
 * DataVolumeSourceGCS provides the parameters to create a Data Volume from an GCS source
 * @export
 * @interface V1beta1DataVolumeSourceGCS
 */
export interface V1beta1DataVolumeSourceGCS {
    /**
     * SecretRef provides the secret reference needed to access the GCS source
     * @type {string}
     * @memberof V1beta1DataVolumeSourceGCS
     */
    secretRef?: string;
    /**
     * URL is the url of the GCS source
     * @type {string}
     * @memberof V1beta1DataVolumeSourceGCS
     */
    url: string;
}

/**
 * Check if a given object implements the V1beta1DataVolumeSourceGCS interface.
 */
export function instanceOfV1beta1DataVolumeSourceGCS(value: object): value is V1beta1DataVolumeSourceGCS {
    if (!('url' in value) || value['url'] === undefined) return false;
    return true;
}

export function V1beta1DataVolumeSourceGCSFromJSON(json: any): V1beta1DataVolumeSourceGCS {
    return V1beta1DataVolumeSourceGCSFromJSONTyped(json, false);
}

export function V1beta1DataVolumeSourceGCSFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1beta1DataVolumeSourceGCS {
    if (json == null) {
        return json;
    }
    return {
        
        'secretRef': json['secretRef'] == null ? undefined : json['secretRef'],
        'url': json['url'],
    };
}

export function V1beta1DataVolumeSourceGCSToJSON(json: any): V1beta1DataVolumeSourceGCS {
    return V1beta1DataVolumeSourceGCSToJSONTyped(json, false);
}

export function V1beta1DataVolumeSourceGCSToJSONTyped(value?: V1beta1DataVolumeSourceGCS | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'secretRef': value['secretRef'],
        'url': value['url'],
    };
}

