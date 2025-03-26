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
import { V1beta1CPUPreferences } from '../models/V1beta1CPUPreferences.js';
import { V1beta1ClockPreferences } from '../models/V1beta1ClockPreferences.js';
import { V1beta1DevicePreferences } from '../models/V1beta1DevicePreferences.js';
import { V1beta1FeaturePreferences } from '../models/V1beta1FeaturePreferences.js';
import { V1beta1FirmwarePreferences } from '../models/V1beta1FirmwarePreferences.js';
import { V1beta1MachinePreferences } from '../models/V1beta1MachinePreferences.js';
import { V1beta1PreferenceRequirements } from '../models/V1beta1PreferenceRequirements.js';
import { V1beta1VolumePreferences } from '../models/V1beta1VolumePreferences.js';
/**
* VirtualMachinePreferenceSpec is a description of the VirtualMachinePreference or VirtualMachineClusterPreference.
*/
export declare class V1beta1VirtualMachinePreferenceSpec {
    /**
    * Optionally defines preferred Annotations to be applied to the VirtualMachineInstance
    */
    'annotations'?: {
        [key: string]: string;
    };
    'clock'?: V1beta1ClockPreferences;
    'cpu'?: V1beta1CPUPreferences;
    'devices'?: V1beta1DevicePreferences;
    'features'?: V1beta1FeaturePreferences;
    'firmware'?: V1beta1FirmwarePreferences;
    'machine'?: V1beta1MachinePreferences;
    /**
    * PreferSpreadSocketToCoreRatio defines the ratio to spread vCPUs between cores and sockets, it defaults to 2.
    */
    'preferSpreadSocketToCoreRatio'?: number;
    /**
    * Subdomain of the VirtualMachineInstance
    */
    'preferredSubdomain'?: string;
    /**
    * Grace period observed after signalling a VirtualMachineInstance to stop after which the VirtualMachineInstance is force terminated.
    */
    'preferredTerminationGracePeriodSeconds'?: number;
    'requirements'?: V1beta1PreferenceRequirements;
    'volumes'?: V1beta1VolumePreferences;
    static readonly discriminator: string | undefined;
    static readonly mapping: {
        [index: string]: string;
    } | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
//# sourceMappingURL=V1beta1VirtualMachinePreferenceSpec.d.ts.map