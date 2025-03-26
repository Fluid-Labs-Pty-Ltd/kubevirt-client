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
export class V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagation {
    /**
    * Users represents a list of guest users that should have the ssh public keys added to their authorized_keys file.
    */
    'users';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "users",
            "baseName": "users",
            "type": "Array<string>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagation.attributeTypeMap;
    }
    constructor() {
    }
}
//# sourceMappingURL=V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagation.js.map