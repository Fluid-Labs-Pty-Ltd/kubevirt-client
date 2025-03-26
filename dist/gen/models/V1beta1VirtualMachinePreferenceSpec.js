"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1beta1VirtualMachinePreferenceSpec = void 0;
/**
* VirtualMachinePreferenceSpec is a description of the VirtualMachinePreference or VirtualMachineClusterPreference.
*/
class V1beta1VirtualMachinePreferenceSpec {
    /**
    * Optionally defines preferred Annotations to be applied to the VirtualMachineInstance
    */
    'annotations';
    'clock';
    'cpu';
    'devices';
    'features';
    'firmware';
    'machine';
    /**
    * PreferSpreadSocketToCoreRatio defines the ratio to spread vCPUs between cores and sockets, it defaults to 2.
    */
    'preferSpreadSocketToCoreRatio';
    /**
    * Subdomain of the VirtualMachineInstance
    */
    'preferredSubdomain';
    /**
    * Grace period observed after signalling a VirtualMachineInstance to stop after which the VirtualMachineInstance is force terminated.
    */
    'preferredTerminationGracePeriodSeconds';
    'requirements';
    'volumes';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "annotations",
            "baseName": "annotations",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "clock",
            "baseName": "clock",
            "type": "V1beta1ClockPreferences",
            "format": ""
        },
        {
            "name": "cpu",
            "baseName": "cpu",
            "type": "V1beta1CPUPreferences",
            "format": ""
        },
        {
            "name": "devices",
            "baseName": "devices",
            "type": "V1beta1DevicePreferences",
            "format": ""
        },
        {
            "name": "features",
            "baseName": "features",
            "type": "V1beta1FeaturePreferences",
            "format": ""
        },
        {
            "name": "firmware",
            "baseName": "firmware",
            "type": "V1beta1FirmwarePreferences",
            "format": ""
        },
        {
            "name": "machine",
            "baseName": "machine",
            "type": "V1beta1MachinePreferences",
            "format": ""
        },
        {
            "name": "preferSpreadSocketToCoreRatio",
            "baseName": "preferSpreadSocketToCoreRatio",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "preferredSubdomain",
            "baseName": "preferredSubdomain",
            "type": "string",
            "format": ""
        },
        {
            "name": "preferredTerminationGracePeriodSeconds",
            "baseName": "preferredTerminationGracePeriodSeconds",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "requirements",
            "baseName": "requirements",
            "type": "V1beta1PreferenceRequirements",
            "format": ""
        },
        {
            "name": "volumes",
            "baseName": "volumes",
            "type": "V1beta1VolumePreferences",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1beta1VirtualMachinePreferenceSpec.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1beta1VirtualMachinePreferenceSpec = V1beta1VirtualMachinePreferenceSpec;
//# sourceMappingURL=V1beta1VirtualMachinePreferenceSpec.js.map