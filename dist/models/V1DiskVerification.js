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
 * Check if a given object implements the V1DiskVerification interface.
 */
export function instanceOfV1DiskVerification(value) {
    if (!('memoryLimit' in value) || value['memoryLimit'] === undefined)
        return false;
    return true;
}
export function V1DiskVerificationFromJSON(json) {
    return V1DiskVerificationFromJSONTyped(json, false);
}
export function V1DiskVerificationFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'memoryLimit': json['memoryLimit'],
    };
}
export function V1DiskVerificationToJSON(json) {
    return V1DiskVerificationToJSONTyped(json, false);
}
export function V1DiskVerificationToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'memoryLimit': value['memoryLimit'],
    };
}
//# sourceMappingURL=V1DiskVerification.js.map