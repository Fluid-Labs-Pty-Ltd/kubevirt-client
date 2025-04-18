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
import { V1DataVolumeSource } from '../models/V1DataVolumeSource.js';
import { V1PersistentVolumeClaimVolumeSource } from '../models/V1PersistentVolumeClaimVolumeSource.js';
/**
* HotplugVolumeSource Represents the source of a volume to mount which are capable of being hotplugged on a live running VMI. Only one of its members may be specified.
*/
export declare class V1HotplugVolumeSource {
    'dataVolume'?: V1DataVolumeSource;
    'persistentVolumeClaim'?: V1PersistentVolumeClaimVolumeSource;
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
//# sourceMappingURL=V1HotplugVolumeSource.d.ts.map