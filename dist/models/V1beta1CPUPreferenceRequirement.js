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
 * Check if a given object implements the V1beta1CPUPreferenceRequirement interface.
 */
export function instanceOfV1beta1CPUPreferenceRequirement(value) {
    if (!('guest' in value) || value['guest'] === undefined)
        return false;
    return true;
}
export function V1beta1CPUPreferenceRequirementFromJSON(json) {
    return V1beta1CPUPreferenceRequirementFromJSONTyped(json, false);
}
export function V1beta1CPUPreferenceRequirementFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'guest': json['guest'],
    };
}
export function V1beta1CPUPreferenceRequirementToJSON(json) {
    return V1beta1CPUPreferenceRequirementToJSONTyped(json, false);
}
export function V1beta1CPUPreferenceRequirementToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'guest': value['guest'],
    };
}
//# sourceMappingURL=V1beta1CPUPreferenceRequirement.js.map