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
 * Check if a given object implements the V1VirtualMachineInstanceNetworkInterface interface.
 */
export function instanceOfV1VirtualMachineInstanceNetworkInterface(value) {
    return true;
}
export function V1VirtualMachineInstanceNetworkInterfaceFromJSON(json) {
    return V1VirtualMachineInstanceNetworkInterfaceFromJSONTyped(json, false);
}
export function V1VirtualMachineInstanceNetworkInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'infoSource': json['infoSource'] == null ? undefined : json['infoSource'],
        'interfaceName': json['interfaceName'] == null ? undefined : json['interfaceName'],
        'ipAddress': json['ipAddress'] == null ? undefined : json['ipAddress'],
        'ipAddresses': json['ipAddresses'] == null ? undefined : json['ipAddresses'],
        'mac': json['mac'] == null ? undefined : json['mac'],
        'name': json['name'] == null ? undefined : json['name'],
        'podInterfaceName': json['podInterfaceName'] == null ? undefined : json['podInterfaceName'],
        'queueCount': json['queueCount'] == null ? undefined : json['queueCount'],
    };
}
export function V1VirtualMachineInstanceNetworkInterfaceToJSON(json) {
    return V1VirtualMachineInstanceNetworkInterfaceToJSONTyped(json, false);
}
export function V1VirtualMachineInstanceNetworkInterfaceToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'infoSource': value['infoSource'],
        'interfaceName': value['interfaceName'],
        'ipAddress': value['ipAddress'],
        'ipAddresses': value['ipAddresses'],
        'mac': value['mac'],
        'name': value['name'],
        'podInterfaceName': value['podInterfaceName'],
        'queueCount': value['queueCount'],
    };
}
//# sourceMappingURL=V1VirtualMachineInstanceNetworkInterface.js.map