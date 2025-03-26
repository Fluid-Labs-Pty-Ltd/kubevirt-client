import { HttpInfo } from '../http/http.js';
import { Configuration, PromiseConfigurationOptions } from '../configuration.js';
import { K8sIoApimachineryPkgApisMetaV1APIGroup } from '../models/K8sIoApimachineryPkgApisMetaV1APIGroup.js';
import { K8sIoApimachineryPkgApisMetaV1APIGroupList } from '../models/K8sIoApimachineryPkgApisMetaV1APIGroupList.js';
import { K8sIoApimachineryPkgApisMetaV1APIResourceList } from '../models/K8sIoApimachineryPkgApisMetaV1APIResourceList.js';
import { K8sIoApimachineryPkgApisMetaV1DeleteOptions } from '../models/K8sIoApimachineryPkgApisMetaV1DeleteOptions.js';
import { K8sIoApimachineryPkgApisMetaV1RootPaths } from '../models/K8sIoApimachineryPkgApisMetaV1RootPaths.js';
import { K8sIoApimachineryPkgApisMetaV1Status } from '../models/K8sIoApimachineryPkgApisMetaV1Status.js';
import { K8sIoApimachineryPkgApisMetaV1WatchEvent } from '../models/K8sIoApimachineryPkgApisMetaV1WatchEvent.js';
import { V1AddVolumeOptions } from '../models/V1AddVolumeOptions.js';
import { V1FreezeUnfreezeTimeout } from '../models/V1FreezeUnfreezeTimeout.js';
import { V1KubeVirt } from '../models/V1KubeVirt.js';
import { V1KubeVirtList } from '../models/V1KubeVirtList.js';
import { V1MigrateOptions } from '../models/V1MigrateOptions.js';
import { V1PauseOptions } from '../models/V1PauseOptions.js';
import { V1RemoveVolumeOptions } from '../models/V1RemoveVolumeOptions.js';
import { V1RestartOptions } from '../models/V1RestartOptions.js';
import { V1SEVMeasurementInfo } from '../models/V1SEVMeasurementInfo.js';
import { V1SEVPlatformInfo } from '../models/V1SEVPlatformInfo.js';
import { V1SEVSecretOptions } from '../models/V1SEVSecretOptions.js';
import { V1SEVSessionOptions } from '../models/V1SEVSessionOptions.js';
import { V1StartOptions } from '../models/V1StartOptions.js';
import { V1StopOptions } from '../models/V1StopOptions.js';
import { V1UnpauseOptions } from '../models/V1UnpauseOptions.js';
import { V1VirtualMachine } from '../models/V1VirtualMachine.js';
import { V1VirtualMachineInstance } from '../models/V1VirtualMachineInstance.js';
import { V1VirtualMachineInstanceFileSystemList } from '../models/V1VirtualMachineInstanceFileSystemList.js';
import { V1VirtualMachineInstanceGuestAgentInfo } from '../models/V1VirtualMachineInstanceGuestAgentInfo.js';
import { V1VirtualMachineInstanceGuestOSUserList } from '../models/V1VirtualMachineInstanceGuestOSUserList.js';
import { V1VirtualMachineInstanceList } from '../models/V1VirtualMachineInstanceList.js';
import { V1VirtualMachineInstanceMigration } from '../models/V1VirtualMachineInstanceMigration.js';
import { V1VirtualMachineInstanceMigrationList } from '../models/V1VirtualMachineInstanceMigrationList.js';
import { V1VirtualMachineInstancePreset } from '../models/V1VirtualMachineInstancePreset.js';
import { V1VirtualMachineInstancePresetList } from '../models/V1VirtualMachineInstancePresetList.js';
import { V1VirtualMachineInstanceReplicaSet } from '../models/V1VirtualMachineInstanceReplicaSet.js';
import { V1VirtualMachineInstanceReplicaSetList } from '../models/V1VirtualMachineInstanceReplicaSetList.js';
import { V1VirtualMachineList } from '../models/V1VirtualMachineList.js';
import { V1VirtualMachineMemoryDumpRequest } from '../models/V1VirtualMachineMemoryDumpRequest.js';
import { V1alpha1MigrationPolicy } from '../models/V1alpha1MigrationPolicy.js';
import { V1alpha1MigrationPolicyList } from '../models/V1alpha1MigrationPolicyList.js';
import { V1alpha1VirtualMachineClone } from '../models/V1alpha1VirtualMachineClone.js';
import { V1alpha1VirtualMachineCloneList } from '../models/V1alpha1VirtualMachineCloneList.js';
import { V1alpha1VirtualMachinePool } from '../models/V1alpha1VirtualMachinePool.js';
import { V1alpha1VirtualMachinePoolList } from '../models/V1alpha1VirtualMachinePoolList.js';
import { V1beta1VirtualMachineClusterInstancetype } from '../models/V1beta1VirtualMachineClusterInstancetype.js';
import { V1beta1VirtualMachineClusterInstancetypeList } from '../models/V1beta1VirtualMachineClusterInstancetypeList.js';
import { V1beta1VirtualMachineClusterPreference } from '../models/V1beta1VirtualMachineClusterPreference.js';
import { V1beta1VirtualMachineClusterPreferenceList } from '../models/V1beta1VirtualMachineClusterPreferenceList.js';
import { V1beta1VirtualMachineExport } from '../models/V1beta1VirtualMachineExport.js';
import { V1beta1VirtualMachineExportList } from '../models/V1beta1VirtualMachineExportList.js';
import { V1beta1VirtualMachineInstancetype } from '../models/V1beta1VirtualMachineInstancetype.js';
import { V1beta1VirtualMachineInstancetypeList } from '../models/V1beta1VirtualMachineInstancetypeList.js';
import { V1beta1VirtualMachinePreference } from '../models/V1beta1VirtualMachinePreference.js';
import { V1beta1VirtualMachinePreferenceList } from '../models/V1beta1VirtualMachinePreferenceList.js';
import { V1beta1VirtualMachineRestore } from '../models/V1beta1VirtualMachineRestore.js';
import { V1beta1VirtualMachineRestoreList } from '../models/V1beta1VirtualMachineRestoreList.js';
import { V1beta1VirtualMachineSnapshot } from '../models/V1beta1VirtualMachineSnapshot.js';
import { V1beta1VirtualMachineSnapshotContent } from '../models/V1beta1VirtualMachineSnapshotContent.js';
import { V1beta1VirtualMachineSnapshotContentList } from '../models/V1beta1VirtualMachineSnapshotContentList.js';
import { V1beta1VirtualMachineSnapshotList } from '../models/V1beta1VirtualMachineSnapshotList.js';
import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi.js";
export declare class PromiseDefaultApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor);
    /**
     * Create a MigrationPolicy object.
     * @param body
     */
    createMigrationPolicyWithHttpInfo(body: V1alpha1MigrationPolicy, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1alpha1MigrationPolicy>>;
    /**
     * Create a MigrationPolicy object.
     * @param body
     */
    createMigrationPolicy(body: V1alpha1MigrationPolicy, _options?: PromiseConfigurationOptions): Promise<V1alpha1MigrationPolicy>;
    /**
     * Create a KubeVirt object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedKubeVirtWithHttpInfo(namespace: string, body: V1KubeVirt, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1KubeVirt>>;
    /**
     * Create a KubeVirt object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedKubeVirt(namespace: string, body: V1KubeVirt, _options?: PromiseConfigurationOptions): Promise<V1KubeVirt>;
    /**
     * Create a VirtualMachine object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineWithHttpInfo(namespace: string, body: V1VirtualMachine, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachine>>;
    /**
     * Create a VirtualMachine object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachine(namespace: string, body: V1VirtualMachine, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachine>;
    /**
     * Create a VirtualMachineExport object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineExportWithHttpInfo(namespace: string, body: V1beta1VirtualMachineExport, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineExport>>;
    /**
     * Create a VirtualMachineExport object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineExport(namespace: string, body: V1beta1VirtualMachineExport, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineExport>;
    /**
     * Create a VirtualMachineInstance object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineInstanceWithHttpInfo(namespace: string, body: V1VirtualMachineInstance, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstance>>;
    /**
     * Create a VirtualMachineInstance object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineInstance(namespace: string, body: V1VirtualMachineInstance, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineInstance>;
    /**
     * Create a VirtualMachineInstanceMigration object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineInstanceMigrationWithHttpInfo(namespace: string, body: V1VirtualMachineInstanceMigration, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceMigration>>;
    /**
     * Create a VirtualMachineInstanceMigration object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineInstanceMigration(namespace: string, body: V1VirtualMachineInstanceMigration, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineInstanceMigration>;
    /**
     * Create a VirtualMachineInstancePreset object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineInstancePresetWithHttpInfo(namespace: string, body: V1VirtualMachineInstancePreset, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstancePreset>>;
    /**
     * Create a VirtualMachineInstancePreset object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineInstancePreset(namespace: string, body: V1VirtualMachineInstancePreset, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineInstancePreset>;
    /**
     * Create a VirtualMachineInstanceReplicaSet object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(namespace: string, body: V1VirtualMachineInstanceReplicaSet, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceReplicaSet>>;
    /**
     * Create a VirtualMachineInstanceReplicaSet object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineInstanceReplicaSet(namespace: string, body: V1VirtualMachineInstanceReplicaSet, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineInstanceReplicaSet>;
    /**
     * Create a VirtualMachineInstancetype object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineInstancetypeWithHttpInfo(namespace: string, body: V1beta1VirtualMachineInstancetype, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineInstancetype>>;
    /**
     * Create a VirtualMachineInstancetype object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineInstancetype(namespace: string, body: V1beta1VirtualMachineInstancetype, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineInstancetype>;
    /**
     * Create a VirtualMachinePool object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachinePoolWithHttpInfo(namespace: string, body: V1alpha1VirtualMachinePool, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1alpha1VirtualMachinePool>>;
    /**
     * Create a VirtualMachinePool object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachinePool(namespace: string, body: V1alpha1VirtualMachinePool, _options?: PromiseConfigurationOptions): Promise<V1alpha1VirtualMachinePool>;
    /**
     * Create a VirtualMachinePreference object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachinePreferenceWithHttpInfo(namespace: string, body: V1beta1VirtualMachinePreference, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachinePreference>>;
    /**
     * Create a VirtualMachinePreference object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachinePreference(namespace: string, body: V1beta1VirtualMachinePreference, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachinePreference>;
    /**
     * Create a VirtualMachineRestore object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineRestoreWithHttpInfo(namespace: string, body: V1beta1VirtualMachineRestore, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineRestore>>;
    /**
     * Create a VirtualMachineRestore object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineRestore(namespace: string, body: V1beta1VirtualMachineRestore, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineRestore>;
    /**
     * Create a VirtualMachineSnapshot object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineSnapshotWithHttpInfo(namespace: string, body: V1beta1VirtualMachineSnapshot, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineSnapshot>>;
    /**
     * Create a VirtualMachineSnapshot object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineSnapshot(namespace: string, body: V1beta1VirtualMachineSnapshot, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineSnapshot>;
    /**
     * Create a VirtualMachineSnapshotContent object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineSnapshotContentWithHttpInfo(namespace: string, body: V1beta1VirtualMachineSnapshotContent, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineSnapshotContent>>;
    /**
     * Create a VirtualMachineSnapshotContent object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineSnapshotContent(namespace: string, body: V1beta1VirtualMachineSnapshotContent, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineSnapshotContent>;
    /**
     * Create a VirtualMachineClone object.
     * @param body
     */
    createVirtualMachineCloneWithHttpInfo(body: V1alpha1VirtualMachineClone, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1alpha1VirtualMachineClone>>;
    /**
     * Create a VirtualMachineClone object.
     * @param body
     */
    createVirtualMachineClone(body: V1alpha1VirtualMachineClone, _options?: PromiseConfigurationOptions): Promise<V1alpha1VirtualMachineClone>;
    /**
     * Create a VirtualMachineClusterInstancetype object.
     * @param body
     */
    createVirtualMachineClusterInstancetypeWithHttpInfo(body: V1beta1VirtualMachineClusterInstancetype, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineClusterInstancetype>>;
    /**
     * Create a VirtualMachineClusterInstancetype object.
     * @param body
     */
    createVirtualMachineClusterInstancetype(body: V1beta1VirtualMachineClusterInstancetype, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineClusterInstancetype>;
    /**
     * Create a VirtualMachineClusterPreference object.
     * @param body
     */
    createVirtualMachineClusterPreferenceWithHttpInfo(body: V1beta1VirtualMachineClusterPreference, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineClusterPreference>>;
    /**
     * Create a VirtualMachineClusterPreference object.
     * @param body
     */
    createVirtualMachineClusterPreference(body: V1beta1VirtualMachineClusterPreference, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineClusterPreference>;
    /**
     * Delete a collection of MigrationPolicy objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionMigrationPolicyWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of MigrationPolicy objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionMigrationPolicy(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of KubeVirt objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedKubeVirtWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of KubeVirt objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedKubeVirt(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of VirtualMachine objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachineWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of VirtualMachine objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachine(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of VirtualMachineExport objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachineExportWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of VirtualMachineExport objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachineExport(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of VirtualMachineInstance objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachineInstanceWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of VirtualMachineInstance objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachineInstance(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of VirtualMachineInstanceMigration objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachineInstanceMigrationWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of VirtualMachineInstanceMigration objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachineInstanceMigration(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of VirtualMachineInstancePreset objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachineInstancePresetWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of VirtualMachineInstancePreset objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachineInstancePreset(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of VirtualMachineInstanceReplicaSet objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of VirtualMachineInstanceReplicaSet objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachineInstanceReplicaSet(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of VirtualMachineInstancetype objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachineInstancetypeWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of VirtualMachineInstancetype objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachineInstancetype(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of VirtualMachinePool objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachinePoolWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of VirtualMachinePool objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachinePool(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of VirtualMachinePreference objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachinePreferenceWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of VirtualMachinePreference objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachinePreference(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of VirtualMachineRestore objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachineRestoreWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of VirtualMachineRestore objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachineRestore(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of VirtualMachineSnapshot objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachineSnapshotWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of VirtualMachineSnapshot objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachineSnapshot(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of VirtualMachineSnapshotContent objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachineSnapshotContentWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of VirtualMachineSnapshotContent objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachineSnapshotContent(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of VirtualMachineClone objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionVirtualMachineCloneWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of VirtualMachineClone objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionVirtualMachineClone(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of VirtualMachineClusterInstancetype objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionVirtualMachineClusterInstancetypeWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of VirtualMachineClusterInstancetype objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionVirtualMachineClusterInstancetype(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of VirtualMachineClusterPreference objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionVirtualMachineClusterPreferenceWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of VirtualMachineClusterPreference objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionVirtualMachineClusterPreference(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a MigrationPolicy object.
     * @param name Name of the resource
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteMigrationPolicyWithHttpInfo(name: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a MigrationPolicy object.
     * @param name Name of the resource
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteMigrationPolicy(name: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a KubeVirt object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedKubeVirtWithHttpInfo(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a KubeVirt object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedKubeVirt(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineWithHttpInfo(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachine(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a VirtualMachineExport object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineExportWithHttpInfo(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a VirtualMachineExport object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineExport(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineInstanceWithHttpInfo(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineInstance(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a VirtualMachineInstanceMigration object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineInstanceMigrationWithHttpInfo(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a VirtualMachineInstanceMigration object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineInstanceMigration(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a VirtualMachineInstancePreset object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineInstancePresetWithHttpInfo(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a VirtualMachineInstancePreset object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineInstancePreset(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a VirtualMachineInstanceReplicaSet object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a VirtualMachineInstanceReplicaSet object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineInstanceReplicaSet(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a VirtualMachineInstancetype object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineInstancetypeWithHttpInfo(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a VirtualMachineInstancetype object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineInstancetype(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a VirtualMachinePool object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachinePoolWithHttpInfo(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a VirtualMachinePool object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachinePool(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a VirtualMachinePreference object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachinePreferenceWithHttpInfo(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a VirtualMachinePreference object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachinePreference(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a VirtualMachineRestore object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineRestoreWithHttpInfo(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a VirtualMachineRestore object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineRestore(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a VirtualMachineSnapshot object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineSnapshotWithHttpInfo(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a VirtualMachineSnapshot object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineSnapshot(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a VirtualMachineSnapshotContent object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineSnapshotContentWithHttpInfo(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a VirtualMachineSnapshotContent object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineSnapshotContent(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a VirtualMachineClone object.
     * @param name Name of the resource
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteVirtualMachineCloneWithHttpInfo(name: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a VirtualMachineClone object.
     * @param name Name of the resource
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteVirtualMachineClone(name: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a VirtualMachineClusterInstancetype object.
     * @param name Name of the resource
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteVirtualMachineClusterInstancetypeWithHttpInfo(name: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a VirtualMachineClusterInstancetype object.
     * @param name Name of the resource
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteVirtualMachineClusterInstancetype(name: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a VirtualMachineClusterPreference object.
     * @param name Name of the resource
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteVirtualMachineClusterPreferenceWithHttpInfo(name: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a VirtualMachineClusterPreference object.
     * @param name Name of the resource
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteVirtualMachineClusterPreference(name: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Health endpoint
     */
    func13WithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Health endpoint
     */
    func13(_options?: PromiseConfigurationOptions): Promise<void>;
    /**
     */
    func6WithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     */
    func6(_options?: PromiseConfigurationOptions): Promise<void>;
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupCloneKubevirtIoWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIGroup>>;
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupCloneKubevirtIo(_options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIGroup>;
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupExportKubevirtIoWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIGroup>>;
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupExportKubevirtIo(_options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIGroup>;
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupInstancetypeKubevirtIoWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIGroup>>;
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupInstancetypeKubevirtIo(_options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIGroup>;
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupKubevirtIoWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIGroup>>;
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupKubevirtIo(_options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIGroup>;
    /**
     * Get a KubeVirt API GroupList
     */
    getAPIGroupListWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIGroupList>>;
    /**
     * Get a KubeVirt API GroupList
     */
    getAPIGroupList(_options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIGroupList>;
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupMigrationsKubevirtIoWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIGroup>>;
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupMigrationsKubevirtIo(_options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIGroup>;
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupPoolKubevirtIoWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIGroup>>;
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupPoolKubevirtIo(_options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIGroup>;
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupSnapshotKubevirtIoWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIGroup>>;
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupSnapshotKubevirtIo(_options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIGroup>;
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesCloneKubevirtIoV1alpha1WithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIResourceList>>;
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesCloneKubevirtIoV1alpha1(_options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIResourceList>;
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesExportKubevirtIoV1beta1WithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIResourceList>>;
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesExportKubevirtIoV1beta1(_options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIResourceList>;
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesInstancetypeKubevirtIoV1beta1WithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIResourceList>>;
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesInstancetypeKubevirtIoV1beta1(_options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIResourceList>;
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesKubevirtIoV1WithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIResourceList>>;
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesKubevirtIoV1(_options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIResourceList>;
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesMigrationsKubevirtIoV1alpha1WithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIResourceList>>;
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesMigrationsKubevirtIoV1alpha1(_options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIResourceList>;
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesPoolKubevirtIoV1alpha1WithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIResourceList>>;
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesPoolKubevirtIoV1alpha1(_options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIResourceList>;
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesSnapshotKubevirtIoV1beta1WithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIResourceList>>;
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesSnapshotKubevirtIoV1beta1(_options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIResourceList>;
    /**
     * Get KubeVirt API root paths
     */
    getRootPathsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1RootPaths>>;
    /**
     * Get KubeVirt API root paths
     */
    getRootPaths(_options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1RootPaths>;
    /**
     * dump profiler results endpoint
     */
    handleDumpProfilerWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * dump profiler results endpoint
     */
    handleDumpProfiler(_options?: PromiseConfigurationOptions): Promise<void>;
    /**
     * start profiler endpoint
     */
    handleStartProfilerWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * start profiler endpoint
     */
    handleStartProfiler(_options?: PromiseConfigurationOptions): Promise<void>;
    /**
     * stop profiler endpoint
     */
    handleStopProfilerWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * stop profiler endpoint
     */
    handleStopProfiler(_options?: PromiseConfigurationOptions): Promise<void>;
    /**
     * Get a list of all KubeVirt objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listKubeVirtForAllNamespacesWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1KubeVirtList>>;
    /**
     * Get a list of all KubeVirt objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listKubeVirtForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<V1KubeVirtList>;
    /**
     * Get a list of MigrationPolicy objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listMigrationPolicyWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1alpha1MigrationPolicyList>>;
    /**
     * Get a list of MigrationPolicy objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listMigrationPolicy(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<V1alpha1MigrationPolicyList>;
    /**
     * Get a list of KubeVirt objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedKubeVirtWithHttpInfo(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1KubeVirtList>>;
    /**
     * Get a list of KubeVirt objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedKubeVirt(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<V1KubeVirtList>;
    /**
     * Get a list of VirtualMachine objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachineWithHttpInfo(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineList>>;
    /**
     * Get a list of VirtualMachine objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachine(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineList>;
    /**
     * Get a list of VirtualMachineExport objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachineExportWithHttpInfo(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineExportList>>;
    /**
     * Get a list of VirtualMachineExport objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachineExport(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineExportList>;
    /**
     * Get a list of VirtualMachineInstance objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachineInstanceWithHttpInfo(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceList>>;
    /**
     * Get a list of VirtualMachineInstance objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachineInstance(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineInstanceList>;
    /**
     * Get a list of VirtualMachineInstanceMigration objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachineInstanceMigrationWithHttpInfo(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceMigrationList>>;
    /**
     * Get a list of VirtualMachineInstanceMigration objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachineInstanceMigration(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineInstanceMigrationList>;
    /**
     * Get a list of VirtualMachineInstancePreset objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachineInstancePresetWithHttpInfo(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstancePresetList>>;
    /**
     * Get a list of VirtualMachineInstancePreset objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachineInstancePreset(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineInstancePresetList>;
    /**
     * Get a list of VirtualMachineInstanceReplicaSet objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceReplicaSetList>>;
    /**
     * Get a list of VirtualMachineInstanceReplicaSet objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachineInstanceReplicaSet(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineInstanceReplicaSetList>;
    /**
     * Get a list of VirtualMachineInstancetype objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachineInstancetypeWithHttpInfo(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineInstancetypeList>>;
    /**
     * Get a list of VirtualMachineInstancetype objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachineInstancetype(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineInstancetypeList>;
    /**
     * Get a list of VirtualMachinePool objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachinePoolWithHttpInfo(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1alpha1VirtualMachinePoolList>>;
    /**
     * Get a list of VirtualMachinePool objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachinePool(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<V1alpha1VirtualMachinePoolList>;
    /**
     * Get a list of VirtualMachinePreference objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachinePreferenceWithHttpInfo(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachinePreferenceList>>;
    /**
     * Get a list of VirtualMachinePreference objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachinePreference(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachinePreferenceList>;
    /**
     * Get a list of VirtualMachineRestore objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachineRestoreWithHttpInfo(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineRestoreList>>;
    /**
     * Get a list of VirtualMachineRestore objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachineRestore(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineRestoreList>;
    /**
     * Get a list of VirtualMachineSnapshot objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachineSnapshotWithHttpInfo(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineSnapshotList>>;
    /**
     * Get a list of VirtualMachineSnapshot objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachineSnapshot(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineSnapshotList>;
    /**
     * Get a list of VirtualMachineSnapshotContent objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachineSnapshotContentWithHttpInfo(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineSnapshotContentList>>;
    /**
     * Get a list of VirtualMachineSnapshotContent objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachineSnapshotContent(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineSnapshotContentList>;
    /**
     * Get a list of VirtualMachineClone objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineCloneWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1alpha1VirtualMachineCloneList>>;
    /**
     * Get a list of VirtualMachineClone objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineClone(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<V1alpha1VirtualMachineCloneList>;
    /**
     * Get a list of VirtualMachineClusterInstancetype objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineClusterInstancetypeWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineClusterInstancetypeList>>;
    /**
     * Get a list of VirtualMachineClusterInstancetype objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineClusterInstancetype(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineClusterInstancetypeList>;
    /**
     * Get a list of VirtualMachineClusterPreference objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineClusterPreferenceWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineClusterPreferenceList>>;
    /**
     * Get a list of VirtualMachineClusterPreference objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineClusterPreference(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineClusterPreferenceList>;
    /**
     * Get a list of all VirtualMachineExport objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineExportForAllNamespacesWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineExportList>>;
    /**
     * Get a list of all VirtualMachineExport objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineExportForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineExportList>;
    /**
     * Get a list of all VirtualMachine objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineForAllNamespacesWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineList>>;
    /**
     * Get a list of all VirtualMachine objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineList>;
    /**
     * Get a list of all VirtualMachineInstance objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineInstanceForAllNamespacesWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceList>>;
    /**
     * Get a list of all VirtualMachineInstance objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineInstanceForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineInstanceList>;
    /**
     * Get a list of all VirtualMachineInstanceMigration objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineInstanceMigrationForAllNamespacesWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceMigrationList>>;
    /**
     * Get a list of all VirtualMachineInstanceMigration objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineInstanceMigrationForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineInstanceMigrationList>;
    /**
     * Get a list of all VirtualMachineInstancePreset objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineInstancePresetForAllNamespacesWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstancePresetList>>;
    /**
     * Get a list of all VirtualMachineInstancePreset objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineInstancePresetForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineInstancePresetList>;
    /**
     * Get a list of all VirtualMachineInstanceReplicaSet objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineInstanceReplicaSetForAllNamespacesWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceReplicaSetList>>;
    /**
     * Get a list of all VirtualMachineInstanceReplicaSet objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineInstanceReplicaSetForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineInstanceReplicaSetList>;
    /**
     * Get a list of all VirtualMachineInstancetype objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineInstancetypeForAllNamespacesWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineInstancetypeList>>;
    /**
     * Get a list of all VirtualMachineInstancetype objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineInstancetypeForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineInstancetypeList>;
    /**
     * Get a list of all VirtualMachinePool objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachinePoolForAllNamespacesWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1alpha1VirtualMachinePoolList>>;
    /**
     * Get a list of all VirtualMachinePool objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachinePoolForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<V1alpha1VirtualMachinePoolList>;
    /**
     * Get a list of all VirtualMachinePreference objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachinePreferenceForAllNamespacesWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachinePreferenceList>>;
    /**
     * Get a list of all VirtualMachinePreference objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachinePreferenceForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachinePreferenceList>;
    /**
     * Get a list of all VirtualMachineRestore objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineRestoreForAllNamespacesWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineRestoreList>>;
    /**
     * Get a list of all VirtualMachineRestore objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineRestoreForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineRestoreList>;
    /**
     * Get a list of all VirtualMachineSnapshotContent objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineSnapshotContentForAllNamespacesWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineSnapshotContentList>>;
    /**
     * Get a list of all VirtualMachineSnapshotContent objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineSnapshotContentForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineSnapshotContentList>;
    /**
     * Get a list of all VirtualMachineSnapshot objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineSnapshotForAllNamespacesWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineSnapshotList>>;
    /**
     * Get a list of all VirtualMachineSnapshot objects.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineSnapshotForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineSnapshotList>;
    /**
     * Patch a MigrationPolicy object.
     * @param name Name of the resource
     * @param body
     */
    patchMigrationPolicyWithHttpInfo(name: string, body: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1alpha1MigrationPolicy>>;
    /**
     * Patch a MigrationPolicy object.
     * @param name Name of the resource
     * @param body
     */
    patchMigrationPolicy(name: string, body: any, _options?: PromiseConfigurationOptions): Promise<V1alpha1MigrationPolicy>;
    /**
     * Patch a KubeVirt object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedKubeVirtWithHttpInfo(name: string, namespace: string, body: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1KubeVirt>>;
    /**
     * Patch a KubeVirt object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedKubeVirt(name: string, namespace: string, body: any, _options?: PromiseConfigurationOptions): Promise<V1KubeVirt>;
    /**
     * Patch a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineWithHttpInfo(name: string, namespace: string, body: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachine>>;
    /**
     * Patch a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachine(name: string, namespace: string, body: any, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachine>;
    /**
     * Patch a VirtualMachineExport object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineExportWithHttpInfo(name: string, namespace: string, body: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineExport>>;
    /**
     * Patch a VirtualMachineExport object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineExport(name: string, namespace: string, body: any, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineExport>;
    /**
     * Patch a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineInstanceWithHttpInfo(name: string, namespace: string, body: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstance>>;
    /**
     * Patch a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineInstance(name: string, namespace: string, body: any, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineInstance>;
    /**
     * Patch a VirtualMachineInstanceMigration object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineInstanceMigrationWithHttpInfo(name: string, namespace: string, body: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceMigration>>;
    /**
     * Patch a VirtualMachineInstanceMigration object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineInstanceMigration(name: string, namespace: string, body: any, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineInstanceMigration>;
    /**
     * Patch a VirtualMachineInstancePreset object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineInstancePresetWithHttpInfo(name: string, namespace: string, body: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstancePreset>>;
    /**
     * Patch a VirtualMachineInstancePreset object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineInstancePreset(name: string, namespace: string, body: any, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineInstancePreset>;
    /**
     * Patch a VirtualMachineInstanceReplicaSet object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(name: string, namespace: string, body: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceReplicaSet>>;
    /**
     * Patch a VirtualMachineInstanceReplicaSet object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineInstanceReplicaSet(name: string, namespace: string, body: any, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineInstanceReplicaSet>;
    /**
     * Patch a VirtualMachineInstancetype object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineInstancetypeWithHttpInfo(name: string, namespace: string, body: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineInstancetype>>;
    /**
     * Patch a VirtualMachineInstancetype object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineInstancetype(name: string, namespace: string, body: any, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineInstancetype>;
    /**
     * Patch a VirtualMachinePool object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachinePoolWithHttpInfo(name: string, namespace: string, body: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1alpha1VirtualMachinePool>>;
    /**
     * Patch a VirtualMachinePool object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachinePool(name: string, namespace: string, body: any, _options?: PromiseConfigurationOptions): Promise<V1alpha1VirtualMachinePool>;
    /**
     * Patch a VirtualMachinePreference object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachinePreferenceWithHttpInfo(name: string, namespace: string, body: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachinePreference>>;
    /**
     * Patch a VirtualMachinePreference object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachinePreference(name: string, namespace: string, body: any, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachinePreference>;
    /**
     * Patch a VirtualMachineRestore object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineRestoreWithHttpInfo(name: string, namespace: string, body: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineRestore>>;
    /**
     * Patch a VirtualMachineRestore object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineRestore(name: string, namespace: string, body: any, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineRestore>;
    /**
     * Patch a VirtualMachineSnapshot object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineSnapshotWithHttpInfo(name: string, namespace: string, body: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineSnapshot>>;
    /**
     * Patch a VirtualMachineSnapshot object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineSnapshot(name: string, namespace: string, body: any, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineSnapshot>;
    /**
     * Patch a VirtualMachineSnapshotContent object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineSnapshotContentWithHttpInfo(name: string, namespace: string, body: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineSnapshotContent>>;
    /**
     * Patch a VirtualMachineSnapshotContent object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineSnapshotContent(name: string, namespace: string, body: any, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineSnapshotContent>;
    /**
     * Patch a VirtualMachineClone object.
     * @param name Name of the resource
     * @param body
     */
    patchVirtualMachineCloneWithHttpInfo(name: string, body: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1alpha1VirtualMachineClone>>;
    /**
     * Patch a VirtualMachineClone object.
     * @param name Name of the resource
     * @param body
     */
    patchVirtualMachineClone(name: string, body: any, _options?: PromiseConfigurationOptions): Promise<V1alpha1VirtualMachineClone>;
    /**
     * Patch a VirtualMachineClusterInstancetype object.
     * @param name Name of the resource
     * @param body
     */
    patchVirtualMachineClusterInstancetypeWithHttpInfo(name: string, body: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineClusterInstancetype>>;
    /**
     * Patch a VirtualMachineClusterInstancetype object.
     * @param name Name of the resource
     * @param body
     */
    patchVirtualMachineClusterInstancetype(name: string, body: any, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineClusterInstancetype>;
    /**
     * Patch a VirtualMachineClusterPreference object.
     * @param name Name of the resource
     * @param body
     */
    patchVirtualMachineClusterPreferenceWithHttpInfo(name: string, body: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineClusterPreference>>;
    /**
     * Patch a VirtualMachineClusterPreference object.
     * @param name Name of the resource
     * @param body
     */
    patchVirtualMachineClusterPreference(name: string, body: any, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineClusterPreference>;
    /**
     * Get a MigrationPolicy object.
     * @param name Name of the resource
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readMigrationPolicyWithHttpInfo(name: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1alpha1MigrationPolicy>>;
    /**
     * Get a MigrationPolicy object.
     * @param name Name of the resource
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readMigrationPolicy(name: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<V1alpha1MigrationPolicy>;
    /**
     * Get a KubeVirt object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedKubeVirtWithHttpInfo(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1KubeVirt>>;
    /**
     * Get a KubeVirt object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedKubeVirt(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<V1KubeVirt>;
    /**
     * Get a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineWithHttpInfo(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachine>>;
    /**
     * Get a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachine(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachine>;
    /**
     * Get a VirtualMachineExport object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineExportWithHttpInfo(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineExport>>;
    /**
     * Get a VirtualMachineExport object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineExport(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineExport>;
    /**
     * Get a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineInstanceWithHttpInfo(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstance>>;
    /**
     * Get a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineInstance(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineInstance>;
    /**
     * Get a VirtualMachineInstanceMigration object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineInstanceMigrationWithHttpInfo(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceMigration>>;
    /**
     * Get a VirtualMachineInstanceMigration object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineInstanceMigration(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineInstanceMigration>;
    /**
     * Get a VirtualMachineInstancePreset object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineInstancePresetWithHttpInfo(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstancePreset>>;
    /**
     * Get a VirtualMachineInstancePreset object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineInstancePreset(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineInstancePreset>;
    /**
     * Get a VirtualMachineInstanceReplicaSet object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceReplicaSet>>;
    /**
     * Get a VirtualMachineInstanceReplicaSet object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineInstanceReplicaSet(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineInstanceReplicaSet>;
    /**
     * Get a VirtualMachineInstancetype object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineInstancetypeWithHttpInfo(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineInstancetype>>;
    /**
     * Get a VirtualMachineInstancetype object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineInstancetype(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineInstancetype>;
    /**
     * Get a VirtualMachinePool object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachinePoolWithHttpInfo(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1alpha1VirtualMachinePool>>;
    /**
     * Get a VirtualMachinePool object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachinePool(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<V1alpha1VirtualMachinePool>;
    /**
     * Get a VirtualMachinePreference object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachinePreferenceWithHttpInfo(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachinePreference>>;
    /**
     * Get a VirtualMachinePreference object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachinePreference(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachinePreference>;
    /**
     * Get a VirtualMachineRestore object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineRestoreWithHttpInfo(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineRestore>>;
    /**
     * Get a VirtualMachineRestore object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineRestore(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineRestore>;
    /**
     * Get a VirtualMachineSnapshot object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineSnapshotWithHttpInfo(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineSnapshot>>;
    /**
     * Get a VirtualMachineSnapshot object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineSnapshot(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineSnapshot>;
    /**
     * Get a VirtualMachineSnapshotContent object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineSnapshotContentWithHttpInfo(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineSnapshotContent>>;
    /**
     * Get a VirtualMachineSnapshotContent object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineSnapshotContent(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineSnapshotContent>;
    /**
     * Get a VirtualMachineClone object.
     * @param name Name of the resource
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readVirtualMachineCloneWithHttpInfo(name: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1alpha1VirtualMachineClone>>;
    /**
     * Get a VirtualMachineClone object.
     * @param name Name of the resource
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readVirtualMachineClone(name: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<V1alpha1VirtualMachineClone>;
    /**
     * Get a VirtualMachineClusterInstancetype object.
     * @param name Name of the resource
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readVirtualMachineClusterInstancetypeWithHttpInfo(name: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineClusterInstancetype>>;
    /**
     * Get a VirtualMachineClusterInstancetype object.
     * @param name Name of the resource
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readVirtualMachineClusterInstancetype(name: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineClusterInstancetype>;
    /**
     * Get a VirtualMachineClusterPreference object.
     * @param name Name of the resource
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readVirtualMachineClusterPreferenceWithHttpInfo(name: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineClusterPreference>>;
    /**
     * Get a VirtualMachineClusterPreference object.
     * @param name Name of the resource
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readVirtualMachineClusterPreference(name: string, exact?: boolean, _export?: boolean, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineClusterPreference>;
    /**
     * Update a MigrationPolicy object.
     * @param name Name of the resource
     * @param body
     */
    replaceMigrationPolicyWithHttpInfo(name: string, body: V1alpha1MigrationPolicy, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1alpha1MigrationPolicy>>;
    /**
     * Update a MigrationPolicy object.
     * @param name Name of the resource
     * @param body
     */
    replaceMigrationPolicy(name: string, body: V1alpha1MigrationPolicy, _options?: PromiseConfigurationOptions): Promise<V1alpha1MigrationPolicy>;
    /**
     * Update a KubeVirt object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedKubeVirtWithHttpInfo(name: string, namespace: string, body: V1KubeVirt, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1KubeVirt>>;
    /**
     * Update a KubeVirt object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedKubeVirt(name: string, namespace: string, body: V1KubeVirt, _options?: PromiseConfigurationOptions): Promise<V1KubeVirt>;
    /**
     * Update a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineWithHttpInfo(name: string, namespace: string, body: V1VirtualMachine, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachine>>;
    /**
     * Update a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachine(name: string, namespace: string, body: V1VirtualMachine, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachine>;
    /**
     * Update a VirtualMachineExport object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineExportWithHttpInfo(name: string, namespace: string, body: V1beta1VirtualMachineExport, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineExport>>;
    /**
     * Update a VirtualMachineExport object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineExport(name: string, namespace: string, body: V1beta1VirtualMachineExport, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineExport>;
    /**
     * Update a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineInstanceWithHttpInfo(name: string, namespace: string, body: V1VirtualMachineInstance, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstance>>;
    /**
     * Update a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineInstance(name: string, namespace: string, body: V1VirtualMachineInstance, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineInstance>;
    /**
     * Update a VirtualMachineInstanceMigration object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineInstanceMigrationWithHttpInfo(name: string, namespace: string, body: V1VirtualMachineInstanceMigration, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceMigration>>;
    /**
     * Update a VirtualMachineInstanceMigration object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineInstanceMigration(name: string, namespace: string, body: V1VirtualMachineInstanceMigration, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineInstanceMigration>;
    /**
     * Update a VirtualMachineInstancePreset object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineInstancePresetWithHttpInfo(name: string, namespace: string, body: V1VirtualMachineInstancePreset, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstancePreset>>;
    /**
     * Update a VirtualMachineInstancePreset object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineInstancePreset(name: string, namespace: string, body: V1VirtualMachineInstancePreset, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineInstancePreset>;
    /**
     * Update a VirtualMachineInstanceReplicaSet object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(name: string, namespace: string, body: V1VirtualMachineInstanceReplicaSet, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceReplicaSet>>;
    /**
     * Update a VirtualMachineInstanceReplicaSet object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineInstanceReplicaSet(name: string, namespace: string, body: V1VirtualMachineInstanceReplicaSet, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineInstanceReplicaSet>;
    /**
     * Update a VirtualMachineInstancetype object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineInstancetypeWithHttpInfo(name: string, namespace: string, body: V1beta1VirtualMachineInstancetype, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineInstancetype>>;
    /**
     * Update a VirtualMachineInstancetype object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineInstancetype(name: string, namespace: string, body: V1beta1VirtualMachineInstancetype, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineInstancetype>;
    /**
     * Update a VirtualMachinePool object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachinePoolWithHttpInfo(name: string, namespace: string, body: V1alpha1VirtualMachinePool, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1alpha1VirtualMachinePool>>;
    /**
     * Update a VirtualMachinePool object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachinePool(name: string, namespace: string, body: V1alpha1VirtualMachinePool, _options?: PromiseConfigurationOptions): Promise<V1alpha1VirtualMachinePool>;
    /**
     * Update a VirtualMachinePreference object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachinePreferenceWithHttpInfo(name: string, namespace: string, body: V1beta1VirtualMachinePreference, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachinePreference>>;
    /**
     * Update a VirtualMachinePreference object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachinePreference(name: string, namespace: string, body: V1beta1VirtualMachinePreference, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachinePreference>;
    /**
     * Update a VirtualMachineRestore object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineRestoreWithHttpInfo(name: string, namespace: string, body: V1beta1VirtualMachineRestore, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineRestore>>;
    /**
     * Update a VirtualMachineRestore object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineRestore(name: string, namespace: string, body: V1beta1VirtualMachineRestore, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineRestore>;
    /**
     * Update a VirtualMachineSnapshot object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineSnapshotWithHttpInfo(name: string, namespace: string, body: V1beta1VirtualMachineSnapshot, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineSnapshot>>;
    /**
     * Update a VirtualMachineSnapshot object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineSnapshot(name: string, namespace: string, body: V1beta1VirtualMachineSnapshot, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineSnapshot>;
    /**
     * Update a VirtualMachineSnapshotContent object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineSnapshotContentWithHttpInfo(name: string, namespace: string, body: V1beta1VirtualMachineSnapshotContent, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineSnapshotContent>>;
    /**
     * Update a VirtualMachineSnapshotContent object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineSnapshotContent(name: string, namespace: string, body: V1beta1VirtualMachineSnapshotContent, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineSnapshotContent>;
    /**
     * Update a VirtualMachineClone object.
     * @param name Name of the resource
     * @param body
     */
    replaceVirtualMachineCloneWithHttpInfo(name: string, body: V1alpha1VirtualMachineClone, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1alpha1VirtualMachineClone>>;
    /**
     * Update a VirtualMachineClone object.
     * @param name Name of the resource
     * @param body
     */
    replaceVirtualMachineClone(name: string, body: V1alpha1VirtualMachineClone, _options?: PromiseConfigurationOptions): Promise<V1alpha1VirtualMachineClone>;
    /**
     * Update a VirtualMachineClusterInstancetype object.
     * @param name Name of the resource
     * @param body
     */
    replaceVirtualMachineClusterInstancetypeWithHttpInfo(name: string, body: V1beta1VirtualMachineClusterInstancetype, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineClusterInstancetype>>;
    /**
     * Update a VirtualMachineClusterInstancetype object.
     * @param name Name of the resource
     * @param body
     */
    replaceVirtualMachineClusterInstancetype(name: string, body: V1beta1VirtualMachineClusterInstancetype, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineClusterInstancetype>;
    /**
     * Update a VirtualMachineClusterPreference object.
     * @param name Name of the resource
     * @param body
     */
    replaceVirtualMachineClusterPreferenceWithHttpInfo(name: string, body: V1beta1VirtualMachineClusterPreference, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineClusterPreference>>;
    /**
     * Update a VirtualMachineClusterPreference object.
     * @param name Name of the resource
     * @param body
     */
    replaceVirtualMachineClusterPreference(name: string, body: V1beta1VirtualMachineClusterPreference, _options?: PromiseConfigurationOptions): Promise<V1beta1VirtualMachineClusterPreference>;
    /**
     * Health endpoint
     */
    v1CheckHealthWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Health endpoint
     */
    v1CheckHealth(_options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Open a websocket connection to a serial console on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1ConsoleWithHttpInfo(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection to a serial console on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1Console(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<void>;
    /**
     * Expands instancetype and preference into the passed VirtualMachine object.
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1ExpandSpecWithHttpInfo(namespace: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Expands instancetype and preference into the passed VirtualMachine object.
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1ExpandSpec(namespace: string, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Get list of active filesystems on guest machine via guest agent
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1FilesystemlistWithHttpInfo(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceFileSystemList>>;
    /**
     * Get list of active filesystems on guest machine via guest agent
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1Filesystemlist(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineInstanceFileSystemList>;
    /**
     * Freeze a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1FreezeWithHttpInfo(name: string, namespace: string, body: V1FreezeUnfreezeTimeout, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Freeze a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1Freeze(name: string, namespace: string, body: V1FreezeUnfreezeTimeout, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Get a KubeVirt API Group
     */
    v1GetSubAPIGroupWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIGroup>>;
    /**
     * Get a KubeVirt API Group
     */
    v1GetSubAPIGroup(_options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIGroup>;
    /**
     */
    v1GuestfsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     */
    v1Guestfs(_options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Get guest agent os information
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1GuestosinfoWithHttpInfo(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceGuestAgentInfo>>;
    /**
     * Get guest agent os information
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1Guestosinfo(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineInstanceGuestAgentInfo>;
    /**
     * Dumps a VirtualMachineInstance memory.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1MemoryDumpWithHttpInfo(name: string, namespace: string, body: V1VirtualMachineMemoryDumpRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Dumps a VirtualMachineInstance memory.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1MemoryDump(name: string, namespace: string, body: V1VirtualMachineMemoryDumpRequest, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Migrate a running VirtualMachine to another node.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1MigrateWithHttpInfo(name: string, namespace: string, body: V1MigrateOptions, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Migrate a running VirtualMachine to another node.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1Migrate(name: string, namespace: string, body: V1MigrateOptions, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Pause a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1PauseWithHttpInfo(name: string, namespace: string, body: V1PauseOptions, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Pause a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1Pause(name: string, namespace: string, body: V1PauseOptions, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Remove memory dump association.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1RemoveMemoryDumpWithHttpInfo(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Remove memory dump association.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1RemoveMemoryDump(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Restart a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [body]
     */
    v1RestartWithHttpInfo(name: string, namespace: string, body?: V1RestartOptions, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Restart a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [body]
     */
    v1Restart(name: string, namespace: string, body?: V1RestartOptions, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Fetch SEV certificate chain from the node where Virtual Machine is scheduled
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1SEVFetchCertChainWithHttpInfo(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1SEVPlatformInfo>>;
    /**
     * Fetch SEV certificate chain from the node where Virtual Machine is scheduled
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1SEVFetchCertChain(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<V1SEVPlatformInfo>;
    /**
     * Inject SEV launch secret into a Virtual Machine
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1SEVInjectLaunchSecretWithHttpInfo(name: string, namespace: string, body: V1SEVSecretOptions, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Inject SEV launch secret into a Virtual Machine
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1SEVInjectLaunchSecret(name: string, namespace: string, body: V1SEVSecretOptions, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Query SEV launch measurement from a Virtual Machine
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1SEVQueryLaunchMeasurementWithHttpInfo(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1SEVMeasurementInfo>>;
    /**
     * Query SEV launch measurement from a Virtual Machine
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1SEVQueryLaunchMeasurement(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<V1SEVMeasurementInfo>;
    /**
     * Setup SEV session parameters for a Virtual Machine
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1SEVSetupSessionWithHttpInfo(name: string, namespace: string, body: V1SEVSessionOptions, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Setup SEV session parameters for a Virtual Machine
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1SEVSetupSession(name: string, namespace: string, body: V1SEVSessionOptions, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Soft reboot a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1SoftRebootWithHttpInfo(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Soft reboot a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1SoftReboot(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Start a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1StartWithHttpInfo(name: string, namespace: string, body: V1StartOptions, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Start a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1Start(name: string, namespace: string, body: V1StartOptions, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Stop a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [body]
     */
    v1StopWithHttpInfo(name: string, namespace: string, body?: V1StopOptions, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Stop a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [body]
     */
    v1Stop(name: string, namespace: string, body?: V1StopOptions, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Unfreeze a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1UnfreezeWithHttpInfo(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Unfreeze a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1Unfreeze(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Unpause a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1UnpauseWithHttpInfo(name: string, namespace: string, body: V1UnpauseOptions, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Unpause a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1Unpause(name: string, namespace: string, body: V1UnpauseOptions, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Get list of active users via guest agent
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1UserlistWithHttpInfo(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceGuestOSUserList>>;
    /**
     * Get list of active users via guest agent
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1Userlist(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineInstanceGuestOSUserList>;
    /**
     * Open a websocket connection to connect to VNC on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1VNCWithHttpInfo(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection to connect to VNC on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1VNC(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<void>;
    /**
     * Get a PNG VNC screenshot of the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [moveCursor] Move the cursor on the VNC display to wake up the screen
     */
    v1VNCScreenshotWithHttpInfo(name: string, namespace: string, moveCursor?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Get a PNG VNC screenshot of the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [moveCursor] Move the cursor on the VNC display to wake up the screen
     */
    v1VNCScreenshot(name: string, namespace: string, moveCursor?: boolean, _options?: PromiseConfigurationOptions): Promise<void>;
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port via VSOCK.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The port which the VSOCK application listens to.
     * @param [tls] Weather to request a TLS encrypted session from the VSOCK application.
     */
    v1VSOCKWithHttpInfo(name: string, namespace: string, port: number, tls?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port via VSOCK.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The port which the VSOCK application listens to.
     * @param [tls] Weather to request a TLS encrypted session from the VSOCK application.
     */
    v1VSOCK(name: string, namespace: string, port: number, tls?: boolean, _options?: PromiseConfigurationOptions): Promise<void>;
    /**
     */
    v1VersionWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     */
    v1Version(_options?: PromiseConfigurationOptions): Promise<void>;
    /**
     * Health endpoint
     */
    v1alpha3CheckHealthWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Health endpoint
     */
    v1alpha3CheckHealth(_options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Open a websocket connection to a serial console on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3ConsoleWithHttpInfo(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection to a serial console on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3Console(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<void>;
    /**
     * Expands instancetype and preference into the passed VirtualMachine object.
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3ExpandSpecWithHttpInfo(namespace: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Expands instancetype and preference into the passed VirtualMachine object.
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3ExpandSpec(namespace: string, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Get list of active filesystems on guest machine via guest agent
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3FilesystemlistWithHttpInfo(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceFileSystemList>>;
    /**
     * Get list of active filesystems on guest machine via guest agent
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3Filesystemlist(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineInstanceFileSystemList>;
    /**
     * Freeze a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3FreezeWithHttpInfo(name: string, namespace: string, body: V1FreezeUnfreezeTimeout, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Freeze a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3Freeze(name: string, namespace: string, body: V1FreezeUnfreezeTimeout, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     */
    v1alpha3GuestfsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     */
    v1alpha3Guestfs(_options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Get guest agent os information
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3GuestosinfoWithHttpInfo(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceGuestAgentInfo>>;
    /**
     * Get guest agent os information
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3Guestosinfo(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineInstanceGuestAgentInfo>;
    /**
     * Dumps a VirtualMachineInstance memory.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3MemoryDumpWithHttpInfo(name: string, namespace: string, body: V1VirtualMachineMemoryDumpRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Dumps a VirtualMachineInstance memory.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3MemoryDump(name: string, namespace: string, body: V1VirtualMachineMemoryDumpRequest, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Migrate a running VirtualMachine to another node.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3MigrateWithHttpInfo(name: string, namespace: string, body: V1MigrateOptions, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Migrate a running VirtualMachine to another node.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3Migrate(name: string, namespace: string, body: V1MigrateOptions, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Pause a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3PauseWithHttpInfo(name: string, namespace: string, body: V1PauseOptions, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Pause a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3Pause(name: string, namespace: string, body: V1PauseOptions, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Remove memory dump association.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3RemoveMemoryDumpWithHttpInfo(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Remove memory dump association.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3RemoveMemoryDump(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Restart a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [body]
     */
    v1alpha3RestartWithHttpInfo(name: string, namespace: string, body?: V1RestartOptions, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Restart a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [body]
     */
    v1alpha3Restart(name: string, namespace: string, body?: V1RestartOptions, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Fetch SEV certificate chain from the node where Virtual Machine is scheduled
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3SEVFetchCertChainWithHttpInfo(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1SEVPlatformInfo>>;
    /**
     * Fetch SEV certificate chain from the node where Virtual Machine is scheduled
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3SEVFetchCertChain(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<V1SEVPlatformInfo>;
    /**
     * Inject SEV launch secret into a Virtual Machine
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3SEVInjectLaunchSecretWithHttpInfo(name: string, namespace: string, body: V1SEVSecretOptions, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Inject SEV launch secret into a Virtual Machine
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3SEVInjectLaunchSecret(name: string, namespace: string, body: V1SEVSecretOptions, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Query SEV launch measurement from a Virtual Machine
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3SEVQueryLaunchMeasurementWithHttpInfo(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1SEVMeasurementInfo>>;
    /**
     * Query SEV launch measurement from a Virtual Machine
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3SEVQueryLaunchMeasurement(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<V1SEVMeasurementInfo>;
    /**
     * Setup SEV session parameters for a Virtual Machine
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3SEVSetupSessionWithHttpInfo(name: string, namespace: string, body: V1SEVSessionOptions, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Setup SEV session parameters for a Virtual Machine
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3SEVSetupSession(name: string, namespace: string, body: V1SEVSessionOptions, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Soft reboot a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3SoftRebootWithHttpInfo(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Soft reboot a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3SoftReboot(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Start a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3StartWithHttpInfo(name: string, namespace: string, body: V1StartOptions, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Start a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3Start(name: string, namespace: string, body: V1StartOptions, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Stop a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [body]
     */
    v1alpha3StopWithHttpInfo(name: string, namespace: string, body?: V1StopOptions, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Stop a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [body]
     */
    v1alpha3Stop(name: string, namespace: string, body?: V1StopOptions, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Unfreeze a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3UnfreezeWithHttpInfo(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Unfreeze a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3Unfreeze(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Unpause a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3UnpauseWithHttpInfo(name: string, namespace: string, body: V1UnpauseOptions, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Unpause a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3Unpause(name: string, namespace: string, body: V1UnpauseOptions, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Get list of active users via guest agent
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3UserlistWithHttpInfo(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceGuestOSUserList>>;
    /**
     * Get list of active users via guest agent
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3Userlist(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<V1VirtualMachineInstanceGuestOSUserList>;
    /**
     * Open a websocket connection to connect to VNC on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3VNCWithHttpInfo(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection to connect to VNC on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3VNC(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<void>;
    /**
     * Get a PNG VNC screenshot of the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [moveCursor] Move the cursor on the VNC display to wake up the screen
     */
    v1alpha3VNCScreenshotWithHttpInfo(name: string, namespace: string, moveCursor?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Get a PNG VNC screenshot of the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [moveCursor] Move the cursor on the VNC display to wake up the screen
     */
    v1alpha3VNCScreenshot(name: string, namespace: string, moveCursor?: boolean, _options?: PromiseConfigurationOptions): Promise<void>;
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port via VSOCK.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The port which the VSOCK application listens to.
     * @param [tls] Weather to request a TLS encrypted session from the VSOCK application.
     */
    v1alpha3VSOCKWithHttpInfo(name: string, namespace: string, port: number, tls?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port via VSOCK.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The port which the VSOCK application listens to.
     * @param [tls] Weather to request a TLS encrypted session from the VSOCK application.
     */
    v1alpha3VSOCK(name: string, namespace: string, port: number, tls?: boolean, _options?: PromiseConfigurationOptions): Promise<void>;
    /**
     */
    v1alpha3VersionWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     */
    v1alpha3Version(_options?: PromiseConfigurationOptions): Promise<void>;
    /**
     */
    v1alpha3dumpClusterProfilerWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     */
    v1alpha3dumpClusterProfiler(_options?: PromiseConfigurationOptions): Promise<void>;
    /**
     * Get a KubeVirt API resources
     */
    v1alpha3getAPISubResourcesWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIResourceList>>;
    /**
     * Get a KubeVirt API resources
     */
    v1alpha3getAPISubResources(_options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIResourceList>;
    /**
     */
    v1alpha3startClusterProfilerWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     */
    v1alpha3startClusterProfiler(_options?: PromiseConfigurationOptions): Promise<void>;
    /**
     */
    v1alpha3stopClusterProfilerWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     */
    v1alpha3stopClusterProfiler(_options?: PromiseConfigurationOptions): Promise<void>;
    /**
     * Open a websocket connection to connect to USB device on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3usbredirWithHttpInfo(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection to connect to USB device on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3usbredir(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<void>;
    /**
     * Add a volume and disk to a running Virtual Machine.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3vmAddvolumeWithHttpInfo(name: string, namespace: string, body: V1AddVolumeOptions, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Add a volume and disk to a running Virtual Machine.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3vmAddvolume(name: string, namespace: string, body: V1AddVolumeOptions, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Get VirtualMachine object with expanded instancetype and preference.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3vmExpandSpecWithHttpInfo(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Get VirtualMachine object with expanded instancetype and preference.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3vmExpandSpec(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Open a websocket connection forwarding traffic to the running VMI for the specified VirtualMachine and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     */
    v1alpha3vmPortForwardWithHttpInfo(name: string, namespace: string, port: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection forwarding traffic to the running VMI for the specified VirtualMachine and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     */
    v1alpha3vmPortForward(name: string, namespace: string, port: string, _options?: PromiseConfigurationOptions): Promise<void>;
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachine and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     * @param protocol The protocol for portforward on the VirtualMachineInstance.
     */
    v1alpha3vmPortForwardWithProtocolWithHttpInfo(name: string, namespace: string, port: string, protocol: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachine and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     * @param protocol The protocol for portforward on the VirtualMachineInstance.
     */
    v1alpha3vmPortForwardWithProtocol(name: string, namespace: string, port: string, protocol: string, _options?: PromiseConfigurationOptions): Promise<void>;
    /**
     * Removes a volume and disk from a running Virtual Machine.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3vmRemovevolumeWithHttpInfo(name: string, namespace: string, body: V1RemoveVolumeOptions, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Removes a volume and disk from a running Virtual Machine.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3vmRemovevolume(name: string, namespace: string, body: V1RemoveVolumeOptions, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Add a volume and disk to a running Virtual Machine Instance
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3vmiAddvolumeWithHttpInfo(name: string, namespace: string, body: V1AddVolumeOptions, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Add a volume and disk to a running Virtual Machine Instance
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3vmiAddvolume(name: string, namespace: string, body: V1AddVolumeOptions, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     */
    v1alpha3vmiPortForwardWithHttpInfo(name: string, namespace: string, port: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     */
    v1alpha3vmiPortForward(name: string, namespace: string, port: string, _options?: PromiseConfigurationOptions): Promise<void>;
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachineInstance and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     * @param protocol The protocol for portforward on the VirtualMachineInstance.
     */
    v1alpha3vmiPortForwardWithProtocolWithHttpInfo(name: string, namespace: string, port: string, protocol: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachineInstance and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     * @param protocol The protocol for portforward on the VirtualMachineInstance.
     */
    v1alpha3vmiPortForwardWithProtocol(name: string, namespace: string, port: string, protocol: string, _options?: PromiseConfigurationOptions): Promise<void>;
    /**
     * Removes a volume and disk from a running Virtual Machine Instance
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3vmiRemovevolumeWithHttpInfo(name: string, namespace: string, body: V1RemoveVolumeOptions, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Removes a volume and disk from a running Virtual Machine Instance
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3vmiRemovevolume(name: string, namespace: string, body: V1RemoveVolumeOptions, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     */
    v1dumpClusterProfilerWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     */
    v1dumpClusterProfiler(_options?: PromiseConfigurationOptions): Promise<void>;
    /**
     * Get a KubeVirt API resources
     */
    v1getAPISubResourcesWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIResourceList>>;
    /**
     * Get a KubeVirt API resources
     */
    v1getAPISubResources(_options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIResourceList>;
    /**
     */
    v1startClusterProfilerWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     */
    v1startClusterProfiler(_options?: PromiseConfigurationOptions): Promise<void>;
    /**
     */
    v1stopClusterProfilerWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     */
    v1stopClusterProfiler(_options?: PromiseConfigurationOptions): Promise<void>;
    /**
     * Open a websocket connection to connect to USB device on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1usbredirWithHttpInfo(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection to connect to USB device on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1usbredir(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<void>;
    /**
     * Add a volume and disk to a running Virtual Machine.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1vmAddvolumeWithHttpInfo(name: string, namespace: string, body: V1AddVolumeOptions, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Add a volume and disk to a running Virtual Machine.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1vmAddvolume(name: string, namespace: string, body: V1AddVolumeOptions, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Get VirtualMachine object with expanded instancetype and preference.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1vmExpandSpecWithHttpInfo(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Get VirtualMachine object with expanded instancetype and preference.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1vmExpandSpec(name: string, namespace: string, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Open a websocket connection forwarding traffic to the running VMI for the specified VirtualMachine and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     */
    v1vmPortForwardWithHttpInfo(name: string, namespace: string, port: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection forwarding traffic to the running VMI for the specified VirtualMachine and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     */
    v1vmPortForward(name: string, namespace: string, port: string, _options?: PromiseConfigurationOptions): Promise<void>;
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachine and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     * @param protocol The protocol for portforward on the VirtualMachineInstance.
     */
    v1vmPortForwardWithProtocolWithHttpInfo(name: string, namespace: string, port: string, protocol: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachine and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     * @param protocol The protocol for portforward on the VirtualMachineInstance.
     */
    v1vmPortForwardWithProtocol(name: string, namespace: string, port: string, protocol: string, _options?: PromiseConfigurationOptions): Promise<void>;
    /**
     * Removes a volume and disk from a running Virtual Machine.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1vmRemovevolumeWithHttpInfo(name: string, namespace: string, body: V1RemoveVolumeOptions, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Removes a volume and disk from a running Virtual Machine.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1vmRemovevolume(name: string, namespace: string, body: V1RemoveVolumeOptions, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Add a volume and disk to a running Virtual Machine Instance
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1vmiAddvolumeWithHttpInfo(name: string, namespace: string, body: V1AddVolumeOptions, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Add a volume and disk to a running Virtual Machine Instance
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1vmiAddvolume(name: string, namespace: string, body: V1AddVolumeOptions, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     */
    v1vmiPortForwardWithHttpInfo(name: string, namespace: string, port: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     */
    v1vmiPortForward(name: string, namespace: string, port: string, _options?: PromiseConfigurationOptions): Promise<void>;
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachineInstance and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     * @param protocol The protocol for portforward on the VirtualMachineInstance.
     */
    v1vmiPortForwardWithProtocolWithHttpInfo(name: string, namespace: string, port: string, protocol: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachineInstance and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     * @param protocol The protocol for portforward on the VirtualMachineInstance.
     */
    v1vmiPortForwardWithProtocol(name: string, namespace: string, port: string, protocol: string, _options?: PromiseConfigurationOptions): Promise<void>;
    /**
     * Removes a volume and disk from a running Virtual Machine Instance
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1vmiRemovevolumeWithHttpInfo(name: string, namespace: string, body: V1RemoveVolumeOptions, _options?: PromiseConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Removes a volume and disk from a running Virtual Machine Instance
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1vmiRemovevolume(name: string, namespace: string, body: V1RemoveVolumeOptions, _options?: PromiseConfigurationOptions): Promise<string>;
    /**
     * Watch a KubeVirtList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchKubeVirtListForAllNamespacesWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a KubeVirtList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchKubeVirtListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a MigrationPolicyList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchMigrationPolicyListForAllNamespacesWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a MigrationPolicyList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchMigrationPolicyListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a KubeVirt object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedKubeVirtWithHttpInfo(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a KubeVirt object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedKubeVirt(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachine object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachineWithHttpInfo(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachine object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachine(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineExport object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachineExportWithHttpInfo(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineExport object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachineExport(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineInstance object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachineInstanceWithHttpInfo(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineInstance object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachineInstance(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineInstanceMigration object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachineInstanceMigrationWithHttpInfo(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineInstanceMigration object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachineInstanceMigration(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineInstancePreset object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachineInstancePresetWithHttpInfo(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineInstancePreset object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachineInstancePreset(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineInstanceReplicaSet object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineInstanceReplicaSet object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachineInstanceReplicaSet(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineInstancetype object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachineInstancetypeWithHttpInfo(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineInstancetype object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachineInstancetype(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachinePool object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachinePoolWithHttpInfo(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachinePool object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachinePool(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachinePreference object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachinePreferenceWithHttpInfo(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachinePreference object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachinePreference(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineRestore object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachineRestoreWithHttpInfo(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineRestore object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachineRestore(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineSnapshot object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachineSnapshotWithHttpInfo(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineSnapshot object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachineSnapshot(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineSnapshotContent object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachineSnapshotContentWithHttpInfo(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineSnapshotContent object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachineSnapshotContent(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineCloneList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineCloneListForAllNamespacesWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineCloneList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineCloneListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineClusterInstancetypeList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineClusterInstancetypeListForAllNamespacesWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineClusterInstancetypeList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineClusterInstancetypeListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineClusterPreferenceList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineClusterPreferenceListForAllNamespacesWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineClusterPreferenceList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineClusterPreferenceListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineExportList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineExportListForAllNamespacesWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineExportList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineExportListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineInstanceList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineInstanceListForAllNamespacesWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineInstanceList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineInstanceListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineInstanceMigrationList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineInstanceMigrationListForAllNamespacesWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineInstanceMigrationList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineInstanceMigrationListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineInstancePresetList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineInstancePresetListForAllNamespacesWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineInstancePresetList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineInstancePresetListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineInstanceReplicaSetList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineInstanceReplicaSetListForAllNamespacesWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineInstanceReplicaSetList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineInstanceReplicaSetListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineInstancetypeList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineInstancetypeListForAllNamespacesWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineInstancetypeList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineInstancetypeListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineListForAllNamespacesWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachinePoolList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachinePoolListForAllNamespacesWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachinePoolList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachinePoolListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachinePreferenceList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachinePreferenceListForAllNamespacesWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachinePreferenceList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachinePreferenceListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineRestoreList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineRestoreListForAllNamespacesWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineRestoreList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineRestoreListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineSnapshotContentList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineSnapshotContentListForAllNamespacesWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineSnapshotContentList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineSnapshotContentListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineSnapshotList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineSnapshotListForAllNamespacesWithHttpInfo(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineSnapshotList object.
     * @param [_continue] The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param [fieldSelector] A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param [includeUninitialized] If true, partially initialized resources are included in the response.
     * @param [labelSelector] A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param [limit] limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param [resourceVersion] When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param [timeoutSeconds] TimeoutSeconds for the list/watch call.
     * @param [watch] Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineSnapshotListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: PromiseConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
}
//# sourceMappingURL=PromiseAPI.d.ts.map