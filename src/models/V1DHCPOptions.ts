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
import type { V1DHCPPrivateOptions } from './V1DHCPPrivateOptions';
import {
    V1DHCPPrivateOptionsFromJSON,
    V1DHCPPrivateOptionsFromJSONTyped,
    V1DHCPPrivateOptionsToJSON,
    V1DHCPPrivateOptionsToJSONTyped,
} from './V1DHCPPrivateOptions';

/**
 * Extra DHCP options to use in the interface.
 * @export
 * @interface V1DHCPOptions
 */
export interface V1DHCPOptions {
    /**
     * If specified will pass option 67 to interface's DHCP server
     * @type {string}
     * @memberof V1DHCPOptions
     */
    bootFileName?: string;
    /**
     * If specified will pass the configured NTP server to the VM via DHCP option 042.
     * @type {Array<string>}
     * @memberof V1DHCPOptions
     */
    ntpServers?: Array<string>;
    /**
     * If specified will pass extra DHCP options for private use, range: 224-254
     * @type {Array<V1DHCPPrivateOptions>}
     * @memberof V1DHCPOptions
     */
    privateOptions?: Array<V1DHCPPrivateOptions>;
    /**
     * If specified will pass option 66 to interface's DHCP server
     * @type {string}
     * @memberof V1DHCPOptions
     */
    tftpServerName?: string;
}

/**
 * Check if a given object implements the V1DHCPOptions interface.
 */
export function instanceOfV1DHCPOptions(value: object): value is V1DHCPOptions {
    return true;
}

export function V1DHCPOptionsFromJSON(json: any): V1DHCPOptions {
    return V1DHCPOptionsFromJSONTyped(json, false);
}

export function V1DHCPOptionsFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1DHCPOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'bootFileName': json['bootFileName'] == null ? undefined : json['bootFileName'],
        'ntpServers': json['ntpServers'] == null ? undefined : json['ntpServers'],
        'privateOptions': json['privateOptions'] == null ? undefined : ((json['privateOptions'] as Array<any>).map(V1DHCPPrivateOptionsFromJSON)),
        'tftpServerName': json['tftpServerName'] == null ? undefined : json['tftpServerName'],
    };
}

export function V1DHCPOptionsToJSON(json: any): V1DHCPOptions {
    return V1DHCPOptionsToJSONTyped(json, false);
}

export function V1DHCPOptionsToJSONTyped(value?: V1DHCPOptions | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'bootFileName': value['bootFileName'],
        'ntpServers': value['ntpServers'],
        'privateOptions': value['privateOptions'] == null ? undefined : ((value['privateOptions'] as Array<any>).map(V1DHCPPrivateOptionsToJSON)),
        'tftpServerName': value['tftpServerName'],
    };
}

