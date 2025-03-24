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
 * Check if a given object implements the V1GuestAgentCommandInfo interface.
 */
export function instanceOfV1GuestAgentCommandInfo(value) {
    if (!('name' in value) || value['name'] === undefined)
        return false;
    return true;
}
export function V1GuestAgentCommandInfoFromJSON(json) {
    return V1GuestAgentCommandInfoFromJSONTyped(json, false);
}
export function V1GuestAgentCommandInfoFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'enabled': json['enabled'] == null ? undefined : json['enabled'],
        'name': json['name'],
    };
}
export function V1GuestAgentCommandInfoToJSON(json) {
    return V1GuestAgentCommandInfoToJSONTyped(json, false);
}
export function V1GuestAgentCommandInfoToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'enabled': value['enabled'],
        'name': value['name'],
    };
}
//# sourceMappingURL=V1GuestAgentCommandInfo.js.map