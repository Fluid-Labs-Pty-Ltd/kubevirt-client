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
 * ResourceRequirementsWithoutClaims describes the compute resource requirements. This struct was taken from the k8s.ResourceRequirements and cleaned up the `Claims` field.
 * @export
 * @interface V1ResourceRequirementsWithoutClaims
 */
export interface V1ResourceRequirementsWithoutClaims {
    /**
     * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
     * @type {{ [key: string]: string; }}
     * @memberof V1ResourceRequirementsWithoutClaims
     */
    limits?: {
        [key: string]: string;
    };
    /**
     * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
     * @type {{ [key: string]: string; }}
     * @memberof V1ResourceRequirementsWithoutClaims
     */
    requests?: {
        [key: string]: string;
    };
}
/**
 * Check if a given object implements the V1ResourceRequirementsWithoutClaims interface.
 */
export declare function instanceOfV1ResourceRequirementsWithoutClaims(value: object): value is V1ResourceRequirementsWithoutClaims;
export declare function V1ResourceRequirementsWithoutClaimsFromJSON(json: any): V1ResourceRequirementsWithoutClaims;
export declare function V1ResourceRequirementsWithoutClaimsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ResourceRequirementsWithoutClaims;
export declare function V1ResourceRequirementsWithoutClaimsToJSON(json: any): V1ResourceRequirementsWithoutClaims;
export declare function V1ResourceRequirementsWithoutClaimsToJSONTyped(value?: V1ResourceRequirementsWithoutClaims | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1ResourceRequirementsWithoutClaims.d.ts.map