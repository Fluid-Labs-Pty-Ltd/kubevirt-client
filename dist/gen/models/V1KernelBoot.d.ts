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
import { V1KernelBootContainer } from '../models/V1KernelBootContainer.js';
/**
* Represents the firmware blob used to assist in the kernel boot process. Used for setting the kernel, initrd and command line arguments
*/
export declare class V1KernelBoot {
    'container'?: V1KernelBootContainer;
    /**
    * Arguments to be passed to the kernel at boot time
    */
    'kernelArgs'?: string;
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
//# sourceMappingURL=V1KernelBoot.d.ts.map