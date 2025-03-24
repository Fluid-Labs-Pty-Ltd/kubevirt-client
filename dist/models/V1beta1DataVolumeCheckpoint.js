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
 * Check if a given object implements the V1beta1DataVolumeCheckpoint interface.
 */
export function instanceOfV1beta1DataVolumeCheckpoint(value) {
    if (!('current' in value) || value['current'] === undefined)
        return false;
    if (!('previous' in value) || value['previous'] === undefined)
        return false;
    return true;
}
export function V1beta1DataVolumeCheckpointFromJSON(json) {
    return V1beta1DataVolumeCheckpointFromJSONTyped(json, false);
}
export function V1beta1DataVolumeCheckpointFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'current': json['current'],
        'previous': json['previous'],
    };
}
export function V1beta1DataVolumeCheckpointToJSON(json) {
    return V1beta1DataVolumeCheckpointToJSONTyped(json, false);
}
export function V1beta1DataVolumeCheckpointToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'current': value['current'],
        'previous': value['previous'],
    };
}
//# sourceMappingURL=V1beta1DataVolumeCheckpoint.js.map