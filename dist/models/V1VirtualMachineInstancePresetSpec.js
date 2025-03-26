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
export class V1VirtualMachineInstancePresetSpec {
    'domain';
    'selector';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "domain",
            "baseName": "domain",
            "type": "V1DomainSpec",
            "format": ""
        },
        {
            "name": "selector",
            "baseName": "selector",
            "type": "K8sIoApimachineryPkgApisMetaV1LabelSelector",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1VirtualMachineInstancePresetSpec.attributeTypeMap;
    }
    constructor() {
    }
}
//# sourceMappingURL=V1VirtualMachineInstancePresetSpec.js.map