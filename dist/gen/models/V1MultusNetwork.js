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
exports.V1MultusNetwork = void 0;
/**
* Represents the multus cni network.
*/
class V1MultusNetwork {
    /**
    * Select the default network and add it to the multus-cni.io/default-network annotation.
    */
    '_default';
    /**
    * References to a NetworkAttachmentDefinition CRD object. Format: <networkName>, <namespace>/<networkName>. If namespace is not specified, VMI namespace is assumed.
    */
    'networkName';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "_default",
            "baseName": "default",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "networkName",
            "baseName": "networkName",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1MultusNetwork.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1MultusNetwork = V1MultusNetwork;
//# sourceMappingURL=V1MultusNetwork.js.map