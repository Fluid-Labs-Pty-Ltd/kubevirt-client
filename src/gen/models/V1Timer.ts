/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1HPETTimer } from '../models/V1HPETTimer.js';
import { V1HypervTimer } from '../models/V1HypervTimer.js';
import { V1KVMTimer } from '../models/V1KVMTimer.js';
import { V1PITTimer } from '../models/V1PITTimer.js';
import { V1RTCTimer } from '../models/V1RTCTimer.js';
import { HttpFile } from '../http/http.js';

/**
* Represents all available timers in a vmi.
*/
export class V1Timer {
    'hpet'?: V1HPETTimer;
    'hyperv'?: V1HypervTimer;
    'kvm'?: V1KVMTimer;
    'pit'?: V1PITTimer;
    'rtc'?: V1RTCTimer;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "hpet",
            "baseName": "hpet",
            "type": "V1HPETTimer",
            "format": ""
        },
        {
            "name": "hyperv",
            "baseName": "hyperv",
            "type": "V1HypervTimer",
            "format": ""
        },
        {
            "name": "kvm",
            "baseName": "kvm",
            "type": "V1KVMTimer",
            "format": ""
        },
        {
            "name": "pit",
            "baseName": "pit",
            "type": "V1PITTimer",
            "format": ""
        },
        {
            "name": "rtc",
            "baseName": "rtc",
            "type": "V1RTCTimer",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1Timer.attributeTypeMap;
    }

    public constructor() {
    }
}
