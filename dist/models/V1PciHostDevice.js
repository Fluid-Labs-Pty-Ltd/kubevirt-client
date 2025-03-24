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
 * Check if a given object implements the V1PciHostDevice interface.
 */
export function instanceOfV1PciHostDevice(value) {
    if (!('pciVendorSelector' in value) || value['pciVendorSelector'] === undefined)
        return false;
    if (!('resourceName' in value) || value['resourceName'] === undefined)
        return false;
    return true;
}
export function V1PciHostDeviceFromJSON(json) {
    return V1PciHostDeviceFromJSONTyped(json, false);
}
export function V1PciHostDeviceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'externalResourceProvider': json['externalResourceProvider'] == null ? undefined : json['externalResourceProvider'],
        'pciVendorSelector': json['pciVendorSelector'],
        'resourceName': json['resourceName'],
    };
}
export function V1PciHostDeviceToJSON(json) {
    return V1PciHostDeviceToJSONTyped(json, false);
}
export function V1PciHostDeviceToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'externalResourceProvider': value['externalResourceProvider'],
        'pciVendorSelector': value['pciVendorSelector'],
        'resourceName': value['resourceName'],
    };
}
//# sourceMappingURL=V1PciHostDevice.js.map