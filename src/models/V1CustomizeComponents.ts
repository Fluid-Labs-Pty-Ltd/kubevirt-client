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

import { mapValues } from '../runtime.js';
import type { V1CustomizeComponentsPatch } from './V1CustomizeComponentsPatch.js';
import {
    V1CustomizeComponentsPatchFromJSON,
    V1CustomizeComponentsPatchFromJSONTyped,
    V1CustomizeComponentsPatchToJSON,
    V1CustomizeComponentsPatchToJSONTyped,
} from './V1CustomizeComponentsPatch.js';
import type { V1Flags } from './V1Flags.js';
import {
    V1FlagsFromJSON,
    V1FlagsFromJSONTyped,
    V1FlagsToJSON,
    V1FlagsToJSONTyped,
} from './V1Flags.js';

/**
 * 
 * @export
 * @interface V1CustomizeComponents
 */
export interface V1CustomizeComponents {
    /**
     * 
     * @type {V1Flags}
     * @memberof V1CustomizeComponents
     */
    flags?: V1Flags;
    /**
     * 
     * @type {Array<V1CustomizeComponentsPatch>}
     * @memberof V1CustomizeComponents
     */
    patches?: Array<V1CustomizeComponentsPatch>;
}

/**
 * Check if a given object implements the V1CustomizeComponents interface.
 */
export function instanceOfV1CustomizeComponents(value: object): value is V1CustomizeComponents {
    return true;
}

export function V1CustomizeComponentsFromJSON(json: any): V1CustomizeComponents {
    return V1CustomizeComponentsFromJSONTyped(json, false);
}

export function V1CustomizeComponentsFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1CustomizeComponents {
    if (json == null) {
        return json;
    }
    return {
        
        'flags': json['flags'] == null ? undefined : V1FlagsFromJSON(json['flags']),
        'patches': json['patches'] == null ? undefined : ((json['patches'] as Array<any>).map(V1CustomizeComponentsPatchFromJSON)),
    };
}

export function V1CustomizeComponentsToJSON(json: any): V1CustomizeComponents {
    return V1CustomizeComponentsToJSONTyped(json, false);
}

export function V1CustomizeComponentsToJSONTyped(value?: V1CustomizeComponents | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'flags': V1FlagsToJSON(value['flags']),
        'patches': value['patches'] == null ? undefined : ((value['patches'] as Array<any>).map(V1CustomizeComponentsPatchToJSON)),
    };
}

