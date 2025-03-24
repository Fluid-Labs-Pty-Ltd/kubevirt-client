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
 * Check if a given object implements the K8sIoApiCoreV1PersistentVolumeClaimVolumeSource interface.
 */
export function instanceOfK8sIoApiCoreV1PersistentVolumeClaimVolumeSource(value) {
    if (!('claimName' in value) || value['claimName'] === undefined)
        return false;
    return true;
}
export function K8sIoApiCoreV1PersistentVolumeClaimVolumeSourceFromJSON(json) {
    return K8sIoApiCoreV1PersistentVolumeClaimVolumeSourceFromJSONTyped(json, false);
}
export function K8sIoApiCoreV1PersistentVolumeClaimVolumeSourceFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'claimName': json['claimName'],
        'readOnly': json['readOnly'] == null ? undefined : json['readOnly'],
    };
}
export function K8sIoApiCoreV1PersistentVolumeClaimVolumeSourceToJSON(json) {
    return K8sIoApiCoreV1PersistentVolumeClaimVolumeSourceToJSONTyped(json, false);
}
export function K8sIoApiCoreV1PersistentVolumeClaimVolumeSourceToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'claimName': value['claimName'],
        'readOnly': value['readOnly'],
    };
}
//# sourceMappingURL=K8sIoApiCoreV1PersistentVolumeClaimVolumeSource.js.map