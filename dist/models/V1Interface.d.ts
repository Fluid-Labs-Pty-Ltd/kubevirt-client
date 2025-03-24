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
import type { V1DHCPOptions } from './V1DHCPOptions.js';
import type { V1PluginBinding } from './V1PluginBinding.js';
import type { V1Port } from './V1Port.js';
/**
 *
 * @export
 * @interface V1Interface
 */
export interface V1Interface {
    /**
     * If specified, the ACPI index is used to provide network interface device naming, that is stable across changes in PCI addresses assigned to the device. This value is required to be unique across all devices and be between 1 and (16*1024-1).
     * @type {number}
     * @memberof V1Interface
     */
    acpiIndex?: number;
    /**
     *
     * @type {V1PluginBinding}
     * @memberof V1Interface
     */
    binding?: V1PluginBinding;
    /**
     * BootOrder is an integer value > 0, used to determine ordering of boot devices. Lower values take precedence. Each interface or disk that has a boot order must have a unique value. Interfaces without a boot order are not tried.
     * @type {number}
     * @memberof V1Interface
     */
    bootOrder?: number;
    /**
     * InterfaceBridge connects to a given network via a linux bridge.
     * @type {object}
     * @memberof V1Interface
     */
    bridge?: object;
    /**
     *
     * @type {V1DHCPOptions}
     * @memberof V1Interface
     */
    dhcpOptions?: V1DHCPOptions;
    /**
     * Interface MAC address. For example: de:ad:00:00:be:af or DE-AD-00-00-BE-AF.
     * @type {string}
     * @memberof V1Interface
     */
    macAddress?: string;
    /**
     * DeprecatedInterfaceMacvtap is an alias to the deprecated InterfaceMacvtap that connects to a given network by extending the Kubernetes node's L2 networks via a macvtap interface. Deprecated: Removed in v1.3
     * @type {object}
     * @memberof V1Interface
     */
    macvtap?: object;
    /**
     * InterfaceMasquerade connects to a given network using netfilter rules to nat the traffic.
     * @type {object}
     * @memberof V1Interface
     */
    masquerade?: object;
    /**
     * Interface model. One of: e1000, e1000e, igb, ne2k_pci, pcnet, rtl8139, virtio. Defaults to virtio.
     * @type {string}
     * @memberof V1Interface
     */
    model?: string;
    /**
     * Logical name of the interface as well as a reference to the associated networks. Must match the Name of a Network.
     * @type {string}
     * @memberof V1Interface
     */
    name: string;
    /**
     * DeprecatedInterfacePasst is an alias to the deprecated InterfacePasst Deprecated: Removed in v1.3
     * @type {object}
     * @memberof V1Interface
     */
    passt?: object;
    /**
     * If specified, the virtual network interface will be placed on the guests pci address with the specified PCI address. For example: 0000:81:01.10
     * @type {string}
     * @memberof V1Interface
     */
    pciAddress?: string;
    /**
     * List of ports to be forwarded to the virtual machine.
     * @type {Array<V1Port>}
     * @memberof V1Interface
     */
    ports?: Array<V1Port>;
    /**
     * DeprecatedInterfaceSlirp is an alias to the deprecated InterfaceSlirp that connects to a given network using QEMU user networking mode. Deprecated: Removed in v1.3
     * @type {object}
     * @memberof V1Interface
     */
    slirp?: object;
    /**
     * InterfaceSRIOV connects to a given network by passing-through an SR-IOV PCI device via vfio.
     * @type {object}
     * @memberof V1Interface
     */
    sriov?: object;
    /**
     * State represents the requested operational state of the interface. The (only) value supported is `absent`, expressing a request to remove the interface.
     * @type {string}
     * @memberof V1Interface
     */
    state?: string;
    /**
     * If specified, the virtual network interface address and its tag will be provided to the guest via config drive
     * @type {string}
     * @memberof V1Interface
     */
    tag?: string;
}
/**
 * Check if a given object implements the V1Interface interface.
 */
export declare function instanceOfV1Interface(value: object): value is V1Interface;
export declare function V1InterfaceFromJSON(json: any): V1Interface;
export declare function V1InterfaceFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1Interface;
export declare function V1InterfaceToJSON(json: any): V1Interface;
export declare function V1InterfaceToJSONTyped(value?: V1Interface | null, _ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1Interface.d.ts.map