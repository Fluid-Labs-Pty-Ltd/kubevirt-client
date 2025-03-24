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
import type { V1GPU } from './V1GPU';
import {
    V1GPUFromJSON,
    V1GPUFromJSONTyped,
    V1GPUToJSON,
    V1GPUToJSONTyped,
} from './V1GPU';
import type { V1beta1CPUInstancetype } from './V1beta1CPUInstancetype';
import {
    V1beta1CPUInstancetypeFromJSON,
    V1beta1CPUInstancetypeFromJSONTyped,
    V1beta1CPUInstancetypeToJSON,
    V1beta1CPUInstancetypeToJSONTyped,
} from './V1beta1CPUInstancetype';
import type { V1HostDevice } from './V1HostDevice';
import {
    V1HostDeviceFromJSON,
    V1HostDeviceFromJSONTyped,
    V1HostDeviceToJSON,
    V1HostDeviceToJSONTyped,
} from './V1HostDevice';
import type { V1LaunchSecurity } from './V1LaunchSecurity';
import {
    V1LaunchSecurityFromJSON,
    V1LaunchSecurityFromJSONTyped,
    V1LaunchSecurityToJSON,
    V1LaunchSecurityToJSONTyped,
} from './V1LaunchSecurity';
import type { V1beta1MemoryInstancetype } from './V1beta1MemoryInstancetype';
import {
    V1beta1MemoryInstancetypeFromJSON,
    V1beta1MemoryInstancetypeFromJSONTyped,
    V1beta1MemoryInstancetypeToJSON,
    V1beta1MemoryInstancetypeToJSONTyped,
} from './V1beta1MemoryInstancetype';

/**
 * VirtualMachineInstancetypeSpec is a description of the VirtualMachineInstancetype or VirtualMachineClusterInstancetype.
 * 
 * CPU and Memory are required attributes with both requiring that their Guest attribute is defined, ensuring a number of vCPUs and amount of RAM is always provided by each instancetype.
 * @export
 * @interface V1beta1VirtualMachineInstancetypeSpec
 */
export interface V1beta1VirtualMachineInstancetypeSpec {
    /**
     * Optionally defines the required Annotations to be used by the instance type and applied to the VirtualMachineInstance
     * @type {{ [key: string]: string; }}
     * @memberof V1beta1VirtualMachineInstancetypeSpec
     */
    annotations?: { [key: string]: string; };
    /**
     * 
     * @type {V1beta1CPUInstancetype}
     * @memberof V1beta1VirtualMachineInstancetypeSpec
     */
    cpu: V1beta1CPUInstancetype;
    /**
     * Optionally defines any GPU devices associated with the instancetype.
     * @type {Array<V1GPU>}
     * @memberof V1beta1VirtualMachineInstancetypeSpec
     */
    gpus?: Array<V1GPU>;
    /**
     * Optionally defines any HostDevices associated with the instancetype.
     * @type {Array<V1HostDevice>}
     * @memberof V1beta1VirtualMachineInstancetypeSpec
     */
    hostDevices?: Array<V1HostDevice>;
    /**
     * Optionally defines the IOThreadsPolicy to be used by the instancetype.
     * @type {string}
     * @memberof V1beta1VirtualMachineInstancetypeSpec
     */
    ioThreadsPolicy?: string;
    /**
     * 
     * @type {V1LaunchSecurity}
     * @memberof V1beta1VirtualMachineInstancetypeSpec
     */
    launchSecurity?: V1LaunchSecurity;
    /**
     * 
     * @type {V1beta1MemoryInstancetype}
     * @memberof V1beta1VirtualMachineInstancetypeSpec
     */
    memory: V1beta1MemoryInstancetype;
    /**
     * NodeSelector is a selector which must be true for the vmi to fit on a node. Selector which must match a node's labels for the vmi to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
     * 
     * NodeSelector is the name of the custom node selector for the instancetype.
     * @type {{ [key: string]: string; }}
     * @memberof V1beta1VirtualMachineInstancetypeSpec
     */
    nodeSelector?: { [key: string]: string; };
    /**
     * If specified, the VMI will be dispatched by specified scheduler. If not specified, the VMI will be dispatched by default scheduler.
     * 
     * SchedulerName is the name of the custom K8s scheduler for the instancetype.
     * @type {string}
     * @memberof V1beta1VirtualMachineInstancetypeSpec
     */
    schedulerName?: string;
}

/**
 * Check if a given object implements the V1beta1VirtualMachineInstancetypeSpec interface.
 */
export function instanceOfV1beta1VirtualMachineInstancetypeSpec(value: object): value is V1beta1VirtualMachineInstancetypeSpec {
    if (!('cpu' in value) || value['cpu'] === undefined) return false;
    if (!('memory' in value) || value['memory'] === undefined) return false;
    return true;
}

export function V1beta1VirtualMachineInstancetypeSpecFromJSON(json: any): V1beta1VirtualMachineInstancetypeSpec {
    return V1beta1VirtualMachineInstancetypeSpecFromJSONTyped(json, false);
}

export function V1beta1VirtualMachineInstancetypeSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1VirtualMachineInstancetypeSpec {
    if (json == null) {
        return json;
    }
    return {
        
        'annotations': json['annotations'] == null ? undefined : json['annotations'],
        'cpu': V1beta1CPUInstancetypeFromJSON(json['cpu']),
        'gpus': json['gpus'] == null ? undefined : ((json['gpus'] as Array<any>).map(V1GPUFromJSON)),
        'hostDevices': json['hostDevices'] == null ? undefined : ((json['hostDevices'] as Array<any>).map(V1HostDeviceFromJSON)),
        'ioThreadsPolicy': json['ioThreadsPolicy'] == null ? undefined : json['ioThreadsPolicy'],
        'launchSecurity': json['launchSecurity'] == null ? undefined : V1LaunchSecurityFromJSON(json['launchSecurity']),
        'memory': V1beta1MemoryInstancetypeFromJSON(json['memory']),
        'nodeSelector': json['nodeSelector'] == null ? undefined : json['nodeSelector'],
        'schedulerName': json['schedulerName'] == null ? undefined : json['schedulerName'],
    };
}

export function V1beta1VirtualMachineInstancetypeSpecToJSON(json: any): V1beta1VirtualMachineInstancetypeSpec {
    return V1beta1VirtualMachineInstancetypeSpecToJSONTyped(json, false);
}

export function V1beta1VirtualMachineInstancetypeSpecToJSONTyped(value?: V1beta1VirtualMachineInstancetypeSpec | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'annotations': value['annotations'],
        'cpu': V1beta1CPUInstancetypeToJSON(value['cpu']),
        'gpus': value['gpus'] == null ? undefined : ((value['gpus'] as Array<any>).map(V1GPUToJSON)),
        'hostDevices': value['hostDevices'] == null ? undefined : ((value['hostDevices'] as Array<any>).map(V1HostDeviceToJSON)),
        'ioThreadsPolicy': value['ioThreadsPolicy'],
        'launchSecurity': V1LaunchSecurityToJSON(value['launchSecurity']),
        'memory': V1beta1MemoryInstancetypeToJSON(value['memory']),
        'nodeSelector': value['nodeSelector'],
        'schedulerName': value['schedulerName'],
    };
}

