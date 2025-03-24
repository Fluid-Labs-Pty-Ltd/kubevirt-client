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
 * NodeMediatedDeviceTypesConfig holds information about MDEV types to be defined in a specific node that matches the NodeSelector field.
 * @export
 * @interface V1NodeMediatedDeviceTypesConfig
 */
export interface V1NodeMediatedDeviceTypesConfig {
    /**
     *
     * @type {Array<string>}
     * @memberof V1NodeMediatedDeviceTypesConfig
     */
    mediatedDeviceTypes?: Array<string>;
    /**
     * Deprecated. Use mediatedDeviceTypes instead.
     * @type {Array<string>}
     * @memberof V1NodeMediatedDeviceTypesConfig
     */
    mediatedDevicesTypes?: Array<string>;
    /**
     * NodeSelector is a selector which must be true for the vmi to fit on a node. Selector which must match a node's labels for the vmi to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
     * @type {{ [key: string]: string; }}
     * @memberof V1NodeMediatedDeviceTypesConfig
     */
    nodeSelector: {
        [key: string]: string;
    };
}
/**
 * Check if a given object implements the V1NodeMediatedDeviceTypesConfig interface.
 */
export declare function instanceOfV1NodeMediatedDeviceTypesConfig(value: object): value is V1NodeMediatedDeviceTypesConfig;
export declare function V1NodeMediatedDeviceTypesConfigFromJSON(json: any): V1NodeMediatedDeviceTypesConfig;
export declare function V1NodeMediatedDeviceTypesConfigFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1NodeMediatedDeviceTypesConfig;
export declare function V1NodeMediatedDeviceTypesConfigToJSON(json: any): V1NodeMediatedDeviceTypesConfig;
export declare function V1NodeMediatedDeviceTypesConfigToJSONTyped(value?: V1NodeMediatedDeviceTypesConfig | null, _ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1NodeMediatedDeviceTypesConfig.d.ts.map