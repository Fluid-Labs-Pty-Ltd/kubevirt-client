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
* Represents the firmware blob used to assist in the domain creation process. Used for setting the QEMU BIOS file path for the libvirt domain.
*/
export class V1Bootloader {
    'bios';
    'efi';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "bios",
            "baseName": "bios",
            "type": "V1BIOS",
            "format": ""
        },
        {
            "name": "efi",
            "baseName": "efi",
            "type": "V1EFI",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1Bootloader.attributeTypeMap;
    }
    constructor() {
    }
}
//# sourceMappingURL=V1Bootloader.js.map