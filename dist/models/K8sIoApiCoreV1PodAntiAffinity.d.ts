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
import type { K8sIoApiCoreV1PodAffinityTerm } from './K8sIoApiCoreV1PodAffinityTerm.js';
import type { K8sIoApiCoreV1WeightedPodAffinityTerm } from './K8sIoApiCoreV1WeightedPodAffinityTerm.js';
/**
 * Pod anti affinity is a group of inter pod anti affinity scheduling rules.
 * @export
 * @interface K8sIoApiCoreV1PodAntiAffinity
 */
export interface K8sIoApiCoreV1PodAntiAffinity {
    /**
     * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
     * @type {Array<K8sIoApiCoreV1WeightedPodAffinityTerm>}
     * @memberof K8sIoApiCoreV1PodAntiAffinity
     */
    preferredDuringSchedulingIgnoredDuringExecution?: Array<K8sIoApiCoreV1WeightedPodAffinityTerm>;
    /**
     * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
     * @type {Array<K8sIoApiCoreV1PodAffinityTerm>}
     * @memberof K8sIoApiCoreV1PodAntiAffinity
     */
    requiredDuringSchedulingIgnoredDuringExecution?: Array<K8sIoApiCoreV1PodAffinityTerm>;
}
/**
 * Check if a given object implements the K8sIoApiCoreV1PodAntiAffinity interface.
 */
export declare function instanceOfK8sIoApiCoreV1PodAntiAffinity(value: object): value is K8sIoApiCoreV1PodAntiAffinity;
export declare function K8sIoApiCoreV1PodAntiAffinityFromJSON(json: any): K8sIoApiCoreV1PodAntiAffinity;
export declare function K8sIoApiCoreV1PodAntiAffinityFromJSONTyped(json: any, _ignoreDiscriminator: boolean): K8sIoApiCoreV1PodAntiAffinity;
export declare function K8sIoApiCoreV1PodAntiAffinityToJSON(json: any): K8sIoApiCoreV1PodAntiAffinity;
export declare function K8sIoApiCoreV1PodAntiAffinityToJSONTyped(value?: K8sIoApiCoreV1PodAntiAffinity | null, _ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=K8sIoApiCoreV1PodAntiAffinity.d.ts.map