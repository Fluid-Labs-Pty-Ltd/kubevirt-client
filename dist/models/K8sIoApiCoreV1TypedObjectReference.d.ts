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
 *
 * @export
 * @interface K8sIoApiCoreV1TypedObjectReference
 */
export interface K8sIoApiCoreV1TypedObjectReference {
    /**
     * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
     * @type {string}
     * @memberof K8sIoApiCoreV1TypedObjectReference
     */
    apiGroup?: string;
    /**
     * Kind is the type of resource being referenced
     * @type {string}
     * @memberof K8sIoApiCoreV1TypedObjectReference
     */
    kind: string;
    /**
     * Name is the name of resource being referenced
     * @type {string}
     * @memberof K8sIoApiCoreV1TypedObjectReference
     */
    name: string;
    /**
     * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
     * @type {string}
     * @memberof K8sIoApiCoreV1TypedObjectReference
     */
    namespace?: string;
}
/**
 * Check if a given object implements the K8sIoApiCoreV1TypedObjectReference interface.
 */
export declare function instanceOfK8sIoApiCoreV1TypedObjectReference(value: object): value is K8sIoApiCoreV1TypedObjectReference;
export declare function K8sIoApiCoreV1TypedObjectReferenceFromJSON(json: any): K8sIoApiCoreV1TypedObjectReference;
export declare function K8sIoApiCoreV1TypedObjectReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): K8sIoApiCoreV1TypedObjectReference;
export declare function K8sIoApiCoreV1TypedObjectReferenceToJSON(json: any): K8sIoApiCoreV1TypedObjectReference;
export declare function K8sIoApiCoreV1TypedObjectReferenceToJSONTyped(value?: K8sIoApiCoreV1TypedObjectReference | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=K8sIoApiCoreV1TypedObjectReference.d.ts.map