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
import { V1beta1VirtualMachineExportLinksFromJSON, V1beta1VirtualMachineExportLinksToJSON, } from './V1beta1VirtualMachineExportLinks.js';
import { V1beta1ConditionFromJSON, V1beta1ConditionToJSON, } from './V1beta1Condition.js';
/**
 * Check if a given object implements the V1beta1VirtualMachineExportStatus interface.
 */
export function instanceOfV1beta1VirtualMachineExportStatus(value) {
    return true;
}
export function V1beta1VirtualMachineExportStatusFromJSON(json) {
    return V1beta1VirtualMachineExportStatusFromJSONTyped(json, false);
}
export function V1beta1VirtualMachineExportStatusFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'conditions': json['conditions'] == null ? undefined : (json['conditions'].map(V1beta1ConditionFromJSON)),
        'links': json['links'] == null ? undefined : V1beta1VirtualMachineExportLinksFromJSON(json['links']),
        'phase': json['phase'] == null ? undefined : json['phase'],
        'serviceName': json['serviceName'] == null ? undefined : json['serviceName'],
        'tokenSecretRef': json['tokenSecretRef'] == null ? undefined : json['tokenSecretRef'],
        'ttlExpirationTime': json['ttlExpirationTime'] == null ? undefined : json['ttlExpirationTime'],
        'virtualMachineName': json['virtualMachineName'] == null ? undefined : json['virtualMachineName'],
    };
}
export function V1beta1VirtualMachineExportStatusToJSON(json) {
    return V1beta1VirtualMachineExportStatusToJSONTyped(json, false);
}
export function V1beta1VirtualMachineExportStatusToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'conditions': value['conditions'] == null ? undefined : (value['conditions'].map(V1beta1ConditionToJSON)),
        'links': V1beta1VirtualMachineExportLinksToJSON(value['links']),
        'phase': value['phase'],
        'serviceName': value['serviceName'],
        'tokenSecretRef': value['tokenSecretRef'],
        'ttlExpirationTime': value['ttlExpirationTime'],
        'virtualMachineName': value['virtualMachineName'],
    };
}
//# sourceMappingURL=V1beta1VirtualMachineExportStatus.js.map