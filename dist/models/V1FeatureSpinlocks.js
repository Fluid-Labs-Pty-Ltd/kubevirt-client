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
export class V1FeatureSpinlocks {
    /**
    * Enabled determines if the feature should be enabled or disabled on the guest. Defaults to true.
    */
    'enabled';
    /**
    * Retries indicates the number of retries. Must be a value greater or equal 4096. Defaults to 4096.
    */
    'spinlocks';
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
            "name": "spinlocks",
            "baseName": "spinlocks",
            "type": "number",
            "format": "int64"
        }
    ];
    static getAttributeTypeMap() {
        return V1FeatureSpinlocks.attributeTypeMap;
    }
    constructor() {
    }
}
//# sourceMappingURL=V1FeatureSpinlocks.js.map