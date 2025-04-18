"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.K8sIoApiCoreV1TCPSocketAction = void 0;
/**
* TCPSocketAction describes an action based on opening a socket
*/
class K8sIoApiCoreV1TCPSocketAction {
    /**
    * Optional: Host name to connect to, defaults to the pod IP.
    */
    'host';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "host",
            "baseName": "host",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return K8sIoApiCoreV1TCPSocketAction.attributeTypeMap;
    }
    constructor() {
    }
}
exports.K8sIoApiCoreV1TCPSocketAction = K8sIoApiCoreV1TCPSocketAction;
//# sourceMappingURL=K8sIoApiCoreV1TCPSocketAction.js.map