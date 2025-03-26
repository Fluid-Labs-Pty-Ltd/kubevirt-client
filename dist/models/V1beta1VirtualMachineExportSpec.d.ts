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
import { K8sIoApiCoreV1TypedLocalObjectReference } from '../models/K8sIoApiCoreV1TypedLocalObjectReference.js';
/**
* VirtualMachineExportSpec is the spec for a VirtualMachineExport resource
*/
export declare class V1beta1VirtualMachineExportSpec {
    'source': K8sIoApiCoreV1TypedLocalObjectReference;
    /**
    * TokenSecretRef is the name of the custom-defined secret that contains the token used by the export server pod
    */
    'tokenSecretRef'?: string;
    /**
    * Duration is a wrapper around time.Duration which supports correct marshaling to YAML and JSON. In particular, it marshals into strings, which can be used as map keys in json.
    */
    'ttlDuration'?: string;
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
//# sourceMappingURL=V1beta1VirtualMachineExportSpec.d.ts.map