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
/**
 * Check if a given object implements the K8sIoApimachineryPkgApisMetaV1OwnerReference interface.
 */
export function instanceOfK8sIoApimachineryPkgApisMetaV1OwnerReference(value) {
    if (!('apiVersion' in value) || value['apiVersion'] === undefined)
        return false;
    if (!('kind' in value) || value['kind'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('uid' in value) || value['uid'] === undefined)
        return false;
    return true;
}
export function K8sIoApimachineryPkgApisMetaV1OwnerReferenceFromJSON(json) {
    return K8sIoApimachineryPkgApisMetaV1OwnerReferenceFromJSONTyped(json, false);
}
export function K8sIoApimachineryPkgApisMetaV1OwnerReferenceFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'apiVersion': json['apiVersion'],
        'blockOwnerDeletion': json['blockOwnerDeletion'] == null ? undefined : json['blockOwnerDeletion'],
        'controller': json['controller'] == null ? undefined : json['controller'],
        'kind': json['kind'],
        'name': json['name'],
        'uid': json['uid'],
    };
}
export function K8sIoApimachineryPkgApisMetaV1OwnerReferenceToJSON(json) {
    return K8sIoApimachineryPkgApisMetaV1OwnerReferenceToJSONTyped(json, false);
}
export function K8sIoApimachineryPkgApisMetaV1OwnerReferenceToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'apiVersion': value['apiVersion'],
        'blockOwnerDeletion': value['blockOwnerDeletion'],
        'controller': value['controller'],
        'kind': value['kind'],
        'name': value['name'],
        'uid': value['uid'],
    };
}
//# sourceMappingURL=K8sIoApimachineryPkgApisMetaV1OwnerReference.js.map