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
import type { V1VirtualMachineInstanceFileSystemDisk } from './V1VirtualMachineInstanceFileSystemDisk.js';
import {
    V1VirtualMachineInstanceFileSystemDiskFromJSON,
    V1VirtualMachineInstanceFileSystemDiskFromJSONTyped,
    V1VirtualMachineInstanceFileSystemDiskToJSON,
    V1VirtualMachineInstanceFileSystemDiskToJSONTyped,
} from './V1VirtualMachineInstanceFileSystemDisk.js';

/**
 * VirtualMachineInstanceFileSystem represents guest os disk
 * @export
 * @interface V1VirtualMachineInstanceFileSystem
 */
export interface V1VirtualMachineInstanceFileSystem {
    /**
     * 
     * @type {Array<V1VirtualMachineInstanceFileSystemDisk>}
     * @memberof V1VirtualMachineInstanceFileSystem
     */
    disk?: Array<V1VirtualMachineInstanceFileSystemDisk>;
    /**
     * 
     * @type {string}
     * @memberof V1VirtualMachineInstanceFileSystem
     */
    diskName: string;
    /**
     * 
     * @type {string}
     * @memberof V1VirtualMachineInstanceFileSystem
     */
    fileSystemType: string;
    /**
     * 
     * @type {string}
     * @memberof V1VirtualMachineInstanceFileSystem
     */
    mountPoint: string;
    /**
     * 
     * @type {number}
     * @memberof V1VirtualMachineInstanceFileSystem
     */
    totalBytes: number;
    /**
     * 
     * @type {number}
     * @memberof V1VirtualMachineInstanceFileSystem
     */
    usedBytes: number;
}

/**
 * Check if a given object implements the V1VirtualMachineInstanceFileSystem interface.
 */
export function instanceOfV1VirtualMachineInstanceFileSystem(value: object): value is V1VirtualMachineInstanceFileSystem {
    if (!('diskName' in value) || value['diskName'] === undefined) return false;
    if (!('fileSystemType' in value) || value['fileSystemType'] === undefined) return false;
    if (!('mountPoint' in value) || value['mountPoint'] === undefined) return false;
    if (!('totalBytes' in value) || value['totalBytes'] === undefined) return false;
    if (!('usedBytes' in value) || value['usedBytes'] === undefined) return false;
    return true;
}

export function V1VirtualMachineInstanceFileSystemFromJSON(json: any): V1VirtualMachineInstanceFileSystem {
    return V1VirtualMachineInstanceFileSystemFromJSONTyped(json, false);
}

export function V1VirtualMachineInstanceFileSystemFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VirtualMachineInstanceFileSystem {
    if (json == null) {
        return json;
    }
    return {
        
        'disk': json['disk'] == null ? undefined : ((json['disk'] as Array<any>).map(V1VirtualMachineInstanceFileSystemDiskFromJSON)),
        'diskName': json['diskName'],
        'fileSystemType': json['fileSystemType'],
        'mountPoint': json['mountPoint'],
        'totalBytes': json['totalBytes'],
        'usedBytes': json['usedBytes'],
    };
}

export function V1VirtualMachineInstanceFileSystemToJSON(json: any): V1VirtualMachineInstanceFileSystem {
    return V1VirtualMachineInstanceFileSystemToJSONTyped(json, false);
}

export function V1VirtualMachineInstanceFileSystemToJSONTyped(value?: V1VirtualMachineInstanceFileSystem | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'disk': value['disk'] == null ? undefined : ((value['disk'] as Array<any>).map(V1VirtualMachineInstanceFileSystemDiskToJSON)),
        'diskName': value['diskName'],
        'fileSystemType': value['fileSystemType'],
        'mountPoint': value['mountPoint'],
        'totalBytes': value['totalBytes'],
        'usedBytes': value['usedBytes'],
    };
}

