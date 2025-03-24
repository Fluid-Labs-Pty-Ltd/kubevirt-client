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
 * Check if a given object implements the V1ConfigMapVolumeSource interface.
 */
export function instanceOfV1ConfigMapVolumeSource(value) {
    return true;
}
export function V1ConfigMapVolumeSourceFromJSON(json) {
    return V1ConfigMapVolumeSourceFromJSONTyped(json, false);
}
export function V1ConfigMapVolumeSourceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'] == null ? undefined : json['name'],
        'optional': json['optional'] == null ? undefined : json['optional'],
        'volumeLabel': json['volumeLabel'] == null ? undefined : json['volumeLabel'],
    };
}
export function V1ConfigMapVolumeSourceToJSON(json) {
    return V1ConfigMapVolumeSourceToJSONTyped(json, false);
}
export function V1ConfigMapVolumeSourceToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'optional': value['optional'],
        'volumeLabel': value['volumeLabel'],
    };
}
//# sourceMappingURL=V1ConfigMapVolumeSource.js.map