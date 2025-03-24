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
import { V1VGPUDisplayOptionsFromJSON, V1VGPUDisplayOptionsToJSON, } from './V1VGPUDisplayOptions.js';
/**
 * Check if a given object implements the V1VGPUOptions interface.
 */
export function instanceOfV1VGPUOptions(value) {
    return true;
}
export function V1VGPUOptionsFromJSON(json) {
    return V1VGPUOptionsFromJSONTyped(json, false);
}
export function V1VGPUOptionsFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'display': json['display'] == null ? undefined : V1VGPUDisplayOptionsFromJSON(json['display']),
    };
}
export function V1VGPUOptionsToJSON(json) {
    return V1VGPUOptionsToJSONTyped(json, false);
}
export function V1VGPUOptionsToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'display': V1VGPUDisplayOptionsToJSON(value['display']),
    };
}
//# sourceMappingURL=V1VGPUOptions.js.map