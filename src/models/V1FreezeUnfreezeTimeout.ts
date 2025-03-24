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
/**
 * FreezeUnfreezeTimeout represent the time unfreeze will be triggered if guest was not unfrozen by unfreeze command
 * @export
 * @interface V1FreezeUnfreezeTimeout
 */
export interface V1FreezeUnfreezeTimeout {
    /**
     * Duration is a wrapper around time.Duration which supports correct marshaling to YAML and JSON. In particular, it marshals into strings, which can be used as map keys in json.
     * @type {string}
     * @memberof V1FreezeUnfreezeTimeout
     */
    unfreezeTimeout: string;
}

/**
 * Check if a given object implements the V1FreezeUnfreezeTimeout interface.
 */
export function instanceOfV1FreezeUnfreezeTimeout(value: object): value is V1FreezeUnfreezeTimeout {
    if (!('unfreezeTimeout' in value) || value['unfreezeTimeout'] === undefined) return false;
    return true;
}

export function V1FreezeUnfreezeTimeoutFromJSON(json: any): V1FreezeUnfreezeTimeout {
    return V1FreezeUnfreezeTimeoutFromJSONTyped(json, false);
}

export function V1FreezeUnfreezeTimeoutFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1FreezeUnfreezeTimeout {
    if (json == null) {
        return json;
    }
    return {
        
        'unfreezeTimeout': json['unfreezeTimeout'],
    };
}

export function V1FreezeUnfreezeTimeoutToJSON(json: any): V1FreezeUnfreezeTimeout {
    return V1FreezeUnfreezeTimeoutToJSONTyped(json, false);
}

export function V1FreezeUnfreezeTimeoutToJSONTyped(value?: V1FreezeUnfreezeTimeout | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'unfreezeTimeout': value['unfreezeTimeout'],
    };
}

