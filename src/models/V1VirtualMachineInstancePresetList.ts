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
import type { V1VirtualMachineInstancePreset } from './V1VirtualMachineInstancePreset';
import {
    V1VirtualMachineInstancePresetFromJSON,
    V1VirtualMachineInstancePresetFromJSONTyped,
    V1VirtualMachineInstancePresetToJSON,
    V1VirtualMachineInstancePresetToJSONTyped,
} from './V1VirtualMachineInstancePreset';
import type { K8sIoApimachineryPkgApisMetaV1ListMeta } from './K8sIoApimachineryPkgApisMetaV1ListMeta';
import {
    K8sIoApimachineryPkgApisMetaV1ListMetaFromJSON,
    K8sIoApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1ListMetaToJSON,
    K8sIoApimachineryPkgApisMetaV1ListMetaToJSONTyped,
} from './K8sIoApimachineryPkgApisMetaV1ListMeta';

/**
 * VirtualMachineInstancePresetList is a list of VirtualMachinePresets
 * @export
 * @interface V1VirtualMachineInstancePresetList
 */
export interface V1VirtualMachineInstancePresetList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1VirtualMachineInstancePresetList
     */
    apiVersion?: string;
    /**
     * 
     * @type {Array<V1VirtualMachineInstancePreset>}
     * @memberof V1VirtualMachineInstancePresetList
     */
    items: Array<V1VirtualMachineInstancePreset>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1VirtualMachineInstancePresetList
     */
    kind?: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ListMeta}
     * @memberof V1VirtualMachineInstancePresetList
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ListMeta;
}

/**
 * Check if a given object implements the V1VirtualMachineInstancePresetList interface.
 */
export function instanceOfV1VirtualMachineInstancePresetList(value: object): value is V1VirtualMachineInstancePresetList {
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function V1VirtualMachineInstancePresetListFromJSON(json: any): V1VirtualMachineInstancePresetList {
    return V1VirtualMachineInstancePresetListFromJSONTyped(json, false);
}

export function V1VirtualMachineInstancePresetListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VirtualMachineInstancePresetList {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1VirtualMachineInstancePresetFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : K8sIoApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function V1VirtualMachineInstancePresetListToJSON(json: any): V1VirtualMachineInstancePresetList {
    return V1VirtualMachineInstancePresetListToJSONTyped(json, false);
}

export function V1VirtualMachineInstancePresetListToJSONTyped(value?: V1VirtualMachineInstancePresetList | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'apiVersion': value['apiVersion'],
        'items': ((value['items'] as Array<any>).map(V1VirtualMachineInstancePresetToJSON)),
        'kind': value['kind'],
        'metadata': K8sIoApimachineryPkgApisMetaV1ListMetaToJSON(value['metadata']),
    };
}

