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
exports.V1NetworkConfiguration = void 0;
/**
* NetworkConfiguration holds network options
*/
class V1NetworkConfiguration {
    'binding';
    'defaultNetworkInterface';
    'permitBridgeInterfaceOnPodNetwork';
    /**
    * DeprecatedPermitSlirpInterface is an alias for the deprecated PermitSlirpInterface. Deprecated: Removed in v1.3.
    */
    'permitSlirpInterface';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "binding",
            "baseName": "binding",
            "type": "{ [key: string]: V1InterfaceBindingPlugin; }",
            "format": ""
        },
        {
            "name": "defaultNetworkInterface",
            "baseName": "defaultNetworkInterface",
            "type": "string",
            "format": ""
        },
        {
            "name": "permitBridgeInterfaceOnPodNetwork",
            "baseName": "permitBridgeInterfaceOnPodNetwork",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "permitSlirpInterface",
            "baseName": "permitSlirpInterface",
            "type": "boolean",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1NetworkConfiguration.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1NetworkConfiguration = V1NetworkConfiguration;
//# sourceMappingURL=V1NetworkConfiguration.js.map