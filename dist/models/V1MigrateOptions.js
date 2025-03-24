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
 * Check if a given object implements the V1MigrateOptions interface.
 */
export function instanceOfV1MigrateOptions(value) {
    return true;
}
export function V1MigrateOptionsFromJSON(json) {
    return V1MigrateOptionsFromJSONTyped(json, false);
}
export function V1MigrateOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'dryRun': json['dryRun'] == null ? undefined : json['dryRun'],
        'kind': json['kind'] == null ? undefined : json['kind'],
    };
}
export function V1MigrateOptionsToJSON(json) {
    return V1MigrateOptionsToJSONTyped(json, false);
}
export function V1MigrateOptionsToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'apiVersion': value['apiVersion'],
        'dryRun': value['dryRun'],
        'kind': value['kind'],
    };
}
//# sourceMappingURL=V1MigrateOptions.js.map