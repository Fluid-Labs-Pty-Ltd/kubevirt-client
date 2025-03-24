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
 * Check if a given object implements the V1ACPI interface.
 */
export function instanceOfV1ACPI(value) {
    return true;
}
export function V1ACPIFromJSON(json) {
    return V1ACPIFromJSONTyped(json, false);
}
export function V1ACPIFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'slicNameRef': json['slicNameRef'] == null ? undefined : json['slicNameRef'],
    };
}
export function V1ACPIToJSON(json) {
    return V1ACPIToJSONTyped(json, false);
}
export function V1ACPIToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'slicNameRef': value['slicNameRef'],
    };
}
//# sourceMappingURL=V1ACPI.js.map