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
import type { V1beta1VirtualMachineExport } from './V1beta1VirtualMachineExport.js';
import {
    V1beta1VirtualMachineExportFromJSON,
    V1beta1VirtualMachineExportFromJSONTyped,
    V1beta1VirtualMachineExportToJSON,
    V1beta1VirtualMachineExportToJSONTyped,
} from './V1beta1VirtualMachineExport.js';

/**
 * VirtualMachineExportList is a list of VirtualMachineExport resources
 * @export
 * @interface V1beta1VirtualMachineExportList
 */
export interface V1beta1VirtualMachineExportList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta1VirtualMachineExportList
     */
    apiVersion?: string;
    /**
     * 
     * @type {Array<V1beta1VirtualMachineExport>}
     * @memberof V1beta1VirtualMachineExportList
     */
    items: Array<V1beta1VirtualMachineExport>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta1VirtualMachineExportList
     */
    kind?: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ListMeta}
     * @memberof V1beta1VirtualMachineExportList
     */
    metadata: K8sIoApimachineryPkgApisMetaV1ListMeta;
}

/**
 * Check if a given object implements the V1beta1VirtualMachineExportList interface.
 */
export function instanceOfV1beta1VirtualMachineExportList(value: object): value is V1beta1VirtualMachineExportList {
    if (!('items' in value) || value['items'] === undefined) return false;
    if (!('metadata' in value) || value['metadata'] === undefined) return false;
    return true;
}

export function V1beta1VirtualMachineExportListFromJSON(json: any): V1beta1VirtualMachineExportList {
    return V1beta1VirtualMachineExportListFromJSONTyped(json, false);
}

export function V1beta1VirtualMachineExportListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1VirtualMachineExportList {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1beta1VirtualMachineExportFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': K8sIoApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function V1beta1VirtualMachineExportListToJSON(json: any): V1beta1VirtualMachineExportList {
    return V1beta1VirtualMachineExportListToJSONTyped(json, false);
}

export function V1beta1VirtualMachineExportListToJSONTyped(value?: V1beta1VirtualMachineExportList | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'apiVersion': value['apiVersion'],
        'items': ((value['items'] as Array<any>).map(V1beta1VirtualMachineExportToJSON)),
        'kind': value['kind'],
        'metadata': K8sIoApimachineryPkgApisMetaV1ListMetaToJSON(value['metadata']),
    };
}

