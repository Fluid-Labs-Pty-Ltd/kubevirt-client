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
 * SEVMeasurementInfo contains information about the guest launch measurement.
 * @export
 * @interface V1SEVMeasurementInfo
 */
export interface V1SEVMeasurementInfo {
    /**
     * API major version of the SEV host.
     * @type {number}
     * @memberof V1SEVMeasurementInfo
     */
    apiMajor?: number;
    /**
     * API minor version of the SEV host.
     * @type {number}
     * @memberof V1SEVMeasurementInfo
     */
    apiMinor?: number;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1SEVMeasurementInfo
     */
    apiVersion?: string;
    /**
     * Build ID of the SEV host.
     * @type {number}
     * @memberof V1SEVMeasurementInfo
     */
    buildID?: number;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1SEVMeasurementInfo
     */
    kind?: string;
    /**
     * SHA256 of the loader binary
     * @type {string}
     * @memberof V1SEVMeasurementInfo
     */
    loaderSHA?: string;
    /**
     * Base64 encoded launch measurement of the SEV guest.
     * @type {string}
     * @memberof V1SEVMeasurementInfo
     */
    measurement?: string;
    /**
     * Policy of the SEV guest.
     * @type {number}
     * @memberof V1SEVMeasurementInfo
     */
    policy?: number;
}
/**
 * Check if a given object implements the V1SEVMeasurementInfo interface.
 */
export declare function instanceOfV1SEVMeasurementInfo(value: object): value is V1SEVMeasurementInfo;
export declare function V1SEVMeasurementInfoFromJSON(json: any): V1SEVMeasurementInfo;
export declare function V1SEVMeasurementInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1SEVMeasurementInfo;
export declare function V1SEVMeasurementInfoToJSON(json: any): V1SEVMeasurementInfo;
export declare function V1SEVMeasurementInfoToJSONTyped(value?: V1SEVMeasurementInfo | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1SEVMeasurementInfo.d.ts.map