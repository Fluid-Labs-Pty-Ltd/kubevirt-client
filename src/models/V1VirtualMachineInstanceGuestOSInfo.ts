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
/**
 * 
 * @export
 * @interface V1VirtualMachineInstanceGuestOSInfo
 */
export interface V1VirtualMachineInstanceGuestOSInfo {
    /**
     * Guest OS Id
     * @type {string}
     * @memberof V1VirtualMachineInstanceGuestOSInfo
     */
    id?: string;
    /**
     * Guest OS Kernel Release
     * @type {string}
     * @memberof V1VirtualMachineInstanceGuestOSInfo
     */
    kernelRelease?: string;
    /**
     * Kernel version of the Guest OS
     * @type {string}
     * @memberof V1VirtualMachineInstanceGuestOSInfo
     */
    kernelVersion?: string;
    /**
     * Machine type of the Guest OS
     * @type {string}
     * @memberof V1VirtualMachineInstanceGuestOSInfo
     */
    machine?: string;
    /**
     * Name of the Guest OS
     * @type {string}
     * @memberof V1VirtualMachineInstanceGuestOSInfo
     */
    name?: string;
    /**
     * Guest OS Pretty Name
     * @type {string}
     * @memberof V1VirtualMachineInstanceGuestOSInfo
     */
    prettyName?: string;
    /**
     * Guest OS Version
     * @type {string}
     * @memberof V1VirtualMachineInstanceGuestOSInfo
     */
    version?: string;
    /**
     * Version ID of the Guest OS
     * @type {string}
     * @memberof V1VirtualMachineInstanceGuestOSInfo
     */
    versionId?: string;
}

/**
 * Check if a given object implements the V1VirtualMachineInstanceGuestOSInfo interface.
 */
export function instanceOfV1VirtualMachineInstanceGuestOSInfo(value: object): value is V1VirtualMachineInstanceGuestOSInfo {
    return true;
}

export function V1VirtualMachineInstanceGuestOSInfoFromJSON(json: any): V1VirtualMachineInstanceGuestOSInfo {
    return V1VirtualMachineInstanceGuestOSInfoFromJSONTyped(json, false);
}

export function V1VirtualMachineInstanceGuestOSInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VirtualMachineInstanceGuestOSInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'kernelRelease': json['kernelRelease'] == null ? undefined : json['kernelRelease'],
        'kernelVersion': json['kernelVersion'] == null ? undefined : json['kernelVersion'],
        'machine': json['machine'] == null ? undefined : json['machine'],
        'name': json['name'] == null ? undefined : json['name'],
        'prettyName': json['prettyName'] == null ? undefined : json['prettyName'],
        'version': json['version'] == null ? undefined : json['version'],
        'versionId': json['versionId'] == null ? undefined : json['versionId'],
    };
}

export function V1VirtualMachineInstanceGuestOSInfoToJSON(json: any): V1VirtualMachineInstanceGuestOSInfo {
    return V1VirtualMachineInstanceGuestOSInfoToJSONTyped(json, false);
}

export function V1VirtualMachineInstanceGuestOSInfoToJSONTyped(value?: V1VirtualMachineInstanceGuestOSInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'kernelRelease': value['kernelRelease'],
        'kernelVersion': value['kernelVersion'],
        'machine': value['machine'],
        'name': value['name'],
        'prettyName': value['prettyName'],
        'version': value['version'],
        'versionId': value['versionId'],
    };
}

