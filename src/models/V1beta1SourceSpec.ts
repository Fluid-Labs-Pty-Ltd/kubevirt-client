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
import type { V1beta1VirtualMachine } from './V1beta1VirtualMachine.js';
import {
    V1beta1VirtualMachineFromJSON,
    V1beta1VirtualMachineFromJSONTyped,
    V1beta1VirtualMachineToJSON,
    V1beta1VirtualMachineToJSONTyped,
} from './V1beta1VirtualMachine.js';

/**
 * SourceSpec contains the appropriate spec for the resource being snapshotted
 * @export
 * @interface V1beta1SourceSpec
 */
export interface V1beta1SourceSpec {
    /**
     * 
     * @type {V1beta1VirtualMachine}
     * @memberof V1beta1SourceSpec
     */
    virtualMachine?: V1beta1VirtualMachine;
}

/**
 * Check if a given object implements the V1beta1SourceSpec interface.
 */
export function instanceOfV1beta1SourceSpec(value: object): value is V1beta1SourceSpec {
    return true;
}

export function V1beta1SourceSpecFromJSON(json: any): V1beta1SourceSpec {
    return V1beta1SourceSpecFromJSONTyped(json, false);
}

export function V1beta1SourceSpecFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1beta1SourceSpec {
    if (json == null) {
        return json;
    }
    return {
        
        'virtualMachine': json['virtualMachine'] == null ? undefined : V1beta1VirtualMachineFromJSON(json['virtualMachine']),
    };
}

export function V1beta1SourceSpecToJSON(json: any): V1beta1SourceSpec {
    return V1beta1SourceSpecToJSONTyped(json, false);
}

export function V1beta1SourceSpecToJSONTyped(value?: V1beta1SourceSpec | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'virtualMachine': V1beta1VirtualMachineToJSON(value['virtualMachine']),
    };
}

