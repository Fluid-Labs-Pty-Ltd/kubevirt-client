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
import { V1CPUFeature } from '../models/V1CPUFeature.js';
import { V1beta1SpreadOptions } from '../models/V1beta1SpreadOptions.js';
/**
* CPUPreferences contains various optional CPU preferences.
*/
export declare class V1beta1CPUPreferences {
    /**
    * PreferredCPUFeatures optionally defines a slice of preferred CPU features.
    */
    'preferredCPUFeatures'?: Array<V1CPUFeature>;
    /**
    * PreferredCPUTopology optionally defines the preferred guest visible CPU topology, defaults to PreferSockets.
    */
    'preferredCPUTopology'?: string;
    'spreadOptions'?: V1beta1SpreadOptions;
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
//# sourceMappingURL=V1beta1CPUPreferences.d.ts.map