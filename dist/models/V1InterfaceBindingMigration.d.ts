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
 * @interface V1InterfaceBindingMigration
 */
export interface V1InterfaceBindingMigration {
    /**
     * Method defines a pre-defined migration methodology version: 1alphav1
     * @type {string}
     * @memberof V1InterfaceBindingMigration
     */
    method?: string;
}
/**
 * Check if a given object implements the V1InterfaceBindingMigration interface.
 */
export declare function instanceOfV1InterfaceBindingMigration(value: object): value is V1InterfaceBindingMigration;
export declare function V1InterfaceBindingMigrationFromJSON(json: any): V1InterfaceBindingMigration;
export declare function V1InterfaceBindingMigrationFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1InterfaceBindingMigration;
export declare function V1InterfaceBindingMigrationToJSON(json: any): V1InterfaceBindingMigration;
export declare function V1InterfaceBindingMigrationToJSONTyped(value?: V1InterfaceBindingMigration | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1InterfaceBindingMigration.d.ts.map