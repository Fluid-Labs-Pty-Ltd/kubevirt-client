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
import { K8sIoApiCoreV1DownwardAPIVolumeFileFromJSON, K8sIoApiCoreV1DownwardAPIVolumeFileToJSON, } from './K8sIoApiCoreV1DownwardAPIVolumeFile.js';
/**
 * Check if a given object implements the V1DownwardAPIVolumeSource interface.
 */
export function instanceOfV1DownwardAPIVolumeSource(value) {
    return true;
}
export function V1DownwardAPIVolumeSourceFromJSON(json) {
    return V1DownwardAPIVolumeSourceFromJSONTyped(json, false);
}
export function V1DownwardAPIVolumeSourceFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'fields': json['fields'] == null ? undefined : (json['fields'].map(K8sIoApiCoreV1DownwardAPIVolumeFileFromJSON)),
        'volumeLabel': json['volumeLabel'] == null ? undefined : json['volumeLabel'],
    };
}
export function V1DownwardAPIVolumeSourceToJSON(json) {
    return V1DownwardAPIVolumeSourceToJSONTyped(json, false);
}
export function V1DownwardAPIVolumeSourceToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'fields': value['fields'] == null ? undefined : (value['fields'].map(K8sIoApiCoreV1DownwardAPIVolumeFileToJSON)),
        'volumeLabel': value['volumeLabel'],
    };
}
//# sourceMappingURL=V1DownwardAPIVolumeSource.js.map