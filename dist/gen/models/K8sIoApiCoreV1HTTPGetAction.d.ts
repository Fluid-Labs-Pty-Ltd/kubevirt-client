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
import { K8sIoApiCoreV1HTTPHeader } from '../models/K8sIoApiCoreV1HTTPHeader.js';
/**
* HTTPGetAction describes an action based on HTTP Get requests.
*/
export declare class K8sIoApiCoreV1HTTPGetAction {
    /**
    * Host name to connect to, defaults to the pod IP. You probably want to set \"Host\" in httpHeaders instead.
    */
    'host'?: string;
    /**
    * Custom headers to set in the request. HTTP allows repeated headers.
    */
    'httpHeaders'?: Array<K8sIoApiCoreV1HTTPHeader>;
    /**
    * Path to access on the HTTP server.
    */
    'path'?: string;
    /**
    * Scheme to use for connecting to the host. Defaults to HTTP.  Possible enum values:  - `\"HTTP\"` means that the scheme used will be http://  - `\"HTTPS\"` means that the scheme used will be https://
    */
    'scheme'?: K8sIoApiCoreV1HTTPGetActionSchemeEnum;
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
export declare enum K8sIoApiCoreV1HTTPGetActionSchemeEnum {
    Http = "HTTP",
    Https = "HTTPS"
}
//# sourceMappingURL=K8sIoApiCoreV1HTTPGetAction.d.ts.map