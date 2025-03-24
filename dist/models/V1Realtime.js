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
 * Check if a given object implements the V1Realtime interface.
 */
export function instanceOfV1Realtime(value) {
    return true;
}
export function V1RealtimeFromJSON(json) {
    return V1RealtimeFromJSONTyped(json, false);
}
export function V1RealtimeFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'mask': json['mask'] == null ? undefined : json['mask'],
    };
}
export function V1RealtimeToJSON(json) {
    return V1RealtimeToJSONTyped(json, false);
}
export function V1RealtimeToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'mask': value['mask'],
    };
}
//# sourceMappingURL=V1Realtime.js.map