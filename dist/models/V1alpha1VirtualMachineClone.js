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
import { V1alpha1VirtualMachineCloneSpecFromJSON, V1alpha1VirtualMachineCloneSpecToJSON, } from './V1alpha1VirtualMachineCloneSpec.js';
import { V1alpha1VirtualMachineCloneStatusFromJSON, V1alpha1VirtualMachineCloneStatusToJSON, } from './V1alpha1VirtualMachineCloneStatus.js';
import { K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON, K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON, } from './K8sIoApimachineryPkgApisMetaV1ObjectMeta.js';
/**
 * Check if a given object implements the V1alpha1VirtualMachineClone interface.
 */
export function instanceOfV1alpha1VirtualMachineClone(value) {
    if (!('spec' in value) || value['spec'] === undefined)
        return false;
    return true;
}
export function V1alpha1VirtualMachineCloneFromJSON(json) {
    return V1alpha1VirtualMachineCloneFromJSONTyped(json, false);
}
export function V1alpha1VirtualMachineCloneFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': V1alpha1VirtualMachineCloneSpecFromJSON(json['spec']),
        'status': json['status'] == null ? undefined : V1alpha1VirtualMachineCloneStatusFromJSON(json['status']),
    };
}
export function V1alpha1VirtualMachineCloneToJSON(json) {
    return V1alpha1VirtualMachineCloneToJSONTyped(json, false);
}
export function V1alpha1VirtualMachineCloneToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
        'metadata': K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON(value['metadata']),
        'spec': V1alpha1VirtualMachineCloneSpecToJSON(value['spec']),
        'status': V1alpha1VirtualMachineCloneStatusToJSON(value['status']),
    };
}
//# sourceMappingURL=V1alpha1VirtualMachineClone.js.map