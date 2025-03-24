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
 * @interface V1alpha1VirtualMachinePoolCondition
 */
export interface V1alpha1VirtualMachinePoolCondition {
    /**
     *
     * @type {string}
     * @memberof V1alpha1VirtualMachinePoolCondition
     */
    message?: string;
    /**
     *
     * @type {string}
     * @memberof V1alpha1VirtualMachinePoolCondition
     */
    reason?: string;
    /**
     *
     * @type {string}
     * @memberof V1alpha1VirtualMachinePoolCondition
     */
    status: string;
    /**
     *
     * @type {string}
     * @memberof V1alpha1VirtualMachinePoolCondition
     */
    type: string;
}
/**
 * Check if a given object implements the V1alpha1VirtualMachinePoolCondition interface.
 */
export declare function instanceOfV1alpha1VirtualMachinePoolCondition(value: object): value is V1alpha1VirtualMachinePoolCondition;
export declare function V1alpha1VirtualMachinePoolConditionFromJSON(json: any): V1alpha1VirtualMachinePoolCondition;
export declare function V1alpha1VirtualMachinePoolConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1VirtualMachinePoolCondition;
export declare function V1alpha1VirtualMachinePoolConditionToJSON(json: any): V1alpha1VirtualMachinePoolCondition;
export declare function V1alpha1VirtualMachinePoolConditionToJSONTyped(value?: V1alpha1VirtualMachinePoolCondition | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1alpha1VirtualMachinePoolCondition.d.ts.map