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
/**
 * StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.
 * @export
 * @interface K8sIoApimachineryPkgApisMetaV1StatusCause
 */
export interface K8sIoApimachineryPkgApisMetaV1StatusCause {
    /**
     * The field of the resource that has caused this error, as named by its JSON serialization. May include dot and postfix notation for nested attributes. Arrays are zero-indexed.  Fields may appear more than once in an array of causes due to fields having multiple errors. Optional.
     * 
     * Examples:
     *   "name" - the field "name" on the current resource
     *   "items[0].name" - the field "name" on the first array entry in "items"
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1StatusCause
     */
    field?: string;
    /**
     * A human-readable description of the cause of the error.  This field may be presented as-is to a reader.
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1StatusCause
     */
    message?: string;
    /**
     * A machine-readable description of the cause of the error. If this value is empty there is no information available.
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1StatusCause
     */
    reason?: string;
}

/**
 * Check if a given object implements the K8sIoApimachineryPkgApisMetaV1StatusCause interface.
 */
export function instanceOfK8sIoApimachineryPkgApisMetaV1StatusCause(value: object): value is K8sIoApimachineryPkgApisMetaV1StatusCause {
    return true;
}

export function K8sIoApimachineryPkgApisMetaV1StatusCauseFromJSON(json: any): K8sIoApimachineryPkgApisMetaV1StatusCause {
    return K8sIoApimachineryPkgApisMetaV1StatusCauseFromJSONTyped(json, false);
}

export function K8sIoApimachineryPkgApisMetaV1StatusCauseFromJSONTyped(json: any, ignoreDiscriminator: boolean): K8sIoApimachineryPkgApisMetaV1StatusCause {
    if (json == null) {
        return json;
    }
    return {
        
        'field': json['field'] == null ? undefined : json['field'],
        'message': json['message'] == null ? undefined : json['message'],
        'reason': json['reason'] == null ? undefined : json['reason'],
    };
}

export function K8sIoApimachineryPkgApisMetaV1StatusCauseToJSON(json: any): K8sIoApimachineryPkgApisMetaV1StatusCause {
    return K8sIoApimachineryPkgApisMetaV1StatusCauseToJSONTyped(json, false);
}

export function K8sIoApimachineryPkgApisMetaV1StatusCauseToJSONTyped(value?: K8sIoApimachineryPkgApisMetaV1StatusCause | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'field': value['field'],
        'message': value['message'],
        'reason': value['reason'],
    };
}

