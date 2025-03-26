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
exports.V1NodeMediatedDeviceTypesConfig = void 0;
/**
* NodeMediatedDeviceTypesConfig holds information about MDEV types to be defined in a specific node that matches the NodeSelector field.
*/
class V1NodeMediatedDeviceTypesConfig {
    'mediatedDeviceTypes';
    /**
    * Deprecated. Use mediatedDeviceTypes instead.
    */
    'mediatedDevicesTypes';
    /**
    * NodeSelector is a selector which must be true for the vmi to fit on a node. Selector which must match a node\'s labels for the vmi to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
    */
    'nodeSelector';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "mediatedDeviceTypes",
            "baseName": "mediatedDeviceTypes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "mediatedDevicesTypes",
            "baseName": "mediatedDevicesTypes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "nodeSelector",
            "baseName": "nodeSelector",
            "type": "{ [key: string]: string; }",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1NodeMediatedDeviceTypesConfig.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1NodeMediatedDeviceTypesConfig = V1NodeMediatedDeviceTypesConfig;
//# sourceMappingURL=V1NodeMediatedDeviceTypesConfig.js.map