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
import type { V1ArchConfiguration } from './V1ArchConfiguration.js';
import type { V1KSMConfiguration } from './V1KSMConfiguration.js';
import type { V1SupportContainerResources } from './V1SupportContainerResources.js';
import type { V1NetworkConfiguration } from './V1NetworkConfiguration.js';
import type { V1SMBiosConfiguration } from './V1SMBiosConfiguration.js';
import type { V1CommonInstancetypesDeployment } from './V1CommonInstancetypesDeployment.js';
import type { V1VirtualMachineOptions } from './V1VirtualMachineOptions.js';
import type { V1MigrationConfiguration } from './V1MigrationConfiguration.js';
import type { V1ReloadableComponentConfiguration } from './V1ReloadableComponentConfiguration.js';
import type { V1TLSConfiguration } from './V1TLSConfiguration.js';
import type { V1SeccompConfiguration } from './V1SeccompConfiguration.js';
import type { V1DeveloperConfiguration } from './V1DeveloperConfiguration.js';
import type { V1PermittedHostDevices } from './V1PermittedHostDevices.js';
import type { V1LiveUpdateConfiguration } from './V1LiveUpdateConfiguration.js';
import type { K8sIoApimachineryPkgApisMetaV1LabelSelector } from './K8sIoApimachineryPkgApisMetaV1LabelSelector.js';
import type { V1InstancetypeConfiguration } from './V1InstancetypeConfiguration.js';
import type { V1MediatedDevicesConfiguration } from './V1MediatedDevicesConfiguration.js';
/**
 * KubeVirtConfiguration holds all kubevirt configurations
 * @export
 * @interface V1KubeVirtConfiguration
 */
