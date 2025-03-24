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
import type { V1VirtualMachineStatus } from './V1VirtualMachineStatus';
import {
    V1VirtualMachineStatusFromJSON,
    V1VirtualMachineStatusFromJSONTyped,
    V1VirtualMachineStatusToJSON,
    V1VirtualMachineStatusToJSONTyped,
} from './V1VirtualMachineStatus';
import type { K8sIoApimachineryPkgApisMetaV1ObjectMeta } from './K8sIoApimachineryPkgApisMetaV1ObjectMeta';
import {
    K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSONTyped,
} from './K8sIoApimachineryPkgApisMetaV1ObjectMeta';

/**
 * VirtualMachine handles the VirtualMachines that are not running or are in a stopped state The VirtualMachine contains the template to create the VirtualMachineInstance. It also mirrors the running state of the created VirtualMachineInstance in its status.
 * @export
 * @interface V1VirtualMachine
 */
export interface V1VirtualMachine {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1VirtualMachine
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1VirtualMachine
     */
    kind?: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof V1VirtualMachine
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {V1VirtualMachineSpec}
     * @memberof V1VirtualMachine
     */
    spec: V1VirtualMachineSpec;
    /**
     * 
     * @type {V1VirtualMachineStatus}
     * @memberof V1VirtualMachine
     */
    status?: V1VirtualMachineStatus;
}

/**
 * Check if a given object implements the V1VirtualMachine interface.
 */
export function instanceOfV1VirtualMachine(value: object): value is V1VirtualMachine {
    if (!('spec' in value) || value['spec'] === undefined) return false;
    return true;
}

export function V1VirtualMachineFromJSON(json: any): V1VirtualMachine {
    return V1VirtualMachineFromJSONTyped(json, false);
}

export function V1VirtualMachineFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1VirtualMachine {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': V1VirtualMachineSpecFromJSON(json['spec']),
        'status': json['status'] == null ? undefined : V1VirtualMachineStatusFromJSON(json['status']),
    };
}

export function V1VirtualMachineToJSON(json: any): V1VirtualMachine {
    return V1VirtualMachineToJSONTyped(json, false);
}

export function V1VirtualMachineToJSONTyped(value?: V1VirtualMachine | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
        'metadata': K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON(value['metadata']),
        'spec': V1VirtualMachineSpecToJSON(value['spec']),
        'status': V1VirtualMachineStatusToJSON(value['status']),
    };
}

