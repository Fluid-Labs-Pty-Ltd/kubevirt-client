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
 * @interface V1DataVolumeSource
 */
export interface V1DataVolumeSource {
    /**
     * Hotpluggable indicates whether the volume can be hotplugged and hotunplugged.
     * @type {boolean}
     * @memberof V1DataVolumeSource
     */
    hotpluggable?: boolean;
    /**
     * Name of both the DataVolume and the PVC in the same namespace. After PVC population the DataVolume is garbage collected by default.
     * @type {string}
     * @memberof V1DataVolumeSource
     */
    name: string;
}
/**
 * Check if a given object implements the V1DataVolumeSource interface.
 */
export declare function instanceOfV1DataVolumeSource(value: object): value is V1DataVolumeSource;
export declare function V1DataVolumeSourceFromJSON(json: any): V1DataVolumeSource;
export declare function V1DataVolumeSourceFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1DataVolumeSource;
export declare function V1DataVolumeSourceToJSON(json: any): V1DataVolumeSource;
export declare function V1DataVolumeSourceToJSONTyped(value?: V1DataVolumeSource | null, _ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1DataVolumeSource.d.ts.map