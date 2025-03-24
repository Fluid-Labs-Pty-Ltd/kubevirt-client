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
import type { V1HPETTimer } from './V1HPETTimer.js';
import {
    V1HPETTimerFromJSON,
    V1HPETTimerFromJSONTyped,
    V1HPETTimerToJSON,
    V1HPETTimerToJSONTyped,
} from './V1HPETTimer.js';
import type { V1KVMTimer } from './V1KVMTimer.js';
import {
    V1KVMTimerFromJSON,
    V1KVMTimerFromJSONTyped,
    V1KVMTimerToJSON,
    V1KVMTimerToJSONTyped,
} from './V1KVMTimer.js';
import type { V1PITTimer } from './V1PITTimer.js';
import {
    V1PITTimerFromJSON,
    V1PITTimerFromJSONTyped,
    V1PITTimerToJSON,
    V1PITTimerToJSONTyped,
} from './V1PITTimer.js';
import type { V1HypervTimer } from './V1HypervTimer.js';
import {
    V1HypervTimerFromJSON,
    V1HypervTimerFromJSONTyped,
    V1HypervTimerToJSON,
    V1HypervTimerToJSONTyped,
} from './V1HypervTimer.js';
import type { V1RTCTimer } from './V1RTCTimer.js';
import {
    V1RTCTimerFromJSON,
    V1RTCTimerFromJSONTyped,
    V1RTCTimerToJSON,
    V1RTCTimerToJSONTyped,
} from './V1RTCTimer.js';

/**
 * Represents all available timers in a vmi.
 * @export
 * @interface V1Timer
 */
export interface V1Timer {
    /**
     * 
     * @type {V1HPETTimer}
     * @memberof V1Timer
     */
    hpet?: V1HPETTimer;
    /**
     * 
     * @type {V1HypervTimer}
     * @memberof V1Timer
     */
    hyperv?: V1HypervTimer;
    /**
     * 
     * @type {V1KVMTimer}
     * @memberof V1Timer
     */
    kvm?: V1KVMTimer;
    /**
     * 
     * @type {V1PITTimer}
     * @memberof V1Timer
     */
    pit?: V1PITTimer;
    /**
     * 
     * @type {V1RTCTimer}
     * @memberof V1Timer
     */
    rtc?: V1RTCTimer;
}

/**
 * Check if a given object implements the V1Timer interface.
 */
export function instanceOfV1Timer(value: object): value is V1Timer {
    return true;
}

export function V1TimerFromJSON(json: any): V1Timer {
    return V1TimerFromJSONTyped(json, false);
}

export function V1TimerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Timer {
    if (json == null) {
        return json;
    }
    return {
        
        'hpet': json['hpet'] == null ? undefined : V1HPETTimerFromJSON(json['hpet']),
        'hyperv': json['hyperv'] == null ? undefined : V1HypervTimerFromJSON(json['hyperv']),
        'kvm': json['kvm'] == null ? undefined : V1KVMTimerFromJSON(json['kvm']),
        'pit': json['pit'] == null ? undefined : V1PITTimerFromJSON(json['pit']),
        'rtc': json['rtc'] == null ? undefined : V1RTCTimerFromJSON(json['rtc']),
    };
}

export function V1TimerToJSON(json: any): V1Timer {
    return V1TimerToJSONTyped(json, false);
}

export function V1TimerToJSONTyped(value?: V1Timer | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'hpet': V1HPETTimerToJSON(value['hpet']),
        'hyperv': V1HypervTimerToJSON(value['hyperv']),
        'kvm': V1KVMTimerToJSON(value['kvm']),
        'pit': V1PITTimerToJSON(value['pit']),
        'rtc': V1RTCTimerToJSON(value['rtc']),
    };
}

