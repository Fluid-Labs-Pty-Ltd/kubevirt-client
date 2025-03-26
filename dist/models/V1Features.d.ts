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
import { V1FeatureAPIC } from '../models/V1FeatureAPIC.js';
import { V1FeatureHyperv } from '../models/V1FeatureHyperv.js';
import { V1FeatureKVM } from '../models/V1FeatureKVM.js';
import { V1FeatureState } from '../models/V1FeatureState.js';
import { V1HyperVPassthrough } from '../models/V1HyperVPassthrough.js';
export declare class V1Features {
    'acpi'?: V1FeatureState;
    'apic'?: V1FeatureAPIC;
    'hyperv'?: V1FeatureHyperv;
    'hypervPassthrough'?: V1HyperVPassthrough;
    'kvm'?: V1FeatureKVM;
    'pvspinlock'?: V1FeatureState;
    'smm'?: V1FeatureState;
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
//# sourceMappingURL=V1Features.d.ts.map