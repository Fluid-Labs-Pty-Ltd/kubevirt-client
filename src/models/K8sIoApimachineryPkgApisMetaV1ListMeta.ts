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
 * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
 * @export
 * @interface K8sIoApimachineryPkgApisMetaV1ListMeta
 */
export interface K8sIoApimachineryPkgApisMetaV1ListMeta {
    /**
     * continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a consistent list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response, unless you have received this token from an error message.
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1ListMeta
     */
    _continue?: string;
    /**
     * remainingItemCount is the number of subsequent items in the list which are not included in this list response. If the list request contained label or field selectors, then the number of remaining items is unknown and the field will be left unset and omitted during serialization. If the list is complete (either because it is not chunking or because this is the last chunk), then there are no more remaining items and this field will be left unset and omitted during serialization. Servers older than v1.15 do not set this field. The intended use of the remainingItemCount is *estimating* the size of a collection. Clients should not rely on the remainingItemCount to be set or to be exact.
     * @type {number}
     * @memberof K8sIoApimachineryPkgApisMetaV1ListMeta
     */
    remainingItemCount?: number;
    /**
     * String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1ListMeta
     */
    resourceVersion?: string;
    /**
     * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1ListMeta
     */
    selfLink?: string;
}

/**
 * Check if a given object implements the K8sIoApimachineryPkgApisMetaV1ListMeta interface.
 */
export function instanceOfK8sIoApimachineryPkgApisMetaV1ListMeta(value: object): value is K8sIoApimachineryPkgApisMetaV1ListMeta {
    return true;
}

export function K8sIoApimachineryPkgApisMetaV1ListMetaFromJSON(json: any): K8sIoApimachineryPkgApisMetaV1ListMeta {
    return K8sIoApimachineryPkgApisMetaV1ListMetaFromJSONTyped(json, false);
}

export function K8sIoApimachineryPkgApisMetaV1ListMetaFromJSONTyped(json: any, _ignoreDiscriminator: boolean): K8sIoApimachineryPkgApisMetaV1ListMeta {
    if (json == null) {
        return json;
    }
    return {
        
        '_continue': json['continue'] == null ? undefined : json['continue'],
        'remainingItemCount': json['remainingItemCount'] == null ? undefined : json['remainingItemCount'],
        'resourceVersion': json['resourceVersion'] == null ? undefined : json['resourceVersion'],
        'selfLink': json['selfLink'] == null ? undefined : json['selfLink'],
    };
}

export function K8sIoApimachineryPkgApisMetaV1ListMetaToJSON(json: any): K8sIoApimachineryPkgApisMetaV1ListMeta {
    return K8sIoApimachineryPkgApisMetaV1ListMetaToJSONTyped(json, false);
}

export function K8sIoApimachineryPkgApisMetaV1ListMetaToJSONTyped(value?: K8sIoApimachineryPkgApisMetaV1ListMeta | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'continue': value['_continue'],
        'remainingItemCount': value['remainingItemCount'],
        'resourceVersion': value['resourceVersion'],
        'selfLink': value['selfLink'],
    };
}

