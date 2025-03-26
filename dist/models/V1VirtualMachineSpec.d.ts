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
import { V1DataVolumeTemplateSpec } from '../models/V1DataVolumeTemplateSpec.js';
import { V1InstancetypeMatcher } from '../models/V1InstancetypeMatcher.js';
import { V1PreferenceMatcher } from '../models/V1PreferenceMatcher.js';
import { V1VirtualMachineInstanceTemplateSpec } from '../models/V1VirtualMachineInstanceTemplateSpec.js';
/**
* VirtualMachineSpec describes how the proper VirtualMachine should look like
*/
export declare class V1VirtualMachineSpec {
    /**
    * dataVolumeTemplates is a list of dataVolumes that the VirtualMachineInstance template can reference. DataVolumes in this list are dynamically created for the VirtualMachine and are tied to the VirtualMachine\'s life-cycle.
    */
    'dataVolumeTemplates'?: Array<V1DataVolumeTemplateSpec>;
    'instancetype'?: V1InstancetypeMatcher;
    'preference'?: V1PreferenceMatcher;
    /**
    * Running state indicates the requested running state of the VirtualMachineInstance mutually exclusive with Running
    */
    'runStrategy'?: string;
    /**
    * Running controls whether the associatied VirtualMachineInstance is created or not Mutually exclusive with RunStrategy Deprecated: VirtualMachineInstance field \"Running\" is now deprecated, please use RunStrategy instead.
    */
    'running'?: boolean;
    'template': V1VirtualMachineInstanceTemplateSpec;
    /**
    * UpdateVolumesStrategy is the strategy to apply on volumes updates
    */
    'updateVolumesStrategy'?: string;
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
//# sourceMappingURL=V1VirtualMachineSpec.d.ts.map