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
import type { V1VGPUOptions } from './V1VGPUOptions.js';
import {
    V1VGPUOptionsFromJSON,
    V1VGPUOptionsFromJSONTyped,
    V1VGPUOptionsToJSON,
    V1VGPUOptionsToJSONTyped,
} from './V1VGPUOptions.js';

/**
 * 
 * @export
 * @interface V1GPU
 */
export interface V1GPU {
    /**
     * 
     * @type {string}
     * @memberof V1GPU
     */
    deviceName: string;
    /**
     * Name of the GPU device as exposed by a device plugin
     * @type {string}
     * @memberof V1GPU
     */
    name: string;
    /**
     * If specified, the virtual network interface address and its tag will be provided to the guest via config drive
     * @type {string}
     * @memberof V1GPU
     */
    tag?: string;
    /**
     * 
     * @type {V1VGPUOptions}
     * @memberof V1GPU
     */
    virtualGPUOptions?: V1VGPUOptions;
}

/**
 * Check if a given object implements the V1GPU interface.
 */
export function instanceOfV1GPU(value: object): value is V1GPU {
    if (!('deviceName' in value) || value['deviceName'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function V1GPUFromJSON(json: any): V1GPU {
    return V1GPUFromJSONTyped(json, false);
}

export function V1GPUFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1GPU {
    if (json == null) {
        return json;
    }
    return {
        
        'deviceName': json['deviceName'],
        'name': json['name'],
        'tag': json['tag'] == null ? undefined : json['tag'],
        'virtualGPUOptions': json['virtualGPUOptions'] == null ? undefined : V1VGPUOptionsFromJSON(json['virtualGPUOptions']),
    };
}

export function V1GPUToJSON(json: any): V1GPU {
    return V1GPUToJSONTyped(json, false);
}

export function V1GPUToJSONTyped(value?: V1GPU | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'deviceName': value['deviceName'],
        'name': value['name'],
        'tag': value['tag'],
        'virtualGPUOptions': V1VGPUOptionsToJSON(value['virtualGPUOptions']),
    };
}

