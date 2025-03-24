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
import type { V1VirtualMachineInstanceGuestOSInfo } from './V1VirtualMachineInstanceGuestOSInfo';
import {
    V1VirtualMachineInstanceGuestOSInfoFromJSON,
    V1VirtualMachineInstanceGuestOSInfoFromJSONTyped,
    V1VirtualMachineInstanceGuestOSInfoToJSON,
    V1VirtualMachineInstanceGuestOSInfoToJSONTyped,
} from './V1VirtualMachineInstanceGuestOSInfo';
import type { V1VirtualMachineInstanceFileSystemInfo } from './V1VirtualMachineInstanceFileSystemInfo';
import {
    V1VirtualMachineInstanceFileSystemInfoFromJSON,
    V1VirtualMachineInstanceFileSystemInfoFromJSONTyped,
    V1VirtualMachineInstanceFileSystemInfoToJSON,
    V1VirtualMachineInstanceFileSystemInfoToJSONTyped,
} from './V1VirtualMachineInstanceFileSystemInfo';
import type { V1GuestAgentCommandInfo } from './V1GuestAgentCommandInfo';
import {
    V1GuestAgentCommandInfoFromJSON,
    V1GuestAgentCommandInfoFromJSONTyped,
    V1GuestAgentCommandInfoToJSON,
    V1GuestAgentCommandInfoToJSONTyped,
} from './V1GuestAgentCommandInfo';
import type { V1VirtualMachineInstanceGuestOSUser } from './V1VirtualMachineInstanceGuestOSUser';
import {
    V1VirtualMachineInstanceGuestOSUserFromJSON,
    V1VirtualMachineInstanceGuestOSUserFromJSONTyped,
    V1VirtualMachineInstanceGuestOSUserToJSON,
    V1VirtualMachineInstanceGuestOSUserToJSONTyped,
} from './V1VirtualMachineInstanceGuestOSUser';

/**
 * VirtualMachineInstanceGuestAgentInfo represents information from the installed guest agent
 * @export
 * @interface V1VirtualMachineInstanceGuestAgentInfo
 */
export interface V1VirtualMachineInstanceGuestAgentInfo {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1VirtualMachineInstanceGuestAgentInfo
     */
    apiVersion?: string;
    /**
     * FSFreezeStatus is the state of the fs of the guest it can be either frozen or thawed
     * @type {string}
     * @memberof V1VirtualMachineInstanceGuestAgentInfo
     */
    fsFreezeStatus?: string;
    /**
     * 
     * @type {V1VirtualMachineInstanceFileSystemInfo}
     * @memberof V1VirtualMachineInstanceGuestAgentInfo
     */
    fsInfo?: V1VirtualMachineInstanceFileSystemInfo;
    /**
     * GAVersion is a version of currently installed guest agent
     * @type {string}
     * @memberof V1VirtualMachineInstanceGuestAgentInfo
     */
    guestAgentVersion?: string;
    /**
     * Hostname represents FQDN of a guest
     * @type {string}
     * @memberof V1VirtualMachineInstanceGuestAgentInfo
     */
    hostname?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1VirtualMachineInstanceGuestAgentInfo
     */
    kind?: string;
    /**
     * 
     * @type {V1VirtualMachineInstanceGuestOSInfo}
     * @memberof V1VirtualMachineInstanceGuestAgentInfo
     */
    os?: V1VirtualMachineInstanceGuestOSInfo;
    /**
     * Return command list the guest agent supports
     * @type {Array<V1GuestAgentCommandInfo>}
     * @memberof V1VirtualMachineInstanceGuestAgentInfo
     */
    supportedCommands?: Array<V1GuestAgentCommandInfo>;
    /**
     * Timezone is guest os current timezone
     * @type {string}
     * @memberof V1VirtualMachineInstanceGuestAgentInfo
     */
    timezone?: string;
    /**
     * UserList is a list of active guest OS users
     * @type {Array<V1VirtualMachineInstanceGuestOSUser>}
     * @memberof V1VirtualMachineInstanceGuestAgentInfo
     */
    userList?: Array<V1VirtualMachineInstanceGuestOSUser>;
}

/**
 * Check if a given object implements the V1VirtualMachineInstanceGuestAgentInfo interface.
 */
export function instanceOfV1VirtualMachineInstanceGuestAgentInfo(value: object): value is V1VirtualMachineInstanceGuestAgentInfo {
    return true;
}

export function V1VirtualMachineInstanceGuestAgentInfoFromJSON(json: any): V1VirtualMachineInstanceGuestAgentInfo {
    return V1VirtualMachineInstanceGuestAgentInfoFromJSONTyped(json, false);
}

export function V1VirtualMachineInstanceGuestAgentInfoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1VirtualMachineInstanceGuestAgentInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'fsFreezeStatus': json['fsFreezeStatus'] == null ? undefined : json['fsFreezeStatus'],
        'fsInfo': json['fsInfo'] == null ? undefined : V1VirtualMachineInstanceFileSystemInfoFromJSON(json['fsInfo']),
        'guestAgentVersion': json['guestAgentVersion'] == null ? undefined : json['guestAgentVersion'],
        'hostname': json['hostname'] == null ? undefined : json['hostname'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'os': json['os'] == null ? undefined : V1VirtualMachineInstanceGuestOSInfoFromJSON(json['os']),
        'supportedCommands': json['supportedCommands'] == null ? undefined : ((json['supportedCommands'] as Array<any>).map(V1GuestAgentCommandInfoFromJSON)),
        'timezone': json['timezone'] == null ? undefined : json['timezone'],
        'userList': json['userList'] == null ? undefined : ((json['userList'] as Array<any>).map(V1VirtualMachineInstanceGuestOSUserFromJSON)),
    };
}

export function V1VirtualMachineInstanceGuestAgentInfoToJSON(json: any): V1VirtualMachineInstanceGuestAgentInfo {
    return V1VirtualMachineInstanceGuestAgentInfoToJSONTyped(json, false);
}

export function V1VirtualMachineInstanceGuestAgentInfoToJSONTyped(value?: V1VirtualMachineInstanceGuestAgentInfo | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'apiVersion': value['apiVersion'],
        'fsFreezeStatus': value['fsFreezeStatus'],
        'fsInfo': V1VirtualMachineInstanceFileSystemInfoToJSON(value['fsInfo']),
        'guestAgentVersion': value['guestAgentVersion'],
        'hostname': value['hostname'],
        'kind': value['kind'],
        'os': V1VirtualMachineInstanceGuestOSInfoToJSON(value['os']),
        'supportedCommands': value['supportedCommands'] == null ? undefined : ((value['supportedCommands'] as Array<any>).map(V1GuestAgentCommandInfoToJSON)),
        'timezone': value['timezone'],
        'userList': value['userList'] == null ? undefined : ((value['userList'] as Array<any>).map(V1VirtualMachineInstanceGuestOSUserToJSON)),
    };
}

