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
 * DataVolumeSourcePVC provides the parameters to create a Data Volume from an existing PVC
 * @export
 * @interface V1beta1DataVolumeSourcePVC
 */
export interface V1beta1DataVolumeSourcePVC {
    /**
     * The name of the source PVC
     * @type {string}
     * @memberof V1beta1DataVolumeSourcePVC
     */
    name: string;
    /**
     * The namespace of the source PVC
     * @type {string}
     * @memberof V1beta1DataVolumeSourcePVC
     */
    namespace: string;
}

/**
 * Check if a given object implements the V1beta1DataVolumeSourcePVC interface.
 */
export function instanceOfV1beta1DataVolumeSourcePVC(value: object): value is V1beta1DataVolumeSourcePVC {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('namespace' in value) || value['namespace'] === undefined) return false;
    return true;
}

export function V1beta1DataVolumeSourcePVCFromJSON(json: any): V1beta1DataVolumeSourcePVC {
    return V1beta1DataVolumeSourcePVCFromJSONTyped(json, false);
}

export function V1beta1DataVolumeSourcePVCFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1DataVolumeSourcePVC {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'namespace': json['namespace'],
    };
}

export function V1beta1DataVolumeSourcePVCToJSON(json: any): V1beta1DataVolumeSourcePVC {
    return V1beta1DataVolumeSourcePVCToJSONTyped(json, false);
}

export function V1beta1DataVolumeSourcePVCToJSONTyped(value?: V1beta1DataVolumeSourcePVC | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'namespace': value['namespace'],
    };
}

