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
 * DataVolumeSourceSnapshot provides the parameters to create a Data Volume from an existing VolumeSnapshot
 * @export
 * @interface V1beta1DataVolumeSourceSnapshot
 */
export interface V1beta1DataVolumeSourceSnapshot {
    /**
     * The name of the source VolumeSnapshot
     * @type {string}
     * @memberof V1beta1DataVolumeSourceSnapshot
     */
    name: string;
    /**
     * The namespace of the source VolumeSnapshot
     * @type {string}
     * @memberof V1beta1DataVolumeSourceSnapshot
     */
    namespace: string;
}
/**
 * Check if a given object implements the V1beta1DataVolumeSourceSnapshot interface.
 */
export declare function instanceOfV1beta1DataVolumeSourceSnapshot(value: object): value is V1beta1DataVolumeSourceSnapshot;
export declare function V1beta1DataVolumeSourceSnapshotFromJSON(json: any): V1beta1DataVolumeSourceSnapshot;
export declare function V1beta1DataVolumeSourceSnapshotFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1DataVolumeSourceSnapshot;
export declare function V1beta1DataVolumeSourceSnapshotToJSON(json: any): V1beta1DataVolumeSourceSnapshot;
export declare function V1beta1DataVolumeSourceSnapshotToJSONTyped(value?: V1beta1DataVolumeSourceSnapshot | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1beta1DataVolumeSourceSnapshot.d.ts.map