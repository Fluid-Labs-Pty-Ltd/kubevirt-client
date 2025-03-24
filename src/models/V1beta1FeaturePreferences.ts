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

import { mapValues } from '../runtime';
import type { V1FeatureAPIC } from './V1FeatureAPIC';
import {
    V1FeatureAPICFromJSON,
    V1FeatureAPICFromJSONTyped,
    V1FeatureAPICToJSON,
    V1FeatureAPICToJSONTyped,
} from './V1FeatureAPIC';
import type { V1FeatureHyperv } from './V1FeatureHyperv';
import {
    V1FeatureHypervFromJSON,
    V1FeatureHypervFromJSONTyped,
    V1FeatureHypervToJSON,
    V1FeatureHypervToJSONTyped,
} from './V1FeatureHyperv';
import type { V1FeatureState } from './V1FeatureState';
import {
    V1FeatureStateFromJSON,
    V1FeatureStateFromJSONTyped,
    V1FeatureStateToJSON,
    V1FeatureStateToJSONTyped,
} from './V1FeatureState';
import type { V1FeatureKVM } from './V1FeatureKVM';
import {
    V1FeatureKVMFromJSON,
    V1FeatureKVMFromJSONTyped,
    V1FeatureKVMToJSON,
    V1FeatureKVMToJSONTyped,
} from './V1FeatureKVM';

/**
 * FeaturePreferences contains various optional defaults for Features.
 * @export
 * @interface V1beta1FeaturePreferences
 */
export interface V1beta1FeaturePreferences {
    /**
     * 
     * @type {V1FeatureState}
     * @memberof V1beta1FeaturePreferences
     */
    preferredAcpi?: V1FeatureState;
    /**
     * 
     * @type {V1FeatureAPIC}
     * @memberof V1beta1FeaturePreferences
     */
    preferredApic?: V1FeatureAPIC;
    /**
     * 
     * @type {V1FeatureHyperv}
     * @memberof V1beta1FeaturePreferences
     */
    preferredHyperv?: V1FeatureHyperv;
    /**
     * 
     * @type {V1FeatureKVM}
     * @memberof V1beta1FeaturePreferences
     */
    preferredKvm?: V1FeatureKVM;
    /**
     * 
     * @type {V1FeatureState}
     * @memberof V1beta1FeaturePreferences
     */
    preferredPvspinlock?: V1FeatureState;
    /**
     * 
     * @type {V1FeatureState}
     * @memberof V1beta1FeaturePreferences
     */
    preferredSmm?: V1FeatureState;
}

/**
 * Check if a given object implements the V1beta1FeaturePreferences interface.
 */
export function instanceOfV1beta1FeaturePreferences(value: object): value is V1beta1FeaturePreferences {
    return true;
}

export function V1beta1FeaturePreferencesFromJSON(json: any): V1beta1FeaturePreferences {
    return V1beta1FeaturePreferencesFromJSONTyped(json, false);
}

export function V1beta1FeaturePreferencesFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1beta1FeaturePreferences {
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

export function V1beta1FeaturePreferencesToJSON(json: any): V1beta1FeaturePreferences {
    return V1beta1FeaturePreferencesToJSONTyped(json, false);
}

export function V1beta1FeaturePreferencesToJSONTyped(value?: V1beta1FeaturePreferences | null, _ignoreDiscriminator: boolean = false): any {
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

