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
exports.V1BIOS = void 0;
/**
* If set (default), BIOS will be used.
*/
class V1BIOS {
    /**
    * If set, the BIOS output will be transmitted over serial
    */
    'useSerial';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "useSerial",
            "baseName": "useSerial",
            "type": "boolean",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1BIOS.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1BIOS = V1BIOS;
//# sourceMappingURL=V1BIOS.js.map