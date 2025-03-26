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
* VirtualMachineSpec describes how the proper VirtualMachine should look like
*/
export class V1VirtualMachineSpec {
    /**
    * dataVolumeTemplates is a list of dataVolumes that the VirtualMachineInstance template can reference. DataVolumes in this list are dynamically created for the VirtualMachine and are tied to the VirtualMachine\'s life-cycle.
    */
    'dataVolumeTemplates';
    'instancetype';
    'preference';
    /**
    * Running state indicates the requested running state of the VirtualMachineInstance mutually exclusive with Running
    */
    'runStrategy';
    /**
    * Running controls whether the associatied VirtualMachineInstance is created or not Mutually exclusive with RunStrategy Deprecated: VirtualMachineInstance field \"Running\" is now deprecated, please use RunStrategy instead.
    */
    'running';
    'template';
    /**
    * UpdateVolumesStrategy is the strategy to apply on volumes updates
    */
    'updateVolumesStrategy';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "dataVolumeTemplates",
            "baseName": "dataVolumeTemplates",
            "type": "Array<V1DataVolumeTemplateSpec>",
            "format": ""
        },
        {
            "name": "instancetype",
            "baseName": "instancetype",
            "type": "V1InstancetypeMatcher",
            "format": ""
        },
        {
            "name": "preference",
            "baseName": "preference",
            "type": "V1PreferenceMatcher",
            "format": ""
        },
        {
            "name": "runStrategy",
            "baseName": "runStrategy",
            "type": "string",
            "format": ""
        },
        {
            "name": "running",
            "baseName": "running",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "V1VirtualMachineInstanceTemplateSpec",
            "format": ""
        },
        {
            "name": "updateVolumesStrategy",
            "baseName": "updateVolumesStrategy",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1VirtualMachineSpec.attributeTypeMap;
    }
    constructor() {
    }
}
//# sourceMappingURL=V1VirtualMachineSpec.js.map