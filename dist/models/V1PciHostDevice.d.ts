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
* PciHostDevice represents a host PCI device allowed for passthrough
*/
export declare class V1PciHostDevice {
    /**
    * If true, KubeVirt will leave the allocation and monitoring to an external device plugin
    */
    'externalResourceProvider'?: boolean;
    /**
    * The vendor_id:product_id tuple of the PCI device
    */
    'pciVendorSelector': string;
    /**
    * The name of the resource that is representing the device. Exposed by a device plugin and requested by VMs. Typically of the form vendor.com/product_name
    */
    'resourceName': string;
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
//# sourceMappingURL=V1PciHostDevice.d.ts.map