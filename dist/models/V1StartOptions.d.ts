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
 * StartOptions may be provided on start request.
 * @export
 * @interface V1StartOptions
 */
export interface V1StartOptions {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1StartOptions
     */
    apiVersion?: string;
    /**
     * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @type {Array<string>}
     * @memberof V1StartOptions
     */
    dryRun?: Array<string>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1StartOptions
     */
    kind?: string;
    /**
     * Indicates that VM will be started in paused state.
     * @type {boolean}
     * @memberof V1StartOptions
     */
    paused?: boolean;
}
/**
 * Check if a given object implements the V1StartOptions interface.
 */
export declare function instanceOfV1StartOptions(value: object): value is V1StartOptions;
export declare function V1StartOptionsFromJSON(json: any): V1StartOptions;
export declare function V1StartOptionsFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1StartOptions;
export declare function V1StartOptionsToJSON(json: any): V1StartOptions;
export declare function V1StartOptionsToJSONTyped(value?: V1StartOptions | null, _ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1StartOptions.d.ts.map