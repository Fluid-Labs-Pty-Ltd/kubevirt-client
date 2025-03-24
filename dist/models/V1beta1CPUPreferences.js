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
import { V1CPUFeatureFromJSON, V1CPUFeatureToJSON, } from './V1CPUFeature.js';
import { V1beta1SpreadOptionsFromJSON, V1beta1SpreadOptionsToJSON, } from './V1beta1SpreadOptions.js';
/**
 * Check if a given object implements the V1beta1CPUPreferences interface.
 */
export function instanceOfV1beta1CPUPreferences(value) {
    return true;
}
export function V1beta1CPUPreferencesFromJSON(json) {
    return V1beta1CPUPreferencesFromJSONTyped(json, false);
}
export function V1beta1CPUPreferencesFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'preferredCPUFeatures': json['preferredCPUFeatures'] == null ? undefined : (json['preferredCPUFeatures'].map(V1CPUFeatureFromJSON)),
        'preferredCPUTopology': json['preferredCPUTopology'] == null ? undefined : json['preferredCPUTopology'],
        'spreadOptions': json['spreadOptions'] == null ? undefined : V1beta1SpreadOptionsFromJSON(json['spreadOptions']),
    };
}
export function V1beta1CPUPreferencesToJSON(json) {
    return V1beta1CPUPreferencesToJSONTyped(json, false);
}
export function V1beta1CPUPreferencesToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'preferredCPUFeatures': value['preferredCPUFeatures'] == null ? undefined : (value['preferredCPUFeatures'].map(V1CPUFeatureToJSON)),
        'preferredCPUTopology': value['preferredCPUTopology'],
        'spreadOptions': V1beta1SpreadOptionsToJSON(value['spreadOptions']),
    };
}
//# sourceMappingURL=V1beta1CPUPreferences.js.map