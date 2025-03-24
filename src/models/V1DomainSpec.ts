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
import type { V1Memory } from './V1Memory';
import {
    V1MemoryFromJSON,
    V1MemoryFromJSONTyped,
    V1MemoryToJSON,
    V1MemoryToJSONTyped,
} from './V1Memory';
import type { V1Firmware } from './V1Firmware';
import {
    V1FirmwareFromJSON,
    V1FirmwareFromJSONTyped,
    V1FirmwareToJSON,
    V1FirmwareToJSONTyped,
} from './V1Firmware';
import type { V1Features } from './V1Features';
import {
    V1FeaturesFromJSON,
    V1FeaturesFromJSONTyped,
    V1FeaturesToJSON,
    V1FeaturesToJSONTyped,
} from './V1Features';
import type { V1Chassis } from './V1Chassis';
import {
    V1ChassisFromJSON,
    V1ChassisFromJSONTyped,
    V1ChassisToJSON,
    V1ChassisToJSONTyped,
} from './V1Chassis';
import type { V1Devices } from './V1Devices';
import {
    V1DevicesFromJSON,
    V1DevicesFromJSONTyped,
    V1DevicesToJSON,
    V1DevicesToJSONTyped,
} from './V1Devices';
import type { V1Clock } from './V1Clock';
import {
    V1ClockFromJSON,
    V1ClockFromJSONTyped,
    V1ClockToJSON,
    V1ClockToJSONTyped,
} from './V1Clock';
import type { V1Machine } from './V1Machine';
import {
    V1MachineFromJSON,
    V1MachineFromJSONTyped,
    V1MachineToJSON,
    V1MachineToJSONTyped,
} from './V1Machine';
import type { V1LaunchSecurity } from './V1LaunchSecurity';
import {
    V1LaunchSecurityFromJSON,
    V1LaunchSecurityFromJSONTyped,
    V1LaunchSecurityToJSON,
    V1LaunchSecurityToJSONTyped,
} from './V1LaunchSecurity';
import type { V1CPU } from './V1CPU';
import {
    V1CPUFromJSON,
    V1CPUFromJSONTyped,
    V1CPUToJSON,
    V1CPUToJSONTyped,
} from './V1CPU';
import type { V1ResourceRequirements } from './V1ResourceRequirements';
import {
    V1ResourceRequirementsFromJSON,
    V1ResourceRequirementsFromJSONTyped,
    V1ResourceRequirementsToJSON,
    V1ResourceRequirementsToJSONTyped,
} from './V1ResourceRequirements';

/**
 * 
 * @export
 * @interface V1DomainSpec
 */
export interface V1DomainSpec {
    /**
     * 
     * @type {V1Chassis}
     * @memberof V1DomainSpec
     */
    chassis?: V1Chassis;
    /**
     * 
     * @type {V1Clock}
     * @memberof V1DomainSpec
     */
    clock?: V1Clock;
    /**
     * 
     * @type {V1CPU}
     * @memberof V1DomainSpec
     */
    cpu?: V1CPU;
    /**
     * 
     * @type {V1Devices}
     * @memberof V1DomainSpec
     */
    devices: V1Devices;
    /**
     * 
     * @type {V1Features}
     * @memberof V1DomainSpec
     */
    features?: V1Features;
    /**
     * 
     * @type {V1Firmware}
     * @memberof V1DomainSpec
     */
    firmware?: V1Firmware;
    /**
     * Controls whether or not disks will share IOThreads. Omitting IOThreadsPolicy disables use of IOThreads. One of: shared, auto
     * @type {string}
     * @memberof V1DomainSpec
     */
    ioThreadsPolicy?: string;
    /**
     * 
     * @type {V1LaunchSecurity}
     * @memberof V1DomainSpec
     */
    launchSecurity?: V1LaunchSecurity;
    /**
     * 
     * @type {V1Machine}
     * @memberof V1DomainSpec
     */
    machine?: V1Machine;
    /**
     * 
     * @type {V1Memory}
     * @memberof V1DomainSpec
     */
    memory?: V1Memory;
    /**
     * 
     * @type {V1ResourceRequirements}
     * @memberof V1DomainSpec
     */
    resources?: V1ResourceRequirements;
}

/**
 * Check if a given object implements the V1DomainSpec interface.
 */
export function instanceOfV1DomainSpec(value: object): value is V1DomainSpec {
    if (!('devices' in value) || value['devices'] === undefined) return false;
    return true;
}

export function V1DomainSpecFromJSON(json: any): V1DomainSpec {
    return V1DomainSpecFromJSONTyped(json, false);
}

export function V1DomainSpecFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1DomainSpec {
    if (json == null) {
        return json;
    }
    return {
        
        'chassis': json['chassis'] == null ? undefined : V1ChassisFromJSON(json['chassis']),
        'clock': json['clock'] == null ? undefined : V1ClockFromJSON(json['clock']),
        'cpu': json['cpu'] == null ? undefined : V1CPUFromJSON(json['cpu']),
        'devices': V1DevicesFromJSON(json['devices']),
        'features': json['features'] == null ? undefined : V1FeaturesFromJSON(json['features']),
        'firmware': json['firmware'] == null ? undefined : V1FirmwareFromJSON(json['firmware']),
        'ioThreadsPolicy': json['ioThreadsPolicy'] == null ? undefined : json['ioThreadsPolicy'],
        'launchSecurity': json['launchSecurity'] == null ? undefined : V1LaunchSecurityFromJSON(json['launchSecurity']),
        'machine': json['machine'] == null ? undefined : V1MachineFromJSON(json['machine']),
        'memory': json['memory'] == null ? undefined : V1MemoryFromJSON(json['memory']),
        'resources': json['resources'] == null ? undefined : V1ResourceRequirementsFromJSON(json['resources']),
    };
}

export function V1DomainSpecToJSON(json: any): V1DomainSpec {
    return V1DomainSpecToJSONTyped(json, false);
}

export function V1DomainSpecToJSONTyped(value?: V1DomainSpec | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'chassis': V1ChassisToJSON(value['chassis']),
        'clock': V1ClockToJSON(value['clock']),
        'cpu': V1CPUToJSON(value['cpu']),
        'devices': V1DevicesToJSON(value['devices']),
        'features': V1FeaturesToJSON(value['features']),
        'firmware': V1FirmwareToJSON(value['firmware']),
        'ioThreadsPolicy': value['ioThreadsPolicy'],
        'launchSecurity': V1LaunchSecurityToJSON(value['launchSecurity']),
        'machine': V1MachineToJSON(value['machine']),
        'memory': V1MemoryToJSON(value['memory']),
        'resources': V1ResourceRequirementsToJSON(value['resources']),
    };
}

