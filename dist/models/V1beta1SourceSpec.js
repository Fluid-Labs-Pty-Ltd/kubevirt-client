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
import { V1beta1VirtualMachineFromJSON, V1beta1VirtualMachineToJSON, } from './V1beta1VirtualMachine.js';
/**
 * Check if a given object implements the V1beta1SourceSpec interface.
 */
export function instanceOfV1beta1SourceSpec(value) {
    return true;
}
export function V1beta1SourceSpecFromJSON(json) {
    return V1beta1SourceSpecFromJSONTyped(json, false);
}
export function V1beta1SourceSpecFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'virtualMachine': json['virtualMachine'] == null ? undefined : V1beta1VirtualMachineFromJSON(json['virtualMachine']),
    };
}
export function V1beta1SourceSpecToJSON(json) {
    return V1beta1SourceSpecToJSONTyped(json, false);
}
export function V1beta1SourceSpecToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'virtualMachine': V1beta1VirtualMachineToJSON(value['virtualMachine']),
    };
}
//# sourceMappingURL=V1beta1SourceSpec.js.map