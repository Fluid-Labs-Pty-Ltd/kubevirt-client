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
 * Check if a given object implements the V1beta1DataVolumeSourceVDDK interface.
 */
export function instanceOfV1beta1DataVolumeSourceVDDK(value) {
    return true;
}
export function V1beta1DataVolumeSourceVDDKFromJSON(json) {
    return V1beta1DataVolumeSourceVDDKFromJSONTyped(json, false);
}
export function V1beta1DataVolumeSourceVDDKFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'backingFile': json['backingFile'] == null ? undefined : json['backingFile'],
        'initImageURL': json['initImageURL'] == null ? undefined : json['initImageURL'],
        'secretRef': json['secretRef'] == null ? undefined : json['secretRef'],
        'thumbprint': json['thumbprint'] == null ? undefined : json['thumbprint'],
        'url': json['url'] == null ? undefined : json['url'],
        'uuid': json['uuid'] == null ? undefined : json['uuid'],
    };
}
export function V1beta1DataVolumeSourceVDDKToJSON(json) {
    return V1beta1DataVolumeSourceVDDKToJSONTyped(json, false);
}
export function V1beta1DataVolumeSourceVDDKToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'backingFile': value['backingFile'],
        'initImageURL': value['initImageURL'],
        'secretRef': value['secretRef'],
        'thumbprint': value['thumbprint'],
        'url': value['url'],
        'uuid': value['uuid'],
    };
}
//# sourceMappingURL=V1beta1DataVolumeSourceVDDK.js.map