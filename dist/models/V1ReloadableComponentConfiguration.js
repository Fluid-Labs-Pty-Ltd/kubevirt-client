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
* ReloadableComponentConfiguration holds all generic k8s configuration options which can be reloaded by components without requiring a restart.
*/
export class V1ReloadableComponentConfiguration {
    'restClient';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "restClient",
            "baseName": "restClient",
            "type": "V1RESTClientConfiguration",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1ReloadableComponentConfiguration.attributeTypeMap;
    }
    constructor() {
    }
}
//# sourceMappingURL=V1ReloadableComponentConfiguration.js.map