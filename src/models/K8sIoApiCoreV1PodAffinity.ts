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
import type { K8sIoApiCoreV1PodAffinityTerm } from './K8sIoApiCoreV1PodAffinityTerm';
import {
    K8sIoApiCoreV1PodAffinityTermFromJSON,
    K8sIoApiCoreV1PodAffinityTermFromJSONTyped,
    K8sIoApiCoreV1PodAffinityTermToJSON,
    K8sIoApiCoreV1PodAffinityTermToJSONTyped,
} from './K8sIoApiCoreV1PodAffinityTerm';
import type { K8sIoApiCoreV1WeightedPodAffinityTerm } from './K8sIoApiCoreV1WeightedPodAffinityTerm';
import {
    K8sIoApiCoreV1WeightedPodAffinityTermFromJSON,
    K8sIoApiCoreV1WeightedPodAffinityTermFromJSONTyped,
    K8sIoApiCoreV1WeightedPodAffinityTermToJSON,
    K8sIoApiCoreV1WeightedPodAffinityTermToJSONTyped,
} from './K8sIoApiCoreV1WeightedPodAffinityTerm';

/**
 * Pod affinity is a group of inter pod affinity scheduling rules.
 * @export
 * @interface K8sIoApiCoreV1PodAffinity
 */
export interface K8sIoApiCoreV1PodAffinity {
    /**
     * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
     * @type {Array<K8sIoApiCoreV1WeightedPodAffinityTerm>}
     * @memberof K8sIoApiCoreV1PodAffinity
     */
    preferredDuringSchedulingIgnoredDuringExecution?: Array<K8sIoApiCoreV1WeightedPodAffinityTerm>;
    /**
     * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
     * @type {Array<K8sIoApiCoreV1PodAffinityTerm>}
     * @memberof K8sIoApiCoreV1PodAffinity
     */
    requiredDuringSchedulingIgnoredDuringExecution?: Array<K8sIoApiCoreV1PodAffinityTerm>;
}

/**
 * Check if a given object implements the K8sIoApiCoreV1PodAffinity interface.
 */
export function instanceOfK8sIoApiCoreV1PodAffinity(value: object): value is K8sIoApiCoreV1PodAffinity {
    return true;
}

export function K8sIoApiCoreV1PodAffinityFromJSON(json: any): K8sIoApiCoreV1PodAffinity {
    return K8sIoApiCoreV1PodAffinityFromJSONTyped(json, false);
}

export function K8sIoApiCoreV1PodAffinityFromJSONTyped(json: any, _ignoreDiscriminator: boolean): K8sIoApiCoreV1PodAffinity {
    if (json == null) {
        return json;
    }
    return {
        
        'preferredDuringSchedulingIgnoredDuringExecution': json['preferredDuringSchedulingIgnoredDuringExecution'] == null ? undefined : ((json['preferredDuringSchedulingIgnoredDuringExecution'] as Array<any>).map(K8sIoApiCoreV1WeightedPodAffinityTermFromJSON)),
        'requiredDuringSchedulingIgnoredDuringExecution': json['requiredDuringSchedulingIgnoredDuringExecution'] == null ? undefined : ((json['requiredDuringSchedulingIgnoredDuringExecution'] as Array<any>).map(K8sIoApiCoreV1PodAffinityTermFromJSON)),
    };
}

export function K8sIoApiCoreV1PodAffinityToJSON(json: any): K8sIoApiCoreV1PodAffinity {
    return K8sIoApiCoreV1PodAffinityToJSONTyped(json, false);
}

export function K8sIoApiCoreV1PodAffinityToJSONTyped(value?: K8sIoApiCoreV1PodAffinity | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'preferredDuringSchedulingIgnoredDuringExecution': value['preferredDuringSchedulingIgnoredDuringExecution'] == null ? undefined : ((value['preferredDuringSchedulingIgnoredDuringExecution'] as Array<any>).map(K8sIoApiCoreV1WeightedPodAffinityTermToJSON)),
        'requiredDuringSchedulingIgnoredDuringExecution': value['requiredDuringSchedulingIgnoredDuringExecution'] == null ? undefined : ((value['requiredDuringSchedulingIgnoredDuringExecution'] as Array<any>).map(K8sIoApiCoreV1PodAffinityTermToJSON)),
    };
}

