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
import { V1FeatureAPICFromJSON, V1FeatureAPICToJSON, } from './V1FeatureAPIC.js';
import { V1FeatureHypervFromJSON, V1FeatureHypervToJSON, } from './V1FeatureHyperv.js';
import { V1FeatureStateFromJSON, V1FeatureStateToJSON, } from './V1FeatureState.js';
import { V1FeatureKVMFromJSON, V1FeatureKVMToJSON, } from './V1FeatureKVM.js';
/**
 * Check if a given object implements the V1beta1FeaturePreferences interface.
 */
export function instanceOfV1beta1FeaturePreferences(value) {
    return true;
}
export function V1beta1FeaturePreferencesFromJSON(json) {
    return V1beta1FeaturePreferencesFromJSONTyped(json, false);
}
export function V1beta1FeaturePreferencesFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'preferredAcpi': json['preferredAcpi'] == null ? undefined : V1FeatureStateFromJSON(json['preferredAcpi']),
        'preferredApic': json['preferredApic'] == null ? undefined : V1FeatureAPICFromJSON(json['preferredApic']),
        'preferredHyperv': json['preferredHyperv'] == null ? undefined : V1FeatureHypervFromJSON(json['preferredHyperv']),
        'preferredKvm': json['preferredKvm'] == null ? undefined : V1FeatureKVMFromJSON(json['preferredKvm']),
        'preferredPvspinlock': json['preferredPvspinlock'] == null ? undefined : V1FeatureStateFromJSON(json['preferredPvspinlock']),
        'preferredSmm': json['preferredSmm'] == null ? undefined : V1FeatureStateFromJSON(json['preferredSmm']),
    };
}
export function V1beta1FeaturePreferencesToJSON(json) {
    return V1beta1FeaturePreferencesToJSONTyped(json, false);
}
export function V1beta1FeaturePreferencesToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'preferredAcpi': V1FeatureStateToJSON(value['preferredAcpi']),
        'preferredApic': V1FeatureAPICToJSON(value['preferredApic']),
        'preferredHyperv': V1FeatureHypervToJSON(value['preferredHyperv']),
        'preferredKvm': V1FeatureKVMToJSON(value['preferredKvm']),
        'preferredPvspinlock': V1FeatureStateToJSON(value['preferredPvspinlock']),
        'preferredSmm': V1FeatureStateToJSON(value['preferredSmm']),
    };
}
//# sourceMappingURL=V1beta1FeaturePreferences.js.map