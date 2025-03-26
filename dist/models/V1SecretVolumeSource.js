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
* SecretVolumeSource adapts a Secret into a volume.
*/
export class V1SecretVolumeSource {
    /**
    * Specify whether the Secret or it\'s keys must be defined
    */
    'optional';
    /**
    * Name of the secret in the pod\'s namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
    */
    'secretName';
    /**
    * The volume label of the resulting disk inside the VMI. Different bootstrapping mechanisms require different values. Typical values are \"cidata\" (cloud-init), \"config-2\" (cloud-init) or \"OEMDRV\" (kickstart).
    */
    'volumeLabel';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "optional",
            "baseName": "optional",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "secretName",
            "baseName": "secretName",
            "type": "string",
            "format": ""
        },
        {
            "name": "volumeLabel",
            "baseName": "volumeLabel",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1SecretVolumeSource.attributeTypeMap;
    }
    constructor() {
    }
}
//# sourceMappingURL=V1SecretVolumeSource.js.map