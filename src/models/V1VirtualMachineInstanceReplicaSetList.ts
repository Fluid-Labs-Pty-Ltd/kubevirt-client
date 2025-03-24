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
import type { V1VirtualMachineInstanceReplicaSet } from './V1VirtualMachineInstanceReplicaSet';
import {
    V1VirtualMachineInstanceReplicaSetFromJSON,
    V1VirtualMachineInstanceReplicaSetFromJSONTyped,
    V1VirtualMachineInstanceReplicaSetToJSON,
    V1VirtualMachineInstanceReplicaSetToJSONTyped,
} from './V1VirtualMachineInstanceReplicaSet';

/**
 * VMIList is a list of VMIs
 * @export
 * @interface V1VirtualMachineInstanceReplicaSetList
 */
export interface V1VirtualMachineInstanceReplicaSetList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1VirtualMachineInstanceReplicaSetList
     */
    apiVersion?: string;
    /**
     * 
     * @type {Array<V1VirtualMachineInstanceReplicaSet>}
     * @memberof V1VirtualMachineInstanceReplicaSetList
     */
    items: Array<V1VirtualMachineInstanceReplicaSet>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1VirtualMachineInstanceReplicaSetList
     */
    kind?: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ListMeta}
     * @memberof V1VirtualMachineInstanceReplicaSetList
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ListMeta;
}

/**
 * Check if a given object implements the V1VirtualMachineInstanceReplicaSetList interface.
 */
export function instanceOfV1VirtualMachineInstanceReplicaSetList(value: object): value is V1VirtualMachineInstanceReplicaSetList {
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function V1VirtualMachineInstanceReplicaSetListFromJSON(json: any): V1VirtualMachineInstanceReplicaSetList {
    return V1VirtualMachineInstanceReplicaSetListFromJSONTyped(json, false);
}

export function V1VirtualMachineInstanceReplicaSetListFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1VirtualMachineInstanceReplicaSetList {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1VirtualMachineInstanceReplicaSetFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : K8sIoApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function V1VirtualMachineInstanceReplicaSetListToJSON(json: any): V1VirtualMachineInstanceReplicaSetList {
    return V1VirtualMachineInstanceReplicaSetListToJSONTyped(json, false);
}

export function V1VirtualMachineInstanceReplicaSetListToJSONTyped(value?: V1VirtualMachineInstanceReplicaSetList | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'apiVersion': value['apiVersion'],
        'items': ((value['items'] as Array<any>).map(V1VirtualMachineInstanceReplicaSetToJSON)),
        'kind': value['kind'],
        'metadata': K8sIoApimachineryPkgApisMetaV1ListMetaToJSON(value['metadata']),
    };
}

