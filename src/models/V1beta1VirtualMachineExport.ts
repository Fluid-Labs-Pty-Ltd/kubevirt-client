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
import type { V1beta1VirtualMachineExportStatus } from './V1beta1VirtualMachineExportStatus.js';
import {
    V1beta1VirtualMachineExportStatusFromJSON,
    V1beta1VirtualMachineExportStatusFromJSONTyped,
    V1beta1VirtualMachineExportStatusToJSON,
    V1beta1VirtualMachineExportStatusToJSONTyped,
} from './V1beta1VirtualMachineExportStatus.js';
import type { V1beta1VirtualMachineExportSpec } from './V1beta1VirtualMachineExportSpec.js';
import {
    V1beta1VirtualMachineExportSpecFromJSON,
    V1beta1VirtualMachineExportSpecFromJSONTyped,
    V1beta1VirtualMachineExportSpecToJSON,
    V1beta1VirtualMachineExportSpecToJSONTyped,
} from './V1beta1VirtualMachineExportSpec.js';
import type { K8sIoApimachineryPkgApisMetaV1ObjectMeta } from './K8sIoApimachineryPkgApisMetaV1ObjectMeta.js';
import {
    K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSONTyped,
} from './K8sIoApimachineryPkgApisMetaV1ObjectMeta.js';

/**
 * VirtualMachineExport defines the operation of exporting a VM source
 * @export
 * @interface V1beta1VirtualMachineExport
 */
export interface V1beta1VirtualMachineExport {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta1VirtualMachineExport
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta1VirtualMachineExport
     */
    kind?: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof V1beta1VirtualMachineExport
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {V1beta1VirtualMachineExportSpec}
     * @memberof V1beta1VirtualMachineExport
     */
    spec: V1beta1VirtualMachineExportSpec;
    /**
     * 
     * @type {V1beta1VirtualMachineExportStatus}
     * @memberof V1beta1VirtualMachineExport
     */
    status?: V1beta1VirtualMachineExportStatus;
}

/**
 * Check if a given object implements the V1beta1VirtualMachineExport interface.
 */
export function instanceOfV1beta1VirtualMachineExport(value: object): value is V1beta1VirtualMachineExport {
    if (!('spec' in value) || value['spec'] === undefined) return false;
    return true;
}

export function V1beta1VirtualMachineExportFromJSON(json: any): V1beta1VirtualMachineExport {
    return V1beta1VirtualMachineExportFromJSONTyped(json, false);
}

export function V1beta1VirtualMachineExportFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1VirtualMachineExport {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': V1beta1VirtualMachineExportSpecFromJSON(json['spec']),
        'status': json['status'] == null ? undefined : V1beta1VirtualMachineExportStatusFromJSON(json['status']),
    };
}

export function V1beta1VirtualMachineExportToJSON(json: any): V1beta1VirtualMachineExport {
    return V1beta1VirtualMachineExportToJSONTyped(json, false);
}

export function V1beta1VirtualMachineExportToJSONTyped(value?: V1beta1VirtualMachineExport | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
        'metadata': K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON(value['metadata']),
        'spec': V1beta1VirtualMachineExportSpecToJSON(value['spec']),
        'status': V1beta1VirtualMachineExportStatusToJSON(value['status']),
    };
}

