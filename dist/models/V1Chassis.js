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
 * Check if a given object implements the V1Chassis interface.
 */
export function instanceOfV1Chassis(value) {
    return true;
}
export function V1ChassisFromJSON(json) {
    return V1ChassisFromJSONTyped(json, false);
}
export function V1ChassisFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'asset': json['asset'] == null ? undefined : json['asset'],
        'manufacturer': json['manufacturer'] == null ? undefined : json['manufacturer'],
        'serial': json['serial'] == null ? undefined : json['serial'],
        'sku': json['sku'] == null ? undefined : json['sku'],
        'version': json['version'] == null ? undefined : json['version'],
    };
}
export function V1ChassisToJSON(json) {
    return V1ChassisToJSONTyped(json, false);
}
export function V1ChassisToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'asset': value['asset'],
        'manufacturer': value['manufacturer'],
        'serial': value['serial'],
        'sku': value['sku'],
        'version': value['version'],
    };
}
//# sourceMappingURL=V1Chassis.js.map