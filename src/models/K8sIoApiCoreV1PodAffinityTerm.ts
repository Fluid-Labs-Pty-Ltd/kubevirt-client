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

import { mapValues } from '../runtime';
import type { K8sIoApimachineryPkgApisMetaV1LabelSelector } from './K8sIoApimachineryPkgApisMetaV1LabelSelector';
import {
    K8sIoApimachineryPkgApisMetaV1LabelSelectorFromJSON,
    K8sIoApimachineryPkgApisMetaV1LabelSelectorFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1LabelSelectorToJSON,
    K8sIoApimachineryPkgApisMetaV1LabelSelectorToJSONTyped,
} from './K8sIoApimachineryPkgApisMetaV1LabelSelector';

/**
 * Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running
 * @export
 * @interface K8sIoApiCoreV1PodAffinityTerm
 */
export interface K8sIoApiCoreV1PodAffinityTerm {
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1LabelSelector}
     * @memberof K8sIoApiCoreV1PodAffinityTerm
     */
    labelSelector?: K8sIoApimachineryPkgApisMetaV1LabelSelector;
    /**
     * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both matchLabelKeys and labelSelector. Also, matchLabelKeys cannot be set when labelSelector isn't set. This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
     * @type {Array<string>}
     * @memberof K8sIoApiCoreV1PodAffinityTerm
     */
    matchLabelKeys?: Array<string>;
    /**
     * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both mismatchLabelKeys and labelSelector. Also, mismatchLabelKeys cannot be set when labelSelector isn't set. This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
     * @type {Array<string>}
     * @memberof K8sIoApiCoreV1PodAffinityTerm
     */
    mismatchLabelKeys?: Array<string>;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1LabelSelector}
     * @memberof K8sIoApiCoreV1PodAffinityTerm
     */
    namespaceSelector?: K8sIoApimachineryPkgApisMetaV1LabelSelector;
    /**
     * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
     * @type {Array<string>}
     * @memberof K8sIoApiCoreV1PodAffinityTerm
     */
    namespaces?: Array<string>;
    /**
     * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
     * @type {string}
     * @memberof K8sIoApiCoreV1PodAffinityTerm
     */
    topologyKey: string;
}

/**
 * Check if a given object implements the K8sIoApiCoreV1PodAffinityTerm interface.
 */
export function instanceOfK8sIoApiCoreV1PodAffinityTerm(value: object): value is K8sIoApiCoreV1PodAffinityTerm {
    if (!('topologyKey' in value) || value['topologyKey'] === undefined) return false;
    return true;
}

export function K8sIoApiCoreV1PodAffinityTermFromJSON(json: any): K8sIoApiCoreV1PodAffinityTerm {
    return K8sIoApiCoreV1PodAffinityTermFromJSONTyped(json, false);
}

export function K8sIoApiCoreV1PodAffinityTermFromJSONTyped(json: any, ignoreDiscriminator: boolean): K8sIoApiCoreV1PodAffinityTerm {
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

export function K8sIoApiCoreV1PodAffinityTermToJSON(json: any): K8sIoApiCoreV1PodAffinityTerm {
    return K8sIoApiCoreV1PodAffinityTermToJSONTyped(json, false);
}

export function K8sIoApiCoreV1PodAffinityTermToJSONTyped(value?: K8sIoApiCoreV1PodAffinityTerm | null, ignoreDiscriminator: boolean = false): any {
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

