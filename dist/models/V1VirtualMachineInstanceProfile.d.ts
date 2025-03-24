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
import type { V1CustomProfile } from './V1CustomProfile.js';
/**
 *
 * @export
 * @interface V1VirtualMachineInstanceProfile
 */
export interface V1VirtualMachineInstanceProfile {
    /**
     *
     * @type {V1CustomProfile}
     * @memberof V1VirtualMachineInstanceProfile
     */
    customProfile?: V1CustomProfile;
}
/**
 * Check if a given object implements the V1VirtualMachineInstanceProfile interface.
 */
export declare function instanceOfV1VirtualMachineInstanceProfile(value: object): value is V1VirtualMachineInstanceProfile;
export declare function V1VirtualMachineInstanceProfileFromJSON(json: any): V1VirtualMachineInstanceProfile;
export declare function V1VirtualMachineInstanceProfileFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1VirtualMachineInstanceProfile;
export declare function V1VirtualMachineInstanceProfileToJSON(json: any): V1VirtualMachineInstanceProfile;
export declare function V1VirtualMachineInstanceProfileToJSONTyped(value?: V1VirtualMachineInstanceProfile | null, _ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1VirtualMachineInstanceProfile.d.ts.map