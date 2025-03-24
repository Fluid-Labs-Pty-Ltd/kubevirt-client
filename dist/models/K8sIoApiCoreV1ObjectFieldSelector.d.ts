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
 * ObjectFieldSelector selects an APIVersioned field of an object.
 * @export
 * @interface K8sIoApiCoreV1ObjectFieldSelector
 */
export interface K8sIoApiCoreV1ObjectFieldSelector {
    /**
     * Version of the schema the FieldPath is written in terms of, defaults to "v1".
     * @type {string}
     * @memberof K8sIoApiCoreV1ObjectFieldSelector
     */
    apiVersion?: string;
    /**
     * Path of the field to select in the specified API version.
     * @type {string}
     * @memberof K8sIoApiCoreV1ObjectFieldSelector
     */
    fieldPath: string;
}
/**
 * Check if a given object implements the K8sIoApiCoreV1ObjectFieldSelector interface.
 */
export declare function instanceOfK8sIoApiCoreV1ObjectFieldSelector(value: object): value is K8sIoApiCoreV1ObjectFieldSelector;
export declare function K8sIoApiCoreV1ObjectFieldSelectorFromJSON(json: any): K8sIoApiCoreV1ObjectFieldSelector;
export declare function K8sIoApiCoreV1ObjectFieldSelectorFromJSONTyped(json: any, ignoreDiscriminator: boolean): K8sIoApiCoreV1ObjectFieldSelector;
export declare function K8sIoApiCoreV1ObjectFieldSelectorToJSON(json: any): K8sIoApiCoreV1ObjectFieldSelector;
export declare function K8sIoApiCoreV1ObjectFieldSelectorToJSONTyped(value?: K8sIoApiCoreV1ObjectFieldSelector | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=K8sIoApiCoreV1ObjectFieldSelector.d.ts.map