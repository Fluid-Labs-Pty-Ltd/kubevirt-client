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
* If set, EFI will be used instead of BIOS.
*/
export class V1EFI {
    /**
    * If set to true, Persistent will persist the EFI NVRAM across reboots. Defaults to false
    */
    'persistent';
    /**
    * If set, SecureBoot will be enabled and the OVMF roms will be swapped for SecureBoot-enabled ones. Requires SMM to be enabled. Defaults to true
    */
    'secureBoot';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "persistent",
            "baseName": "persistent",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "secureBoot",
            "baseName": "secureBoot",
            "type": "boolean",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1EFI.attributeTypeMap;
    }
    constructor() {
    }
}
//# sourceMappingURL=V1EFI.js.map