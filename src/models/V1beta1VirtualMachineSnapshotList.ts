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
import type { K8sIoApimachineryPkgApisMetaV1ListMeta } from './K8sIoApimachineryPkgApisMetaV1ListMeta.js';
import {
    K8sIoApimachineryPkgApisMetaV1ListMetaFromJSON,
    K8sIoApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1ListMetaToJSON,
    K8sIoApimachineryPkgApisMetaV1ListMetaToJSONTyped,
} from './K8sIoApimachineryPkgApisMetaV1ListMeta.js';
import type { V1beta1VirtualMachineSnapshot } from './V1beta1VirtualMachineSnapshot.js';
import {
    V1beta1VirtualMachineSnapshotFromJSON,
    V1beta1VirtualMachineSnapshotFromJSONTyped,
    V1beta1VirtualMachineSnapshotToJSON,
    V1beta1VirtualMachineSnapshotToJSONTyped,
} from './V1beta1VirtualMachineSnapshot.js';

/**
 * VirtualMachineSnapshotList is a list of VirtualMachineSnapshot resources
 * @export
 * @interface V1beta1VirtualMachineSnapshotList
 */
export interface V1beta1VirtualMachineSnapshotList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta1VirtualMachineSnapshotList
     */
    apiVersion?: string;
    /**
     * 
     * @type {Array<V1beta1VirtualMachineSnapshot>}
     * @memberof V1beta1VirtualMachineSnapshotList
     */
    items: Array<V1beta1VirtualMachineSnapshot>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta1VirtualMachineSnapshotList
     */
    kind?: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ListMeta}
     * @memberof V1beta1VirtualMachineSnapshotList
     */
    metadata: K8sIoApimachineryPkgApisMetaV1ListMeta;
}

/**
 * Check if a given object implements the V1beta1VirtualMachineSnapshotList interface.
 */
export function instanceOfV1beta1VirtualMachineSnapshotList(value: object): value is V1beta1VirtualMachineSnapshotList {
    if (!('items' in value) || value['items'] === undefined) return false;
    if (!('metadata' in value) || value['metadata'] === undefined) return false;
    return true;
}

export function V1beta1VirtualMachineSnapshotListFromJSON(json: any): V1beta1VirtualMachineSnapshotList {
    return V1beta1VirtualMachineSnapshotListFromJSONTyped(json, false);
}

export function V1beta1VirtualMachineSnapshotListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1VirtualMachineSnapshotList {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1beta1VirtualMachineSnapshotFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': K8sIoApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function V1beta1VirtualMachineSnapshotListToJSON(json: any): V1beta1VirtualMachineSnapshotList {
    return V1beta1VirtualMachineSnapshotListToJSONTyped(json, false);
}

export function V1beta1VirtualMachineSnapshotListToJSONTyped(value?: V1beta1VirtualMachineSnapshotList | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'apiVersion': value['apiVersion'],
        'items': ((value['items'] as Array<any>).map(V1beta1VirtualMachineSnapshotToJSON)),
        'kind': value['kind'],
        'metadata': K8sIoApimachineryPkgApisMetaV1ListMetaToJSON(value['metadata']),
    };
}

