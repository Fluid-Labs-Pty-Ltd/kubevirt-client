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
* VolumeStatus represents information about the status of volumes attached to the VirtualMachineInstance.
*/
export class V1VolumeStatus {
    'containerDiskVolume';
    'hotplugVolume';
    'memoryDumpVolume';
    /**
    * Message is a detailed message about the current hotplug volume phase
    */
    'message';
    /**
    * Name is the name of the volume
    */
    'name';
    'persistentVolumeClaimInfo';
    /**
    * Phase is the phase
    */
    'phase';
    /**
    * Reason is a brief description of why we are in the current hotplug volume phase
    */
    'reason';
    /**
    * Represents the size of the volume
    */
    'size';
    /**
    * Target is the target name used when adding the volume to the VM, eg: vda
    */
    'target';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "containerDiskVolume",
            "baseName": "containerDiskVolume",
            "type": "V1ContainerDiskInfo",
            "format": ""
        },
        {
            "name": "hotplugVolume",
            "baseName": "hotplugVolume",
            "type": "V1HotplugVolumeStatus",
            "format": ""
        },
        {
            "name": "memoryDumpVolume",
            "baseName": "memoryDumpVolume",
            "type": "V1DomainMemoryDumpInfo",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "persistentVolumeClaimInfo",
            "baseName": "persistentVolumeClaimInfo",
            "type": "V1PersistentVolumeClaimInfo",
            "format": ""
        },
        {
            "name": "phase",
            "baseName": "phase",
            "type": "string",
            "format": ""
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string",
            "format": ""
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "target",
            "baseName": "target",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1VolumeStatus.attributeTypeMap;
    }
    constructor() {
    }
}
//# sourceMappingURL=V1VolumeStatus.js.map