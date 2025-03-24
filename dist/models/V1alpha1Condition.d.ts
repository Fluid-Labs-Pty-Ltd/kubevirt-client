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
 * Condition defines conditions
 * @export
 * @interface V1alpha1Condition
 */
export interface V1alpha1Condition {
    /**
     *
     * @type {string}
     * @memberof V1alpha1Condition
     */
    message?: string;
    /**
     *
     * @type {string}
     * @memberof V1alpha1Condition
     */
    reason?: string;
    /**
     *
     * @type {string}
     * @memberof V1alpha1Condition
     */
    status: string;
    /**
     *
     * @type {string}
     * @memberof V1alpha1Condition
     */
    type: string;
}
/**
 * Check if a given object implements the V1alpha1Condition interface.
 */
export declare function instanceOfV1alpha1Condition(value: object): value is V1alpha1Condition;
export declare function V1alpha1ConditionFromJSON(json: any): V1alpha1Condition;
export declare function V1alpha1ConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1Condition;
export declare function V1alpha1ConditionToJSON(json: any): V1alpha1Condition;
export declare function V1alpha1ConditionToJSONTyped(value?: V1alpha1Condition | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1alpha1Condition.d.ts.map