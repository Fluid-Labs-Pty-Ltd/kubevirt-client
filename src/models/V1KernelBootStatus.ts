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
import type { V1InitrdInfo } from './V1InitrdInfo.js';
import {
    V1InitrdInfoFromJSON,
    V1InitrdInfoFromJSONTyped,
    V1InitrdInfoToJSON,
    V1InitrdInfoToJSONTyped,
} from './V1InitrdInfo.js';
import type { V1KernelInfo } from './V1KernelInfo.js';
import {
    V1KernelInfoFromJSON,
    V1KernelInfoFromJSONTyped,
    V1KernelInfoToJSON,
    V1KernelInfoToJSONTyped,
} from './V1KernelInfo.js';

/**
 * KernelBootStatus contains info about the kernelBootContainer
 * @export
 * @interface V1KernelBootStatus
 */
export interface V1KernelBootStatus {
    /**
     * 
     * @type {V1InitrdInfo}
     * @memberof V1KernelBootStatus
     */
    initrdInfo?: V1InitrdInfo;
    /**
     * 
     * @type {V1KernelInfo}
     * @memberof V1KernelBootStatus
     */
    kernelInfo?: V1KernelInfo;
}

/**
 * Check if a given object implements the V1KernelBootStatus interface.
 */
export function instanceOfV1KernelBootStatus(value: object): value is V1KernelBootStatus {
    return true;
}

export function V1KernelBootStatusFromJSON(json: any): V1KernelBootStatus {
    return V1KernelBootStatusFromJSONTyped(json, false);
}

export function V1KernelBootStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1KernelBootStatus {
    if (json == null) {
        return json;
    }
    return {
        
        'initrdInfo': json['initrdInfo'] == null ? undefined : V1InitrdInfoFromJSON(json['initrdInfo']),
        'kernelInfo': json['kernelInfo'] == null ? undefined : V1KernelInfoFromJSON(json['kernelInfo']),
    };
}

export function V1KernelBootStatusToJSON(json: any): V1KernelBootStatus {
    return V1KernelBootStatusToJSONTyped(json, false);
}

export function V1KernelBootStatusToJSONTyped(value?: V1KernelBootStatus | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'initrdInfo': V1InitrdInfoToJSON(value['initrdInfo']),
        'kernelInfo': V1KernelInfoToJSON(value['kernelInfo']),
    };
}

