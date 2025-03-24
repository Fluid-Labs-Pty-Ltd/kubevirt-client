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
 * PciHostDevice represents a host PCI device allowed for passthrough
 * @export
 * @interface V1PciHostDevice
 */
export interface V1PciHostDevice {
    /**
     * If true, KubeVirt will leave the allocation and monitoring to an external device plugin
     * @type {boolean}
     * @memberof V1PciHostDevice
     */
    externalResourceProvider?: boolean;
    /**
     * The vendor_id:product_id tuple of the PCI device
     * @type {string}
     * @memberof V1PciHostDevice
     */
    pciVendorSelector: string;
    /**
     * The name of the resource that is representing the device. Exposed by a device plugin and requested by VMs. Typically of the form vendor.com/product_name
     * @type {string}
     * @memberof V1PciHostDevice
     */
    resourceName: string;
}
/**
 * Check if a given object implements the V1PciHostDevice interface.
 */
export declare function instanceOfV1PciHostDevice(value: object): value is V1PciHostDevice;
export declare function V1PciHostDeviceFromJSON(json: any): V1PciHostDevice;
export declare function V1PciHostDeviceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PciHostDevice;
export declare function V1PciHostDeviceToJSON(json: any): V1PciHostDevice;
export declare function V1PciHostDeviceToJSONTyped(value?: V1PciHostDevice | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1PciHostDevice.d.ts.map