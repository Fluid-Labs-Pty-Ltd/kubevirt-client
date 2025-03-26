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
* HTTPGetAction describes an action based on HTTP Get requests.
*/
export class K8sIoApiCoreV1HTTPGetAction {
    /**
    * Host name to connect to, defaults to the pod IP. You probably want to set \"Host\" in httpHeaders instead.
    */
    'host';
    /**
    * Custom headers to set in the request. HTTP allows repeated headers.
    */
    'httpHeaders';
    /**
    * Path to access on the HTTP server.
    */
    'path';
    /**
    * Scheme to use for connecting to the host. Defaults to HTTP.  Possible enum values:  - `\"HTTP\"` means that the scheme used will be http://  - `\"HTTPS\"` means that the scheme used will be https://
    */
    'scheme';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "host",
            "baseName": "host",
            "type": "string",
            "format": ""
        },
        {
            "name": "httpHeaders",
            "baseName": "httpHeaders",
            "type": "Array<K8sIoApiCoreV1HTTPHeader>",
            "format": ""
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "scheme",
            "baseName": "scheme",
            "type": "K8sIoApiCoreV1HTTPGetActionSchemeEnum",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return K8sIoApiCoreV1HTTPGetAction.attributeTypeMap;
    }
    constructor() {
    }
}
export var K8sIoApiCoreV1HTTPGetActionSchemeEnum;
(function (K8sIoApiCoreV1HTTPGetActionSchemeEnum) {
    K8sIoApiCoreV1HTTPGetActionSchemeEnum["Http"] = "HTTP";
    K8sIoApiCoreV1HTTPGetActionSchemeEnum["Https"] = "HTTPS";
})(K8sIoApiCoreV1HTTPGetActionSchemeEnum || (K8sIoApiCoreV1HTTPGetActionSchemeEnum = {}));
//# sourceMappingURL=K8sIoApiCoreV1HTTPGetAction.js.map