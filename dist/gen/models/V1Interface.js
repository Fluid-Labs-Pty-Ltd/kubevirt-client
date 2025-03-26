"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1Interface = void 0;
class V1Interface {
    /**
    * If specified, the ACPI index is used to provide network interface device naming, that is stable across changes in PCI addresses assigned to the device. This value is required to be unique across all devices and be between 1 and (16*1024-1).
    */
    'acpiIndex';
    'binding';
    /**
    * BootOrder is an integer value > 0, used to determine ordering of boot devices. Lower values take precedence. Each interface or disk that has a boot order must have a unique value. Interfaces without a boot order are not tried.
    */
    'bootOrder';
    /**
    * InterfaceBridge connects to a given network via a linux bridge.
    */
    'bridge';
    'dhcpOptions';
    /**
    * Interface MAC address. For example: de:ad:00:00:be:af or DE-AD-00-00-BE-AF.
    */
    'macAddress';
    /**
    * DeprecatedInterfaceMacvtap is an alias to the deprecated InterfaceMacvtap that connects to a given network by extending the Kubernetes node\'s L2 networks via a macvtap interface. Deprecated: Removed in v1.3
    */
    'macvtap';
    /**
    * InterfaceMasquerade connects to a given network using netfilter rules to nat the traffic.
    */
    'masquerade';
    /**
    * Interface model. One of: e1000, e1000e, igb, ne2k_pci, pcnet, rtl8139, virtio. Defaults to virtio.
    */
    'model';
    /**
    * Logical name of the interface as well as a reference to the associated networks. Must match the Name of a Network.
    */
    'name';
    /**
    * DeprecatedInterfacePasst is an alias to the deprecated InterfacePasst Deprecated: Removed in v1.3
    */
    'passt';
    /**
    * If specified, the virtual network interface will be placed on the guests pci address with the specified PCI address. For example: 0000:81:01.10
    */
    'pciAddress';
    /**
    * List of ports to be forwarded to the virtual machine.
    */
    'ports';
    /**
    * DeprecatedInterfaceSlirp is an alias to the deprecated InterfaceSlirp that connects to a given network using QEMU user networking mode. Deprecated: Removed in v1.3
    */
    'slirp';
    /**
    * InterfaceSRIOV connects to a given network by passing-through an SR-IOV PCI device via vfio.
    */
    'sriov';
    /**
    * State represents the requested operational state of the interface. The (only) value supported is `absent`, expressing a request to remove the interface.
    */
    'state';
    /**
    * If specified, the virtual network interface address and its tag will be provided to the guest via config drive
    */
    'tag';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "acpiIndex",
            "baseName": "acpiIndex",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "binding",
            "baseName": "binding",
            "type": "V1PluginBinding",
            "format": ""
        },
        {
            "name": "bootOrder",
            "baseName": "bootOrder",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "bridge",
            "baseName": "bridge",
            "type": "any",
            "format": ""
        },
        {
            "name": "dhcpOptions",
            "baseName": "dhcpOptions",
            "type": "V1DHCPOptions",
            "format": ""
        },
        {
            "name": "macAddress",
            "baseName": "macAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "macvtap",
            "baseName": "macvtap",
            "type": "any",
            "format": ""
        },
        {
            "name": "masquerade",
            "baseName": "masquerade",
            "type": "any",
            "format": ""
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "passt",
            "baseName": "passt",
            "type": "any",
            "format": ""
        },
        {
            "name": "pciAddress",
            "baseName": "pciAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "ports",
            "baseName": "ports",
            "type": "Array<V1Port>",
            "format": ""
        },
        {
            "name": "slirp",
            "baseName": "slirp",
            "type": "any",
            "format": ""
        },
        {
            "name": "sriov",
            "baseName": "sriov",
            "type": "any",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string",
            "format": ""
        },
        {
            "name": "tag",
            "baseName": "tag",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1Interface.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1Interface = V1Interface;
//# sourceMappingURL=V1Interface.js.map