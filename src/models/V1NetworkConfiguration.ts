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
import type { V1InterfaceBindingPlugin } from './V1InterfaceBindingPlugin';
import {
    V1InterfaceBindingPluginFromJSON,
    V1InterfaceBindingPluginFromJSONTyped,
    V1InterfaceBindingPluginToJSON,
    V1InterfaceBindingPluginToJSONTyped,
} from './V1InterfaceBindingPlugin';

/**
 * NetworkConfiguration holds network options
 * @export
 * @interface V1NetworkConfiguration
 */
export interface V1NetworkConfiguration {
    /**
     * 
     * @type {{ [key: string]: V1InterfaceBindingPlugin; }}
     * @memberof V1NetworkConfiguration
     */
    binding?: { [key: string]: V1InterfaceBindingPlugin; };
    /**
     * 
     * @type {string}
     * @memberof V1NetworkConfiguration
     */
    defaultNetworkInterface?: string;
    /**
     * 
     * @type {boolean}
     * @memberof V1NetworkConfiguration
     */
    permitBridgeInterfaceOnPodNetwork?: boolean;
    /**
     * DeprecatedPermitSlirpInterface is an alias for the deprecated PermitSlirpInterface. Deprecated: Removed in v1.3.
     * @type {boolean}
     * @memberof V1NetworkConfiguration
     */
    permitSlirpInterface?: boolean;
}

/**
 * Check if a given object implements the V1NetworkConfiguration interface.
 */
export function instanceOfV1NetworkConfiguration(value: object): value is V1NetworkConfiguration {
    return true;
}

export function V1NetworkConfigurationFromJSON(json: any): V1NetworkConfiguration {
    return V1NetworkConfigurationFromJSONTyped(json, false);
}

export function V1NetworkConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NetworkConfiguration {
    if (json == null) {
        return json;
    }
    return {
        
        'binding': json['binding'] == null ? undefined : (mapValues(json['binding'], V1InterfaceBindingPluginFromJSON)),
        'defaultNetworkInterface': json['defaultNetworkInterface'] == null ? undefined : json['defaultNetworkInterface'],
        'permitBridgeInterfaceOnPodNetwork': json['permitBridgeInterfaceOnPodNetwork'] == null ? undefined : json['permitBridgeInterfaceOnPodNetwork'],
        'permitSlirpInterface': json['permitSlirpInterface'] == null ? undefined : json['permitSlirpInterface'],
    };
}

export function V1NetworkConfigurationToJSON(json: any): V1NetworkConfiguration {
    return V1NetworkConfigurationToJSONTyped(json, false);
}

export function V1NetworkConfigurationToJSONTyped(value?: V1NetworkConfiguration | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'binding': value['binding'] == null ? undefined : (mapValues(value['binding'], V1InterfaceBindingPluginToJSON)),
        'defaultNetworkInterface': value['defaultNetworkInterface'],
        'permitBridgeInterfaceOnPodNetwork': value['permitBridgeInterfaceOnPodNetwork'],
        'permitSlirpInterface': value['permitSlirpInterface'],
    };
}

