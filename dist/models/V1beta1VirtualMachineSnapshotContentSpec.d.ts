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
import type { V1beta1VolumeBackup } from './V1beta1VolumeBackup.js';
import type { V1beta1SourceSpec } from './V1beta1SourceSpec.js';
/**
 * VirtualMachineSnapshotContentSpec is the spec for a VirtualMachineSnapshotContent resource
 * @export
 * @interface V1beta1VirtualMachineSnapshotContentSpec
 */
export interface V1beta1VirtualMachineSnapshotContentSpec {
    /**
     *
     * @type {V1beta1SourceSpec}
     * @memberof V1beta1VirtualMachineSnapshotContentSpec
     */
    source: V1beta1SourceSpec;
    /**
     *
     * @type {string}
     * @memberof V1beta1VirtualMachineSnapshotContentSpec
     */
    virtualMachineSnapshotName?: string;
    /**
     *
     * @type {Array<V1beta1VolumeBackup>}
     * @memberof V1beta1VirtualMachineSnapshotContentSpec
     */
    volumeBackups?: Array<V1beta1VolumeBackup>;
}
/**
 * Check if a given object implements the V1beta1VirtualMachineSnapshotContentSpec interface.
 */
export declare function instanceOfV1beta1VirtualMachineSnapshotContentSpec(value: object): value is V1beta1VirtualMachineSnapshotContentSpec;
export declare function V1beta1VirtualMachineSnapshotContentSpecFromJSON(json: any): V1beta1VirtualMachineSnapshotContentSpec;
export declare function V1beta1VirtualMachineSnapshotContentSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1VirtualMachineSnapshotContentSpec;
export declare function V1beta1VirtualMachineSnapshotContentSpecToJSON(json: any): V1beta1VirtualMachineSnapshotContentSpec;
export declare function V1beta1VirtualMachineSnapshotContentSpecToJSONTyped(value?: V1beta1VirtualMachineSnapshotContentSpec | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1beta1VirtualMachineSnapshotContentSpec.d.ts.map