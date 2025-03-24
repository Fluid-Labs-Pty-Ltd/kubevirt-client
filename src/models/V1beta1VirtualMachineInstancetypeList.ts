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
import type { V1beta1VirtualMachineInstancetype } from './V1beta1VirtualMachineInstancetype';
import {
    V1beta1VirtualMachineInstancetypeFromJSON,
    V1beta1VirtualMachineInstancetypeFromJSONTyped,
    V1beta1VirtualMachineInstancetypeToJSON,
    V1beta1VirtualMachineInstancetypeToJSONTyped,
} from './V1beta1VirtualMachineInstancetype';

/**
 * VirtualMachineInstancetypeList is a list of VirtualMachineInstancetype resources.
 * @export
 * @interface V1beta1VirtualMachineInstancetypeList
 */
export interface V1beta1VirtualMachineInstancetypeList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta1VirtualMachineInstancetypeList
     */
    apiVersion?: string;
    /**
     * 
     * @type {Array<V1beta1VirtualMachineInstancetype>}
     * @memberof V1beta1VirtualMachineInstancetypeList
     */
    items: Array<V1beta1VirtualMachineInstancetype>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta1VirtualMachineInstancetypeList
     */
    kind?: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ListMeta}
     * @memberof V1beta1VirtualMachineInstancetypeList
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ListMeta;
}

/**
 * Check if a given object implements the V1beta1VirtualMachineInstancetypeList interface.
 */
export function instanceOfV1beta1VirtualMachineInstancetypeList(value: object): value is V1beta1VirtualMachineInstancetypeList {
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function V1beta1VirtualMachineInstancetypeListFromJSON(json: any): V1beta1VirtualMachineInstancetypeList {
    return V1beta1VirtualMachineInstancetypeListFromJSONTyped(json, false);
}

export function V1beta1VirtualMachineInstancetypeListFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1beta1VirtualMachineInstancetypeList {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1beta1VirtualMachineInstancetypeFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : K8sIoApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function V1beta1VirtualMachineInstancetypeListToJSON(json: any): V1beta1VirtualMachineInstancetypeList {
    return V1beta1VirtualMachineInstancetypeListToJSONTyped(json, false);
}

export function V1beta1VirtualMachineInstancetypeListToJSONTyped(value?: V1beta1VirtualMachineInstancetypeList | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'apiVersion': value['apiVersion'],
        'items': ((value['items'] as Array<any>).map(V1beta1VirtualMachineInstancetypeToJSON)),
        'kind': value['kind'],
        'metadata': K8sIoApimachineryPkgApisMetaV1ListMetaToJSON(value['metadata']),
    };
}

