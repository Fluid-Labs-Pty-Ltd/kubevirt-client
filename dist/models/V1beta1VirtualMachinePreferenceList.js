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
import { K8sIoApimachineryPkgApisMetaV1ListMetaFromJSON, K8sIoApimachineryPkgApisMetaV1ListMetaToJSON, } from './K8sIoApimachineryPkgApisMetaV1ListMeta.js';
import { V1beta1VirtualMachinePreferenceFromJSON, V1beta1VirtualMachinePreferenceToJSON, } from './V1beta1VirtualMachinePreference.js';
/**
 * Check if a given object implements the V1beta1VirtualMachinePreferenceList interface.
 */
export function instanceOfV1beta1VirtualMachinePreferenceList(value) {
    if (!('items' in value) || value['items'] === undefined)
        return false;
    return true;
}
export function V1beta1VirtualMachinePreferenceListFromJSON(json) {
    return V1beta1VirtualMachinePreferenceListFromJSONTyped(json, false);
}
export function V1beta1VirtualMachinePreferenceListFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'items': (json['items'].map(V1beta1VirtualMachinePreferenceFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : K8sIoApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}
export function V1beta1VirtualMachinePreferenceListToJSON(json) {
    return V1beta1VirtualMachinePreferenceListToJSONTyped(json, false);
}
export function V1beta1VirtualMachinePreferenceListToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'apiVersion': value['apiVersion'],
        'items': (value['items'].map(V1beta1VirtualMachinePreferenceToJSON)),
        'kind': value['kind'],
        'metadata': K8sIoApimachineryPkgApisMetaV1ListMetaToJSON(value['metadata']),
    };
}
//# sourceMappingURL=V1beta1VirtualMachinePreferenceList.js.map