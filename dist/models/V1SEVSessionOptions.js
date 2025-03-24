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
 * Check if a given object implements the V1SEVSessionOptions interface.
 */
export function instanceOfV1SEVSessionOptions(value) {
    return true;
}
export function V1SEVSessionOptionsFromJSON(json) {
    return V1SEVSessionOptionsFromJSONTyped(json, false);
}
export function V1SEVSessionOptionsFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'dhCert': json['dhCert'] == null ? undefined : json['dhCert'],
        'session': json['session'] == null ? undefined : json['session'],
    };
}
export function V1SEVSessionOptionsToJSON(json) {
    return V1SEVSessionOptionsToJSONTyped(json, false);
}
export function V1SEVSessionOptionsToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'dhCert': value['dhCert'],
        'session': value['session'],
    };
}
//# sourceMappingURL=V1SEVSessionOptions.js.map