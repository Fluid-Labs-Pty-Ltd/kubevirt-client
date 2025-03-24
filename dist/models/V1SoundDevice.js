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
 * Check if a given object implements the V1SoundDevice interface.
 */
export function instanceOfV1SoundDevice(value) {
    if (!('name' in value) || value['name'] === undefined)
        return false;
    return true;
}
export function V1SoundDeviceFromJSON(json) {
    return V1SoundDeviceFromJSONTyped(json, false);
}
export function V1SoundDeviceFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'model': json['model'] == null ? undefined : json['model'],
        'name': json['name'],
    };
}
export function V1SoundDeviceToJSON(json) {
    return V1SoundDeviceToJSONTyped(json, false);
}
export function V1SoundDeviceToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'model': value['model'],
        'name': value['name'],
    };
}
//# sourceMappingURL=V1SoundDevice.js.map