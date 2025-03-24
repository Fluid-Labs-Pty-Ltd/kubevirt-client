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
import type { V1beta1VirtualMachineClusterInstancetype } from './V1beta1VirtualMachineClusterInstancetype';
import {
    V1beta1VirtualMachineClusterInstancetypeFromJSON,
    V1beta1VirtualMachineClusterInstancetypeFromJSONTyped,
    V1beta1VirtualMachineClusterInstancetypeToJSON,
    V1beta1VirtualMachineClusterInstancetypeToJSONTyped,
} from './V1beta1VirtualMachineClusterInstancetype';

/**
 * VirtualMachineClusterInstancetypeList is a list of VirtualMachineClusterInstancetype resources.
 * @export
 * @interface V1beta1VirtualMachineClusterInstancetypeList
 */
export interface V1beta1VirtualMachineClusterInstancetypeList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta1VirtualMachineClusterInstancetypeList
     */
    apiVersion?: string;
    /**
     * 
     * @type {Array<V1beta1VirtualMachineClusterInstancetype>}
     * @memberof V1beta1VirtualMachineClusterInstancetypeList
     */
    items: Array<V1beta1VirtualMachineClusterInstancetype>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta1VirtualMachineClusterInstancetypeList
     */
    kind?: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ListMeta}
     * @memberof V1beta1VirtualMachineClusterInstancetypeList
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ListMeta;
}

/**
 * Check if a given object implements the V1beta1VirtualMachineClusterInstancetypeList interface.
 */
export function instanceOfV1beta1VirtualMachineClusterInstancetypeList(value: object): value is V1beta1VirtualMachineClusterInstancetypeList {
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function V1beta1VirtualMachineClusterInstancetypeListFromJSON(json: any): V1beta1VirtualMachineClusterInstancetypeList {
    return V1beta1VirtualMachineClusterInstancetypeListFromJSONTyped(json, false);
}

export function V1beta1VirtualMachineClusterInstancetypeListFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1beta1VirtualMachineClusterInstancetypeList {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1beta1VirtualMachineClusterInstancetypeFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : K8sIoApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function V1beta1VirtualMachineClusterInstancetypeListToJSON(json: any): V1beta1VirtualMachineClusterInstancetypeList {
    return V1beta1VirtualMachineClusterInstancetypeListToJSONTyped(json, false);
}

export function V1beta1VirtualMachineClusterInstancetypeListToJSONTyped(value?: V1beta1VirtualMachineClusterInstancetypeList | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'apiVersion': value['apiVersion'],
        'items': ((value['items'] as Array<any>).map(V1beta1VirtualMachineClusterInstancetypeToJSON)),
        'kind': value['kind'],
        'metadata': K8sIoApimachineryPkgApisMetaV1ListMetaToJSON(value['metadata']),
    };
}

