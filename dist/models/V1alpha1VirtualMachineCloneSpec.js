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
export class V1alpha1VirtualMachineCloneSpec {
    /**
    * Example use: \"!some/key*\". For a detailed description, please refer to https://kubevirt.io/user-guide/operations/clone_api/#label-annotation-filters.
    */
    'annotationFilters';
    /**
    * Example use: \"!some/key*\". For a detailed description, please refer to https://kubevirt.io/user-guide/operations/clone_api/#label-annotation-filters.
    */
    'labelFilters';
    /**
    * NewMacAddresses manually sets that target interfaces\' mac addresses. The key is the interface name and the value is the new mac address. If this field is not specified, a new MAC address will be generated automatically, as for any interface that is not included in this map.
    */
    'newMacAddresses';
    /**
    * NewSMBiosSerial manually sets that target\'s SMbios serial. If this field is not specified, a new serial will be generated automatically.
    */
    'newSMBiosSerial';
    'source';
    'target';
    'template';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "annotationFilters",
            "baseName": "annotationFilters",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "labelFilters",
            "baseName": "labelFilters",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "newMacAddresses",
            "baseName": "newMacAddresses",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "newSMBiosSerial",
            "baseName": "newSMBiosSerial",
            "type": "string",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "K8sIoApiCoreV1TypedLocalObjectReference",
            "format": ""
        },
        {
            "name": "target",
            "baseName": "target",
            "type": "K8sIoApiCoreV1TypedLocalObjectReference",
            "format": ""
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "V1alpha1VirtualMachineCloneTemplateFilters",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1alpha1VirtualMachineCloneSpec.attributeTypeMap;
    }
    constructor() {
    }
}
//# sourceMappingURL=V1alpha1VirtualMachineCloneSpec.js.map