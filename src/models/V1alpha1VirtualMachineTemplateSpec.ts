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
import type { V1VirtualMachineSpec } from './V1VirtualMachineSpec';
import {
    V1VirtualMachineSpecFromJSON,
    V1VirtualMachineSpecFromJSONTyped,
    V1VirtualMachineSpecToJSON,
    V1VirtualMachineSpecToJSONTyped,
} from './V1VirtualMachineSpec';
import type { K8sIoApimachineryPkgApisMetaV1ObjectMeta } from './K8sIoApimachineryPkgApisMetaV1ObjectMeta';
import {
    K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSONTyped,
} from './K8sIoApimachineryPkgApisMetaV1ObjectMeta';

/**
 * 
 * @export
 * @interface V1alpha1VirtualMachineTemplateSpec
 */
export interface V1alpha1VirtualMachineTemplateSpec {
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof V1alpha1VirtualMachineTemplateSpec
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {V1VirtualMachineSpec}
     * @memberof V1alpha1VirtualMachineTemplateSpec
     */
    spec?: V1VirtualMachineSpec;
}

/**
 * Check if a given object implements the V1alpha1VirtualMachineTemplateSpec interface.
 */
export function instanceOfV1alpha1VirtualMachineTemplateSpec(value: object): value is V1alpha1VirtualMachineTemplateSpec {
    return true;
}

export function V1alpha1VirtualMachineTemplateSpecFromJSON(json: any): V1alpha1VirtualMachineTemplateSpec {
    return V1alpha1VirtualMachineTemplateSpecFromJSONTyped(json, false);
}

export function V1alpha1VirtualMachineTemplateSpecFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1alpha1VirtualMachineTemplateSpec {
    if (json == null) {
        return json;
    }
    return {
        
        'metadata': json['metadata'] == null ? undefined : K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': json['spec'] == null ? undefined : V1VirtualMachineSpecFromJSON(json['spec']),
    };
}

export function V1alpha1VirtualMachineTemplateSpecToJSON(json: any): V1alpha1VirtualMachineTemplateSpec {
    return V1alpha1VirtualMachineTemplateSpecToJSONTyped(json, false);
}

export function V1alpha1VirtualMachineTemplateSpecToJSONTyped(value?: V1alpha1VirtualMachineTemplateSpec | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'metadata': K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON(value['metadata']),
        'spec': V1VirtualMachineSpecToJSON(value['spec']),
    };
}

