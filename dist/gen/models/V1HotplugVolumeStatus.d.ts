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
/**
* HotplugVolumeStatus represents the hotplug status of the volume
*/
export declare class V1HotplugVolumeStatus {
    /**
    * AttachPodName is the name of the pod used to attach the volume to the node.
    */
    'attachPodName'?: string;
    /**
    * AttachPodUID is the UID of the pod used to attach the volume to the node.
    */
    'attachPodUID'?: string;
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
//# sourceMappingURL=V1HotplugVolumeStatus.d.ts.map