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
* Extra DHCP options to use in the interface.
*/
export class V1DHCPOptions {
    /**
    * If specified will pass option 67 to interface\'s DHCP server
    */
    'bootFileName';
    /**
    * If specified will pass the configured NTP server to the VM via DHCP option 042.
    */
    'ntpServers';
    /**
    * If specified will pass extra DHCP options for private use, range: 224-254
    */
    'privateOptions';
    /**
    * If specified will pass option 66 to interface\'s DHCP server
    */
    'tftpServerName';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "bootFileName",
            "baseName": "bootFileName",
            "type": "string",
            "format": ""
        },
        {
            "name": "ntpServers",
            "baseName": "ntpServers",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "privateOptions",
            "baseName": "privateOptions",
            "type": "Array<V1DHCPPrivateOptions>",
            "format": ""
        },
        {
            "name": "tftpServerName",
            "baseName": "tftpServerName",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1DHCPOptions.attributeTypeMap;
    }
    constructor() {
    }
}
//# sourceMappingURL=V1DHCPOptions.js.map