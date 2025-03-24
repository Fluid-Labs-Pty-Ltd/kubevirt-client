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
 * 
 * @export
 * @interface V1FeatureAPIC
 */
export interface V1FeatureAPIC {
    /**
     * Enabled determines if the feature should be enabled or disabled on the guest. Defaults to true.
     * @type {boolean}
     * @memberof V1FeatureAPIC
     */
    enabled?: boolean;
    /**
     * EndOfInterrupt enables the end of interrupt notification in the guest. Defaults to false.
     * @type {boolean}
     * @memberof V1FeatureAPIC
     */
    endOfInterrupt?: boolean;
}

/**
 * Check if a given object implements the V1FeatureAPIC interface.
 */
export function instanceOfV1FeatureAPIC(value: object): value is V1FeatureAPIC {
    return true;
}

export function V1FeatureAPICFromJSON(json: any): V1FeatureAPIC {
    return V1FeatureAPICFromJSONTyped(json, false);
}

export function V1FeatureAPICFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1FeatureAPIC {
    if (json == null) {
        return json;
    }
    return {
        
        'enabled': json['enabled'] == null ? undefined : json['enabled'],
        'endOfInterrupt': json['endOfInterrupt'] == null ? undefined : json['endOfInterrupt'],
    };
}

export function V1FeatureAPICToJSON(json: any): V1FeatureAPIC {
    return V1FeatureAPICToJSONTyped(json, false);
}

export function V1FeatureAPICToJSONTyped(value?: V1FeatureAPIC | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'enabled': value['enabled'],
        'endOfInterrupt': value['endOfInterrupt'],
    };
}

