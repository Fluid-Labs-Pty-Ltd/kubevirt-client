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
exports.V1beta1DevicePreferences = void 0;
/**
* DevicePreferences contains various optional Device preferences.
*/
class V1beta1DevicePreferences {
    /**
    * PreferredAutoattachGraphicsDevice optionally defines the preferred value of AutoattachGraphicsDevice
    */
    'preferredAutoattachGraphicsDevice';
    /**
    * PreferredAutoattachInputDevice optionally defines the preferred value of AutoattachInputDevice
    */
    'preferredAutoattachInputDevice';
    /**
    * PreferredAutoattachMemBalloon optionally defines the preferred value of AutoattachMemBalloon
    */
    'preferredAutoattachMemBalloon';
    /**
    * PreferredAutoattachPodInterface optionally defines the preferred value of AutoattachPodInterface
    */
    'preferredAutoattachPodInterface';
    /**
    * PreferredAutoattachSerialConsole optionally defines the preferred value of AutoattachSerialConsole
    */
    'preferredAutoattachSerialConsole';
    /**
    * PreferredBlockMultiQueue optionally enables the vhost multiqueue feature for virtio disks.
    */
    'preferredBlockMultiQueue';
    /**
    * PreferredCdromBus optionally defines the preferred bus for Cdrom Disk devices.
    */
    'preferredCdromBus';
    /**
    * PreferredDisableHotplug optionally defines the preferred value of DisableHotplug
    */
    'preferredDisableHotplug';
    'preferredDiskBlockSize';
    /**
    * PreferredDiskBus optionally defines the preferred bus for Disk Disk devices.
    */
    'preferredDiskBus';
    /**
    * PreferredCache optionally defines the DriverCache to be used by Disk devices.
    */
    'preferredDiskCache';
    /**
    * PreferredDedicatedIoThread optionally enables dedicated IO threads for Disk devices using the virtio bus.
    */
    'preferredDiskDedicatedIoThread';
    /**
    * PreferredIo optionally defines the QEMU disk IO mode to be used by Disk devices.
    */
    'preferredDiskIO';
    /**
    * PreferredInputBus optionally defines the preferred bus for Input devices.
    */
    'preferredInputBus';
    /**
    * PreferredInputType optionally defines the preferred type for Input devices.
    */
    'preferredInputType';
    /**
    * InterfaceMasquerade connects to a given network using netfilter rules to nat the traffic.
    */
    'preferredInterfaceMasquerade';
    /**
    * PreferredInterfaceModel optionally defines the preferred model to be used by Interface devices.
    */
    'preferredInterfaceModel';
    /**
    * PreferredLunBus optionally defines the preferred bus for Lun Disk devices.
    */
    'preferredLunBus';
    /**
    * PreferredNetworkInterfaceMultiQueue optionally enables the vhost multiqueue feature for virtio interfaces.
    */
    'preferredNetworkInterfaceMultiQueue';
    /**
    * Rng represents the random device passed from host
    */
    'preferredRng';
    /**
    * PreferredSoundModel optionally defines the preferred model for Sound devices.
    */
    'preferredSoundModel';
    'preferredTPM';
    /**
    * PreferredUseVirtioTransitional optionally defines the preferred value of UseVirtioTransitional
    */
    'preferredUseVirtioTransitional';
    'preferredVirtualGPUOptions';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "preferredAutoattachGraphicsDevice",
            "baseName": "preferredAutoattachGraphicsDevice",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "preferredAutoattachInputDevice",
            "baseName": "preferredAutoattachInputDevice",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "preferredAutoattachMemBalloon",
            "baseName": "preferredAutoattachMemBalloon",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "preferredAutoattachPodInterface",
            "baseName": "preferredAutoattachPodInterface",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "preferredAutoattachSerialConsole",
            "baseName": "preferredAutoattachSerialConsole",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "preferredBlockMultiQueue",
            "baseName": "preferredBlockMultiQueue",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "preferredCdromBus",
            "baseName": "preferredCdromBus",
            "type": "string",
            "format": ""
        },
        {
            "name": "preferredDisableHotplug",
            "baseName": "preferredDisableHotplug",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "preferredDiskBlockSize",
            "baseName": "preferredDiskBlockSize",
            "type": "V1BlockSize",
            "format": ""
        },
        {
            "name": "preferredDiskBus",
            "baseName": "preferredDiskBus",
            "type": "string",
            "format": ""
        },
        {
            "name": "preferredDiskCache",
            "baseName": "preferredDiskCache",
            "type": "string",
            "format": ""
        },
        {
            "name": "preferredDiskDedicatedIoThread",
            "baseName": "preferredDiskDedicatedIoThread",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "preferredDiskIO",
            "baseName": "preferredDiskIO",
            "type": "string",
            "format": ""
        },
        {
            "name": "preferredInputBus",
            "baseName": "preferredInputBus",
            "type": "string",
            "format": ""
        },
        {
            "name": "preferredInputType",
            "baseName": "preferredInputType",
            "type": "string",
            "format": ""
        },
        {
            "name": "preferredInterfaceMasquerade",
            "baseName": "preferredInterfaceMasquerade",
            "type": "any",
            "format": ""
        },
        {
            "name": "preferredInterfaceModel",
            "baseName": "preferredInterfaceModel",
            "type": "string",
            "format": ""
        },
        {
            "name": "preferredLunBus",
            "baseName": "preferredLunBus",
            "type": "string",
            "format": ""
        },
        {
            "name": "preferredNetworkInterfaceMultiQueue",
            "baseName": "preferredNetworkInterfaceMultiQueue",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "preferredRng",
            "baseName": "preferredRng",
            "type": "any",
            "format": ""
        },
        {
            "name": "preferredSoundModel",
            "baseName": "preferredSoundModel",
            "type": "string",
            "format": ""
        },
        {
            "name": "preferredTPM",
            "baseName": "preferredTPM",
            "type": "V1TPMDevice",
            "format": ""
        },
        {
            "name": "preferredUseVirtioTransitional",
            "baseName": "preferredUseVirtioTransitional",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "preferredVirtualGPUOptions",
            "baseName": "preferredVirtualGPUOptions",
            "type": "V1VGPUOptions",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1beta1DevicePreferences.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1beta1DevicePreferences = V1beta1DevicePreferences;
//# sourceMappingURL=V1beta1DevicePreferences.js.map