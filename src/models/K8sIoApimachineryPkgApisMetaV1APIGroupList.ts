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
import type { K8sIoApimachineryPkgApisMetaV1APIGroup } from './K8sIoApimachineryPkgApisMetaV1APIGroup';
import {
    K8sIoApimachineryPkgApisMetaV1APIGroupFromJSON,
    K8sIoApimachineryPkgApisMetaV1APIGroupFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1APIGroupToJSON,
    K8sIoApimachineryPkgApisMetaV1APIGroupToJSONTyped,
} from './K8sIoApimachineryPkgApisMetaV1APIGroup';

/**
 * APIGroupList is a list of APIGroup, to allow clients to discover the API at /apis.
 * @export
 * @interface K8sIoApimachineryPkgApisMetaV1APIGroupList
 */
export interface K8sIoApimachineryPkgApisMetaV1APIGroupList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1APIGroupList
     */
    apiVersion?: string;
    /**
     * groups is a list of APIGroup.
     * @type {Array<K8sIoApimachineryPkgApisMetaV1APIGroup>}
     * @memberof K8sIoApimachineryPkgApisMetaV1APIGroupList
     */
    groups: Array<K8sIoApimachineryPkgApisMetaV1APIGroup>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1APIGroupList
     */
    kind?: string;
}

/**
 * Check if a given object implements the K8sIoApimachineryPkgApisMetaV1APIGroupList interface.
 */
export function instanceOfK8sIoApimachineryPkgApisMetaV1APIGroupList(value: object): value is K8sIoApimachineryPkgApisMetaV1APIGroupList {
    if (!('groups' in value) || value['groups'] === undefined) return false;
    return true;
}

export function K8sIoApimachineryPkgApisMetaV1APIGroupListFromJSON(json: any): K8sIoApimachineryPkgApisMetaV1APIGroupList {
    return K8sIoApimachineryPkgApisMetaV1APIGroupListFromJSONTyped(json, false);
}

export function K8sIoApimachineryPkgApisMetaV1APIGroupListFromJSONTyped(json: any, _ignoreDiscriminator: boolean): K8sIoApimachineryPkgApisMetaV1APIGroupList {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'groups': ((json['groups'] as Array<any>).map(K8sIoApimachineryPkgApisMetaV1APIGroupFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
    };
}

export function K8sIoApimachineryPkgApisMetaV1APIGroupListToJSON(json: any): K8sIoApimachineryPkgApisMetaV1APIGroupList {
    return K8sIoApimachineryPkgApisMetaV1APIGroupListToJSONTyped(json, false);
}

export function K8sIoApimachineryPkgApisMetaV1APIGroupListToJSONTyped(value?: K8sIoApimachineryPkgApisMetaV1APIGroupList | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'apiVersion': value['apiVersion'],
        'groups': ((value['groups'] as Array<any>).map(K8sIoApimachineryPkgApisMetaV1APIGroupToJSON)),
        'kind': value['kind'],
    };
}

