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
import type { V1beta1VirtualMachineSnapshotStatus } from './V1beta1VirtualMachineSnapshotStatus.js';
import {
    V1beta1VirtualMachineSnapshotStatusFromJSON,
    V1beta1VirtualMachineSnapshotStatusFromJSONTyped,
    V1beta1VirtualMachineSnapshotStatusToJSON,
    V1beta1VirtualMachineSnapshotStatusToJSONTyped,
} from './V1beta1VirtualMachineSnapshotStatus.js';
import type { K8sIoApimachineryPkgApisMetaV1ObjectMeta } from './K8sIoApimachineryPkgApisMetaV1ObjectMeta.js';
import {
    K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSONTyped,
} from './K8sIoApimachineryPkgApisMetaV1ObjectMeta.js';
import type { V1beta1VirtualMachineSnapshotSpec } from './V1beta1VirtualMachineSnapshotSpec.js';
import {
    V1beta1VirtualMachineSnapshotSpecFromJSON,
    V1beta1VirtualMachineSnapshotSpecFromJSONTyped,
    V1beta1VirtualMachineSnapshotSpecToJSON,
    V1beta1VirtualMachineSnapshotSpecToJSONTyped,
} from './V1beta1VirtualMachineSnapshotSpec.js';

/**
 * VirtualMachineSnapshot defines the operation of snapshotting a VM
 * @export
 * @interface V1beta1VirtualMachineSnapshot
 */
export interface V1beta1VirtualMachineSnapshot {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta1VirtualMachineSnapshot
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta1VirtualMachineSnapshot
     */
    kind?: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof V1beta1VirtualMachineSnapshot
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {V1beta1VirtualMachineSnapshotSpec}
     * @memberof V1beta1VirtualMachineSnapshot
     */
    spec: V1beta1VirtualMachineSnapshotSpec;
    /**
     * 
     * @type {V1beta1VirtualMachineSnapshotStatus}
     * @memberof V1beta1VirtualMachineSnapshot
     */
    status?: V1beta1VirtualMachineSnapshotStatus;
}

/**
 * Check if a given object implements the V1beta1VirtualMachineSnapshot interface.
 */
export function instanceOfV1beta1VirtualMachineSnapshot(value: object): value is V1beta1VirtualMachineSnapshot {
    if (!('spec' in value) || value['spec'] === undefined) return false;
    return true;
}

export function V1beta1VirtualMachineSnapshotFromJSON(json: any): V1beta1VirtualMachineSnapshot {
    return V1beta1VirtualMachineSnapshotFromJSONTyped(json, false);
}

export function V1beta1VirtualMachineSnapshotFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1beta1VirtualMachineSnapshot {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': V1beta1VirtualMachineSnapshotSpecFromJSON(json['spec']),
        'status': json['status'] == null ? undefined : V1beta1VirtualMachineSnapshotStatusFromJSON(json['status']),
    };
}

export function V1beta1VirtualMachineSnapshotToJSON(json: any): V1beta1VirtualMachineSnapshot {
    return V1beta1VirtualMachineSnapshotToJSONTyped(json, false);
}

export function V1beta1VirtualMachineSnapshotToJSONTyped(value?: V1beta1VirtualMachineSnapshot | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
        'metadata': K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON(value['metadata']),
        'spec': V1beta1VirtualMachineSnapshotSpecToJSON(value['spec']),
        'status': V1beta1VirtualMachineSnapshotStatusToJSON(value['status']),
    };
}

