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
 * VirtualMachineMemoryDumpRequest represent the memory dump request phase and info
 * @export
 * @interface V1VirtualMachineMemoryDumpRequest
 */
export interface V1VirtualMachineMemoryDumpRequest {
    /**
     * ClaimName is the name of the pvc that will contain the memory dump
     * @type {string}
     * @memberof V1VirtualMachineMemoryDumpRequest
     */
    claimName: string;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {string}
     * @memberof V1VirtualMachineMemoryDumpRequest
     */
    endTimestamp?: string;
    /**
     * FileName represents the name of the output file
     * @type {string}
     * @memberof V1VirtualMachineMemoryDumpRequest
     */
    fileName?: string;
    /**
     * Message is a detailed message about failure of the memory dump
     * @type {string}
     * @memberof V1VirtualMachineMemoryDumpRequest
     */
    message?: string;
    /**
     * Phase represents the memory dump phase
     * @type {string}
     * @memberof V1VirtualMachineMemoryDumpRequest
     */
    phase: string;
    /**
     * Remove represents request of dissociating the memory dump pvc
     * @type {boolean}
     * @memberof V1VirtualMachineMemoryDumpRequest
     */
    remove?: boolean;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {string}
     * @memberof V1VirtualMachineMemoryDumpRequest
     */
    startTimestamp?: string;
}
/**
 * Check if a given object implements the V1VirtualMachineMemoryDumpRequest interface.
 */
export declare function instanceOfV1VirtualMachineMemoryDumpRequest(value: object): value is V1VirtualMachineMemoryDumpRequest;
export declare function V1VirtualMachineMemoryDumpRequestFromJSON(json: any): V1VirtualMachineMemoryDumpRequest;
export declare function V1VirtualMachineMemoryDumpRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VirtualMachineMemoryDumpRequest;
export declare function V1VirtualMachineMemoryDumpRequestToJSON(json: any): V1VirtualMachineMemoryDumpRequest;
export declare function V1VirtualMachineMemoryDumpRequestToJSONTyped(value?: V1VirtualMachineMemoryDumpRequest | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1VirtualMachineMemoryDumpRequest.d.ts.map