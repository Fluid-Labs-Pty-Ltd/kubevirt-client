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
import { K8sIoApimachineryPkgApisMetaV1APIGroupFromJSON, K8sIoApimachineryPkgApisMetaV1APIGroupToJSON, } from './K8sIoApimachineryPkgApisMetaV1APIGroup.js';
/**
 * Check if a given object implements the K8sIoApimachineryPkgApisMetaV1APIGroupList interface.
 */
export function instanceOfK8sIoApimachineryPkgApisMetaV1APIGroupList(value) {
    if (!('groups' in value) || value['groups'] === undefined)
        return false;
    return true;
}
export function K8sIoApimachineryPkgApisMetaV1APIGroupListFromJSON(json) {
    return K8sIoApimachineryPkgApisMetaV1APIGroupListFromJSONTyped(json, false);
}
export function K8sIoApimachineryPkgApisMetaV1APIGroupListFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'groups': (json['groups'].map(K8sIoApimachineryPkgApisMetaV1APIGroupFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
    };
}
export function K8sIoApimachineryPkgApisMetaV1APIGroupListToJSON(json) {
    return K8sIoApimachineryPkgApisMetaV1APIGroupListToJSONTyped(json, false);
}
export function K8sIoApimachineryPkgApisMetaV1APIGroupListToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'apiVersion': value['apiVersion'],
        'groups': (value['groups'].map(K8sIoApimachineryPkgApisMetaV1APIGroupToJSON)),
        'kind': value['kind'],
    };
}
//# sourceMappingURL=K8sIoApimachineryPkgApisMetaV1APIGroupList.js.map