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
 * Check if a given object implements the V1VirtualMachineInstanceGuestOSUser interface.
 */
export function instanceOfV1VirtualMachineInstanceGuestOSUser(value) {
    if (!('userName' in value) || value['userName'] === undefined)
        return false;
    return true;
}
export function V1VirtualMachineInstanceGuestOSUserFromJSON(json) {
    return V1VirtualMachineInstanceGuestOSUserFromJSONTyped(json, false);
}
export function V1VirtualMachineInstanceGuestOSUserFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'domain': json['domain'] == null ? undefined : json['domain'],
        'loginTime': json['loginTime'] == null ? undefined : json['loginTime'],
        'userName': json['userName'],
    };
}
export function V1VirtualMachineInstanceGuestOSUserToJSON(json) {
    return V1VirtualMachineInstanceGuestOSUserToJSONTyped(json, false);
}
export function V1VirtualMachineInstanceGuestOSUserToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'domain': value['domain'],
        'loginTime': value['loginTime'],
        'userName': value['userName'],
    };
}
//# sourceMappingURL=V1VirtualMachineInstanceGuestOSUser.js.map