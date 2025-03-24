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
 * @interface V1VirtualMachineInstanceMigrationSpec
 */
export interface V1VirtualMachineInstanceMigrationSpec {
    /**
     * The name of the VMI to perform the migration on. VMI must exist in the migration objects namespace
     * @type {string}
     * @memberof V1VirtualMachineInstanceMigrationSpec
     */
    vmiName?: string;
}
/**
 * Check if a given object implements the V1VirtualMachineInstanceMigrationSpec interface.
 */
export declare function instanceOfV1VirtualMachineInstanceMigrationSpec(value: object): value is V1VirtualMachineInstanceMigrationSpec;
export declare function V1VirtualMachineInstanceMigrationSpecFromJSON(json: any): V1VirtualMachineInstanceMigrationSpec;
export declare function V1VirtualMachineInstanceMigrationSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VirtualMachineInstanceMigrationSpec;
export declare function V1VirtualMachineInstanceMigrationSpecToJSON(json: any): V1VirtualMachineInstanceMigrationSpec;
export declare function V1VirtualMachineInstanceMigrationSpecToJSONTyped(value?: V1VirtualMachineInstanceMigrationSpec | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1VirtualMachineInstanceMigrationSpec.d.ts.map