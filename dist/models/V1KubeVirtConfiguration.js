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
* KubeVirtConfiguration holds all kubevirt configurations
*/
export class V1KubeVirtConfiguration {
    /**
    * AdditionalGuestMemoryOverheadRatio can be used to increase the virtualization infrastructure overhead. This is useful, since the calculation of this overhead is not accurate and cannot be entirely known in advance. The ratio that is being set determines by which factor to increase the overhead calculated by Kubevirt. A higher ratio means that the VMs would be less compromised by node pressures, but would mean that fewer VMs could be scheduled to a node. If not set, the default is 1.
    */
    'additionalGuestMemoryOverheadRatio';
    'apiConfiguration';
    'architectureConfiguration';
    'autoCPULimitNamespaceLabelSelector';
    'commonInstancetypesDeployment';
    'controllerConfiguration';
    'cpuModel';
    /**
    * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.  The serialization format is:  ``` <quantity>        ::= <signedNumber><suffix>   (Note that <suffix> may be empty, from the \"\" case in <decimalSI>.)  <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= \"+\" | \"-\" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei   (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)  <decimalSI>       ::= m | \"\" | k | M | G | T | P | E   (Note that 1024 = 1Ki but 1000 = 1k; I didn\'t choose the capitalization.)  <decimalExponent> ::= \"e\" <signedNumber> | \"E\" <signedNumber> ```  No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.  When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.  Before serializing, Quantity will be put in \"canonical form\". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:  - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible.  The sign will be omitted unless the number is negative.  Examples:  - 1.5 will be serialized as \"1500m\" - 1.5Gi will be serialized as \"1536Mi\"  Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.  Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don\'t diff.)  This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
    */
    'cpuRequest';
    'defaultRuntimeClass';
    'developerConfiguration';
    /**
    * Deprecated. Use architectureConfiguration instead.
    */
    'emulatedMachines';
    /**
    * EvictionStrategy defines at the cluster level if the VirtualMachineInstance should be migrated instead of shut-off in case of a node drain. If the VirtualMachineInstance specific field is set it overrides the cluster level one.
    */
    'evictionStrategy';
    'handlerConfiguration';
    /**
    * Possible enum values:  - `\"Always\"` means that kubelet always attempts to pull the latest image. Container will fail If the pull fails.  - `\"IfNotPresent\"` means that kubelet pulls if the image isn\'t present on disk. Container will fail if the image isn\'t present and the pull fails.  - `\"Never\"` means that kubelet never pulls an image, but only uses a local image. Container will fail if the image isn\'t present
    */
    'imagePullPolicy';
    'instancetype';
    'ksmConfiguration';
    'liveUpdateConfiguration';
    /**
    * Deprecated. Use architectureConfiguration instead.
    */
    'machineType';
    'mediatedDevicesConfiguration';
    'memBalloonStatsPeriod';
    'migrations';
    'minCPUModel';
    'network';
    'obsoleteCPUModels';
    /**
    * Deprecated. Use architectureConfiguration instead.
    */
    'ovmfPath';
    'permittedHostDevices';
    'seccompConfiguration';
    'selinuxLauncherType';
    'smbios';
    /**
    * SupportContainerResources specifies the resource requirements for various types of supporting containers such as container disks/virtiofs/sidecars and hotplug attachment pods. If omitted a sensible default will be supplied.
    */
    'supportContainerResources';
    /**
    * deprecated
    */
    'supportedGuestAgentVersions';
    'tlsConfiguration';
    'virtualMachineInstancesPerNode';
    'virtualMachineOptions';
    /**
    * VMRolloutStrategy defines how live-updatable fields, like CPU sockets, memory, tolerations, and affinity, are propagated from a VM to its VMI.
    */
    'vmRolloutStrategy';
    /**
    * VMStateStorageClass is the name of the storage class to use for the PVCs created to preserve VM state, like TPM. The storage class must support RWX in filesystem mode.
    */
    'vmStateStorageClass';
    'webhookConfiguration';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "additionalGuestMemoryOverheadRatio",
            "baseName": "additionalGuestMemoryOverheadRatio",
            "type": "string",
            "format": ""
        },
        {
            "name": "apiConfiguration",
            "baseName": "apiConfiguration",
            "type": "V1ReloadableComponentConfiguration",
            "format": ""
        },
        {
            "name": "architectureConfiguration",
            "baseName": "architectureConfiguration",
            "type": "V1ArchConfiguration",
            "format": ""
        },
        {
            "name": "autoCPULimitNamespaceLabelSelector",
            "baseName": "autoCPULimitNamespaceLabelSelector",
            "type": "K8sIoApimachineryPkgApisMetaV1LabelSelector",
            "format": ""
        },
        {
            "name": "commonInstancetypesDeployment",
            "baseName": "commonInstancetypesDeployment",
            "type": "V1CommonInstancetypesDeployment",
            "format": ""
        },
        {
            "name": "controllerConfiguration",
            "baseName": "controllerConfiguration",
            "type": "V1ReloadableComponentConfiguration",
            "format": ""
        },
        {
            "name": "cpuModel",
            "baseName": "cpuModel",
            "type": "string",
            "format": ""
        },
        {
            "name": "cpuRequest",
            "baseName": "cpuRequest",
            "type": "string",
            "format": ""
        },
        {
            "name": "defaultRuntimeClass",
            "baseName": "defaultRuntimeClass",
            "type": "string",
            "format": ""
        },
        {
            "name": "developerConfiguration",
            "baseName": "developerConfiguration",
            "type": "V1DeveloperConfiguration",
            "format": ""
        },
        {
            "name": "emulatedMachines",
            "baseName": "emulatedMachines",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "evictionStrategy",
            "baseName": "evictionStrategy",
            "type": "string",
            "format": ""
        },
        {
            "name": "handlerConfiguration",
            "baseName": "handlerConfiguration",
            "type": "V1ReloadableComponentConfiguration",
            "format": ""
        },
        {
            "name": "imagePullPolicy",
            "baseName": "imagePullPolicy",
            "type": "V1KubeVirtConfigurationImagePullPolicyEnum",
            "format": ""
        },
        {
            "name": "instancetype",
            "baseName": "instancetype",
            "type": "V1InstancetypeConfiguration",
            "format": ""
        },
        {
            "name": "ksmConfiguration",
            "baseName": "ksmConfiguration",
            "type": "V1KSMConfiguration",
            "format": ""
        },
        {
            "name": "liveUpdateConfiguration",
            "baseName": "liveUpdateConfiguration",
            "type": "V1LiveUpdateConfiguration",
            "format": ""
        },
        {
            "name": "machineType",
            "baseName": "machineType",
            "type": "string",
            "format": ""
        },
        {
            "name": "mediatedDevicesConfiguration",
            "baseName": "mediatedDevicesConfiguration",
            "type": "V1MediatedDevicesConfiguration",
            "format": ""
        },
        {
            "name": "memBalloonStatsPeriod",
            "baseName": "memBalloonStatsPeriod",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "migrations",
            "baseName": "migrations",
            "type": "V1MigrationConfiguration",
            "format": ""
        },
        {
            "name": "minCPUModel",
            "baseName": "minCPUModel",
            "type": "string",
            "format": ""
        },
        {
            "name": "network",
            "baseName": "network",
            "type": "V1NetworkConfiguration",
            "format": ""
        },
        {
            "name": "obsoleteCPUModels",
            "baseName": "obsoleteCPUModels",
            "type": "{ [key: string]: boolean; }",
            "format": ""
        },
        {
            "name": "ovmfPath",
            "baseName": "ovmfPath",
            "type": "string",
            "format": ""
        },
        {
            "name": "permittedHostDevices",
            "baseName": "permittedHostDevices",
            "type": "V1PermittedHostDevices",
            "format": ""
        },
        {
            "name": "seccompConfiguration",
            "baseName": "seccompConfiguration",
            "type": "V1SeccompConfiguration",
            "format": ""
        },
        {
            "name": "selinuxLauncherType",
            "baseName": "selinuxLauncherType",
            "type": "string",
            "format": ""
        },
        {
            "name": "smbios",
            "baseName": "smbios",
            "type": "V1SMBiosConfiguration",
            "format": ""
        },
        {
            "name": "supportContainerResources",
            "baseName": "supportContainerResources",
            "type": "Array<V1SupportContainerResources>",
            "format": ""
        },
        {
            "name": "supportedGuestAgentVersions",
            "baseName": "supportedGuestAgentVersions",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "tlsConfiguration",
            "baseName": "tlsConfiguration",
            "type": "V1TLSConfiguration",
            "format": ""
        },
        {
            "name": "virtualMachineInstancesPerNode",
            "baseName": "virtualMachineInstancesPerNode",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "virtualMachineOptions",
            "baseName": "virtualMachineOptions",
            "type": "V1VirtualMachineOptions",
            "format": ""
        },
        {
            "name": "vmRolloutStrategy",
            "baseName": "vmRolloutStrategy",
            "type": "string",
            "format": ""
        },
        {
            "name": "vmStateStorageClass",
            "baseName": "vmStateStorageClass",
            "type": "string",
            "format": ""
        },
        {
            "name": "webhookConfiguration",
            "baseName": "webhookConfiguration",
            "type": "V1ReloadableComponentConfiguration",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1KubeVirtConfiguration.attributeTypeMap;
    }
    constructor() {
    }
}
export var V1KubeVirtConfigurationImagePullPolicyEnum;
(function (V1KubeVirtConfigurationImagePullPolicyEnum) {
    V1KubeVirtConfigurationImagePullPolicyEnum["Always"] = "Always";
    V1KubeVirtConfigurationImagePullPolicyEnum["IfNotPresent"] = "IfNotPresent";
    V1KubeVirtConfigurationImagePullPolicyEnum["Never"] = "Never";
})(V1KubeVirtConfigurationImagePullPolicyEnum || (V1KubeVirtConfigurationImagePullPolicyEnum = {}));
//# sourceMappingURL=V1KubeVirtConfiguration.js.map