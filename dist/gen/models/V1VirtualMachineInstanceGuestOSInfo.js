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
exports.V1VirtualMachineInstanceGuestOSInfo = void 0;
class V1VirtualMachineInstanceGuestOSInfo {
    /**
    * Guest OS Id
    */
    'id';
    /**
    * Guest OS Kernel Release
    */
    'kernelRelease';
    /**
    * Kernel version of the Guest OS
    */
    'kernelVersion';
    /**
    * Machine type of the Guest OS
    */
    'machine';
    /**
    * Name of the Guest OS
    */
    'name';
    /**
    * Guest OS Pretty Name
    */
    'prettyName';
    /**
    * Guest OS Version
    */
    'version';
    /**
    * Version ID of the Guest OS
    */
    'versionId';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "kernelRelease",
            "baseName": "kernelRelease",
            "type": "string",
            "format": ""
        },
        {
            "name": "kernelVersion",
            "baseName": "kernelVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "machine",
            "baseName": "machine",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "prettyName",
            "baseName": "prettyName",
            "type": "string",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        },
        {
            "name": "versionId",
            "baseName": "versionId",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1VirtualMachineInstanceGuestOSInfo.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1VirtualMachineInstanceGuestOSInfo = V1VirtualMachineInstanceGuestOSInfo;
//# sourceMappingURL=V1VirtualMachineInstanceGuestOSInfo.js.map