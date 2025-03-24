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
 * @interface V1Filesystem
 */
export interface V1Filesystem {
    /**
     * Name is the device name
     * @type {string}
     * @memberof V1Filesystem
     */
    name: string;
    /**
     *
     * @type {object}
     * @memberof V1Filesystem
     */
    virtiofs: object;
}
/**
 * Check if a given object implements the V1Filesystem interface.
 */
export declare function instanceOfV1Filesystem(value: object): value is V1Filesystem;
export declare function V1FilesystemFromJSON(json: any): V1Filesystem;
export declare function V1FilesystemFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1Filesystem;
export declare function V1FilesystemToJSON(json: any): V1Filesystem;
export declare function V1FilesystemToJSONTyped(value?: V1Filesystem | null, _ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1Filesystem.d.ts.map