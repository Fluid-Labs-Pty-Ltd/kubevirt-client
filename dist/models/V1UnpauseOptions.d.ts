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
 * UnpauseOptions may be provided on unpause request.
 * @export
 * @interface V1UnpauseOptions
 */
export interface V1UnpauseOptions {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1UnpauseOptions
     */
    apiVersion?: string;
    /**
     * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @type {Array<string>}
     * @memberof V1UnpauseOptions
     */
    dryRun?: Array<string>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1UnpauseOptions
     */
    kind?: string;
}
/**
 * Check if a given object implements the V1UnpauseOptions interface.
 */
export declare function instanceOfV1UnpauseOptions(value: object): value is V1UnpauseOptions;
export declare function V1UnpauseOptionsFromJSON(json: any): V1UnpauseOptions;
export declare function V1UnpauseOptionsFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1UnpauseOptions;
export declare function V1UnpauseOptionsToJSON(json: any): V1UnpauseOptions;
export declare function V1UnpauseOptionsToJSONTyped(value?: V1UnpauseOptions | null, _ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1UnpauseOptions.d.ts.map