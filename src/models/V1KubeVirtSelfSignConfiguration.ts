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
import type { V1CertConfig } from './V1CertConfig.js';
import {
    V1CertConfigFromJSON,
    V1CertConfigFromJSONTyped,
    V1CertConfigToJSON,
    V1CertConfigToJSONTyped,
} from './V1CertConfig.js';

/**
 * 
 * @export
 * @interface V1KubeVirtSelfSignConfiguration
 */
export interface V1KubeVirtSelfSignConfiguration {
    /**
     * 
     * @type {V1CertConfig}
     * @memberof V1KubeVirtSelfSignConfiguration
     */
    ca?: V1CertConfig;
    /**
     * Duration is a wrapper around time.Duration which supports correct marshaling to YAML and JSON. In particular, it marshals into strings, which can be used as map keys in json.
     * @type {string}
     * @memberof V1KubeVirtSelfSignConfiguration
     */
    caOverlapInterval?: string;
    /**
     * Duration is a wrapper around time.Duration which supports correct marshaling to YAML and JSON. In particular, it marshals into strings, which can be used as map keys in json.
     * @type {string}
     * @memberof V1KubeVirtSelfSignConfiguration
     */
    caRotateInterval?: string;
    /**
     * Duration is a wrapper around time.Duration which supports correct marshaling to YAML and JSON. In particular, it marshals into strings, which can be used as map keys in json.
     * @type {string}
     * @memberof V1KubeVirtSelfSignConfiguration
     */
    certRotateInterval?: string;
    /**
     * 
     * @type {V1CertConfig}
     * @memberof V1KubeVirtSelfSignConfiguration
     */
    server?: V1CertConfig;
}

/**
 * Check if a given object implements the V1KubeVirtSelfSignConfiguration interface.
 */
export function instanceOfV1KubeVirtSelfSignConfiguration(value: object): value is V1KubeVirtSelfSignConfiguration {
    return true;
}

export function V1KubeVirtSelfSignConfigurationFromJSON(json: any): V1KubeVirtSelfSignConfiguration {
    return V1KubeVirtSelfSignConfigurationFromJSONTyped(json, false);
}

export function V1KubeVirtSelfSignConfigurationFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1KubeVirtSelfSignConfiguration {
    if (json == null) {
        return json;
    }
    return {
        
        'ca': json['ca'] == null ? undefined : V1CertConfigFromJSON(json['ca']),
        'caOverlapInterval': json['caOverlapInterval'] == null ? undefined : json['caOverlapInterval'],
        'caRotateInterval': json['caRotateInterval'] == null ? undefined : json['caRotateInterval'],
        'certRotateInterval': json['certRotateInterval'] == null ? undefined : json['certRotateInterval'],
        'server': json['server'] == null ? undefined : V1CertConfigFromJSON(json['server']),
    };
}

export function V1KubeVirtSelfSignConfigurationToJSON(json: any): V1KubeVirtSelfSignConfiguration {
    return V1KubeVirtSelfSignConfigurationToJSONTyped(json, false);
}

export function V1KubeVirtSelfSignConfigurationToJSONTyped(value?: V1KubeVirtSelfSignConfiguration | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ca': V1CertConfigToJSON(value['ca']),
        'caOverlapInterval': value['caOverlapInterval'],
        'caRotateInterval': value['caRotateInterval'],
        'certRotateInterval': value['certRotateInterval'],
        'server': V1CertConfigToJSON(value['server']),
    };
}

