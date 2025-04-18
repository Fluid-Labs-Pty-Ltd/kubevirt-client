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
* DataVolumeSourceImageIO provides the parameters to create a Data Volume from an imageio source
*/
export declare class V1beta1DataVolumeSourceImageIO {
    /**
    * CertConfigMap provides a reference to the CA cert
    */
    'certConfigMap'?: string;
    /**
    * DiskID provides id of a disk to be imported
    */
    'diskId': string;
    /**
    * SecretRef provides the secret reference needed to access the ovirt-engine
    */
    'secretRef'?: string;
    /**
    * URL is the URL of the ovirt-engine
    */
    'url': string;
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
//# sourceMappingURL=V1beta1DataVolumeSourceImageIO.d.ts.map