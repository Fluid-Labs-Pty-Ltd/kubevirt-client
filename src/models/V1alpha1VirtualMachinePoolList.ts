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
import type { K8sIoApimachineryPkgApisMetaV1ListMeta } from './K8sIoApimachineryPkgApisMetaV1ListMeta';
import {
    K8sIoApimachineryPkgApisMetaV1ListMetaFromJSON,
    K8sIoApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1ListMetaToJSON,
    K8sIoApimachineryPkgApisMetaV1ListMetaToJSONTyped,
} from './K8sIoApimachineryPkgApisMetaV1ListMeta';
import type { V1alpha1VirtualMachinePool } from './V1alpha1VirtualMachinePool';
import {
    V1alpha1VirtualMachinePoolFromJSON,
    V1alpha1VirtualMachinePoolFromJSONTyped,
    V1alpha1VirtualMachinePoolToJSON,
    V1alpha1VirtualMachinePoolToJSONTyped,
} from './V1alpha1VirtualMachinePool';

/**
 * VirtualMachinePoolList is a list of VirtualMachinePool resources.
 * @export
 * @interface V1alpha1VirtualMachinePoolList
 */
export interface V1alpha1VirtualMachinePoolList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1alpha1VirtualMachinePoolList
     */
    apiVersion?: string;
    /**
     * 
     * @type {Array<V1alpha1VirtualMachinePool>}
     * @memberof V1alpha1VirtualMachinePoolList
     */
    items: Array<V1alpha1VirtualMachinePool>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1alpha1VirtualMachinePoolList
     */
    kind?: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ListMeta}
     * @memberof V1alpha1VirtualMachinePoolList
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ListMeta;
}

/**
 * Check if a given object implements the V1alpha1VirtualMachinePoolList interface.
 */
export function instanceOfV1alpha1VirtualMachinePoolList(value: object): value is V1alpha1VirtualMachinePoolList {
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function V1alpha1VirtualMachinePoolListFromJSON(json: any): V1alpha1VirtualMachinePoolList {
    return V1alpha1VirtualMachinePoolListFromJSONTyped(json, false);
}

export function V1alpha1VirtualMachinePoolListFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1alpha1VirtualMachinePoolList {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1alpha1VirtualMachinePoolFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : K8sIoApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function V1alpha1VirtualMachinePoolListToJSON(json: any): V1alpha1VirtualMachinePoolList {
    return V1alpha1VirtualMachinePoolListToJSONTyped(json, false);
}

export function V1alpha1VirtualMachinePoolListToJSONTyped(value?: V1alpha1VirtualMachinePoolList | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'apiVersion': value['apiVersion'],
        'items': ((value['items'] as Array<any>).map(V1alpha1VirtualMachinePoolToJSON)),
        'kind': value['kind'],
        'metadata': K8sIoApimachineryPkgApisMetaV1ListMetaToJSON(value['metadata']),
    };
}

