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
import { V1CustomizeComponentsPatchFromJSON, V1CustomizeComponentsPatchToJSON, } from './V1CustomizeComponentsPatch.js';
import { V1FlagsFromJSON, V1FlagsToJSON, } from './V1Flags.js';
/**
 * Check if a given object implements the V1CustomizeComponents interface.
 */
export function instanceOfV1CustomizeComponents(value) {
    return true;
}
export function V1CustomizeComponentsFromJSON(json) {
    return V1CustomizeComponentsFromJSONTyped(json, false);
}
export function V1CustomizeComponentsFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'flags': json['flags'] == null ? undefined : V1FlagsFromJSON(json['flags']),
        'patches': json['patches'] == null ? undefined : (json['patches'].map(V1CustomizeComponentsPatchFromJSON)),
    };
}
export function V1CustomizeComponentsToJSON(json) {
    return V1CustomizeComponentsToJSONTyped(json, false);
}
export function V1CustomizeComponentsToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'flags': V1FlagsToJSON(value['flags']),
        'patches': value['patches'] == null ? undefined : (value['patches'].map(V1CustomizeComponentsPatchToJSON)),
    };
}
//# sourceMappingURL=V1CustomizeComponents.js.map