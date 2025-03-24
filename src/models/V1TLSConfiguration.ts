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
 * TLSConfiguration holds TLS options
 * @export
 * @interface V1TLSConfiguration
 */
export interface V1TLSConfiguration {
    /**
     * 
     * @type {Array<string>}
     * @memberof V1TLSConfiguration
     */
    ciphers?: Array<string>;
    /**
     * MinTLSVersion is a way to specify the minimum protocol version that is acceptable for TLS connections. Protocol versions are based on the following most common TLS configurations:
     * 
     *   https://ssl-config.mozilla.org/
     * 
     * Note that SSLv3.0 is not a supported protocol version due to well known vulnerabilities such as POODLE: https://en.wikipedia.org/wiki/POODLE
     * @type {string}
     * @memberof V1TLSConfiguration
     */
    minTLSVersion?: string;
}

/**
 * Check if a given object implements the V1TLSConfiguration interface.
 */
export function instanceOfV1TLSConfiguration(value: object): value is V1TLSConfiguration {
    return true;
}

export function V1TLSConfigurationFromJSON(json: any): V1TLSConfiguration {
    return V1TLSConfigurationFromJSONTyped(json, false);
}

export function V1TLSConfigurationFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1TLSConfiguration {
    if (json == null) {
        return json;
    }
    return {
        
        'ciphers': json['ciphers'] == null ? undefined : json['ciphers'],
        'minTLSVersion': json['minTLSVersion'] == null ? undefined : json['minTLSVersion'],
    };
}

export function V1TLSConfigurationToJSON(json: any): V1TLSConfiguration {
    return V1TLSConfigurationToJSONTyped(json, false);
}

export function V1TLSConfigurationToJSONTyped(value?: V1TLSConfiguration | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ciphers': value['ciphers'],
        'minTLSVersion': value['minTLSVersion'],
    };
}

