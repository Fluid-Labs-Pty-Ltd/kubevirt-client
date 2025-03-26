"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectDefaultApi = void 0;
const ObservableAPI_js_1 = require("./ObservableAPI.js");
class ObjectDefaultApi {
    api;
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_js_1.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Create a MigrationPolicy object.
     * @param param the request object
     */
    createMigrationPolicyWithHttpInfo(param, options) {
        return this.api.createMigrationPolicyWithHttpInfo(param.body, options).toPromise();
    }
    /**
     * Create a MigrationPolicy object.
     * @param param the request object
     */
    createMigrationPolicy(param, options) {
        return this.api.createMigrationPolicy(param.body, options).toPromise();
    }
    /**
     * Create a KubeVirt object.
     * @param param the request object
     */
    createNamespacedKubeVirtWithHttpInfo(param, options) {
        return this.api.createNamespacedKubeVirtWithHttpInfo(param.namespace, param.body, options).toPromise();
    }
    /**
     * Create a KubeVirt object.
     * @param param the request object
     */
    createNamespacedKubeVirt(param, options) {
        return this.api.createNamespacedKubeVirt(param.namespace, param.body, options).toPromise();
    }
    /**
     * Create a VirtualMachine object.
     * @param param the request object
     */
    createNamespacedVirtualMachineWithHttpInfo(param, options) {
        return this.api.createNamespacedVirtualMachineWithHttpInfo(param.namespace, param.body, options).toPromise();
    }
    /**
     * Create a VirtualMachine object.
     * @param param the request object
     */
    createNamespacedVirtualMachine(param, options) {
        return this.api.createNamespacedVirtualMachine(param.namespace, param.body, options).toPromise();
    }
    /**
     * Create a VirtualMachineExport object.
     * @param param the request object
     */
    createNamespacedVirtualMachineExportWithHttpInfo(param, options) {
        return this.api.createNamespacedVirtualMachineExportWithHttpInfo(param.namespace, param.body, options).toPromise();
    }
    /**
     * Create a VirtualMachineExport object.
     * @param param the request object
     */
    createNamespacedVirtualMachineExport(param, options) {
        return this.api.createNamespacedVirtualMachineExport(param.namespace, param.body, options).toPromise();
    }
    /**
     * Create a VirtualMachineInstance object.
     * @param param the request object
     */
    createNamespacedVirtualMachineInstanceWithHttpInfo(param, options) {
        return this.api.createNamespacedVirtualMachineInstanceWithHttpInfo(param.namespace, param.body, options).toPromise();
    }
    /**
     * Create a VirtualMachineInstance object.
     * @param param the request object
     */
    createNamespacedVirtualMachineInstance(param, options) {
        return this.api.createNamespacedVirtualMachineInstance(param.namespace, param.body, options).toPromise();
    }
    /**
     * Create a VirtualMachineInstanceMigration object.
     * @param param the request object
     */
    createNamespacedVirtualMachineInstanceMigrationWithHttpInfo(param, options) {
        return this.api.createNamespacedVirtualMachineInstanceMigrationWithHttpInfo(param.namespace, param.body, options).toPromise();
    }
    /**
     * Create a VirtualMachineInstanceMigration object.
     * @param param the request object
     */
    createNamespacedVirtualMachineInstanceMigration(param, options) {
        return this.api.createNamespacedVirtualMachineInstanceMigration(param.namespace, param.body, options).toPromise();
    }
    /**
     * Create a VirtualMachineInstancePreset object.
     * @param param the request object
     */
    createNamespacedVirtualMachineInstancePresetWithHttpInfo(param, options) {
        return this.api.createNamespacedVirtualMachineInstancePresetWithHttpInfo(param.namespace, param.body, options).toPromise();
    }
    /**
     * Create a VirtualMachineInstancePreset object.
     * @param param the request object
     */
    createNamespacedVirtualMachineInstancePreset(param, options) {
        return this.api.createNamespacedVirtualMachineInstancePreset(param.namespace, param.body, options).toPromise();
    }
    /**
     * Create a VirtualMachineInstanceReplicaSet object.
     * @param param the request object
     */
    createNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(param, options) {
        return this.api.createNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(param.namespace, param.body, options).toPromise();
    }
    /**
     * Create a VirtualMachineInstanceReplicaSet object.
     * @param param the request object
     */
    createNamespacedVirtualMachineInstanceReplicaSet(param, options) {
        return this.api.createNamespacedVirtualMachineInstanceReplicaSet(param.namespace, param.body, options).toPromise();
    }
    /**
     * Create a VirtualMachineInstancetype object.
     * @param param the request object
     */
    createNamespacedVirtualMachineInstancetypeWithHttpInfo(param, options) {
        return this.api.createNamespacedVirtualMachineInstancetypeWithHttpInfo(param.namespace, param.body, options).toPromise();
    }
    /**
     * Create a VirtualMachineInstancetype object.
     * @param param the request object
     */
    createNamespacedVirtualMachineInstancetype(param, options) {
        return this.api.createNamespacedVirtualMachineInstancetype(param.namespace, param.body, options).toPromise();
    }
    /**
     * Create a VirtualMachinePool object.
     * @param param the request object
     */
    createNamespacedVirtualMachinePoolWithHttpInfo(param, options) {
        return this.api.createNamespacedVirtualMachinePoolWithHttpInfo(param.namespace, param.body, options).toPromise();
    }
    /**
     * Create a VirtualMachinePool object.
     * @param param the request object
     */
    createNamespacedVirtualMachinePool(param, options) {
        return this.api.createNamespacedVirtualMachinePool(param.namespace, param.body, options).toPromise();
    }
    /**
     * Create a VirtualMachinePreference object.
     * @param param the request object
     */
    createNamespacedVirtualMachinePreferenceWithHttpInfo(param, options) {
        return this.api.createNamespacedVirtualMachinePreferenceWithHttpInfo(param.namespace, param.body, options).toPromise();
    }
    /**
     * Create a VirtualMachinePreference object.
     * @param param the request object
     */
    createNamespacedVirtualMachinePreference(param, options) {
        return this.api.createNamespacedVirtualMachinePreference(param.namespace, param.body, options).toPromise();
    }
    /**
     * Create a VirtualMachineRestore object.
     * @param param the request object
     */
    createNamespacedVirtualMachineRestoreWithHttpInfo(param, options) {
        return this.api.createNamespacedVirtualMachineRestoreWithHttpInfo(param.namespace, param.body, options).toPromise();
    }
    /**
     * Create a VirtualMachineRestore object.
     * @param param the request object
     */
    createNamespacedVirtualMachineRestore(param, options) {
        return this.api.createNamespacedVirtualMachineRestore(param.namespace, param.body, options).toPromise();
    }
    /**
     * Create a VirtualMachineSnapshot object.
     * @param param the request object
     */
    createNamespacedVirtualMachineSnapshotWithHttpInfo(param, options) {
        return this.api.createNamespacedVirtualMachineSnapshotWithHttpInfo(param.namespace, param.body, options).toPromise();
    }
    /**
     * Create a VirtualMachineSnapshot object.
     * @param param the request object
     */
    createNamespacedVirtualMachineSnapshot(param, options) {
        return this.api.createNamespacedVirtualMachineSnapshot(param.namespace, param.body, options).toPromise();
    }
    /**
     * Create a VirtualMachineSnapshotContent object.
     * @param param the request object
     */
    createNamespacedVirtualMachineSnapshotContentWithHttpInfo(param, options) {
        return this.api.createNamespacedVirtualMachineSnapshotContentWithHttpInfo(param.namespace, param.body, options).toPromise();
    }
    /**
     * Create a VirtualMachineSnapshotContent object.
     * @param param the request object
     */
    createNamespacedVirtualMachineSnapshotContent(param, options) {
        return this.api.createNamespacedVirtualMachineSnapshotContent(param.namespace, param.body, options).toPromise();
    }
    /**
     * Create a VirtualMachineClone object.
     * @param param the request object
     */
    createVirtualMachineCloneWithHttpInfo(param, options) {
        return this.api.createVirtualMachineCloneWithHttpInfo(param.body, options).toPromise();
    }
    /**
     * Create a VirtualMachineClone object.
     * @param param the request object
     */
    createVirtualMachineClone(param, options) {
        return this.api.createVirtualMachineClone(param.body, options).toPromise();
    }
    /**
     * Create a VirtualMachineClusterInstancetype object.
     * @param param the request object
     */
    createVirtualMachineClusterInstancetypeWithHttpInfo(param, options) {
        return this.api.createVirtualMachineClusterInstancetypeWithHttpInfo(param.body, options).toPromise();
    }
    /**
     * Create a VirtualMachineClusterInstancetype object.
     * @param param the request object
     */
    createVirtualMachineClusterInstancetype(param, options) {
        return this.api.createVirtualMachineClusterInstancetype(param.body, options).toPromise();
    }
    /**
     * Create a VirtualMachineClusterPreference object.
     * @param param the request object
     */
    createVirtualMachineClusterPreferenceWithHttpInfo(param, options) {
        return this.api.createVirtualMachineClusterPreferenceWithHttpInfo(param.body, options).toPromise();
    }
    /**
     * Create a VirtualMachineClusterPreference object.
     * @param param the request object
     */
    createVirtualMachineClusterPreference(param, options) {
        return this.api.createVirtualMachineClusterPreference(param.body, options).toPromise();
    }
    /**
     * Delete a collection of MigrationPolicy objects.
     * @param param the request object
     */
    deleteCollectionMigrationPolicyWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionMigrationPolicyWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of MigrationPolicy objects.
     * @param param the request object
     */
    deleteCollectionMigrationPolicy(param = {}, options) {
        return this.api.deleteCollectionMigrationPolicy(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of KubeVirt objects.
     * @param param the request object
     */
    deleteCollectionNamespacedKubeVirtWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionNamespacedKubeVirtWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of KubeVirt objects.
     * @param param the request object
     */
    deleteCollectionNamespacedKubeVirt(param = {}, options) {
        return this.api.deleteCollectionNamespacedKubeVirt(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of VirtualMachine objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionNamespacedVirtualMachineWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of VirtualMachine objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachine(param = {}, options) {
        return this.api.deleteCollectionNamespacedVirtualMachine(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of VirtualMachineExport objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineExportWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionNamespacedVirtualMachineExportWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of VirtualMachineExport objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineExport(param = {}, options) {
        return this.api.deleteCollectionNamespacedVirtualMachineExport(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of VirtualMachineInstance objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineInstanceWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionNamespacedVirtualMachineInstanceWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of VirtualMachineInstance objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineInstance(param = {}, options) {
        return this.api.deleteCollectionNamespacedVirtualMachineInstance(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of VirtualMachineInstanceMigration objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineInstanceMigrationWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionNamespacedVirtualMachineInstanceMigrationWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of VirtualMachineInstanceMigration objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineInstanceMigration(param = {}, options) {
        return this.api.deleteCollectionNamespacedVirtualMachineInstanceMigration(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of VirtualMachineInstancePreset objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineInstancePresetWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionNamespacedVirtualMachineInstancePresetWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of VirtualMachineInstancePreset objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineInstancePreset(param = {}, options) {
        return this.api.deleteCollectionNamespacedVirtualMachineInstancePreset(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of VirtualMachineInstanceReplicaSet objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of VirtualMachineInstanceReplicaSet objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineInstanceReplicaSet(param = {}, options) {
        return this.api.deleteCollectionNamespacedVirtualMachineInstanceReplicaSet(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of VirtualMachineInstancetype objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineInstancetypeWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionNamespacedVirtualMachineInstancetypeWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of VirtualMachineInstancetype objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineInstancetype(param = {}, options) {
        return this.api.deleteCollectionNamespacedVirtualMachineInstancetype(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of VirtualMachinePool objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachinePoolWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionNamespacedVirtualMachinePoolWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of VirtualMachinePool objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachinePool(param = {}, options) {
        return this.api.deleteCollectionNamespacedVirtualMachinePool(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of VirtualMachinePreference objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachinePreferenceWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionNamespacedVirtualMachinePreferenceWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of VirtualMachinePreference objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachinePreference(param = {}, options) {
        return this.api.deleteCollectionNamespacedVirtualMachinePreference(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of VirtualMachineRestore objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineRestoreWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionNamespacedVirtualMachineRestoreWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of VirtualMachineRestore objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineRestore(param = {}, options) {
        return this.api.deleteCollectionNamespacedVirtualMachineRestore(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of VirtualMachineSnapshot objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineSnapshotWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionNamespacedVirtualMachineSnapshotWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of VirtualMachineSnapshot objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineSnapshot(param = {}, options) {
        return this.api.deleteCollectionNamespacedVirtualMachineSnapshot(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of VirtualMachineSnapshotContent objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineSnapshotContentWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionNamespacedVirtualMachineSnapshotContentWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of VirtualMachineSnapshotContent objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineSnapshotContent(param = {}, options) {
        return this.api.deleteCollectionNamespacedVirtualMachineSnapshotContent(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of VirtualMachineClone objects.
     * @param param the request object
     */
    deleteCollectionVirtualMachineCloneWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionVirtualMachineCloneWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of VirtualMachineClone objects.
     * @param param the request object
     */
    deleteCollectionVirtualMachineClone(param = {}, options) {
        return this.api.deleteCollectionVirtualMachineClone(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of VirtualMachineClusterInstancetype objects.
     * @param param the request object
     */
    deleteCollectionVirtualMachineClusterInstancetypeWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionVirtualMachineClusterInstancetypeWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of VirtualMachineClusterInstancetype objects.
     * @param param the request object
     */
    deleteCollectionVirtualMachineClusterInstancetype(param = {}, options) {
        return this.api.deleteCollectionVirtualMachineClusterInstancetype(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of VirtualMachineClusterPreference objects.
     * @param param the request object
     */
    deleteCollectionVirtualMachineClusterPreferenceWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionVirtualMachineClusterPreferenceWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a collection of VirtualMachineClusterPreference objects.
     * @param param the request object
     */
    deleteCollectionVirtualMachineClusterPreference(param = {}, options) {
        return this.api.deleteCollectionVirtualMachineClusterPreference(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Delete a MigrationPolicy object.
     * @param param the request object
     */
    deleteMigrationPolicyWithHttpInfo(param, options) {
        return this.api.deleteMigrationPolicyWithHttpInfo(param.name, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a MigrationPolicy object.
     * @param param the request object
     */
    deleteMigrationPolicy(param, options) {
        return this.api.deleteMigrationPolicy(param.name, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a KubeVirt object.
     * @param param the request object
     */
    deleteNamespacedKubeVirtWithHttpInfo(param, options) {
        return this.api.deleteNamespacedKubeVirtWithHttpInfo(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a KubeVirt object.
     * @param param the request object
     */
    deleteNamespacedKubeVirt(param, options) {
        return this.api.deleteNamespacedKubeVirt(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a VirtualMachine object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineWithHttpInfo(param, options) {
        return this.api.deleteNamespacedVirtualMachineWithHttpInfo(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a VirtualMachine object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachine(param, options) {
        return this.api.deleteNamespacedVirtualMachine(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a VirtualMachineExport object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineExportWithHttpInfo(param, options) {
        return this.api.deleteNamespacedVirtualMachineExportWithHttpInfo(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a VirtualMachineExport object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineExport(param, options) {
        return this.api.deleteNamespacedVirtualMachineExport(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a VirtualMachineInstance object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineInstanceWithHttpInfo(param, options) {
        return this.api.deleteNamespacedVirtualMachineInstanceWithHttpInfo(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a VirtualMachineInstance object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineInstance(param, options) {
        return this.api.deleteNamespacedVirtualMachineInstance(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a VirtualMachineInstanceMigration object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineInstanceMigrationWithHttpInfo(param, options) {
        return this.api.deleteNamespacedVirtualMachineInstanceMigrationWithHttpInfo(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a VirtualMachineInstanceMigration object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineInstanceMigration(param, options) {
        return this.api.deleteNamespacedVirtualMachineInstanceMigration(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a VirtualMachineInstancePreset object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineInstancePresetWithHttpInfo(param, options) {
        return this.api.deleteNamespacedVirtualMachineInstancePresetWithHttpInfo(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a VirtualMachineInstancePreset object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineInstancePreset(param, options) {
        return this.api.deleteNamespacedVirtualMachineInstancePreset(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a VirtualMachineInstanceReplicaSet object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(param, options) {
        return this.api.deleteNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a VirtualMachineInstanceReplicaSet object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineInstanceReplicaSet(param, options) {
        return this.api.deleteNamespacedVirtualMachineInstanceReplicaSet(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a VirtualMachineInstancetype object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineInstancetypeWithHttpInfo(param, options) {
        return this.api.deleteNamespacedVirtualMachineInstancetypeWithHttpInfo(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a VirtualMachineInstancetype object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineInstancetype(param, options) {
        return this.api.deleteNamespacedVirtualMachineInstancetype(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a VirtualMachinePool object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachinePoolWithHttpInfo(param, options) {
        return this.api.deleteNamespacedVirtualMachinePoolWithHttpInfo(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a VirtualMachinePool object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachinePool(param, options) {
        return this.api.deleteNamespacedVirtualMachinePool(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a VirtualMachinePreference object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachinePreferenceWithHttpInfo(param, options) {
        return this.api.deleteNamespacedVirtualMachinePreferenceWithHttpInfo(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a VirtualMachinePreference object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachinePreference(param, options) {
        return this.api.deleteNamespacedVirtualMachinePreference(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a VirtualMachineRestore object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineRestoreWithHttpInfo(param, options) {
        return this.api.deleteNamespacedVirtualMachineRestoreWithHttpInfo(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a VirtualMachineRestore object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineRestore(param, options) {
        return this.api.deleteNamespacedVirtualMachineRestore(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a VirtualMachineSnapshot object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineSnapshotWithHttpInfo(param, options) {
        return this.api.deleteNamespacedVirtualMachineSnapshotWithHttpInfo(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a VirtualMachineSnapshot object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineSnapshot(param, options) {
        return this.api.deleteNamespacedVirtualMachineSnapshot(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a VirtualMachineSnapshotContent object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineSnapshotContentWithHttpInfo(param, options) {
        return this.api.deleteNamespacedVirtualMachineSnapshotContentWithHttpInfo(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a VirtualMachineSnapshotContent object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineSnapshotContent(param, options) {
        return this.api.deleteNamespacedVirtualMachineSnapshotContent(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a VirtualMachineClone object.
     * @param param the request object
     */
    deleteVirtualMachineCloneWithHttpInfo(param, options) {
        return this.api.deleteVirtualMachineCloneWithHttpInfo(param.name, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a VirtualMachineClone object.
     * @param param the request object
     */
    deleteVirtualMachineClone(param, options) {
        return this.api.deleteVirtualMachineClone(param.name, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a VirtualMachineClusterInstancetype object.
     * @param param the request object
     */
    deleteVirtualMachineClusterInstancetypeWithHttpInfo(param, options) {
        return this.api.deleteVirtualMachineClusterInstancetypeWithHttpInfo(param.name, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a VirtualMachineClusterInstancetype object.
     * @param param the request object
     */
    deleteVirtualMachineClusterInstancetype(param, options) {
        return this.api.deleteVirtualMachineClusterInstancetype(param.name, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a VirtualMachineClusterPreference object.
     * @param param the request object
     */
    deleteVirtualMachineClusterPreferenceWithHttpInfo(param, options) {
        return this.api.deleteVirtualMachineClusterPreferenceWithHttpInfo(param.name, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Delete a VirtualMachineClusterPreference object.
     * @param param the request object
     */
    deleteVirtualMachineClusterPreference(param, options) {
        return this.api.deleteVirtualMachineClusterPreference(param.name, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, options).toPromise();
    }
    /**
     * Health endpoint
     * @param param the request object
     */
    func13WithHttpInfo(param = {}, options) {
        return this.api.func13WithHttpInfo(options).toPromise();
    }
    /**
     * Health endpoint
     * @param param the request object
     */
    func13(param = {}, options) {
        return this.api.func13(options).toPromise();
    }
    /**
     * @param param the request object
     */
    func6WithHttpInfo(param = {}, options) {
        return this.api.func6WithHttpInfo(options).toPromise();
    }
    /**
     * @param param the request object
     */
    func6(param = {}, options) {
        return this.api.func6(options).toPromise();
    }
    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    getAPIGroupCloneKubevirtIoWithHttpInfo(param = {}, options) {
        return this.api.getAPIGroupCloneKubevirtIoWithHttpInfo(options).toPromise();
    }
    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    getAPIGroupCloneKubevirtIo(param = {}, options) {
        return this.api.getAPIGroupCloneKubevirtIo(options).toPromise();
    }
    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    getAPIGroupExportKubevirtIoWithHttpInfo(param = {}, options) {
        return this.api.getAPIGroupExportKubevirtIoWithHttpInfo(options).toPromise();
    }
    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    getAPIGroupExportKubevirtIo(param = {}, options) {
        return this.api.getAPIGroupExportKubevirtIo(options).toPromise();
    }
    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    getAPIGroupInstancetypeKubevirtIoWithHttpInfo(param = {}, options) {
        return this.api.getAPIGroupInstancetypeKubevirtIoWithHttpInfo(options).toPromise();
    }
    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    getAPIGroupInstancetypeKubevirtIo(param = {}, options) {
        return this.api.getAPIGroupInstancetypeKubevirtIo(options).toPromise();
    }
    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    getAPIGroupKubevirtIoWithHttpInfo(param = {}, options) {
        return this.api.getAPIGroupKubevirtIoWithHttpInfo(options).toPromise();
    }
    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    getAPIGroupKubevirtIo(param = {}, options) {
        return this.api.getAPIGroupKubevirtIo(options).toPromise();
    }
    /**
     * Get a KubeVirt API GroupList
     * @param param the request object
     */
    getAPIGroupListWithHttpInfo(param = {}, options) {
        return this.api.getAPIGroupListWithHttpInfo(options).toPromise();
    }
    /**
     * Get a KubeVirt API GroupList
     * @param param the request object
     */
    getAPIGroupList(param = {}, options) {
        return this.api.getAPIGroupList(options).toPromise();
    }
    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    getAPIGroupMigrationsKubevirtIoWithHttpInfo(param = {}, options) {
        return this.api.getAPIGroupMigrationsKubevirtIoWithHttpInfo(options).toPromise();
    }
    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    getAPIGroupMigrationsKubevirtIo(param = {}, options) {
        return this.api.getAPIGroupMigrationsKubevirtIo(options).toPromise();
    }
    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    getAPIGroupPoolKubevirtIoWithHttpInfo(param = {}, options) {
        return this.api.getAPIGroupPoolKubevirtIoWithHttpInfo(options).toPromise();
    }
    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    getAPIGroupPoolKubevirtIo(param = {}, options) {
        return this.api.getAPIGroupPoolKubevirtIo(options).toPromise();
    }
    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    getAPIGroupSnapshotKubevirtIoWithHttpInfo(param = {}, options) {
        return this.api.getAPIGroupSnapshotKubevirtIoWithHttpInfo(options).toPromise();
    }
    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    getAPIGroupSnapshotKubevirtIo(param = {}, options) {
        return this.api.getAPIGroupSnapshotKubevirtIo(options).toPromise();
    }
    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    getAPIResourcesCloneKubevirtIoV1alpha1WithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesCloneKubevirtIoV1alpha1WithHttpInfo(options).toPromise();
    }
    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    getAPIResourcesCloneKubevirtIoV1alpha1(param = {}, options) {
        return this.api.getAPIResourcesCloneKubevirtIoV1alpha1(options).toPromise();
    }
    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    getAPIResourcesExportKubevirtIoV1beta1WithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesExportKubevirtIoV1beta1WithHttpInfo(options).toPromise();
    }
    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    getAPIResourcesExportKubevirtIoV1beta1(param = {}, options) {
        return this.api.getAPIResourcesExportKubevirtIoV1beta1(options).toPromise();
    }
    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    getAPIResourcesInstancetypeKubevirtIoV1beta1WithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesInstancetypeKubevirtIoV1beta1WithHttpInfo(options).toPromise();
    }
    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    getAPIResourcesInstancetypeKubevirtIoV1beta1(param = {}, options) {
        return this.api.getAPIResourcesInstancetypeKubevirtIoV1beta1(options).toPromise();
    }
    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    getAPIResourcesKubevirtIoV1WithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesKubevirtIoV1WithHttpInfo(options).toPromise();
    }
    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    getAPIResourcesKubevirtIoV1(param = {}, options) {
        return this.api.getAPIResourcesKubevirtIoV1(options).toPromise();
    }
    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    getAPIResourcesMigrationsKubevirtIoV1alpha1WithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesMigrationsKubevirtIoV1alpha1WithHttpInfo(options).toPromise();
    }
    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    getAPIResourcesMigrationsKubevirtIoV1alpha1(param = {}, options) {
        return this.api.getAPIResourcesMigrationsKubevirtIoV1alpha1(options).toPromise();
    }
    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    getAPIResourcesPoolKubevirtIoV1alpha1WithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesPoolKubevirtIoV1alpha1WithHttpInfo(options).toPromise();
    }
    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    getAPIResourcesPoolKubevirtIoV1alpha1(param = {}, options) {
        return this.api.getAPIResourcesPoolKubevirtIoV1alpha1(options).toPromise();
    }
    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    getAPIResourcesSnapshotKubevirtIoV1beta1WithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesSnapshotKubevirtIoV1beta1WithHttpInfo(options).toPromise();
    }
    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    getAPIResourcesSnapshotKubevirtIoV1beta1(param = {}, options) {
        return this.api.getAPIResourcesSnapshotKubevirtIoV1beta1(options).toPromise();
    }
    /**
     * Get KubeVirt API root paths
     * @param param the request object
     */
    getRootPathsWithHttpInfo(param = {}, options) {
        return this.api.getRootPathsWithHttpInfo(options).toPromise();
    }
    /**
     * Get KubeVirt API root paths
     * @param param the request object
     */
    getRootPaths(param = {}, options) {
        return this.api.getRootPaths(options).toPromise();
    }
    /**
     * dump profiler results endpoint
     * @param param the request object
     */
    handleDumpProfilerWithHttpInfo(param = {}, options) {
        return this.api.handleDumpProfilerWithHttpInfo(options).toPromise();
    }
    /**
     * dump profiler results endpoint
     * @param param the request object
     */
    handleDumpProfiler(param = {}, options) {
        return this.api.handleDumpProfiler(options).toPromise();
    }
    /**
     * start profiler endpoint
     * @param param the request object
     */
    handleStartProfilerWithHttpInfo(param = {}, options) {
        return this.api.handleStartProfilerWithHttpInfo(options).toPromise();
    }
    /**
     * start profiler endpoint
     * @param param the request object
     */
    handleStartProfiler(param = {}, options) {
        return this.api.handleStartProfiler(options).toPromise();
    }
    /**
     * stop profiler endpoint
     * @param param the request object
     */
    handleStopProfilerWithHttpInfo(param = {}, options) {
        return this.api.handleStopProfilerWithHttpInfo(options).toPromise();
    }
    /**
     * stop profiler endpoint
     * @param param the request object
     */
    handleStopProfiler(param = {}, options) {
        return this.api.handleStopProfiler(options).toPromise();
    }
    /**
     * Get a list of all KubeVirt objects.
     * @param param the request object
     */
    listKubeVirtForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listKubeVirtForAllNamespacesWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of all KubeVirt objects.
     * @param param the request object
     */
    listKubeVirtForAllNamespaces(param = {}, options) {
        return this.api.listKubeVirtForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of MigrationPolicy objects.
     * @param param the request object
     */
    listMigrationPolicyWithHttpInfo(param = {}, options) {
        return this.api.listMigrationPolicyWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of MigrationPolicy objects.
     * @param param the request object
     */
    listMigrationPolicy(param = {}, options) {
        return this.api.listMigrationPolicy(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of KubeVirt objects.
     * @param param the request object
     */
    listNamespacedKubeVirtWithHttpInfo(param, options) {
        return this.api.listNamespacedKubeVirtWithHttpInfo(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of KubeVirt objects.
     * @param param the request object
     */
    listNamespacedKubeVirt(param, options) {
        return this.api.listNamespacedKubeVirt(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of VirtualMachine objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineWithHttpInfo(param, options) {
        return this.api.listNamespacedVirtualMachineWithHttpInfo(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of VirtualMachine objects.
     * @param param the request object
     */
    listNamespacedVirtualMachine(param, options) {
        return this.api.listNamespacedVirtualMachine(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of VirtualMachineExport objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineExportWithHttpInfo(param, options) {
        return this.api.listNamespacedVirtualMachineExportWithHttpInfo(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of VirtualMachineExport objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineExport(param, options) {
        return this.api.listNamespacedVirtualMachineExport(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of VirtualMachineInstance objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineInstanceWithHttpInfo(param, options) {
        return this.api.listNamespacedVirtualMachineInstanceWithHttpInfo(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of VirtualMachineInstance objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineInstance(param, options) {
        return this.api.listNamespacedVirtualMachineInstance(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of VirtualMachineInstanceMigration objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineInstanceMigrationWithHttpInfo(param, options) {
        return this.api.listNamespacedVirtualMachineInstanceMigrationWithHttpInfo(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of VirtualMachineInstanceMigration objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineInstanceMigration(param, options) {
        return this.api.listNamespacedVirtualMachineInstanceMigration(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of VirtualMachineInstancePreset objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineInstancePresetWithHttpInfo(param, options) {
        return this.api.listNamespacedVirtualMachineInstancePresetWithHttpInfo(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of VirtualMachineInstancePreset objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineInstancePreset(param, options) {
        return this.api.listNamespacedVirtualMachineInstancePreset(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of VirtualMachineInstanceReplicaSet objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(param, options) {
        return this.api.listNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of VirtualMachineInstanceReplicaSet objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineInstanceReplicaSet(param, options) {
        return this.api.listNamespacedVirtualMachineInstanceReplicaSet(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of VirtualMachineInstancetype objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineInstancetypeWithHttpInfo(param, options) {
        return this.api.listNamespacedVirtualMachineInstancetypeWithHttpInfo(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of VirtualMachineInstancetype objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineInstancetype(param, options) {
        return this.api.listNamespacedVirtualMachineInstancetype(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of VirtualMachinePool objects.
     * @param param the request object
     */
    listNamespacedVirtualMachinePoolWithHttpInfo(param, options) {
        return this.api.listNamespacedVirtualMachinePoolWithHttpInfo(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of VirtualMachinePool objects.
     * @param param the request object
     */
    listNamespacedVirtualMachinePool(param, options) {
        return this.api.listNamespacedVirtualMachinePool(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of VirtualMachinePreference objects.
     * @param param the request object
     */
    listNamespacedVirtualMachinePreferenceWithHttpInfo(param, options) {
        return this.api.listNamespacedVirtualMachinePreferenceWithHttpInfo(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of VirtualMachinePreference objects.
     * @param param the request object
     */
    listNamespacedVirtualMachinePreference(param, options) {
        return this.api.listNamespacedVirtualMachinePreference(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of VirtualMachineRestore objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineRestoreWithHttpInfo(param, options) {
        return this.api.listNamespacedVirtualMachineRestoreWithHttpInfo(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of VirtualMachineRestore objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineRestore(param, options) {
        return this.api.listNamespacedVirtualMachineRestore(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of VirtualMachineSnapshot objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineSnapshotWithHttpInfo(param, options) {
        return this.api.listNamespacedVirtualMachineSnapshotWithHttpInfo(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of VirtualMachineSnapshot objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineSnapshot(param, options) {
        return this.api.listNamespacedVirtualMachineSnapshot(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of VirtualMachineSnapshotContent objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineSnapshotContentWithHttpInfo(param, options) {
        return this.api.listNamespacedVirtualMachineSnapshotContentWithHttpInfo(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of VirtualMachineSnapshotContent objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineSnapshotContent(param, options) {
        return this.api.listNamespacedVirtualMachineSnapshotContent(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of VirtualMachineClone objects.
     * @param param the request object
     */
    listVirtualMachineCloneWithHttpInfo(param = {}, options) {
        return this.api.listVirtualMachineCloneWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of VirtualMachineClone objects.
     * @param param the request object
     */
    listVirtualMachineClone(param = {}, options) {
        return this.api.listVirtualMachineClone(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of VirtualMachineClusterInstancetype objects.
     * @param param the request object
     */
    listVirtualMachineClusterInstancetypeWithHttpInfo(param = {}, options) {
        return this.api.listVirtualMachineClusterInstancetypeWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of VirtualMachineClusterInstancetype objects.
     * @param param the request object
     */
    listVirtualMachineClusterInstancetype(param = {}, options) {
        return this.api.listVirtualMachineClusterInstancetype(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of VirtualMachineClusterPreference objects.
     * @param param the request object
     */
    listVirtualMachineClusterPreferenceWithHttpInfo(param = {}, options) {
        return this.api.listVirtualMachineClusterPreferenceWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of VirtualMachineClusterPreference objects.
     * @param param the request object
     */
    listVirtualMachineClusterPreference(param = {}, options) {
        return this.api.listVirtualMachineClusterPreference(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of all VirtualMachineExport objects.
     * @param param the request object
     */
    listVirtualMachineExportForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listVirtualMachineExportForAllNamespacesWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of all VirtualMachineExport objects.
     * @param param the request object
     */
    listVirtualMachineExportForAllNamespaces(param = {}, options) {
        return this.api.listVirtualMachineExportForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of all VirtualMachine objects.
     * @param param the request object
     */
    listVirtualMachineForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listVirtualMachineForAllNamespacesWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of all VirtualMachine objects.
     * @param param the request object
     */
    listVirtualMachineForAllNamespaces(param = {}, options) {
        return this.api.listVirtualMachineForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of all VirtualMachineInstance objects.
     * @param param the request object
     */
    listVirtualMachineInstanceForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listVirtualMachineInstanceForAllNamespacesWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of all VirtualMachineInstance objects.
     * @param param the request object
     */
    listVirtualMachineInstanceForAllNamespaces(param = {}, options) {
        return this.api.listVirtualMachineInstanceForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of all VirtualMachineInstanceMigration objects.
     * @param param the request object
     */
    listVirtualMachineInstanceMigrationForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listVirtualMachineInstanceMigrationForAllNamespacesWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of all VirtualMachineInstanceMigration objects.
     * @param param the request object
     */
    listVirtualMachineInstanceMigrationForAllNamespaces(param = {}, options) {
        return this.api.listVirtualMachineInstanceMigrationForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of all VirtualMachineInstancePreset objects.
     * @param param the request object
     */
    listVirtualMachineInstancePresetForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listVirtualMachineInstancePresetForAllNamespacesWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of all VirtualMachineInstancePreset objects.
     * @param param the request object
     */
    listVirtualMachineInstancePresetForAllNamespaces(param = {}, options) {
        return this.api.listVirtualMachineInstancePresetForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of all VirtualMachineInstanceReplicaSet objects.
     * @param param the request object
     */
    listVirtualMachineInstanceReplicaSetForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listVirtualMachineInstanceReplicaSetForAllNamespacesWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of all VirtualMachineInstanceReplicaSet objects.
     * @param param the request object
     */
    listVirtualMachineInstanceReplicaSetForAllNamespaces(param = {}, options) {
        return this.api.listVirtualMachineInstanceReplicaSetForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of all VirtualMachineInstancetype objects.
     * @param param the request object
     */
    listVirtualMachineInstancetypeForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listVirtualMachineInstancetypeForAllNamespacesWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of all VirtualMachineInstancetype objects.
     * @param param the request object
     */
    listVirtualMachineInstancetypeForAllNamespaces(param = {}, options) {
        return this.api.listVirtualMachineInstancetypeForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of all VirtualMachinePool objects.
     * @param param the request object
     */
    listVirtualMachinePoolForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listVirtualMachinePoolForAllNamespacesWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of all VirtualMachinePool objects.
     * @param param the request object
     */
    listVirtualMachinePoolForAllNamespaces(param = {}, options) {
        return this.api.listVirtualMachinePoolForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of all VirtualMachinePreference objects.
     * @param param the request object
     */
    listVirtualMachinePreferenceForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listVirtualMachinePreferenceForAllNamespacesWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of all VirtualMachinePreference objects.
     * @param param the request object
     */
    listVirtualMachinePreferenceForAllNamespaces(param = {}, options) {
        return this.api.listVirtualMachinePreferenceForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of all VirtualMachineRestore objects.
     * @param param the request object
     */
    listVirtualMachineRestoreForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listVirtualMachineRestoreForAllNamespacesWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of all VirtualMachineRestore objects.
     * @param param the request object
     */
    listVirtualMachineRestoreForAllNamespaces(param = {}, options) {
        return this.api.listVirtualMachineRestoreForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of all VirtualMachineSnapshotContent objects.
     * @param param the request object
     */
    listVirtualMachineSnapshotContentForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listVirtualMachineSnapshotContentForAllNamespacesWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of all VirtualMachineSnapshotContent objects.
     * @param param the request object
     */
    listVirtualMachineSnapshotContentForAllNamespaces(param = {}, options) {
        return this.api.listVirtualMachineSnapshotContentForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of all VirtualMachineSnapshot objects.
     * @param param the request object
     */
    listVirtualMachineSnapshotForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listVirtualMachineSnapshotForAllNamespacesWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Get a list of all VirtualMachineSnapshot objects.
     * @param param the request object
     */
    listVirtualMachineSnapshotForAllNamespaces(param = {}, options) {
        return this.api.listVirtualMachineSnapshotForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Patch a MigrationPolicy object.
     * @param param the request object
     */
    patchMigrationPolicyWithHttpInfo(param, options) {
        return this.api.patchMigrationPolicyWithHttpInfo(param.name, param.body, options).toPromise();
    }
    /**
     * Patch a MigrationPolicy object.
     * @param param the request object
     */
    patchMigrationPolicy(param, options) {
        return this.api.patchMigrationPolicy(param.name, param.body, options).toPromise();
    }
    /**
     * Patch a KubeVirt object.
     * @param param the request object
     */
    patchNamespacedKubeVirtWithHttpInfo(param, options) {
        return this.api.patchNamespacedKubeVirtWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Patch a KubeVirt object.
     * @param param the request object
     */
    patchNamespacedKubeVirt(param, options) {
        return this.api.patchNamespacedKubeVirt(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Patch a VirtualMachine object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineWithHttpInfo(param, options) {
        return this.api.patchNamespacedVirtualMachineWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Patch a VirtualMachine object.
     * @param param the request object
     */
    patchNamespacedVirtualMachine(param, options) {
        return this.api.patchNamespacedVirtualMachine(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Patch a VirtualMachineExport object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineExportWithHttpInfo(param, options) {
        return this.api.patchNamespacedVirtualMachineExportWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Patch a VirtualMachineExport object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineExport(param, options) {
        return this.api.patchNamespacedVirtualMachineExport(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Patch a VirtualMachineInstance object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineInstanceWithHttpInfo(param, options) {
        return this.api.patchNamespacedVirtualMachineInstanceWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Patch a VirtualMachineInstance object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineInstance(param, options) {
        return this.api.patchNamespacedVirtualMachineInstance(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Patch a VirtualMachineInstanceMigration object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineInstanceMigrationWithHttpInfo(param, options) {
        return this.api.patchNamespacedVirtualMachineInstanceMigrationWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Patch a VirtualMachineInstanceMigration object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineInstanceMigration(param, options) {
        return this.api.patchNamespacedVirtualMachineInstanceMigration(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Patch a VirtualMachineInstancePreset object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineInstancePresetWithHttpInfo(param, options) {
        return this.api.patchNamespacedVirtualMachineInstancePresetWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Patch a VirtualMachineInstancePreset object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineInstancePreset(param, options) {
        return this.api.patchNamespacedVirtualMachineInstancePreset(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Patch a VirtualMachineInstanceReplicaSet object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(param, options) {
        return this.api.patchNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Patch a VirtualMachineInstanceReplicaSet object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineInstanceReplicaSet(param, options) {
        return this.api.patchNamespacedVirtualMachineInstanceReplicaSet(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Patch a VirtualMachineInstancetype object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineInstancetypeWithHttpInfo(param, options) {
        return this.api.patchNamespacedVirtualMachineInstancetypeWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Patch a VirtualMachineInstancetype object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineInstancetype(param, options) {
        return this.api.patchNamespacedVirtualMachineInstancetype(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Patch a VirtualMachinePool object.
     * @param param the request object
     */
    patchNamespacedVirtualMachinePoolWithHttpInfo(param, options) {
        return this.api.patchNamespacedVirtualMachinePoolWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Patch a VirtualMachinePool object.
     * @param param the request object
     */
    patchNamespacedVirtualMachinePool(param, options) {
        return this.api.patchNamespacedVirtualMachinePool(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Patch a VirtualMachinePreference object.
     * @param param the request object
     */
    patchNamespacedVirtualMachinePreferenceWithHttpInfo(param, options) {
        return this.api.patchNamespacedVirtualMachinePreferenceWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Patch a VirtualMachinePreference object.
     * @param param the request object
     */
    patchNamespacedVirtualMachinePreference(param, options) {
        return this.api.patchNamespacedVirtualMachinePreference(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Patch a VirtualMachineRestore object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineRestoreWithHttpInfo(param, options) {
        return this.api.patchNamespacedVirtualMachineRestoreWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Patch a VirtualMachineRestore object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineRestore(param, options) {
        return this.api.patchNamespacedVirtualMachineRestore(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Patch a VirtualMachineSnapshot object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineSnapshotWithHttpInfo(param, options) {
        return this.api.patchNamespacedVirtualMachineSnapshotWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Patch a VirtualMachineSnapshot object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineSnapshot(param, options) {
        return this.api.patchNamespacedVirtualMachineSnapshot(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Patch a VirtualMachineSnapshotContent object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineSnapshotContentWithHttpInfo(param, options) {
        return this.api.patchNamespacedVirtualMachineSnapshotContentWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Patch a VirtualMachineSnapshotContent object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineSnapshotContent(param, options) {
        return this.api.patchNamespacedVirtualMachineSnapshotContent(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Patch a VirtualMachineClone object.
     * @param param the request object
     */
    patchVirtualMachineCloneWithHttpInfo(param, options) {
        return this.api.patchVirtualMachineCloneWithHttpInfo(param.name, param.body, options).toPromise();
    }
    /**
     * Patch a VirtualMachineClone object.
     * @param param the request object
     */
    patchVirtualMachineClone(param, options) {
        return this.api.patchVirtualMachineClone(param.name, param.body, options).toPromise();
    }
    /**
     * Patch a VirtualMachineClusterInstancetype object.
     * @param param the request object
     */
    patchVirtualMachineClusterInstancetypeWithHttpInfo(param, options) {
        return this.api.patchVirtualMachineClusterInstancetypeWithHttpInfo(param.name, param.body, options).toPromise();
    }
    /**
     * Patch a VirtualMachineClusterInstancetype object.
     * @param param the request object
     */
    patchVirtualMachineClusterInstancetype(param, options) {
        return this.api.patchVirtualMachineClusterInstancetype(param.name, param.body, options).toPromise();
    }
    /**
     * Patch a VirtualMachineClusterPreference object.
     * @param param the request object
     */
    patchVirtualMachineClusterPreferenceWithHttpInfo(param, options) {
        return this.api.patchVirtualMachineClusterPreferenceWithHttpInfo(param.name, param.body, options).toPromise();
    }
    /**
     * Patch a VirtualMachineClusterPreference object.
     * @param param the request object
     */
    patchVirtualMachineClusterPreference(param, options) {
        return this.api.patchVirtualMachineClusterPreference(param.name, param.body, options).toPromise();
    }
    /**
     * Get a MigrationPolicy object.
     * @param param the request object
     */
    readMigrationPolicyWithHttpInfo(param, options) {
        return this.api.readMigrationPolicyWithHttpInfo(param.name, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a MigrationPolicy object.
     * @param param the request object
     */
    readMigrationPolicy(param, options) {
        return this.api.readMigrationPolicy(param.name, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a KubeVirt object.
     * @param param the request object
     */
    readNamespacedKubeVirtWithHttpInfo(param, options) {
        return this.api.readNamespacedKubeVirtWithHttpInfo(param.name, param.namespace, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a KubeVirt object.
     * @param param the request object
     */
    readNamespacedKubeVirt(param, options) {
        return this.api.readNamespacedKubeVirt(param.name, param.namespace, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a VirtualMachine object.
     * @param param the request object
     */
    readNamespacedVirtualMachineWithHttpInfo(param, options) {
        return this.api.readNamespacedVirtualMachineWithHttpInfo(param.name, param.namespace, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a VirtualMachine object.
     * @param param the request object
     */
    readNamespacedVirtualMachine(param, options) {
        return this.api.readNamespacedVirtualMachine(param.name, param.namespace, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a VirtualMachineExport object.
     * @param param the request object
     */
    readNamespacedVirtualMachineExportWithHttpInfo(param, options) {
        return this.api.readNamespacedVirtualMachineExportWithHttpInfo(param.name, param.namespace, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a VirtualMachineExport object.
     * @param param the request object
     */
    readNamespacedVirtualMachineExport(param, options) {
        return this.api.readNamespacedVirtualMachineExport(param.name, param.namespace, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a VirtualMachineInstance object.
     * @param param the request object
     */
    readNamespacedVirtualMachineInstanceWithHttpInfo(param, options) {
        return this.api.readNamespacedVirtualMachineInstanceWithHttpInfo(param.name, param.namespace, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a VirtualMachineInstance object.
     * @param param the request object
     */
    readNamespacedVirtualMachineInstance(param, options) {
        return this.api.readNamespacedVirtualMachineInstance(param.name, param.namespace, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a VirtualMachineInstanceMigration object.
     * @param param the request object
     */
    readNamespacedVirtualMachineInstanceMigrationWithHttpInfo(param, options) {
        return this.api.readNamespacedVirtualMachineInstanceMigrationWithHttpInfo(param.name, param.namespace, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a VirtualMachineInstanceMigration object.
     * @param param the request object
     */
    readNamespacedVirtualMachineInstanceMigration(param, options) {
        return this.api.readNamespacedVirtualMachineInstanceMigration(param.name, param.namespace, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a VirtualMachineInstancePreset object.
     * @param param the request object
     */
    readNamespacedVirtualMachineInstancePresetWithHttpInfo(param, options) {
        return this.api.readNamespacedVirtualMachineInstancePresetWithHttpInfo(param.name, param.namespace, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a VirtualMachineInstancePreset object.
     * @param param the request object
     */
    readNamespacedVirtualMachineInstancePreset(param, options) {
        return this.api.readNamespacedVirtualMachineInstancePreset(param.name, param.namespace, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a VirtualMachineInstanceReplicaSet object.
     * @param param the request object
     */
    readNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(param, options) {
        return this.api.readNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(param.name, param.namespace, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a VirtualMachineInstanceReplicaSet object.
     * @param param the request object
     */
    readNamespacedVirtualMachineInstanceReplicaSet(param, options) {
        return this.api.readNamespacedVirtualMachineInstanceReplicaSet(param.name, param.namespace, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a VirtualMachineInstancetype object.
     * @param param the request object
     */
    readNamespacedVirtualMachineInstancetypeWithHttpInfo(param, options) {
        return this.api.readNamespacedVirtualMachineInstancetypeWithHttpInfo(param.name, param.namespace, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a VirtualMachineInstancetype object.
     * @param param the request object
     */
    readNamespacedVirtualMachineInstancetype(param, options) {
        return this.api.readNamespacedVirtualMachineInstancetype(param.name, param.namespace, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a VirtualMachinePool object.
     * @param param the request object
     */
    readNamespacedVirtualMachinePoolWithHttpInfo(param, options) {
        return this.api.readNamespacedVirtualMachinePoolWithHttpInfo(param.name, param.namespace, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a VirtualMachinePool object.
     * @param param the request object
     */
    readNamespacedVirtualMachinePool(param, options) {
        return this.api.readNamespacedVirtualMachinePool(param.name, param.namespace, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a VirtualMachinePreference object.
     * @param param the request object
     */
    readNamespacedVirtualMachinePreferenceWithHttpInfo(param, options) {
        return this.api.readNamespacedVirtualMachinePreferenceWithHttpInfo(param.name, param.namespace, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a VirtualMachinePreference object.
     * @param param the request object
     */
    readNamespacedVirtualMachinePreference(param, options) {
        return this.api.readNamespacedVirtualMachinePreference(param.name, param.namespace, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a VirtualMachineRestore object.
     * @param param the request object
     */
    readNamespacedVirtualMachineRestoreWithHttpInfo(param, options) {
        return this.api.readNamespacedVirtualMachineRestoreWithHttpInfo(param.name, param.namespace, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a VirtualMachineRestore object.
     * @param param the request object
     */
    readNamespacedVirtualMachineRestore(param, options) {
        return this.api.readNamespacedVirtualMachineRestore(param.name, param.namespace, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a VirtualMachineSnapshot object.
     * @param param the request object
     */
    readNamespacedVirtualMachineSnapshotWithHttpInfo(param, options) {
        return this.api.readNamespacedVirtualMachineSnapshotWithHttpInfo(param.name, param.namespace, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a VirtualMachineSnapshot object.
     * @param param the request object
     */
    readNamespacedVirtualMachineSnapshot(param, options) {
        return this.api.readNamespacedVirtualMachineSnapshot(param.name, param.namespace, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a VirtualMachineSnapshotContent object.
     * @param param the request object
     */
    readNamespacedVirtualMachineSnapshotContentWithHttpInfo(param, options) {
        return this.api.readNamespacedVirtualMachineSnapshotContentWithHttpInfo(param.name, param.namespace, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a VirtualMachineSnapshotContent object.
     * @param param the request object
     */
    readNamespacedVirtualMachineSnapshotContent(param, options) {
        return this.api.readNamespacedVirtualMachineSnapshotContent(param.name, param.namespace, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a VirtualMachineClone object.
     * @param param the request object
     */
    readVirtualMachineCloneWithHttpInfo(param, options) {
        return this.api.readVirtualMachineCloneWithHttpInfo(param.name, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a VirtualMachineClone object.
     * @param param the request object
     */
    readVirtualMachineClone(param, options) {
        return this.api.readVirtualMachineClone(param.name, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a VirtualMachineClusterInstancetype object.
     * @param param the request object
     */
    readVirtualMachineClusterInstancetypeWithHttpInfo(param, options) {
        return this.api.readVirtualMachineClusterInstancetypeWithHttpInfo(param.name, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a VirtualMachineClusterInstancetype object.
     * @param param the request object
     */
    readVirtualMachineClusterInstancetype(param, options) {
        return this.api.readVirtualMachineClusterInstancetype(param.name, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a VirtualMachineClusterPreference object.
     * @param param the request object
     */
    readVirtualMachineClusterPreferenceWithHttpInfo(param, options) {
        return this.api.readVirtualMachineClusterPreferenceWithHttpInfo(param.name, param.exact, param._export, options).toPromise();
    }
    /**
     * Get a VirtualMachineClusterPreference object.
     * @param param the request object
     */
    readVirtualMachineClusterPreference(param, options) {
        return this.api.readVirtualMachineClusterPreference(param.name, param.exact, param._export, options).toPromise();
    }
    /**
     * Update a MigrationPolicy object.
     * @param param the request object
     */
    replaceMigrationPolicyWithHttpInfo(param, options) {
        return this.api.replaceMigrationPolicyWithHttpInfo(param.name, param.body, options).toPromise();
    }
    /**
     * Update a MigrationPolicy object.
     * @param param the request object
     */
    replaceMigrationPolicy(param, options) {
        return this.api.replaceMigrationPolicy(param.name, param.body, options).toPromise();
    }
    /**
     * Update a KubeVirt object.
     * @param param the request object
     */
    replaceNamespacedKubeVirtWithHttpInfo(param, options) {
        return this.api.replaceNamespacedKubeVirtWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Update a KubeVirt object.
     * @param param the request object
     */
    replaceNamespacedKubeVirt(param, options) {
        return this.api.replaceNamespacedKubeVirt(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Update a VirtualMachine object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineWithHttpInfo(param, options) {
        return this.api.replaceNamespacedVirtualMachineWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Update a VirtualMachine object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachine(param, options) {
        return this.api.replaceNamespacedVirtualMachine(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Update a VirtualMachineExport object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineExportWithHttpInfo(param, options) {
        return this.api.replaceNamespacedVirtualMachineExportWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Update a VirtualMachineExport object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineExport(param, options) {
        return this.api.replaceNamespacedVirtualMachineExport(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Update a VirtualMachineInstance object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineInstanceWithHttpInfo(param, options) {
        return this.api.replaceNamespacedVirtualMachineInstanceWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Update a VirtualMachineInstance object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineInstance(param, options) {
        return this.api.replaceNamespacedVirtualMachineInstance(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Update a VirtualMachineInstanceMigration object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineInstanceMigrationWithHttpInfo(param, options) {
        return this.api.replaceNamespacedVirtualMachineInstanceMigrationWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Update a VirtualMachineInstanceMigration object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineInstanceMigration(param, options) {
        return this.api.replaceNamespacedVirtualMachineInstanceMigration(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Update a VirtualMachineInstancePreset object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineInstancePresetWithHttpInfo(param, options) {
        return this.api.replaceNamespacedVirtualMachineInstancePresetWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Update a VirtualMachineInstancePreset object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineInstancePreset(param, options) {
        return this.api.replaceNamespacedVirtualMachineInstancePreset(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Update a VirtualMachineInstanceReplicaSet object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(param, options) {
        return this.api.replaceNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Update a VirtualMachineInstanceReplicaSet object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineInstanceReplicaSet(param, options) {
        return this.api.replaceNamespacedVirtualMachineInstanceReplicaSet(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Update a VirtualMachineInstancetype object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineInstancetypeWithHttpInfo(param, options) {
        return this.api.replaceNamespacedVirtualMachineInstancetypeWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Update a VirtualMachineInstancetype object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineInstancetype(param, options) {
        return this.api.replaceNamespacedVirtualMachineInstancetype(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Update a VirtualMachinePool object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachinePoolWithHttpInfo(param, options) {
        return this.api.replaceNamespacedVirtualMachinePoolWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Update a VirtualMachinePool object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachinePool(param, options) {
        return this.api.replaceNamespacedVirtualMachinePool(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Update a VirtualMachinePreference object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachinePreferenceWithHttpInfo(param, options) {
        return this.api.replaceNamespacedVirtualMachinePreferenceWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Update a VirtualMachinePreference object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachinePreference(param, options) {
        return this.api.replaceNamespacedVirtualMachinePreference(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Update a VirtualMachineRestore object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineRestoreWithHttpInfo(param, options) {
        return this.api.replaceNamespacedVirtualMachineRestoreWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Update a VirtualMachineRestore object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineRestore(param, options) {
        return this.api.replaceNamespacedVirtualMachineRestore(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Update a VirtualMachineSnapshot object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineSnapshotWithHttpInfo(param, options) {
        return this.api.replaceNamespacedVirtualMachineSnapshotWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Update a VirtualMachineSnapshot object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineSnapshot(param, options) {
        return this.api.replaceNamespacedVirtualMachineSnapshot(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Update a VirtualMachineSnapshotContent object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineSnapshotContentWithHttpInfo(param, options) {
        return this.api.replaceNamespacedVirtualMachineSnapshotContentWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Update a VirtualMachineSnapshotContent object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineSnapshotContent(param, options) {
        return this.api.replaceNamespacedVirtualMachineSnapshotContent(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Update a VirtualMachineClone object.
     * @param param the request object
     */
    replaceVirtualMachineCloneWithHttpInfo(param, options) {
        return this.api.replaceVirtualMachineCloneWithHttpInfo(param.name, param.body, options).toPromise();
    }
    /**
     * Update a VirtualMachineClone object.
     * @param param the request object
     */
    replaceVirtualMachineClone(param, options) {
        return this.api.replaceVirtualMachineClone(param.name, param.body, options).toPromise();
    }
    /**
     * Update a VirtualMachineClusterInstancetype object.
     * @param param the request object
     */
    replaceVirtualMachineClusterInstancetypeWithHttpInfo(param, options) {
        return this.api.replaceVirtualMachineClusterInstancetypeWithHttpInfo(param.name, param.body, options).toPromise();
    }
    /**
     * Update a VirtualMachineClusterInstancetype object.
     * @param param the request object
     */
    replaceVirtualMachineClusterInstancetype(param, options) {
        return this.api.replaceVirtualMachineClusterInstancetype(param.name, param.body, options).toPromise();
    }
    /**
     * Update a VirtualMachineClusterPreference object.
     * @param param the request object
     */
    replaceVirtualMachineClusterPreferenceWithHttpInfo(param, options) {
        return this.api.replaceVirtualMachineClusterPreferenceWithHttpInfo(param.name, param.body, options).toPromise();
    }
    /**
     * Update a VirtualMachineClusterPreference object.
     * @param param the request object
     */
    replaceVirtualMachineClusterPreference(param, options) {
        return this.api.replaceVirtualMachineClusterPreference(param.name, param.body, options).toPromise();
    }
    /**
     * Health endpoint
     * @param param the request object
     */
    v1CheckHealthWithHttpInfo(param = {}, options) {
        return this.api.v1CheckHealthWithHttpInfo(options).toPromise();
    }
    /**
     * Health endpoint
     * @param param the request object
     */
    v1CheckHealth(param = {}, options) {
        return this.api.v1CheckHealth(options).toPromise();
    }
    /**
     * Open a websocket connection to a serial console on the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1ConsoleWithHttpInfo(param, options) {
        return this.api.v1ConsoleWithHttpInfo(param.name, param.namespace, options).toPromise();
    }
    /**
     * Open a websocket connection to a serial console on the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1Console(param, options) {
        return this.api.v1Console(param.name, param.namespace, options).toPromise();
    }
    /**
     * Expands instancetype and preference into the passed VirtualMachine object.
     * @param param the request object
     */
    v1ExpandSpecWithHttpInfo(param, options) {
        return this.api.v1ExpandSpecWithHttpInfo(param.namespace, options).toPromise();
    }
    /**
     * Expands instancetype and preference into the passed VirtualMachine object.
     * @param param the request object
     */
    v1ExpandSpec(param, options) {
        return this.api.v1ExpandSpec(param.namespace, options).toPromise();
    }
    /**
     * Get list of active filesystems on guest machine via guest agent
     * @param param the request object
     */
    v1FilesystemlistWithHttpInfo(param, options) {
        return this.api.v1FilesystemlistWithHttpInfo(param.name, param.namespace, options).toPromise();
    }
    /**
     * Get list of active filesystems on guest machine via guest agent
     * @param param the request object
     */
    v1Filesystemlist(param, options) {
        return this.api.v1Filesystemlist(param.name, param.namespace, options).toPromise();
    }
    /**
     * Freeze a VirtualMachineInstance object.
     * @param param the request object
     */
    v1FreezeWithHttpInfo(param, options) {
        return this.api.v1FreezeWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Freeze a VirtualMachineInstance object.
     * @param param the request object
     */
    v1Freeze(param, options) {
        return this.api.v1Freeze(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Get a KubeVirt API Group
     * @param param the request object
     */
    v1GetSubAPIGroupWithHttpInfo(param = {}, options) {
        return this.api.v1GetSubAPIGroupWithHttpInfo(options).toPromise();
    }
    /**
     * Get a KubeVirt API Group
     * @param param the request object
     */
    v1GetSubAPIGroup(param = {}, options) {
        return this.api.v1GetSubAPIGroup(options).toPromise();
    }
    /**
     * @param param the request object
     */
    v1GuestfsWithHttpInfo(param = {}, options) {
        return this.api.v1GuestfsWithHttpInfo(options).toPromise();
    }
    /**
     * @param param the request object
     */
    v1Guestfs(param = {}, options) {
        return this.api.v1Guestfs(options).toPromise();
    }
    /**
     * Get guest agent os information
     * @param param the request object
     */
    v1GuestosinfoWithHttpInfo(param, options) {
        return this.api.v1GuestosinfoWithHttpInfo(param.name, param.namespace, options).toPromise();
    }
    /**
     * Get guest agent os information
     * @param param the request object
     */
    v1Guestosinfo(param, options) {
        return this.api.v1Guestosinfo(param.name, param.namespace, options).toPromise();
    }
    /**
     * Dumps a VirtualMachineInstance memory.
     * @param param the request object
     */
    v1MemoryDumpWithHttpInfo(param, options) {
        return this.api.v1MemoryDumpWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Dumps a VirtualMachineInstance memory.
     * @param param the request object
     */
    v1MemoryDump(param, options) {
        return this.api.v1MemoryDump(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Migrate a running VirtualMachine to another node.
     * @param param the request object
     */
    v1MigrateWithHttpInfo(param, options) {
        return this.api.v1MigrateWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Migrate a running VirtualMachine to another node.
     * @param param the request object
     */
    v1Migrate(param, options) {
        return this.api.v1Migrate(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Pause a VirtualMachineInstance object.
     * @param param the request object
     */
    v1PauseWithHttpInfo(param, options) {
        return this.api.v1PauseWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Pause a VirtualMachineInstance object.
     * @param param the request object
     */
    v1Pause(param, options) {
        return this.api.v1Pause(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Remove memory dump association.
     * @param param the request object
     */
    v1RemoveMemoryDumpWithHttpInfo(param, options) {
        return this.api.v1RemoveMemoryDumpWithHttpInfo(param.name, param.namespace, options).toPromise();
    }
    /**
     * Remove memory dump association.
     * @param param the request object
     */
    v1RemoveMemoryDump(param, options) {
        return this.api.v1RemoveMemoryDump(param.name, param.namespace, options).toPromise();
    }
    /**
     * Restart a VirtualMachine object.
     * @param param the request object
     */
    v1RestartWithHttpInfo(param, options) {
        return this.api.v1RestartWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Restart a VirtualMachine object.
     * @param param the request object
     */
    v1Restart(param, options) {
        return this.api.v1Restart(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Fetch SEV certificate chain from the node where Virtual Machine is scheduled
     * @param param the request object
     */
    v1SEVFetchCertChainWithHttpInfo(param, options) {
        return this.api.v1SEVFetchCertChainWithHttpInfo(param.name, param.namespace, options).toPromise();
    }
    /**
     * Fetch SEV certificate chain from the node where Virtual Machine is scheduled
     * @param param the request object
     */
    v1SEVFetchCertChain(param, options) {
        return this.api.v1SEVFetchCertChain(param.name, param.namespace, options).toPromise();
    }
    /**
     * Inject SEV launch secret into a Virtual Machine
     * @param param the request object
     */
    v1SEVInjectLaunchSecretWithHttpInfo(param, options) {
        return this.api.v1SEVInjectLaunchSecretWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Inject SEV launch secret into a Virtual Machine
     * @param param the request object
     */
    v1SEVInjectLaunchSecret(param, options) {
        return this.api.v1SEVInjectLaunchSecret(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Query SEV launch measurement from a Virtual Machine
     * @param param the request object
     */
    v1SEVQueryLaunchMeasurementWithHttpInfo(param, options) {
        return this.api.v1SEVQueryLaunchMeasurementWithHttpInfo(param.name, param.namespace, options).toPromise();
    }
    /**
     * Query SEV launch measurement from a Virtual Machine
     * @param param the request object
     */
    v1SEVQueryLaunchMeasurement(param, options) {
        return this.api.v1SEVQueryLaunchMeasurement(param.name, param.namespace, options).toPromise();
    }
    /**
     * Setup SEV session parameters for a Virtual Machine
     * @param param the request object
     */
    v1SEVSetupSessionWithHttpInfo(param, options) {
        return this.api.v1SEVSetupSessionWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Setup SEV session parameters for a Virtual Machine
     * @param param the request object
     */
    v1SEVSetupSession(param, options) {
        return this.api.v1SEVSetupSession(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Soft reboot a VirtualMachineInstance object.
     * @param param the request object
     */
    v1SoftRebootWithHttpInfo(param, options) {
        return this.api.v1SoftRebootWithHttpInfo(param.name, param.namespace, options).toPromise();
    }
    /**
     * Soft reboot a VirtualMachineInstance object.
     * @param param the request object
     */
    v1SoftReboot(param, options) {
        return this.api.v1SoftReboot(param.name, param.namespace, options).toPromise();
    }
    /**
     * Start a VirtualMachine object.
     * @param param the request object
     */
    v1StartWithHttpInfo(param, options) {
        return this.api.v1StartWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Start a VirtualMachine object.
     * @param param the request object
     */
    v1Start(param, options) {
        return this.api.v1Start(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Stop a VirtualMachine object.
     * @param param the request object
     */
    v1StopWithHttpInfo(param, options) {
        return this.api.v1StopWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Stop a VirtualMachine object.
     * @param param the request object
     */
    v1Stop(param, options) {
        return this.api.v1Stop(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Unfreeze a VirtualMachineInstance object.
     * @param param the request object
     */
    v1UnfreezeWithHttpInfo(param, options) {
        return this.api.v1UnfreezeWithHttpInfo(param.name, param.namespace, options).toPromise();
    }
    /**
     * Unfreeze a VirtualMachineInstance object.
     * @param param the request object
     */
    v1Unfreeze(param, options) {
        return this.api.v1Unfreeze(param.name, param.namespace, options).toPromise();
    }
    /**
     * Unpause a VirtualMachineInstance object.
     * @param param the request object
     */
    v1UnpauseWithHttpInfo(param, options) {
        return this.api.v1UnpauseWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Unpause a VirtualMachineInstance object.
     * @param param the request object
     */
    v1Unpause(param, options) {
        return this.api.v1Unpause(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Get list of active users via guest agent
     * @param param the request object
     */
    v1UserlistWithHttpInfo(param, options) {
        return this.api.v1UserlistWithHttpInfo(param.name, param.namespace, options).toPromise();
    }
    /**
     * Get list of active users via guest agent
     * @param param the request object
     */
    v1Userlist(param, options) {
        return this.api.v1Userlist(param.name, param.namespace, options).toPromise();
    }
    /**
     * Open a websocket connection to connect to VNC on the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1VNCWithHttpInfo(param, options) {
        return this.api.v1VNCWithHttpInfo(param.name, param.namespace, options).toPromise();
    }
    /**
     * Open a websocket connection to connect to VNC on the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1VNC(param, options) {
        return this.api.v1VNC(param.name, param.namespace, options).toPromise();
    }
    /**
     * Get a PNG VNC screenshot of the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1VNCScreenshotWithHttpInfo(param, options) {
        return this.api.v1VNCScreenshotWithHttpInfo(param.name, param.namespace, param.moveCursor, options).toPromise();
    }
    /**
     * Get a PNG VNC screenshot of the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1VNCScreenshot(param, options) {
        return this.api.v1VNCScreenshot(param.name, param.namespace, param.moveCursor, options).toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port via VSOCK.
     * @param param the request object
     */
    v1VSOCKWithHttpInfo(param, options) {
        return this.api.v1VSOCKWithHttpInfo(param.name, param.namespace, param.port, param.tls, options).toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port via VSOCK.
     * @param param the request object
     */
    v1VSOCK(param, options) {
        return this.api.v1VSOCK(param.name, param.namespace, param.port, param.tls, options).toPromise();
    }
    /**
     * @param param the request object
     */
    v1VersionWithHttpInfo(param = {}, options) {
        return this.api.v1VersionWithHttpInfo(options).toPromise();
    }
    /**
     * @param param the request object
     */
    v1Version(param = {}, options) {
        return this.api.v1Version(options).toPromise();
    }
    /**
     * Health endpoint
     * @param param the request object
     */
    v1alpha3CheckHealthWithHttpInfo(param = {}, options) {
        return this.api.v1alpha3CheckHealthWithHttpInfo(options).toPromise();
    }
    /**
     * Health endpoint
     * @param param the request object
     */
    v1alpha3CheckHealth(param = {}, options) {
        return this.api.v1alpha3CheckHealth(options).toPromise();
    }
    /**
     * Open a websocket connection to a serial console on the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1alpha3ConsoleWithHttpInfo(param, options) {
        return this.api.v1alpha3ConsoleWithHttpInfo(param.name, param.namespace, options).toPromise();
    }
    /**
     * Open a websocket connection to a serial console on the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1alpha3Console(param, options) {
        return this.api.v1alpha3Console(param.name, param.namespace, options).toPromise();
    }
    /**
     * Expands instancetype and preference into the passed VirtualMachine object.
     * @param param the request object
     */
    v1alpha3ExpandSpecWithHttpInfo(param, options) {
        return this.api.v1alpha3ExpandSpecWithHttpInfo(param.namespace, options).toPromise();
    }
    /**
     * Expands instancetype and preference into the passed VirtualMachine object.
     * @param param the request object
     */
    v1alpha3ExpandSpec(param, options) {
        return this.api.v1alpha3ExpandSpec(param.namespace, options).toPromise();
    }
    /**
     * Get list of active filesystems on guest machine via guest agent
     * @param param the request object
     */
    v1alpha3FilesystemlistWithHttpInfo(param, options) {
        return this.api.v1alpha3FilesystemlistWithHttpInfo(param.name, param.namespace, options).toPromise();
    }
    /**
     * Get list of active filesystems on guest machine via guest agent
     * @param param the request object
     */
    v1alpha3Filesystemlist(param, options) {
        return this.api.v1alpha3Filesystemlist(param.name, param.namespace, options).toPromise();
    }
    /**
     * Freeze a VirtualMachineInstance object.
     * @param param the request object
     */
    v1alpha3FreezeWithHttpInfo(param, options) {
        return this.api.v1alpha3FreezeWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Freeze a VirtualMachineInstance object.
     * @param param the request object
     */
    v1alpha3Freeze(param, options) {
        return this.api.v1alpha3Freeze(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * @param param the request object
     */
    v1alpha3GuestfsWithHttpInfo(param = {}, options) {
        return this.api.v1alpha3GuestfsWithHttpInfo(options).toPromise();
    }
    /**
     * @param param the request object
     */
    v1alpha3Guestfs(param = {}, options) {
        return this.api.v1alpha3Guestfs(options).toPromise();
    }
    /**
     * Get guest agent os information
     * @param param the request object
     */
    v1alpha3GuestosinfoWithHttpInfo(param, options) {
        return this.api.v1alpha3GuestosinfoWithHttpInfo(param.name, param.namespace, options).toPromise();
    }
    /**
     * Get guest agent os information
     * @param param the request object
     */
    v1alpha3Guestosinfo(param, options) {
        return this.api.v1alpha3Guestosinfo(param.name, param.namespace, options).toPromise();
    }
    /**
     * Dumps a VirtualMachineInstance memory.
     * @param param the request object
     */
    v1alpha3MemoryDumpWithHttpInfo(param, options) {
        return this.api.v1alpha3MemoryDumpWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Dumps a VirtualMachineInstance memory.
     * @param param the request object
     */
    v1alpha3MemoryDump(param, options) {
        return this.api.v1alpha3MemoryDump(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Migrate a running VirtualMachine to another node.
     * @param param the request object
     */
    v1alpha3MigrateWithHttpInfo(param, options) {
        return this.api.v1alpha3MigrateWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Migrate a running VirtualMachine to another node.
     * @param param the request object
     */
    v1alpha3Migrate(param, options) {
        return this.api.v1alpha3Migrate(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Pause a VirtualMachineInstance object.
     * @param param the request object
     */
    v1alpha3PauseWithHttpInfo(param, options) {
        return this.api.v1alpha3PauseWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Pause a VirtualMachineInstance object.
     * @param param the request object
     */
    v1alpha3Pause(param, options) {
        return this.api.v1alpha3Pause(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Remove memory dump association.
     * @param param the request object
     */
    v1alpha3RemoveMemoryDumpWithHttpInfo(param, options) {
        return this.api.v1alpha3RemoveMemoryDumpWithHttpInfo(param.name, param.namespace, options).toPromise();
    }
    /**
     * Remove memory dump association.
     * @param param the request object
     */
    v1alpha3RemoveMemoryDump(param, options) {
        return this.api.v1alpha3RemoveMemoryDump(param.name, param.namespace, options).toPromise();
    }
    /**
     * Restart a VirtualMachine object.
     * @param param the request object
     */
    v1alpha3RestartWithHttpInfo(param, options) {
        return this.api.v1alpha3RestartWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Restart a VirtualMachine object.
     * @param param the request object
     */
    v1alpha3Restart(param, options) {
        return this.api.v1alpha3Restart(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Fetch SEV certificate chain from the node where Virtual Machine is scheduled
     * @param param the request object
     */
    v1alpha3SEVFetchCertChainWithHttpInfo(param, options) {
        return this.api.v1alpha3SEVFetchCertChainWithHttpInfo(param.name, param.namespace, options).toPromise();
    }
    /**
     * Fetch SEV certificate chain from the node where Virtual Machine is scheduled
     * @param param the request object
     */
    v1alpha3SEVFetchCertChain(param, options) {
        return this.api.v1alpha3SEVFetchCertChain(param.name, param.namespace, options).toPromise();
    }
    /**
     * Inject SEV launch secret into a Virtual Machine
     * @param param the request object
     */
    v1alpha3SEVInjectLaunchSecretWithHttpInfo(param, options) {
        return this.api.v1alpha3SEVInjectLaunchSecretWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Inject SEV launch secret into a Virtual Machine
     * @param param the request object
     */
    v1alpha3SEVInjectLaunchSecret(param, options) {
        return this.api.v1alpha3SEVInjectLaunchSecret(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Query SEV launch measurement from a Virtual Machine
     * @param param the request object
     */
    v1alpha3SEVQueryLaunchMeasurementWithHttpInfo(param, options) {
        return this.api.v1alpha3SEVQueryLaunchMeasurementWithHttpInfo(param.name, param.namespace, options).toPromise();
    }
    /**
     * Query SEV launch measurement from a Virtual Machine
     * @param param the request object
     */
    v1alpha3SEVQueryLaunchMeasurement(param, options) {
        return this.api.v1alpha3SEVQueryLaunchMeasurement(param.name, param.namespace, options).toPromise();
    }
    /**
     * Setup SEV session parameters for a Virtual Machine
     * @param param the request object
     */
    v1alpha3SEVSetupSessionWithHttpInfo(param, options) {
        return this.api.v1alpha3SEVSetupSessionWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Setup SEV session parameters for a Virtual Machine
     * @param param the request object
     */
    v1alpha3SEVSetupSession(param, options) {
        return this.api.v1alpha3SEVSetupSession(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Soft reboot a VirtualMachineInstance object.
     * @param param the request object
     */
    v1alpha3SoftRebootWithHttpInfo(param, options) {
        return this.api.v1alpha3SoftRebootWithHttpInfo(param.name, param.namespace, options).toPromise();
    }
    /**
     * Soft reboot a VirtualMachineInstance object.
     * @param param the request object
     */
    v1alpha3SoftReboot(param, options) {
        return this.api.v1alpha3SoftReboot(param.name, param.namespace, options).toPromise();
    }
    /**
     * Start a VirtualMachine object.
     * @param param the request object
     */
    v1alpha3StartWithHttpInfo(param, options) {
        return this.api.v1alpha3StartWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Start a VirtualMachine object.
     * @param param the request object
     */
    v1alpha3Start(param, options) {
        return this.api.v1alpha3Start(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Stop a VirtualMachine object.
     * @param param the request object
     */
    v1alpha3StopWithHttpInfo(param, options) {
        return this.api.v1alpha3StopWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Stop a VirtualMachine object.
     * @param param the request object
     */
    v1alpha3Stop(param, options) {
        return this.api.v1alpha3Stop(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Unfreeze a VirtualMachineInstance object.
     * @param param the request object
     */
    v1alpha3UnfreezeWithHttpInfo(param, options) {
        return this.api.v1alpha3UnfreezeWithHttpInfo(param.name, param.namespace, options).toPromise();
    }
    /**
     * Unfreeze a VirtualMachineInstance object.
     * @param param the request object
     */
    v1alpha3Unfreeze(param, options) {
        return this.api.v1alpha3Unfreeze(param.name, param.namespace, options).toPromise();
    }
    /**
     * Unpause a VirtualMachineInstance object.
     * @param param the request object
     */
    v1alpha3UnpauseWithHttpInfo(param, options) {
        return this.api.v1alpha3UnpauseWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Unpause a VirtualMachineInstance object.
     * @param param the request object
     */
    v1alpha3Unpause(param, options) {
        return this.api.v1alpha3Unpause(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Get list of active users via guest agent
     * @param param the request object
     */
    v1alpha3UserlistWithHttpInfo(param, options) {
        return this.api.v1alpha3UserlistWithHttpInfo(param.name, param.namespace, options).toPromise();
    }
    /**
     * Get list of active users via guest agent
     * @param param the request object
     */
    v1alpha3Userlist(param, options) {
        return this.api.v1alpha3Userlist(param.name, param.namespace, options).toPromise();
    }
    /**
     * Open a websocket connection to connect to VNC on the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1alpha3VNCWithHttpInfo(param, options) {
        return this.api.v1alpha3VNCWithHttpInfo(param.name, param.namespace, options).toPromise();
    }
    /**
     * Open a websocket connection to connect to VNC on the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1alpha3VNC(param, options) {
        return this.api.v1alpha3VNC(param.name, param.namespace, options).toPromise();
    }
    /**
     * Get a PNG VNC screenshot of the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1alpha3VNCScreenshotWithHttpInfo(param, options) {
        return this.api.v1alpha3VNCScreenshotWithHttpInfo(param.name, param.namespace, param.moveCursor, options).toPromise();
    }
    /**
     * Get a PNG VNC screenshot of the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1alpha3VNCScreenshot(param, options) {
        return this.api.v1alpha3VNCScreenshot(param.name, param.namespace, param.moveCursor, options).toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port via VSOCK.
     * @param param the request object
     */
    v1alpha3VSOCKWithHttpInfo(param, options) {
        return this.api.v1alpha3VSOCKWithHttpInfo(param.name, param.namespace, param.port, param.tls, options).toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port via VSOCK.
     * @param param the request object
     */
    v1alpha3VSOCK(param, options) {
        return this.api.v1alpha3VSOCK(param.name, param.namespace, param.port, param.tls, options).toPromise();
    }
    /**
     * @param param the request object
     */
    v1alpha3VersionWithHttpInfo(param = {}, options) {
        return this.api.v1alpha3VersionWithHttpInfo(options).toPromise();
    }
    /**
     * @param param the request object
     */
    v1alpha3Version(param = {}, options) {
        return this.api.v1alpha3Version(options).toPromise();
    }
    /**
     * @param param the request object
     */
    v1alpha3dumpClusterProfilerWithHttpInfo(param = {}, options) {
        return this.api.v1alpha3dumpClusterProfilerWithHttpInfo(options).toPromise();
    }
    /**
     * @param param the request object
     */
    v1alpha3dumpClusterProfiler(param = {}, options) {
        return this.api.v1alpha3dumpClusterProfiler(options).toPromise();
    }
    /**
     * Get a KubeVirt API resources
     * @param param the request object
     */
    v1alpha3getAPISubResourcesWithHttpInfo(param = {}, options) {
        return this.api.v1alpha3getAPISubResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * Get a KubeVirt API resources
     * @param param the request object
     */
    v1alpha3getAPISubResources(param = {}, options) {
        return this.api.v1alpha3getAPISubResources(options).toPromise();
    }
    /**
     * @param param the request object
     */
    v1alpha3startClusterProfilerWithHttpInfo(param = {}, options) {
        return this.api.v1alpha3startClusterProfilerWithHttpInfo(options).toPromise();
    }
    /**
     * @param param the request object
     */
    v1alpha3startClusterProfiler(param = {}, options) {
        return this.api.v1alpha3startClusterProfiler(options).toPromise();
    }
    /**
     * @param param the request object
     */
    v1alpha3stopClusterProfilerWithHttpInfo(param = {}, options) {
        return this.api.v1alpha3stopClusterProfilerWithHttpInfo(options).toPromise();
    }
    /**
     * @param param the request object
     */
    v1alpha3stopClusterProfiler(param = {}, options) {
        return this.api.v1alpha3stopClusterProfiler(options).toPromise();
    }
    /**
     * Open a websocket connection to connect to USB device on the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1alpha3usbredirWithHttpInfo(param, options) {
        return this.api.v1alpha3usbredirWithHttpInfo(param.name, param.namespace, options).toPromise();
    }
    /**
     * Open a websocket connection to connect to USB device on the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1alpha3usbredir(param, options) {
        return this.api.v1alpha3usbredir(param.name, param.namespace, options).toPromise();
    }
    /**
     * Add a volume and disk to a running Virtual Machine.
     * @param param the request object
     */
    v1alpha3vmAddvolumeWithHttpInfo(param, options) {
        return this.api.v1alpha3vmAddvolumeWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Add a volume and disk to a running Virtual Machine.
     * @param param the request object
     */
    v1alpha3vmAddvolume(param, options) {
        return this.api.v1alpha3vmAddvolume(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Get VirtualMachine object with expanded instancetype and preference.
     * @param param the request object
     */
    v1alpha3vmExpandSpecWithHttpInfo(param, options) {
        return this.api.v1alpha3vmExpandSpecWithHttpInfo(param.name, param.namespace, options).toPromise();
    }
    /**
     * Get VirtualMachine object with expanded instancetype and preference.
     * @param param the request object
     */
    v1alpha3vmExpandSpec(param, options) {
        return this.api.v1alpha3vmExpandSpec(param.name, param.namespace, options).toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic to the running VMI for the specified VirtualMachine and port.
     * @param param the request object
     */
    v1alpha3vmPortForwardWithHttpInfo(param, options) {
        return this.api.v1alpha3vmPortForwardWithHttpInfo(param.name, param.namespace, param.port, options).toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic to the running VMI for the specified VirtualMachine and port.
     * @param param the request object
     */
    v1alpha3vmPortForward(param, options) {
        return this.api.v1alpha3vmPortForward(param.name, param.namespace, param.port, options).toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachine and port.
     * @param param the request object
     */
    v1alpha3vmPortForwardWithProtocolWithHttpInfo(param, options) {
        return this.api.v1alpha3vmPortForwardWithProtocolWithHttpInfo(param.name, param.namespace, param.port, param.protocol, options).toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachine and port.
     * @param param the request object
     */
    v1alpha3vmPortForwardWithProtocol(param, options) {
        return this.api.v1alpha3vmPortForwardWithProtocol(param.name, param.namespace, param.port, param.protocol, options).toPromise();
    }
    /**
     * Removes a volume and disk from a running Virtual Machine.
     * @param param the request object
     */
    v1alpha3vmRemovevolumeWithHttpInfo(param, options) {
        return this.api.v1alpha3vmRemovevolumeWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Removes a volume and disk from a running Virtual Machine.
     * @param param the request object
     */
    v1alpha3vmRemovevolume(param, options) {
        return this.api.v1alpha3vmRemovevolume(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Add a volume and disk to a running Virtual Machine Instance
     * @param param the request object
     */
    v1alpha3vmiAddvolumeWithHttpInfo(param, options) {
        return this.api.v1alpha3vmiAddvolumeWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Add a volume and disk to a running Virtual Machine Instance
     * @param param the request object
     */
    v1alpha3vmiAddvolume(param, options) {
        return this.api.v1alpha3vmiAddvolume(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port.
     * @param param the request object
     */
    v1alpha3vmiPortForwardWithHttpInfo(param, options) {
        return this.api.v1alpha3vmiPortForwardWithHttpInfo(param.name, param.namespace, param.port, options).toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port.
     * @param param the request object
     */
    v1alpha3vmiPortForward(param, options) {
        return this.api.v1alpha3vmiPortForward(param.name, param.namespace, param.port, options).toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachineInstance and port.
     * @param param the request object
     */
    v1alpha3vmiPortForwardWithProtocolWithHttpInfo(param, options) {
        return this.api.v1alpha3vmiPortForwardWithProtocolWithHttpInfo(param.name, param.namespace, param.port, param.protocol, options).toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachineInstance and port.
     * @param param the request object
     */
    v1alpha3vmiPortForwardWithProtocol(param, options) {
        return this.api.v1alpha3vmiPortForwardWithProtocol(param.name, param.namespace, param.port, param.protocol, options).toPromise();
    }
    /**
     * Removes a volume and disk from a running Virtual Machine Instance
     * @param param the request object
     */
    v1alpha3vmiRemovevolumeWithHttpInfo(param, options) {
        return this.api.v1alpha3vmiRemovevolumeWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Removes a volume and disk from a running Virtual Machine Instance
     * @param param the request object
     */
    v1alpha3vmiRemovevolume(param, options) {
        return this.api.v1alpha3vmiRemovevolume(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * @param param the request object
     */
    v1dumpClusterProfilerWithHttpInfo(param = {}, options) {
        return this.api.v1dumpClusterProfilerWithHttpInfo(options).toPromise();
    }
    /**
     * @param param the request object
     */
    v1dumpClusterProfiler(param = {}, options) {
        return this.api.v1dumpClusterProfiler(options).toPromise();
    }
    /**
     * Get a KubeVirt API resources
     * @param param the request object
     */
    v1getAPISubResourcesWithHttpInfo(param = {}, options) {
        return this.api.v1getAPISubResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * Get a KubeVirt API resources
     * @param param the request object
     */
    v1getAPISubResources(param = {}, options) {
        return this.api.v1getAPISubResources(options).toPromise();
    }
    /**
     * @param param the request object
     */
    v1startClusterProfilerWithHttpInfo(param = {}, options) {
        return this.api.v1startClusterProfilerWithHttpInfo(options).toPromise();
    }
    /**
     * @param param the request object
     */
    v1startClusterProfiler(param = {}, options) {
        return this.api.v1startClusterProfiler(options).toPromise();
    }
    /**
     * @param param the request object
     */
    v1stopClusterProfilerWithHttpInfo(param = {}, options) {
        return this.api.v1stopClusterProfilerWithHttpInfo(options).toPromise();
    }
    /**
     * @param param the request object
     */
    v1stopClusterProfiler(param = {}, options) {
        return this.api.v1stopClusterProfiler(options).toPromise();
    }
    /**
     * Open a websocket connection to connect to USB device on the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1usbredirWithHttpInfo(param, options) {
        return this.api.v1usbredirWithHttpInfo(param.name, param.namespace, options).toPromise();
    }
    /**
     * Open a websocket connection to connect to USB device on the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1usbredir(param, options) {
        return this.api.v1usbredir(param.name, param.namespace, options).toPromise();
    }
    /**
     * Add a volume and disk to a running Virtual Machine.
     * @param param the request object
     */
    v1vmAddvolumeWithHttpInfo(param, options) {
        return this.api.v1vmAddvolumeWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Add a volume and disk to a running Virtual Machine.
     * @param param the request object
     */
    v1vmAddvolume(param, options) {
        return this.api.v1vmAddvolume(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Get VirtualMachine object with expanded instancetype and preference.
     * @param param the request object
     */
    v1vmExpandSpecWithHttpInfo(param, options) {
        return this.api.v1vmExpandSpecWithHttpInfo(param.name, param.namespace, options).toPromise();
    }
    /**
     * Get VirtualMachine object with expanded instancetype and preference.
     * @param param the request object
     */
    v1vmExpandSpec(param, options) {
        return this.api.v1vmExpandSpec(param.name, param.namespace, options).toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic to the running VMI for the specified VirtualMachine and port.
     * @param param the request object
     */
    v1vmPortForwardWithHttpInfo(param, options) {
        return this.api.v1vmPortForwardWithHttpInfo(param.name, param.namespace, param.port, options).toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic to the running VMI for the specified VirtualMachine and port.
     * @param param the request object
     */
    v1vmPortForward(param, options) {
        return this.api.v1vmPortForward(param.name, param.namespace, param.port, options).toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachine and port.
     * @param param the request object
     */
    v1vmPortForwardWithProtocolWithHttpInfo(param, options) {
        return this.api.v1vmPortForwardWithProtocolWithHttpInfo(param.name, param.namespace, param.port, param.protocol, options).toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachine and port.
     * @param param the request object
     */
    v1vmPortForwardWithProtocol(param, options) {
        return this.api.v1vmPortForwardWithProtocol(param.name, param.namespace, param.port, param.protocol, options).toPromise();
    }
    /**
     * Removes a volume and disk from a running Virtual Machine.
     * @param param the request object
     */
    v1vmRemovevolumeWithHttpInfo(param, options) {
        return this.api.v1vmRemovevolumeWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Removes a volume and disk from a running Virtual Machine.
     * @param param the request object
     */
    v1vmRemovevolume(param, options) {
        return this.api.v1vmRemovevolume(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Add a volume and disk to a running Virtual Machine Instance
     * @param param the request object
     */
    v1vmiAddvolumeWithHttpInfo(param, options) {
        return this.api.v1vmiAddvolumeWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Add a volume and disk to a running Virtual Machine Instance
     * @param param the request object
     */
    v1vmiAddvolume(param, options) {
        return this.api.v1vmiAddvolume(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port.
     * @param param the request object
     */
    v1vmiPortForwardWithHttpInfo(param, options) {
        return this.api.v1vmiPortForwardWithHttpInfo(param.name, param.namespace, param.port, options).toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port.
     * @param param the request object
     */
    v1vmiPortForward(param, options) {
        return this.api.v1vmiPortForward(param.name, param.namespace, param.port, options).toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachineInstance and port.
     * @param param the request object
     */
    v1vmiPortForwardWithProtocolWithHttpInfo(param, options) {
        return this.api.v1vmiPortForwardWithProtocolWithHttpInfo(param.name, param.namespace, param.port, param.protocol, options).toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachineInstance and port.
     * @param param the request object
     */
    v1vmiPortForwardWithProtocol(param, options) {
        return this.api.v1vmiPortForwardWithProtocol(param.name, param.namespace, param.port, param.protocol, options).toPromise();
    }
    /**
     * Removes a volume and disk from a running Virtual Machine Instance
     * @param param the request object
     */
    v1vmiRemovevolumeWithHttpInfo(param, options) {
        return this.api.v1vmiRemovevolumeWithHttpInfo(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Removes a volume and disk from a running Virtual Machine Instance
     * @param param the request object
     */
    v1vmiRemovevolume(param, options) {
        return this.api.v1vmiRemovevolume(param.name, param.namespace, param.body, options).toPromise();
    }
    /**
     * Watch a KubeVirtList object.
     * @param param the request object
     */
    watchKubeVirtListForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.watchKubeVirtListForAllNamespacesWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a KubeVirtList object.
     * @param param the request object
     */
    watchKubeVirtListForAllNamespaces(param = {}, options) {
        return this.api.watchKubeVirtListForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a MigrationPolicyList object.
     * @param param the request object
     */
    watchMigrationPolicyListForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.watchMigrationPolicyListForAllNamespacesWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a MigrationPolicyList object.
     * @param param the request object
     */
    watchMigrationPolicyListForAllNamespaces(param = {}, options) {
        return this.api.watchMigrationPolicyListForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a KubeVirt object.
     * @param param the request object
     */
    watchNamespacedKubeVirtWithHttpInfo(param, options) {
        return this.api.watchNamespacedKubeVirtWithHttpInfo(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a KubeVirt object.
     * @param param the request object
     */
    watchNamespacedKubeVirt(param, options) {
        return this.api.watchNamespacedKubeVirt(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachine object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineWithHttpInfo(param, options) {
        return this.api.watchNamespacedVirtualMachineWithHttpInfo(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachine object.
     * @param param the request object
     */
    watchNamespacedVirtualMachine(param, options) {
        return this.api.watchNamespacedVirtualMachine(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineExport object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineExportWithHttpInfo(param, options) {
        return this.api.watchNamespacedVirtualMachineExportWithHttpInfo(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineExport object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineExport(param, options) {
        return this.api.watchNamespacedVirtualMachineExport(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineInstance object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineInstanceWithHttpInfo(param, options) {
        return this.api.watchNamespacedVirtualMachineInstanceWithHttpInfo(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineInstance object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineInstance(param, options) {
        return this.api.watchNamespacedVirtualMachineInstance(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineInstanceMigration object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineInstanceMigrationWithHttpInfo(param, options) {
        return this.api.watchNamespacedVirtualMachineInstanceMigrationWithHttpInfo(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineInstanceMigration object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineInstanceMigration(param, options) {
        return this.api.watchNamespacedVirtualMachineInstanceMigration(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineInstancePreset object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineInstancePresetWithHttpInfo(param, options) {
        return this.api.watchNamespacedVirtualMachineInstancePresetWithHttpInfo(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineInstancePreset object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineInstancePreset(param, options) {
        return this.api.watchNamespacedVirtualMachineInstancePreset(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineInstanceReplicaSet object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(param, options) {
        return this.api.watchNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineInstanceReplicaSet object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineInstanceReplicaSet(param, options) {
        return this.api.watchNamespacedVirtualMachineInstanceReplicaSet(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineInstancetype object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineInstancetypeWithHttpInfo(param, options) {
        return this.api.watchNamespacedVirtualMachineInstancetypeWithHttpInfo(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineInstancetype object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineInstancetype(param, options) {
        return this.api.watchNamespacedVirtualMachineInstancetype(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachinePool object.
     * @param param the request object
     */
    watchNamespacedVirtualMachinePoolWithHttpInfo(param, options) {
        return this.api.watchNamespacedVirtualMachinePoolWithHttpInfo(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachinePool object.
     * @param param the request object
     */
    watchNamespacedVirtualMachinePool(param, options) {
        return this.api.watchNamespacedVirtualMachinePool(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachinePreference object.
     * @param param the request object
     */
    watchNamespacedVirtualMachinePreferenceWithHttpInfo(param, options) {
        return this.api.watchNamespacedVirtualMachinePreferenceWithHttpInfo(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachinePreference object.
     * @param param the request object
     */
    watchNamespacedVirtualMachinePreference(param, options) {
        return this.api.watchNamespacedVirtualMachinePreference(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineRestore object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineRestoreWithHttpInfo(param, options) {
        return this.api.watchNamespacedVirtualMachineRestoreWithHttpInfo(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineRestore object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineRestore(param, options) {
        return this.api.watchNamespacedVirtualMachineRestore(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineSnapshot object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineSnapshotWithHttpInfo(param, options) {
        return this.api.watchNamespacedVirtualMachineSnapshotWithHttpInfo(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineSnapshot object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineSnapshot(param, options) {
        return this.api.watchNamespacedVirtualMachineSnapshot(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineSnapshotContent object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineSnapshotContentWithHttpInfo(param, options) {
        return this.api.watchNamespacedVirtualMachineSnapshotContentWithHttpInfo(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineSnapshotContent object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineSnapshotContent(param, options) {
        return this.api.watchNamespacedVirtualMachineSnapshotContent(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineCloneList object.
     * @param param the request object
     */
    watchVirtualMachineCloneListForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.watchVirtualMachineCloneListForAllNamespacesWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineCloneList object.
     * @param param the request object
     */
    watchVirtualMachineCloneListForAllNamespaces(param = {}, options) {
        return this.api.watchVirtualMachineCloneListForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineClusterInstancetypeList object.
     * @param param the request object
     */
    watchVirtualMachineClusterInstancetypeListForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.watchVirtualMachineClusterInstancetypeListForAllNamespacesWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineClusterInstancetypeList object.
     * @param param the request object
     */
    watchVirtualMachineClusterInstancetypeListForAllNamespaces(param = {}, options) {
        return this.api.watchVirtualMachineClusterInstancetypeListForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineClusterPreferenceList object.
     * @param param the request object
     */
    watchVirtualMachineClusterPreferenceListForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.watchVirtualMachineClusterPreferenceListForAllNamespacesWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineClusterPreferenceList object.
     * @param param the request object
     */
    watchVirtualMachineClusterPreferenceListForAllNamespaces(param = {}, options) {
        return this.api.watchVirtualMachineClusterPreferenceListForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineExportList object.
     * @param param the request object
     */
    watchVirtualMachineExportListForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.watchVirtualMachineExportListForAllNamespacesWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineExportList object.
     * @param param the request object
     */
    watchVirtualMachineExportListForAllNamespaces(param = {}, options) {
        return this.api.watchVirtualMachineExportListForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineInstanceList object.
     * @param param the request object
     */
    watchVirtualMachineInstanceListForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.watchVirtualMachineInstanceListForAllNamespacesWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineInstanceList object.
     * @param param the request object
     */
    watchVirtualMachineInstanceListForAllNamespaces(param = {}, options) {
        return this.api.watchVirtualMachineInstanceListForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineInstanceMigrationList object.
     * @param param the request object
     */
    watchVirtualMachineInstanceMigrationListForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.watchVirtualMachineInstanceMigrationListForAllNamespacesWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineInstanceMigrationList object.
     * @param param the request object
     */
    watchVirtualMachineInstanceMigrationListForAllNamespaces(param = {}, options) {
        return this.api.watchVirtualMachineInstanceMigrationListForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineInstancePresetList object.
     * @param param the request object
     */
    watchVirtualMachineInstancePresetListForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.watchVirtualMachineInstancePresetListForAllNamespacesWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineInstancePresetList object.
     * @param param the request object
     */
    watchVirtualMachineInstancePresetListForAllNamespaces(param = {}, options) {
        return this.api.watchVirtualMachineInstancePresetListForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineInstanceReplicaSetList object.
     * @param param the request object
     */
    watchVirtualMachineInstanceReplicaSetListForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.watchVirtualMachineInstanceReplicaSetListForAllNamespacesWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineInstanceReplicaSetList object.
     * @param param the request object
     */
    watchVirtualMachineInstanceReplicaSetListForAllNamespaces(param = {}, options) {
        return this.api.watchVirtualMachineInstanceReplicaSetListForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineInstancetypeList object.
     * @param param the request object
     */
    watchVirtualMachineInstancetypeListForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.watchVirtualMachineInstancetypeListForAllNamespacesWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineInstancetypeList object.
     * @param param the request object
     */
    watchVirtualMachineInstancetypeListForAllNamespaces(param = {}, options) {
        return this.api.watchVirtualMachineInstancetypeListForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineList object.
     * @param param the request object
     */
    watchVirtualMachineListForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.watchVirtualMachineListForAllNamespacesWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineList object.
     * @param param the request object
     */
    watchVirtualMachineListForAllNamespaces(param = {}, options) {
        return this.api.watchVirtualMachineListForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachinePoolList object.
     * @param param the request object
     */
    watchVirtualMachinePoolListForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.watchVirtualMachinePoolListForAllNamespacesWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachinePoolList object.
     * @param param the request object
     */
    watchVirtualMachinePoolListForAllNamespaces(param = {}, options) {
        return this.api.watchVirtualMachinePoolListForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachinePreferenceList object.
     * @param param the request object
     */
    watchVirtualMachinePreferenceListForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.watchVirtualMachinePreferenceListForAllNamespacesWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachinePreferenceList object.
     * @param param the request object
     */
    watchVirtualMachinePreferenceListForAllNamespaces(param = {}, options) {
        return this.api.watchVirtualMachinePreferenceListForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineRestoreList object.
     * @param param the request object
     */
    watchVirtualMachineRestoreListForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.watchVirtualMachineRestoreListForAllNamespacesWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineRestoreList object.
     * @param param the request object
     */
    watchVirtualMachineRestoreListForAllNamespaces(param = {}, options) {
        return this.api.watchVirtualMachineRestoreListForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineSnapshotContentList object.
     * @param param the request object
     */
    watchVirtualMachineSnapshotContentListForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.watchVirtualMachineSnapshotContentListForAllNamespacesWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineSnapshotContentList object.
     * @param param the request object
     */
    watchVirtualMachineSnapshotContentListForAllNamespaces(param = {}, options) {
        return this.api.watchVirtualMachineSnapshotContentListForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineSnapshotList object.
     * @param param the request object
     */
    watchVirtualMachineSnapshotListForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.watchVirtualMachineSnapshotListForAllNamespacesWithHttpInfo(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * Watch a VirtualMachineSnapshotList object.
     * @param param the request object
     */
    watchVirtualMachineSnapshotListForAllNamespaces(param = {}, options) {
        return this.api.watchVirtualMachineSnapshotListForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch, options).toPromise();
    }
}
exports.ObjectDefaultApi = ObjectDefaultApi;
//# sourceMappingURL=ObjectParamAPI.js.map