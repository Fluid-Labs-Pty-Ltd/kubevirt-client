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
 * @interface V1FeatureVendorID
 */
export interface V1FeatureVendorID {
    /**
     * Enabled determines if the feature should be enabled or disabled on the guest. Defaults to true.
     * @type {boolean}
     * @memberof V1FeatureVendorID
     */
    enabled?: boolean;
    /**
     * VendorID sets the hypervisor vendor id, visible to the vmi. String up to twelve characters.
     * @type {string}
     * @memberof V1FeatureVendorID
     */
    vendorid?: string;
}

/**
 * Check if a given object implements the V1FeatureVendorID interface.
 */
export function instanceOfV1FeatureVendorID(value: object): value is V1FeatureVendorID {
    return true;
}

export function V1FeatureVendorIDFromJSON(json: any): V1FeatureVendorID {
    return V1FeatureVendorIDFromJSONTyped(json, false);
}

export function V1FeatureVendorIDFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1FeatureVendorID {
    if (json == null) {
        return json;
    }
    return {
        
        'enabled': json['enabled'] == null ? undefined : json['enabled'],
        'vendorid': json['vendorid'] == null ? undefined : json['vendorid'],
    };
}

export function V1FeatureVendorIDToJSON(json: any): V1FeatureVendorID {
    return V1FeatureVendorIDToJSONTyped(json, false);
}

export function V1FeatureVendorIDToJSONTyped(value?: V1FeatureVendorID | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'enabled': value['enabled'],
        'vendorid': value['vendorid'],
    };
}

