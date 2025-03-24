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
import { V1beta1VirtualMachineSnapshotContentSpecFromJSON, V1beta1VirtualMachineSnapshotContentSpecToJSON, } from './V1beta1VirtualMachineSnapshotContentSpec.js';
import { V1beta1VirtualMachineSnapshotContentStatusFromJSON, V1beta1VirtualMachineSnapshotContentStatusToJSON, } from './V1beta1VirtualMachineSnapshotContentStatus.js';
import { K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON, K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON, } from './K8sIoApimachineryPkgApisMetaV1ObjectMeta.js';
/**
 * Check if a given object implements the V1beta1VirtualMachineSnapshotContent interface.
 */
export function instanceOfV1beta1VirtualMachineSnapshotContent(value) {
    if (!('spec' in value) || value['spec'] === undefined)
        return false;
    return true;
}
export function V1beta1VirtualMachineSnapshotContentFromJSON(json) {
    return V1beta1VirtualMachineSnapshotContentFromJSONTyped(json, false);
}
export function V1beta1VirtualMachineSnapshotContentFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': V1beta1VirtualMachineSnapshotContentSpecFromJSON(json['spec']),
        'status': json['status'] == null ? undefined : V1beta1VirtualMachineSnapshotContentStatusFromJSON(json['status']),
    };
}
export function V1beta1VirtualMachineSnapshotContentToJSON(json) {
    return V1beta1VirtualMachineSnapshotContentToJSONTyped(json, false);
}
export function V1beta1VirtualMachineSnapshotContentToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
        'metadata': K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON(value['metadata']),
        'spec': V1beta1VirtualMachineSnapshotContentSpecToJSON(value['spec']),
        'status': V1beta1VirtualMachineSnapshotContentStatusToJSON(value['status']),
    };
}
//# sourceMappingURL=V1beta1VirtualMachineSnapshotContent.js.map