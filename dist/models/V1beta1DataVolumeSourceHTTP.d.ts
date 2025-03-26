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
* DataVolumeSourceHTTP can be either an http or https endpoint, with an optional basic auth user name and password, and an optional configmap containing additional CAs
*/
export declare class V1beta1DataVolumeSourceHTTP {
    /**
    * CertConfigMap is a configmap reference, containing a Certificate Authority(CA) public key, and a base64 encoded pem certificate
    */
    'certConfigMap'?: string;
    /**
    * ExtraHeaders is a list of strings containing extra headers to include with HTTP transfer requests
    */
    'extraHeaders'?: Array<string>;
    /**
    * SecretExtraHeaders is a list of Secret references, each containing an extra HTTP header that may include sensitive information
    */
    'secretExtraHeaders'?: Array<string>;
    /**
    * SecretRef A Secret reference, the secret should contain accessKeyId (user name) base64 encoded, and secretKey (password) also base64 encoded
    */
    'secretRef'?: string;
    /**
    * URL is the URL of the http(s) endpoint
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
//# sourceMappingURL=V1beta1DataVolumeSourceHTTP.d.ts.map