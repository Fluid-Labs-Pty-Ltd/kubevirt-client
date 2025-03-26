/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
* SecretVolumeSource adapts a Secret into a volume.
*/
export declare class V1SecretVolumeSource {
    /**
    * Specify whether the Secret or it\'s keys must be defined
    */
    'optional'?: boolean;
    /**
    * Name of the secret in the pod\'s namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
    */
    'secretName'?: string;
    /**
    * The volume label of the resulting disk inside the VMI. Different bootstrapping mechanisms require different values. Typical values are \"cidata\" (cloud-init), \"config-2\" (cloud-init) or \"OEMDRV\" (kickstart).
    */
    'volumeLabel'?: string;
    static readonly discriminator: string | undefined;
    static readonly mapping: {
        [index: string]: string;
    } | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
//# sourceMappingURL=V1SecretVolumeSource.d.ts.map