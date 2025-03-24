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
/**
 * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
 * @export
 * @interface K8sIoApiCoreV1LocalObjectReference
 */
export interface K8sIoApiCoreV1LocalObjectReference {
    /**
     * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * @type {string}
     * @memberof K8sIoApiCoreV1LocalObjectReference
     */
    name?: string;
}
/**
 * Check if a given object implements the K8sIoApiCoreV1LocalObjectReference interface.
 */
export declare function instanceOfK8sIoApiCoreV1LocalObjectReference(value: object): value is K8sIoApiCoreV1LocalObjectReference;
export declare function K8sIoApiCoreV1LocalObjectReferenceFromJSON(json: any): K8sIoApiCoreV1LocalObjectReference;
export declare function K8sIoApiCoreV1LocalObjectReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): K8sIoApiCoreV1LocalObjectReference;
export declare function K8sIoApiCoreV1LocalObjectReferenceToJSON(json: any): K8sIoApiCoreV1LocalObjectReference;
export declare function K8sIoApiCoreV1LocalObjectReferenceToJSONTyped(value?: K8sIoApiCoreV1LocalObjectReference | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=K8sIoApiCoreV1LocalObjectReference.d.ts.map