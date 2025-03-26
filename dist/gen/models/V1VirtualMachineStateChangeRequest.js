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
exports.V1VirtualMachineStateChangeRequest = void 0;
class V1VirtualMachineStateChangeRequest {
    /**
    * Indicates the type of action that is requested. e.g. Start or Stop
    */
    'action';
    /**
    * Provides additional data in order to perform the Action
    */
    'data';
    /**
    * Indicates the UUID of an existing Virtual Machine Instance that this change request applies to -- if applicable
    */
    'uid';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "action",
            "baseName": "action",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "uid",
            "baseName": "uid",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1VirtualMachineStateChangeRequest.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1VirtualMachineStateChangeRequest = V1VirtualMachineStateChangeRequest;
//# sourceMappingURL=V1VirtualMachineStateChangeRequest.js.map