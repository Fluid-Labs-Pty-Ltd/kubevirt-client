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
 * Check if a given object implements the V1beta1DataVolumeSourceRegistry interface.
 */
export function instanceOfV1beta1DataVolumeSourceRegistry(value) {
    return true;
}
export function V1beta1DataVolumeSourceRegistryFromJSON(json) {
    return V1beta1DataVolumeSourceRegistryFromJSONTyped(json, false);
}
export function V1beta1DataVolumeSourceRegistryFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'certConfigMap': json['certConfigMap'] == null ? undefined : json['certConfigMap'],
        'imageStream': json['imageStream'] == null ? undefined : json['imageStream'],
        'pullMethod': json['pullMethod'] == null ? undefined : json['pullMethod'],
        'secretRef': json['secretRef'] == null ? undefined : json['secretRef'],
        'url': json['url'] == null ? undefined : json['url'],
    };
}
export function V1beta1DataVolumeSourceRegistryToJSON(json) {
    return V1beta1DataVolumeSourceRegistryToJSONTyped(json, false);
}
export function V1beta1DataVolumeSourceRegistryToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'certConfigMap': value['certConfigMap'],
        'imageStream': value['imageStream'],
        'pullMethod': value['pullMethod'],
        'secretRef': value['secretRef'],
        'url': value['url'],
    };
}
//# sourceMappingURL=V1beta1DataVolumeSourceRegistry.js.map