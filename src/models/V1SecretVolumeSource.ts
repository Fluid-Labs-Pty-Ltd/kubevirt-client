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
 * SecretVolumeSource adapts a Secret into a volume.
 * @export
 * @interface V1SecretVolumeSource
 */
export interface V1SecretVolumeSource {
    /**
     * Specify whether the Secret or it's keys must be defined
     * @type {boolean}
     * @memberof V1SecretVolumeSource
     */
    optional?: boolean;
    /**
     * Name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
     * @type {string}
     * @memberof V1SecretVolumeSource
     */
    secretName?: string;
    /**
     * The volume label of the resulting disk inside the VMI. Different bootstrapping mechanisms require different values. Typical values are "cidata" (cloud-init), "config-2" (cloud-init) or "OEMDRV" (kickstart).
     * @type {string}
     * @memberof V1SecretVolumeSource
     */
    volumeLabel?: string;
}

/**
 * Check if a given object implements the V1SecretVolumeSource interface.
 */
export function instanceOfV1SecretVolumeSource(value: object): value is V1SecretVolumeSource {
    return true;
}

export function V1SecretVolumeSourceFromJSON(json: any): V1SecretVolumeSource {
    return V1SecretVolumeSourceFromJSONTyped(json, false);
}

export function V1SecretVolumeSourceFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1SecretVolumeSource {
    if (json == null) {
        return json;
    }
    return {
        
        'optional': json['optional'] == null ? undefined : json['optional'],
        'secretName': json['secretName'] == null ? undefined : json['secretName'],
        'volumeLabel': json['volumeLabel'] == null ? undefined : json['volumeLabel'],
    };
}

export function V1SecretVolumeSourceToJSON(json: any): V1SecretVolumeSource {
    return V1SecretVolumeSourceToJSONTyped(json, false);
}

export function V1SecretVolumeSourceToJSONTyped(value?: V1SecretVolumeSource | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'optional': value['optional'],
        'secretName': value['secretName'],
        'volumeLabel': value['volumeLabel'],
    };
}

