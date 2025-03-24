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
import { K8sIoApiCoreV1PodAffinityTermFromJSON, K8sIoApiCoreV1PodAffinityTermToJSON, } from './K8sIoApiCoreV1PodAffinityTerm.js';
/**
 * Check if a given object implements the K8sIoApiCoreV1WeightedPodAffinityTerm interface.
 */
export function instanceOfK8sIoApiCoreV1WeightedPodAffinityTerm(value) {
    if (!('podAffinityTerm' in value) || value['podAffinityTerm'] === undefined)
        return false;
    if (!('weight' in value) || value['weight'] === undefined)
        return false;
    return true;
}
export function K8sIoApiCoreV1WeightedPodAffinityTermFromJSON(json) {
    return K8sIoApiCoreV1WeightedPodAffinityTermFromJSONTyped(json, false);
}
export function K8sIoApiCoreV1WeightedPodAffinityTermFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'podAffinityTerm': K8sIoApiCoreV1PodAffinityTermFromJSON(json['podAffinityTerm']),
        'weight': json['weight'],
    };
}
export function K8sIoApiCoreV1WeightedPodAffinityTermToJSON(json) {
    return K8sIoApiCoreV1WeightedPodAffinityTermToJSONTyped(json, false);
}
export function K8sIoApiCoreV1WeightedPodAffinityTermToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'podAffinityTerm': K8sIoApiCoreV1PodAffinityTermToJSON(value['podAffinityTerm']),
        'weight': value['weight'],
    };
}
//# sourceMappingURL=K8sIoApiCoreV1WeightedPodAffinityTerm.js.map