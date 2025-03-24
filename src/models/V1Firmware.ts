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
import type { V1ACPI } from './V1ACPI.js';
import {
    V1ACPIFromJSON,
    V1ACPIFromJSONTyped,
    V1ACPIToJSON,
    V1ACPIToJSONTyped,
} from './V1ACPI.js';
import type { V1Bootloader } from './V1Bootloader.js';
import {
    V1BootloaderFromJSON,
    V1BootloaderFromJSONTyped,
    V1BootloaderToJSON,
    V1BootloaderToJSONTyped,
} from './V1Bootloader.js';
import type { V1KernelBoot } from './V1KernelBoot.js';
import {
    V1KernelBootFromJSON,
    V1KernelBootFromJSONTyped,
    V1KernelBootToJSON,
    V1KernelBootToJSONTyped,
} from './V1KernelBoot.js';

/**
 * 
 * @export
 * @interface V1Firmware
 */
export interface V1Firmware {
    /**
     * 
     * @type {V1ACPI}
     * @memberof V1Firmware
     */
    acpi?: V1ACPI;
    /**
     * 
     * @type {V1Bootloader}
     * @memberof V1Firmware
     */
    bootloader?: V1Bootloader;
    /**
     * 
     * @type {V1KernelBoot}
     * @memberof V1Firmware
     */
    kernelBoot?: V1KernelBoot;
    /**
     * The system-serial-number in SMBIOS
     * @type {string}
     * @memberof V1Firmware
     */
    serial?: string;
    /**
     * UUID reported by the vmi bios. Defaults to a random generated uid.
     * @type {string}
     * @memberof V1Firmware
     */
    uuid?: string;
}

/**
 * Check if a given object implements the V1Firmware interface.
 */
export function instanceOfV1Firmware(value: object): value is V1Firmware {
    return true;
}

export function V1FirmwareFromJSON(json: any): V1Firmware {
    return V1FirmwareFromJSONTyped(json, false);
}

export function V1FirmwareFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Firmware {
    if (json == null) {
        return json;
    }
    return {
        
        'acpi': json['acpi'] == null ? undefined : V1ACPIFromJSON(json['acpi']),
        'bootloader': json['bootloader'] == null ? undefined : V1BootloaderFromJSON(json['bootloader']),
        'kernelBoot': json['kernelBoot'] == null ? undefined : V1KernelBootFromJSON(json['kernelBoot']),
        'serial': json['serial'] == null ? undefined : json['serial'],
        'uuid': json['uuid'] == null ? undefined : json['uuid'],
    };
}

export function V1FirmwareToJSON(json: any): V1Firmware {
    return V1FirmwareToJSONTyped(json, false);
}

export function V1FirmwareToJSONTyped(value?: V1Firmware | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'acpi': V1ACPIToJSON(value['acpi']),
        'bootloader': V1BootloaderToJSON(value['bootloader']),
        'kernelBoot': V1KernelBootToJSON(value['kernelBoot']),
        'serial': value['serial'],
        'uuid': value['uuid'],
    };
}

