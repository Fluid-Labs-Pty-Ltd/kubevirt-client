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
import type { V1VirtualMachineInstanceSpec } from './V1VirtualMachineInstanceSpec';
import {
    V1VirtualMachineInstanceSpecFromJSON,
    V1VirtualMachineInstanceSpecFromJSONTyped,
    V1VirtualMachineInstanceSpecToJSON,
    V1VirtualMachineInstanceSpecToJSONTyped,
} from './V1VirtualMachineInstanceSpec';
import type { V1VirtualMachineInstanceStatus } from './V1VirtualMachineInstanceStatus';
import {
    V1VirtualMachineInstanceStatusFromJSON,
    V1VirtualMachineInstanceStatusFromJSONTyped,
    V1VirtualMachineInstanceStatusToJSON,
    V1VirtualMachineInstanceStatusToJSONTyped,
} from './V1VirtualMachineInstanceStatus';
import type { K8sIoApimachineryPkgApisMetaV1ObjectMeta } from './K8sIoApimachineryPkgApisMetaV1ObjectMeta';
import {
    K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSONTyped,
} from './K8sIoApimachineryPkgApisMetaV1ObjectMeta';

/**
 * VirtualMachineInstance is *the* VirtualMachineInstance Definition. It represents a virtual machine in the runtime environment of kubernetes.
 * @export
 * @interface V1VirtualMachineInstance
 */
export interface V1VirtualMachineInstance {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1VirtualMachineInstance
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1VirtualMachineInstance
     */
    kind?: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof V1VirtualMachineInstance
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {V1VirtualMachineInstanceSpec}
     * @memberof V1VirtualMachineInstance
     */
    spec: V1VirtualMachineInstanceSpec;
    /**
     * 
     * @type {V1VirtualMachineInstanceStatus}
     * @memberof V1VirtualMachineInstance
     */
    status?: V1VirtualMachineInstanceStatus;
}

/**
 * Check if a given object implements the V1VirtualMachineInstance interface.
 */
export function instanceOfV1VirtualMachineInstance(value: object): value is V1VirtualMachineInstance {
    if (!('spec' in value) || value['spec'] === undefined) return false;
    return true;
}

export function V1VirtualMachineInstanceFromJSON(json: any): V1VirtualMachineInstance {
    return V1VirtualMachineInstanceFromJSONTyped(json, false);
}

export function V1VirtualMachineInstanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VirtualMachineInstance {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': V1VirtualMachineInstanceSpecFromJSON(json['spec']),
        'status': json['status'] == null ? undefined : V1VirtualMachineInstanceStatusFromJSON(json['status']),
    };
}

export function V1VirtualMachineInstanceToJSON(json: any): V1VirtualMachineInstance {
    return V1VirtualMachineInstanceToJSONTyped(json, false);
}

export function V1VirtualMachineInstanceToJSONTyped(value?: V1VirtualMachineInstance | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
        'metadata': K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON(value['metadata']),
        'spec': V1VirtualMachineInstanceSpecToJSON(value['spec']),
        'status': V1VirtualMachineInstanceStatusToJSON(value['status']),
    };
}

