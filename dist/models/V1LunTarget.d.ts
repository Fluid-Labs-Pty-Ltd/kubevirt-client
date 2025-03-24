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
 * @interface V1LunTarget
 */
export interface V1LunTarget {
    /**
     * Bus indicates the type of disk device to emulate. supported values: virtio, sata, scsi.
     * @type {string}
     * @memberof V1LunTarget
     */
    bus?: string;
    /**
     * ReadOnly. Defaults to false.
     * @type {boolean}
     * @memberof V1LunTarget
     */
    readonly?: boolean;
    /**
     * Reservation indicates if the disk needs to support the persistent reservation for the SCSI disk
     * @type {boolean}
     * @memberof V1LunTarget
     */
    reservation?: boolean;
}
/**
 * Check if a given object implements the V1LunTarget interface.
 */
export declare function instanceOfV1LunTarget(value: object): value is V1LunTarget;
export declare function V1LunTargetFromJSON(json: any): V1LunTarget;
export declare function V1LunTargetFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1LunTarget;
export declare function V1LunTargetToJSON(json: any): V1LunTarget;
export declare function V1LunTargetToJSONTyped(value?: V1LunTarget | null, _ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1LunTarget.d.ts.map