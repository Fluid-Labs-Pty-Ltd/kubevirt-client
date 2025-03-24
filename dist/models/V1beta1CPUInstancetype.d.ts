/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { V1NUMA } from './V1NUMA.js';
import type { V1Realtime } from './V1Realtime.js';
/**
 * CPUInstancetype contains the CPU related configuration of a given VirtualMachineInstancetypeSpec.
 *
 * Guest is a required attribute and defines the number of vCPUs to be exposed to the guest by the instancetype.
 * @export
 * @interface V1beta1CPUInstancetype
 */
export interface V1beta1CPUInstancetype {
    /**
     * DedicatedCPUPlacement requests the scheduler to place the VirtualMachineInstance on a node with enough dedicated pCPUs and pin the vCPUs to it.
     * @type {boolean}
     * @memberof V1beta1CPUInstancetype
     */
    dedicatedCPUPlacement?: boolean;
    /**
     * Required number of vCPUs to expose to the guest.
     *
     * The resulting CPU topology being derived from the optional PreferredCPUTopology attribute of CPUPreferences that itself defaults to PreferSockets.
     * @type {number}
     * @memberof V1beta1CPUInstancetype
     */
    guest: number;
    /**
     * IsolateEmulatorThread requests one more dedicated pCPU to be allocated for the VMI to place the emulator thread on it.
     * @type {boolean}
     * @memberof V1beta1CPUInstancetype
     */
    isolateEmulatorThread?: boolean;
    /**
     * MaxSockets specifies the maximum amount of sockets that can be hotplugged
     * @type {number}
     * @memberof V1beta1CPUInstancetype
     */
    maxSockets?: number;
    /**
     * Model specifies the CPU model inside the VMI. List of available models https://github.com/libvirt/libvirt/tree/master/src/cpu_map. It is possible to specify special cases like "host-passthrough" to get the same CPU as the node and "host-model" to get CPU closest to the node one. Defaults to host-model.
     * @type {string}
     * @memberof V1beta1CPUInstancetype
     */
    model?: string;
    /**
     *
     * @type {V1NUMA}
     * @memberof V1beta1CPUInstancetype
     */
    numa?: V1NUMA;
    /**
     *
     * @type {V1Realtime}
     * @memberof V1beta1CPUInstancetype
     */
    realtime?: V1Realtime;
}
/**
 * Check if a given object implements the V1beta1CPUInstancetype interface.
 */
export declare function instanceOfV1beta1CPUInstancetype(value: object): value is V1beta1CPUInstancetype;
export declare function V1beta1CPUInstancetypeFromJSON(json: any): V1beta1CPUInstancetype;
export declare function V1beta1CPUInstancetypeFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1beta1CPUInstancetype;
export declare function V1beta1CPUInstancetypeToJSON(json: any): V1beta1CPUInstancetype;
export declare function V1beta1CPUInstancetypeToJSONTyped(value?: V1beta1CPUInstancetype | null, _ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1beta1CPUInstancetype.d.ts.map