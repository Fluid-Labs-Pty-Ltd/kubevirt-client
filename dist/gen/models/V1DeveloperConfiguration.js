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
exports.V1DeveloperConfiguration = void 0;
/**
* DeveloperConfiguration holds developer options
*/
class V1DeveloperConfiguration {
    /**
    * For each requested virtual CPU, CPUAllocationRatio defines how much physical CPU to request per VMI from the hosting node. The value is in fraction of a CPU thread (or core on non-hyperthreaded nodes). For example, a value of 1 means 1 physical CPU thread per VMI CPU thread. A value of 100 would be 1% of a physical thread allocated for each requested VMI thread. This option has no effect on VMIs that request dedicated CPUs. More information at: https://kubevirt.io/user-guide/operations/node_overcommit/#node-cpu-allocation-ratio Defaults to 10
    */
    'cpuAllocationRatio';
    'diskVerification';
    /**
    * FeatureGates is the list of experimental features to enable. Defaults to none
    */
    'featureGates';
    'logVerbosity';
    /**
    * MemoryOvercommit is the percentage of memory we want to give VMIs compared to the amount given to its parent pod (virt-launcher). For example, a value of 102 means the VMI will \"see\" 2% more memory than its parent pod. Values under 100 are effectively \"undercommits\". Overcommits can lead to memory exhaustion, which in turn can lead to crashes. Use carefully. Defaults to 100
    */
    'memoryOvercommit';
    /**
    * Allow overriding the automatically determined minimum TSC frequency of the cluster and fixate the minimum to this frequency.
    */
    'minimumClusterTSCFrequency';
    /**
    * MinimumReservePVCBytes is the amount of space, in bytes, to leave unused on disks. Defaults to 131072 (128KiB)
    */
    'minimumReservePVCBytes';
    /**
    * NodeSelectors allows restricting VMI creation to nodes that match a set of labels. Defaults to none
    */
    'nodeSelectors';
    /**
    * LessPVCSpaceToleration determines how much smaller, in percentage, disk PVCs are allowed to be compared to the requested size (to account for various overheads). Defaults to 10
    */
    'pvcTolerateLessSpaceUpToPercent';
    /**
    * UseEmulation can be set to true to allow fallback to software emulation in case hardware-assisted emulation is not available. Defaults to false
    */
    'useEmulation';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "cpuAllocationRatio",
            "baseName": "cpuAllocationRatio",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "diskVerification",
            "baseName": "diskVerification",
            "type": "V1DiskVerification",
            "format": ""
        },
        {
            "name": "featureGates",
            "baseName": "featureGates",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "logVerbosity",
            "baseName": "logVerbosity",
            "type": "V1LogVerbosity",
            "format": ""
        },
        {
            "name": "memoryOvercommit",
            "baseName": "memoryOvercommit",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "minimumClusterTSCFrequency",
            "baseName": "minimumClusterTSCFrequency",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "minimumReservePVCBytes",
            "baseName": "minimumReservePVCBytes",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "nodeSelectors",
            "baseName": "nodeSelectors",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "pvcTolerateLessSpaceUpToPercent",
            "baseName": "pvcTolerateLessSpaceUpToPercent",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "useEmulation",
            "baseName": "useEmulation",
            "type": "boolean",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1DeveloperConfiguration.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1DeveloperConfiguration = V1DeveloperConfiguration;
//# sourceMappingURL=V1DeveloperConfiguration.js.map