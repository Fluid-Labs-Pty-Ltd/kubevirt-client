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
 * VirtualMachineOptions holds the cluster level information regarding the virtual machine.
 * @export
 * @interface V1VirtualMachineOptions
 */
export interface V1VirtualMachineOptions {
    /**
     * 
     * @type {object}
     * @memberof V1VirtualMachineOptions
     */
    disableFreePageReporting?: object;
    /**
     * 
     * @type {object}
     * @memberof V1VirtualMachineOptions
     */
    disableSerialConsoleLog?: object;
}

/**
 * Check if a given object implements the V1VirtualMachineOptions interface.
 */
export function instanceOfV1VirtualMachineOptions(value: object): value is V1VirtualMachineOptions {
    return true;
}

export function V1VirtualMachineOptionsFromJSON(json: any): V1VirtualMachineOptions {
    return V1VirtualMachineOptionsFromJSONTyped(json, false);
}

export function V1VirtualMachineOptionsFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1VirtualMachineOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'disableFreePageReporting': json['disableFreePageReporting'] == null ? undefined : json['disableFreePageReporting'],
        'disableSerialConsoleLog': json['disableSerialConsoleLog'] == null ? undefined : json['disableSerialConsoleLog'],
    };
}

export function V1VirtualMachineOptionsToJSON(json: any): V1VirtualMachineOptions {
    return V1VirtualMachineOptionsToJSONTyped(json, false);
}

export function V1VirtualMachineOptionsToJSONTyped(value?: V1VirtualMachineOptions | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'disableFreePageReporting': value['disableFreePageReporting'],
        'disableSerialConsoleLog': value['disableSerialConsoleLog'],
    };
}

