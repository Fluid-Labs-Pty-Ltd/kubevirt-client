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
 * Check if a given object implements the K8sIoApiCoreV1TypedLocalObjectReference interface.
 */
export function instanceOfK8sIoApiCoreV1TypedLocalObjectReference(value) {
    if (!('kind' in value) || value['kind'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    return true;
}
export function K8sIoApiCoreV1TypedLocalObjectReferenceFromJSON(json) {
    return K8sIoApiCoreV1TypedLocalObjectReferenceFromJSONTyped(json, false);
}
export function K8sIoApiCoreV1TypedLocalObjectReferenceFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'apiGroup': json['apiGroup'] == null ? undefined : json['apiGroup'],
        'kind': json['kind'],
        'name': json['name'],
    };
}
export function K8sIoApiCoreV1TypedLocalObjectReferenceToJSON(json) {
    return K8sIoApiCoreV1TypedLocalObjectReferenceToJSONTyped(json, false);
}
export function K8sIoApiCoreV1TypedLocalObjectReferenceToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'apiGroup': value['apiGroup'],
        'kind': value['kind'],
        'name': value['name'],
    };
}
//# sourceMappingURL=K8sIoApiCoreV1TypedLocalObjectReference.js.map