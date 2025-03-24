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
import type { V1RemoveVolumeOptions } from './V1RemoveVolumeOptions.js';
import {
    V1RemoveVolumeOptionsFromJSON,
    V1RemoveVolumeOptionsFromJSONTyped,
    V1RemoveVolumeOptionsToJSON,
    V1RemoveVolumeOptionsToJSONTyped,
} from './V1RemoveVolumeOptions.js';
import type { V1AddVolumeOptions } from './V1AddVolumeOptions.js';
import {
    V1AddVolumeOptionsFromJSON,
    V1AddVolumeOptionsFromJSONTyped,
    V1AddVolumeOptionsToJSON,
    V1AddVolumeOptionsToJSONTyped,
} from './V1AddVolumeOptions.js';

/**
 * 
 * @export
 * @interface V1VirtualMachineVolumeRequest
 */
export interface V1VirtualMachineVolumeRequest {
    /**
     * 
     * @type {V1AddVolumeOptions}
     * @memberof V1VirtualMachineVolumeRequest
     */
    addVolumeOptions?: V1AddVolumeOptions;
    /**
     * 
     * @type {V1RemoveVolumeOptions}
     * @memberof V1VirtualMachineVolumeRequest
     */
    removeVolumeOptions?: V1RemoveVolumeOptions;
}

/**
 * Check if a given object implements the V1VirtualMachineVolumeRequest interface.
 */
export function instanceOfV1VirtualMachineVolumeRequest(value: object): value is V1VirtualMachineVolumeRequest {
    return true;
}

export function V1VirtualMachineVolumeRequestFromJSON(json: any): V1VirtualMachineVolumeRequest {
    return V1VirtualMachineVolumeRequestFromJSONTyped(json, false);
}

export function V1VirtualMachineVolumeRequestFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1VirtualMachineVolumeRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'addVolumeOptions': json['addVolumeOptions'] == null ? undefined : V1AddVolumeOptionsFromJSON(json['addVolumeOptions']),
        'removeVolumeOptions': json['removeVolumeOptions'] == null ? undefined : V1RemoveVolumeOptionsFromJSON(json['removeVolumeOptions']),
    };
}

export function V1VirtualMachineVolumeRequestToJSON(json: any): V1VirtualMachineVolumeRequest {
    return V1VirtualMachineVolumeRequestToJSONTyped(json, false);
}

export function V1VirtualMachineVolumeRequestToJSONTyped(value?: V1VirtualMachineVolumeRequest | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'addVolumeOptions': V1AddVolumeOptionsToJSON(value['addVolumeOptions']),
        'removeVolumeOptions': V1RemoveVolumeOptionsToJSON(value['removeVolumeOptions']),
    };
}

