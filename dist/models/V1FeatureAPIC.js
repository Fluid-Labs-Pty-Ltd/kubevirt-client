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
export class V1FeatureAPIC {
    /**
    * Enabled determines if the feature should be enabled or disabled on the guest. Defaults to true.
    */
    'enabled';
    /**
    * EndOfInterrupt enables the end of interrupt notification in the guest. Defaults to false.
    */
    'endOfInterrupt';
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
            "name": "endOfInterrupt",
            "baseName": "endOfInterrupt",
            "type": "boolean",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1FeatureAPIC.attributeTypeMap;
    }
    constructor() {
    }
}
//# sourceMappingURL=V1FeatureAPIC.js.map