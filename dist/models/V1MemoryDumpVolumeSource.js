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
 * Check if a given object implements the V1MemoryDumpVolumeSource interface.
 */
export function instanceOfV1MemoryDumpVolumeSource(value) {
    if (!('claimName' in value) || value['claimName'] === undefined)
        return false;
    return true;
}
export function V1MemoryDumpVolumeSourceFromJSON(json) {
    return V1MemoryDumpVolumeSourceFromJSONTyped(json, false);
}
export function V1MemoryDumpVolumeSourceFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'claimName': json['claimName'],
        'hotpluggable': json['hotpluggable'] == null ? undefined : json['hotpluggable'],
        'readOnly': json['readOnly'] == null ? undefined : json['readOnly'],
    };
}
export function V1MemoryDumpVolumeSourceToJSON(json) {
    return V1MemoryDumpVolumeSourceToJSONTyped(json, false);
}
export function V1MemoryDumpVolumeSourceToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'claimName': value['claimName'],
        'hotpluggable': value['hotpluggable'],
        'readOnly': value['readOnly'],
    };
}
//# sourceMappingURL=V1MemoryDumpVolumeSource.js.map