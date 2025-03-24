/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Hugepages allow to use hugepages for the VirtualMachineInstance instead of regular memory.
 * @export
 * @interface V1Hugepages
 */
export interface V1Hugepages {
    /**
     * PageSize specifies the hugepage size, for x86_64 architecture valid values are 1Gi and 2Mi.
     * @type {string}
     * @memberof V1Hugepages
     */
    pageSize?: string;
}
/**
 * Check if a given object implements the V1Hugepages interface.
 */
export declare function instanceOfV1Hugepages(value: object): value is V1Hugepages;
export declare function V1HugepagesFromJSON(json: any): V1Hugepages;
export declare function V1HugepagesFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1Hugepages;
export declare function V1HugepagesToJSON(json: any): V1Hugepages;
export declare function V1HugepagesToJSONTyped(value?: V1Hugepages | null, _ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1Hugepages.d.ts.map