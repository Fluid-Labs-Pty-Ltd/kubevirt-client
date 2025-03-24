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
import type { V1ArchSpecificConfiguration } from './V1ArchSpecificConfiguration';
import {
    V1ArchSpecificConfigurationFromJSON,
    V1ArchSpecificConfigurationFromJSONTyped,
    V1ArchSpecificConfigurationToJSON,
    V1ArchSpecificConfigurationToJSONTyped,
} from './V1ArchSpecificConfiguration';

/**
 * 
 * @export
 * @interface V1ArchConfiguration
 */
export interface V1ArchConfiguration {
    /**
     * 
     * @type {V1ArchSpecificConfiguration}
     * @memberof V1ArchConfiguration
     */
    amd64?: V1ArchSpecificConfiguration;
    /**
     * 
     * @type {V1ArchSpecificConfiguration}
     * @memberof V1ArchConfiguration
     */
    arm64?: V1ArchSpecificConfiguration;
    /**
     * 
     * @type {string}
     * @memberof V1ArchConfiguration
     */
    defaultArchitecture?: string;
    /**
     * 
     * @type {V1ArchSpecificConfiguration}
     * @memberof V1ArchConfiguration
     */
    ppc64le?: V1ArchSpecificConfiguration;
}

/**
 * Check if a given object implements the V1ArchConfiguration interface.
 */
export function instanceOfV1ArchConfiguration(value: object): value is V1ArchConfiguration {
    return true;
}

export function V1ArchConfigurationFromJSON(json: any): V1ArchConfiguration {
    return V1ArchConfigurationFromJSONTyped(json, false);
}

export function V1ArchConfigurationFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1ArchConfiguration {
    if (json == null) {
        return json;
    }
    return {
        
        'amd64': json['amd64'] == null ? undefined : V1ArchSpecificConfigurationFromJSON(json['amd64']),
        'arm64': json['arm64'] == null ? undefined : V1ArchSpecificConfigurationFromJSON(json['arm64']),
        'defaultArchitecture': json['defaultArchitecture'] == null ? undefined : json['defaultArchitecture'],
        'ppc64le': json['ppc64le'] == null ? undefined : V1ArchSpecificConfigurationFromJSON(json['ppc64le']),
    };
}

export function V1ArchConfigurationToJSON(json: any): V1ArchConfiguration {
    return V1ArchConfigurationToJSONTyped(json, false);
}

export function V1ArchConfigurationToJSONTyped(value?: V1ArchConfiguration | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'amd64': V1ArchSpecificConfigurationToJSON(value['amd64']),
        'arm64': V1ArchSpecificConfigurationToJSON(value['arm64']),
        'defaultArchitecture': value['defaultArchitecture'],
        'ppc64le': V1ArchSpecificConfigurationToJSON(value['ppc64le']),
    };
}

