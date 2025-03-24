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
 * PersistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. Directly attached to the vmi via qemu. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
 * @export
 * @interface V1PersistentVolumeClaimVolumeSource
 */
export interface V1PersistentVolumeClaimVolumeSource {
    /**
     * claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
     * @type {string}
     * @memberof V1PersistentVolumeClaimVolumeSource
     */
    claimName: string;
    /**
     * Hotpluggable indicates whether the volume can be hotplugged and hotunplugged.
     * @type {boolean}
     * @memberof V1PersistentVolumeClaimVolumeSource
     */
    hotpluggable?: boolean;
    /**
     * readOnly Will force the ReadOnly setting in VolumeMounts. Default false.
     * @type {boolean}
     * @memberof V1PersistentVolumeClaimVolumeSource
     */
    readOnly?: boolean;
}
/**
 * Check if a given object implements the V1PersistentVolumeClaimVolumeSource interface.
 */
export declare function instanceOfV1PersistentVolumeClaimVolumeSource(value: object): value is V1PersistentVolumeClaimVolumeSource;
export declare function V1PersistentVolumeClaimVolumeSourceFromJSON(json: any): V1PersistentVolumeClaimVolumeSource;
export declare function V1PersistentVolumeClaimVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PersistentVolumeClaimVolumeSource;
export declare function V1PersistentVolumeClaimVolumeSourceToJSON(json: any): V1PersistentVolumeClaimVolumeSource;
export declare function V1PersistentVolumeClaimVolumeSourceToJSONTyped(value?: V1PersistentVolumeClaimVolumeSource | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1PersistentVolumeClaimVolumeSource.d.ts.map