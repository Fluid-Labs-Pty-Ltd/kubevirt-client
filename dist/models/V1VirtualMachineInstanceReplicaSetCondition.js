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
 * Check if a given object implements the V1VirtualMachineInstanceReplicaSetCondition interface.
 */
export function instanceOfV1VirtualMachineInstanceReplicaSetCondition(value) {
    if (!('status' in value) || value['status'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
export function V1VirtualMachineInstanceReplicaSetConditionFromJSON(json) {
    return V1VirtualMachineInstanceReplicaSetConditionFromJSONTyped(json, false);
}
export function V1VirtualMachineInstanceReplicaSetConditionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'message': json['message'] == null ? undefined : json['message'],
        'reason': json['reason'] == null ? undefined : json['reason'],
        'status': json['status'],
        'type': json['type'],
    };
}
export function V1VirtualMachineInstanceReplicaSetConditionToJSON(json) {
    return V1VirtualMachineInstanceReplicaSetConditionToJSONTyped(json, false);
}
export function V1VirtualMachineInstanceReplicaSetConditionToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'message': value['message'],
        'reason': value['reason'],
        'status': value['status'],
        'type': value['type'],
    };
}
//# sourceMappingURL=V1VirtualMachineInstanceReplicaSetCondition.js.map