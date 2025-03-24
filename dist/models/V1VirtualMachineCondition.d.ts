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
 * VirtualMachineCondition represents the state of VirtualMachine
 * @export
 * @interface V1VirtualMachineCondition
 */
export interface V1VirtualMachineCondition {
    /**
     *
     * @type {string}
     * @memberof V1VirtualMachineCondition
     */
    message?: string;
    /**
     *
     * @type {string}
     * @memberof V1VirtualMachineCondition
     */
    reason?: string;
    /**
     *
     * @type {string}
     * @memberof V1VirtualMachineCondition
     */
    status: string;
    /**
     *
     * @type {string}
     * @memberof V1VirtualMachineCondition
     */
    type: string;
}
/**
 * Check if a given object implements the V1VirtualMachineCondition interface.
 */
export declare function instanceOfV1VirtualMachineCondition(value: object): value is V1VirtualMachineCondition;
export declare function V1VirtualMachineConditionFromJSON(json: any): V1VirtualMachineCondition;
export declare function V1VirtualMachineConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VirtualMachineCondition;
export declare function V1VirtualMachineConditionToJSON(json: any): V1VirtualMachineCondition;
export declare function V1VirtualMachineConditionToJSONTyped(value?: V1VirtualMachineCondition | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1VirtualMachineCondition.d.ts.map