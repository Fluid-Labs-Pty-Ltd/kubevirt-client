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
 * Check if a given object implements the V1MediatedHostDevice interface.
 */
export function instanceOfV1MediatedHostDevice(value) {
    if (!('mdevNameSelector' in value) || value['mdevNameSelector'] === undefined)
        return false;
    if (!('resourceName' in value) || value['resourceName'] === undefined)
        return false;
    return true;
}
export function V1MediatedHostDeviceFromJSON(json) {
    return V1MediatedHostDeviceFromJSONTyped(json, false);
}
export function V1MediatedHostDeviceFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'externalResourceProvider': json['externalResourceProvider'] == null ? undefined : json['externalResourceProvider'],
        'mdevNameSelector': json['mdevNameSelector'],
        'resourceName': json['resourceName'],
    };
}
export function V1MediatedHostDeviceToJSON(json) {
    return V1MediatedHostDeviceToJSONTyped(json, false);
}
export function V1MediatedHostDeviceToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'externalResourceProvider': value['externalResourceProvider'],
        'mdevNameSelector': value['mdevNameSelector'],
        'resourceName': value['resourceName'],
    };
}
//# sourceMappingURL=V1MediatedHostDevice.js.map