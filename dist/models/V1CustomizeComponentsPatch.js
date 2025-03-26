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
export class V1CustomizeComponentsPatch {
    'patch';
    'resourceName';
    'resourceType';
    'type';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "patch",
            "baseName": "patch",
            "type": "string",
            "format": ""
        },
        {
            "name": "resourceName",
            "baseName": "resourceName",
            "type": "string",
            "format": ""
        },
        {
            "name": "resourceType",
            "baseName": "resourceType",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1CustomizeComponentsPatch.attributeTypeMap;
    }
    constructor() {
    }
}
//# sourceMappingURL=V1CustomizeComponentsPatch.js.map