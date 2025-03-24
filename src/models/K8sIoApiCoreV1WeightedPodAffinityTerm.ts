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

import { mapValues } from '../runtime.js';
import type { K8sIoApiCoreV1PodAffinityTerm } from './K8sIoApiCoreV1PodAffinityTerm.js';
import {
    K8sIoApiCoreV1PodAffinityTermFromJSON,
    K8sIoApiCoreV1PodAffinityTermFromJSONTyped,
    K8sIoApiCoreV1PodAffinityTermToJSON,
    K8sIoApiCoreV1PodAffinityTermToJSONTyped,
} from './K8sIoApiCoreV1PodAffinityTerm.js';

/**
 * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
 * @export
 * @interface K8sIoApiCoreV1WeightedPodAffinityTerm
 */
export interface K8sIoApiCoreV1WeightedPodAffinityTerm {
    /**
     * 
     * @type {K8sIoApiCoreV1PodAffinityTerm}
     * @memberof K8sIoApiCoreV1WeightedPodAffinityTerm
     */
    podAffinityTerm: K8sIoApiCoreV1PodAffinityTerm;
    /**
     * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
     * @type {number}
     * @memberof K8sIoApiCoreV1WeightedPodAffinityTerm
     */
    weight: number;
}

/**
 * Check if a given object implements the K8sIoApiCoreV1WeightedPodAffinityTerm interface.
 */
export function instanceOfK8sIoApiCoreV1WeightedPodAffinityTerm(value: object): value is K8sIoApiCoreV1WeightedPodAffinityTerm {
    if (!('podAffinityTerm' in value) || value['podAffinityTerm'] === undefined) return false;
    if (!('weight' in value) || value['weight'] === undefined) return false;
    return true;
}

export function K8sIoApiCoreV1WeightedPodAffinityTermFromJSON(json: any): K8sIoApiCoreV1WeightedPodAffinityTerm {
    return K8sIoApiCoreV1WeightedPodAffinityTermFromJSONTyped(json, false);
}

export function K8sIoApiCoreV1WeightedPodAffinityTermFromJSONTyped(json: any, ignoreDiscriminator: boolean): K8sIoApiCoreV1WeightedPodAffinityTerm {
    if (json == null) {
        return json;
    }
    return {
        
        'podAffinityTerm': K8sIoApiCoreV1PodAffinityTermFromJSON(json['podAffinityTerm']),
        'weight': json['weight'],
    };
}

export function K8sIoApiCoreV1WeightedPodAffinityTermToJSON(json: any): K8sIoApiCoreV1WeightedPodAffinityTerm {
    return K8sIoApiCoreV1WeightedPodAffinityTermToJSONTyped(json, false);
}

export function K8sIoApiCoreV1WeightedPodAffinityTermToJSONTyped(value?: K8sIoApiCoreV1WeightedPodAffinityTerm | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'podAffinityTerm': K8sIoApiCoreV1PodAffinityTermToJSON(value['podAffinityTerm']),
        'weight': value['weight'],
    };
}

