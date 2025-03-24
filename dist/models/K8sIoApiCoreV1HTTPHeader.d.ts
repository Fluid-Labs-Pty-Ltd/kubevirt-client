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
 * HTTPHeader describes a custom header to be used in HTTP probes
 * @export
 * @interface K8sIoApiCoreV1HTTPHeader
 */
export interface K8sIoApiCoreV1HTTPHeader {
    /**
     * The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header.
     * @type {string}
     * @memberof K8sIoApiCoreV1HTTPHeader
     */
    name: string;
    /**
     * The header field value
     * @type {string}
     * @memberof K8sIoApiCoreV1HTTPHeader
     */
    value: string;
}
/**
 * Check if a given object implements the K8sIoApiCoreV1HTTPHeader interface.
 */
export declare function instanceOfK8sIoApiCoreV1HTTPHeader(value: object): value is K8sIoApiCoreV1HTTPHeader;
export declare function K8sIoApiCoreV1HTTPHeaderFromJSON(json: any): K8sIoApiCoreV1HTTPHeader;
export declare function K8sIoApiCoreV1HTTPHeaderFromJSONTyped(json: any, ignoreDiscriminator: boolean): K8sIoApiCoreV1HTTPHeader;
export declare function K8sIoApiCoreV1HTTPHeaderToJSON(json: any): K8sIoApiCoreV1HTTPHeader;
export declare function K8sIoApiCoreV1HTTPHeaderToJSONTyped(value?: K8sIoApiCoreV1HTTPHeader | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=K8sIoApiCoreV1HTTPHeader.d.ts.map