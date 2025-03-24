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
 * HotplugVolumeStatus represents the hotplug status of the volume
 * @export
 * @interface V1HotplugVolumeStatus
 */
export interface V1HotplugVolumeStatus {
    /**
     * AttachPodName is the name of the pod used to attach the volume to the node.
     * @type {string}
     * @memberof V1HotplugVolumeStatus
     */
    attachPodName?: string;
    /**
     * AttachPodUID is the UID of the pod used to attach the volume to the node.
     * @type {string}
     * @memberof V1HotplugVolumeStatus
     */
    attachPodUID?: string;
}

/**
 * Check if a given object implements the V1HotplugVolumeStatus interface.
 */
export function instanceOfV1HotplugVolumeStatus(value: object): value is V1HotplugVolumeStatus {
    return true;
}

export function V1HotplugVolumeStatusFromJSON(json: any): V1HotplugVolumeStatus {
    return V1HotplugVolumeStatusFromJSONTyped(json, false);
}

export function V1HotplugVolumeStatusFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1HotplugVolumeStatus {
    if (json == null) {
        return json;
    }
    return {
        
        'attachPodName': json['attachPodName'] == null ? undefined : json['attachPodName'],
        'attachPodUID': json['attachPodUID'] == null ? undefined : json['attachPodUID'],
    };
}

export function V1HotplugVolumeStatusToJSON(json: any): V1HotplugVolumeStatus {
    return V1HotplugVolumeStatusToJSONTyped(json, false);
}

export function V1HotplugVolumeStatusToJSONTyped(value?: V1HotplugVolumeStatus | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'attachPodName': value['attachPodName'],
        'attachPodUID': value['attachPodUID'],
    };
}

