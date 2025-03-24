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
 * Check if a given object implements the V1beta1DataVolumeSourceRef interface.
 */
export function instanceOfV1beta1DataVolumeSourceRef(value) {
    if (!('kind' in value) || value['kind'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    return true;
}
export function V1beta1DataVolumeSourceRefFromJSON(json) {
    return V1beta1DataVolumeSourceRefFromJSONTyped(json, false);
}
export function V1beta1DataVolumeSourceRefFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'kind': json['kind'],
        'name': json['name'],
        'namespace': json['namespace'] == null ? undefined : json['namespace'],
    };
}
export function V1beta1DataVolumeSourceRefToJSON(json) {
    return V1beta1DataVolumeSourceRefToJSONTyped(json, false);
}
export function V1beta1DataVolumeSourceRefToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'kind': value['kind'],
        'name': value['name'],
        'namespace': value['namespace'],
    };
}
//# sourceMappingURL=V1beta1DataVolumeSourceRef.js.map