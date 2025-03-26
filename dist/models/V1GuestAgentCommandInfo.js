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
* List of commands that QEMU guest agent supports
*/
export class V1GuestAgentCommandInfo {
    'enabled';
    'name';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1GuestAgentCommandInfo.attributeTypeMap;
    }
    constructor() {
    }
}
//# sourceMappingURL=V1GuestAgentCommandInfo.js.map