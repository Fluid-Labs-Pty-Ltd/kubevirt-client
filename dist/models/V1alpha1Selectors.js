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
export class V1alpha1Selectors {
    'namespaceSelector';
    'virtualMachineInstanceSelector';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "namespaceSelector",
            "baseName": "namespaceSelector",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "virtualMachineInstanceSelector",
            "baseName": "virtualMachineInstanceSelector",
            "type": "{ [key: string]: string; }",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1alpha1Selectors.attributeTypeMap;
    }
    constructor() {
    }
}
//# sourceMappingURL=V1alpha1Selectors.js.map