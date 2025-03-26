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
* Represents the multus cni network.
*/
export class V1MultusNetwork {
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
//# sourceMappingURL=V1MultusNetwork.js.map