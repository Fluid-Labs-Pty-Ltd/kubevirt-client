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
import { V1VirtualMachineInstanceGuestOSUserFromJSON, V1VirtualMachineInstanceGuestOSUserToJSON, } from './V1VirtualMachineInstanceGuestOSUser.js';
/**
 * Check if a given object implements the V1VirtualMachineInstanceGuestOSUserList interface.
 */
export function instanceOfV1VirtualMachineInstanceGuestOSUserList(value) {
    if (!('items' in value) || value['items'] === undefined)
        return false;
    return true;
}
export function V1VirtualMachineInstanceGuestOSUserListFromJSON(json) {
    return V1VirtualMachineInstanceGuestOSUserListFromJSONTyped(json, false);
}
export function V1VirtualMachineInstanceGuestOSUserListFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'items': (json['items'].map(V1VirtualMachineInstanceGuestOSUserFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'metadata': json['metadata'] == null ? undefined : K8sIoApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}
export function V1VirtualMachineInstanceGuestOSUserListToJSON(json) {
    return V1VirtualMachineInstanceGuestOSUserListToJSONTyped(json, false);
}
export function V1VirtualMachineInstanceGuestOSUserListToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'apiVersion': value['apiVersion'],
        'items': (value['items'].map(V1VirtualMachineInstanceGuestOSUserToJSON)),
        'kind': value['kind'],
        'metadata': K8sIoApimachineryPkgApisMetaV1ListMetaToJSON(value['metadata']),
    };
}
//# sourceMappingURL=V1VirtualMachineInstanceGuestOSUserList.js.map