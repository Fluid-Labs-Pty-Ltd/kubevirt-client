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
/**
 * Check if a given object implements the V1VirtualMachineStartFailure interface.
 */
export function instanceOfV1VirtualMachineStartFailure(value) {
    return true;
}
export function V1VirtualMachineStartFailureFromJSON(json) {
    return V1VirtualMachineStartFailureFromJSONTyped(json, false);
}
export function V1VirtualMachineStartFailureFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'consecutiveFailCount': json['consecutiveFailCount'] == null ? undefined : json['consecutiveFailCount'],
        'lastFailedVMIUID': json['lastFailedVMIUID'] == null ? undefined : json['lastFailedVMIUID'],
        'retryAfterTimestamp': json['retryAfterTimestamp'] == null ? undefined : json['retryAfterTimestamp'],
    };
}
export function V1VirtualMachineStartFailureToJSON(json) {
    return V1VirtualMachineStartFailureToJSONTyped(json, false);
}
export function V1VirtualMachineStartFailureToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'consecutiveFailCount': value['consecutiveFailCount'],
        'lastFailedVMIUID': value['lastFailedVMIUID'],
        'retryAfterTimestamp': value['retryAfterTimestamp'],
    };
}
//# sourceMappingURL=V1VirtualMachineStartFailure.js.map