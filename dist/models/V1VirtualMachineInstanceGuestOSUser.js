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
* VirtualMachineGuestOSUser is the single user of the guest os
*/
export class V1VirtualMachineInstanceGuestOSUser {
    'domain';
    'loginTime';
    'userName';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "domain",
            "baseName": "domain",
            "type": "string",
            "format": ""
        },
        {
            "name": "loginTime",
            "baseName": "loginTime",
            "type": "number",
            "format": "double"
        },
        {
            "name": "userName",
            "baseName": "userName",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1VirtualMachineInstanceGuestOSUser.attributeTypeMap;
    }
    constructor() {
    }
}
//# sourceMappingURL=V1VirtualMachineInstanceGuestOSUser.js.map