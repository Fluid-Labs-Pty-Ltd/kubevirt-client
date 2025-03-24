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
import type { V1VirtualMachineInstance } from './V1VirtualMachineInstance';
import {
    V1VirtualMachineInstanceFromJSON,
    V1VirtualMachineInstanceFromJSONTyped,
    V1VirtualMachineInstanceToJSON,
    V1VirtualMachineInstanceToJSONTyped,
} from './V1VirtualMachineInstance';

/**
 * VirtualMachineInstanceList is a list of VirtualMachines
 * @export
 * @interface V1VirtualMachineInstanceList
 */
export interface V1VirtualMachineInstanceList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1VirtualMachineInstanceList
     */
    apiVersion?: string;
    /**
     * 
     * @type {Array<V1VirtualMachineInstance>}
     * @memberof V1VirtualMachineInstanceList
     */
    items: Array<V1VirtualMachineInstance>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1VirtualMachineInstanceList
     */
    kind?: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ListMeta}
     * @memberof V1VirtualMachineInstanceList
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ListMeta;
}

/**
 * Check if a given object implements the V1VirtualMachineInstanceList interface.
 */
export function instanceOfV1VirtualMachineInstanceList(value: object): value is V1VirtualMachineInstanceList {
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function V1VirtualMachineInstanceListFromJSON(json: any): V1VirtualMachineInstanceList {
    return V1VirtualMachineInstanceListFromJSONTyped(json, false);
}

export function V1VirtualMachineInstanceListFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1VirtualMachineInstanceList {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1VirtualMachineInstanceFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : K8sIoApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function V1VirtualMachineInstanceListToJSON(json: any): V1VirtualMachineInstanceList {
    return V1VirtualMachineInstanceListToJSONTyped(json, false);
}

export function V1VirtualMachineInstanceListToJSONTyped(value?: V1VirtualMachineInstanceList | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'apiVersion': value['apiVersion'],
        'items': ((value['items'] as Array<any>).map(V1VirtualMachineInstanceToJSON)),
        'kind': value['kind'],
        'metadata': K8sIoApimachineryPkgApisMetaV1ListMetaToJSON(value['metadata']),
    };
}

