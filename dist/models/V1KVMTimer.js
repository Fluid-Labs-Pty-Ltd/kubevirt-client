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
 * Check if a given object implements the V1KVMTimer interface.
 */
export function instanceOfV1KVMTimer(value) {
    return true;
}
export function V1KVMTimerFromJSON(json) {
    return V1KVMTimerFromJSONTyped(json, false);
}
export function V1KVMTimerFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'present': json['present'] == null ? undefined : json['present'],
    };
}
export function V1KVMTimerToJSON(json) {
    return V1KVMTimerToJSONTyped(json, false);
}
export function V1KVMTimerToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'present': value['present'],
    };
}
//# sourceMappingURL=V1KVMTimer.js.map