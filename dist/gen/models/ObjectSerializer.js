"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
__exportStar(require("../models/K8sIoApiCoreV1Affinity.js"), exports);
__exportStar(require("../models/K8sIoApiCoreV1DownwardAPIVolumeFile.js"), exports);
__exportStar(require("../models/K8sIoApiCoreV1ExecAction.js"), exports);
__exportStar(require("../models/K8sIoApiCoreV1HTTPGetAction.js"), exports);
__exportStar(require("../models/K8sIoApiCoreV1HTTPHeader.js"), exports);
__exportStar(require("../models/K8sIoApiCoreV1LocalObjectReference.js"), exports);
__exportStar(require("../models/K8sIoApiCoreV1NodeAffinity.js"), exports);
__exportStar(require("../models/K8sIoApiCoreV1NodeSelector.js"), exports);
__exportStar(require("../models/K8sIoApiCoreV1NodeSelectorRequirement.js"), exports);
__exportStar(require("../models/K8sIoApiCoreV1NodeSelectorTerm.js"), exports);
__exportStar(require("../models/K8sIoApiCoreV1ObjectFieldSelector.js"), exports);
__exportStar(require("../models/K8sIoApiCoreV1PersistentVolumeClaimSpec.js"), exports);
__exportStar(require("../models/K8sIoApiCoreV1PersistentVolumeClaimVolumeSource.js"), exports);
__exportStar(require("../models/K8sIoApiCoreV1PodAffinity.js"), exports);
__exportStar(require("../models/K8sIoApiCoreV1PodAffinityTerm.js"), exports);
__exportStar(require("../models/K8sIoApiCoreV1PodAntiAffinity.js"), exports);
__exportStar(require("../models/K8sIoApiCoreV1PodDNSConfig.js"), exports);
__exportStar(require("../models/K8sIoApiCoreV1PodDNSConfigOption.js"), exports);
__exportStar(require("../models/K8sIoApiCoreV1PreferredSchedulingTerm.js"), exports);
__exportStar(require("../models/K8sIoApiCoreV1ResourceClaim.js"), exports);
__exportStar(require("../models/K8sIoApiCoreV1ResourceFieldSelector.js"), exports);
__exportStar(require("../models/K8sIoApiCoreV1ResourceRequirements.js"), exports);
__exportStar(require("../models/K8sIoApiCoreV1TCPSocketAction.js"), exports);
__exportStar(require("../models/K8sIoApiCoreV1Toleration.js"), exports);
__exportStar(require("../models/K8sIoApiCoreV1TopologySpreadConstraint.js"), exports);
__exportStar(require("../models/K8sIoApiCoreV1TypedLocalObjectReference.js"), exports);
__exportStar(require("../models/K8sIoApiCoreV1TypedObjectReference.js"), exports);
__exportStar(require("../models/K8sIoApiCoreV1VolumeResourceRequirements.js"), exports);
__exportStar(require("../models/K8sIoApiCoreV1WeightedPodAffinityTerm.js"), exports);
__exportStar(require("../models/K8sIoApimachineryPkgApisMetaV1APIGroup.js"), exports);
__exportStar(require("../models/K8sIoApimachineryPkgApisMetaV1APIGroupList.js"), exports);
__exportStar(require("../models/K8sIoApimachineryPkgApisMetaV1APIResource.js"), exports);
__exportStar(require("../models/K8sIoApimachineryPkgApisMetaV1APIResourceList.js"), exports);
__exportStar(require("../models/K8sIoApimachineryPkgApisMetaV1DeleteOptions.js"), exports);
__exportStar(require("../models/K8sIoApimachineryPkgApisMetaV1GroupVersionForDiscovery.js"), exports);
__exportStar(require("../models/K8sIoApimachineryPkgApisMetaV1LabelSelector.js"), exports);
__exportStar(require("../models/K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement.js"), exports);
__exportStar(require("../models/K8sIoApimachineryPkgApisMetaV1ListMeta.js"), exports);
__exportStar(require("../models/K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry.js"), exports);
__exportStar(require("../models/K8sIoApimachineryPkgApisMetaV1ObjectMeta.js"), exports);
__exportStar(require("../models/K8sIoApimachineryPkgApisMetaV1OwnerReference.js"), exports);
__exportStar(require("../models/K8sIoApimachineryPkgApisMetaV1Preconditions.js"), exports);
__exportStar(require("../models/K8sIoApimachineryPkgApisMetaV1RootPaths.js"), exports);
__exportStar(require("../models/K8sIoApimachineryPkgApisMetaV1ServerAddressByClientCIDR.js"), exports);
__exportStar(require("../models/K8sIoApimachineryPkgApisMetaV1Status.js"), exports);
__exportStar(require("../models/K8sIoApimachineryPkgApisMetaV1StatusCause.js"), exports);
__exportStar(require("../models/K8sIoApimachineryPkgApisMetaV1StatusDetails.js"), exports);
__exportStar(require("../models/K8sIoApimachineryPkgApisMetaV1WatchEvent.js"), exports);
__exportStar(require("../models/V1ACPI.js"), exports);
__exportStar(require("../models/V1AccessCredential.js"), exports);
__exportStar(require("../models/V1AccessCredentialSecretSource.js"), exports);
__exportStar(require("../models/V1AddVolumeOptions.js"), exports);
__exportStar(require("../models/V1ArchConfiguration.js"), exports);
__exportStar(require("../models/V1ArchSpecificConfiguration.js"), exports);
__exportStar(require("../models/V1BIOS.js"), exports);
__exportStar(require("../models/V1BlockSize.js"), exports);
__exportStar(require("../models/V1Bootloader.js"), exports);
__exportStar(require("../models/V1CDRomTarget.js"), exports);
__exportStar(require("../models/V1CPU.js"), exports);
__exportStar(require("../models/V1CPUFeature.js"), exports);
__exportStar(require("../models/V1CPUTopology.js"), exports);
__exportStar(require("../models/V1CertConfig.js"), exports);
__exportStar(require("../models/V1Chassis.js"), exports);
__exportStar(require("../models/V1Clock.js"), exports);
__exportStar(require("../models/V1ClockOffset.js"), exports);
__exportStar(require("../models/V1ClockOffsetUTC.js"), exports);
__exportStar(require("../models/V1CloudInitConfigDriveSource.js"), exports);
__exportStar(require("../models/V1CloudInitNoCloudSource.js"), exports);
__exportStar(require("../models/V1CommonInstancetypesDeployment.js"), exports);
__exportStar(require("../models/V1ComponentConfig.js"), exports);
__exportStar(require("../models/V1ConfigMapVolumeSource.js"), exports);
__exportStar(require("../models/V1ContainerDiskInfo.js"), exports);
__exportStar(require("../models/V1ContainerDiskSource.js"), exports);
__exportStar(require("../models/V1CustomBlockSize.js"), exports);
__exportStar(require("../models/V1CustomProfile.js"), exports);
__exportStar(require("../models/V1CustomizeComponents.js"), exports);
__exportStar(require("../models/V1CustomizeComponentsPatch.js"), exports);
__exportStar(require("../models/V1DHCPOptions.js"), exports);
__exportStar(require("../models/V1DHCPPrivateOptions.js"), exports);
__exportStar(require("../models/V1DataVolumeSource.js"), exports);
__exportStar(require("../models/V1DataVolumeTemplateSpec.js"), exports);
__exportStar(require("../models/V1DeveloperConfiguration.js"), exports);
__exportStar(require("../models/V1Devices.js"), exports);
__exportStar(require("../models/V1Disk.js"), exports);
__exportStar(require("../models/V1DiskTarget.js"), exports);
__exportStar(require("../models/V1DiskVerification.js"), exports);
__exportStar(require("../models/V1DomainMemoryDumpInfo.js"), exports);
__exportStar(require("../models/V1DomainSpec.js"), exports);
__exportStar(require("../models/V1DownwardAPIVolumeSource.js"), exports);
__exportStar(require("../models/V1EFI.js"), exports);
__exportStar(require("../models/V1EmptyDiskSource.js"), exports);
__exportStar(require("../models/V1EphemeralVolumeSource.js"), exports);
__exportStar(require("../models/V1FeatureAPIC.js"), exports);
__exportStar(require("../models/V1FeatureHyperv.js"), exports);
__exportStar(require("../models/V1FeatureKVM.js"), exports);
__exportStar(require("../models/V1FeatureSpinlocks.js"), exports);
__exportStar(require("../models/V1FeatureState.js"), exports);
__exportStar(require("../models/V1FeatureVendorID.js"), exports);
__exportStar(require("../models/V1Features.js"), exports);
__exportStar(require("../models/V1Filesystem.js"), exports);
__exportStar(require("../models/V1Firmware.js"), exports);
__exportStar(require("../models/V1Flags.js"), exports);
__exportStar(require("../models/V1FreezeUnfreezeTimeout.js"), exports);
__exportStar(require("../models/V1GPU.js"), exports);
__exportStar(require("../models/V1GenerationStatus.js"), exports);
__exportStar(require("../models/V1GuestAgentCommandInfo.js"), exports);
__exportStar(require("../models/V1HPETTimer.js"), exports);
__exportStar(require("../models/V1HostDevice.js"), exports);
__exportStar(require("../models/V1HostDisk.js"), exports);
__exportStar(require("../models/V1HotplugVolumeSource.js"), exports);
__exportStar(require("../models/V1HotplugVolumeStatus.js"), exports);
__exportStar(require("../models/V1Hugepages.js"), exports);
__exportStar(require("../models/V1HyperVPassthrough.js"), exports);
__exportStar(require("../models/V1HypervTimer.js"), exports);
__exportStar(require("../models/V1I6300ESBWatchdog.js"), exports);
__exportStar(require("../models/V1InitrdInfo.js"), exports);
__exportStar(require("../models/V1Input.js"), exports);
__exportStar(require("../models/V1InstancetypeConfiguration.js"), exports);
__exportStar(require("../models/V1InstancetypeMatcher.js"), exports);
__exportStar(require("../models/V1Interface.js"), exports);
__exportStar(require("../models/V1InterfaceBindingMigration.js"), exports);
__exportStar(require("../models/V1InterfaceBindingPlugin.js"), exports);
__exportStar(require("../models/V1KSMConfiguration.js"), exports);
__exportStar(require("../models/V1KVMTimer.js"), exports);
__exportStar(require("../models/V1KernelBoot.js"), exports);
__exportStar(require("../models/V1KernelBootContainer.js"), exports);
__exportStar(require("../models/V1KernelBootStatus.js"), exports);
__exportStar(require("../models/V1KernelInfo.js"), exports);
__exportStar(require("../models/V1KubeVirt.js"), exports);
__exportStar(require("../models/V1KubeVirtCertificateRotateStrategy.js"), exports);
__exportStar(require("../models/V1KubeVirtCondition.js"), exports);
__exportStar(require("../models/V1KubeVirtConfiguration.js"), exports);
__exportStar(require("../models/V1KubeVirtList.js"), exports);
__exportStar(require("../models/V1KubeVirtSelfSignConfiguration.js"), exports);
__exportStar(require("../models/V1KubeVirtSpec.js"), exports);
__exportStar(require("../models/V1KubeVirtStatus.js"), exports);
__exportStar(require("../models/V1KubeVirtWorkloadUpdateStrategy.js"), exports);
__exportStar(require("../models/V1LaunchSecurity.js"), exports);
__exportStar(require("../models/V1LiveUpdateConfiguration.js"), exports);
__exportStar(require("../models/V1LogVerbosity.js"), exports);
__exportStar(require("../models/V1LunTarget.js"), exports);
__exportStar(require("../models/V1Machine.js"), exports);
__exportStar(require("../models/V1MediatedDevicesConfiguration.js"), exports);
__exportStar(require("../models/V1MediatedHostDevice.js"), exports);
__exportStar(require("../models/V1Memory.js"), exports);
__exportStar(require("../models/V1MemoryDumpVolumeSource.js"), exports);
__exportStar(require("../models/V1MemoryStatus.js"), exports);
__exportStar(require("../models/V1MigrateOptions.js"), exports);
__exportStar(require("../models/V1MigrationConfiguration.js"), exports);
__exportStar(require("../models/V1MultusNetwork.js"), exports);
__exportStar(require("../models/V1NUMA.js"), exports);
__exportStar(require("../models/V1Network.js"), exports);
__exportStar(require("../models/V1NetworkConfiguration.js"), exports);
__exportStar(require("../models/V1NodeMediatedDeviceTypesConfig.js"), exports);
__exportStar(require("../models/V1NodePlacement.js"), exports);
__exportStar(require("../models/V1PITTimer.js"), exports);
__exportStar(require("../models/V1PauseOptions.js"), exports);
__exportStar(require("../models/V1PciHostDevice.js"), exports);
__exportStar(require("../models/V1PermittedHostDevices.js"), exports);
__exportStar(require("../models/V1PersistentVolumeClaimInfo.js"), exports);
__exportStar(require("../models/V1PersistentVolumeClaimVolumeSource.js"), exports);
__exportStar(require("../models/V1PluginBinding.js"), exports);
__exportStar(require("../models/V1PodNetwork.js"), exports);
__exportStar(require("../models/V1Port.js"), exports);
__exportStar(require("../models/V1PreferenceMatcher.js"), exports);
__exportStar(require("../models/V1Probe.js"), exports);
__exportStar(require("../models/V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagation.js"), exports);
__exportStar(require("../models/V1RESTClientConfiguration.js"), exports);
__exportStar(require("../models/V1RTCTimer.js"), exports);
__exportStar(require("../models/V1RateLimiter.js"), exports);
__exportStar(require("../models/V1Realtime.js"), exports);
__exportStar(require("../models/V1ReloadableComponentConfiguration.js"), exports);
__exportStar(require("../models/V1RemoveVolumeOptions.js"), exports);
__exportStar(require("../models/V1ResourceRequirements.js"), exports);
__exportStar(require("../models/V1ResourceRequirementsWithoutClaims.js"), exports);
__exportStar(require("../models/V1RestartOptions.js"), exports);
__exportStar(require("../models/V1SEV.js"), exports);
__exportStar(require("../models/V1SEVMeasurementInfo.js"), exports);
__exportStar(require("../models/V1SEVPlatformInfo.js"), exports);
__exportStar(require("../models/V1SEVPolicy.js"), exports);
__exportStar(require("../models/V1SEVSecretOptions.js"), exports);
__exportStar(require("../models/V1SEVSessionOptions.js"), exports);
__exportStar(require("../models/V1SMBiosConfiguration.js"), exports);
__exportStar(require("../models/V1SSHPublicKeyAccessCredential.js"), exports);
__exportStar(require("../models/V1SSHPublicKeyAccessCredentialPropagationMethod.js"), exports);
__exportStar(require("../models/V1SSHPublicKeyAccessCredentialSource.js"), exports);
__exportStar(require("../models/V1SeccompConfiguration.js"), exports);
__exportStar(require("../models/V1SecretVolumeSource.js"), exports);
__exportStar(require("../models/V1ServiceAccountVolumeSource.js"), exports);
__exportStar(require("../models/V1SoundDevice.js"), exports);
__exportStar(require("../models/V1StartOptions.js"), exports);
__exportStar(require("../models/V1StopOptions.js"), exports);
__exportStar(require("../models/V1StorageMigratedVolumeInfo.js"), exports);
__exportStar(require("../models/V1SupportContainerResources.js"), exports);
__exportStar(require("../models/V1SyNICTimer.js"), exports);
__exportStar(require("../models/V1SysprepSource.js"), exports);
__exportStar(require("../models/V1TLSConfiguration.js"), exports);
__exportStar(require("../models/V1TPMDevice.js"), exports);
__exportStar(require("../models/V1Timer.js"), exports);
__exportStar(require("../models/V1TokenBucketRateLimiter.js"), exports);
__exportStar(require("../models/V1TopologyHints.js"), exports);
__exportStar(require("../models/V1USBHostDevice.js"), exports);
__exportStar(require("../models/V1USBSelector.js"), exports);
__exportStar(require("../models/V1UnpauseOptions.js"), exports);
__exportStar(require("../models/V1UserPasswordAccessCredential.js"), exports);
__exportStar(require("../models/V1UserPasswordAccessCredentialPropagationMethod.js"), exports);
__exportStar(require("../models/V1UserPasswordAccessCredentialSource.js"), exports);
__exportStar(require("../models/V1VGPUDisplayOptions.js"), exports);
__exportStar(require("../models/V1VGPUOptions.js"), exports);
__exportStar(require("../models/V1VirtualMachine.js"), exports);
__exportStar(require("../models/V1VirtualMachineCondition.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstance.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstanceCondition.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstanceFileSystem.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstanceFileSystemDisk.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstanceFileSystemInfo.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstanceFileSystemList.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstanceGuestAgentInfo.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstanceGuestOSInfo.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstanceGuestOSUser.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstanceGuestOSUserList.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstanceList.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstanceMigration.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstanceMigrationCondition.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstanceMigrationList.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstanceMigrationPhaseTransitionTimestamp.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstanceMigrationSpec.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstanceMigrationState.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstanceMigrationStatus.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstanceNetworkInterface.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstancePhaseTransitionTimestamp.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstancePreset.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstancePresetList.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstancePresetSpec.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstanceProfile.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstanceReplicaSet.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstanceReplicaSetCondition.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstanceReplicaSetList.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstanceReplicaSetSpec.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstanceReplicaSetStatus.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstanceSpec.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstanceStatus.js"), exports);
__exportStar(require("../models/V1VirtualMachineInstanceTemplateSpec.js"), exports);
__exportStar(require("../models/V1VirtualMachineList.js"), exports);
__exportStar(require("../models/V1VirtualMachineMemoryDumpRequest.js"), exports);
__exportStar(require("../models/V1VirtualMachineOptions.js"), exports);
__exportStar(require("../models/V1VirtualMachineSpec.js"), exports);
__exportStar(require("../models/V1VirtualMachineStartFailure.js"), exports);
__exportStar(require("../models/V1VirtualMachineStateChangeRequest.js"), exports);
__exportStar(require("../models/V1VirtualMachineStatus.js"), exports);
__exportStar(require("../models/V1VirtualMachineVolumeRequest.js"), exports);
__exportStar(require("../models/V1Volume.js"), exports);
__exportStar(require("../models/V1VolumeMigrationState.js"), exports);
__exportStar(require("../models/V1VolumeSnapshotStatus.js"), exports);
__exportStar(require("../models/V1VolumeStatus.js"), exports);
__exportStar(require("../models/V1VolumeUpdateState.js"), exports);
__exportStar(require("../models/V1Watchdog.js"), exports);
__exportStar(require("../models/V1alpha1Condition.js"), exports);
__exportStar(require("../models/V1alpha1MigrationPolicy.js"), exports);
__exportStar(require("../models/V1alpha1MigrationPolicyList.js"), exports);
__exportStar(require("../models/V1alpha1MigrationPolicySpec.js"), exports);
__exportStar(require("../models/V1alpha1Selectors.js"), exports);
__exportStar(require("../models/V1alpha1VirtualMachineClone.js"), exports);
__exportStar(require("../models/V1alpha1VirtualMachineCloneList.js"), exports);
__exportStar(require("../models/V1alpha1VirtualMachineCloneSpec.js"), exports);
__exportStar(require("../models/V1alpha1VirtualMachineCloneStatus.js"), exports);
__exportStar(require("../models/V1alpha1VirtualMachineCloneTemplateFilters.js"), exports);
__exportStar(require("../models/V1alpha1VirtualMachinePool.js"), exports);
__exportStar(require("../models/V1alpha1VirtualMachinePoolCondition.js"), exports);
__exportStar(require("../models/V1alpha1VirtualMachinePoolList.js"), exports);
__exportStar(require("../models/V1alpha1VirtualMachinePoolSpec.js"), exports);
__exportStar(require("../models/V1alpha1VirtualMachinePoolStatus.js"), exports);
__exportStar(require("../models/V1alpha1VirtualMachineTemplateSpec.js"), exports);
__exportStar(require("../models/V1beta1CPUInstancetype.js"), exports);
__exportStar(require("../models/V1beta1CPUPreferenceRequirement.js"), exports);
__exportStar(require("../models/V1beta1CPUPreferences.js"), exports);
__exportStar(require("../models/V1beta1ClockPreferences.js"), exports);
__exportStar(require("../models/V1beta1Condition.js"), exports);
__exportStar(require("../models/V1beta1DataVolumeCheckpoint.js"), exports);
__exportStar(require("../models/V1beta1DataVolumeSource.js"), exports);
__exportStar(require("../models/V1beta1DataVolumeSourceGCS.js"), exports);
__exportStar(require("../models/V1beta1DataVolumeSourceHTTP.js"), exports);
__exportStar(require("../models/V1beta1DataVolumeSourceImageIO.js"), exports);
__exportStar(require("../models/V1beta1DataVolumeSourcePVC.js"), exports);
__exportStar(require("../models/V1beta1DataVolumeSourceRef.js"), exports);
__exportStar(require("../models/V1beta1DataVolumeSourceRegistry.js"), exports);
__exportStar(require("../models/V1beta1DataVolumeSourceS3.js"), exports);
__exportStar(require("../models/V1beta1DataVolumeSourceSnapshot.js"), exports);
__exportStar(require("../models/V1beta1DataVolumeSourceVDDK.js"), exports);
__exportStar(require("../models/V1beta1DataVolumeSpec.js"), exports);
__exportStar(require("../models/V1beta1DevicePreferences.js"), exports);
__exportStar(require("../models/V1beta1Error.js"), exports);
__exportStar(require("../models/V1beta1FeaturePreferences.js"), exports);
__exportStar(require("../models/V1beta1FirmwarePreferences.js"), exports);
__exportStar(require("../models/V1beta1MachinePreferences.js"), exports);
__exportStar(require("../models/V1beta1MemoryInstancetype.js"), exports);
__exportStar(require("../models/V1beta1MemoryPreferenceRequirement.js"), exports);
__exportStar(require("../models/V1beta1PersistentVolumeClaim.js"), exports);
__exportStar(require("../models/V1beta1PreferenceRequirements.js"), exports);
__exportStar(require("../models/V1beta1SnapshotVolumesLists.js"), exports);
__exportStar(require("../models/V1beta1SourceSpec.js"), exports);
__exportStar(require("../models/V1beta1SpreadOptions.js"), exports);
__exportStar(require("../models/V1beta1StorageSpec.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachine.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachineClusterInstancetype.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachineClusterInstancetypeList.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachineClusterPreference.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachineClusterPreferenceList.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachineExport.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachineExportLink.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachineExportLinks.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachineExportList.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachineExportManifest.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachineExportSpec.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachineExportStatus.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachineExportVolume.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachineExportVolumeFormat.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachineInstancetype.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachineInstancetypeList.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachineInstancetypeSpec.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachinePreference.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachinePreferenceList.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachinePreferenceSpec.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachineRestore.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachineRestoreList.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachineRestoreSpec.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachineRestoreStatus.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachineSnapshot.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachineSnapshotContent.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachineSnapshotContentList.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachineSnapshotContentSpec.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachineSnapshotContentStatus.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachineSnapshotList.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachineSnapshotSpec.js"), exports);
__exportStar(require("../models/V1beta1VirtualMachineSnapshotStatus.js"), exports);
__exportStar(require("../models/V1beta1VolumeBackup.js"), exports);
__exportStar(require("../models/V1beta1VolumePreferences.js"), exports);
__exportStar(require("../models/V1beta1VolumeRestore.js"), exports);
__exportStar(require("../models/V1beta1VolumeSnapshotStatus.js"), exports);
const K8sIoApiCoreV1Affinity_js_1 = require("../models/K8sIoApiCoreV1Affinity.js");
const K8sIoApiCoreV1DownwardAPIVolumeFile_js_1 = require("../models/K8sIoApiCoreV1DownwardAPIVolumeFile.js");
const K8sIoApiCoreV1ExecAction_js_1 = require("../models/K8sIoApiCoreV1ExecAction.js");
const K8sIoApiCoreV1HTTPGetAction_js_1 = require("../models/K8sIoApiCoreV1HTTPGetAction.js");
const K8sIoApiCoreV1HTTPHeader_js_1 = require("../models/K8sIoApiCoreV1HTTPHeader.js");
const K8sIoApiCoreV1LocalObjectReference_js_1 = require("../models/K8sIoApiCoreV1LocalObjectReference.js");
const K8sIoApiCoreV1NodeAffinity_js_1 = require("../models/K8sIoApiCoreV1NodeAffinity.js");
const K8sIoApiCoreV1NodeSelector_js_1 = require("../models/K8sIoApiCoreV1NodeSelector.js");
const K8sIoApiCoreV1NodeSelectorRequirement_js_1 = require("../models/K8sIoApiCoreV1NodeSelectorRequirement.js");
const K8sIoApiCoreV1NodeSelectorTerm_js_1 = require("../models/K8sIoApiCoreV1NodeSelectorTerm.js");
const K8sIoApiCoreV1ObjectFieldSelector_js_1 = require("../models/K8sIoApiCoreV1ObjectFieldSelector.js");
const K8sIoApiCoreV1PersistentVolumeClaimSpec_js_1 = require("../models/K8sIoApiCoreV1PersistentVolumeClaimSpec.js");
const K8sIoApiCoreV1PersistentVolumeClaimVolumeSource_js_1 = require("../models/K8sIoApiCoreV1PersistentVolumeClaimVolumeSource.js");
const K8sIoApiCoreV1PodAffinity_js_1 = require("../models/K8sIoApiCoreV1PodAffinity.js");
const K8sIoApiCoreV1PodAffinityTerm_js_1 = require("../models/K8sIoApiCoreV1PodAffinityTerm.js");
const K8sIoApiCoreV1PodAntiAffinity_js_1 = require("../models/K8sIoApiCoreV1PodAntiAffinity.js");
const K8sIoApiCoreV1PodDNSConfig_js_1 = require("../models/K8sIoApiCoreV1PodDNSConfig.js");
const K8sIoApiCoreV1PodDNSConfigOption_js_1 = require("../models/K8sIoApiCoreV1PodDNSConfigOption.js");
const K8sIoApiCoreV1PreferredSchedulingTerm_js_1 = require("../models/K8sIoApiCoreV1PreferredSchedulingTerm.js");
const K8sIoApiCoreV1ResourceClaim_js_1 = require("../models/K8sIoApiCoreV1ResourceClaim.js");
const K8sIoApiCoreV1ResourceFieldSelector_js_1 = require("../models/K8sIoApiCoreV1ResourceFieldSelector.js");
const K8sIoApiCoreV1ResourceRequirements_js_1 = require("../models/K8sIoApiCoreV1ResourceRequirements.js");
const K8sIoApiCoreV1TCPSocketAction_js_1 = require("../models/K8sIoApiCoreV1TCPSocketAction.js");
const K8sIoApiCoreV1Toleration_js_1 = require("../models/K8sIoApiCoreV1Toleration.js");
const K8sIoApiCoreV1TopologySpreadConstraint_js_1 = require("../models/K8sIoApiCoreV1TopologySpreadConstraint.js");
const K8sIoApiCoreV1TypedLocalObjectReference_js_1 = require("../models/K8sIoApiCoreV1TypedLocalObjectReference.js");
const K8sIoApiCoreV1TypedObjectReference_js_1 = require("../models/K8sIoApiCoreV1TypedObjectReference.js");
const K8sIoApiCoreV1VolumeResourceRequirements_js_1 = require("../models/K8sIoApiCoreV1VolumeResourceRequirements.js");
const K8sIoApiCoreV1WeightedPodAffinityTerm_js_1 = require("../models/K8sIoApiCoreV1WeightedPodAffinityTerm.js");
const K8sIoApimachineryPkgApisMetaV1APIGroup_js_1 = require("../models/K8sIoApimachineryPkgApisMetaV1APIGroup.js");
const K8sIoApimachineryPkgApisMetaV1APIGroupList_js_1 = require("../models/K8sIoApimachineryPkgApisMetaV1APIGroupList.js");
const K8sIoApimachineryPkgApisMetaV1APIResource_js_1 = require("../models/K8sIoApimachineryPkgApisMetaV1APIResource.js");
const K8sIoApimachineryPkgApisMetaV1APIResourceList_js_1 = require("../models/K8sIoApimachineryPkgApisMetaV1APIResourceList.js");
const K8sIoApimachineryPkgApisMetaV1DeleteOptions_js_1 = require("../models/K8sIoApimachineryPkgApisMetaV1DeleteOptions.js");
const K8sIoApimachineryPkgApisMetaV1GroupVersionForDiscovery_js_1 = require("../models/K8sIoApimachineryPkgApisMetaV1GroupVersionForDiscovery.js");
const K8sIoApimachineryPkgApisMetaV1LabelSelector_js_1 = require("../models/K8sIoApimachineryPkgApisMetaV1LabelSelector.js");
const K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement_js_1 = require("../models/K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement.js");
const K8sIoApimachineryPkgApisMetaV1ListMeta_js_1 = require("../models/K8sIoApimachineryPkgApisMetaV1ListMeta.js");
const K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry_js_1 = require("../models/K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry.js");
const K8sIoApimachineryPkgApisMetaV1ObjectMeta_js_1 = require("../models/K8sIoApimachineryPkgApisMetaV1ObjectMeta.js");
const K8sIoApimachineryPkgApisMetaV1OwnerReference_js_1 = require("../models/K8sIoApimachineryPkgApisMetaV1OwnerReference.js");
const K8sIoApimachineryPkgApisMetaV1Preconditions_js_1 = require("../models/K8sIoApimachineryPkgApisMetaV1Preconditions.js");
const K8sIoApimachineryPkgApisMetaV1RootPaths_js_1 = require("../models/K8sIoApimachineryPkgApisMetaV1RootPaths.js");
const K8sIoApimachineryPkgApisMetaV1ServerAddressByClientCIDR_js_1 = require("../models/K8sIoApimachineryPkgApisMetaV1ServerAddressByClientCIDR.js");
const K8sIoApimachineryPkgApisMetaV1Status_js_1 = require("../models/K8sIoApimachineryPkgApisMetaV1Status.js");
const K8sIoApimachineryPkgApisMetaV1StatusCause_js_1 = require("../models/K8sIoApimachineryPkgApisMetaV1StatusCause.js");
const K8sIoApimachineryPkgApisMetaV1StatusDetails_js_1 = require("../models/K8sIoApimachineryPkgApisMetaV1StatusDetails.js");
const K8sIoApimachineryPkgApisMetaV1WatchEvent_js_1 = require("../models/K8sIoApimachineryPkgApisMetaV1WatchEvent.js");
const V1ACPI_js_1 = require("../models/V1ACPI.js");
const V1AccessCredential_js_1 = require("../models/V1AccessCredential.js");
const V1AccessCredentialSecretSource_js_1 = require("../models/V1AccessCredentialSecretSource.js");
const V1AddVolumeOptions_js_1 = require("../models/V1AddVolumeOptions.js");
const V1ArchConfiguration_js_1 = require("../models/V1ArchConfiguration.js");
const V1ArchSpecificConfiguration_js_1 = require("../models/V1ArchSpecificConfiguration.js");
const V1BIOS_js_1 = require("../models/V1BIOS.js");
const V1BlockSize_js_1 = require("../models/V1BlockSize.js");
const V1Bootloader_js_1 = require("../models/V1Bootloader.js");
const V1CDRomTarget_js_1 = require("../models/V1CDRomTarget.js");
const V1CPU_js_1 = require("../models/V1CPU.js");
const V1CPUFeature_js_1 = require("../models/V1CPUFeature.js");
const V1CPUTopology_js_1 = require("../models/V1CPUTopology.js");
const V1CertConfig_js_1 = require("../models/V1CertConfig.js");
const V1Chassis_js_1 = require("../models/V1Chassis.js");
const V1Clock_js_1 = require("../models/V1Clock.js");
const V1ClockOffset_js_1 = require("../models/V1ClockOffset.js");
const V1ClockOffsetUTC_js_1 = require("../models/V1ClockOffsetUTC.js");
const V1CloudInitConfigDriveSource_js_1 = require("../models/V1CloudInitConfigDriveSource.js");
const V1CloudInitNoCloudSource_js_1 = require("../models/V1CloudInitNoCloudSource.js");
const V1CommonInstancetypesDeployment_js_1 = require("../models/V1CommonInstancetypesDeployment.js");
const V1ComponentConfig_js_1 = require("../models/V1ComponentConfig.js");
const V1ConfigMapVolumeSource_js_1 = require("../models/V1ConfigMapVolumeSource.js");
const V1ContainerDiskInfo_js_1 = require("../models/V1ContainerDiskInfo.js");
const V1ContainerDiskSource_js_1 = require("../models/V1ContainerDiskSource.js");
const V1CustomBlockSize_js_1 = require("../models/V1CustomBlockSize.js");
const V1CustomProfile_js_1 = require("../models/V1CustomProfile.js");
const V1CustomizeComponents_js_1 = require("../models/V1CustomizeComponents.js");
const V1CustomizeComponentsPatch_js_1 = require("../models/V1CustomizeComponentsPatch.js");
const V1DHCPOptions_js_1 = require("../models/V1DHCPOptions.js");
const V1DHCPPrivateOptions_js_1 = require("../models/V1DHCPPrivateOptions.js");
const V1DataVolumeSource_js_1 = require("../models/V1DataVolumeSource.js");
const V1DataVolumeTemplateSpec_js_1 = require("../models/V1DataVolumeTemplateSpec.js");
const V1DeveloperConfiguration_js_1 = require("../models/V1DeveloperConfiguration.js");
const V1Devices_js_1 = require("../models/V1Devices.js");
const V1Disk_js_1 = require("../models/V1Disk.js");
const V1DiskTarget_js_1 = require("../models/V1DiskTarget.js");
const V1DiskVerification_js_1 = require("../models/V1DiskVerification.js");
const V1DomainMemoryDumpInfo_js_1 = require("../models/V1DomainMemoryDumpInfo.js");
const V1DomainSpec_js_1 = require("../models/V1DomainSpec.js");
const V1DownwardAPIVolumeSource_js_1 = require("../models/V1DownwardAPIVolumeSource.js");
const V1EFI_js_1 = require("../models/V1EFI.js");
const V1EmptyDiskSource_js_1 = require("../models/V1EmptyDiskSource.js");
const V1EphemeralVolumeSource_js_1 = require("../models/V1EphemeralVolumeSource.js");
const V1FeatureAPIC_js_1 = require("../models/V1FeatureAPIC.js");
const V1FeatureHyperv_js_1 = require("../models/V1FeatureHyperv.js");
const V1FeatureKVM_js_1 = require("../models/V1FeatureKVM.js");
const V1FeatureSpinlocks_js_1 = require("../models/V1FeatureSpinlocks.js");
const V1FeatureState_js_1 = require("../models/V1FeatureState.js");
const V1FeatureVendorID_js_1 = require("../models/V1FeatureVendorID.js");
const V1Features_js_1 = require("../models/V1Features.js");
const V1Filesystem_js_1 = require("../models/V1Filesystem.js");
const V1Firmware_js_1 = require("../models/V1Firmware.js");
const V1Flags_js_1 = require("../models/V1Flags.js");
const V1FreezeUnfreezeTimeout_js_1 = require("../models/V1FreezeUnfreezeTimeout.js");
const V1GPU_js_1 = require("../models/V1GPU.js");
const V1GenerationStatus_js_1 = require("../models/V1GenerationStatus.js");
const V1GuestAgentCommandInfo_js_1 = require("../models/V1GuestAgentCommandInfo.js");
const V1HPETTimer_js_1 = require("../models/V1HPETTimer.js");
const V1HostDevice_js_1 = require("../models/V1HostDevice.js");
const V1HostDisk_js_1 = require("../models/V1HostDisk.js");
const V1HotplugVolumeSource_js_1 = require("../models/V1HotplugVolumeSource.js");
const V1HotplugVolumeStatus_js_1 = require("../models/V1HotplugVolumeStatus.js");
const V1Hugepages_js_1 = require("../models/V1Hugepages.js");
const V1HyperVPassthrough_js_1 = require("../models/V1HyperVPassthrough.js");
const V1HypervTimer_js_1 = require("../models/V1HypervTimer.js");
const V1I6300ESBWatchdog_js_1 = require("../models/V1I6300ESBWatchdog.js");
const V1InitrdInfo_js_1 = require("../models/V1InitrdInfo.js");
const V1Input_js_1 = require("../models/V1Input.js");
const V1InstancetypeConfiguration_js_1 = require("../models/V1InstancetypeConfiguration.js");
const V1InstancetypeMatcher_js_1 = require("../models/V1InstancetypeMatcher.js");
const V1Interface_js_1 = require("../models/V1Interface.js");
const V1InterfaceBindingMigration_js_1 = require("../models/V1InterfaceBindingMigration.js");
const V1InterfaceBindingPlugin_js_1 = require("../models/V1InterfaceBindingPlugin.js");
const V1KSMConfiguration_js_1 = require("../models/V1KSMConfiguration.js");
const V1KVMTimer_js_1 = require("../models/V1KVMTimer.js");
const V1KernelBoot_js_1 = require("../models/V1KernelBoot.js");
const V1KernelBootContainer_js_1 = require("../models/V1KernelBootContainer.js");
const V1KernelBootStatus_js_1 = require("../models/V1KernelBootStatus.js");
const V1KernelInfo_js_1 = require("../models/V1KernelInfo.js");
const V1KubeVirt_js_1 = require("../models/V1KubeVirt.js");
const V1KubeVirtCertificateRotateStrategy_js_1 = require("../models/V1KubeVirtCertificateRotateStrategy.js");
const V1KubeVirtCondition_js_1 = require("../models/V1KubeVirtCondition.js");
const V1KubeVirtConfiguration_js_1 = require("../models/V1KubeVirtConfiguration.js");
const V1KubeVirtList_js_1 = require("../models/V1KubeVirtList.js");
const V1KubeVirtSelfSignConfiguration_js_1 = require("../models/V1KubeVirtSelfSignConfiguration.js");
const V1KubeVirtSpec_js_1 = require("../models/V1KubeVirtSpec.js");
const V1KubeVirtStatus_js_1 = require("../models/V1KubeVirtStatus.js");
const V1KubeVirtWorkloadUpdateStrategy_js_1 = require("../models/V1KubeVirtWorkloadUpdateStrategy.js");
const V1LaunchSecurity_js_1 = require("../models/V1LaunchSecurity.js");
const V1LiveUpdateConfiguration_js_1 = require("../models/V1LiveUpdateConfiguration.js");
const V1LogVerbosity_js_1 = require("../models/V1LogVerbosity.js");
const V1LunTarget_js_1 = require("../models/V1LunTarget.js");
const V1Machine_js_1 = require("../models/V1Machine.js");
const V1MediatedDevicesConfiguration_js_1 = require("../models/V1MediatedDevicesConfiguration.js");
const V1MediatedHostDevice_js_1 = require("../models/V1MediatedHostDevice.js");
const V1Memory_js_1 = require("../models/V1Memory.js");
const V1MemoryDumpVolumeSource_js_1 = require("../models/V1MemoryDumpVolumeSource.js");
const V1MemoryStatus_js_1 = require("../models/V1MemoryStatus.js");
const V1MigrateOptions_js_1 = require("../models/V1MigrateOptions.js");
const V1MigrationConfiguration_js_1 = require("../models/V1MigrationConfiguration.js");
const V1MultusNetwork_js_1 = require("../models/V1MultusNetwork.js");
const V1NUMA_js_1 = require("../models/V1NUMA.js");
const V1Network_js_1 = require("../models/V1Network.js");
const V1NetworkConfiguration_js_1 = require("../models/V1NetworkConfiguration.js");
const V1NodeMediatedDeviceTypesConfig_js_1 = require("../models/V1NodeMediatedDeviceTypesConfig.js");
const V1NodePlacement_js_1 = require("../models/V1NodePlacement.js");
const V1PITTimer_js_1 = require("../models/V1PITTimer.js");
const V1PauseOptions_js_1 = require("../models/V1PauseOptions.js");
const V1PciHostDevice_js_1 = require("../models/V1PciHostDevice.js");
const V1PermittedHostDevices_js_1 = require("../models/V1PermittedHostDevices.js");
const V1PersistentVolumeClaimInfo_js_1 = require("../models/V1PersistentVolumeClaimInfo.js");
const V1PersistentVolumeClaimVolumeSource_js_1 = require("../models/V1PersistentVolumeClaimVolumeSource.js");
const V1PluginBinding_js_1 = require("../models/V1PluginBinding.js");
const V1PodNetwork_js_1 = require("../models/V1PodNetwork.js");
const V1Port_js_1 = require("../models/V1Port.js");
const V1PreferenceMatcher_js_1 = require("../models/V1PreferenceMatcher.js");
const V1Probe_js_1 = require("../models/V1Probe.js");
const V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagation_js_1 = require("../models/V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagation.js");
const V1RESTClientConfiguration_js_1 = require("../models/V1RESTClientConfiguration.js");
const V1RTCTimer_js_1 = require("../models/V1RTCTimer.js");
const V1RateLimiter_js_1 = require("../models/V1RateLimiter.js");
const V1Realtime_js_1 = require("../models/V1Realtime.js");
const V1ReloadableComponentConfiguration_js_1 = require("../models/V1ReloadableComponentConfiguration.js");
const V1RemoveVolumeOptions_js_1 = require("../models/V1RemoveVolumeOptions.js");
const V1ResourceRequirements_js_1 = require("../models/V1ResourceRequirements.js");
const V1ResourceRequirementsWithoutClaims_js_1 = require("../models/V1ResourceRequirementsWithoutClaims.js");
const V1RestartOptions_js_1 = require("../models/V1RestartOptions.js");
const V1SEV_js_1 = require("../models/V1SEV.js");
const V1SEVMeasurementInfo_js_1 = require("../models/V1SEVMeasurementInfo.js");
const V1SEVPlatformInfo_js_1 = require("../models/V1SEVPlatformInfo.js");
const V1SEVPolicy_js_1 = require("../models/V1SEVPolicy.js");
const V1SEVSecretOptions_js_1 = require("../models/V1SEVSecretOptions.js");
const V1SEVSessionOptions_js_1 = require("../models/V1SEVSessionOptions.js");
const V1SMBiosConfiguration_js_1 = require("../models/V1SMBiosConfiguration.js");
const V1SSHPublicKeyAccessCredential_js_1 = require("../models/V1SSHPublicKeyAccessCredential.js");
const V1SSHPublicKeyAccessCredentialPropagationMethod_js_1 = require("../models/V1SSHPublicKeyAccessCredentialPropagationMethod.js");
const V1SSHPublicKeyAccessCredentialSource_js_1 = require("../models/V1SSHPublicKeyAccessCredentialSource.js");
const V1SeccompConfiguration_js_1 = require("../models/V1SeccompConfiguration.js");
const V1SecretVolumeSource_js_1 = require("../models/V1SecretVolumeSource.js");
const V1ServiceAccountVolumeSource_js_1 = require("../models/V1ServiceAccountVolumeSource.js");
const V1SoundDevice_js_1 = require("../models/V1SoundDevice.js");
const V1StartOptions_js_1 = require("../models/V1StartOptions.js");
const V1StopOptions_js_1 = require("../models/V1StopOptions.js");
const V1StorageMigratedVolumeInfo_js_1 = require("../models/V1StorageMigratedVolumeInfo.js");
const V1SupportContainerResources_js_1 = require("../models/V1SupportContainerResources.js");
const V1SyNICTimer_js_1 = require("../models/V1SyNICTimer.js");
const V1SysprepSource_js_1 = require("../models/V1SysprepSource.js");
const V1TLSConfiguration_js_1 = require("../models/V1TLSConfiguration.js");
const V1TPMDevice_js_1 = require("../models/V1TPMDevice.js");
const V1Timer_js_1 = require("../models/V1Timer.js");
const V1TokenBucketRateLimiter_js_1 = require("../models/V1TokenBucketRateLimiter.js");
const V1TopologyHints_js_1 = require("../models/V1TopologyHints.js");
const V1USBHostDevice_js_1 = require("../models/V1USBHostDevice.js");
const V1USBSelector_js_1 = require("../models/V1USBSelector.js");
const V1UnpauseOptions_js_1 = require("../models/V1UnpauseOptions.js");
const V1UserPasswordAccessCredential_js_1 = require("../models/V1UserPasswordAccessCredential.js");
const V1UserPasswordAccessCredentialPropagationMethod_js_1 = require("../models/V1UserPasswordAccessCredentialPropagationMethod.js");
const V1UserPasswordAccessCredentialSource_js_1 = require("../models/V1UserPasswordAccessCredentialSource.js");
const V1VGPUDisplayOptions_js_1 = require("../models/V1VGPUDisplayOptions.js");
const V1VGPUOptions_js_1 = require("../models/V1VGPUOptions.js");
const V1VirtualMachine_js_1 = require("../models/V1VirtualMachine.js");
const V1VirtualMachineCondition_js_1 = require("../models/V1VirtualMachineCondition.js");
const V1VirtualMachineInstance_js_1 = require("../models/V1VirtualMachineInstance.js");
const V1VirtualMachineInstanceCondition_js_1 = require("../models/V1VirtualMachineInstanceCondition.js");
const V1VirtualMachineInstanceFileSystem_js_1 = require("../models/V1VirtualMachineInstanceFileSystem.js");
const V1VirtualMachineInstanceFileSystemDisk_js_1 = require("../models/V1VirtualMachineInstanceFileSystemDisk.js");
const V1VirtualMachineInstanceFileSystemInfo_js_1 = require("../models/V1VirtualMachineInstanceFileSystemInfo.js");
const V1VirtualMachineInstanceFileSystemList_js_1 = require("../models/V1VirtualMachineInstanceFileSystemList.js");
const V1VirtualMachineInstanceGuestAgentInfo_js_1 = require("../models/V1VirtualMachineInstanceGuestAgentInfo.js");
const V1VirtualMachineInstanceGuestOSInfo_js_1 = require("../models/V1VirtualMachineInstanceGuestOSInfo.js");
const V1VirtualMachineInstanceGuestOSUser_js_1 = require("../models/V1VirtualMachineInstanceGuestOSUser.js");
const V1VirtualMachineInstanceGuestOSUserList_js_1 = require("../models/V1VirtualMachineInstanceGuestOSUserList.js");
const V1VirtualMachineInstanceList_js_1 = require("../models/V1VirtualMachineInstanceList.js");
const V1VirtualMachineInstanceMigration_js_1 = require("../models/V1VirtualMachineInstanceMigration.js");
const V1VirtualMachineInstanceMigrationCondition_js_1 = require("../models/V1VirtualMachineInstanceMigrationCondition.js");
const V1VirtualMachineInstanceMigrationList_js_1 = require("../models/V1VirtualMachineInstanceMigrationList.js");
const V1VirtualMachineInstanceMigrationPhaseTransitionTimestamp_js_1 = require("../models/V1VirtualMachineInstanceMigrationPhaseTransitionTimestamp.js");
const V1VirtualMachineInstanceMigrationSpec_js_1 = require("../models/V1VirtualMachineInstanceMigrationSpec.js");
const V1VirtualMachineInstanceMigrationState_js_1 = require("../models/V1VirtualMachineInstanceMigrationState.js");
const V1VirtualMachineInstanceMigrationStatus_js_1 = require("../models/V1VirtualMachineInstanceMigrationStatus.js");
const V1VirtualMachineInstanceNetworkInterface_js_1 = require("../models/V1VirtualMachineInstanceNetworkInterface.js");
const V1VirtualMachineInstancePhaseTransitionTimestamp_js_1 = require("../models/V1VirtualMachineInstancePhaseTransitionTimestamp.js");
const V1VirtualMachineInstancePreset_js_1 = require("../models/V1VirtualMachineInstancePreset.js");
const V1VirtualMachineInstancePresetList_js_1 = require("../models/V1VirtualMachineInstancePresetList.js");
const V1VirtualMachineInstancePresetSpec_js_1 = require("../models/V1VirtualMachineInstancePresetSpec.js");
const V1VirtualMachineInstanceProfile_js_1 = require("../models/V1VirtualMachineInstanceProfile.js");
const V1VirtualMachineInstanceReplicaSet_js_1 = require("../models/V1VirtualMachineInstanceReplicaSet.js");
const V1VirtualMachineInstanceReplicaSetCondition_js_1 = require("../models/V1VirtualMachineInstanceReplicaSetCondition.js");
const V1VirtualMachineInstanceReplicaSetList_js_1 = require("../models/V1VirtualMachineInstanceReplicaSetList.js");
const V1VirtualMachineInstanceReplicaSetSpec_js_1 = require("../models/V1VirtualMachineInstanceReplicaSetSpec.js");
const V1VirtualMachineInstanceReplicaSetStatus_js_1 = require("../models/V1VirtualMachineInstanceReplicaSetStatus.js");
const V1VirtualMachineInstanceSpec_js_1 = require("../models/V1VirtualMachineInstanceSpec.js");
const V1VirtualMachineInstanceStatus_js_1 = require("../models/V1VirtualMachineInstanceStatus.js");
const V1VirtualMachineInstanceTemplateSpec_js_1 = require("../models/V1VirtualMachineInstanceTemplateSpec.js");
const V1VirtualMachineList_js_1 = require("../models/V1VirtualMachineList.js");
const V1VirtualMachineMemoryDumpRequest_js_1 = require("../models/V1VirtualMachineMemoryDumpRequest.js");
const V1VirtualMachineOptions_js_1 = require("../models/V1VirtualMachineOptions.js");
const V1VirtualMachineSpec_js_1 = require("../models/V1VirtualMachineSpec.js");
const V1VirtualMachineStartFailure_js_1 = require("../models/V1VirtualMachineStartFailure.js");
const V1VirtualMachineStateChangeRequest_js_1 = require("../models/V1VirtualMachineStateChangeRequest.js");
const V1VirtualMachineStatus_js_1 = require("../models/V1VirtualMachineStatus.js");
const V1VirtualMachineVolumeRequest_js_1 = require("../models/V1VirtualMachineVolumeRequest.js");
const V1Volume_js_1 = require("../models/V1Volume.js");
const V1VolumeMigrationState_js_1 = require("../models/V1VolumeMigrationState.js");
const V1VolumeSnapshotStatus_js_1 = require("../models/V1VolumeSnapshotStatus.js");
const V1VolumeStatus_js_1 = require("../models/V1VolumeStatus.js");
const V1VolumeUpdateState_js_1 = require("../models/V1VolumeUpdateState.js");
const V1Watchdog_js_1 = require("../models/V1Watchdog.js");
const V1alpha1Condition_js_1 = require("../models/V1alpha1Condition.js");
const V1alpha1MigrationPolicy_js_1 = require("../models/V1alpha1MigrationPolicy.js");
const V1alpha1MigrationPolicyList_js_1 = require("../models/V1alpha1MigrationPolicyList.js");
const V1alpha1MigrationPolicySpec_js_1 = require("../models/V1alpha1MigrationPolicySpec.js");
const V1alpha1Selectors_js_1 = require("../models/V1alpha1Selectors.js");
const V1alpha1VirtualMachineClone_js_1 = require("../models/V1alpha1VirtualMachineClone.js");
const V1alpha1VirtualMachineCloneList_js_1 = require("../models/V1alpha1VirtualMachineCloneList.js");
const V1alpha1VirtualMachineCloneSpec_js_1 = require("../models/V1alpha1VirtualMachineCloneSpec.js");
const V1alpha1VirtualMachineCloneStatus_js_1 = require("../models/V1alpha1VirtualMachineCloneStatus.js");
const V1alpha1VirtualMachineCloneTemplateFilters_js_1 = require("../models/V1alpha1VirtualMachineCloneTemplateFilters.js");
const V1alpha1VirtualMachinePool_js_1 = require("../models/V1alpha1VirtualMachinePool.js");
const V1alpha1VirtualMachinePoolCondition_js_1 = require("../models/V1alpha1VirtualMachinePoolCondition.js");
const V1alpha1VirtualMachinePoolList_js_1 = require("../models/V1alpha1VirtualMachinePoolList.js");
const V1alpha1VirtualMachinePoolSpec_js_1 = require("../models/V1alpha1VirtualMachinePoolSpec.js");
const V1alpha1VirtualMachinePoolStatus_js_1 = require("../models/V1alpha1VirtualMachinePoolStatus.js");
const V1alpha1VirtualMachineTemplateSpec_js_1 = require("../models/V1alpha1VirtualMachineTemplateSpec.js");
const V1beta1CPUInstancetype_js_1 = require("../models/V1beta1CPUInstancetype.js");
const V1beta1CPUPreferenceRequirement_js_1 = require("../models/V1beta1CPUPreferenceRequirement.js");
const V1beta1CPUPreferences_js_1 = require("../models/V1beta1CPUPreferences.js");
const V1beta1ClockPreferences_js_1 = require("../models/V1beta1ClockPreferences.js");
const V1beta1Condition_js_1 = require("../models/V1beta1Condition.js");
const V1beta1DataVolumeCheckpoint_js_1 = require("../models/V1beta1DataVolumeCheckpoint.js");
const V1beta1DataVolumeSource_js_1 = require("../models/V1beta1DataVolumeSource.js");
const V1beta1DataVolumeSourceGCS_js_1 = require("../models/V1beta1DataVolumeSourceGCS.js");
const V1beta1DataVolumeSourceHTTP_js_1 = require("../models/V1beta1DataVolumeSourceHTTP.js");
const V1beta1DataVolumeSourceImageIO_js_1 = require("../models/V1beta1DataVolumeSourceImageIO.js");
const V1beta1DataVolumeSourcePVC_js_1 = require("../models/V1beta1DataVolumeSourcePVC.js");
const V1beta1DataVolumeSourceRef_js_1 = require("../models/V1beta1DataVolumeSourceRef.js");
const V1beta1DataVolumeSourceRegistry_js_1 = require("../models/V1beta1DataVolumeSourceRegistry.js");
const V1beta1DataVolumeSourceS3_js_1 = require("../models/V1beta1DataVolumeSourceS3.js");
const V1beta1DataVolumeSourceSnapshot_js_1 = require("../models/V1beta1DataVolumeSourceSnapshot.js");
const V1beta1DataVolumeSourceVDDK_js_1 = require("../models/V1beta1DataVolumeSourceVDDK.js");
const V1beta1DataVolumeSpec_js_1 = require("../models/V1beta1DataVolumeSpec.js");
const V1beta1DevicePreferences_js_1 = require("../models/V1beta1DevicePreferences.js");
const V1beta1Error_js_1 = require("../models/V1beta1Error.js");
const V1beta1FeaturePreferences_js_1 = require("../models/V1beta1FeaturePreferences.js");
const V1beta1FirmwarePreferences_js_1 = require("../models/V1beta1FirmwarePreferences.js");
const V1beta1MachinePreferences_js_1 = require("../models/V1beta1MachinePreferences.js");
const V1beta1MemoryInstancetype_js_1 = require("../models/V1beta1MemoryInstancetype.js");
const V1beta1MemoryPreferenceRequirement_js_1 = require("../models/V1beta1MemoryPreferenceRequirement.js");
const V1beta1PersistentVolumeClaim_js_1 = require("../models/V1beta1PersistentVolumeClaim.js");
const V1beta1PreferenceRequirements_js_1 = require("../models/V1beta1PreferenceRequirements.js");
const V1beta1SnapshotVolumesLists_js_1 = require("../models/V1beta1SnapshotVolumesLists.js");
const V1beta1SourceSpec_js_1 = require("../models/V1beta1SourceSpec.js");
const V1beta1SpreadOptions_js_1 = require("../models/V1beta1SpreadOptions.js");
const V1beta1StorageSpec_js_1 = require("../models/V1beta1StorageSpec.js");
const V1beta1VirtualMachine_js_1 = require("../models/V1beta1VirtualMachine.js");
const V1beta1VirtualMachineClusterInstancetype_js_1 = require("../models/V1beta1VirtualMachineClusterInstancetype.js");
const V1beta1VirtualMachineClusterInstancetypeList_js_1 = require("../models/V1beta1VirtualMachineClusterInstancetypeList.js");
const V1beta1VirtualMachineClusterPreference_js_1 = require("../models/V1beta1VirtualMachineClusterPreference.js");
const V1beta1VirtualMachineClusterPreferenceList_js_1 = require("../models/V1beta1VirtualMachineClusterPreferenceList.js");
const V1beta1VirtualMachineExport_js_1 = require("../models/V1beta1VirtualMachineExport.js");
const V1beta1VirtualMachineExportLink_js_1 = require("../models/V1beta1VirtualMachineExportLink.js");
const V1beta1VirtualMachineExportLinks_js_1 = require("../models/V1beta1VirtualMachineExportLinks.js");
const V1beta1VirtualMachineExportList_js_1 = require("../models/V1beta1VirtualMachineExportList.js");
const V1beta1VirtualMachineExportManifest_js_1 = require("../models/V1beta1VirtualMachineExportManifest.js");
const V1beta1VirtualMachineExportSpec_js_1 = require("../models/V1beta1VirtualMachineExportSpec.js");
const V1beta1VirtualMachineExportStatus_js_1 = require("../models/V1beta1VirtualMachineExportStatus.js");
const V1beta1VirtualMachineExportVolume_js_1 = require("../models/V1beta1VirtualMachineExportVolume.js");
const V1beta1VirtualMachineExportVolumeFormat_js_1 = require("../models/V1beta1VirtualMachineExportVolumeFormat.js");
const V1beta1VirtualMachineInstancetype_js_1 = require("../models/V1beta1VirtualMachineInstancetype.js");
const V1beta1VirtualMachineInstancetypeList_js_1 = require("../models/V1beta1VirtualMachineInstancetypeList.js");
const V1beta1VirtualMachineInstancetypeSpec_js_1 = require("../models/V1beta1VirtualMachineInstancetypeSpec.js");
const V1beta1VirtualMachinePreference_js_1 = require("../models/V1beta1VirtualMachinePreference.js");
const V1beta1VirtualMachinePreferenceList_js_1 = require("../models/V1beta1VirtualMachinePreferenceList.js");
const V1beta1VirtualMachinePreferenceSpec_js_1 = require("../models/V1beta1VirtualMachinePreferenceSpec.js");
const V1beta1VirtualMachineRestore_js_1 = require("../models/V1beta1VirtualMachineRestore.js");
const V1beta1VirtualMachineRestoreList_js_1 = require("../models/V1beta1VirtualMachineRestoreList.js");
const V1beta1VirtualMachineRestoreSpec_js_1 = require("../models/V1beta1VirtualMachineRestoreSpec.js");
const V1beta1VirtualMachineRestoreStatus_js_1 = require("../models/V1beta1VirtualMachineRestoreStatus.js");
const V1beta1VirtualMachineSnapshot_js_1 = require("../models/V1beta1VirtualMachineSnapshot.js");
const V1beta1VirtualMachineSnapshotContent_js_1 = require("../models/V1beta1VirtualMachineSnapshotContent.js");
const V1beta1VirtualMachineSnapshotContentList_js_1 = require("../models/V1beta1VirtualMachineSnapshotContentList.js");
const V1beta1VirtualMachineSnapshotContentSpec_js_1 = require("../models/V1beta1VirtualMachineSnapshotContentSpec.js");
const V1beta1VirtualMachineSnapshotContentStatus_js_1 = require("../models/V1beta1VirtualMachineSnapshotContentStatus.js");
const V1beta1VirtualMachineSnapshotList_js_1 = require("../models/V1beta1VirtualMachineSnapshotList.js");
const V1beta1VirtualMachineSnapshotSpec_js_1 = require("../models/V1beta1VirtualMachineSnapshotSpec.js");
const V1beta1VirtualMachineSnapshotStatus_js_1 = require("../models/V1beta1VirtualMachineSnapshotStatus.js");
const V1beta1VolumeBackup_js_1 = require("../models/V1beta1VolumeBackup.js");
const V1beta1VolumePreferences_js_1 = require("../models/V1beta1VolumePreferences.js");
const V1beta1VolumeRestore_js_1 = require("../models/V1beta1VolumeRestore.js");
const V1beta1VolumeSnapshotStatus_js_1 = require("../models/V1beta1VolumeSnapshotStatus.js");
/* tslint:disable:no-unused-variable */
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
let enumsMap = new Set([
    "K8sIoApiCoreV1HTTPGetActionSchemeEnum",
    "K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum",
    "K8sIoApiCoreV1PersistentVolumeClaimSpecAccessModesEnum",
    "K8sIoApiCoreV1PersistentVolumeClaimSpecVolumeModeEnum",
    "K8sIoApiCoreV1TolerationEffectEnum",
    "K8sIoApiCoreV1TolerationOperatorEnum",
    "K8sIoApiCoreV1TopologySpreadConstraintNodeAffinityPolicyEnum",
    "K8sIoApiCoreV1TopologySpreadConstraintNodeTaintsPolicyEnum",
    "K8sIoApiCoreV1TopologySpreadConstraintWhenUnsatisfiableEnum",
    "V1ContainerDiskSourceImagePullPolicyEnum",
    "V1KernelBootContainerImagePullPolicyEnum",
    "V1KubeVirtConfigurationImagePullPolicyEnum",
    "V1KubeVirtSpecImagePullPolicyEnum",
    "V1PersistentVolumeClaimInfoAccessModesEnum",
    "V1PersistentVolumeClaimInfoVolumeModeEnum",
    "V1VirtualMachineInstanceSpecDnsPolicyEnum",
    "V1VirtualMachineInstanceStatusQosClassEnum",
    "V1beta1StorageSpecAccessModesEnum",
    "V1beta1StorageSpecVolumeModeEnum",
]);
let typeMap = {
    "K8sIoApiCoreV1Affinity": K8sIoApiCoreV1Affinity_js_1.K8sIoApiCoreV1Affinity,
    "K8sIoApiCoreV1DownwardAPIVolumeFile": K8sIoApiCoreV1DownwardAPIVolumeFile_js_1.K8sIoApiCoreV1DownwardAPIVolumeFile,
    "K8sIoApiCoreV1ExecAction": K8sIoApiCoreV1ExecAction_js_1.K8sIoApiCoreV1ExecAction,
    "K8sIoApiCoreV1HTTPGetAction": K8sIoApiCoreV1HTTPGetAction_js_1.K8sIoApiCoreV1HTTPGetAction,
    "K8sIoApiCoreV1HTTPHeader": K8sIoApiCoreV1HTTPHeader_js_1.K8sIoApiCoreV1HTTPHeader,
    "K8sIoApiCoreV1LocalObjectReference": K8sIoApiCoreV1LocalObjectReference_js_1.K8sIoApiCoreV1LocalObjectReference,
    "K8sIoApiCoreV1NodeAffinity": K8sIoApiCoreV1NodeAffinity_js_1.K8sIoApiCoreV1NodeAffinity,
    "K8sIoApiCoreV1NodeSelector": K8sIoApiCoreV1NodeSelector_js_1.K8sIoApiCoreV1NodeSelector,
    "K8sIoApiCoreV1NodeSelectorRequirement": K8sIoApiCoreV1NodeSelectorRequirement_js_1.K8sIoApiCoreV1NodeSelectorRequirement,
    "K8sIoApiCoreV1NodeSelectorTerm": K8sIoApiCoreV1NodeSelectorTerm_js_1.K8sIoApiCoreV1NodeSelectorTerm,
    "K8sIoApiCoreV1ObjectFieldSelector": K8sIoApiCoreV1ObjectFieldSelector_js_1.K8sIoApiCoreV1ObjectFieldSelector,
    "K8sIoApiCoreV1PersistentVolumeClaimSpec": K8sIoApiCoreV1PersistentVolumeClaimSpec_js_1.K8sIoApiCoreV1PersistentVolumeClaimSpec,
    "K8sIoApiCoreV1PersistentVolumeClaimVolumeSource": K8sIoApiCoreV1PersistentVolumeClaimVolumeSource_js_1.K8sIoApiCoreV1PersistentVolumeClaimVolumeSource,
    "K8sIoApiCoreV1PodAffinity": K8sIoApiCoreV1PodAffinity_js_1.K8sIoApiCoreV1PodAffinity,
    "K8sIoApiCoreV1PodAffinityTerm": K8sIoApiCoreV1PodAffinityTerm_js_1.K8sIoApiCoreV1PodAffinityTerm,
    "K8sIoApiCoreV1PodAntiAffinity": K8sIoApiCoreV1PodAntiAffinity_js_1.K8sIoApiCoreV1PodAntiAffinity,
    "K8sIoApiCoreV1PodDNSConfig": K8sIoApiCoreV1PodDNSConfig_js_1.K8sIoApiCoreV1PodDNSConfig,
    "K8sIoApiCoreV1PodDNSConfigOption": K8sIoApiCoreV1PodDNSConfigOption_js_1.K8sIoApiCoreV1PodDNSConfigOption,
    "K8sIoApiCoreV1PreferredSchedulingTerm": K8sIoApiCoreV1PreferredSchedulingTerm_js_1.K8sIoApiCoreV1PreferredSchedulingTerm,
    "K8sIoApiCoreV1ResourceClaim": K8sIoApiCoreV1ResourceClaim_js_1.K8sIoApiCoreV1ResourceClaim,
    "K8sIoApiCoreV1ResourceFieldSelector": K8sIoApiCoreV1ResourceFieldSelector_js_1.K8sIoApiCoreV1ResourceFieldSelector,
    "K8sIoApiCoreV1ResourceRequirements": K8sIoApiCoreV1ResourceRequirements_js_1.K8sIoApiCoreV1ResourceRequirements,
    "K8sIoApiCoreV1TCPSocketAction": K8sIoApiCoreV1TCPSocketAction_js_1.K8sIoApiCoreV1TCPSocketAction,
    "K8sIoApiCoreV1Toleration": K8sIoApiCoreV1Toleration_js_1.K8sIoApiCoreV1Toleration,
    "K8sIoApiCoreV1TopologySpreadConstraint": K8sIoApiCoreV1TopologySpreadConstraint_js_1.K8sIoApiCoreV1TopologySpreadConstraint,
    "K8sIoApiCoreV1TypedLocalObjectReference": K8sIoApiCoreV1TypedLocalObjectReference_js_1.K8sIoApiCoreV1TypedLocalObjectReference,
    "K8sIoApiCoreV1TypedObjectReference": K8sIoApiCoreV1TypedObjectReference_js_1.K8sIoApiCoreV1TypedObjectReference,
    "K8sIoApiCoreV1VolumeResourceRequirements": K8sIoApiCoreV1VolumeResourceRequirements_js_1.K8sIoApiCoreV1VolumeResourceRequirements,
    "K8sIoApiCoreV1WeightedPodAffinityTerm": K8sIoApiCoreV1WeightedPodAffinityTerm_js_1.K8sIoApiCoreV1WeightedPodAffinityTerm,
    "K8sIoApimachineryPkgApisMetaV1APIGroup": K8sIoApimachineryPkgApisMetaV1APIGroup_js_1.K8sIoApimachineryPkgApisMetaV1APIGroup,
    "K8sIoApimachineryPkgApisMetaV1APIGroupList": K8sIoApimachineryPkgApisMetaV1APIGroupList_js_1.K8sIoApimachineryPkgApisMetaV1APIGroupList,
    "K8sIoApimachineryPkgApisMetaV1APIResource": K8sIoApimachineryPkgApisMetaV1APIResource_js_1.K8sIoApimachineryPkgApisMetaV1APIResource,
    "K8sIoApimachineryPkgApisMetaV1APIResourceList": K8sIoApimachineryPkgApisMetaV1APIResourceList_js_1.K8sIoApimachineryPkgApisMetaV1APIResourceList,
    "K8sIoApimachineryPkgApisMetaV1DeleteOptions": K8sIoApimachineryPkgApisMetaV1DeleteOptions_js_1.K8sIoApimachineryPkgApisMetaV1DeleteOptions,
    "K8sIoApimachineryPkgApisMetaV1GroupVersionForDiscovery": K8sIoApimachineryPkgApisMetaV1GroupVersionForDiscovery_js_1.K8sIoApimachineryPkgApisMetaV1GroupVersionForDiscovery,
    "K8sIoApimachineryPkgApisMetaV1LabelSelector": K8sIoApimachineryPkgApisMetaV1LabelSelector_js_1.K8sIoApimachineryPkgApisMetaV1LabelSelector,
    "K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement": K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement_js_1.K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement,
    "K8sIoApimachineryPkgApisMetaV1ListMeta": K8sIoApimachineryPkgApisMetaV1ListMeta_js_1.K8sIoApimachineryPkgApisMetaV1ListMeta,
    "K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry": K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry_js_1.K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry,
    "K8sIoApimachineryPkgApisMetaV1ObjectMeta": K8sIoApimachineryPkgApisMetaV1ObjectMeta_js_1.K8sIoApimachineryPkgApisMetaV1ObjectMeta,
    "K8sIoApimachineryPkgApisMetaV1OwnerReference": K8sIoApimachineryPkgApisMetaV1OwnerReference_js_1.K8sIoApimachineryPkgApisMetaV1OwnerReference,
    "K8sIoApimachineryPkgApisMetaV1Preconditions": K8sIoApimachineryPkgApisMetaV1Preconditions_js_1.K8sIoApimachineryPkgApisMetaV1Preconditions,
    "K8sIoApimachineryPkgApisMetaV1RootPaths": K8sIoApimachineryPkgApisMetaV1RootPaths_js_1.K8sIoApimachineryPkgApisMetaV1RootPaths,
    "K8sIoApimachineryPkgApisMetaV1ServerAddressByClientCIDR": K8sIoApimachineryPkgApisMetaV1ServerAddressByClientCIDR_js_1.K8sIoApimachineryPkgApisMetaV1ServerAddressByClientCIDR,
    "K8sIoApimachineryPkgApisMetaV1Status": K8sIoApimachineryPkgApisMetaV1Status_js_1.K8sIoApimachineryPkgApisMetaV1Status,
    "K8sIoApimachineryPkgApisMetaV1StatusCause": K8sIoApimachineryPkgApisMetaV1StatusCause_js_1.K8sIoApimachineryPkgApisMetaV1StatusCause,
    "K8sIoApimachineryPkgApisMetaV1StatusDetails": K8sIoApimachineryPkgApisMetaV1StatusDetails_js_1.K8sIoApimachineryPkgApisMetaV1StatusDetails,
    "K8sIoApimachineryPkgApisMetaV1WatchEvent": K8sIoApimachineryPkgApisMetaV1WatchEvent_js_1.K8sIoApimachineryPkgApisMetaV1WatchEvent,
    "V1ACPI": V1ACPI_js_1.V1ACPI,
    "V1AccessCredential": V1AccessCredential_js_1.V1AccessCredential,
    "V1AccessCredentialSecretSource": V1AccessCredentialSecretSource_js_1.V1AccessCredentialSecretSource,
    "V1AddVolumeOptions": V1AddVolumeOptions_js_1.V1AddVolumeOptions,
    "V1ArchConfiguration": V1ArchConfiguration_js_1.V1ArchConfiguration,
    "V1ArchSpecificConfiguration": V1ArchSpecificConfiguration_js_1.V1ArchSpecificConfiguration,
    "V1BIOS": V1BIOS_js_1.V1BIOS,
    "V1BlockSize": V1BlockSize_js_1.V1BlockSize,
    "V1Bootloader": V1Bootloader_js_1.V1Bootloader,
    "V1CDRomTarget": V1CDRomTarget_js_1.V1CDRomTarget,
    "V1CPU": V1CPU_js_1.V1CPU,
    "V1CPUFeature": V1CPUFeature_js_1.V1CPUFeature,
    "V1CPUTopology": V1CPUTopology_js_1.V1CPUTopology,
    "V1CertConfig": V1CertConfig_js_1.V1CertConfig,
    "V1Chassis": V1Chassis_js_1.V1Chassis,
    "V1Clock": V1Clock_js_1.V1Clock,
    "V1ClockOffset": V1ClockOffset_js_1.V1ClockOffset,
    "V1ClockOffsetUTC": V1ClockOffsetUTC_js_1.V1ClockOffsetUTC,
    "V1CloudInitConfigDriveSource": V1CloudInitConfigDriveSource_js_1.V1CloudInitConfigDriveSource,
    "V1CloudInitNoCloudSource": V1CloudInitNoCloudSource_js_1.V1CloudInitNoCloudSource,
    "V1CommonInstancetypesDeployment": V1CommonInstancetypesDeployment_js_1.V1CommonInstancetypesDeployment,
    "V1ComponentConfig": V1ComponentConfig_js_1.V1ComponentConfig,
    "V1ConfigMapVolumeSource": V1ConfigMapVolumeSource_js_1.V1ConfigMapVolumeSource,
    "V1ContainerDiskInfo": V1ContainerDiskInfo_js_1.V1ContainerDiskInfo,
    "V1ContainerDiskSource": V1ContainerDiskSource_js_1.V1ContainerDiskSource,
    "V1CustomBlockSize": V1CustomBlockSize_js_1.V1CustomBlockSize,
    "V1CustomProfile": V1CustomProfile_js_1.V1CustomProfile,
    "V1CustomizeComponents": V1CustomizeComponents_js_1.V1CustomizeComponents,
    "V1CustomizeComponentsPatch": V1CustomizeComponentsPatch_js_1.V1CustomizeComponentsPatch,
    "V1DHCPOptions": V1DHCPOptions_js_1.V1DHCPOptions,
    "V1DHCPPrivateOptions": V1DHCPPrivateOptions_js_1.V1DHCPPrivateOptions,
    "V1DataVolumeSource": V1DataVolumeSource_js_1.V1DataVolumeSource,
    "V1DataVolumeTemplateSpec": V1DataVolumeTemplateSpec_js_1.V1DataVolumeTemplateSpec,
    "V1DeveloperConfiguration": V1DeveloperConfiguration_js_1.V1DeveloperConfiguration,
    "V1Devices": V1Devices_js_1.V1Devices,
    "V1Disk": V1Disk_js_1.V1Disk,
    "V1DiskTarget": V1DiskTarget_js_1.V1DiskTarget,
    "V1DiskVerification": V1DiskVerification_js_1.V1DiskVerification,
    "V1DomainMemoryDumpInfo": V1DomainMemoryDumpInfo_js_1.V1DomainMemoryDumpInfo,
    "V1DomainSpec": V1DomainSpec_js_1.V1DomainSpec,
    "V1DownwardAPIVolumeSource": V1DownwardAPIVolumeSource_js_1.V1DownwardAPIVolumeSource,
    "V1EFI": V1EFI_js_1.V1EFI,
    "V1EmptyDiskSource": V1EmptyDiskSource_js_1.V1EmptyDiskSource,
    "V1EphemeralVolumeSource": V1EphemeralVolumeSource_js_1.V1EphemeralVolumeSource,
    "V1FeatureAPIC": V1FeatureAPIC_js_1.V1FeatureAPIC,
    "V1FeatureHyperv": V1FeatureHyperv_js_1.V1FeatureHyperv,
    "V1FeatureKVM": V1FeatureKVM_js_1.V1FeatureKVM,
    "V1FeatureSpinlocks": V1FeatureSpinlocks_js_1.V1FeatureSpinlocks,
    "V1FeatureState": V1FeatureState_js_1.V1FeatureState,
    "V1FeatureVendorID": V1FeatureVendorID_js_1.V1FeatureVendorID,
    "V1Features": V1Features_js_1.V1Features,
    "V1Filesystem": V1Filesystem_js_1.V1Filesystem,
    "V1Firmware": V1Firmware_js_1.V1Firmware,
    "V1Flags": V1Flags_js_1.V1Flags,
    "V1FreezeUnfreezeTimeout": V1FreezeUnfreezeTimeout_js_1.V1FreezeUnfreezeTimeout,
    "V1GPU": V1GPU_js_1.V1GPU,
    "V1GenerationStatus": V1GenerationStatus_js_1.V1GenerationStatus,
    "V1GuestAgentCommandInfo": V1GuestAgentCommandInfo_js_1.V1GuestAgentCommandInfo,
    "V1HPETTimer": V1HPETTimer_js_1.V1HPETTimer,
    "V1HostDevice": V1HostDevice_js_1.V1HostDevice,
    "V1HostDisk": V1HostDisk_js_1.V1HostDisk,
    "V1HotplugVolumeSource": V1HotplugVolumeSource_js_1.V1HotplugVolumeSource,
    "V1HotplugVolumeStatus": V1HotplugVolumeStatus_js_1.V1HotplugVolumeStatus,
    "V1Hugepages": V1Hugepages_js_1.V1Hugepages,
    "V1HyperVPassthrough": V1HyperVPassthrough_js_1.V1HyperVPassthrough,
    "V1HypervTimer": V1HypervTimer_js_1.V1HypervTimer,
    "V1I6300ESBWatchdog": V1I6300ESBWatchdog_js_1.V1I6300ESBWatchdog,
    "V1InitrdInfo": V1InitrdInfo_js_1.V1InitrdInfo,
    "V1Input": V1Input_js_1.V1Input,
    "V1InstancetypeConfiguration": V1InstancetypeConfiguration_js_1.V1InstancetypeConfiguration,
    "V1InstancetypeMatcher": V1InstancetypeMatcher_js_1.V1InstancetypeMatcher,
    "V1Interface": V1Interface_js_1.V1Interface,
    "V1InterfaceBindingMigration": V1InterfaceBindingMigration_js_1.V1InterfaceBindingMigration,
    "V1InterfaceBindingPlugin": V1InterfaceBindingPlugin_js_1.V1InterfaceBindingPlugin,
    "V1KSMConfiguration": V1KSMConfiguration_js_1.V1KSMConfiguration,
    "V1KVMTimer": V1KVMTimer_js_1.V1KVMTimer,
    "V1KernelBoot": V1KernelBoot_js_1.V1KernelBoot,
    "V1KernelBootContainer": V1KernelBootContainer_js_1.V1KernelBootContainer,
    "V1KernelBootStatus": V1KernelBootStatus_js_1.V1KernelBootStatus,
    "V1KernelInfo": V1KernelInfo_js_1.V1KernelInfo,
    "V1KubeVirt": V1KubeVirt_js_1.V1KubeVirt,
    "V1KubeVirtCertificateRotateStrategy": V1KubeVirtCertificateRotateStrategy_js_1.V1KubeVirtCertificateRotateStrategy,
    "V1KubeVirtCondition": V1KubeVirtCondition_js_1.V1KubeVirtCondition,
    "V1KubeVirtConfiguration": V1KubeVirtConfiguration_js_1.V1KubeVirtConfiguration,
    "V1KubeVirtList": V1KubeVirtList_js_1.V1KubeVirtList,
    "V1KubeVirtSelfSignConfiguration": V1KubeVirtSelfSignConfiguration_js_1.V1KubeVirtSelfSignConfiguration,
    "V1KubeVirtSpec": V1KubeVirtSpec_js_1.V1KubeVirtSpec,
    "V1KubeVirtStatus": V1KubeVirtStatus_js_1.V1KubeVirtStatus,
    "V1KubeVirtWorkloadUpdateStrategy": V1KubeVirtWorkloadUpdateStrategy_js_1.V1KubeVirtWorkloadUpdateStrategy,
    "V1LaunchSecurity": V1LaunchSecurity_js_1.V1LaunchSecurity,
    "V1LiveUpdateConfiguration": V1LiveUpdateConfiguration_js_1.V1LiveUpdateConfiguration,
    "V1LogVerbosity": V1LogVerbosity_js_1.V1LogVerbosity,
    "V1LunTarget": V1LunTarget_js_1.V1LunTarget,
    "V1Machine": V1Machine_js_1.V1Machine,
    "V1MediatedDevicesConfiguration": V1MediatedDevicesConfiguration_js_1.V1MediatedDevicesConfiguration,
    "V1MediatedHostDevice": V1MediatedHostDevice_js_1.V1MediatedHostDevice,
    "V1Memory": V1Memory_js_1.V1Memory,
    "V1MemoryDumpVolumeSource": V1MemoryDumpVolumeSource_js_1.V1MemoryDumpVolumeSource,
    "V1MemoryStatus": V1MemoryStatus_js_1.V1MemoryStatus,
    "V1MigrateOptions": V1MigrateOptions_js_1.V1MigrateOptions,
    "V1MigrationConfiguration": V1MigrationConfiguration_js_1.V1MigrationConfiguration,
    "V1MultusNetwork": V1MultusNetwork_js_1.V1MultusNetwork,
    "V1NUMA": V1NUMA_js_1.V1NUMA,
    "V1Network": V1Network_js_1.V1Network,
    "V1NetworkConfiguration": V1NetworkConfiguration_js_1.V1NetworkConfiguration,
    "V1NodeMediatedDeviceTypesConfig": V1NodeMediatedDeviceTypesConfig_js_1.V1NodeMediatedDeviceTypesConfig,
    "V1NodePlacement": V1NodePlacement_js_1.V1NodePlacement,
    "V1PITTimer": V1PITTimer_js_1.V1PITTimer,
    "V1PauseOptions": V1PauseOptions_js_1.V1PauseOptions,
    "V1PciHostDevice": V1PciHostDevice_js_1.V1PciHostDevice,
    "V1PermittedHostDevices": V1PermittedHostDevices_js_1.V1PermittedHostDevices,
    "V1PersistentVolumeClaimInfo": V1PersistentVolumeClaimInfo_js_1.V1PersistentVolumeClaimInfo,
    "V1PersistentVolumeClaimVolumeSource": V1PersistentVolumeClaimVolumeSource_js_1.V1PersistentVolumeClaimVolumeSource,
    "V1PluginBinding": V1PluginBinding_js_1.V1PluginBinding,
    "V1PodNetwork": V1PodNetwork_js_1.V1PodNetwork,
    "V1Port": V1Port_js_1.V1Port,
    "V1PreferenceMatcher": V1PreferenceMatcher_js_1.V1PreferenceMatcher,
    "V1Probe": V1Probe_js_1.V1Probe,
    "V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagation": V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagation_js_1.V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagation,
    "V1RESTClientConfiguration": V1RESTClientConfiguration_js_1.V1RESTClientConfiguration,
    "V1RTCTimer": V1RTCTimer_js_1.V1RTCTimer,
    "V1RateLimiter": V1RateLimiter_js_1.V1RateLimiter,
    "V1Realtime": V1Realtime_js_1.V1Realtime,
    "V1ReloadableComponentConfiguration": V1ReloadableComponentConfiguration_js_1.V1ReloadableComponentConfiguration,
    "V1RemoveVolumeOptions": V1RemoveVolumeOptions_js_1.V1RemoveVolumeOptions,
    "V1ResourceRequirements": V1ResourceRequirements_js_1.V1ResourceRequirements,
    "V1ResourceRequirementsWithoutClaims": V1ResourceRequirementsWithoutClaims_js_1.V1ResourceRequirementsWithoutClaims,
    "V1RestartOptions": V1RestartOptions_js_1.V1RestartOptions,
    "V1SEV": V1SEV_js_1.V1SEV,
    "V1SEVMeasurementInfo": V1SEVMeasurementInfo_js_1.V1SEVMeasurementInfo,
    "V1SEVPlatformInfo": V1SEVPlatformInfo_js_1.V1SEVPlatformInfo,
    "V1SEVPolicy": V1SEVPolicy_js_1.V1SEVPolicy,
    "V1SEVSecretOptions": V1SEVSecretOptions_js_1.V1SEVSecretOptions,
    "V1SEVSessionOptions": V1SEVSessionOptions_js_1.V1SEVSessionOptions,
    "V1SMBiosConfiguration": V1SMBiosConfiguration_js_1.V1SMBiosConfiguration,
    "V1SSHPublicKeyAccessCredential": V1SSHPublicKeyAccessCredential_js_1.V1SSHPublicKeyAccessCredential,
    "V1SSHPublicKeyAccessCredentialPropagationMethod": V1SSHPublicKeyAccessCredentialPropagationMethod_js_1.V1SSHPublicKeyAccessCredentialPropagationMethod,
    "V1SSHPublicKeyAccessCredentialSource": V1SSHPublicKeyAccessCredentialSource_js_1.V1SSHPublicKeyAccessCredentialSource,
    "V1SeccompConfiguration": V1SeccompConfiguration_js_1.V1SeccompConfiguration,
    "V1SecretVolumeSource": V1SecretVolumeSource_js_1.V1SecretVolumeSource,
    "V1ServiceAccountVolumeSource": V1ServiceAccountVolumeSource_js_1.V1ServiceAccountVolumeSource,
    "V1SoundDevice": V1SoundDevice_js_1.V1SoundDevice,
    "V1StartOptions": V1StartOptions_js_1.V1StartOptions,
    "V1StopOptions": V1StopOptions_js_1.V1StopOptions,
    "V1StorageMigratedVolumeInfo": V1StorageMigratedVolumeInfo_js_1.V1StorageMigratedVolumeInfo,
    "V1SupportContainerResources": V1SupportContainerResources_js_1.V1SupportContainerResources,
    "V1SyNICTimer": V1SyNICTimer_js_1.V1SyNICTimer,
    "V1SysprepSource": V1SysprepSource_js_1.V1SysprepSource,
    "V1TLSConfiguration": V1TLSConfiguration_js_1.V1TLSConfiguration,
    "V1TPMDevice": V1TPMDevice_js_1.V1TPMDevice,
    "V1Timer": V1Timer_js_1.V1Timer,
    "V1TokenBucketRateLimiter": V1TokenBucketRateLimiter_js_1.V1TokenBucketRateLimiter,
    "V1TopologyHints": V1TopologyHints_js_1.V1TopologyHints,
    "V1USBHostDevice": V1USBHostDevice_js_1.V1USBHostDevice,
    "V1USBSelector": V1USBSelector_js_1.V1USBSelector,
    "V1UnpauseOptions": V1UnpauseOptions_js_1.V1UnpauseOptions,
    "V1UserPasswordAccessCredential": V1UserPasswordAccessCredential_js_1.V1UserPasswordAccessCredential,
    "V1UserPasswordAccessCredentialPropagationMethod": V1UserPasswordAccessCredentialPropagationMethod_js_1.V1UserPasswordAccessCredentialPropagationMethod,
    "V1UserPasswordAccessCredentialSource": V1UserPasswordAccessCredentialSource_js_1.V1UserPasswordAccessCredentialSource,
    "V1VGPUDisplayOptions": V1VGPUDisplayOptions_js_1.V1VGPUDisplayOptions,
    "V1VGPUOptions": V1VGPUOptions_js_1.V1VGPUOptions,
    "V1VirtualMachine": V1VirtualMachine_js_1.V1VirtualMachine,
    "V1VirtualMachineCondition": V1VirtualMachineCondition_js_1.V1VirtualMachineCondition,
    "V1VirtualMachineInstance": V1VirtualMachineInstance_js_1.V1VirtualMachineInstance,
    "V1VirtualMachineInstanceCondition": V1VirtualMachineInstanceCondition_js_1.V1VirtualMachineInstanceCondition,
    "V1VirtualMachineInstanceFileSystem": V1VirtualMachineInstanceFileSystem_js_1.V1VirtualMachineInstanceFileSystem,
    "V1VirtualMachineInstanceFileSystemDisk": V1VirtualMachineInstanceFileSystemDisk_js_1.V1VirtualMachineInstanceFileSystemDisk,
    "V1VirtualMachineInstanceFileSystemInfo": V1VirtualMachineInstanceFileSystemInfo_js_1.V1VirtualMachineInstanceFileSystemInfo,
    "V1VirtualMachineInstanceFileSystemList": V1VirtualMachineInstanceFileSystemList_js_1.V1VirtualMachineInstanceFileSystemList,
    "V1VirtualMachineInstanceGuestAgentInfo": V1VirtualMachineInstanceGuestAgentInfo_js_1.V1VirtualMachineInstanceGuestAgentInfo,
    "V1VirtualMachineInstanceGuestOSInfo": V1VirtualMachineInstanceGuestOSInfo_js_1.V1VirtualMachineInstanceGuestOSInfo,
    "V1VirtualMachineInstanceGuestOSUser": V1VirtualMachineInstanceGuestOSUser_js_1.V1VirtualMachineInstanceGuestOSUser,
    "V1VirtualMachineInstanceGuestOSUserList": V1VirtualMachineInstanceGuestOSUserList_js_1.V1VirtualMachineInstanceGuestOSUserList,
    "V1VirtualMachineInstanceList": V1VirtualMachineInstanceList_js_1.V1VirtualMachineInstanceList,
    "V1VirtualMachineInstanceMigration": V1VirtualMachineInstanceMigration_js_1.V1VirtualMachineInstanceMigration,
    "V1VirtualMachineInstanceMigrationCondition": V1VirtualMachineInstanceMigrationCondition_js_1.V1VirtualMachineInstanceMigrationCondition,
    "V1VirtualMachineInstanceMigrationList": V1VirtualMachineInstanceMigrationList_js_1.V1VirtualMachineInstanceMigrationList,
    "V1VirtualMachineInstanceMigrationPhaseTransitionTimestamp": V1VirtualMachineInstanceMigrationPhaseTransitionTimestamp_js_1.V1VirtualMachineInstanceMigrationPhaseTransitionTimestamp,
    "V1VirtualMachineInstanceMigrationSpec": V1VirtualMachineInstanceMigrationSpec_js_1.V1VirtualMachineInstanceMigrationSpec,
    "V1VirtualMachineInstanceMigrationState": V1VirtualMachineInstanceMigrationState_js_1.V1VirtualMachineInstanceMigrationState,
    "V1VirtualMachineInstanceMigrationStatus": V1VirtualMachineInstanceMigrationStatus_js_1.V1VirtualMachineInstanceMigrationStatus,
    "V1VirtualMachineInstanceNetworkInterface": V1VirtualMachineInstanceNetworkInterface_js_1.V1VirtualMachineInstanceNetworkInterface,
    "V1VirtualMachineInstancePhaseTransitionTimestamp": V1VirtualMachineInstancePhaseTransitionTimestamp_js_1.V1VirtualMachineInstancePhaseTransitionTimestamp,
    "V1VirtualMachineInstancePreset": V1VirtualMachineInstancePreset_js_1.V1VirtualMachineInstancePreset,
    "V1VirtualMachineInstancePresetList": V1VirtualMachineInstancePresetList_js_1.V1VirtualMachineInstancePresetList,
    "V1VirtualMachineInstancePresetSpec": V1VirtualMachineInstancePresetSpec_js_1.V1VirtualMachineInstancePresetSpec,
    "V1VirtualMachineInstanceProfile": V1VirtualMachineInstanceProfile_js_1.V1VirtualMachineInstanceProfile,
    "V1VirtualMachineInstanceReplicaSet": V1VirtualMachineInstanceReplicaSet_js_1.V1VirtualMachineInstanceReplicaSet,
    "V1VirtualMachineInstanceReplicaSetCondition": V1VirtualMachineInstanceReplicaSetCondition_js_1.V1VirtualMachineInstanceReplicaSetCondition,
    "V1VirtualMachineInstanceReplicaSetList": V1VirtualMachineInstanceReplicaSetList_js_1.V1VirtualMachineInstanceReplicaSetList,
    "V1VirtualMachineInstanceReplicaSetSpec": V1VirtualMachineInstanceReplicaSetSpec_js_1.V1VirtualMachineInstanceReplicaSetSpec,
    "V1VirtualMachineInstanceReplicaSetStatus": V1VirtualMachineInstanceReplicaSetStatus_js_1.V1VirtualMachineInstanceReplicaSetStatus,
    "V1VirtualMachineInstanceSpec": V1VirtualMachineInstanceSpec_js_1.V1VirtualMachineInstanceSpec,
    "V1VirtualMachineInstanceStatus": V1VirtualMachineInstanceStatus_js_1.V1VirtualMachineInstanceStatus,
    "V1VirtualMachineInstanceTemplateSpec": V1VirtualMachineInstanceTemplateSpec_js_1.V1VirtualMachineInstanceTemplateSpec,
    "V1VirtualMachineList": V1VirtualMachineList_js_1.V1VirtualMachineList,
    "V1VirtualMachineMemoryDumpRequest": V1VirtualMachineMemoryDumpRequest_js_1.V1VirtualMachineMemoryDumpRequest,
    "V1VirtualMachineOptions": V1VirtualMachineOptions_js_1.V1VirtualMachineOptions,
    "V1VirtualMachineSpec": V1VirtualMachineSpec_js_1.V1VirtualMachineSpec,
    "V1VirtualMachineStartFailure": V1VirtualMachineStartFailure_js_1.V1VirtualMachineStartFailure,
    "V1VirtualMachineStateChangeRequest": V1VirtualMachineStateChangeRequest_js_1.V1VirtualMachineStateChangeRequest,
    "V1VirtualMachineStatus": V1VirtualMachineStatus_js_1.V1VirtualMachineStatus,
    "V1VirtualMachineVolumeRequest": V1VirtualMachineVolumeRequest_js_1.V1VirtualMachineVolumeRequest,
    "V1Volume": V1Volume_js_1.V1Volume,
    "V1VolumeMigrationState": V1VolumeMigrationState_js_1.V1VolumeMigrationState,
    "V1VolumeSnapshotStatus": V1VolumeSnapshotStatus_js_1.V1VolumeSnapshotStatus,
    "V1VolumeStatus": V1VolumeStatus_js_1.V1VolumeStatus,
    "V1VolumeUpdateState": V1VolumeUpdateState_js_1.V1VolumeUpdateState,
    "V1Watchdog": V1Watchdog_js_1.V1Watchdog,
    "V1alpha1Condition": V1alpha1Condition_js_1.V1alpha1Condition,
    "V1alpha1MigrationPolicy": V1alpha1MigrationPolicy_js_1.V1alpha1MigrationPolicy,
    "V1alpha1MigrationPolicyList": V1alpha1MigrationPolicyList_js_1.V1alpha1MigrationPolicyList,
    "V1alpha1MigrationPolicySpec": V1alpha1MigrationPolicySpec_js_1.V1alpha1MigrationPolicySpec,
    "V1alpha1Selectors": V1alpha1Selectors_js_1.V1alpha1Selectors,
    "V1alpha1VirtualMachineClone": V1alpha1VirtualMachineClone_js_1.V1alpha1VirtualMachineClone,
    "V1alpha1VirtualMachineCloneList": V1alpha1VirtualMachineCloneList_js_1.V1alpha1VirtualMachineCloneList,
    "V1alpha1VirtualMachineCloneSpec": V1alpha1VirtualMachineCloneSpec_js_1.V1alpha1VirtualMachineCloneSpec,
    "V1alpha1VirtualMachineCloneStatus": V1alpha1VirtualMachineCloneStatus_js_1.V1alpha1VirtualMachineCloneStatus,
    "V1alpha1VirtualMachineCloneTemplateFilters": V1alpha1VirtualMachineCloneTemplateFilters_js_1.V1alpha1VirtualMachineCloneTemplateFilters,
    "V1alpha1VirtualMachinePool": V1alpha1VirtualMachinePool_js_1.V1alpha1VirtualMachinePool,
    "V1alpha1VirtualMachinePoolCondition": V1alpha1VirtualMachinePoolCondition_js_1.V1alpha1VirtualMachinePoolCondition,
    "V1alpha1VirtualMachinePoolList": V1alpha1VirtualMachinePoolList_js_1.V1alpha1VirtualMachinePoolList,
    "V1alpha1VirtualMachinePoolSpec": V1alpha1VirtualMachinePoolSpec_js_1.V1alpha1VirtualMachinePoolSpec,
    "V1alpha1VirtualMachinePoolStatus": V1alpha1VirtualMachinePoolStatus_js_1.V1alpha1VirtualMachinePoolStatus,
    "V1alpha1VirtualMachineTemplateSpec": V1alpha1VirtualMachineTemplateSpec_js_1.V1alpha1VirtualMachineTemplateSpec,
    "V1beta1CPUInstancetype": V1beta1CPUInstancetype_js_1.V1beta1CPUInstancetype,
    "V1beta1CPUPreferenceRequirement": V1beta1CPUPreferenceRequirement_js_1.V1beta1CPUPreferenceRequirement,
    "V1beta1CPUPreferences": V1beta1CPUPreferences_js_1.V1beta1CPUPreferences,
    "V1beta1ClockPreferences": V1beta1ClockPreferences_js_1.V1beta1ClockPreferences,
    "V1beta1Condition": V1beta1Condition_js_1.V1beta1Condition,
    "V1beta1DataVolumeCheckpoint": V1beta1DataVolumeCheckpoint_js_1.V1beta1DataVolumeCheckpoint,
    "V1beta1DataVolumeSource": V1beta1DataVolumeSource_js_1.V1beta1DataVolumeSource,
    "V1beta1DataVolumeSourceGCS": V1beta1DataVolumeSourceGCS_js_1.V1beta1DataVolumeSourceGCS,
    "V1beta1DataVolumeSourceHTTP": V1beta1DataVolumeSourceHTTP_js_1.V1beta1DataVolumeSourceHTTP,
    "V1beta1DataVolumeSourceImageIO": V1beta1DataVolumeSourceImageIO_js_1.V1beta1DataVolumeSourceImageIO,
    "V1beta1DataVolumeSourcePVC": V1beta1DataVolumeSourcePVC_js_1.V1beta1DataVolumeSourcePVC,
    "V1beta1DataVolumeSourceRef": V1beta1DataVolumeSourceRef_js_1.V1beta1DataVolumeSourceRef,
    "V1beta1DataVolumeSourceRegistry": V1beta1DataVolumeSourceRegistry_js_1.V1beta1DataVolumeSourceRegistry,
    "V1beta1DataVolumeSourceS3": V1beta1DataVolumeSourceS3_js_1.V1beta1DataVolumeSourceS3,
    "V1beta1DataVolumeSourceSnapshot": V1beta1DataVolumeSourceSnapshot_js_1.V1beta1DataVolumeSourceSnapshot,
    "V1beta1DataVolumeSourceVDDK": V1beta1DataVolumeSourceVDDK_js_1.V1beta1DataVolumeSourceVDDK,
    "V1beta1DataVolumeSpec": V1beta1DataVolumeSpec_js_1.V1beta1DataVolumeSpec,
    "V1beta1DevicePreferences": V1beta1DevicePreferences_js_1.V1beta1DevicePreferences,
    "V1beta1Error": V1beta1Error_js_1.V1beta1Error,
    "V1beta1FeaturePreferences": V1beta1FeaturePreferences_js_1.V1beta1FeaturePreferences,
    "V1beta1FirmwarePreferences": V1beta1FirmwarePreferences_js_1.V1beta1FirmwarePreferences,
    "V1beta1MachinePreferences": V1beta1MachinePreferences_js_1.V1beta1MachinePreferences,
    "V1beta1MemoryInstancetype": V1beta1MemoryInstancetype_js_1.V1beta1MemoryInstancetype,
    "V1beta1MemoryPreferenceRequirement": V1beta1MemoryPreferenceRequirement_js_1.V1beta1MemoryPreferenceRequirement,
    "V1beta1PersistentVolumeClaim": V1beta1PersistentVolumeClaim_js_1.V1beta1PersistentVolumeClaim,
    "V1beta1PreferenceRequirements": V1beta1PreferenceRequirements_js_1.V1beta1PreferenceRequirements,
    "V1beta1SnapshotVolumesLists": V1beta1SnapshotVolumesLists_js_1.V1beta1SnapshotVolumesLists,
    "V1beta1SourceSpec": V1beta1SourceSpec_js_1.V1beta1SourceSpec,
    "V1beta1SpreadOptions": V1beta1SpreadOptions_js_1.V1beta1SpreadOptions,
    "V1beta1StorageSpec": V1beta1StorageSpec_js_1.V1beta1StorageSpec,
    "V1beta1VirtualMachine": V1beta1VirtualMachine_js_1.V1beta1VirtualMachine,
    "V1beta1VirtualMachineClusterInstancetype": V1beta1VirtualMachineClusterInstancetype_js_1.V1beta1VirtualMachineClusterInstancetype,
    "V1beta1VirtualMachineClusterInstancetypeList": V1beta1VirtualMachineClusterInstancetypeList_js_1.V1beta1VirtualMachineClusterInstancetypeList,
    "V1beta1VirtualMachineClusterPreference": V1beta1VirtualMachineClusterPreference_js_1.V1beta1VirtualMachineClusterPreference,
    "V1beta1VirtualMachineClusterPreferenceList": V1beta1VirtualMachineClusterPreferenceList_js_1.V1beta1VirtualMachineClusterPreferenceList,
    "V1beta1VirtualMachineExport": V1beta1VirtualMachineExport_js_1.V1beta1VirtualMachineExport,
    "V1beta1VirtualMachineExportLink": V1beta1VirtualMachineExportLink_js_1.V1beta1VirtualMachineExportLink,
    "V1beta1VirtualMachineExportLinks": V1beta1VirtualMachineExportLinks_js_1.V1beta1VirtualMachineExportLinks,
    "V1beta1VirtualMachineExportList": V1beta1VirtualMachineExportList_js_1.V1beta1VirtualMachineExportList,
    "V1beta1VirtualMachineExportManifest": V1beta1VirtualMachineExportManifest_js_1.V1beta1VirtualMachineExportManifest,
    "V1beta1VirtualMachineExportSpec": V1beta1VirtualMachineExportSpec_js_1.V1beta1VirtualMachineExportSpec,
    "V1beta1VirtualMachineExportStatus": V1beta1VirtualMachineExportStatus_js_1.V1beta1VirtualMachineExportStatus,
    "V1beta1VirtualMachineExportVolume": V1beta1VirtualMachineExportVolume_js_1.V1beta1VirtualMachineExportVolume,
    "V1beta1VirtualMachineExportVolumeFormat": V1beta1VirtualMachineExportVolumeFormat_js_1.V1beta1VirtualMachineExportVolumeFormat,
    "V1beta1VirtualMachineInstancetype": V1beta1VirtualMachineInstancetype_js_1.V1beta1VirtualMachineInstancetype,
    "V1beta1VirtualMachineInstancetypeList": V1beta1VirtualMachineInstancetypeList_js_1.V1beta1VirtualMachineInstancetypeList,
    "V1beta1VirtualMachineInstancetypeSpec": V1beta1VirtualMachineInstancetypeSpec_js_1.V1beta1VirtualMachineInstancetypeSpec,
    "V1beta1VirtualMachinePreference": V1beta1VirtualMachinePreference_js_1.V1beta1VirtualMachinePreference,
    "V1beta1VirtualMachinePreferenceList": V1beta1VirtualMachinePreferenceList_js_1.V1beta1VirtualMachinePreferenceList,
    "V1beta1VirtualMachinePreferenceSpec": V1beta1VirtualMachinePreferenceSpec_js_1.V1beta1VirtualMachinePreferenceSpec,
    "V1beta1VirtualMachineRestore": V1beta1VirtualMachineRestore_js_1.V1beta1VirtualMachineRestore,
    "V1beta1VirtualMachineRestoreList": V1beta1VirtualMachineRestoreList_js_1.V1beta1VirtualMachineRestoreList,
    "V1beta1VirtualMachineRestoreSpec": V1beta1VirtualMachineRestoreSpec_js_1.V1beta1VirtualMachineRestoreSpec,
    "V1beta1VirtualMachineRestoreStatus": V1beta1VirtualMachineRestoreStatus_js_1.V1beta1VirtualMachineRestoreStatus,
    "V1beta1VirtualMachineSnapshot": V1beta1VirtualMachineSnapshot_js_1.V1beta1VirtualMachineSnapshot,
    "V1beta1VirtualMachineSnapshotContent": V1beta1VirtualMachineSnapshotContent_js_1.V1beta1VirtualMachineSnapshotContent,
    "V1beta1VirtualMachineSnapshotContentList": V1beta1VirtualMachineSnapshotContentList_js_1.V1beta1VirtualMachineSnapshotContentList,
    "V1beta1VirtualMachineSnapshotContentSpec": V1beta1VirtualMachineSnapshotContentSpec_js_1.V1beta1VirtualMachineSnapshotContentSpec,
    "V1beta1VirtualMachineSnapshotContentStatus": V1beta1VirtualMachineSnapshotContentStatus_js_1.V1beta1VirtualMachineSnapshotContentStatus,
    "V1beta1VirtualMachineSnapshotList": V1beta1VirtualMachineSnapshotList_js_1.V1beta1VirtualMachineSnapshotList,
    "V1beta1VirtualMachineSnapshotSpec": V1beta1VirtualMachineSnapshotSpec_js_1.V1beta1VirtualMachineSnapshotSpec,
    "V1beta1VirtualMachineSnapshotStatus": V1beta1VirtualMachineSnapshotStatus_js_1.V1beta1VirtualMachineSnapshotStatus,
    "V1beta1VolumeBackup": V1beta1VolumeBackup_js_1.V1beta1VolumeBackup,
    "V1beta1VolumePreferences": V1beta1VolumePreferences_js_1.V1beta1VolumePreferences,
    "V1beta1VolumeRestore": V1beta1VolumeRestore_js_1.V1beta1VolumeRestore,
    "V1beta1VolumeSnapshotStatus": V1beta1VolumeSnapshotStatus_js_1.V1beta1VolumeSnapshotStatus,
};
/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType) => {
    const [type = '', subtype = ''] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};
// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate) => (mimeType) => predicate(parseMimeType(mimeType));
// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type, subtype) => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type)
        return false;
    if (subtype != null && descriptor.subtype !== subtype)
        return false;
    return true;
});
// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');
// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];
const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    let mapping = typeMap[expectedType].mapping;
                    if (mapping != undefined && mapping[discriminatorType]) {
                        return mapping[discriminatorType]; // use the type given in the discriminator
                    }
                    else if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }
    static serialize(data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.endsWith(nullableSuffix)) {
            let subType = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType, format);
        }
        else if (type.endsWith(optionalSuffix)) {
            let subType = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType, format);
        }
        else if (type.startsWith(arrayPrefix)) {
            let subType = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type.startsWith(mapPrefix)) {
            let subType = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(data[key], subType, format);
            }
            return transformedData;
        }
        else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }
    static deserialize(data, type, format) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.endsWith(nullableSuffix)) {
            let subType = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType, format);
        }
        else if (type.endsWith(optionalSuffix)) {
            let subType = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType, format);
        }
        else if (type.startsWith(arrayPrefix)) {
            let subType = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type.startsWith(mapPrefix)) {
            let subType = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(data[key], subType, format);
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) { // is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }
    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    static normalizeMediaType(mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return (mediaType.split(";")[0] ?? '').trim().toLowerCase();
    }
    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    static getPreferredMediaType(mediaTypes) {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }
        const normalMediaTypes = mediaTypes.map(ObjectSerializer.normalizeMediaType);
        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }
        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }
    /**
     * Convert data to a string according the given media type
     */
    static stringify(data, mediaType) {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }
        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }
    /**
     * Parse data from a string according to the given media type
     */
    static parse(rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }
        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
exports.ObjectSerializer = ObjectSerializer;
//# sourceMappingURL=ObjectSerializer.js.map