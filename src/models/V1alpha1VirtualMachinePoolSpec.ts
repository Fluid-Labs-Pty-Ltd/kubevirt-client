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
import type { V1alpha1VirtualMachineTemplateSpec } from './V1alpha1VirtualMachineTemplateSpec';
import {
    V1alpha1VirtualMachineTemplateSpecFromJSON,
    V1alpha1VirtualMachineTemplateSpecFromJSONTyped,
    V1alpha1VirtualMachineTemplateSpecToJSON,
    V1alpha1VirtualMachineTemplateSpecToJSONTyped,
} from './V1alpha1VirtualMachineTemplateSpec';
import type { K8sIoApimachineryPkgApisMetaV1LabelSelector } from './K8sIoApimachineryPkgApisMetaV1LabelSelector';
import {
    K8sIoApimachineryPkgApisMetaV1LabelSelectorFromJSON,
    K8sIoApimachineryPkgApisMetaV1LabelSelectorFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1LabelSelectorToJSON,
    K8sIoApimachineryPkgApisMetaV1LabelSelectorToJSONTyped,
} from './K8sIoApimachineryPkgApisMetaV1LabelSelector';

/**
 * 
 * @export
 * @interface V1alpha1VirtualMachinePoolSpec
 */
export interface V1alpha1VirtualMachinePoolSpec {
    /**
     * Indicates that the pool is paused.
     * @type {boolean}
     * @memberof V1alpha1VirtualMachinePoolSpec
     */
    paused?: boolean;
    /**
     * Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
     * @type {number}
     * @memberof V1alpha1VirtualMachinePoolSpec
     */
    replicas?: number;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1LabelSelector}
     * @memberof V1alpha1VirtualMachinePoolSpec
     */
    selector: K8sIoApimachineryPkgApisMetaV1LabelSelector;
    /**
     * 
     * @type {V1alpha1VirtualMachineTemplateSpec}
     * @memberof V1alpha1VirtualMachinePoolSpec
     */
    virtualMachineTemplate: V1alpha1VirtualMachineTemplateSpec;
}

/**
 * Check if a given object implements the V1alpha1VirtualMachinePoolSpec interface.
 */
export function instanceOfV1alpha1VirtualMachinePoolSpec(value: object): value is V1alpha1VirtualMachinePoolSpec {
    if (!('selector' in value) || value['selector'] === undefined) return false;
    if (!('virtualMachineTemplate' in value) || value['virtualMachineTemplate'] === undefined) return false;
    return true;
}

export function V1alpha1VirtualMachinePoolSpecFromJSON(json: any): V1alpha1VirtualMachinePoolSpec {
    return V1alpha1VirtualMachinePoolSpecFromJSONTyped(json, false);
}

export function V1alpha1VirtualMachinePoolSpecFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1alpha1VirtualMachinePoolSpec {
    if (json == null) {
        return json;
    }
    return {
        
        'paused': json['paused'] == null ? undefined : json['paused'],
        'replicas': json['replicas'] == null ? undefined : json['replicas'],
        'selector': K8sIoApimachineryPkgApisMetaV1LabelSelectorFromJSON(json['selector']),
        'virtualMachineTemplate': V1alpha1VirtualMachineTemplateSpecFromJSON(json['virtualMachineTemplate']),
    };
}

export function V1alpha1VirtualMachinePoolSpecToJSON(json: any): V1alpha1VirtualMachinePoolSpec {
    return V1alpha1VirtualMachinePoolSpecToJSONTyped(json, false);
}

export function V1alpha1VirtualMachinePoolSpecToJSONTyped(value?: V1alpha1VirtualMachinePoolSpec | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'paused': value['paused'],
        'replicas': value['replicas'],
        'selector': K8sIoApimachineryPkgApisMetaV1LabelSelectorToJSON(value['selector']),
        'virtualMachineTemplate': V1alpha1VirtualMachineTemplateSpecToJSON(value['virtualMachineTemplate']),
    };
}

