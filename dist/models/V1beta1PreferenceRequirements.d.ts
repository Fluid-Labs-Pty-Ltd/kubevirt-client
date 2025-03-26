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
import { V1beta1CPUPreferenceRequirement } from '../models/V1beta1CPUPreferenceRequirement.js';
import { V1beta1MemoryPreferenceRequirement } from '../models/V1beta1MemoryPreferenceRequirement.js';
export declare class V1beta1PreferenceRequirements {
    'cpu'?: V1beta1CPUPreferenceRequirement;
    'memory'?: V1beta1MemoryPreferenceRequirement;
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
//# sourceMappingURL=V1beta1PreferenceRequirements.d.ts.map