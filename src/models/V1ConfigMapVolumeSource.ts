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
 * ConfigMapVolumeSource adapts a ConfigMap into a volume. More info: https://kubernetes.io/docs/concepts/storage/volumes/#configmap
 * @export
 * @interface V1ConfigMapVolumeSource
 */
export interface V1ConfigMapVolumeSource {
    /**
     * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * @type {string}
     * @memberof V1ConfigMapVolumeSource
     */
    name?: string;
    /**
     * Specify whether the ConfigMap or it's keys must be defined
     * @type {boolean}
     * @memberof V1ConfigMapVolumeSource
     */
    optional?: boolean;
    /**
     * The volume label of the resulting disk inside the VMI. Different bootstrapping mechanisms require different values. Typical values are "cidata" (cloud-init), "config-2" (cloud-init) or "OEMDRV" (kickstart).
     * @type {string}
     * @memberof V1ConfigMapVolumeSource
     */
    volumeLabel?: string;
}

/**
 * Check if a given object implements the V1ConfigMapVolumeSource interface.
 */
export function instanceOfV1ConfigMapVolumeSource(value: object): value is V1ConfigMapVolumeSource {
    return true;
}

export function V1ConfigMapVolumeSourceFromJSON(json: any): V1ConfigMapVolumeSource {
    return V1ConfigMapVolumeSourceFromJSONTyped(json, false);
}

export function V1ConfigMapVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ConfigMapVolumeSource {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'optional': json['optional'] == null ? undefined : json['optional'],
        'volumeLabel': json['volumeLabel'] == null ? undefined : json['volumeLabel'],
    };
}

export function V1ConfigMapVolumeSourceToJSON(json: any): V1ConfigMapVolumeSource {
    return V1ConfigMapVolumeSourceToJSONTyped(json, false);
}

export function V1ConfigMapVolumeSourceToJSONTyped(value?: V1ConfigMapVolumeSource | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'optional': value['optional'],
        'volumeLabel': value['volumeLabel'],
    };
}

