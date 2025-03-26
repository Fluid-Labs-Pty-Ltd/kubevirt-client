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
import { V1Disk } from '../models/V1Disk.js';
import { V1Filesystem } from '../models/V1Filesystem.js';
import { V1GPU } from '../models/V1GPU.js';
import { V1HostDevice } from '../models/V1HostDevice.js';
import { V1Input } from '../models/V1Input.js';
import { V1Interface } from '../models/V1Interface.js';
import { V1SoundDevice } from '../models/V1SoundDevice.js';
import { V1TPMDevice } from '../models/V1TPMDevice.js';
import { V1Watchdog } from '../models/V1Watchdog.js';
export declare class V1Devices {
    /**
    * Whether to attach the default graphics device or not. VNC will not be available if set to false. Defaults to true.
    */
    'autoattachGraphicsDevice'?: boolean;
    /**
    * Whether to attach an Input Device. Defaults to false.
    */
    'autoattachInputDevice'?: boolean;
    /**
    * Whether to attach the Memory balloon device with default period. Period can be adjusted in virt-config. Defaults to true.
    */
    'autoattachMemBalloon'?: boolean;
    /**
    * Whether to attach a pod network interface. Defaults to true.
    */
    'autoattachPodInterface'?: boolean;
    /**
    * Whether to attach the default virtio-serial console or not. Serial console access will not be available if set to false. Defaults to true.
    */
    'autoattachSerialConsole'?: boolean;
    /**
    * Whether to attach the VSOCK CID to the VM or not. VSOCK access will be available if set to true. Defaults to false.
    */
    'autoattachVSOCK'?: boolean;
    /**
    * Whether or not to enable virtio multi-queue for block devices. Defaults to false.
    */
    'blockMultiQueue'?: boolean;
    /**
    * Represent a subset of client devices that can be accessed by VMI. At the moment only, USB devices using Usbredir\'s library and tooling. Another fit would be a smartcard with libcacard.  The struct is currently empty as there is no immediate request for user-facing APIs. This structure simply turns on USB redirection of UsbClientPassthroughMaxNumberOf devices.
    */
    'clientPassthrough'?: any;
    /**
    * DisableHotplug disabled the ability to hotplug disks.
    */
    'disableHotplug'?: boolean;
    /**
    * Disks describes disks, cdroms and luns which are connected to the vmi.
    */
    'disks'?: Array<V1Disk>;
    'downwardMetrics'?: any;
    /**
    * Filesystems describes filesystem which is connected to the vmi.
    */
    'filesystems'?: Array<V1Filesystem>;
    /**
    * Whether to attach a GPU device to the vmi.
    */
    'gpus'?: Array<V1GPU>;
    /**
    * Whether to attach a host device to the vmi.
    */
    'hostDevices'?: Array<V1HostDevice>;
    /**
    * Inputs describe input devices
    */
    'inputs'?: Array<V1Input>;
    /**
    * Interfaces describe network interfaces which are added to the vmi.
    */
    'interfaces'?: Array<V1Interface>;
    /**
    * Whether to log the auto-attached default serial console or not. Serial console logs will be collect to a file and then streamed from a named `guest-console-log`. Not relevant if autoattachSerialConsole is disabled. Defaults to cluster wide setting on VirtualMachineOptions.
    */
    'logSerialConsole'?: boolean;
    /**
    * If specified, virtual network interfaces configured with a virtio bus will also enable the vhost multiqueue feature for network devices. The number of queues created depends on additional factors of the VirtualMachineInstance, like the number of guest CPUs.
    */
    'networkInterfaceMultiqueue'?: boolean;
    /**
    * Rng represents the random device passed from host
    */
    'rng'?: any;
    'sound'?: V1SoundDevice;
    'tpm'?: V1TPMDevice;
    /**
    * Fall back to legacy virtio 0.9 support if virtio bus is selected on devices. This is helpful for old machines like CentOS6 or RHEL6 which do not understand virtio_non_transitional (virtio 1.0).
    */
    'useVirtioTransitional'?: boolean;
    'watchdog'?: V1Watchdog;
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
//# sourceMappingURL=V1Devices.d.ts.map