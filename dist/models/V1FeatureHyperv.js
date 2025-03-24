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
import { V1FeatureVendorIDFromJSON, V1FeatureVendorIDToJSON, } from './V1FeatureVendorID.js';
import { V1SyNICTimerFromJSON, V1SyNICTimerToJSON, } from './V1SyNICTimer.js';
import { V1FeatureSpinlocksFromJSON, V1FeatureSpinlocksToJSON, } from './V1FeatureSpinlocks.js';
import { V1FeatureStateFromJSON, V1FeatureStateToJSON, } from './V1FeatureState.js';
/**
 * Check if a given object implements the V1FeatureHyperv interface.
 */
export function instanceOfV1FeatureHyperv(value) {
    return true;
}
export function V1FeatureHypervFromJSON(json) {
    return V1FeatureHypervFromJSONTyped(json, false);
}
export function V1FeatureHypervFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'evmcs': json['evmcs'] == null ? undefined : V1FeatureStateFromJSON(json['evmcs']),
        'frequencies': json['frequencies'] == null ? undefined : V1FeatureStateFromJSON(json['frequencies']),
        'ipi': json['ipi'] == null ? undefined : V1FeatureStateFromJSON(json['ipi']),
        'reenlightenment': json['reenlightenment'] == null ? undefined : V1FeatureStateFromJSON(json['reenlightenment']),
        'relaxed': json['relaxed'] == null ? undefined : V1FeatureStateFromJSON(json['relaxed']),
        'reset': json['reset'] == null ? undefined : V1FeatureStateFromJSON(json['reset']),
        'runtime': json['runtime'] == null ? undefined : V1FeatureStateFromJSON(json['runtime']),
        'spinlocks': json['spinlocks'] == null ? undefined : V1FeatureSpinlocksFromJSON(json['spinlocks']),
        'synic': json['synic'] == null ? undefined : V1FeatureStateFromJSON(json['synic']),
        'synictimer': json['synictimer'] == null ? undefined : V1SyNICTimerFromJSON(json['synictimer']),
        'tlbflush': json['tlbflush'] == null ? undefined : V1FeatureStateFromJSON(json['tlbflush']),
        'vapic': json['vapic'] == null ? undefined : V1FeatureStateFromJSON(json['vapic']),
        'vendorid': json['vendorid'] == null ? undefined : V1FeatureVendorIDFromJSON(json['vendorid']),
        'vpindex': json['vpindex'] == null ? undefined : V1FeatureStateFromJSON(json['vpindex']),
    };
}
export function V1FeatureHypervToJSON(json) {
    return V1FeatureHypervToJSONTyped(json, false);
}
export function V1FeatureHypervToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'evmcs': V1FeatureStateToJSON(value['evmcs']),
        'frequencies': V1FeatureStateToJSON(value['frequencies']),
        'ipi': V1FeatureStateToJSON(value['ipi']),
        'reenlightenment': V1FeatureStateToJSON(value['reenlightenment']),
        'relaxed': V1FeatureStateToJSON(value['relaxed']),
        'reset': V1FeatureStateToJSON(value['reset']),
        'runtime': V1FeatureStateToJSON(value['runtime']),
        'spinlocks': V1FeatureSpinlocksToJSON(value['spinlocks']),
        'synic': V1FeatureStateToJSON(value['synic']),
        'synictimer': V1SyNICTimerToJSON(value['synictimer']),
        'tlbflush': V1FeatureStateToJSON(value['tlbflush']),
        'vapic': V1FeatureStateToJSON(value['vapic']),
        'vendorid': V1FeatureVendorIDToJSON(value['vendorid']),
        'vpindex': V1FeatureStateToJSON(value['vpindex']),
    };
}
//# sourceMappingURL=V1FeatureHyperv.js.map