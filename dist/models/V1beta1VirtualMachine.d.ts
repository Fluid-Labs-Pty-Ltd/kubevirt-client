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
import { K8sIoApimachineryPkgApisMetaV1ObjectMeta } from '../models/K8sIoApimachineryPkgApisMetaV1ObjectMeta.js';
import { V1VirtualMachineSpec } from '../models/V1VirtualMachineSpec.js';
import { V1VirtualMachineStatus } from '../models/V1VirtualMachineStatus.js';
export declare class V1beta1VirtualMachine {
    'metadata'?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
    'spec'?: V1VirtualMachineSpec;
    'status'?: V1VirtualMachineStatus;
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
//# sourceMappingURL=V1beta1VirtualMachine.d.ts.map