export interface V1KubeVirtConfiguration {
    /**
     * AdditionalGuestMemoryOverheadRatio can be used to increase the virtualization infrastructure overhead. This is useful, since the calculation of this overhead is not accurate and cannot be entirely known in advance. The ratio that is being set determines by which factor to increase the overhead calculated by Kubevirt. A higher ratio means that the VMs would be less compromised by node pressures, but would mean that fewer VMs could be scheduled to a node. If not set, the default is 1.
     * @type {string}
     * @memberof V1KubeVirtConfiguration
     */
    additionalGuestMemoryOverheadRatio?: string;
    /**
     *
     * @type {V1ReloadableComponentConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    apiConfiguration?: V1ReloadableComponentConfiguration;
    /**
     *
     * @type {V1ArchConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    architectureConfiguration?: V1ArchConfiguration;
    /**
     *
     * @type {K8sIoApimachineryPkgApisMetaV1LabelSelector}
     * @memberof V1KubeVirtConfiguration
     */
    autoCPULimitNamespaceLabelSelector?: K8sIoApimachineryPkgApisMetaV1LabelSelector;
    /**
     *
     * @type {V1CommonInstancetypesDeployment}
     * @memberof V1KubeVirtConfiguration
     */
    commonInstancetypesDeployment?: V1CommonInstancetypesDeployment;
    /**
     *
     * @type {V1ReloadableComponentConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    controllerConfiguration?: V1ReloadableComponentConfiguration;
    /**
     *
     * @type {string}
     * @memberof V1KubeVirtConfiguration
     */
    cpuModel?: string;
    /**
     * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
     *
     * The serialization format is:
     *
     * ``` <quantity>        ::= <signedNumber><suffix>
     *
     * 	(Note that <suffix> may be empty, from the "" case in <decimalSI>.)
     *
     * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
     *
     * 	(International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
     *
     * <decimalSI>       ::= m | "" | k | M | G | T | P | E
     *
     * 	(Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
     *
     * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber> ```
     *
     * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
     *
     * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
     *
     * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
     *
     * - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible.
     *
     * The sign will be omitted unless the number is negative.
     *
     * Examples:
     *
     * - 1.5 will be serialized as "1500m" - 1.5Gi will be serialized as "1536Mi"
     *
     * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
     *
     * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
     *
     * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
     * @type {string}
     * @memberof V1KubeVirtConfiguration
     */
    cpuRequest?: string;
    /**
     *
     * @type {string}
     * @memberof V1KubeVirtConfiguration
     */
    defaultRuntimeClass?: string;
    /**
     *
     * @type {V1DeveloperConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    developerConfiguration?: V1DeveloperConfiguration;
    /**
     * Deprecated. Use architectureConfiguration instead.
     * @type {Array<string>}
     * @memberof V1KubeVirtConfiguration
     */
    emulatedMachines?: Array<string>;
    /**
     * EvictionStrategy defines at the cluster level if the VirtualMachineInstance should be migrated instead of shut-off in case of a node drain. If the VirtualMachineInstance specific field is set it overrides the cluster level one.
     * @type {string}
     * @memberof V1KubeVirtConfiguration
     */
    evictionStrategy?: string;
    /**
     *
     * @type {V1ReloadableComponentConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    handlerConfiguration?: V1ReloadableComponentConfiguration;
    /**
     * Possible enum values:
     *  - `"Always"` means that kubelet always attempts to pull the latest image. Container will fail If the pull fails.
     *  - `"IfNotPresent"` means that kubelet pulls if the image isn't present on disk. Container will fail if the image isn't present and the pull fails.
     *  - `"Never"` means that kubelet never pulls an image, but only uses a local image. Container will fail if the image isn't present
     * @type {string}
     * @memberof V1KubeVirtConfiguration
     */
    imagePullPolicy?: V1KubeVirtConfigurationImagePullPolicyEnum;
    /**
     *
     * @type {V1InstancetypeConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    instancetype?: V1InstancetypeConfiguration;
    /**
     *
     * @type {V1KSMConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    ksmConfiguration?: V1KSMConfiguration;
    /**
     *
     * @type {V1LiveUpdateConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    liveUpdateConfiguration?: V1LiveUpdateConfiguration;
    /**
     * Deprecated. Use architectureConfiguration instead.
     * @type {string}
     * @memberof V1KubeVirtConfiguration
     */
    machineType?: string;
    /**
     *
     * @type {V1MediatedDevicesConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    mediatedDevicesConfiguration?: V1MediatedDevicesConfiguration;
    /**
     *
     * @type {number}
     * @memberof V1KubeVirtConfiguration
     */
    memBalloonStatsPeriod?: number;
    /**
     *
     * @type {V1MigrationConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    migrations?: V1MigrationConfiguration;
    /**
     *
     * @type {string}
     * @memberof V1KubeVirtConfiguration
     */
    minCPUModel?: string;
    /**
     *
     * @type {V1NetworkConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    network?: V1NetworkConfiguration;
    /**
     *
     * @type {{ [key: string]: boolean; }}
     * @memberof V1KubeVirtConfiguration
     */
    obsoleteCPUModels?: {
        [key: string]: boolean;
    };
    /**
     * Deprecated. Use architectureConfiguration instead.
     * @type {string}
     * @memberof V1KubeVirtConfiguration
     */
    ovmfPath?: string;
    /**
     *
     * @type {V1PermittedHostDevices}
     * @memberof V1KubeVirtConfiguration
     */
    permittedHostDevices?: V1PermittedHostDevices;
    /**
     *
     * @type {V1SeccompConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    seccompConfiguration?: V1SeccompConfiguration;
    /**
     *
     * @type {string}
     * @memberof V1KubeVirtConfiguration
     */
    selinuxLauncherType?: string;
    /**
     *
     * @type {V1SMBiosConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    smbios?: V1SMBiosConfiguration;
    /**
     * SupportContainerResources specifies the resource requirements for various types of supporting containers such as container disks/virtiofs/sidecars and hotplug attachment pods. If omitted a sensible default will be supplied.
     * @type {Array<V1SupportContainerResources>}
     * @memberof V1KubeVirtConfiguration
     */
    supportContainerResources?: Array<V1SupportContainerResources>;
    /**
     * deprecated
     * @type {Array<string>}
     * @memberof V1KubeVirtConfiguration
     */
    supportedGuestAgentVersions?: Array<string>;
    /**
     *
     * @type {V1TLSConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    tlsConfiguration?: V1TLSConfiguration;
    /**
     *
     * @type {number}
     * @memberof V1KubeVirtConfiguration
     */
    virtualMachineInstancesPerNode?: number;
    /**
     *
     * @type {V1VirtualMachineOptions}
     * @memberof V1KubeVirtConfiguration
     */
    virtualMachineOptions?: V1VirtualMachineOptions;
    /**
     * VMRolloutStrategy defines how live-updatable fields, like CPU sockets, memory, tolerations, and affinity, are propagated from a VM to its VMI.
     * @type {string}
     * @memberof V1KubeVirtConfiguration
     */
    vmRolloutStrategy?: string;
    /**
     * VMStateStorageClass is the name of the storage class to use for the PVCs created to preserve VM state, like TPM. The storage class must support RWX in filesystem mode.
     * @type {string}
     * @memberof V1KubeVirtConfiguration
     */
    vmStateStorageClass?: string;
    /**
     *
     * @type {V1ReloadableComponentConfiguration}
     * @memberof V1KubeVirtConfiguration
     */
    webhookConfiguration?: V1ReloadableComponentConfiguration;
}
/**
 * @export
 */
export declare const V1KubeVirtConfigurationImagePullPolicyEnum: {
    readonly Always: "Always";
    readonly IfNotPresent: "IfNotPresent";
    readonly Never: "Never";
};
export type V1KubeVirtConfigurationImagePullPolicyEnum = typeof V1KubeVirtConfigurationImagePullPolicyEnum[keyof typeof V1KubeVirtConfigurationImagePullPolicyEnum];
/**
 * Check if a given object implements the V1KubeVirtConfiguration interface.
 */
export declare function instanceOfV1KubeVirtConfiguration(value: object): value is V1KubeVirtConfiguration;
export declare function V1KubeVirtConfigurationFromJSON(json: any): V1KubeVirtConfiguration;
export declare function V1KubeVirtConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1KubeVirtConfiguration;
export declare function V1KubeVirtConfigurationToJSON(json: any): V1KubeVirtConfiguration;
export declare function V1KubeVirtConfigurationToJSONTyped(value?: V1KubeVirtConfiguration | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1KubeVirtConfiguration.d.ts.map