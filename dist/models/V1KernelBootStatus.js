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
import { V1InitrdInfoFromJSON, V1InitrdInfoToJSON, } from './V1InitrdInfo.js';
import { V1KernelInfoFromJSON, V1KernelInfoToJSON, } from './V1KernelInfo.js';
/**
 * Check if a given object implements the V1KernelBootStatus interface.
 */
export function instanceOfV1KernelBootStatus(value) {
    return true;
}
export function V1KernelBootStatusFromJSON(json) {
    return V1KernelBootStatusFromJSONTyped(json, false);
}
export function V1KernelBootStatusFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'initrdInfo': json['initrdInfo'] == null ? undefined : V1InitrdInfoFromJSON(json['initrdInfo']),
        'kernelInfo': json['kernelInfo'] == null ? undefined : V1KernelInfoFromJSON(json['kernelInfo']),
    };
}
export function V1KernelBootStatusToJSON(json) {
    return V1KernelBootStatusToJSONTyped(json, false);
}
export function V1KernelBootStatusToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'initrdInfo': V1InitrdInfoToJSON(value['initrdInfo']),
        'kernelInfo': V1KernelInfoToJSON(value['kernelInfo']),
    };
}
//# sourceMappingURL=V1KernelBootStatus.js.map