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
 * Represents the user's configuration to emulate sound cards in the VMI.
 * @export
 * @interface V1SoundDevice
 */
export interface V1SoundDevice {
    /**
     * We only support ich9 or ac97. If SoundDevice is not set: No sound card is emulated. If SoundDevice is set but Model is not: ich9
     * @type {string}
     * @memberof V1SoundDevice
     */
    model?: string;
    /**
     * User's defined name for this sound device
     * @type {string}
     * @memberof V1SoundDevice
     */
    name: string;
}

/**
 * Check if a given object implements the V1SoundDevice interface.
 */
export function instanceOfV1SoundDevice(value: object): value is V1SoundDevice {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function V1SoundDeviceFromJSON(json: any): V1SoundDevice {
    return V1SoundDeviceFromJSONTyped(json, false);
}

export function V1SoundDeviceFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1SoundDevice {
    if (json == null) {
        return json;
    }
    return {
        
        'model': json['model'] == null ? undefined : json['model'],
        'name': json['name'],
    };
}

export function V1SoundDeviceToJSON(json: any): V1SoundDevice {
    return V1SoundDeviceToJSONTyped(json, false);
}

export function V1SoundDeviceToJSONTyped(value?: V1SoundDevice | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'model': value['model'],
        'name': value['name'],
    };
}

