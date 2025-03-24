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
import { V1VirtualMachineInstanceFileSystemFromJSON, V1VirtualMachineInstanceFileSystemToJSON, } from './V1VirtualMachineInstanceFileSystem.js';
/**
 * Check if a given object implements the V1VirtualMachineInstanceFileSystemInfo interface.
 */
export function instanceOfV1VirtualMachineInstanceFileSystemInfo(value) {
    if (!('disks' in value) || value['disks'] === undefined)
        return false;
    return true;
}
export function V1VirtualMachineInstanceFileSystemInfoFromJSON(json) {
    return V1VirtualMachineInstanceFileSystemInfoFromJSONTyped(json, false);
}
export function V1VirtualMachineInstanceFileSystemInfoFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'disks': (json['disks'].map(V1VirtualMachineInstanceFileSystemFromJSON)),
    };
}
export function V1VirtualMachineInstanceFileSystemInfoToJSON(json) {
    return V1VirtualMachineInstanceFileSystemInfoToJSONTyped(json, false);
}
export function V1VirtualMachineInstanceFileSystemInfoToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'disks': (value['disks'].map(V1VirtualMachineInstanceFileSystemToJSON)),
    };
}
//# sourceMappingURL=V1VirtualMachineInstanceFileSystemInfo.js.map