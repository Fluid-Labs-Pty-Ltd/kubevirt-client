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
import { V1FeatureSpinlocks } from '../models/V1FeatureSpinlocks.js';
import { V1FeatureState } from '../models/V1FeatureState.js';
import { V1FeatureVendorID } from '../models/V1FeatureVendorID.js';
import { V1SyNICTimer } from '../models/V1SyNICTimer.js';
/**
* Hyperv specific features.
*/
export declare class V1FeatureHyperv {
    'evmcs'?: V1FeatureState;
    'frequencies'?: V1FeatureState;
    'ipi'?: V1FeatureState;
    'reenlightenment'?: V1FeatureState;
    'relaxed'?: V1FeatureState;
    'reset'?: V1FeatureState;
    'runtime'?: V1FeatureState;
    'spinlocks'?: V1FeatureSpinlocks;
    'synic'?: V1FeatureState;
    'synictimer'?: V1SyNICTimer;
    'tlbflush'?: V1FeatureState;
    'vapic'?: V1FeatureState;
    'vendorid'?: V1FeatureVendorID;
    'vpindex'?: V1FeatureState;
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
//# sourceMappingURL=V1FeatureHyperv.d.ts.map