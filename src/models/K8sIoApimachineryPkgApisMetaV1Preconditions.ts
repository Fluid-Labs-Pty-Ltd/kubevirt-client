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
/**
 * Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.
 * @export
 * @interface K8sIoApimachineryPkgApisMetaV1Preconditions
 */
export interface K8sIoApimachineryPkgApisMetaV1Preconditions {
    /**
     * Specifies the target ResourceVersion
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1Preconditions
     */
    resourceVersion?: string;
    /**
     * Specifies the target UID.
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1Preconditions
     */
    uid?: string;
}

/**
 * Check if a given object implements the K8sIoApimachineryPkgApisMetaV1Preconditions interface.
 */
export function instanceOfK8sIoApimachineryPkgApisMetaV1Preconditions(value: object): value is K8sIoApimachineryPkgApisMetaV1Preconditions {
    return true;
}

export function K8sIoApimachineryPkgApisMetaV1PreconditionsFromJSON(json: any): K8sIoApimachineryPkgApisMetaV1Preconditions {
    return K8sIoApimachineryPkgApisMetaV1PreconditionsFromJSONTyped(json, false);
}

export function K8sIoApimachineryPkgApisMetaV1PreconditionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): K8sIoApimachineryPkgApisMetaV1Preconditions {
    if (json == null) {
        return json;
    }
    return {
        
        'resourceVersion': json['resourceVersion'] == null ? undefined : json['resourceVersion'],
        'uid': json['uid'] == null ? undefined : json['uid'],
    };
}

export function K8sIoApimachineryPkgApisMetaV1PreconditionsToJSON(json: any): K8sIoApimachineryPkgApisMetaV1Preconditions {
    return K8sIoApimachineryPkgApisMetaV1PreconditionsToJSONTyped(json, false);
}

export function K8sIoApimachineryPkgApisMetaV1PreconditionsToJSONTyped(value?: K8sIoApimachineryPkgApisMetaV1Preconditions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'resourceVersion': value['resourceVersion'],
        'uid': value['uid'],
    };
}

