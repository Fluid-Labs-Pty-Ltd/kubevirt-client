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
exports.V1VirtualMachineInstanceMigrationSpec = void 0;
class V1VirtualMachineInstanceMigrationSpec {
    /**
    * The name of the VMI to perform the migration on. VMI must exist in the migration objects namespace
    */
    'vmiName';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "vmiName",
            "baseName": "vmiName",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1VirtualMachineInstanceMigrationSpec.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1VirtualMachineInstanceMigrationSpec = V1VirtualMachineInstanceMigrationSpec;
//# sourceMappingURL=V1VirtualMachineInstanceMigrationSpec.js.map