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
import { K8sIoApiCoreV1NodeSelectorRequirementFromJSON, K8sIoApiCoreV1NodeSelectorRequirementToJSON, } from './K8sIoApiCoreV1NodeSelectorRequirement.js';
/**
 * Check if a given object implements the K8sIoApiCoreV1NodeSelectorTerm interface.
 */
export function instanceOfK8sIoApiCoreV1NodeSelectorTerm(value) {
    return true;
}
export function K8sIoApiCoreV1NodeSelectorTermFromJSON(json) {
    return K8sIoApiCoreV1NodeSelectorTermFromJSONTyped(json, false);
}
export function K8sIoApiCoreV1NodeSelectorTermFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'matchExpressions': json['matchExpressions'] == null ? undefined : (json['matchExpressions'].map(K8sIoApiCoreV1NodeSelectorRequirementFromJSON)),
        'matchFields': json['matchFields'] == null ? undefined : (json['matchFields'].map(K8sIoApiCoreV1NodeSelectorRequirementFromJSON)),
    };
}
export function K8sIoApiCoreV1NodeSelectorTermToJSON(json) {
    return K8sIoApiCoreV1NodeSelectorTermToJSONTyped(json, false);
}
export function K8sIoApiCoreV1NodeSelectorTermToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'matchExpressions': value['matchExpressions'] == null ? undefined : (value['matchExpressions'].map(K8sIoApiCoreV1NodeSelectorRequirementToJSON)),
        'matchFields': value['matchFields'] == null ? undefined : (value['matchFields'].map(K8sIoApiCoreV1NodeSelectorRequirementToJSON)),
    };
}
//# sourceMappingURL=K8sIoApiCoreV1NodeSelectorTerm.js.map