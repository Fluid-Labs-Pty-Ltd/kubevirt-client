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
import { V1VirtualMachineInstanceMigrationStatusFromJSON, V1VirtualMachineInstanceMigrationStatusToJSON, } from './V1VirtualMachineInstanceMigrationStatus.js';
import { V1VirtualMachineInstanceMigrationSpecFromJSON, V1VirtualMachineInstanceMigrationSpecToJSON, } from './V1VirtualMachineInstanceMigrationSpec.js';
import { K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON, K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON, } from './K8sIoApimachineryPkgApisMetaV1ObjectMeta.js';
/**
 * Check if a given object implements the V1VirtualMachineInstanceMigration interface.
 */
export function instanceOfV1VirtualMachineInstanceMigration(value) {
    if (!('spec' in value) || value['spec'] === undefined)
        return false;
    return true;
}
export function V1VirtualMachineInstanceMigrationFromJSON(json) {
    return V1VirtualMachineInstanceMigrationFromJSONTyped(json, false);
}
export function V1VirtualMachineInstanceMigrationFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': V1VirtualMachineInstanceMigrationSpecFromJSON(json['spec']),
        'status': json['status'] == null ? undefined : V1VirtualMachineInstanceMigrationStatusFromJSON(json['status']),
    };
}
export function V1VirtualMachineInstanceMigrationToJSON(json) {
    return V1VirtualMachineInstanceMigrationToJSONTyped(json, false);
}
export function V1VirtualMachineInstanceMigrationToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'apiVersion': value['apiVersion'],
        'kind': value['kind'],
        'metadata': K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON(value['metadata']),
        'spec': V1VirtualMachineInstanceMigrationSpecToJSON(value['spec']),
        'status': V1VirtualMachineInstanceMigrationStatusToJSON(value['status']),
    };
}
//# sourceMappingURL=V1VirtualMachineInstanceMigration.js.map