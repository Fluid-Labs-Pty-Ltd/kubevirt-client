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
import { K8sIoApiCoreV1TypedLocalObjectReferenceFromJSON, K8sIoApiCoreV1TypedLocalObjectReferenceToJSON, } from './K8sIoApiCoreV1TypedLocalObjectReference.js';
import { V1alpha1VirtualMachineCloneTemplateFiltersFromJSON, V1alpha1VirtualMachineCloneTemplateFiltersToJSON, } from './V1alpha1VirtualMachineCloneTemplateFilters.js';
/**
 * Check if a given object implements the V1alpha1VirtualMachineCloneSpec interface.
 */
export function instanceOfV1alpha1VirtualMachineCloneSpec(value) {
    if (!('source' in value) || value['source'] === undefined)
        return false;
    return true;
}
export function V1alpha1VirtualMachineCloneSpecFromJSON(json) {
    return V1alpha1VirtualMachineCloneSpecFromJSONTyped(json, false);
}
export function V1alpha1VirtualMachineCloneSpecFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'annotationFilters': json['annotationFilters'] == null ? undefined : json['annotationFilters'],
        'labelFilters': json['labelFilters'] == null ? undefined : json['labelFilters'],
        'newMacAddresses': json['newMacAddresses'] == null ? undefined : json['newMacAddresses'],
        'newSMBiosSerial': json['newSMBiosSerial'] == null ? undefined : json['newSMBiosSerial'],
        'source': K8sIoApiCoreV1TypedLocalObjectReferenceFromJSON(json['source']),
        'target': json['target'] == null ? undefined : K8sIoApiCoreV1TypedLocalObjectReferenceFromJSON(json['target']),
        'template': json['template'] == null ? undefined : V1alpha1VirtualMachineCloneTemplateFiltersFromJSON(json['template']),
    };
}
export function V1alpha1VirtualMachineCloneSpecToJSON(json) {
    return V1alpha1VirtualMachineCloneSpecToJSONTyped(json, false);
}
export function V1alpha1VirtualMachineCloneSpecToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'annotationFilters': value['annotationFilters'],
        'labelFilters': value['labelFilters'],
        'newMacAddresses': value['newMacAddresses'],
        'newSMBiosSerial': value['newSMBiosSerial'],
        'source': K8sIoApiCoreV1TypedLocalObjectReferenceToJSON(value['source']),
        'target': K8sIoApiCoreV1TypedLocalObjectReferenceToJSON(value['target']),
        'template': V1alpha1VirtualMachineCloneTemplateFiltersToJSON(value['template']),
    };
}
//# sourceMappingURL=V1alpha1VirtualMachineCloneSpec.js.map