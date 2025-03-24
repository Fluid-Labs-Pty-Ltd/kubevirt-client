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
/**
 * 
 * @export
 * @interface V1USBSelector
 */
export interface V1USBSelector {
    /**
     * 
     * @type {string}
     * @memberof V1USBSelector
     */
    product: string;
    /**
     * 
     * @type {string}
     * @memberof V1USBSelector
     */
    vendor: string;
}

/**
 * Check if a given object implements the V1USBSelector interface.
 */
export function instanceOfV1USBSelector(value: object): value is V1USBSelector {
    if (!('product' in value) || value['product'] === undefined) return false;
    if (!('vendor' in value) || value['vendor'] === undefined) return false;
    return true;
}

export function V1USBSelectorFromJSON(json: any): V1USBSelector {
    return V1USBSelectorFromJSONTyped(json, false);
}

export function V1USBSelectorFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1USBSelector {
    if (json == null) {
        return json;
    }
    return {
        
        'product': json['product'],
        'vendor': json['vendor'],
    };
}

export function V1USBSelectorToJSON(json: any): V1USBSelector {
    return V1USBSelectorToJSONTyped(json, false);
}

export function V1USBSelectorToJSONTyped(value?: V1USBSelector | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'product': value['product'],
        'vendor': value['vendor'],
    };
}

