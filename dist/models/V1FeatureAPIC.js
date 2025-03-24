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
 * Check if a given object implements the V1FeatureAPIC interface.
 */
export function instanceOfV1FeatureAPIC(value) {
    return true;
}
export function V1FeatureAPICFromJSON(json) {
    return V1FeatureAPICFromJSONTyped(json, false);
}
export function V1FeatureAPICFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'enabled': json['enabled'] == null ? undefined : json['enabled'],
        'endOfInterrupt': json['endOfInterrupt'] == null ? undefined : json['endOfInterrupt'],
    };
}
export function V1FeatureAPICToJSON(json) {
    return V1FeatureAPICToJSONTyped(json, false);
}
export function V1FeatureAPICToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'enabled': value['enabled'],
        'endOfInterrupt': value['endOfInterrupt'],
    };
}
//# sourceMappingURL=V1FeatureAPIC.js.map