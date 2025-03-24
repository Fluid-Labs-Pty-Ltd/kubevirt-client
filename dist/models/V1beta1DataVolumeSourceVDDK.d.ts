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
 * DataVolumeSourceVDDK provides the parameters to create a Data Volume from a Vmware source
 * @export
 * @interface V1beta1DataVolumeSourceVDDK
 */
export interface V1beta1DataVolumeSourceVDDK {
    /**
     * BackingFile is the path to the virtual hard disk to migrate from vCenter/ESXi
     * @type {string}
     * @memberof V1beta1DataVolumeSourceVDDK
     */
    backingFile?: string;
    /**
     * InitImageURL is an optional URL to an image containing an extracted VDDK library, overrides v2v-vmware config map
     * @type {string}
     * @memberof V1beta1DataVolumeSourceVDDK
     */
    initImageURL?: string;
    /**
     * SecretRef provides a reference to a secret containing the username and password needed to access the vCenter or ESXi host
     * @type {string}
     * @memberof V1beta1DataVolumeSourceVDDK
     */
    secretRef?: string;
    /**
     * Thumbprint is the certificate thumbprint of the vCenter or ESXi host
     * @type {string}
     * @memberof V1beta1DataVolumeSourceVDDK
     */
    thumbprint?: string;
    /**
     * URL is the URL of the vCenter or ESXi host with the VM to migrate
     * @type {string}
     * @memberof V1beta1DataVolumeSourceVDDK
     */
    url?: string;
    /**
     * UUID is the UUID of the virtual machine that the backing file is attached to in vCenter/ESXi
     * @type {string}
     * @memberof V1beta1DataVolumeSourceVDDK
     */
    uuid?: string;
}
/**
 * Check if a given object implements the V1beta1DataVolumeSourceVDDK interface.
 */
export declare function instanceOfV1beta1DataVolumeSourceVDDK(value: object): value is V1beta1DataVolumeSourceVDDK;
export declare function V1beta1DataVolumeSourceVDDKFromJSON(json: any): V1beta1DataVolumeSourceVDDK;
export declare function V1beta1DataVolumeSourceVDDKFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1DataVolumeSourceVDDK;
export declare function V1beta1DataVolumeSourceVDDKToJSON(json: any): V1beta1DataVolumeSourceVDDK;
export declare function V1beta1DataVolumeSourceVDDKToJSONTyped(value?: V1beta1DataVolumeSourceVDDK | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1beta1DataVolumeSourceVDDK.d.ts.map