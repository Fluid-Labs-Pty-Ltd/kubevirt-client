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
 * @interface V1FeatureAPIC
 */
export interface V1FeatureAPIC {
    /**
     * Enabled determines if the feature should be enabled or disabled on the guest. Defaults to true.
     * @type {boolean}
     * @memberof V1FeatureAPIC
     */
    enabled?: boolean;
    /**
     * EndOfInterrupt enables the end of interrupt notification in the guest. Defaults to false.
     * @type {boolean}
     * @memberof V1FeatureAPIC
     */
    endOfInterrupt?: boolean;
}
/**
 * Check if a given object implements the V1FeatureAPIC interface.
 */
export declare function instanceOfV1FeatureAPIC(value: object): value is V1FeatureAPIC;
export declare function V1FeatureAPICFromJSON(json: any): V1FeatureAPIC;
export declare function V1FeatureAPICFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1FeatureAPIC;
export declare function V1FeatureAPICToJSON(json: any): V1FeatureAPIC;
export declare function V1FeatureAPICToJSONTyped(value?: V1FeatureAPIC | null, _ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1FeatureAPIC.d.ts.map