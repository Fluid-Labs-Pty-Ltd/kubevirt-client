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
import type { V1DomainSpec } from './V1DomainSpec.js';
import {
    V1DomainSpecFromJSON,
    V1DomainSpecFromJSONTyped,
    V1DomainSpecToJSON,
    V1DomainSpecToJSONTyped,
} from './V1DomainSpec.js';
import type { K8sIoApimachineryPkgApisMetaV1LabelSelector } from './K8sIoApimachineryPkgApisMetaV1LabelSelector.js';
import {
    K8sIoApimachineryPkgApisMetaV1LabelSelectorFromJSON,
    K8sIoApimachineryPkgApisMetaV1LabelSelectorFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1LabelSelectorToJSON,
    K8sIoApimachineryPkgApisMetaV1LabelSelectorToJSONTyped,
} from './K8sIoApimachineryPkgApisMetaV1LabelSelector.js';

/**
 * 
 * @export
 * @interface V1VirtualMachineInstancePresetSpec
 */
export interface V1VirtualMachineInstancePresetSpec {
    /**
     * 
     * @type {V1DomainSpec}
     * @memberof V1VirtualMachineInstancePresetSpec
     */
    domain?: V1DomainSpec;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1LabelSelector}
     * @memberof V1VirtualMachineInstancePresetSpec
     */
    selector: K8sIoApimachineryPkgApisMetaV1LabelSelector;
}

/**
 * Check if a given object implements the V1VirtualMachineInstancePresetSpec interface.
 */
export function instanceOfV1VirtualMachineInstancePresetSpec(value: object): value is V1VirtualMachineInstancePresetSpec {
    if (!('selector' in value) || value['selector'] === undefined) return false;
    return true;
}

export function V1VirtualMachineInstancePresetSpecFromJSON(json: any): V1VirtualMachineInstancePresetSpec {
    return V1VirtualMachineInstancePresetSpecFromJSONTyped(json, false);
}

export function V1VirtualMachineInstancePresetSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VirtualMachineInstancePresetSpec {
    if (json == null) {
        return json;
    }
    return {
        
        'domain': json['domain'] == null ? undefined : V1DomainSpecFromJSON(json['domain']),
        'selector': K8sIoApimachineryPkgApisMetaV1LabelSelectorFromJSON(json['selector']),
    };
}

export function V1VirtualMachineInstancePresetSpecToJSON(json: any): V1VirtualMachineInstancePresetSpec {
    return V1VirtualMachineInstancePresetSpecToJSONTyped(json, false);
}

export function V1VirtualMachineInstancePresetSpecToJSONTyped(value?: V1VirtualMachineInstancePresetSpec | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'domain': V1DomainSpecToJSON(value['domain']),
        'selector': K8sIoApimachineryPkgApisMetaV1LabelSelectorToJSON(value['selector']),
    };
}

