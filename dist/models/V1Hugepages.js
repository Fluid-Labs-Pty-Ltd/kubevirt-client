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
 * Check if a given object implements the V1Hugepages interface.
 */
export function instanceOfV1Hugepages(value) {
    return true;
}
export function V1HugepagesFromJSON(json) {
    return V1HugepagesFromJSONTyped(json, false);
}
export function V1HugepagesFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'pageSize': json['pageSize'] == null ? undefined : json['pageSize'],
    };
}
export function V1HugepagesToJSON(json) {
    return V1HugepagesToJSONTyped(json, false);
}
export function V1HugepagesToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'pageSize': value['pageSize'],
    };
}
//# sourceMappingURL=V1Hugepages.js.map