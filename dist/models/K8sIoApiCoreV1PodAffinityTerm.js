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
import { K8sIoApimachineryPkgApisMetaV1LabelSelectorFromJSON, K8sIoApimachineryPkgApisMetaV1LabelSelectorToJSON, } from './K8sIoApimachineryPkgApisMetaV1LabelSelector.js';
/**
 * Check if a given object implements the K8sIoApiCoreV1PodAffinityTerm interface.
 */
export function instanceOfK8sIoApiCoreV1PodAffinityTerm(value) {
    if (!('topologyKey' in value) || value['topologyKey'] === undefined)
        return false;
    return true;
}
export function K8sIoApiCoreV1PodAffinityTermFromJSON(json) {
    return K8sIoApiCoreV1PodAffinityTermFromJSONTyped(json, false);
}
export function K8sIoApiCoreV1PodAffinityTermFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'labelSelector': json['labelSelector'] == null ? undefined : K8sIoApimachineryPkgApisMetaV1LabelSelectorFromJSON(json['labelSelector']),
        'matchLabelKeys': json['matchLabelKeys'] == null ? undefined : json['matchLabelKeys'],
        'mismatchLabelKeys': json['mismatchLabelKeys'] == null ? undefined : json['mismatchLabelKeys'],
        'namespaceSelector': json['namespaceSelector'] == null ? undefined : K8sIoApimachineryPkgApisMetaV1LabelSelectorFromJSON(json['namespaceSelector']),
        'namespaces': json['namespaces'] == null ? undefined : json['namespaces'],
        'topologyKey': json['topologyKey'],
    };
}
export function K8sIoApiCoreV1PodAffinityTermToJSON(json) {
    return K8sIoApiCoreV1PodAffinityTermToJSONTyped(json, false);
}
export function K8sIoApiCoreV1PodAffinityTermToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'labelSelector': K8sIoApimachineryPkgApisMetaV1LabelSelectorToJSON(value['labelSelector']),
        'matchLabelKeys': value['matchLabelKeys'],
        'mismatchLabelKeys': value['mismatchLabelKeys'],
        'namespaceSelector': K8sIoApimachineryPkgApisMetaV1LabelSelectorToJSON(value['namespaceSelector']),
        'namespaces': value['namespaces'],
        'topologyKey': value['topologyKey'],
    };
}
//# sourceMappingURL=K8sIoApiCoreV1PodAffinityTerm.js.map