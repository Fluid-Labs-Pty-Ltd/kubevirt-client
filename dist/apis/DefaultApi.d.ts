import { BaseAPIRequestFactory } from './baseapi.js';
import { Configuration } from '../configuration.js';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http.js';
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
/**
 * no description
 */
export declare class DefaultApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Create a MigrationPolicy object.
     * @param body
     */
    createMigrationPolicy(body: V1alpha1MigrationPolicy, _options?: Configuration): Promise<RequestContext>;
    /**
     * Create a KubeVirt object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedKubeVirt(namespace: string, body: V1KubeVirt, _options?: Configuration): Promise<RequestContext>;
    /**
     * Create a VirtualMachine object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachine(namespace: string, body: V1VirtualMachine, _options?: Configuration): Promise<RequestContext>;
    /**
     * Create a VirtualMachineExport object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineExport(namespace: string, body: V1beta1VirtualMachineExport, _options?: Configuration): Promise<RequestContext>;
    /**
     * Create a VirtualMachineInstance object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineInstance(namespace: string, body: V1VirtualMachineInstance, _options?: Configuration): Promise<RequestContext>;
    /**
     * Create a VirtualMachineInstanceMigration object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineInstanceMigration(namespace: string, body: V1VirtualMachineInstanceMigration, _options?: Configuration): Promise<RequestContext>;
    /**
     * Create a VirtualMachineInstancePreset object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineInstancePreset(namespace: string, body: V1VirtualMachineInstancePreset, _options?: Configuration): Promise<RequestContext>;
    /**
     * Create a VirtualMachineInstanceReplicaSet object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineInstanceReplicaSet(namespace: string, body: V1VirtualMachineInstanceReplicaSet, _options?: Configuration): Promise<RequestContext>;
    /**
     * Create a VirtualMachineInstancetype object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineInstancetype(namespace: string, body: V1beta1VirtualMachineInstancetype, _options?: Configuration): Promise<RequestContext>;
    /**
     * Create a VirtualMachinePool object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachinePool(namespace: string, body: V1alpha1VirtualMachinePool, _options?: Configuration): Promise<RequestContext>;
    /**
     * Create a VirtualMachinePreference object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachinePreference(namespace: string, body: V1beta1VirtualMachinePreference, _options?: Configuration): Promise<RequestContext>;
    /**
     * Create a VirtualMachineRestore object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineRestore(namespace: string, body: V1beta1VirtualMachineRestore, _options?: Configuration): Promise<RequestContext>;
    /**
     * Create a VirtualMachineSnapshot object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineSnapshot(namespace: string, body: V1beta1VirtualMachineSnapshot, _options?: Configuration): Promise<RequestContext>;
    /**
     * Create a VirtualMachineSnapshotContent object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineSnapshotContent(namespace: string, body: V1beta1VirtualMachineSnapshotContent, _options?: Configuration): Promise<RequestContext>;
    /**
     * Create a VirtualMachineClone object.
     * @param body
     */
    createVirtualMachineClone(body: V1alpha1VirtualMachineClone, _options?: Configuration): Promise<RequestContext>;
    /**
     * Create a VirtualMachineClusterInstancetype object.
     * @param body
     */
    createVirtualMachineClusterInstancetype(body: V1beta1VirtualMachineClusterInstancetype, _options?: Configuration): Promise<RequestContext>;
    /**
     * Create a VirtualMachineClusterPreference object.
     * @param body
     */
    createVirtualMachineClusterPreference(body: V1beta1VirtualMachineClusterPreference, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a collection of MigrationPolicy objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionMigrationPolicy(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a collection of KubeVirt objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedKubeVirt(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a collection of VirtualMachine objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachine(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a collection of VirtualMachineExport objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachineExport(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a collection of VirtualMachineInstance objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachineInstance(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a collection of VirtualMachineInstanceMigration objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachineInstanceMigration(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a collection of VirtualMachineInstancePreset objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachineInstancePreset(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a collection of VirtualMachineInstanceReplicaSet objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachineInstanceReplicaSet(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a collection of VirtualMachineInstancetype objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachineInstancetype(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a collection of VirtualMachinePool objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachinePool(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a collection of VirtualMachinePreference objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachinePreference(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a collection of VirtualMachineRestore objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachineRestore(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a collection of VirtualMachineSnapshot objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachineSnapshot(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a collection of VirtualMachineSnapshotContent objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionNamespacedVirtualMachineSnapshotContent(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a collection of VirtualMachineClone objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionVirtualMachineClone(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a collection of VirtualMachineClusterInstancetype objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionVirtualMachineClusterInstancetype(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a collection of VirtualMachineClusterPreference objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    deleteCollectionVirtualMachineClusterPreference(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a MigrationPolicy object.
     * @param name Name of the resource
     * @param body
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteMigrationPolicy(name: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a KubeVirt object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedKubeVirt(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachine(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a VirtualMachineExport object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineExport(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineInstance(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a VirtualMachineInstanceMigration object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineInstanceMigration(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a VirtualMachineInstancePreset object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineInstancePreset(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a VirtualMachineInstanceReplicaSet object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineInstanceReplicaSet(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a VirtualMachineInstancetype object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineInstancetype(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a VirtualMachinePool object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachinePool(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a VirtualMachinePreference object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachinePreference(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a VirtualMachineRestore object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineRestore(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a VirtualMachineSnapshot object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineSnapshot(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a VirtualMachineSnapshotContent object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineSnapshotContent(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a VirtualMachineClone object.
     * @param name Name of the resource
     * @param body
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteVirtualMachineClone(name: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a VirtualMachineClusterInstancetype object.
     * @param name Name of the resource
     * @param body
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteVirtualMachineClusterInstancetype(name: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a VirtualMachineClusterPreference object.
     * @param name Name of the resource
     * @param body
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteVirtualMachineClusterPreference(name: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Health endpoint
     */
    func13(_options?: Configuration): Promise<RequestContext>;
    /**
     */
    func6(_options?: Configuration): Promise<RequestContext>;
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupCloneKubevirtIo(_options?: Configuration): Promise<RequestContext>;
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupExportKubevirtIo(_options?: Configuration): Promise<RequestContext>;
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupInstancetypeKubevirtIo(_options?: Configuration): Promise<RequestContext>;
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupKubevirtIo(_options?: Configuration): Promise<RequestContext>;
    /**
     * Get a KubeVirt API GroupList
     */
    getAPIGroupList(_options?: Configuration): Promise<RequestContext>;
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupMigrationsKubevirtIo(_options?: Configuration): Promise<RequestContext>;
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupPoolKubevirtIo(_options?: Configuration): Promise<RequestContext>;
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupSnapshotKubevirtIo(_options?: Configuration): Promise<RequestContext>;
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesCloneKubevirtIoV1alpha1(_options?: Configuration): Promise<RequestContext>;
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesExportKubevirtIoV1beta1(_options?: Configuration): Promise<RequestContext>;
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesInstancetypeKubevirtIoV1beta1(_options?: Configuration): Promise<RequestContext>;
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesKubevirtIoV1(_options?: Configuration): Promise<RequestContext>;
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesMigrationsKubevirtIoV1alpha1(_options?: Configuration): Promise<RequestContext>;
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesPoolKubevirtIoV1alpha1(_options?: Configuration): Promise<RequestContext>;
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesSnapshotKubevirtIoV1beta1(_options?: Configuration): Promise<RequestContext>;
    /**
     * Get KubeVirt API root paths
     */
    getRootPaths(_options?: Configuration): Promise<RequestContext>;
    /**
     * dump profiler results endpoint
     */
    handleDumpProfiler(_options?: Configuration): Promise<RequestContext>;
    /**
     * start profiler endpoint
     */
    handleStartProfiler(_options?: Configuration): Promise<RequestContext>;
    /**
     * stop profiler endpoint
     */
    handleStopProfiler(_options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of all KubeVirt objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listKubeVirtForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of MigrationPolicy objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listMigrationPolicy(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of KubeVirt objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedKubeVirt(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of VirtualMachine objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachine(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of VirtualMachineExport objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachineExport(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of VirtualMachineInstance objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachineInstance(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of VirtualMachineInstanceMigration objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachineInstanceMigration(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of VirtualMachineInstancePreset objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachineInstancePreset(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of VirtualMachineInstanceReplicaSet objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachineInstanceReplicaSet(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of VirtualMachineInstancetype objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachineInstancetype(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of VirtualMachinePool objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachinePool(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of VirtualMachinePreference objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachinePreference(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of VirtualMachineRestore objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachineRestore(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of VirtualMachineSnapshot objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachineSnapshot(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of VirtualMachineSnapshotContent objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedVirtualMachineSnapshotContent(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of VirtualMachineClone objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineClone(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of VirtualMachineClusterInstancetype objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineClusterInstancetype(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of VirtualMachineClusterPreference objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineClusterPreference(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of all VirtualMachineExport objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineExportForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of all VirtualMachine objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of all VirtualMachineInstance objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineInstanceForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of all VirtualMachineInstanceMigration objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineInstanceMigrationForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of all VirtualMachineInstancePreset objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineInstancePresetForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of all VirtualMachineInstanceReplicaSet objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineInstanceReplicaSetForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of all VirtualMachineInstancetype objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineInstancetypeForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of all VirtualMachinePool objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachinePoolForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of all VirtualMachinePreference objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachinePreferenceForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of all VirtualMachineRestore objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineRestoreForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of all VirtualMachineSnapshotContent objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineSnapshotContentForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of all VirtualMachineSnapshot objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listVirtualMachineSnapshotForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Patch a MigrationPolicy object.
     * @param name Name of the resource
     * @param body
     */
    patchMigrationPolicy(name: string, body: any, _options?: Configuration): Promise<RequestContext>;
    /**
     * Patch a KubeVirt object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedKubeVirt(name: string, namespace: string, body: any, _options?: Configuration): Promise<RequestContext>;
    /**
     * Patch a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachine(name: string, namespace: string, body: any, _options?: Configuration): Promise<RequestContext>;
    /**
     * Patch a VirtualMachineExport object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineExport(name: string, namespace: string, body: any, _options?: Configuration): Promise<RequestContext>;
    /**
     * Patch a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineInstance(name: string, namespace: string, body: any, _options?: Configuration): Promise<RequestContext>;
    /**
     * Patch a VirtualMachineInstanceMigration object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineInstanceMigration(name: string, namespace: string, body: any, _options?: Configuration): Promise<RequestContext>;
    /**
     * Patch a VirtualMachineInstancePreset object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineInstancePreset(name: string, namespace: string, body: any, _options?: Configuration): Promise<RequestContext>;
    /**
     * Patch a VirtualMachineInstanceReplicaSet object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineInstanceReplicaSet(name: string, namespace: string, body: any, _options?: Configuration): Promise<RequestContext>;
    /**
     * Patch a VirtualMachineInstancetype object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineInstancetype(name: string, namespace: string, body: any, _options?: Configuration): Promise<RequestContext>;
    /**
     * Patch a VirtualMachinePool object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachinePool(name: string, namespace: string, body: any, _options?: Configuration): Promise<RequestContext>;
    /**
     * Patch a VirtualMachinePreference object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachinePreference(name: string, namespace: string, body: any, _options?: Configuration): Promise<RequestContext>;
    /**
     * Patch a VirtualMachineRestore object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineRestore(name: string, namespace: string, body: any, _options?: Configuration): Promise<RequestContext>;
    /**
     * Patch a VirtualMachineSnapshot object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineSnapshot(name: string, namespace: string, body: any, _options?: Configuration): Promise<RequestContext>;
    /**
     * Patch a VirtualMachineSnapshotContent object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineSnapshotContent(name: string, namespace: string, body: any, _options?: Configuration): Promise<RequestContext>;
    /**
     * Patch a VirtualMachineClone object.
     * @param name Name of the resource
     * @param body
     */
    patchVirtualMachineClone(name: string, body: any, _options?: Configuration): Promise<RequestContext>;
    /**
     * Patch a VirtualMachineClusterInstancetype object.
     * @param name Name of the resource
     * @param body
     */
    patchVirtualMachineClusterInstancetype(name: string, body: any, _options?: Configuration): Promise<RequestContext>;
    /**
     * Patch a VirtualMachineClusterPreference object.
     * @param name Name of the resource
     * @param body
     */
    patchVirtualMachineClusterPreference(name: string, body: any, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a MigrationPolicy object.
     * @param name Name of the resource
     * @param exact Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param _export Should this value be exported. Export strips fields that a user can not specify.
     */
    readMigrationPolicy(name: string, exact?: boolean, _export?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a KubeVirt object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param exact Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param _export Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedKubeVirt(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param exact Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param _export Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachine(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a VirtualMachineExport object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param exact Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param _export Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineExport(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param exact Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param _export Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineInstance(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a VirtualMachineInstanceMigration object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param exact Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param _export Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineInstanceMigration(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a VirtualMachineInstancePreset object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param exact Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param _export Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineInstancePreset(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a VirtualMachineInstanceReplicaSet object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param exact Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param _export Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineInstanceReplicaSet(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a VirtualMachineInstancetype object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param exact Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param _export Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineInstancetype(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a VirtualMachinePool object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param exact Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param _export Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachinePool(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a VirtualMachinePreference object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param exact Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param _export Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachinePreference(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a VirtualMachineRestore object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param exact Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param _export Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineRestore(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a VirtualMachineSnapshot object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param exact Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param _export Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineSnapshot(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a VirtualMachineSnapshotContent object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param exact Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param _export Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineSnapshotContent(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a VirtualMachineClone object.
     * @param name Name of the resource
     * @param exact Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param _export Should this value be exported. Export strips fields that a user can not specify.
     */
    readVirtualMachineClone(name: string, exact?: boolean, _export?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a VirtualMachineClusterInstancetype object.
     * @param name Name of the resource
     * @param exact Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param _export Should this value be exported. Export strips fields that a user can not specify.
     */
    readVirtualMachineClusterInstancetype(name: string, exact?: boolean, _export?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a VirtualMachineClusterPreference object.
     * @param name Name of the resource
     * @param exact Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param _export Should this value be exported. Export strips fields that a user can not specify.
     */
    readVirtualMachineClusterPreference(name: string, exact?: boolean, _export?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Update a MigrationPolicy object.
     * @param name Name of the resource
     * @param body
     */
    replaceMigrationPolicy(name: string, body: V1alpha1MigrationPolicy, _options?: Configuration): Promise<RequestContext>;
    /**
     * Update a KubeVirt object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedKubeVirt(name: string, namespace: string, body: V1KubeVirt, _options?: Configuration): Promise<RequestContext>;
    /**
     * Update a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachine(name: string, namespace: string, body: V1VirtualMachine, _options?: Configuration): Promise<RequestContext>;
    /**
     * Update a VirtualMachineExport object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineExport(name: string, namespace: string, body: V1beta1VirtualMachineExport, _options?: Configuration): Promise<RequestContext>;
    /**
     * Update a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineInstance(name: string, namespace: string, body: V1VirtualMachineInstance, _options?: Configuration): Promise<RequestContext>;
    /**
     * Update a VirtualMachineInstanceMigration object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineInstanceMigration(name: string, namespace: string, body: V1VirtualMachineInstanceMigration, _options?: Configuration): Promise<RequestContext>;
    /**
     * Update a VirtualMachineInstancePreset object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineInstancePreset(name: string, namespace: string, body: V1VirtualMachineInstancePreset, _options?: Configuration): Promise<RequestContext>;
    /**
     * Update a VirtualMachineInstanceReplicaSet object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineInstanceReplicaSet(name: string, namespace: string, body: V1VirtualMachineInstanceReplicaSet, _options?: Configuration): Promise<RequestContext>;
    /**
     * Update a VirtualMachineInstancetype object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineInstancetype(name: string, namespace: string, body: V1beta1VirtualMachineInstancetype, _options?: Configuration): Promise<RequestContext>;
    /**
     * Update a VirtualMachinePool object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachinePool(name: string, namespace: string, body: V1alpha1VirtualMachinePool, _options?: Configuration): Promise<RequestContext>;
    /**
     * Update a VirtualMachinePreference object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachinePreference(name: string, namespace: string, body: V1beta1VirtualMachinePreference, _options?: Configuration): Promise<RequestContext>;
    /**
     * Update a VirtualMachineRestore object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineRestore(name: string, namespace: string, body: V1beta1VirtualMachineRestore, _options?: Configuration): Promise<RequestContext>;
    /**
     * Update a VirtualMachineSnapshot object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineSnapshot(name: string, namespace: string, body: V1beta1VirtualMachineSnapshot, _options?: Configuration): Promise<RequestContext>;
    /**
     * Update a VirtualMachineSnapshotContent object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineSnapshotContent(name: string, namespace: string, body: V1beta1VirtualMachineSnapshotContent, _options?: Configuration): Promise<RequestContext>;
    /**
     * Update a VirtualMachineClone object.
     * @param name Name of the resource
     * @param body
     */
    replaceVirtualMachineClone(name: string, body: V1alpha1VirtualMachineClone, _options?: Configuration): Promise<RequestContext>;
    /**
     * Update a VirtualMachineClusterInstancetype object.
     * @param name Name of the resource
     * @param body
     */
    replaceVirtualMachineClusterInstancetype(name: string, body: V1beta1VirtualMachineClusterInstancetype, _options?: Configuration): Promise<RequestContext>;
    /**
     * Update a VirtualMachineClusterPreference object.
     * @param name Name of the resource
     * @param body
     */
    replaceVirtualMachineClusterPreference(name: string, body: V1beta1VirtualMachineClusterPreference, _options?: Configuration): Promise<RequestContext>;
    /**
     * Health endpoint
     */
    v1CheckHealth(_options?: Configuration): Promise<RequestContext>;
    /**
     * Open a websocket connection to a serial console on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1Console(name: string, namespace: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Expands instancetype and preference into the passed VirtualMachine object.
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1ExpandSpec(namespace: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get list of active filesystems on guest machine via guest agent
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1Filesystemlist(name: string, namespace: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Freeze a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1Freeze(name: string, namespace: string, body: V1FreezeUnfreezeTimeout, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a KubeVirt API Group
     */
    v1GetSubAPIGroup(_options?: Configuration): Promise<RequestContext>;
    /**
     */
    v1Guestfs(_options?: Configuration): Promise<RequestContext>;
    /**
     * Get guest agent os information
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1Guestosinfo(name: string, namespace: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Dumps a VirtualMachineInstance memory.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1MemoryDump(name: string, namespace: string, body: V1VirtualMachineMemoryDumpRequest, _options?: Configuration): Promise<RequestContext>;
    /**
     * Migrate a running VirtualMachine to another node.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1Migrate(name: string, namespace: string, body: V1MigrateOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * Pause a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1Pause(name: string, namespace: string, body: V1PauseOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * Remove memory dump association.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1RemoveMemoryDump(name: string, namespace: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Restart a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1Restart(name: string, namespace: string, body?: V1RestartOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * Fetch SEV certificate chain from the node where Virtual Machine is scheduled
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1SEVFetchCertChain(name: string, namespace: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Inject SEV launch secret into a Virtual Machine
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1SEVInjectLaunchSecret(name: string, namespace: string, body: V1SEVSecretOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * Query SEV launch measurement from a Virtual Machine
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1SEVQueryLaunchMeasurement(name: string, namespace: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Setup SEV session parameters for a Virtual Machine
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1SEVSetupSession(name: string, namespace: string, body: V1SEVSessionOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * Soft reboot a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1SoftReboot(name: string, namespace: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Start a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1Start(name: string, namespace: string, body: V1StartOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * Stop a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1Stop(name: string, namespace: string, body?: V1StopOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * Unfreeze a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1Unfreeze(name: string, namespace: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Unpause a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1Unpause(name: string, namespace: string, body: V1UnpauseOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get list of active users via guest agent
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1Userlist(name: string, namespace: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Open a websocket connection to connect to VNC on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1VNC(name: string, namespace: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a PNG VNC screenshot of the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param moveCursor Move the cursor on the VNC display to wake up the screen
     */
    v1VNCScreenshot(name: string, namespace: string, moveCursor?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port via VSOCK.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The port which the VSOCK application listens to.
     * @param tls Weather to request a TLS encrypted session from the VSOCK application.
     */
    v1VSOCK(name: string, namespace: string, port: number, tls?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     */
    v1Version(_options?: Configuration): Promise<RequestContext>;
    /**
     * Health endpoint
     */
    v1alpha3CheckHealth(_options?: Configuration): Promise<RequestContext>;
    /**
     * Open a websocket connection to a serial console on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3Console(name: string, namespace: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Expands instancetype and preference into the passed VirtualMachine object.
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3ExpandSpec(namespace: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get list of active filesystems on guest machine via guest agent
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3Filesystemlist(name: string, namespace: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Freeze a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3Freeze(name: string, namespace: string, body: V1FreezeUnfreezeTimeout, _options?: Configuration): Promise<RequestContext>;
    /**
     */
    v1alpha3Guestfs(_options?: Configuration): Promise<RequestContext>;
    /**
     * Get guest agent os information
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3Guestosinfo(name: string, namespace: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Dumps a VirtualMachineInstance memory.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3MemoryDump(name: string, namespace: string, body: V1VirtualMachineMemoryDumpRequest, _options?: Configuration): Promise<RequestContext>;
    /**
     * Migrate a running VirtualMachine to another node.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3Migrate(name: string, namespace: string, body: V1MigrateOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * Pause a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3Pause(name: string, namespace: string, body: V1PauseOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * Remove memory dump association.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3RemoveMemoryDump(name: string, namespace: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Restart a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3Restart(name: string, namespace: string, body?: V1RestartOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * Fetch SEV certificate chain from the node where Virtual Machine is scheduled
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3SEVFetchCertChain(name: string, namespace: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Inject SEV launch secret into a Virtual Machine
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3SEVInjectLaunchSecret(name: string, namespace: string, body: V1SEVSecretOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * Query SEV launch measurement from a Virtual Machine
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3SEVQueryLaunchMeasurement(name: string, namespace: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Setup SEV session parameters for a Virtual Machine
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3SEVSetupSession(name: string, namespace: string, body: V1SEVSessionOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * Soft reboot a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3SoftReboot(name: string, namespace: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Start a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3Start(name: string, namespace: string, body: V1StartOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * Stop a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3Stop(name: string, namespace: string, body?: V1StopOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * Unfreeze a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3Unfreeze(name: string, namespace: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Unpause a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3Unpause(name: string, namespace: string, body: V1UnpauseOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get list of active users via guest agent
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3Userlist(name: string, namespace: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Open a websocket connection to connect to VNC on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3VNC(name: string, namespace: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get a PNG VNC screenshot of the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param moveCursor Move the cursor on the VNC display to wake up the screen
     */
    v1alpha3VNCScreenshot(name: string, namespace: string, moveCursor?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port via VSOCK.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The port which the VSOCK application listens to.
     * @param tls Weather to request a TLS encrypted session from the VSOCK application.
     */
    v1alpha3VSOCK(name: string, namespace: string, port: number, tls?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     */
    v1alpha3Version(_options?: Configuration): Promise<RequestContext>;
    /**
     */
    v1alpha3dumpClusterProfiler(_options?: Configuration): Promise<RequestContext>;
    /**
     * Get a KubeVirt API resources
     */
    v1alpha3getAPISubResources(_options?: Configuration): Promise<RequestContext>;
    /**
     */
    v1alpha3startClusterProfiler(_options?: Configuration): Promise<RequestContext>;
    /**
     */
    v1alpha3stopClusterProfiler(_options?: Configuration): Promise<RequestContext>;
    /**
     * Open a websocket connection to connect to USB device on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3usbredir(name: string, namespace: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Add a volume and disk to a running Virtual Machine.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3vmAddvolume(name: string, namespace: string, body: V1AddVolumeOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get VirtualMachine object with expanded instancetype and preference.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3vmExpandSpec(name: string, namespace: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Open a websocket connection forwarding traffic to the running VMI for the specified VirtualMachine and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     */
    v1alpha3vmPortForward(name: string, namespace: string, port: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachine and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     * @param protocol The protocol for portforward on the VirtualMachineInstance.
     */
    v1alpha3vmPortForwardWithProtocol(name: string, namespace: string, port: string, protocol: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Removes a volume and disk from a running Virtual Machine.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3vmRemovevolume(name: string, namespace: string, body: V1RemoveVolumeOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * Add a volume and disk to a running Virtual Machine Instance
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3vmiAddvolume(name: string, namespace: string, body: V1AddVolumeOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     */
    v1alpha3vmiPortForward(name: string, namespace: string, port: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachineInstance and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     * @param protocol The protocol for portforward on the VirtualMachineInstance.
     */
    v1alpha3vmiPortForwardWithProtocol(name: string, namespace: string, port: string, protocol: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Removes a volume and disk from a running Virtual Machine Instance
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3vmiRemovevolume(name: string, namespace: string, body: V1RemoveVolumeOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     */
    v1dumpClusterProfiler(_options?: Configuration): Promise<RequestContext>;
    /**
     * Get a KubeVirt API resources
     */
    v1getAPISubResources(_options?: Configuration): Promise<RequestContext>;
    /**
     */
    v1startClusterProfiler(_options?: Configuration): Promise<RequestContext>;
    /**
     */
    v1stopClusterProfiler(_options?: Configuration): Promise<RequestContext>;
    /**
     * Open a websocket connection to connect to USB device on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1usbredir(name: string, namespace: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Add a volume and disk to a running Virtual Machine.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1vmAddvolume(name: string, namespace: string, body: V1AddVolumeOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get VirtualMachine object with expanded instancetype and preference.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1vmExpandSpec(name: string, namespace: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Open a websocket connection forwarding traffic to the running VMI for the specified VirtualMachine and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     */
    v1vmPortForward(name: string, namespace: string, port: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachine and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     * @param protocol The protocol for portforward on the VirtualMachineInstance.
     */
    v1vmPortForwardWithProtocol(name: string, namespace: string, port: string, protocol: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Removes a volume and disk from a running Virtual Machine.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1vmRemovevolume(name: string, namespace: string, body: V1RemoveVolumeOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * Add a volume and disk to a running Virtual Machine Instance
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1vmiAddvolume(name: string, namespace: string, body: V1AddVolumeOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     */
    v1vmiPortForward(name: string, namespace: string, port: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachineInstance and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     * @param protocol The protocol for portforward on the VirtualMachineInstance.
     */
    v1vmiPortForwardWithProtocol(name: string, namespace: string, port: string, protocol: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Removes a volume and disk from a running Virtual Machine Instance
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1vmiRemovevolume(name: string, namespace: string, body: V1RemoveVolumeOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * Watch a KubeVirtList object.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchKubeVirtListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Watch a MigrationPolicyList object.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchMigrationPolicyListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Watch a KubeVirt object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedKubeVirt(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Watch a VirtualMachine object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachine(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Watch a VirtualMachineExport object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachineExport(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Watch a VirtualMachineInstance object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachineInstance(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Watch a VirtualMachineInstanceMigration object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachineInstanceMigration(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Watch a VirtualMachineInstancePreset object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachineInstancePreset(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Watch a VirtualMachineInstanceReplicaSet object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachineInstanceReplicaSet(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Watch a VirtualMachineInstancetype object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachineInstancetype(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Watch a VirtualMachinePool object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachinePool(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Watch a VirtualMachinePreference object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachinePreference(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Watch a VirtualMachineRestore object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachineRestore(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Watch a VirtualMachineSnapshot object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachineSnapshot(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Watch a VirtualMachineSnapshotContent object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchNamespacedVirtualMachineSnapshotContent(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Watch a VirtualMachineCloneList object.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineCloneListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Watch a VirtualMachineClusterInstancetypeList object.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineClusterInstancetypeListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Watch a VirtualMachineClusterPreferenceList object.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineClusterPreferenceListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Watch a VirtualMachineExportList object.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineExportListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Watch a VirtualMachineInstanceList object.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineInstanceListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Watch a VirtualMachineInstanceMigrationList object.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineInstanceMigrationListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Watch a VirtualMachineInstancePresetList object.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineInstancePresetListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Watch a VirtualMachineInstanceReplicaSetList object.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineInstanceReplicaSetListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Watch a VirtualMachineInstancetypeList object.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineInstancetypeListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Watch a VirtualMachineList object.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Watch a VirtualMachinePoolList object.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachinePoolListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Watch a VirtualMachinePreferenceList object.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachinePreferenceListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Watch a VirtualMachineRestoreList object.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineRestoreListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Watch a VirtualMachineSnapshotContentList object.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineSnapshotContentListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Watch a VirtualMachineSnapshotList object.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watchVirtualMachineSnapshotListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
}
export declare class DefaultApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createMigrationPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    createMigrationPolicyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1alpha1MigrationPolicy>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNamespacedKubeVirt
     * @throws ApiException if the response code was not in [200, 299]
     */
    createNamespacedKubeVirtWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1KubeVirt>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNamespacedVirtualMachine
     * @throws ApiException if the response code was not in [200, 299]
     */
    createNamespacedVirtualMachineWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachine>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNamespacedVirtualMachineExport
     * @throws ApiException if the response code was not in [200, 299]
     */
    createNamespacedVirtualMachineExportWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineExport>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNamespacedVirtualMachineInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
    createNamespacedVirtualMachineInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineInstance>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNamespacedVirtualMachineInstanceMigration
     * @throws ApiException if the response code was not in [200, 299]
     */
    createNamespacedVirtualMachineInstanceMigrationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineInstanceMigration>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNamespacedVirtualMachineInstancePreset
     * @throws ApiException if the response code was not in [200, 299]
     */
    createNamespacedVirtualMachineInstancePresetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineInstancePreset>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNamespacedVirtualMachineInstanceReplicaSet
     * @throws ApiException if the response code was not in [200, 299]
     */
    createNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineInstanceReplicaSet>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNamespacedVirtualMachineInstancetype
     * @throws ApiException if the response code was not in [200, 299]
     */
    createNamespacedVirtualMachineInstancetypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineInstancetype>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNamespacedVirtualMachinePool
     * @throws ApiException if the response code was not in [200, 299]
     */
    createNamespacedVirtualMachinePoolWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1alpha1VirtualMachinePool>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNamespacedVirtualMachinePreference
     * @throws ApiException if the response code was not in [200, 299]
     */
    createNamespacedVirtualMachinePreferenceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachinePreference>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNamespacedVirtualMachineRestore
     * @throws ApiException if the response code was not in [200, 299]
     */
    createNamespacedVirtualMachineRestoreWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineRestore>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNamespacedVirtualMachineSnapshot
     * @throws ApiException if the response code was not in [200, 299]
     */
    createNamespacedVirtualMachineSnapshotWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineSnapshot>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNamespacedVirtualMachineSnapshotContent
     * @throws ApiException if the response code was not in [200, 299]
     */
    createNamespacedVirtualMachineSnapshotContentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineSnapshotContent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createVirtualMachineClone
     * @throws ApiException if the response code was not in [200, 299]
     */
    createVirtualMachineCloneWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1alpha1VirtualMachineClone>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createVirtualMachineClusterInstancetype
     * @throws ApiException if the response code was not in [200, 299]
     */
    createVirtualMachineClusterInstancetypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineClusterInstancetype>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createVirtualMachineClusterPreference
     * @throws ApiException if the response code was not in [200, 299]
     */
    createVirtualMachineClusterPreferenceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineClusterPreference>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCollectionMigrationPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCollectionMigrationPolicyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCollectionNamespacedKubeVirt
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCollectionNamespacedKubeVirtWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCollectionNamespacedVirtualMachine
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCollectionNamespacedVirtualMachineWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCollectionNamespacedVirtualMachineExport
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCollectionNamespacedVirtualMachineExportWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCollectionNamespacedVirtualMachineInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCollectionNamespacedVirtualMachineInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCollectionNamespacedVirtualMachineInstanceMigration
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCollectionNamespacedVirtualMachineInstanceMigrationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCollectionNamespacedVirtualMachineInstancePreset
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCollectionNamespacedVirtualMachineInstancePresetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCollectionNamespacedVirtualMachineInstanceReplicaSet
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCollectionNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCollectionNamespacedVirtualMachineInstancetype
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCollectionNamespacedVirtualMachineInstancetypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCollectionNamespacedVirtualMachinePool
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCollectionNamespacedVirtualMachinePoolWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCollectionNamespacedVirtualMachinePreference
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCollectionNamespacedVirtualMachinePreferenceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCollectionNamespacedVirtualMachineRestore
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCollectionNamespacedVirtualMachineRestoreWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCollectionNamespacedVirtualMachineSnapshot
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCollectionNamespacedVirtualMachineSnapshotWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCollectionNamespacedVirtualMachineSnapshotContent
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCollectionNamespacedVirtualMachineSnapshotContentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCollectionVirtualMachineClone
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCollectionVirtualMachineCloneWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCollectionVirtualMachineClusterInstancetype
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCollectionVirtualMachineClusterInstancetypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCollectionVirtualMachineClusterPreference
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCollectionVirtualMachineClusterPreferenceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteMigrationPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteMigrationPolicyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteNamespacedKubeVirt
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteNamespacedKubeVirtWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteNamespacedVirtualMachine
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteNamespacedVirtualMachineWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteNamespacedVirtualMachineExport
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteNamespacedVirtualMachineExportWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteNamespacedVirtualMachineInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteNamespacedVirtualMachineInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteNamespacedVirtualMachineInstanceMigration
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteNamespacedVirtualMachineInstanceMigrationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteNamespacedVirtualMachineInstancePreset
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteNamespacedVirtualMachineInstancePresetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteNamespacedVirtualMachineInstanceReplicaSet
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteNamespacedVirtualMachineInstancetype
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteNamespacedVirtualMachineInstancetypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteNamespacedVirtualMachinePool
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteNamespacedVirtualMachinePoolWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteNamespacedVirtualMachinePreference
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteNamespacedVirtualMachinePreferenceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteNamespacedVirtualMachineRestore
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteNamespacedVirtualMachineRestoreWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteNamespacedVirtualMachineSnapshot
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteNamespacedVirtualMachineSnapshotWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteNamespacedVirtualMachineSnapshotContent
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteNamespacedVirtualMachineSnapshotContentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteVirtualMachineClone
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteVirtualMachineCloneWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteVirtualMachineClusterInstancetype
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteVirtualMachineClusterInstancetypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteVirtualMachineClusterPreference
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteVirtualMachineClusterPreferenceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to func13
     * @throws ApiException if the response code was not in [200, 299]
     */
    func13WithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to func6
     * @throws ApiException if the response code was not in [200, 299]
     */
    func6WithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPIGroupCloneKubevirtIo
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAPIGroupCloneKubevirtIoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIGroup>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPIGroupExportKubevirtIo
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAPIGroupExportKubevirtIoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIGroup>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPIGroupInstancetypeKubevirtIo
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAPIGroupInstancetypeKubevirtIoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIGroup>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPIGroupKubevirtIo
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAPIGroupKubevirtIoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIGroup>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPIGroupList
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAPIGroupListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIGroupList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPIGroupMigrationsKubevirtIo
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAPIGroupMigrationsKubevirtIoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIGroup>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPIGroupPoolKubevirtIo
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAPIGroupPoolKubevirtIoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIGroup>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPIGroupSnapshotKubevirtIo
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAPIGroupSnapshotKubevirtIoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIGroup>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPIResourcesCloneKubevirtIoV1alpha1
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAPIResourcesCloneKubevirtIoV1alpha1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIResourceList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPIResourcesExportKubevirtIoV1beta1
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAPIResourcesExportKubevirtIoV1beta1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIResourceList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPIResourcesInstancetypeKubevirtIoV1beta1
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAPIResourcesInstancetypeKubevirtIoV1beta1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIResourceList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPIResourcesKubevirtIoV1
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAPIResourcesKubevirtIoV1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIResourceList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPIResourcesMigrationsKubevirtIoV1alpha1
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAPIResourcesMigrationsKubevirtIoV1alpha1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIResourceList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPIResourcesPoolKubevirtIoV1alpha1
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAPIResourcesPoolKubevirtIoV1alpha1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIResourceList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPIResourcesSnapshotKubevirtIoV1beta1
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAPIResourcesSnapshotKubevirtIoV1beta1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIResourceList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRootPaths
     * @throws ApiException if the response code was not in [200, 299]
     */
    getRootPathsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1RootPaths>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to handleDumpProfiler
     * @throws ApiException if the response code was not in [200, 299]
     */
    handleDumpProfilerWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to handleStartProfiler
     * @throws ApiException if the response code was not in [200, 299]
     */
    handleStartProfilerWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to handleStopProfiler
     * @throws ApiException if the response code was not in [200, 299]
     */
    handleStopProfilerWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listKubeVirtForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    listKubeVirtForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1KubeVirtList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listMigrationPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    listMigrationPolicyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1alpha1MigrationPolicyList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listNamespacedKubeVirt
     * @throws ApiException if the response code was not in [200, 299]
     */
    listNamespacedKubeVirtWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1KubeVirtList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listNamespacedVirtualMachine
     * @throws ApiException if the response code was not in [200, 299]
     */
    listNamespacedVirtualMachineWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listNamespacedVirtualMachineExport
     * @throws ApiException if the response code was not in [200, 299]
     */
    listNamespacedVirtualMachineExportWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineExportList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listNamespacedVirtualMachineInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
    listNamespacedVirtualMachineInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineInstanceList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listNamespacedVirtualMachineInstanceMigration
     * @throws ApiException if the response code was not in [200, 299]
     */
    listNamespacedVirtualMachineInstanceMigrationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineInstanceMigrationList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listNamespacedVirtualMachineInstancePreset
     * @throws ApiException if the response code was not in [200, 299]
     */
    listNamespacedVirtualMachineInstancePresetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineInstancePresetList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listNamespacedVirtualMachineInstanceReplicaSet
     * @throws ApiException if the response code was not in [200, 299]
     */
    listNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineInstanceReplicaSetList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listNamespacedVirtualMachineInstancetype
     * @throws ApiException if the response code was not in [200, 299]
     */
    listNamespacedVirtualMachineInstancetypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineInstancetypeList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listNamespacedVirtualMachinePool
     * @throws ApiException if the response code was not in [200, 299]
     */
    listNamespacedVirtualMachinePoolWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1alpha1VirtualMachinePoolList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listNamespacedVirtualMachinePreference
     * @throws ApiException if the response code was not in [200, 299]
     */
    listNamespacedVirtualMachinePreferenceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachinePreferenceList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listNamespacedVirtualMachineRestore
     * @throws ApiException if the response code was not in [200, 299]
     */
    listNamespacedVirtualMachineRestoreWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineRestoreList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listNamespacedVirtualMachineSnapshot
     * @throws ApiException if the response code was not in [200, 299]
     */
    listNamespacedVirtualMachineSnapshotWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineSnapshotList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listNamespacedVirtualMachineSnapshotContent
     * @throws ApiException if the response code was not in [200, 299]
     */
    listNamespacedVirtualMachineSnapshotContentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineSnapshotContentList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listVirtualMachineClone
     * @throws ApiException if the response code was not in [200, 299]
     */
    listVirtualMachineCloneWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1alpha1VirtualMachineCloneList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listVirtualMachineClusterInstancetype
     * @throws ApiException if the response code was not in [200, 299]
     */
    listVirtualMachineClusterInstancetypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineClusterInstancetypeList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listVirtualMachineClusterPreference
     * @throws ApiException if the response code was not in [200, 299]
     */
    listVirtualMachineClusterPreferenceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineClusterPreferenceList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listVirtualMachineExportForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    listVirtualMachineExportForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineExportList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listVirtualMachineForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    listVirtualMachineForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listVirtualMachineInstanceForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    listVirtualMachineInstanceForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineInstanceList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listVirtualMachineInstanceMigrationForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    listVirtualMachineInstanceMigrationForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineInstanceMigrationList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listVirtualMachineInstancePresetForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    listVirtualMachineInstancePresetForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineInstancePresetList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listVirtualMachineInstanceReplicaSetForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    listVirtualMachineInstanceReplicaSetForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineInstanceReplicaSetList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listVirtualMachineInstancetypeForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    listVirtualMachineInstancetypeForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineInstancetypeList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listVirtualMachinePoolForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    listVirtualMachinePoolForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1alpha1VirtualMachinePoolList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listVirtualMachinePreferenceForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    listVirtualMachinePreferenceForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachinePreferenceList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listVirtualMachineRestoreForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    listVirtualMachineRestoreForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineRestoreList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listVirtualMachineSnapshotContentForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    listVirtualMachineSnapshotContentForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineSnapshotContentList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listVirtualMachineSnapshotForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    listVirtualMachineSnapshotForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineSnapshotList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchMigrationPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchMigrationPolicyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1alpha1MigrationPolicy>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchNamespacedKubeVirt
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchNamespacedKubeVirtWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1KubeVirt>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchNamespacedVirtualMachine
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchNamespacedVirtualMachineWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachine>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchNamespacedVirtualMachineExport
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchNamespacedVirtualMachineExportWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineExport>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchNamespacedVirtualMachineInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchNamespacedVirtualMachineInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineInstance>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchNamespacedVirtualMachineInstanceMigration
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchNamespacedVirtualMachineInstanceMigrationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineInstanceMigration>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchNamespacedVirtualMachineInstancePreset
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchNamespacedVirtualMachineInstancePresetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineInstancePreset>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchNamespacedVirtualMachineInstanceReplicaSet
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineInstanceReplicaSet>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchNamespacedVirtualMachineInstancetype
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchNamespacedVirtualMachineInstancetypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineInstancetype>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchNamespacedVirtualMachinePool
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchNamespacedVirtualMachinePoolWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1alpha1VirtualMachinePool>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchNamespacedVirtualMachinePreference
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchNamespacedVirtualMachinePreferenceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachinePreference>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchNamespacedVirtualMachineRestore
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchNamespacedVirtualMachineRestoreWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineRestore>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchNamespacedVirtualMachineSnapshot
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchNamespacedVirtualMachineSnapshotWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineSnapshot>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchNamespacedVirtualMachineSnapshotContent
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchNamespacedVirtualMachineSnapshotContentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineSnapshotContent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchVirtualMachineClone
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchVirtualMachineCloneWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1alpha1VirtualMachineClone>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchVirtualMachineClusterInstancetype
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchVirtualMachineClusterInstancetypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineClusterInstancetype>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchVirtualMachineClusterPreference
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchVirtualMachineClusterPreferenceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineClusterPreference>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readMigrationPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    readMigrationPolicyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1alpha1MigrationPolicy>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readNamespacedKubeVirt
     * @throws ApiException if the response code was not in [200, 299]
     */
    readNamespacedKubeVirtWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1KubeVirt>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readNamespacedVirtualMachine
     * @throws ApiException if the response code was not in [200, 299]
     */
    readNamespacedVirtualMachineWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachine>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readNamespacedVirtualMachineExport
     * @throws ApiException if the response code was not in [200, 299]
     */
    readNamespacedVirtualMachineExportWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineExport>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readNamespacedVirtualMachineInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
    readNamespacedVirtualMachineInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineInstance>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readNamespacedVirtualMachineInstanceMigration
     * @throws ApiException if the response code was not in [200, 299]
     */
    readNamespacedVirtualMachineInstanceMigrationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineInstanceMigration>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readNamespacedVirtualMachineInstancePreset
     * @throws ApiException if the response code was not in [200, 299]
     */
    readNamespacedVirtualMachineInstancePresetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineInstancePreset>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readNamespacedVirtualMachineInstanceReplicaSet
     * @throws ApiException if the response code was not in [200, 299]
     */
    readNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineInstanceReplicaSet>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readNamespacedVirtualMachineInstancetype
     * @throws ApiException if the response code was not in [200, 299]
     */
    readNamespacedVirtualMachineInstancetypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineInstancetype>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readNamespacedVirtualMachinePool
     * @throws ApiException if the response code was not in [200, 299]
     */
    readNamespacedVirtualMachinePoolWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1alpha1VirtualMachinePool>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readNamespacedVirtualMachinePreference
     * @throws ApiException if the response code was not in [200, 299]
     */
    readNamespacedVirtualMachinePreferenceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachinePreference>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readNamespacedVirtualMachineRestore
     * @throws ApiException if the response code was not in [200, 299]
     */
    readNamespacedVirtualMachineRestoreWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineRestore>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readNamespacedVirtualMachineSnapshot
     * @throws ApiException if the response code was not in [200, 299]
     */
    readNamespacedVirtualMachineSnapshotWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineSnapshot>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readNamespacedVirtualMachineSnapshotContent
     * @throws ApiException if the response code was not in [200, 299]
     */
    readNamespacedVirtualMachineSnapshotContentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineSnapshotContent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readVirtualMachineClone
     * @throws ApiException if the response code was not in [200, 299]
     */
    readVirtualMachineCloneWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1alpha1VirtualMachineClone>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readVirtualMachineClusterInstancetype
     * @throws ApiException if the response code was not in [200, 299]
     */
    readVirtualMachineClusterInstancetypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineClusterInstancetype>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readVirtualMachineClusterPreference
     * @throws ApiException if the response code was not in [200, 299]
     */
    readVirtualMachineClusterPreferenceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineClusterPreference>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceMigrationPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceMigrationPolicyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1alpha1MigrationPolicy>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceNamespacedKubeVirt
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceNamespacedKubeVirtWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1KubeVirt>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceNamespacedVirtualMachine
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceNamespacedVirtualMachineWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachine>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceNamespacedVirtualMachineExport
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceNamespacedVirtualMachineExportWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineExport>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceNamespacedVirtualMachineInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceNamespacedVirtualMachineInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineInstance>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceNamespacedVirtualMachineInstanceMigration
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceNamespacedVirtualMachineInstanceMigrationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineInstanceMigration>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceNamespacedVirtualMachineInstancePreset
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceNamespacedVirtualMachineInstancePresetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineInstancePreset>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceNamespacedVirtualMachineInstanceReplicaSet
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineInstanceReplicaSet>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceNamespacedVirtualMachineInstancetype
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceNamespacedVirtualMachineInstancetypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineInstancetype>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceNamespacedVirtualMachinePool
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceNamespacedVirtualMachinePoolWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1alpha1VirtualMachinePool>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceNamespacedVirtualMachinePreference
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceNamespacedVirtualMachinePreferenceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachinePreference>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceNamespacedVirtualMachineRestore
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceNamespacedVirtualMachineRestoreWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineRestore>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceNamespacedVirtualMachineSnapshot
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceNamespacedVirtualMachineSnapshotWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineSnapshot>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceNamespacedVirtualMachineSnapshotContent
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceNamespacedVirtualMachineSnapshotContentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineSnapshotContent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceVirtualMachineClone
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceVirtualMachineCloneWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1alpha1VirtualMachineClone>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceVirtualMachineClusterInstancetype
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceVirtualMachineClusterInstancetypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineClusterInstancetype>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceVirtualMachineClusterPreference
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceVirtualMachineClusterPreferenceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1beta1VirtualMachineClusterPreference>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1CheckHealth
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1CheckHealthWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1Console
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1ConsoleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1ExpandSpec
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1ExpandSpecWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1Filesystemlist
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1FilesystemlistWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineInstanceFileSystemList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1Freeze
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1FreezeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GetSubAPIGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1GetSubAPIGroupWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIGroup>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1Guestfs
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1GuestfsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1Guestosinfo
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1GuestosinfoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineInstanceGuestAgentInfo>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1MemoryDump
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1MemoryDumpWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1Migrate
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1MigrateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1Pause
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1PauseWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1RemoveMemoryDump
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1RemoveMemoryDumpWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1Restart
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1RestartWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1SEVFetchCertChain
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1SEVFetchCertChainWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1SEVPlatformInfo>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1SEVInjectLaunchSecret
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1SEVInjectLaunchSecretWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1SEVQueryLaunchMeasurement
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1SEVQueryLaunchMeasurementWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1SEVMeasurementInfo>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1SEVSetupSession
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1SEVSetupSessionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1SoftReboot
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1SoftRebootWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1Start
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1StartWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1Stop
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1StopWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1Unfreeze
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1UnfreezeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1Unpause
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1UnpauseWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1Userlist
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1UserlistWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineInstanceGuestOSUserList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1VNC
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1VNCWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1VNCScreenshot
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1VNCScreenshotWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1VSOCK
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1VSOCKWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1Version
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1VersionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3CheckHealth
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3CheckHealthWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3Console
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3ConsoleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3ExpandSpec
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3ExpandSpecWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3Filesystemlist
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3FilesystemlistWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineInstanceFileSystemList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3Freeze
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3FreezeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3Guestfs
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3GuestfsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3Guestosinfo
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3GuestosinfoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineInstanceGuestAgentInfo>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3MemoryDump
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3MemoryDumpWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3Migrate
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3MigrateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3Pause
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3PauseWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3RemoveMemoryDump
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3RemoveMemoryDumpWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3Restart
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3RestartWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3SEVFetchCertChain
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3SEVFetchCertChainWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1SEVPlatformInfo>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3SEVInjectLaunchSecret
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3SEVInjectLaunchSecretWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3SEVQueryLaunchMeasurement
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3SEVQueryLaunchMeasurementWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1SEVMeasurementInfo>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3SEVSetupSession
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3SEVSetupSessionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3SoftReboot
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3SoftRebootWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3Start
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3StartWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3Stop
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3StopWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3Unfreeze
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3UnfreezeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3Unpause
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3UnpauseWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3Userlist
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3UserlistWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1VirtualMachineInstanceGuestOSUserList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3VNC
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3VNCWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3VNCScreenshot
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3VNCScreenshotWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3VSOCK
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3VSOCKWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3Version
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3VersionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3dumpClusterProfiler
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3dumpClusterProfilerWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3getAPISubResources
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3getAPISubResourcesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIResourceList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3startClusterProfiler
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3startClusterProfilerWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3stopClusterProfiler
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3stopClusterProfilerWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3usbredir
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3usbredirWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3vmAddvolume
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3vmAddvolumeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3vmExpandSpec
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3vmExpandSpecWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3vmPortForward
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3vmPortForwardWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3vmPortForwardWithProtocol
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3vmPortForwardWithProtocolWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3vmRemovevolume
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3vmRemovevolumeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3vmiAddvolume
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3vmiAddvolumeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3vmiPortForward
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3vmiPortForwardWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3vmiPortForwardWithProtocol
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3vmiPortForwardWithProtocolWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1alpha3vmiRemovevolume
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1alpha3vmiRemovevolumeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1dumpClusterProfiler
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1dumpClusterProfilerWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1getAPISubResources
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1getAPISubResourcesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIResourceList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1startClusterProfiler
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1startClusterProfilerWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1stopClusterProfiler
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1stopClusterProfilerWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1usbredir
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1usbredirWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1vmAddvolume
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1vmAddvolumeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1vmExpandSpec
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1vmExpandSpecWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1vmPortForward
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1vmPortForwardWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1vmPortForwardWithProtocol
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1vmPortForwardWithProtocolWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1vmRemovevolume
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1vmRemovevolumeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1vmiAddvolume
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1vmiAddvolumeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1vmiPortForward
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1vmiPortForwardWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1vmiPortForwardWithProtocol
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1vmiPortForwardWithProtocolWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1vmiRemovevolume
     * @throws ApiException if the response code was not in [200, 299]
     */
    v1vmiRemovevolumeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchKubeVirtListForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    watchKubeVirtListForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchMigrationPolicyListForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    watchMigrationPolicyListForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchNamespacedKubeVirt
     * @throws ApiException if the response code was not in [200, 299]
     */
    watchNamespacedKubeVirtWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchNamespacedVirtualMachine
     * @throws ApiException if the response code was not in [200, 299]
     */
    watchNamespacedVirtualMachineWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchNamespacedVirtualMachineExport
     * @throws ApiException if the response code was not in [200, 299]
     */
    watchNamespacedVirtualMachineExportWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchNamespacedVirtualMachineInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
    watchNamespacedVirtualMachineInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchNamespacedVirtualMachineInstanceMigration
     * @throws ApiException if the response code was not in [200, 299]
     */
    watchNamespacedVirtualMachineInstanceMigrationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchNamespacedVirtualMachineInstancePreset
     * @throws ApiException if the response code was not in [200, 299]
     */
    watchNamespacedVirtualMachineInstancePresetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchNamespacedVirtualMachineInstanceReplicaSet
     * @throws ApiException if the response code was not in [200, 299]
     */
    watchNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchNamespacedVirtualMachineInstancetype
     * @throws ApiException if the response code was not in [200, 299]
     */
    watchNamespacedVirtualMachineInstancetypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchNamespacedVirtualMachinePool
     * @throws ApiException if the response code was not in [200, 299]
     */
    watchNamespacedVirtualMachinePoolWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchNamespacedVirtualMachinePreference
     * @throws ApiException if the response code was not in [200, 299]
     */
    watchNamespacedVirtualMachinePreferenceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchNamespacedVirtualMachineRestore
     * @throws ApiException if the response code was not in [200, 299]
     */
    watchNamespacedVirtualMachineRestoreWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchNamespacedVirtualMachineSnapshot
     * @throws ApiException if the response code was not in [200, 299]
     */
    watchNamespacedVirtualMachineSnapshotWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchNamespacedVirtualMachineSnapshotContent
     * @throws ApiException if the response code was not in [200, 299]
     */
    watchNamespacedVirtualMachineSnapshotContentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchVirtualMachineCloneListForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    watchVirtualMachineCloneListForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchVirtualMachineClusterInstancetypeListForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    watchVirtualMachineClusterInstancetypeListForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchVirtualMachineClusterPreferenceListForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    watchVirtualMachineClusterPreferenceListForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchVirtualMachineExportListForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    watchVirtualMachineExportListForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchVirtualMachineInstanceListForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    watchVirtualMachineInstanceListForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchVirtualMachineInstanceMigrationListForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    watchVirtualMachineInstanceMigrationListForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchVirtualMachineInstancePresetListForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    watchVirtualMachineInstancePresetListForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchVirtualMachineInstanceReplicaSetListForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    watchVirtualMachineInstanceReplicaSetListForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchVirtualMachineInstancetypeListForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    watchVirtualMachineInstancetypeListForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchVirtualMachineListForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    watchVirtualMachineListForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchVirtualMachinePoolListForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    watchVirtualMachinePoolListForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchVirtualMachinePreferenceListForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    watchVirtualMachinePreferenceListForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchVirtualMachineRestoreListForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    watchVirtualMachineRestoreListForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchVirtualMachineSnapshotContentListForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    watchVirtualMachineSnapshotContentListForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to watchVirtualMachineSnapshotListForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    watchVirtualMachineSnapshotListForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
}
//# sourceMappingURL=DefaultApi.d.ts.map