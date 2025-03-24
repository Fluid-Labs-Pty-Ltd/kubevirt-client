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
 * PersistentVolumeClaimInfo contains the relavant information virt-handler needs cached about a PVC
 * @export
 * @interface V1PersistentVolumeClaimInfo
 */
export interface V1PersistentVolumeClaimInfo {
    /**
     * AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
     * @type {Array<string>}
     * @memberof V1PersistentVolumeClaimInfo
     */
    accessModes?: Array<V1PersistentVolumeClaimInfoAccessModesEnum>;
    /**
     * Capacity represents the capacity set on the corresponding PVC status
     * @type {{ [key: string]: string; }}
     * @memberof V1PersistentVolumeClaimInfo
     */
    capacity?: {
        [key: string]: string;
    };
    /**
     * ClaimName is the name of the PVC
     * @type {string}
     * @memberof V1PersistentVolumeClaimInfo
     */
    claimName?: string;
    /**
     * Percentage of filesystem's size to be reserved when resizing the PVC
     * @type {string}
     * @memberof V1PersistentVolumeClaimInfo
     */
    filesystemOverhead?: string;
    /**
     * Preallocated indicates if the PVC's storage is preallocated or not
     * @type {boolean}
     * @memberof V1PersistentVolumeClaimInfo
     */
    preallocated?: boolean;
    /**
     * Requests represents the resources requested by the corresponding PVC spec
     * @type {{ [key: string]: string; }}
     * @memberof V1PersistentVolumeClaimInfo
     */
    requests?: {
        [key: string]: string;
    };
    /**
     * VolumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
     *
     * Possible enum values:
     *  - `"Block"` means the volume will not be formatted with a filesystem and will remain a raw block device.
     *  - `"Filesystem"` means the volume will be or is formatted with a filesystem.
     * @type {string}
     * @memberof V1PersistentVolumeClaimInfo
     */
    volumeMode?: V1PersistentVolumeClaimInfoVolumeModeEnum;
}
/**
 * @export
 */
export declare const V1PersistentVolumeClaimInfoAccessModesEnum: {
    readonly ReadOnlyMany: "ReadOnlyMany";
    readonly ReadWriteMany: "ReadWriteMany";
    readonly ReadWriteOnce: "ReadWriteOnce";
    readonly ReadWriteOncePod: "ReadWriteOncePod";
};
export type V1PersistentVolumeClaimInfoAccessModesEnum = typeof V1PersistentVolumeClaimInfoAccessModesEnum[keyof typeof V1PersistentVolumeClaimInfoAccessModesEnum];
/**
 * @export
 */
export declare const V1PersistentVolumeClaimInfoVolumeModeEnum: {
    readonly Block: "Block";
    readonly Filesystem: "Filesystem";
};
export type V1PersistentVolumeClaimInfoVolumeModeEnum = typeof V1PersistentVolumeClaimInfoVolumeModeEnum[keyof typeof V1PersistentVolumeClaimInfoVolumeModeEnum];
/**
 * Check if a given object implements the V1PersistentVolumeClaimInfo interface.
 */
export declare function instanceOfV1PersistentVolumeClaimInfo(value: object): value is V1PersistentVolumeClaimInfo;
export declare function V1PersistentVolumeClaimInfoFromJSON(json: any): V1PersistentVolumeClaimInfo;
export declare function V1PersistentVolumeClaimInfoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1PersistentVolumeClaimInfo;
export declare function V1PersistentVolumeClaimInfoToJSON(json: any): V1PersistentVolumeClaimInfo;
export declare function V1PersistentVolumeClaimInfoToJSONTyped(value?: V1PersistentVolumeClaimInfo | null, _ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1PersistentVolumeClaimInfo.d.ts.map