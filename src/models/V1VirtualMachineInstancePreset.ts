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
import type { V1VirtualMachineInstancePresetSpec } from './V1VirtualMachineInstancePresetSpec';
import {
    V1VirtualMachineInstancePresetSpecFromJSON,
    V1VirtualMachineInstancePresetSpecFromJSONTyped,
    V1VirtualMachineInstancePresetSpecToJSON,
    V1VirtualMachineInstancePresetSpecToJSONTyped,
} from './V1VirtualMachineInstancePresetSpec';
import type { K8sIoApimachineryPkgApisMetaV1ObjectMeta } from './K8sIoApimachineryPkgApisMetaV1ObjectMeta';
import {
    K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSONTyped,
} from './K8sIoApimachineryPkgApisMetaV1ObjectMeta';

/**
 * Deprecated for removal in v2, please use VirtualMachineInstanceType and VirtualMachinePreference instead.
 * 
 * VirtualMachineInstancePreset defines a VMI spec.domain to be applied to all VMIs that match the provided label selector More info: https://kubevirt.io/user-guide/virtual_machines/presets/#overrides
 * @export
 * @interface V1VirtualMachineInstancePreset
 */
export interface V1VirtualMachineInstancePreset {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1VirtualMachineInstancePreset
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1VirtualMachineInstancePreset
     */
    kind?: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof V1VirtualMachineInstancePreset
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {V1VirtualMachineInstancePresetSpec}
     * @memberof V1VirtualMachineInstancePreset
     */
    spec?: V1VirtualMachineInstancePresetSpec;
}

/**
 * Check if a given object implements the V1VirtualMachineInstancePreset interface.
 */
export function instanceOfV1VirtualMachineInstancePreset(value: object): value is V1VirtualMachineInstancePreset {
    return true;
}

export function V1VirtualMachineInstancePresetFromJSON(json: any): V1VirtualMachineInstancePreset {
    return V1VirtualMachineInstancePresetFromJSONTyped(json, false);
}

export function V1VirtualMachineInstancePresetFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VirtualMachineInstancePreset {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': json['spec'] == null ? undefined : V1VirtualMachineInstancePresetSpecFromJSON(json['spec']),
    };
}

export function V1VirtualMachineInstancePresetToJSON(json: any): V1VirtualMachineInstancePreset {
    return V1VirtualMachineInstancePresetToJSONTyped(json, false);
}

export function V1VirtualMachineInstancePresetToJSONTyped(value?: V1VirtualMachineInstancePreset | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
        'metadata': K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON(value['metadata']),
        'spec': V1VirtualMachineInstancePresetSpecToJSON(value['spec']),
    };
}

