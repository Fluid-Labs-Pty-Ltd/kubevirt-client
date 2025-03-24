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
 * @export
 */
export const V1PersistentVolumeClaimInfoAccessModesEnum = {
    ReadOnlyMany: 'ReadOnlyMany',
    ReadWriteMany: 'ReadWriteMany',
    ReadWriteOnce: 'ReadWriteOnce',
    ReadWriteOncePod: 'ReadWriteOncePod'
};
/**
 * @export
 */
export const V1PersistentVolumeClaimInfoVolumeModeEnum = {
    Block: 'Block',
    Filesystem: 'Filesystem'
};
/**
 * Check if a given object implements the V1PersistentVolumeClaimInfo interface.
 */
export function instanceOfV1PersistentVolumeClaimInfo(value) {
    return true;
}
export function V1PersistentVolumeClaimInfoFromJSON(json) {
    return V1PersistentVolumeClaimInfoFromJSONTyped(json, false);
}
export function V1PersistentVolumeClaimInfoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'accessModes': json['accessModes'] == null ? undefined : json['accessModes'],
        'capacity': json['capacity'] == null ? undefined : json['capacity'],
        'claimName': json['claimName'] == null ? undefined : json['claimName'],
        'filesystemOverhead': json['filesystemOverhead'] == null ? undefined : json['filesystemOverhead'],
        'preallocated': json['preallocated'] == null ? undefined : json['preallocated'],
        'requests': json['requests'] == null ? undefined : json['requests'],
        'volumeMode': json['volumeMode'] == null ? undefined : json['volumeMode'],
    };
}
export function V1PersistentVolumeClaimInfoToJSON(json) {
    return V1PersistentVolumeClaimInfoToJSONTyped(json, false);
}
export function V1PersistentVolumeClaimInfoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'accessModes': value['accessModes'],
        'capacity': value['capacity'],
        'claimName': value['claimName'],
        'filesystemOverhead': value['filesystemOverhead'],
        'preallocated': value['preallocated'],
        'requests': value['requests'],
        'volumeMode': value['volumeMode'],
    };
}
//# sourceMappingURL=V1PersistentVolumeClaimInfo.js.map