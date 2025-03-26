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
* CPUTopology allows specifying the amount of cores, sockets and threads.
*/
export declare class V1CPUTopology {
    /**
    * Cores specifies the number of cores inside the vmi. Must be a value greater or equal 1.
    */
    'cores'?: number;
    /**
    * Sockets specifies the number of sockets inside the vmi. Must be a value greater or equal 1.
    */
    'sockets'?: number;
    /**
    * Threads specifies the number of threads inside the vmi. Must be a value greater or equal 1.
    */
    'threads'?: number;
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
//# sourceMappingURL=V1CPUTopology.d.ts.map