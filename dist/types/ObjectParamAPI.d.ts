import { HttpInfo } from '../http/http.js';
import { Configuration, ConfigurationOptions } from '../configuration.js';
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
export interface DefaultApiCreateMigrationPolicyRequest {
    /**
     *
     * @type V1alpha1MigrationPolicy
     * @memberof DefaultApicreateMigrationPolicy
     */
    body: V1alpha1MigrationPolicy;
}
export interface DefaultApiCreateNamespacedKubeVirtRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApicreateNamespacedKubeVirt
     */
    namespace: string;
    /**
     *
     * @type V1KubeVirt
     * @memberof DefaultApicreateNamespacedKubeVirt
     */
    body: V1KubeVirt;
}
export interface DefaultApiCreateNamespacedVirtualMachineRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApicreateNamespacedVirtualMachine
     */
    namespace: string;
    /**
     *
     * @type V1VirtualMachine
     * @memberof DefaultApicreateNamespacedVirtualMachine
     */
    body: V1VirtualMachine;
}
export interface DefaultApiCreateNamespacedVirtualMachineExportRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApicreateNamespacedVirtualMachineExport
     */
    namespace: string;
    /**
     *
     * @type V1beta1VirtualMachineExport
     * @memberof DefaultApicreateNamespacedVirtualMachineExport
     */
    body: V1beta1VirtualMachineExport;
}
export interface DefaultApiCreateNamespacedVirtualMachineInstanceRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApicreateNamespacedVirtualMachineInstance
     */
    namespace: string;
    /**
     *
     * @type V1VirtualMachineInstance
     * @memberof DefaultApicreateNamespacedVirtualMachineInstance
     */
    body: V1VirtualMachineInstance;
}
export interface DefaultApiCreateNamespacedVirtualMachineInstanceMigrationRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApicreateNamespacedVirtualMachineInstanceMigration
     */
    namespace: string;
    /**
     *
     * @type V1VirtualMachineInstanceMigration
     * @memberof DefaultApicreateNamespacedVirtualMachineInstanceMigration
     */
    body: V1VirtualMachineInstanceMigration;
}
export interface DefaultApiCreateNamespacedVirtualMachineInstancePresetRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApicreateNamespacedVirtualMachineInstancePreset
     */
    namespace: string;
    /**
     *
     * @type V1VirtualMachineInstancePreset
     * @memberof DefaultApicreateNamespacedVirtualMachineInstancePreset
     */
    body: V1VirtualMachineInstancePreset;
}
export interface DefaultApiCreateNamespacedVirtualMachineInstanceReplicaSetRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApicreateNamespacedVirtualMachineInstanceReplicaSet
     */
    namespace: string;
    /**
     *
     * @type V1VirtualMachineInstanceReplicaSet
     * @memberof DefaultApicreateNamespacedVirtualMachineInstanceReplicaSet
     */
    body: V1VirtualMachineInstanceReplicaSet;
}
export interface DefaultApiCreateNamespacedVirtualMachineInstancetypeRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApicreateNamespacedVirtualMachineInstancetype
     */
    namespace: string;
    /**
     *
     * @type V1beta1VirtualMachineInstancetype
     * @memberof DefaultApicreateNamespacedVirtualMachineInstancetype
     */
    body: V1beta1VirtualMachineInstancetype;
}
export interface DefaultApiCreateNamespacedVirtualMachinePoolRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApicreateNamespacedVirtualMachinePool
     */
    namespace: string;
    /**
     *
     * @type V1alpha1VirtualMachinePool
     * @memberof DefaultApicreateNamespacedVirtualMachinePool
     */
    body: V1alpha1VirtualMachinePool;
}
export interface DefaultApiCreateNamespacedVirtualMachinePreferenceRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApicreateNamespacedVirtualMachinePreference
     */
    namespace: string;
    /**
     *
     * @type V1beta1VirtualMachinePreference
     * @memberof DefaultApicreateNamespacedVirtualMachinePreference
     */
    body: V1beta1VirtualMachinePreference;
}
export interface DefaultApiCreateNamespacedVirtualMachineRestoreRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApicreateNamespacedVirtualMachineRestore
     */
    namespace: string;
    /**
     *
     * @type V1beta1VirtualMachineRestore
     * @memberof DefaultApicreateNamespacedVirtualMachineRestore
     */
    body: V1beta1VirtualMachineRestore;
}
export interface DefaultApiCreateNamespacedVirtualMachineSnapshotRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApicreateNamespacedVirtualMachineSnapshot
     */
    namespace: string;
    /**
     *
     * @type V1beta1VirtualMachineSnapshot
     * @memberof DefaultApicreateNamespacedVirtualMachineSnapshot
     */
    body: V1beta1VirtualMachineSnapshot;
}
export interface DefaultApiCreateNamespacedVirtualMachineSnapshotContentRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApicreateNamespacedVirtualMachineSnapshotContent
     */
    namespace: string;
    /**
     *
     * @type V1beta1VirtualMachineSnapshotContent
     * @memberof DefaultApicreateNamespacedVirtualMachineSnapshotContent
     */
    body: V1beta1VirtualMachineSnapshotContent;
}
export interface DefaultApiCreateVirtualMachineCloneRequest {
    /**
     *
     * @type V1alpha1VirtualMachineClone
     * @memberof DefaultApicreateVirtualMachineClone
     */
    body: V1alpha1VirtualMachineClone;
}
export interface DefaultApiCreateVirtualMachineClusterInstancetypeRequest {
    /**
     *
     * @type V1beta1VirtualMachineClusterInstancetype
     * @memberof DefaultApicreateVirtualMachineClusterInstancetype
     */
    body: V1beta1VirtualMachineClusterInstancetype;
}
export interface DefaultApiCreateVirtualMachineClusterPreferenceRequest {
    /**
     *
     * @type V1beta1VirtualMachineClusterPreference
     * @memberof DefaultApicreateVirtualMachineClusterPreference
     */
    body: V1beta1VirtualMachineClusterPreference;
}
export interface DefaultApiDeleteCollectionMigrationPolicyRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionMigrationPolicy
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionMigrationPolicy
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionMigrationPolicy
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionMigrationPolicy
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionMigrationPolicy
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionMigrationPolicy
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionMigrationPolicy
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionMigrationPolicy
     */
    watch?: boolean;
}
export interface DefaultApiDeleteCollectionNamespacedKubeVirtRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedKubeVirt
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedKubeVirt
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedKubeVirt
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedKubeVirt
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedKubeVirt
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedKubeVirt
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedKubeVirt
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedKubeVirt
     */
    watch?: boolean;
}
export interface DefaultApiDeleteCollectionNamespacedVirtualMachineRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachine
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachine
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachine
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachine
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachine
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachine
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachine
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachine
     */
    watch?: boolean;
}
export interface DefaultApiDeleteCollectionNamespacedVirtualMachineExportRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineExport
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineExport
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineExport
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineExport
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineExport
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineExport
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineExport
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineExport
     */
    watch?: boolean;
}
export interface DefaultApiDeleteCollectionNamespacedVirtualMachineInstanceRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstance
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstance
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstance
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstance
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstance
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstance
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstance
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstance
     */
    watch?: boolean;
}
export interface DefaultApiDeleteCollectionNamespacedVirtualMachineInstanceMigrationRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceMigration
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceMigration
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceMigration
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceMigration
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceMigration
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceMigration
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceMigration
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceMigration
     */
    watch?: boolean;
}
export interface DefaultApiDeleteCollectionNamespacedVirtualMachineInstancePresetRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstancePreset
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstancePreset
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstancePreset
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstancePreset
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstancePreset
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstancePreset
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstancePreset
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstancePreset
     */
    watch?: boolean;
}
export interface DefaultApiDeleteCollectionNamespacedVirtualMachineInstanceReplicaSetRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceReplicaSet
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceReplicaSet
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceReplicaSet
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceReplicaSet
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceReplicaSet
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceReplicaSet
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceReplicaSet
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceReplicaSet
     */
    watch?: boolean;
}
export interface DefaultApiDeleteCollectionNamespacedVirtualMachineInstancetypeRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstancetype
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstancetype
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstancetype
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstancetype
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstancetype
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstancetype
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstancetype
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstancetype
     */
    watch?: boolean;
}
export interface DefaultApiDeleteCollectionNamespacedVirtualMachinePoolRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachinePool
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachinePool
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachinePool
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachinePool
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachinePool
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachinePool
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachinePool
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachinePool
     */
    watch?: boolean;
}
export interface DefaultApiDeleteCollectionNamespacedVirtualMachinePreferenceRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachinePreference
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachinePreference
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachinePreference
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachinePreference
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachinePreference
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachinePreference
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachinePreference
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachinePreference
     */
    watch?: boolean;
}
export interface DefaultApiDeleteCollectionNamespacedVirtualMachineRestoreRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineRestore
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineRestore
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineRestore
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineRestore
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineRestore
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineRestore
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineRestore
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineRestore
     */
    watch?: boolean;
}
export interface DefaultApiDeleteCollectionNamespacedVirtualMachineSnapshotRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshot
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshot
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshot
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshot
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshot
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshot
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshot
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshot
     */
    watch?: boolean;
}
export interface DefaultApiDeleteCollectionNamespacedVirtualMachineSnapshotContentRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshotContent
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshotContent
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshotContent
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshotContent
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshotContent
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshotContent
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshotContent
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshotContent
     */
    watch?: boolean;
}
export interface DefaultApiDeleteCollectionVirtualMachineCloneRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionVirtualMachineClone
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionVirtualMachineClone
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionVirtualMachineClone
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionVirtualMachineClone
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionVirtualMachineClone
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionVirtualMachineClone
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionVirtualMachineClone
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionVirtualMachineClone
     */
    watch?: boolean;
}
export interface DefaultApiDeleteCollectionVirtualMachineClusterInstancetypeRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionVirtualMachineClusterInstancetype
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionVirtualMachineClusterInstancetype
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionVirtualMachineClusterInstancetype
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionVirtualMachineClusterInstancetype
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionVirtualMachineClusterInstancetype
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionVirtualMachineClusterInstancetype
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionVirtualMachineClusterInstancetype
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionVirtualMachineClusterInstancetype
     */
    watch?: boolean;
}
export interface DefaultApiDeleteCollectionVirtualMachineClusterPreferenceRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionVirtualMachineClusterPreference
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionVirtualMachineClusterPreference
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionVirtualMachineClusterPreference
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionVirtualMachineClusterPreference
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionVirtualMachineClusterPreference
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCollectionVirtualMachineClusterPreference
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCollectionVirtualMachineClusterPreference
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteCollectionVirtualMachineClusterPreference
     */
    watch?: boolean;
}
export interface DefaultApiDeleteMigrationPolicyRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteMigrationPolicy
     */
    name: string;
    /**
     *
     * @type K8sIoApimachineryPkgApisMetaV1DeleteOptions
     * @memberof DefaultApideleteMigrationPolicy
     */
    body: K8sIoApimachineryPkgApisMetaV1DeleteOptions;
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteMigrationPolicy
     */
    gracePeriodSeconds?: number;
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteMigrationPolicy
     */
    orphanDependents?: boolean;
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteMigrationPolicy
     */
    propagationPolicy?: string;
}
export interface DefaultApiDeleteNamespacedKubeVirtRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedKubeVirt
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedKubeVirt
     */
    namespace: string;
    /**
     *
     * @type K8sIoApimachineryPkgApisMetaV1DeleteOptions
     * @memberof DefaultApideleteNamespacedKubeVirt
     */
    body: K8sIoApimachineryPkgApisMetaV1DeleteOptions;
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteNamespacedKubeVirt
     */
    gracePeriodSeconds?: number;
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteNamespacedKubeVirt
     */
    orphanDependents?: boolean;
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedKubeVirt
     */
    propagationPolicy?: string;
}
export interface DefaultApiDeleteNamespacedVirtualMachineRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachine
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachine
     */
    namespace: string;
    /**
     *
     * @type K8sIoApimachineryPkgApisMetaV1DeleteOptions
     * @memberof DefaultApideleteNamespacedVirtualMachine
     */
    body: K8sIoApimachineryPkgApisMetaV1DeleteOptions;
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteNamespacedVirtualMachine
     */
    gracePeriodSeconds?: number;
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteNamespacedVirtualMachine
     */
    orphanDependents?: boolean;
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachine
     */
    propagationPolicy?: string;
}
export interface DefaultApiDeleteNamespacedVirtualMachineExportRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineExport
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineExport
     */
    namespace: string;
    /**
     *
     * @type K8sIoApimachineryPkgApisMetaV1DeleteOptions
     * @memberof DefaultApideleteNamespacedVirtualMachineExport
     */
    body: K8sIoApimachineryPkgApisMetaV1DeleteOptions;
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteNamespacedVirtualMachineExport
     */
    gracePeriodSeconds?: number;
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteNamespacedVirtualMachineExport
     */
    orphanDependents?: boolean;
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineExport
     */
    propagationPolicy?: string;
}
export interface DefaultApiDeleteNamespacedVirtualMachineInstanceRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineInstance
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineInstance
     */
    namespace: string;
    /**
     *
     * @type K8sIoApimachineryPkgApisMetaV1DeleteOptions
     * @memberof DefaultApideleteNamespacedVirtualMachineInstance
     */
    body: K8sIoApimachineryPkgApisMetaV1DeleteOptions;
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteNamespacedVirtualMachineInstance
     */
    gracePeriodSeconds?: number;
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteNamespacedVirtualMachineInstance
     */
    orphanDependents?: boolean;
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineInstance
     */
    propagationPolicy?: string;
}
export interface DefaultApiDeleteNamespacedVirtualMachineInstanceMigrationRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineInstanceMigration
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineInstanceMigration
     */
    namespace: string;
    /**
     *
     * @type K8sIoApimachineryPkgApisMetaV1DeleteOptions
     * @memberof DefaultApideleteNamespacedVirtualMachineInstanceMigration
     */
    body: K8sIoApimachineryPkgApisMetaV1DeleteOptions;
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteNamespacedVirtualMachineInstanceMigration
     */
    gracePeriodSeconds?: number;
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteNamespacedVirtualMachineInstanceMigration
     */
    orphanDependents?: boolean;
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineInstanceMigration
     */
    propagationPolicy?: string;
}
export interface DefaultApiDeleteNamespacedVirtualMachineInstancePresetRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineInstancePreset
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineInstancePreset
     */
    namespace: string;
    /**
     *
     * @type K8sIoApimachineryPkgApisMetaV1DeleteOptions
     * @memberof DefaultApideleteNamespacedVirtualMachineInstancePreset
     */
    body: K8sIoApimachineryPkgApisMetaV1DeleteOptions;
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteNamespacedVirtualMachineInstancePreset
     */
    gracePeriodSeconds?: number;
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteNamespacedVirtualMachineInstancePreset
     */
    orphanDependents?: boolean;
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineInstancePreset
     */
    propagationPolicy?: string;
}
export interface DefaultApiDeleteNamespacedVirtualMachineInstanceReplicaSetRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineInstanceReplicaSet
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineInstanceReplicaSet
     */
    namespace: string;
    /**
     *
     * @type K8sIoApimachineryPkgApisMetaV1DeleteOptions
     * @memberof DefaultApideleteNamespacedVirtualMachineInstanceReplicaSet
     */
    body: K8sIoApimachineryPkgApisMetaV1DeleteOptions;
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteNamespacedVirtualMachineInstanceReplicaSet
     */
    gracePeriodSeconds?: number;
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteNamespacedVirtualMachineInstanceReplicaSet
     */
    orphanDependents?: boolean;
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineInstanceReplicaSet
     */
    propagationPolicy?: string;
}
export interface DefaultApiDeleteNamespacedVirtualMachineInstancetypeRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineInstancetype
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineInstancetype
     */
    namespace: string;
    /**
     *
     * @type K8sIoApimachineryPkgApisMetaV1DeleteOptions
     * @memberof DefaultApideleteNamespacedVirtualMachineInstancetype
     */
    body: K8sIoApimachineryPkgApisMetaV1DeleteOptions;
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteNamespacedVirtualMachineInstancetype
     */
    gracePeriodSeconds?: number;
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteNamespacedVirtualMachineInstancetype
     */
    orphanDependents?: boolean;
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineInstancetype
     */
    propagationPolicy?: string;
}
export interface DefaultApiDeleteNamespacedVirtualMachinePoolRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachinePool
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachinePool
     */
    namespace: string;
    /**
     *
     * @type K8sIoApimachineryPkgApisMetaV1DeleteOptions
     * @memberof DefaultApideleteNamespacedVirtualMachinePool
     */
    body: K8sIoApimachineryPkgApisMetaV1DeleteOptions;
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteNamespacedVirtualMachinePool
     */
    gracePeriodSeconds?: number;
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteNamespacedVirtualMachinePool
     */
    orphanDependents?: boolean;
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachinePool
     */
    propagationPolicy?: string;
}
export interface DefaultApiDeleteNamespacedVirtualMachinePreferenceRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachinePreference
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachinePreference
     */
    namespace: string;
    /**
     *
     * @type K8sIoApimachineryPkgApisMetaV1DeleteOptions
     * @memberof DefaultApideleteNamespacedVirtualMachinePreference
     */
    body: K8sIoApimachineryPkgApisMetaV1DeleteOptions;
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteNamespacedVirtualMachinePreference
     */
    gracePeriodSeconds?: number;
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteNamespacedVirtualMachinePreference
     */
    orphanDependents?: boolean;
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachinePreference
     */
    propagationPolicy?: string;
}
export interface DefaultApiDeleteNamespacedVirtualMachineRestoreRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineRestore
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineRestore
     */
    namespace: string;
    /**
     *
     * @type K8sIoApimachineryPkgApisMetaV1DeleteOptions
     * @memberof DefaultApideleteNamespacedVirtualMachineRestore
     */
    body: K8sIoApimachineryPkgApisMetaV1DeleteOptions;
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteNamespacedVirtualMachineRestore
     */
    gracePeriodSeconds?: number;
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteNamespacedVirtualMachineRestore
     */
    orphanDependents?: boolean;
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineRestore
     */
    propagationPolicy?: string;
}
export interface DefaultApiDeleteNamespacedVirtualMachineSnapshotRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineSnapshot
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineSnapshot
     */
    namespace: string;
    /**
     *
     * @type K8sIoApimachineryPkgApisMetaV1DeleteOptions
     * @memberof DefaultApideleteNamespacedVirtualMachineSnapshot
     */
    body: K8sIoApimachineryPkgApisMetaV1DeleteOptions;
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteNamespacedVirtualMachineSnapshot
     */
    gracePeriodSeconds?: number;
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteNamespacedVirtualMachineSnapshot
     */
    orphanDependents?: boolean;
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineSnapshot
     */
    propagationPolicy?: string;
}
export interface DefaultApiDeleteNamespacedVirtualMachineSnapshotContentRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineSnapshotContent
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineSnapshotContent
     */
    namespace: string;
    /**
     *
     * @type K8sIoApimachineryPkgApisMetaV1DeleteOptions
     * @memberof DefaultApideleteNamespacedVirtualMachineSnapshotContent
     */
    body: K8sIoApimachineryPkgApisMetaV1DeleteOptions;
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteNamespacedVirtualMachineSnapshotContent
     */
    gracePeriodSeconds?: number;
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteNamespacedVirtualMachineSnapshotContent
     */
    orphanDependents?: boolean;
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineSnapshotContent
     */
    propagationPolicy?: string;
}
export interface DefaultApiDeleteVirtualMachineCloneRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteVirtualMachineClone
     */
    name: string;
    /**
     *
     * @type K8sIoApimachineryPkgApisMetaV1DeleteOptions
     * @memberof DefaultApideleteVirtualMachineClone
     */
    body: K8sIoApimachineryPkgApisMetaV1DeleteOptions;
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteVirtualMachineClone
     */
    gracePeriodSeconds?: number;
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteVirtualMachineClone
     */
    orphanDependents?: boolean;
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteVirtualMachineClone
     */
    propagationPolicy?: string;
}
export interface DefaultApiDeleteVirtualMachineClusterInstancetypeRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteVirtualMachineClusterInstancetype
     */
    name: string;
    /**
     *
     * @type K8sIoApimachineryPkgApisMetaV1DeleteOptions
     * @memberof DefaultApideleteVirtualMachineClusterInstancetype
     */
    body: K8sIoApimachineryPkgApisMetaV1DeleteOptions;
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteVirtualMachineClusterInstancetype
     */
    gracePeriodSeconds?: number;
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteVirtualMachineClusterInstancetype
     */
    orphanDependents?: boolean;
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteVirtualMachineClusterInstancetype
     */
    propagationPolicy?: string;
}
export interface DefaultApiDeleteVirtualMachineClusterPreferenceRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteVirtualMachineClusterPreference
     */
    name: string;
    /**
     *
     * @type K8sIoApimachineryPkgApisMetaV1DeleteOptions
     * @memberof DefaultApideleteVirtualMachineClusterPreference
     */
    body: K8sIoApimachineryPkgApisMetaV1DeleteOptions;
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteVirtualMachineClusterPreference
     */
    gracePeriodSeconds?: number;
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApideleteVirtualMachineClusterPreference
     */
    orphanDependents?: boolean;
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteVirtualMachineClusterPreference
     */
    propagationPolicy?: string;
}
export interface DefaultApiFunc13Request {
}
export interface DefaultApiFunc6Request {
}
export interface DefaultApiGetAPIGroupCloneKubevirtIoRequest {
}
export interface DefaultApiGetAPIGroupExportKubevirtIoRequest {
}
export interface DefaultApiGetAPIGroupInstancetypeKubevirtIoRequest {
}
export interface DefaultApiGetAPIGroupKubevirtIoRequest {
}
export interface DefaultApiGetAPIGroupListRequest {
}
export interface DefaultApiGetAPIGroupMigrationsKubevirtIoRequest {
}
export interface DefaultApiGetAPIGroupPoolKubevirtIoRequest {
}
export interface DefaultApiGetAPIGroupSnapshotKubevirtIoRequest {
}
export interface DefaultApiGetAPIResourcesCloneKubevirtIoV1alpha1Request {
}
export interface DefaultApiGetAPIResourcesExportKubevirtIoV1beta1Request {
}
export interface DefaultApiGetAPIResourcesInstancetypeKubevirtIoV1beta1Request {
}
export interface DefaultApiGetAPIResourcesKubevirtIoV1Request {
}
export interface DefaultApiGetAPIResourcesMigrationsKubevirtIoV1alpha1Request {
}
export interface DefaultApiGetAPIResourcesPoolKubevirtIoV1alpha1Request {
}
export interface DefaultApiGetAPIResourcesSnapshotKubevirtIoV1beta1Request {
}
export interface DefaultApiGetRootPathsRequest {
}
export interface DefaultApiHandleDumpProfilerRequest {
}
export interface DefaultApiHandleStartProfilerRequest {
}
export interface DefaultApiHandleStopProfilerRequest {
}
export interface DefaultApiListKubeVirtForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistKubeVirtForAllNamespaces
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistKubeVirtForAllNamespaces
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistKubeVirtForAllNamespaces
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistKubeVirtForAllNamespaces
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistKubeVirtForAllNamespaces
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistKubeVirtForAllNamespaces
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistKubeVirtForAllNamespaces
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistKubeVirtForAllNamespaces
     */
    watch?: boolean;
}
export interface DefaultApiListMigrationPolicyRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistMigrationPolicy
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistMigrationPolicy
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistMigrationPolicy
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistMigrationPolicy
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistMigrationPolicy
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistMigrationPolicy
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistMigrationPolicy
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistMigrationPolicy
     */
    watch?: boolean;
}
export interface DefaultApiListNamespacedKubeVirtRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedKubeVirt
     */
    namespace: string;
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedKubeVirt
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedKubeVirt
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistNamespacedKubeVirt
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedKubeVirt
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistNamespacedKubeVirt
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedKubeVirt
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistNamespacedKubeVirt
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistNamespacedKubeVirt
     */
    watch?: boolean;
}
export interface DefaultApiListNamespacedVirtualMachineRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachine
     */
    namespace: string;
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachine
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachine
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachine
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachine
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachine
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachine
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachine
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachine
     */
    watch?: boolean;
}
export interface DefaultApiListNamespacedVirtualMachineExportRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineExport
     */
    namespace: string;
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineExport
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineExport
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineExport
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineExport
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineExport
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineExport
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineExport
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineExport
     */
    watch?: boolean;
}
export interface DefaultApiListNamespacedVirtualMachineInstanceRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstance
     */
    namespace: string;
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstance
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstance
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineInstance
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstance
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineInstance
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstance
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineInstance
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineInstance
     */
    watch?: boolean;
}
export interface DefaultApiListNamespacedVirtualMachineInstanceMigrationRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceMigration
     */
    namespace: string;
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceMigration
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceMigration
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceMigration
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceMigration
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceMigration
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceMigration
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceMigration
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceMigration
     */
    watch?: boolean;
}
export interface DefaultApiListNamespacedVirtualMachineInstancePresetRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstancePreset
     */
    namespace: string;
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstancePreset
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstancePreset
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineInstancePreset
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstancePreset
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineInstancePreset
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstancePreset
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineInstancePreset
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineInstancePreset
     */
    watch?: boolean;
}
export interface DefaultApiListNamespacedVirtualMachineInstanceReplicaSetRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceReplicaSet
     */
    namespace: string;
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceReplicaSet
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceReplicaSet
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceReplicaSet
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceReplicaSet
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceReplicaSet
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceReplicaSet
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceReplicaSet
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceReplicaSet
     */
    watch?: boolean;
}
export interface DefaultApiListNamespacedVirtualMachineInstancetypeRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstancetype
     */
    namespace: string;
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstancetype
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstancetype
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineInstancetype
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstancetype
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineInstancetype
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstancetype
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineInstancetype
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineInstancetype
     */
    watch?: boolean;
}
export interface DefaultApiListNamespacedVirtualMachinePoolRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachinePool
     */
    namespace: string;
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachinePool
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachinePool
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachinePool
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachinePool
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachinePool
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachinePool
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachinePool
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachinePool
     */
    watch?: boolean;
}
export interface DefaultApiListNamespacedVirtualMachinePreferenceRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachinePreference
     */
    namespace: string;
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachinePreference
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachinePreference
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachinePreference
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachinePreference
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachinePreference
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachinePreference
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachinePreference
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachinePreference
     */
    watch?: boolean;
}
export interface DefaultApiListNamespacedVirtualMachineRestoreRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineRestore
     */
    namespace: string;
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineRestore
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineRestore
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineRestore
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineRestore
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineRestore
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineRestore
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineRestore
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineRestore
     */
    watch?: boolean;
}
export interface DefaultApiListNamespacedVirtualMachineSnapshotRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshot
     */
    namespace: string;
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshot
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshot
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshot
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshot
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshot
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshot
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshot
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshot
     */
    watch?: boolean;
}
export interface DefaultApiListNamespacedVirtualMachineSnapshotContentRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshotContent
     */
    namespace: string;
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshotContent
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshotContent
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshotContent
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshotContent
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshotContent
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshotContent
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshotContent
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshotContent
     */
    watch?: boolean;
}
export interface DefaultApiListVirtualMachineCloneRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineClone
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineClone
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistVirtualMachineClone
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineClone
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistVirtualMachineClone
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineClone
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistVirtualMachineClone
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistVirtualMachineClone
     */
    watch?: boolean;
}
export interface DefaultApiListVirtualMachineClusterInstancetypeRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineClusterInstancetype
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineClusterInstancetype
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistVirtualMachineClusterInstancetype
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineClusterInstancetype
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistVirtualMachineClusterInstancetype
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineClusterInstancetype
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistVirtualMachineClusterInstancetype
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistVirtualMachineClusterInstancetype
     */
    watch?: boolean;
}
export interface DefaultApiListVirtualMachineClusterPreferenceRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineClusterPreference
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineClusterPreference
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistVirtualMachineClusterPreference
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineClusterPreference
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistVirtualMachineClusterPreference
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineClusterPreference
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistVirtualMachineClusterPreference
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistVirtualMachineClusterPreference
     */
    watch?: boolean;
}
export interface DefaultApiListVirtualMachineExportForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineExportForAllNamespaces
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineExportForAllNamespaces
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistVirtualMachineExportForAllNamespaces
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineExportForAllNamespaces
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistVirtualMachineExportForAllNamespaces
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineExportForAllNamespaces
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistVirtualMachineExportForAllNamespaces
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistVirtualMachineExportForAllNamespaces
     */
    watch?: boolean;
}
export interface DefaultApiListVirtualMachineForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineForAllNamespaces
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineForAllNamespaces
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistVirtualMachineForAllNamespaces
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineForAllNamespaces
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistVirtualMachineForAllNamespaces
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineForAllNamespaces
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistVirtualMachineForAllNamespaces
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistVirtualMachineForAllNamespaces
     */
    watch?: boolean;
}
export interface DefaultApiListVirtualMachineInstanceForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineInstanceForAllNamespaces
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineInstanceForAllNamespaces
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistVirtualMachineInstanceForAllNamespaces
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineInstanceForAllNamespaces
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistVirtualMachineInstanceForAllNamespaces
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineInstanceForAllNamespaces
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistVirtualMachineInstanceForAllNamespaces
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistVirtualMachineInstanceForAllNamespaces
     */
    watch?: boolean;
}
export interface DefaultApiListVirtualMachineInstanceMigrationForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineInstanceMigrationForAllNamespaces
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineInstanceMigrationForAllNamespaces
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistVirtualMachineInstanceMigrationForAllNamespaces
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineInstanceMigrationForAllNamespaces
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistVirtualMachineInstanceMigrationForAllNamespaces
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineInstanceMigrationForAllNamespaces
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistVirtualMachineInstanceMigrationForAllNamespaces
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistVirtualMachineInstanceMigrationForAllNamespaces
     */
    watch?: boolean;
}
export interface DefaultApiListVirtualMachineInstancePresetForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineInstancePresetForAllNamespaces
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineInstancePresetForAllNamespaces
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistVirtualMachineInstancePresetForAllNamespaces
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineInstancePresetForAllNamespaces
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistVirtualMachineInstancePresetForAllNamespaces
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineInstancePresetForAllNamespaces
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistVirtualMachineInstancePresetForAllNamespaces
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistVirtualMachineInstancePresetForAllNamespaces
     */
    watch?: boolean;
}
export interface DefaultApiListVirtualMachineInstanceReplicaSetForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineInstanceReplicaSetForAllNamespaces
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineInstanceReplicaSetForAllNamespaces
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistVirtualMachineInstanceReplicaSetForAllNamespaces
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineInstanceReplicaSetForAllNamespaces
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistVirtualMachineInstanceReplicaSetForAllNamespaces
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineInstanceReplicaSetForAllNamespaces
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistVirtualMachineInstanceReplicaSetForAllNamespaces
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistVirtualMachineInstanceReplicaSetForAllNamespaces
     */
    watch?: boolean;
}
export interface DefaultApiListVirtualMachineInstancetypeForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineInstancetypeForAllNamespaces
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineInstancetypeForAllNamespaces
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistVirtualMachineInstancetypeForAllNamespaces
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineInstancetypeForAllNamespaces
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistVirtualMachineInstancetypeForAllNamespaces
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineInstancetypeForAllNamespaces
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistVirtualMachineInstancetypeForAllNamespaces
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistVirtualMachineInstancetypeForAllNamespaces
     */
    watch?: boolean;
}
export interface DefaultApiListVirtualMachinePoolForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachinePoolForAllNamespaces
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachinePoolForAllNamespaces
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistVirtualMachinePoolForAllNamespaces
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachinePoolForAllNamespaces
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistVirtualMachinePoolForAllNamespaces
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachinePoolForAllNamespaces
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistVirtualMachinePoolForAllNamespaces
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistVirtualMachinePoolForAllNamespaces
     */
    watch?: boolean;
}
export interface DefaultApiListVirtualMachinePreferenceForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachinePreferenceForAllNamespaces
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachinePreferenceForAllNamespaces
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistVirtualMachinePreferenceForAllNamespaces
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachinePreferenceForAllNamespaces
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistVirtualMachinePreferenceForAllNamespaces
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachinePreferenceForAllNamespaces
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistVirtualMachinePreferenceForAllNamespaces
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistVirtualMachinePreferenceForAllNamespaces
     */
    watch?: boolean;
}
export interface DefaultApiListVirtualMachineRestoreForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineRestoreForAllNamespaces
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineRestoreForAllNamespaces
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistVirtualMachineRestoreForAllNamespaces
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineRestoreForAllNamespaces
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistVirtualMachineRestoreForAllNamespaces
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineRestoreForAllNamespaces
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistVirtualMachineRestoreForAllNamespaces
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistVirtualMachineRestoreForAllNamespaces
     */
    watch?: boolean;
}
export interface DefaultApiListVirtualMachineSnapshotContentForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineSnapshotContentForAllNamespaces
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineSnapshotContentForAllNamespaces
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistVirtualMachineSnapshotContentForAllNamespaces
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineSnapshotContentForAllNamespaces
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistVirtualMachineSnapshotContentForAllNamespaces
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineSnapshotContentForAllNamespaces
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistVirtualMachineSnapshotContentForAllNamespaces
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistVirtualMachineSnapshotContentForAllNamespaces
     */
    watch?: boolean;
}
export interface DefaultApiListVirtualMachineSnapshotForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineSnapshotForAllNamespaces
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineSnapshotForAllNamespaces
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistVirtualMachineSnapshotForAllNamespaces
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineSnapshotForAllNamespaces
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistVirtualMachineSnapshotForAllNamespaces
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistVirtualMachineSnapshotForAllNamespaces
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistVirtualMachineSnapshotForAllNamespaces
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistVirtualMachineSnapshotForAllNamespaces
     */
    watch?: boolean;
}
export interface DefaultApiPatchMigrationPolicyRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApipatchMigrationPolicy
     */
    name: string;
    /**
     *
     * @type any
     * @memberof DefaultApipatchMigrationPolicy
     */
    body: any;
}
export interface DefaultApiPatchNamespacedKubeVirtRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApipatchNamespacedKubeVirt
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApipatchNamespacedKubeVirt
     */
    namespace: string;
    /**
     *
     * @type any
     * @memberof DefaultApipatchNamespacedKubeVirt
     */
    body: any;
}
export interface DefaultApiPatchNamespacedVirtualMachineRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachine
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachine
     */
    namespace: string;
    /**
     *
     * @type any
     * @memberof DefaultApipatchNamespacedVirtualMachine
     */
    body: any;
}
export interface DefaultApiPatchNamespacedVirtualMachineExportRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineExport
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineExport
     */
    namespace: string;
    /**
     *
     * @type any
     * @memberof DefaultApipatchNamespacedVirtualMachineExport
     */
    body: any;
}
export interface DefaultApiPatchNamespacedVirtualMachineInstanceRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineInstance
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineInstance
     */
    namespace: string;
    /**
     *
     * @type any
     * @memberof DefaultApipatchNamespacedVirtualMachineInstance
     */
    body: any;
}
export interface DefaultApiPatchNamespacedVirtualMachineInstanceMigrationRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineInstanceMigration
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineInstanceMigration
     */
    namespace: string;
    /**
     *
     * @type any
     * @memberof DefaultApipatchNamespacedVirtualMachineInstanceMigration
     */
    body: any;
}
export interface DefaultApiPatchNamespacedVirtualMachineInstancePresetRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineInstancePreset
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineInstancePreset
     */
    namespace: string;
    /**
     *
     * @type any
     * @memberof DefaultApipatchNamespacedVirtualMachineInstancePreset
     */
    body: any;
}
export interface DefaultApiPatchNamespacedVirtualMachineInstanceReplicaSetRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineInstanceReplicaSet
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineInstanceReplicaSet
     */
    namespace: string;
    /**
     *
     * @type any
     * @memberof DefaultApipatchNamespacedVirtualMachineInstanceReplicaSet
     */
    body: any;
}
export interface DefaultApiPatchNamespacedVirtualMachineInstancetypeRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineInstancetype
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineInstancetype
     */
    namespace: string;
    /**
     *
     * @type any
     * @memberof DefaultApipatchNamespacedVirtualMachineInstancetype
     */
    body: any;
}
export interface DefaultApiPatchNamespacedVirtualMachinePoolRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachinePool
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachinePool
     */
    namespace: string;
    /**
     *
     * @type any
     * @memberof DefaultApipatchNamespacedVirtualMachinePool
     */
    body: any;
}
export interface DefaultApiPatchNamespacedVirtualMachinePreferenceRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachinePreference
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachinePreference
     */
    namespace: string;
    /**
     *
     * @type any
     * @memberof DefaultApipatchNamespacedVirtualMachinePreference
     */
    body: any;
}
export interface DefaultApiPatchNamespacedVirtualMachineRestoreRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineRestore
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineRestore
     */
    namespace: string;
    /**
     *
     * @type any
     * @memberof DefaultApipatchNamespacedVirtualMachineRestore
     */
    body: any;
}
export interface DefaultApiPatchNamespacedVirtualMachineSnapshotRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineSnapshot
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineSnapshot
     */
    namespace: string;
    /**
     *
     * @type any
     * @memberof DefaultApipatchNamespacedVirtualMachineSnapshot
     */
    body: any;
}
export interface DefaultApiPatchNamespacedVirtualMachineSnapshotContentRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineSnapshotContent
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineSnapshotContent
     */
    namespace: string;
    /**
     *
     * @type any
     * @memberof DefaultApipatchNamespacedVirtualMachineSnapshotContent
     */
    body: any;
}
export interface DefaultApiPatchVirtualMachineCloneRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApipatchVirtualMachineClone
     */
    name: string;
    /**
     *
     * @type any
     * @memberof DefaultApipatchVirtualMachineClone
     */
    body: any;
}
export interface DefaultApiPatchVirtualMachineClusterInstancetypeRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApipatchVirtualMachineClusterInstancetype
     */
    name: string;
    /**
     *
     * @type any
     * @memberof DefaultApipatchVirtualMachineClusterInstancetype
     */
    body: any;
}
export interface DefaultApiPatchVirtualMachineClusterPreferenceRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApipatchVirtualMachineClusterPreference
     */
    name: string;
    /**
     *
     * @type any
     * @memberof DefaultApipatchVirtualMachineClusterPreference
     */
    body: any;
}
export interface DefaultApiReadMigrationPolicyRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireadMigrationPolicy
     */
    name: string;
    /**
     * Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadMigrationPolicy
     */
    exact?: boolean;
    /**
     * Should this value be exported. Export strips fields that a user can not specify.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadMigrationPolicy
     */
    _export?: boolean;
}
export interface DefaultApiReadNamespacedKubeVirtRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireadNamespacedKubeVirt
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireadNamespacedKubeVirt
     */
    namespace: string;
    /**
     * Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadNamespacedKubeVirt
     */
    exact?: boolean;
    /**
     * Should this value be exported. Export strips fields that a user can not specify.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadNamespacedKubeVirt
     */
    _export?: boolean;
}
export interface DefaultApiReadNamespacedVirtualMachineRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachine
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachine
     */
    namespace: string;
    /**
     * Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachine
     */
    exact?: boolean;
    /**
     * Should this value be exported. Export strips fields that a user can not specify.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachine
     */
    _export?: boolean;
}
export interface DefaultApiReadNamespacedVirtualMachineExportRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineExport
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineExport
     */
    namespace: string;
    /**
     * Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineExport
     */
    exact?: boolean;
    /**
     * Should this value be exported. Export strips fields that a user can not specify.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineExport
     */
    _export?: boolean;
}
export interface DefaultApiReadNamespacedVirtualMachineInstanceRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineInstance
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineInstance
     */
    namespace: string;
    /**
     * Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineInstance
     */
    exact?: boolean;
    /**
     * Should this value be exported. Export strips fields that a user can not specify.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineInstance
     */
    _export?: boolean;
}
export interface DefaultApiReadNamespacedVirtualMachineInstanceMigrationRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineInstanceMigration
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineInstanceMigration
     */
    namespace: string;
    /**
     * Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineInstanceMigration
     */
    exact?: boolean;
    /**
     * Should this value be exported. Export strips fields that a user can not specify.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineInstanceMigration
     */
    _export?: boolean;
}
export interface DefaultApiReadNamespacedVirtualMachineInstancePresetRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineInstancePreset
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineInstancePreset
     */
    namespace: string;
    /**
     * Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineInstancePreset
     */
    exact?: boolean;
    /**
     * Should this value be exported. Export strips fields that a user can not specify.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineInstancePreset
     */
    _export?: boolean;
}
export interface DefaultApiReadNamespacedVirtualMachineInstanceReplicaSetRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineInstanceReplicaSet
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineInstanceReplicaSet
     */
    namespace: string;
    /**
     * Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineInstanceReplicaSet
     */
    exact?: boolean;
    /**
     * Should this value be exported. Export strips fields that a user can not specify.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineInstanceReplicaSet
     */
    _export?: boolean;
}
export interface DefaultApiReadNamespacedVirtualMachineInstancetypeRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineInstancetype
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineInstancetype
     */
    namespace: string;
    /**
     * Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineInstancetype
     */
    exact?: boolean;
    /**
     * Should this value be exported. Export strips fields that a user can not specify.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineInstancetype
     */
    _export?: boolean;
}
export interface DefaultApiReadNamespacedVirtualMachinePoolRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachinePool
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachinePool
     */
    namespace: string;
    /**
     * Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachinePool
     */
    exact?: boolean;
    /**
     * Should this value be exported. Export strips fields that a user can not specify.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachinePool
     */
    _export?: boolean;
}
export interface DefaultApiReadNamespacedVirtualMachinePreferenceRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachinePreference
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachinePreference
     */
    namespace: string;
    /**
     * Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachinePreference
     */
    exact?: boolean;
    /**
     * Should this value be exported. Export strips fields that a user can not specify.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachinePreference
     */
    _export?: boolean;
}
export interface DefaultApiReadNamespacedVirtualMachineRestoreRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineRestore
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineRestore
     */
    namespace: string;
    /**
     * Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineRestore
     */
    exact?: boolean;
    /**
     * Should this value be exported. Export strips fields that a user can not specify.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineRestore
     */
    _export?: boolean;
}
export interface DefaultApiReadNamespacedVirtualMachineSnapshotRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineSnapshot
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineSnapshot
     */
    namespace: string;
    /**
     * Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineSnapshot
     */
    exact?: boolean;
    /**
     * Should this value be exported. Export strips fields that a user can not specify.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineSnapshot
     */
    _export?: boolean;
}
export interface DefaultApiReadNamespacedVirtualMachineSnapshotContentRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineSnapshotContent
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineSnapshotContent
     */
    namespace: string;
    /**
     * Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineSnapshotContent
     */
    exact?: boolean;
    /**
     * Should this value be exported. Export strips fields that a user can not specify.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineSnapshotContent
     */
    _export?: boolean;
}
export interface DefaultApiReadVirtualMachineCloneRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireadVirtualMachineClone
     */
    name: string;
    /**
     * Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadVirtualMachineClone
     */
    exact?: boolean;
    /**
     * Should this value be exported. Export strips fields that a user can not specify.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadVirtualMachineClone
     */
    _export?: boolean;
}
export interface DefaultApiReadVirtualMachineClusterInstancetypeRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireadVirtualMachineClusterInstancetype
     */
    name: string;
    /**
     * Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadVirtualMachineClusterInstancetype
     */
    exact?: boolean;
    /**
     * Should this value be exported. Export strips fields that a user can not specify.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadVirtualMachineClusterInstancetype
     */
    _export?: boolean;
}
export interface DefaultApiReadVirtualMachineClusterPreferenceRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireadVirtualMachineClusterPreference
     */
    name: string;
    /**
     * Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadVirtualMachineClusterPreference
     */
    exact?: boolean;
    /**
     * Should this value be exported. Export strips fields that a user can not specify.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApireadVirtualMachineClusterPreference
     */
    _export?: boolean;
}
export interface DefaultApiReplaceMigrationPolicyRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireplaceMigrationPolicy
     */
    name: string;
    /**
     *
     * @type V1alpha1MigrationPolicy
     * @memberof DefaultApireplaceMigrationPolicy
     */
    body: V1alpha1MigrationPolicy;
}
export interface DefaultApiReplaceNamespacedKubeVirtRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireplaceNamespacedKubeVirt
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireplaceNamespacedKubeVirt
     */
    namespace: string;
    /**
     *
     * @type V1KubeVirt
     * @memberof DefaultApireplaceNamespacedKubeVirt
     */
    body: V1KubeVirt;
}
export interface DefaultApiReplaceNamespacedVirtualMachineRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachine
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachine
     */
    namespace: string;
    /**
     *
     * @type V1VirtualMachine
     * @memberof DefaultApireplaceNamespacedVirtualMachine
     */
    body: V1VirtualMachine;
}
export interface DefaultApiReplaceNamespacedVirtualMachineExportRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineExport
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineExport
     */
    namespace: string;
    /**
     *
     * @type V1beta1VirtualMachineExport
     * @memberof DefaultApireplaceNamespacedVirtualMachineExport
     */
    body: V1beta1VirtualMachineExport;
}
export interface DefaultApiReplaceNamespacedVirtualMachineInstanceRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineInstance
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineInstance
     */
    namespace: string;
    /**
     *
     * @type V1VirtualMachineInstance
     * @memberof DefaultApireplaceNamespacedVirtualMachineInstance
     */
    body: V1VirtualMachineInstance;
}
export interface DefaultApiReplaceNamespacedVirtualMachineInstanceMigrationRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineInstanceMigration
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineInstanceMigration
     */
    namespace: string;
    /**
     *
     * @type V1VirtualMachineInstanceMigration
     * @memberof DefaultApireplaceNamespacedVirtualMachineInstanceMigration
     */
    body: V1VirtualMachineInstanceMigration;
}
export interface DefaultApiReplaceNamespacedVirtualMachineInstancePresetRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineInstancePreset
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineInstancePreset
     */
    namespace: string;
    /**
     *
     * @type V1VirtualMachineInstancePreset
     * @memberof DefaultApireplaceNamespacedVirtualMachineInstancePreset
     */
    body: V1VirtualMachineInstancePreset;
}
export interface DefaultApiReplaceNamespacedVirtualMachineInstanceReplicaSetRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineInstanceReplicaSet
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineInstanceReplicaSet
     */
    namespace: string;
    /**
     *
     * @type V1VirtualMachineInstanceReplicaSet
     * @memberof DefaultApireplaceNamespacedVirtualMachineInstanceReplicaSet
     */
    body: V1VirtualMachineInstanceReplicaSet;
}
export interface DefaultApiReplaceNamespacedVirtualMachineInstancetypeRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineInstancetype
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineInstancetype
     */
    namespace: string;
    /**
     *
     * @type V1beta1VirtualMachineInstancetype
     * @memberof DefaultApireplaceNamespacedVirtualMachineInstancetype
     */
    body: V1beta1VirtualMachineInstancetype;
}
export interface DefaultApiReplaceNamespacedVirtualMachinePoolRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachinePool
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachinePool
     */
    namespace: string;
    /**
     *
     * @type V1alpha1VirtualMachinePool
     * @memberof DefaultApireplaceNamespacedVirtualMachinePool
     */
    body: V1alpha1VirtualMachinePool;
}
export interface DefaultApiReplaceNamespacedVirtualMachinePreferenceRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachinePreference
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachinePreference
     */
    namespace: string;
    /**
     *
     * @type V1beta1VirtualMachinePreference
     * @memberof DefaultApireplaceNamespacedVirtualMachinePreference
     */
    body: V1beta1VirtualMachinePreference;
}
export interface DefaultApiReplaceNamespacedVirtualMachineRestoreRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineRestore
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineRestore
     */
    namespace: string;
    /**
     *
     * @type V1beta1VirtualMachineRestore
     * @memberof DefaultApireplaceNamespacedVirtualMachineRestore
     */
    body: V1beta1VirtualMachineRestore;
}
export interface DefaultApiReplaceNamespacedVirtualMachineSnapshotRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineSnapshot
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineSnapshot
     */
    namespace: string;
    /**
     *
     * @type V1beta1VirtualMachineSnapshot
     * @memberof DefaultApireplaceNamespacedVirtualMachineSnapshot
     */
    body: V1beta1VirtualMachineSnapshot;
}
export interface DefaultApiReplaceNamespacedVirtualMachineSnapshotContentRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineSnapshotContent
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineSnapshotContent
     */
    namespace: string;
    /**
     *
     * @type V1beta1VirtualMachineSnapshotContent
     * @memberof DefaultApireplaceNamespacedVirtualMachineSnapshotContent
     */
    body: V1beta1VirtualMachineSnapshotContent;
}
export interface DefaultApiReplaceVirtualMachineCloneRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireplaceVirtualMachineClone
     */
    name: string;
    /**
     *
     * @type V1alpha1VirtualMachineClone
     * @memberof DefaultApireplaceVirtualMachineClone
     */
    body: V1alpha1VirtualMachineClone;
}
export interface DefaultApiReplaceVirtualMachineClusterInstancetypeRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireplaceVirtualMachineClusterInstancetype
     */
    name: string;
    /**
     *
     * @type V1beta1VirtualMachineClusterInstancetype
     * @memberof DefaultApireplaceVirtualMachineClusterInstancetype
     */
    body: V1beta1VirtualMachineClusterInstancetype;
}
export interface DefaultApiReplaceVirtualMachineClusterPreferenceRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApireplaceVirtualMachineClusterPreference
     */
    name: string;
    /**
     *
     * @type V1beta1VirtualMachineClusterPreference
     * @memberof DefaultApireplaceVirtualMachineClusterPreference
     */
    body: V1beta1VirtualMachineClusterPreference;
}
export interface DefaultApiV1CheckHealthRequest {
}
export interface DefaultApiV1ConsoleRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1Console
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1Console
     */
    namespace: string;
}
export interface DefaultApiV1ExpandSpecRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1ExpandSpec
     */
    namespace: string;
}
export interface DefaultApiV1FilesystemlistRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1Filesystemlist
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1Filesystemlist
     */
    namespace: string;
}
export interface DefaultApiV1FreezeRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1Freeze
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1Freeze
     */
    namespace: string;
    /**
     *
     * @type V1FreezeUnfreezeTimeout
     * @memberof DefaultApiv1Freeze
     */
    body: V1FreezeUnfreezeTimeout;
}
export interface DefaultApiV1GetSubAPIGroupRequest {
}
export interface DefaultApiV1GuestfsRequest {
}
export interface DefaultApiV1GuestosinfoRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1Guestosinfo
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1Guestosinfo
     */
    namespace: string;
}
export interface DefaultApiV1MemoryDumpRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1MemoryDump
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1MemoryDump
     */
    namespace: string;
    /**
     *
     * @type V1VirtualMachineMemoryDumpRequest
     * @memberof DefaultApiv1MemoryDump
     */
    body: V1VirtualMachineMemoryDumpRequest;
}
export interface DefaultApiV1MigrateRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1Migrate
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1Migrate
     */
    namespace: string;
    /**
     *
     * @type V1MigrateOptions
     * @memberof DefaultApiv1Migrate
     */
    body: V1MigrateOptions;
}
export interface DefaultApiV1PauseRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1Pause
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1Pause
     */
    namespace: string;
    /**
     *
     * @type V1PauseOptions
     * @memberof DefaultApiv1Pause
     */
    body: V1PauseOptions;
}
export interface DefaultApiV1RemoveMemoryDumpRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1RemoveMemoryDump
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1RemoveMemoryDump
     */
    namespace: string;
}
export interface DefaultApiV1RestartRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1Restart
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1Restart
     */
    namespace: string;
    /**
     *
     * @type V1RestartOptions
     * @memberof DefaultApiv1Restart
     */
    body?: V1RestartOptions;
}
export interface DefaultApiV1SEVFetchCertChainRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1SEVFetchCertChain
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1SEVFetchCertChain
     */
    namespace: string;
}
export interface DefaultApiV1SEVInjectLaunchSecretRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1SEVInjectLaunchSecret
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1SEVInjectLaunchSecret
     */
    namespace: string;
    /**
     *
     * @type V1SEVSecretOptions
     * @memberof DefaultApiv1SEVInjectLaunchSecret
     */
    body: V1SEVSecretOptions;
}
export interface DefaultApiV1SEVQueryLaunchMeasurementRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1SEVQueryLaunchMeasurement
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1SEVQueryLaunchMeasurement
     */
    namespace: string;
}
export interface DefaultApiV1SEVSetupSessionRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1SEVSetupSession
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1SEVSetupSession
     */
    namespace: string;
    /**
     *
     * @type V1SEVSessionOptions
     * @memberof DefaultApiv1SEVSetupSession
     */
    body: V1SEVSessionOptions;
}
export interface DefaultApiV1SoftRebootRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1SoftReboot
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1SoftReboot
     */
    namespace: string;
}
export interface DefaultApiV1StartRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1Start
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1Start
     */
    namespace: string;
    /**
     *
     * @type V1StartOptions
     * @memberof DefaultApiv1Start
     */
    body: V1StartOptions;
}
export interface DefaultApiV1StopRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1Stop
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1Stop
     */
    namespace: string;
    /**
     *
     * @type V1StopOptions
     * @memberof DefaultApiv1Stop
     */
    body?: V1StopOptions;
}
export interface DefaultApiV1UnfreezeRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1Unfreeze
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1Unfreeze
     */
    namespace: string;
}
export interface DefaultApiV1UnpauseRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1Unpause
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1Unpause
     */
    namespace: string;
    /**
     *
     * @type V1UnpauseOptions
     * @memberof DefaultApiv1Unpause
     */
    body: V1UnpauseOptions;
}
export interface DefaultApiV1UserlistRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1Userlist
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1Userlist
     */
    namespace: string;
}
export interface DefaultApiV1VNCRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1VNC
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1VNC
     */
    namespace: string;
}
export interface DefaultApiV1VNCScreenshotRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1VNCScreenshot
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1VNCScreenshot
     */
    namespace: string;
    /**
     * Move the cursor on the VNC display to wake up the screen
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiv1VNCScreenshot
     */
    moveCursor?: boolean;
}
export interface DefaultApiV1VSOCKRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1VSOCK
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1VSOCK
     */
    namespace: string;
    /**
     * The port which the VSOCK application listens to.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiv1VSOCK
     */
    port: number;
    /**
     * Weather to request a TLS encrypted session from the VSOCK application.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiv1VSOCK
     */
    tls?: boolean;
}
export interface DefaultApiV1VersionRequest {
}
export interface DefaultApiV1alpha3CheckHealthRequest {
}
export interface DefaultApiV1alpha3ConsoleRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3Console
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3Console
     */
    namespace: string;
}
export interface DefaultApiV1alpha3ExpandSpecRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3ExpandSpec
     */
    namespace: string;
}
export interface DefaultApiV1alpha3FilesystemlistRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3Filesystemlist
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3Filesystemlist
     */
    namespace: string;
}
export interface DefaultApiV1alpha3FreezeRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3Freeze
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3Freeze
     */
    namespace: string;
    /**
     *
     * @type V1FreezeUnfreezeTimeout
     * @memberof DefaultApiv1alpha3Freeze
     */
    body: V1FreezeUnfreezeTimeout;
}
export interface DefaultApiV1alpha3GuestfsRequest {
}
export interface DefaultApiV1alpha3GuestosinfoRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3Guestosinfo
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3Guestosinfo
     */
    namespace: string;
}
export interface DefaultApiV1alpha3MemoryDumpRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3MemoryDump
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3MemoryDump
     */
    namespace: string;
    /**
     *
     * @type V1VirtualMachineMemoryDumpRequest
     * @memberof DefaultApiv1alpha3MemoryDump
     */
    body: V1VirtualMachineMemoryDumpRequest;
}
export interface DefaultApiV1alpha3MigrateRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3Migrate
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3Migrate
     */
    namespace: string;
    /**
     *
     * @type V1MigrateOptions
     * @memberof DefaultApiv1alpha3Migrate
     */
    body: V1MigrateOptions;
}
export interface DefaultApiV1alpha3PauseRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3Pause
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3Pause
     */
    namespace: string;
    /**
     *
     * @type V1PauseOptions
     * @memberof DefaultApiv1alpha3Pause
     */
    body: V1PauseOptions;
}
export interface DefaultApiV1alpha3RemoveMemoryDumpRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3RemoveMemoryDump
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3RemoveMemoryDump
     */
    namespace: string;
}
export interface DefaultApiV1alpha3RestartRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3Restart
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3Restart
     */
    namespace: string;
    /**
     *
     * @type V1RestartOptions
     * @memberof DefaultApiv1alpha3Restart
     */
    body?: V1RestartOptions;
}
export interface DefaultApiV1alpha3SEVFetchCertChainRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3SEVFetchCertChain
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3SEVFetchCertChain
     */
    namespace: string;
}
export interface DefaultApiV1alpha3SEVInjectLaunchSecretRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3SEVInjectLaunchSecret
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3SEVInjectLaunchSecret
     */
    namespace: string;
    /**
     *
     * @type V1SEVSecretOptions
     * @memberof DefaultApiv1alpha3SEVInjectLaunchSecret
     */
    body: V1SEVSecretOptions;
}
export interface DefaultApiV1alpha3SEVQueryLaunchMeasurementRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3SEVQueryLaunchMeasurement
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3SEVQueryLaunchMeasurement
     */
    namespace: string;
}
export interface DefaultApiV1alpha3SEVSetupSessionRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3SEVSetupSession
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3SEVSetupSession
     */
    namespace: string;
    /**
     *
     * @type V1SEVSessionOptions
     * @memberof DefaultApiv1alpha3SEVSetupSession
     */
    body: V1SEVSessionOptions;
}
export interface DefaultApiV1alpha3SoftRebootRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3SoftReboot
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3SoftReboot
     */
    namespace: string;
}
export interface DefaultApiV1alpha3StartRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3Start
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3Start
     */
    namespace: string;
    /**
     *
     * @type V1StartOptions
     * @memberof DefaultApiv1alpha3Start
     */
    body: V1StartOptions;
}
export interface DefaultApiV1alpha3StopRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3Stop
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3Stop
     */
    namespace: string;
    /**
     *
     * @type V1StopOptions
     * @memberof DefaultApiv1alpha3Stop
     */
    body?: V1StopOptions;
}
export interface DefaultApiV1alpha3UnfreezeRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3Unfreeze
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3Unfreeze
     */
    namespace: string;
}
export interface DefaultApiV1alpha3UnpauseRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3Unpause
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3Unpause
     */
    namespace: string;
    /**
     *
     * @type V1UnpauseOptions
     * @memberof DefaultApiv1alpha3Unpause
     */
    body: V1UnpauseOptions;
}
export interface DefaultApiV1alpha3UserlistRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3Userlist
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3Userlist
     */
    namespace: string;
}
export interface DefaultApiV1alpha3VNCRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3VNC
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3VNC
     */
    namespace: string;
}
export interface DefaultApiV1alpha3VNCScreenshotRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3VNCScreenshot
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3VNCScreenshot
     */
    namespace: string;
    /**
     * Move the cursor on the VNC display to wake up the screen
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiv1alpha3VNCScreenshot
     */
    moveCursor?: boolean;
}
export interface DefaultApiV1alpha3VSOCKRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3VSOCK
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3VSOCK
     */
    namespace: string;
    /**
     * The port which the VSOCK application listens to.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiv1alpha3VSOCK
     */
    port: number;
    /**
     * Weather to request a TLS encrypted session from the VSOCK application.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiv1alpha3VSOCK
     */
    tls?: boolean;
}
export interface DefaultApiV1alpha3VersionRequest {
}
export interface DefaultApiV1alpha3dumpClusterProfilerRequest {
}
export interface DefaultApiV1alpha3getAPISubResourcesRequest {
}
export interface DefaultApiV1alpha3startClusterProfilerRequest {
}
export interface DefaultApiV1alpha3stopClusterProfilerRequest {
}
export interface DefaultApiV1alpha3usbredirRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3usbredir
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3usbredir
     */
    namespace: string;
}
export interface DefaultApiV1alpha3vmAddvolumeRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3vmAddvolume
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3vmAddvolume
     */
    namespace: string;
    /**
     *
     * @type V1AddVolumeOptions
     * @memberof DefaultApiv1alpha3vmAddvolume
     */
    body: V1AddVolumeOptions;
}
export interface DefaultApiV1alpha3vmExpandSpecRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3vmExpandSpec
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3vmExpandSpec
     */
    namespace: string;
}
export interface DefaultApiV1alpha3vmPortForwardRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3vmPortForward
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3vmPortForward
     */
    namespace: string;
    /**
     * The target port for portforward on the VirtualMachineInstance.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3vmPortForward
     */
    port: string;
}
export interface DefaultApiV1alpha3vmPortForwardWithProtocolRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3vmPortForwardWithProtocol
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3vmPortForwardWithProtocol
     */
    namespace: string;
    /**
     * The target port for portforward on the VirtualMachineInstance.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3vmPortForwardWithProtocol
     */
    port: string;
    /**
     * The protocol for portforward on the VirtualMachineInstance.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3vmPortForwardWithProtocol
     */
    protocol: string;
}
export interface DefaultApiV1alpha3vmRemovevolumeRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3vmRemovevolume
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3vmRemovevolume
     */
    namespace: string;
    /**
     *
     * @type V1RemoveVolumeOptions
     * @memberof DefaultApiv1alpha3vmRemovevolume
     */
    body: V1RemoveVolumeOptions;
}
export interface DefaultApiV1alpha3vmiAddvolumeRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3vmiAddvolume
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3vmiAddvolume
     */
    namespace: string;
    /**
     *
     * @type V1AddVolumeOptions
     * @memberof DefaultApiv1alpha3vmiAddvolume
     */
    body: V1AddVolumeOptions;
}
export interface DefaultApiV1alpha3vmiPortForwardRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3vmiPortForward
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3vmiPortForward
     */
    namespace: string;
    /**
     * The target port for portforward on the VirtualMachineInstance.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3vmiPortForward
     */
    port: string;
}
export interface DefaultApiV1alpha3vmiPortForwardWithProtocolRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3vmiPortForwardWithProtocol
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3vmiPortForwardWithProtocol
     */
    namespace: string;
    /**
     * The target port for portforward on the VirtualMachineInstance.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3vmiPortForwardWithProtocol
     */
    port: string;
    /**
     * The protocol for portforward on the VirtualMachineInstance.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3vmiPortForwardWithProtocol
     */
    protocol: string;
}
export interface DefaultApiV1alpha3vmiRemovevolumeRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3vmiRemovevolume
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1alpha3vmiRemovevolume
     */
    namespace: string;
    /**
     *
     * @type V1RemoveVolumeOptions
     * @memberof DefaultApiv1alpha3vmiRemovevolume
     */
    body: V1RemoveVolumeOptions;
}
export interface DefaultApiV1dumpClusterProfilerRequest {
}
export interface DefaultApiV1getAPISubResourcesRequest {
}
export interface DefaultApiV1startClusterProfilerRequest {
}
export interface DefaultApiV1stopClusterProfilerRequest {
}
export interface DefaultApiV1usbredirRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1usbredir
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1usbredir
     */
    namespace: string;
}
export interface DefaultApiV1vmAddvolumeRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1vmAddvolume
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1vmAddvolume
     */
    namespace: string;
    /**
     *
     * @type V1AddVolumeOptions
     * @memberof DefaultApiv1vmAddvolume
     */
    body: V1AddVolumeOptions;
}
export interface DefaultApiV1vmExpandSpecRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1vmExpandSpec
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1vmExpandSpec
     */
    namespace: string;
}
export interface DefaultApiV1vmPortForwardRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1vmPortForward
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1vmPortForward
     */
    namespace: string;
    /**
     * The target port for portforward on the VirtualMachineInstance.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1vmPortForward
     */
    port: string;
}
export interface DefaultApiV1vmPortForwardWithProtocolRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1vmPortForwardWithProtocol
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1vmPortForwardWithProtocol
     */
    namespace: string;
    /**
     * The target port for portforward on the VirtualMachineInstance.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1vmPortForwardWithProtocol
     */
    port: string;
    /**
     * The protocol for portforward on the VirtualMachineInstance.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1vmPortForwardWithProtocol
     */
    protocol: string;
}
export interface DefaultApiV1vmRemovevolumeRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1vmRemovevolume
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1vmRemovevolume
     */
    namespace: string;
    /**
     *
     * @type V1RemoveVolumeOptions
     * @memberof DefaultApiv1vmRemovevolume
     */
    body: V1RemoveVolumeOptions;
}
export interface DefaultApiV1vmiAddvolumeRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1vmiAddvolume
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1vmiAddvolume
     */
    namespace: string;
    /**
     *
     * @type V1AddVolumeOptions
     * @memberof DefaultApiv1vmiAddvolume
     */
    body: V1AddVolumeOptions;
}
export interface DefaultApiV1vmiPortForwardRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1vmiPortForward
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1vmiPortForward
     */
    namespace: string;
    /**
     * The target port for portforward on the VirtualMachineInstance.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1vmiPortForward
     */
    port: string;
}
export interface DefaultApiV1vmiPortForwardWithProtocolRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1vmiPortForwardWithProtocol
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1vmiPortForwardWithProtocol
     */
    namespace: string;
    /**
     * The target port for portforward on the VirtualMachineInstance.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1vmiPortForwardWithProtocol
     */
    port: string;
    /**
     * The protocol for portforward on the VirtualMachineInstance.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1vmiPortForwardWithProtocol
     */
    protocol: string;
}
export interface DefaultApiV1vmiRemovevolumeRequest {
    /**
     * Name of the resource
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1vmiRemovevolume
     */
    name: string;
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1vmiRemovevolume
     */
    namespace: string;
    /**
     *
     * @type V1RemoveVolumeOptions
     * @memberof DefaultApiv1vmiRemovevolume
     */
    body: V1RemoveVolumeOptions;
}
export interface DefaultApiWatchKubeVirtListForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchKubeVirtListForAllNamespaces
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchKubeVirtListForAllNamespaces
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchKubeVirtListForAllNamespaces
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchKubeVirtListForAllNamespaces
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchKubeVirtListForAllNamespaces
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchKubeVirtListForAllNamespaces
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchKubeVirtListForAllNamespaces
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchKubeVirtListForAllNamespaces
     */
    watch?: boolean;
}
export interface DefaultApiWatchMigrationPolicyListForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchMigrationPolicyListForAllNamespaces
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchMigrationPolicyListForAllNamespaces
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchMigrationPolicyListForAllNamespaces
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchMigrationPolicyListForAllNamespaces
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchMigrationPolicyListForAllNamespaces
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchMigrationPolicyListForAllNamespaces
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchMigrationPolicyListForAllNamespaces
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchMigrationPolicyListForAllNamespaces
     */
    watch?: boolean;
}
export interface DefaultApiWatchNamespacedKubeVirtRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedKubeVirt
     */
    namespace: string;
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedKubeVirt
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedKubeVirt
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchNamespacedKubeVirt
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedKubeVirt
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchNamespacedKubeVirt
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedKubeVirt
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchNamespacedKubeVirt
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchNamespacedKubeVirt
     */
    watch?: boolean;
}
export interface DefaultApiWatchNamespacedVirtualMachineRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachine
     */
    namespace: string;
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachine
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachine
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachine
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachine
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachine
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachine
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachine
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachine
     */
    watch?: boolean;
}
export interface DefaultApiWatchNamespacedVirtualMachineExportRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineExport
     */
    namespace: string;
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineExport
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineExport
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineExport
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineExport
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineExport
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineExport
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineExport
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineExport
     */
    watch?: boolean;
}
export interface DefaultApiWatchNamespacedVirtualMachineInstanceRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstance
     */
    namespace: string;
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstance
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstance
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstance
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstance
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstance
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstance
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstance
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstance
     */
    watch?: boolean;
}
export interface DefaultApiWatchNamespacedVirtualMachineInstanceMigrationRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceMigration
     */
    namespace: string;
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceMigration
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceMigration
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceMigration
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceMigration
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceMigration
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceMigration
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceMigration
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceMigration
     */
    watch?: boolean;
}
export interface DefaultApiWatchNamespacedVirtualMachineInstancePresetRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstancePreset
     */
    namespace: string;
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstancePreset
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstancePreset
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstancePreset
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstancePreset
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstancePreset
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstancePreset
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstancePreset
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstancePreset
     */
    watch?: boolean;
}
export interface DefaultApiWatchNamespacedVirtualMachineInstanceReplicaSetRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceReplicaSet
     */
    namespace: string;
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceReplicaSet
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceReplicaSet
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceReplicaSet
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceReplicaSet
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceReplicaSet
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceReplicaSet
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceReplicaSet
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceReplicaSet
     */
    watch?: boolean;
}
export interface DefaultApiWatchNamespacedVirtualMachineInstancetypeRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstancetype
     */
    namespace: string;
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstancetype
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstancetype
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstancetype
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstancetype
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstancetype
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstancetype
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstancetype
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstancetype
     */
    watch?: boolean;
}
export interface DefaultApiWatchNamespacedVirtualMachinePoolRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachinePool
     */
    namespace: string;
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachinePool
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachinePool
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachinePool
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachinePool
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachinePool
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachinePool
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachinePool
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachinePool
     */
    watch?: boolean;
}
export interface DefaultApiWatchNamespacedVirtualMachinePreferenceRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachinePreference
     */
    namespace: string;
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachinePreference
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachinePreference
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachinePreference
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachinePreference
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachinePreference
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachinePreference
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachinePreference
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachinePreference
     */
    watch?: boolean;
}
export interface DefaultApiWatchNamespacedVirtualMachineRestoreRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineRestore
     */
    namespace: string;
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineRestore
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineRestore
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineRestore
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineRestore
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineRestore
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineRestore
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineRestore
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineRestore
     */
    watch?: boolean;
}
export interface DefaultApiWatchNamespacedVirtualMachineSnapshotRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshot
     */
    namespace: string;
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshot
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshot
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshot
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshot
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshot
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshot
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshot
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshot
     */
    watch?: boolean;
}
export interface DefaultApiWatchNamespacedVirtualMachineSnapshotContentRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshotContent
     */
    namespace: string;
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshotContent
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshotContent
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshotContent
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshotContent
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshotContent
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshotContent
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshotContent
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshotContent
     */
    watch?: boolean;
}
export interface DefaultApiWatchVirtualMachineCloneListForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineCloneListForAllNamespaces
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineCloneListForAllNamespaces
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineCloneListForAllNamespaces
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineCloneListForAllNamespaces
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchVirtualMachineCloneListForAllNamespaces
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineCloneListForAllNamespaces
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchVirtualMachineCloneListForAllNamespaces
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineCloneListForAllNamespaces
     */
    watch?: boolean;
}
export interface DefaultApiWatchVirtualMachineClusterInstancetypeListForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineClusterInstancetypeListForAllNamespaces
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineClusterInstancetypeListForAllNamespaces
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineClusterInstancetypeListForAllNamespaces
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineClusterInstancetypeListForAllNamespaces
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchVirtualMachineClusterInstancetypeListForAllNamespaces
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineClusterInstancetypeListForAllNamespaces
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchVirtualMachineClusterInstancetypeListForAllNamespaces
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineClusterInstancetypeListForAllNamespaces
     */
    watch?: boolean;
}
export interface DefaultApiWatchVirtualMachineClusterPreferenceListForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineClusterPreferenceListForAllNamespaces
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineClusterPreferenceListForAllNamespaces
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineClusterPreferenceListForAllNamespaces
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineClusterPreferenceListForAllNamespaces
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchVirtualMachineClusterPreferenceListForAllNamespaces
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineClusterPreferenceListForAllNamespaces
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchVirtualMachineClusterPreferenceListForAllNamespaces
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineClusterPreferenceListForAllNamespaces
     */
    watch?: boolean;
}
export interface DefaultApiWatchVirtualMachineExportListForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineExportListForAllNamespaces
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineExportListForAllNamespaces
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineExportListForAllNamespaces
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineExportListForAllNamespaces
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchVirtualMachineExportListForAllNamespaces
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineExportListForAllNamespaces
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchVirtualMachineExportListForAllNamespaces
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineExportListForAllNamespaces
     */
    watch?: boolean;
}
export interface DefaultApiWatchVirtualMachineInstanceListForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstanceListForAllNamespaces
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstanceListForAllNamespaces
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineInstanceListForAllNamespaces
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstanceListForAllNamespaces
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchVirtualMachineInstanceListForAllNamespaces
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstanceListForAllNamespaces
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchVirtualMachineInstanceListForAllNamespaces
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineInstanceListForAllNamespaces
     */
    watch?: boolean;
}
export interface DefaultApiWatchVirtualMachineInstanceMigrationListForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstanceMigrationListForAllNamespaces
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstanceMigrationListForAllNamespaces
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineInstanceMigrationListForAllNamespaces
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstanceMigrationListForAllNamespaces
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchVirtualMachineInstanceMigrationListForAllNamespaces
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstanceMigrationListForAllNamespaces
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchVirtualMachineInstanceMigrationListForAllNamespaces
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineInstanceMigrationListForAllNamespaces
     */
    watch?: boolean;
}
export interface DefaultApiWatchVirtualMachineInstancePresetListForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstancePresetListForAllNamespaces
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstancePresetListForAllNamespaces
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineInstancePresetListForAllNamespaces
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstancePresetListForAllNamespaces
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchVirtualMachineInstancePresetListForAllNamespaces
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstancePresetListForAllNamespaces
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchVirtualMachineInstancePresetListForAllNamespaces
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineInstancePresetListForAllNamespaces
     */
    watch?: boolean;
}
export interface DefaultApiWatchVirtualMachineInstanceReplicaSetListForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstanceReplicaSetListForAllNamespaces
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstanceReplicaSetListForAllNamespaces
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineInstanceReplicaSetListForAllNamespaces
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstanceReplicaSetListForAllNamespaces
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchVirtualMachineInstanceReplicaSetListForAllNamespaces
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstanceReplicaSetListForAllNamespaces
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchVirtualMachineInstanceReplicaSetListForAllNamespaces
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineInstanceReplicaSetListForAllNamespaces
     */
    watch?: boolean;
}
export interface DefaultApiWatchVirtualMachineInstancetypeListForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstancetypeListForAllNamespaces
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstancetypeListForAllNamespaces
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineInstancetypeListForAllNamespaces
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstancetypeListForAllNamespaces
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchVirtualMachineInstancetypeListForAllNamespaces
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstancetypeListForAllNamespaces
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchVirtualMachineInstancetypeListForAllNamespaces
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineInstancetypeListForAllNamespaces
     */
    watch?: boolean;
}
export interface DefaultApiWatchVirtualMachineListForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineListForAllNamespaces
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineListForAllNamespaces
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineListForAllNamespaces
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineListForAllNamespaces
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchVirtualMachineListForAllNamespaces
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineListForAllNamespaces
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchVirtualMachineListForAllNamespaces
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineListForAllNamespaces
     */
    watch?: boolean;
}
export interface DefaultApiWatchVirtualMachinePoolListForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachinePoolListForAllNamespaces
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachinePoolListForAllNamespaces
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachinePoolListForAllNamespaces
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachinePoolListForAllNamespaces
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchVirtualMachinePoolListForAllNamespaces
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachinePoolListForAllNamespaces
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchVirtualMachinePoolListForAllNamespaces
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachinePoolListForAllNamespaces
     */
    watch?: boolean;
}
export interface DefaultApiWatchVirtualMachinePreferenceListForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachinePreferenceListForAllNamespaces
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachinePreferenceListForAllNamespaces
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachinePreferenceListForAllNamespaces
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachinePreferenceListForAllNamespaces
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchVirtualMachinePreferenceListForAllNamespaces
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachinePreferenceListForAllNamespaces
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchVirtualMachinePreferenceListForAllNamespaces
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachinePreferenceListForAllNamespaces
     */
    watch?: boolean;
}
export interface DefaultApiWatchVirtualMachineRestoreListForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineRestoreListForAllNamespaces
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineRestoreListForAllNamespaces
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineRestoreListForAllNamespaces
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineRestoreListForAllNamespaces
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchVirtualMachineRestoreListForAllNamespaces
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineRestoreListForAllNamespaces
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchVirtualMachineRestoreListForAllNamespaces
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineRestoreListForAllNamespaces
     */
    watch?: boolean;
}
export interface DefaultApiWatchVirtualMachineSnapshotContentListForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineSnapshotContentListForAllNamespaces
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineSnapshotContentListForAllNamespaces
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineSnapshotContentListForAllNamespaces
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineSnapshotContentListForAllNamespaces
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchVirtualMachineSnapshotContentListForAllNamespaces
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineSnapshotContentListForAllNamespaces
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchVirtualMachineSnapshotContentListForAllNamespaces
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineSnapshotContentListForAllNamespaces
     */
    watch?: boolean;
}
export interface DefaultApiWatchVirtualMachineSnapshotListForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineSnapshotListForAllNamespaces
     */
    _continue?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineSnapshotListForAllNamespaces
     */
    fieldSelector?: string;
    /**
     * If true, partially initialized resources are included in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineSnapshotListForAllNamespaces
     */
    includeUninitialized?: boolean;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineSnapshotListForAllNamespaces
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchVirtualMachineSnapshotListForAllNamespaces
     */
    limit?: number;
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiwatchVirtualMachineSnapshotListForAllNamespaces
     */
    resourceVersion?: string;
    /**
     * TimeoutSeconds for the list/watch call.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiwatchVirtualMachineSnapshotListForAllNamespaces
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineSnapshotListForAllNamespaces
     */
    watch?: boolean;
}
export declare class ObjectDefaultApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor);
    /**
     * Create a MigrationPolicy object.
     * @param param the request object
     */
    createMigrationPolicyWithHttpInfo(param: DefaultApiCreateMigrationPolicyRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1alpha1MigrationPolicy>>;
    /**
     * Create a MigrationPolicy object.
     * @param param the request object
     */
    createMigrationPolicy(param: DefaultApiCreateMigrationPolicyRequest, options?: ConfigurationOptions): Promise<V1alpha1MigrationPolicy>;
    /**
     * Create a KubeVirt object.
     * @param param the request object
     */
    createNamespacedKubeVirtWithHttpInfo(param: DefaultApiCreateNamespacedKubeVirtRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1KubeVirt>>;
    /**
     * Create a KubeVirt object.
     * @param param the request object
     */
    createNamespacedKubeVirt(param: DefaultApiCreateNamespacedKubeVirtRequest, options?: ConfigurationOptions): Promise<V1KubeVirt>;
    /**
     * Create a VirtualMachine object.
     * @param param the request object
     */
    createNamespacedVirtualMachineWithHttpInfo(param: DefaultApiCreateNamespacedVirtualMachineRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachine>>;
    /**
     * Create a VirtualMachine object.
     * @param param the request object
     */
    createNamespacedVirtualMachine(param: DefaultApiCreateNamespacedVirtualMachineRequest, options?: ConfigurationOptions): Promise<V1VirtualMachine>;
    /**
     * Create a VirtualMachineExport object.
     * @param param the request object
     */
    createNamespacedVirtualMachineExportWithHttpInfo(param: DefaultApiCreateNamespacedVirtualMachineExportRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineExport>>;
    /**
     * Create a VirtualMachineExport object.
     * @param param the request object
     */
    createNamespacedVirtualMachineExport(param: DefaultApiCreateNamespacedVirtualMachineExportRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineExport>;
    /**
     * Create a VirtualMachineInstance object.
     * @param param the request object
     */
    createNamespacedVirtualMachineInstanceWithHttpInfo(param: DefaultApiCreateNamespacedVirtualMachineInstanceRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstance>>;
    /**
     * Create a VirtualMachineInstance object.
     * @param param the request object
     */
    createNamespacedVirtualMachineInstance(param: DefaultApiCreateNamespacedVirtualMachineInstanceRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineInstance>;
    /**
     * Create a VirtualMachineInstanceMigration object.
     * @param param the request object
     */
    createNamespacedVirtualMachineInstanceMigrationWithHttpInfo(param: DefaultApiCreateNamespacedVirtualMachineInstanceMigrationRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceMigration>>;
    /**
     * Create a VirtualMachineInstanceMigration object.
     * @param param the request object
     */
    createNamespacedVirtualMachineInstanceMigration(param: DefaultApiCreateNamespacedVirtualMachineInstanceMigrationRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineInstanceMigration>;
    /**
     * Create a VirtualMachineInstancePreset object.
     * @param param the request object
     */
    createNamespacedVirtualMachineInstancePresetWithHttpInfo(param: DefaultApiCreateNamespacedVirtualMachineInstancePresetRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstancePreset>>;
    /**
     * Create a VirtualMachineInstancePreset object.
     * @param param the request object
     */
    createNamespacedVirtualMachineInstancePreset(param: DefaultApiCreateNamespacedVirtualMachineInstancePresetRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineInstancePreset>;
    /**
     * Create a VirtualMachineInstanceReplicaSet object.
     * @param param the request object
     */
    createNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(param: DefaultApiCreateNamespacedVirtualMachineInstanceReplicaSetRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceReplicaSet>>;
    /**
     * Create a VirtualMachineInstanceReplicaSet object.
     * @param param the request object
     */
    createNamespacedVirtualMachineInstanceReplicaSet(param: DefaultApiCreateNamespacedVirtualMachineInstanceReplicaSetRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineInstanceReplicaSet>;
    /**
     * Create a VirtualMachineInstancetype object.
     * @param param the request object
     */
    createNamespacedVirtualMachineInstancetypeWithHttpInfo(param: DefaultApiCreateNamespacedVirtualMachineInstancetypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineInstancetype>>;
    /**
     * Create a VirtualMachineInstancetype object.
     * @param param the request object
     */
    createNamespacedVirtualMachineInstancetype(param: DefaultApiCreateNamespacedVirtualMachineInstancetypeRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineInstancetype>;
    /**
     * Create a VirtualMachinePool object.
     * @param param the request object
     */
    createNamespacedVirtualMachinePoolWithHttpInfo(param: DefaultApiCreateNamespacedVirtualMachinePoolRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1alpha1VirtualMachinePool>>;
    /**
     * Create a VirtualMachinePool object.
     * @param param the request object
     */
    createNamespacedVirtualMachinePool(param: DefaultApiCreateNamespacedVirtualMachinePoolRequest, options?: ConfigurationOptions): Promise<V1alpha1VirtualMachinePool>;
    /**
     * Create a VirtualMachinePreference object.
     * @param param the request object
     */
    createNamespacedVirtualMachinePreferenceWithHttpInfo(param: DefaultApiCreateNamespacedVirtualMachinePreferenceRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachinePreference>>;
    /**
     * Create a VirtualMachinePreference object.
     * @param param the request object
     */
    createNamespacedVirtualMachinePreference(param: DefaultApiCreateNamespacedVirtualMachinePreferenceRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachinePreference>;
    /**
     * Create a VirtualMachineRestore object.
     * @param param the request object
     */
    createNamespacedVirtualMachineRestoreWithHttpInfo(param: DefaultApiCreateNamespacedVirtualMachineRestoreRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineRestore>>;
    /**
     * Create a VirtualMachineRestore object.
     * @param param the request object
     */
    createNamespacedVirtualMachineRestore(param: DefaultApiCreateNamespacedVirtualMachineRestoreRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineRestore>;
    /**
     * Create a VirtualMachineSnapshot object.
     * @param param the request object
     */
    createNamespacedVirtualMachineSnapshotWithHttpInfo(param: DefaultApiCreateNamespacedVirtualMachineSnapshotRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineSnapshot>>;
    /**
     * Create a VirtualMachineSnapshot object.
     * @param param the request object
     */
    createNamespacedVirtualMachineSnapshot(param: DefaultApiCreateNamespacedVirtualMachineSnapshotRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineSnapshot>;
    /**
     * Create a VirtualMachineSnapshotContent object.
     * @param param the request object
     */
    createNamespacedVirtualMachineSnapshotContentWithHttpInfo(param: DefaultApiCreateNamespacedVirtualMachineSnapshotContentRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineSnapshotContent>>;
    /**
     * Create a VirtualMachineSnapshotContent object.
     * @param param the request object
     */
    createNamespacedVirtualMachineSnapshotContent(param: DefaultApiCreateNamespacedVirtualMachineSnapshotContentRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineSnapshotContent>;
    /**
     * Create a VirtualMachineClone object.
     * @param param the request object
     */
    createVirtualMachineCloneWithHttpInfo(param: DefaultApiCreateVirtualMachineCloneRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1alpha1VirtualMachineClone>>;
    /**
     * Create a VirtualMachineClone object.
     * @param param the request object
     */
    createVirtualMachineClone(param: DefaultApiCreateVirtualMachineCloneRequest, options?: ConfigurationOptions): Promise<V1alpha1VirtualMachineClone>;
    /**
     * Create a VirtualMachineClusterInstancetype object.
     * @param param the request object
     */
    createVirtualMachineClusterInstancetypeWithHttpInfo(param: DefaultApiCreateVirtualMachineClusterInstancetypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineClusterInstancetype>>;
    /**
     * Create a VirtualMachineClusterInstancetype object.
     * @param param the request object
     */
    createVirtualMachineClusterInstancetype(param: DefaultApiCreateVirtualMachineClusterInstancetypeRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineClusterInstancetype>;
    /**
     * Create a VirtualMachineClusterPreference object.
     * @param param the request object
     */
    createVirtualMachineClusterPreferenceWithHttpInfo(param: DefaultApiCreateVirtualMachineClusterPreferenceRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineClusterPreference>>;
    /**
     * Create a VirtualMachineClusterPreference object.
     * @param param the request object
     */
    createVirtualMachineClusterPreference(param: DefaultApiCreateVirtualMachineClusterPreferenceRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineClusterPreference>;
    /**
     * Delete a collection of MigrationPolicy objects.
     * @param param the request object
     */
    deleteCollectionMigrationPolicyWithHttpInfo(param?: DefaultApiDeleteCollectionMigrationPolicyRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of MigrationPolicy objects.
     * @param param the request object
     */
    deleteCollectionMigrationPolicy(param?: DefaultApiDeleteCollectionMigrationPolicyRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of KubeVirt objects.
     * @param param the request object
     */
    deleteCollectionNamespacedKubeVirtWithHttpInfo(param?: DefaultApiDeleteCollectionNamespacedKubeVirtRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of KubeVirt objects.
     * @param param the request object
     */
    deleteCollectionNamespacedKubeVirt(param?: DefaultApiDeleteCollectionNamespacedKubeVirtRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of VirtualMachine objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineWithHttpInfo(param?: DefaultApiDeleteCollectionNamespacedVirtualMachineRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of VirtualMachine objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachine(param?: DefaultApiDeleteCollectionNamespacedVirtualMachineRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of VirtualMachineExport objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineExportWithHttpInfo(param?: DefaultApiDeleteCollectionNamespacedVirtualMachineExportRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of VirtualMachineExport objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineExport(param?: DefaultApiDeleteCollectionNamespacedVirtualMachineExportRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of VirtualMachineInstance objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineInstanceWithHttpInfo(param?: DefaultApiDeleteCollectionNamespacedVirtualMachineInstanceRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of VirtualMachineInstance objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineInstance(param?: DefaultApiDeleteCollectionNamespacedVirtualMachineInstanceRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of VirtualMachineInstanceMigration objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineInstanceMigrationWithHttpInfo(param?: DefaultApiDeleteCollectionNamespacedVirtualMachineInstanceMigrationRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of VirtualMachineInstanceMigration objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineInstanceMigration(param?: DefaultApiDeleteCollectionNamespacedVirtualMachineInstanceMigrationRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of VirtualMachineInstancePreset objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineInstancePresetWithHttpInfo(param?: DefaultApiDeleteCollectionNamespacedVirtualMachineInstancePresetRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of VirtualMachineInstancePreset objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineInstancePreset(param?: DefaultApiDeleteCollectionNamespacedVirtualMachineInstancePresetRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of VirtualMachineInstanceReplicaSet objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(param?: DefaultApiDeleteCollectionNamespacedVirtualMachineInstanceReplicaSetRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of VirtualMachineInstanceReplicaSet objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineInstanceReplicaSet(param?: DefaultApiDeleteCollectionNamespacedVirtualMachineInstanceReplicaSetRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of VirtualMachineInstancetype objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineInstancetypeWithHttpInfo(param?: DefaultApiDeleteCollectionNamespacedVirtualMachineInstancetypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of VirtualMachineInstancetype objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineInstancetype(param?: DefaultApiDeleteCollectionNamespacedVirtualMachineInstancetypeRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of VirtualMachinePool objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachinePoolWithHttpInfo(param?: DefaultApiDeleteCollectionNamespacedVirtualMachinePoolRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of VirtualMachinePool objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachinePool(param?: DefaultApiDeleteCollectionNamespacedVirtualMachinePoolRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of VirtualMachinePreference objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachinePreferenceWithHttpInfo(param?: DefaultApiDeleteCollectionNamespacedVirtualMachinePreferenceRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of VirtualMachinePreference objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachinePreference(param?: DefaultApiDeleteCollectionNamespacedVirtualMachinePreferenceRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of VirtualMachineRestore objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineRestoreWithHttpInfo(param?: DefaultApiDeleteCollectionNamespacedVirtualMachineRestoreRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of VirtualMachineRestore objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineRestore(param?: DefaultApiDeleteCollectionNamespacedVirtualMachineRestoreRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of VirtualMachineSnapshot objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineSnapshotWithHttpInfo(param?: DefaultApiDeleteCollectionNamespacedVirtualMachineSnapshotRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of VirtualMachineSnapshot objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineSnapshot(param?: DefaultApiDeleteCollectionNamespacedVirtualMachineSnapshotRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of VirtualMachineSnapshotContent objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineSnapshotContentWithHttpInfo(param?: DefaultApiDeleteCollectionNamespacedVirtualMachineSnapshotContentRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of VirtualMachineSnapshotContent objects.
     * @param param the request object
     */
    deleteCollectionNamespacedVirtualMachineSnapshotContent(param?: DefaultApiDeleteCollectionNamespacedVirtualMachineSnapshotContentRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of VirtualMachineClone objects.
     * @param param the request object
     */
    deleteCollectionVirtualMachineCloneWithHttpInfo(param?: DefaultApiDeleteCollectionVirtualMachineCloneRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of VirtualMachineClone objects.
     * @param param the request object
     */
    deleteCollectionVirtualMachineClone(param?: DefaultApiDeleteCollectionVirtualMachineCloneRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of VirtualMachineClusterInstancetype objects.
     * @param param the request object
     */
    deleteCollectionVirtualMachineClusterInstancetypeWithHttpInfo(param?: DefaultApiDeleteCollectionVirtualMachineClusterInstancetypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of VirtualMachineClusterInstancetype objects.
     * @param param the request object
     */
    deleteCollectionVirtualMachineClusterInstancetype(param?: DefaultApiDeleteCollectionVirtualMachineClusterInstancetypeRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a collection of VirtualMachineClusterPreference objects.
     * @param param the request object
     */
    deleteCollectionVirtualMachineClusterPreferenceWithHttpInfo(param?: DefaultApiDeleteCollectionVirtualMachineClusterPreferenceRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a collection of VirtualMachineClusterPreference objects.
     * @param param the request object
     */
    deleteCollectionVirtualMachineClusterPreference(param?: DefaultApiDeleteCollectionVirtualMachineClusterPreferenceRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a MigrationPolicy object.
     * @param param the request object
     */
    deleteMigrationPolicyWithHttpInfo(param: DefaultApiDeleteMigrationPolicyRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a MigrationPolicy object.
     * @param param the request object
     */
    deleteMigrationPolicy(param: DefaultApiDeleteMigrationPolicyRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a KubeVirt object.
     * @param param the request object
     */
    deleteNamespacedKubeVirtWithHttpInfo(param: DefaultApiDeleteNamespacedKubeVirtRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a KubeVirt object.
     * @param param the request object
     */
    deleteNamespacedKubeVirt(param: DefaultApiDeleteNamespacedKubeVirtRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a VirtualMachine object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineWithHttpInfo(param: DefaultApiDeleteNamespacedVirtualMachineRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a VirtualMachine object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachine(param: DefaultApiDeleteNamespacedVirtualMachineRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a VirtualMachineExport object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineExportWithHttpInfo(param: DefaultApiDeleteNamespacedVirtualMachineExportRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a VirtualMachineExport object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineExport(param: DefaultApiDeleteNamespacedVirtualMachineExportRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a VirtualMachineInstance object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineInstanceWithHttpInfo(param: DefaultApiDeleteNamespacedVirtualMachineInstanceRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a VirtualMachineInstance object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineInstance(param: DefaultApiDeleteNamespacedVirtualMachineInstanceRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a VirtualMachineInstanceMigration object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineInstanceMigrationWithHttpInfo(param: DefaultApiDeleteNamespacedVirtualMachineInstanceMigrationRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a VirtualMachineInstanceMigration object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineInstanceMigration(param: DefaultApiDeleteNamespacedVirtualMachineInstanceMigrationRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a VirtualMachineInstancePreset object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineInstancePresetWithHttpInfo(param: DefaultApiDeleteNamespacedVirtualMachineInstancePresetRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a VirtualMachineInstancePreset object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineInstancePreset(param: DefaultApiDeleteNamespacedVirtualMachineInstancePresetRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a VirtualMachineInstanceReplicaSet object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(param: DefaultApiDeleteNamespacedVirtualMachineInstanceReplicaSetRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a VirtualMachineInstanceReplicaSet object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineInstanceReplicaSet(param: DefaultApiDeleteNamespacedVirtualMachineInstanceReplicaSetRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a VirtualMachineInstancetype object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineInstancetypeWithHttpInfo(param: DefaultApiDeleteNamespacedVirtualMachineInstancetypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a VirtualMachineInstancetype object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineInstancetype(param: DefaultApiDeleteNamespacedVirtualMachineInstancetypeRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a VirtualMachinePool object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachinePoolWithHttpInfo(param: DefaultApiDeleteNamespacedVirtualMachinePoolRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a VirtualMachinePool object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachinePool(param: DefaultApiDeleteNamespacedVirtualMachinePoolRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a VirtualMachinePreference object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachinePreferenceWithHttpInfo(param: DefaultApiDeleteNamespacedVirtualMachinePreferenceRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a VirtualMachinePreference object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachinePreference(param: DefaultApiDeleteNamespacedVirtualMachinePreferenceRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a VirtualMachineRestore object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineRestoreWithHttpInfo(param: DefaultApiDeleteNamespacedVirtualMachineRestoreRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a VirtualMachineRestore object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineRestore(param: DefaultApiDeleteNamespacedVirtualMachineRestoreRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a VirtualMachineSnapshot object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineSnapshotWithHttpInfo(param: DefaultApiDeleteNamespacedVirtualMachineSnapshotRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a VirtualMachineSnapshot object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineSnapshot(param: DefaultApiDeleteNamespacedVirtualMachineSnapshotRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a VirtualMachineSnapshotContent object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineSnapshotContentWithHttpInfo(param: DefaultApiDeleteNamespacedVirtualMachineSnapshotContentRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a VirtualMachineSnapshotContent object.
     * @param param the request object
     */
    deleteNamespacedVirtualMachineSnapshotContent(param: DefaultApiDeleteNamespacedVirtualMachineSnapshotContentRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a VirtualMachineClone object.
     * @param param the request object
     */
    deleteVirtualMachineCloneWithHttpInfo(param: DefaultApiDeleteVirtualMachineCloneRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a VirtualMachineClone object.
     * @param param the request object
     */
    deleteVirtualMachineClone(param: DefaultApiDeleteVirtualMachineCloneRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a VirtualMachineClusterInstancetype object.
     * @param param the request object
     */
    deleteVirtualMachineClusterInstancetypeWithHttpInfo(param: DefaultApiDeleteVirtualMachineClusterInstancetypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a VirtualMachineClusterInstancetype object.
     * @param param the request object
     */
    deleteVirtualMachineClusterInstancetype(param: DefaultApiDeleteVirtualMachineClusterInstancetypeRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Delete a VirtualMachineClusterPreference object.
     * @param param the request object
     */
    deleteVirtualMachineClusterPreferenceWithHttpInfo(param: DefaultApiDeleteVirtualMachineClusterPreferenceRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1Status>>;
    /**
     * Delete a VirtualMachineClusterPreference object.
     * @param param the request object
     */
    deleteVirtualMachineClusterPreference(param: DefaultApiDeleteVirtualMachineClusterPreferenceRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1Status>;
    /**
     * Health endpoint
     * @param param the request object
     */
    func13WithHttpInfo(param?: DefaultApiFunc13Request, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Health endpoint
     * @param param the request object
     */
    func13(param?: DefaultApiFunc13Request, options?: ConfigurationOptions): Promise<void>;
    /**
     * @param param the request object
     */
    func6WithHttpInfo(param?: DefaultApiFunc6Request, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * @param param the request object
     */
    func6(param?: DefaultApiFunc6Request, options?: ConfigurationOptions): Promise<void>;
    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    getAPIGroupCloneKubevirtIoWithHttpInfo(param?: DefaultApiGetAPIGroupCloneKubevirtIoRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIGroup>>;
    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    getAPIGroupCloneKubevirtIo(param?: DefaultApiGetAPIGroupCloneKubevirtIoRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIGroup>;
    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    getAPIGroupExportKubevirtIoWithHttpInfo(param?: DefaultApiGetAPIGroupExportKubevirtIoRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIGroup>>;
    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    getAPIGroupExportKubevirtIo(param?: DefaultApiGetAPIGroupExportKubevirtIoRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIGroup>;
    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    getAPIGroupInstancetypeKubevirtIoWithHttpInfo(param?: DefaultApiGetAPIGroupInstancetypeKubevirtIoRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIGroup>>;
    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    getAPIGroupInstancetypeKubevirtIo(param?: DefaultApiGetAPIGroupInstancetypeKubevirtIoRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIGroup>;
    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    getAPIGroupKubevirtIoWithHttpInfo(param?: DefaultApiGetAPIGroupKubevirtIoRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIGroup>>;
    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    getAPIGroupKubevirtIo(param?: DefaultApiGetAPIGroupKubevirtIoRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIGroup>;
    /**
     * Get a KubeVirt API GroupList
     * @param param the request object
     */
    getAPIGroupListWithHttpInfo(param?: DefaultApiGetAPIGroupListRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIGroupList>>;
    /**
     * Get a KubeVirt API GroupList
     * @param param the request object
     */
    getAPIGroupList(param?: DefaultApiGetAPIGroupListRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIGroupList>;
    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    getAPIGroupMigrationsKubevirtIoWithHttpInfo(param?: DefaultApiGetAPIGroupMigrationsKubevirtIoRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIGroup>>;
    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    getAPIGroupMigrationsKubevirtIo(param?: DefaultApiGetAPIGroupMigrationsKubevirtIoRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIGroup>;
    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    getAPIGroupPoolKubevirtIoWithHttpInfo(param?: DefaultApiGetAPIGroupPoolKubevirtIoRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIGroup>>;
    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    getAPIGroupPoolKubevirtIo(param?: DefaultApiGetAPIGroupPoolKubevirtIoRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIGroup>;
    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    getAPIGroupSnapshotKubevirtIoWithHttpInfo(param?: DefaultApiGetAPIGroupSnapshotKubevirtIoRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIGroup>>;
    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    getAPIGroupSnapshotKubevirtIo(param?: DefaultApiGetAPIGroupSnapshotKubevirtIoRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIGroup>;
    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    getAPIResourcesCloneKubevirtIoV1alpha1WithHttpInfo(param?: DefaultApiGetAPIResourcesCloneKubevirtIoV1alpha1Request, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIResourceList>>;
    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    getAPIResourcesCloneKubevirtIoV1alpha1(param?: DefaultApiGetAPIResourcesCloneKubevirtIoV1alpha1Request, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIResourceList>;
    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    getAPIResourcesExportKubevirtIoV1beta1WithHttpInfo(param?: DefaultApiGetAPIResourcesExportKubevirtIoV1beta1Request, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIResourceList>>;
    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    getAPIResourcesExportKubevirtIoV1beta1(param?: DefaultApiGetAPIResourcesExportKubevirtIoV1beta1Request, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIResourceList>;
    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    getAPIResourcesInstancetypeKubevirtIoV1beta1WithHttpInfo(param?: DefaultApiGetAPIResourcesInstancetypeKubevirtIoV1beta1Request, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIResourceList>>;
    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    getAPIResourcesInstancetypeKubevirtIoV1beta1(param?: DefaultApiGetAPIResourcesInstancetypeKubevirtIoV1beta1Request, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIResourceList>;
    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    getAPIResourcesKubevirtIoV1WithHttpInfo(param?: DefaultApiGetAPIResourcesKubevirtIoV1Request, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIResourceList>>;
    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    getAPIResourcesKubevirtIoV1(param?: DefaultApiGetAPIResourcesKubevirtIoV1Request, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIResourceList>;
    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    getAPIResourcesMigrationsKubevirtIoV1alpha1WithHttpInfo(param?: DefaultApiGetAPIResourcesMigrationsKubevirtIoV1alpha1Request, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIResourceList>>;
    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    getAPIResourcesMigrationsKubevirtIoV1alpha1(param?: DefaultApiGetAPIResourcesMigrationsKubevirtIoV1alpha1Request, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIResourceList>;
    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    getAPIResourcesPoolKubevirtIoV1alpha1WithHttpInfo(param?: DefaultApiGetAPIResourcesPoolKubevirtIoV1alpha1Request, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIResourceList>>;
    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    getAPIResourcesPoolKubevirtIoV1alpha1(param?: DefaultApiGetAPIResourcesPoolKubevirtIoV1alpha1Request, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIResourceList>;
    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    getAPIResourcesSnapshotKubevirtIoV1beta1WithHttpInfo(param?: DefaultApiGetAPIResourcesSnapshotKubevirtIoV1beta1Request, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIResourceList>>;
    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    getAPIResourcesSnapshotKubevirtIoV1beta1(param?: DefaultApiGetAPIResourcesSnapshotKubevirtIoV1beta1Request, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIResourceList>;
    /**
     * Get KubeVirt API root paths
     * @param param the request object
     */
    getRootPathsWithHttpInfo(param?: DefaultApiGetRootPathsRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1RootPaths>>;
    /**
     * Get KubeVirt API root paths
     * @param param the request object
     */
    getRootPaths(param?: DefaultApiGetRootPathsRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1RootPaths>;
    /**
     * dump profiler results endpoint
     * @param param the request object
     */
    handleDumpProfilerWithHttpInfo(param?: DefaultApiHandleDumpProfilerRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * dump profiler results endpoint
     * @param param the request object
     */
    handleDumpProfiler(param?: DefaultApiHandleDumpProfilerRequest, options?: ConfigurationOptions): Promise<void>;
    /**
     * start profiler endpoint
     * @param param the request object
     */
    handleStartProfilerWithHttpInfo(param?: DefaultApiHandleStartProfilerRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * start profiler endpoint
     * @param param the request object
     */
    handleStartProfiler(param?: DefaultApiHandleStartProfilerRequest, options?: ConfigurationOptions): Promise<void>;
    /**
     * stop profiler endpoint
     * @param param the request object
     */
    handleStopProfilerWithHttpInfo(param?: DefaultApiHandleStopProfilerRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * stop profiler endpoint
     * @param param the request object
     */
    handleStopProfiler(param?: DefaultApiHandleStopProfilerRequest, options?: ConfigurationOptions): Promise<void>;
    /**
     * Get a list of all KubeVirt objects.
     * @param param the request object
     */
    listKubeVirtForAllNamespacesWithHttpInfo(param?: DefaultApiListKubeVirtForAllNamespacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1KubeVirtList>>;
    /**
     * Get a list of all KubeVirt objects.
     * @param param the request object
     */
    listKubeVirtForAllNamespaces(param?: DefaultApiListKubeVirtForAllNamespacesRequest, options?: ConfigurationOptions): Promise<V1KubeVirtList>;
    /**
     * Get a list of MigrationPolicy objects.
     * @param param the request object
     */
    listMigrationPolicyWithHttpInfo(param?: DefaultApiListMigrationPolicyRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1alpha1MigrationPolicyList>>;
    /**
     * Get a list of MigrationPolicy objects.
     * @param param the request object
     */
    listMigrationPolicy(param?: DefaultApiListMigrationPolicyRequest, options?: ConfigurationOptions): Promise<V1alpha1MigrationPolicyList>;
    /**
     * Get a list of KubeVirt objects.
     * @param param the request object
     */
    listNamespacedKubeVirtWithHttpInfo(param: DefaultApiListNamespacedKubeVirtRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1KubeVirtList>>;
    /**
     * Get a list of KubeVirt objects.
     * @param param the request object
     */
    listNamespacedKubeVirt(param: DefaultApiListNamespacedKubeVirtRequest, options?: ConfigurationOptions): Promise<V1KubeVirtList>;
    /**
     * Get a list of VirtualMachine objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineWithHttpInfo(param: DefaultApiListNamespacedVirtualMachineRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineList>>;
    /**
     * Get a list of VirtualMachine objects.
     * @param param the request object
     */
    listNamespacedVirtualMachine(param: DefaultApiListNamespacedVirtualMachineRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineList>;
    /**
     * Get a list of VirtualMachineExport objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineExportWithHttpInfo(param: DefaultApiListNamespacedVirtualMachineExportRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineExportList>>;
    /**
     * Get a list of VirtualMachineExport objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineExport(param: DefaultApiListNamespacedVirtualMachineExportRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineExportList>;
    /**
     * Get a list of VirtualMachineInstance objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineInstanceWithHttpInfo(param: DefaultApiListNamespacedVirtualMachineInstanceRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceList>>;
    /**
     * Get a list of VirtualMachineInstance objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineInstance(param: DefaultApiListNamespacedVirtualMachineInstanceRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineInstanceList>;
    /**
     * Get a list of VirtualMachineInstanceMigration objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineInstanceMigrationWithHttpInfo(param: DefaultApiListNamespacedVirtualMachineInstanceMigrationRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceMigrationList>>;
    /**
     * Get a list of VirtualMachineInstanceMigration objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineInstanceMigration(param: DefaultApiListNamespacedVirtualMachineInstanceMigrationRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineInstanceMigrationList>;
    /**
     * Get a list of VirtualMachineInstancePreset objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineInstancePresetWithHttpInfo(param: DefaultApiListNamespacedVirtualMachineInstancePresetRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstancePresetList>>;
    /**
     * Get a list of VirtualMachineInstancePreset objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineInstancePreset(param: DefaultApiListNamespacedVirtualMachineInstancePresetRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineInstancePresetList>;
    /**
     * Get a list of VirtualMachineInstanceReplicaSet objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(param: DefaultApiListNamespacedVirtualMachineInstanceReplicaSetRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceReplicaSetList>>;
    /**
     * Get a list of VirtualMachineInstanceReplicaSet objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineInstanceReplicaSet(param: DefaultApiListNamespacedVirtualMachineInstanceReplicaSetRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineInstanceReplicaSetList>;
    /**
     * Get a list of VirtualMachineInstancetype objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineInstancetypeWithHttpInfo(param: DefaultApiListNamespacedVirtualMachineInstancetypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineInstancetypeList>>;
    /**
     * Get a list of VirtualMachineInstancetype objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineInstancetype(param: DefaultApiListNamespacedVirtualMachineInstancetypeRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineInstancetypeList>;
    /**
     * Get a list of VirtualMachinePool objects.
     * @param param the request object
     */
    listNamespacedVirtualMachinePoolWithHttpInfo(param: DefaultApiListNamespacedVirtualMachinePoolRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1alpha1VirtualMachinePoolList>>;
    /**
     * Get a list of VirtualMachinePool objects.
     * @param param the request object
     */
    listNamespacedVirtualMachinePool(param: DefaultApiListNamespacedVirtualMachinePoolRequest, options?: ConfigurationOptions): Promise<V1alpha1VirtualMachinePoolList>;
    /**
     * Get a list of VirtualMachinePreference objects.
     * @param param the request object
     */
    listNamespacedVirtualMachinePreferenceWithHttpInfo(param: DefaultApiListNamespacedVirtualMachinePreferenceRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachinePreferenceList>>;
    /**
     * Get a list of VirtualMachinePreference objects.
     * @param param the request object
     */
    listNamespacedVirtualMachinePreference(param: DefaultApiListNamespacedVirtualMachinePreferenceRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachinePreferenceList>;
    /**
     * Get a list of VirtualMachineRestore objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineRestoreWithHttpInfo(param: DefaultApiListNamespacedVirtualMachineRestoreRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineRestoreList>>;
    /**
     * Get a list of VirtualMachineRestore objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineRestore(param: DefaultApiListNamespacedVirtualMachineRestoreRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineRestoreList>;
    /**
     * Get a list of VirtualMachineSnapshot objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineSnapshotWithHttpInfo(param: DefaultApiListNamespacedVirtualMachineSnapshotRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineSnapshotList>>;
    /**
     * Get a list of VirtualMachineSnapshot objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineSnapshot(param: DefaultApiListNamespacedVirtualMachineSnapshotRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineSnapshotList>;
    /**
     * Get a list of VirtualMachineSnapshotContent objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineSnapshotContentWithHttpInfo(param: DefaultApiListNamespacedVirtualMachineSnapshotContentRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineSnapshotContentList>>;
    /**
     * Get a list of VirtualMachineSnapshotContent objects.
     * @param param the request object
     */
    listNamespacedVirtualMachineSnapshotContent(param: DefaultApiListNamespacedVirtualMachineSnapshotContentRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineSnapshotContentList>;
    /**
     * Get a list of VirtualMachineClone objects.
     * @param param the request object
     */
    listVirtualMachineCloneWithHttpInfo(param?: DefaultApiListVirtualMachineCloneRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1alpha1VirtualMachineCloneList>>;
    /**
     * Get a list of VirtualMachineClone objects.
     * @param param the request object
     */
    listVirtualMachineClone(param?: DefaultApiListVirtualMachineCloneRequest, options?: ConfigurationOptions): Promise<V1alpha1VirtualMachineCloneList>;
    /**
     * Get a list of VirtualMachineClusterInstancetype objects.
     * @param param the request object
     */
    listVirtualMachineClusterInstancetypeWithHttpInfo(param?: DefaultApiListVirtualMachineClusterInstancetypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineClusterInstancetypeList>>;
    /**
     * Get a list of VirtualMachineClusterInstancetype objects.
     * @param param the request object
     */
    listVirtualMachineClusterInstancetype(param?: DefaultApiListVirtualMachineClusterInstancetypeRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineClusterInstancetypeList>;
    /**
     * Get a list of VirtualMachineClusterPreference objects.
     * @param param the request object
     */
    listVirtualMachineClusterPreferenceWithHttpInfo(param?: DefaultApiListVirtualMachineClusterPreferenceRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineClusterPreferenceList>>;
    /**
     * Get a list of VirtualMachineClusterPreference objects.
     * @param param the request object
     */
    listVirtualMachineClusterPreference(param?: DefaultApiListVirtualMachineClusterPreferenceRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineClusterPreferenceList>;
    /**
     * Get a list of all VirtualMachineExport objects.
     * @param param the request object
     */
    listVirtualMachineExportForAllNamespacesWithHttpInfo(param?: DefaultApiListVirtualMachineExportForAllNamespacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineExportList>>;
    /**
     * Get a list of all VirtualMachineExport objects.
     * @param param the request object
     */
    listVirtualMachineExportForAllNamespaces(param?: DefaultApiListVirtualMachineExportForAllNamespacesRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineExportList>;
    /**
     * Get a list of all VirtualMachine objects.
     * @param param the request object
     */
    listVirtualMachineForAllNamespacesWithHttpInfo(param?: DefaultApiListVirtualMachineForAllNamespacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineList>>;
    /**
     * Get a list of all VirtualMachine objects.
     * @param param the request object
     */
    listVirtualMachineForAllNamespaces(param?: DefaultApiListVirtualMachineForAllNamespacesRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineList>;
    /**
     * Get a list of all VirtualMachineInstance objects.
     * @param param the request object
     */
    listVirtualMachineInstanceForAllNamespacesWithHttpInfo(param?: DefaultApiListVirtualMachineInstanceForAllNamespacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceList>>;
    /**
     * Get a list of all VirtualMachineInstance objects.
     * @param param the request object
     */
    listVirtualMachineInstanceForAllNamespaces(param?: DefaultApiListVirtualMachineInstanceForAllNamespacesRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineInstanceList>;
    /**
     * Get a list of all VirtualMachineInstanceMigration objects.
     * @param param the request object
     */
    listVirtualMachineInstanceMigrationForAllNamespacesWithHttpInfo(param?: DefaultApiListVirtualMachineInstanceMigrationForAllNamespacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceMigrationList>>;
    /**
     * Get a list of all VirtualMachineInstanceMigration objects.
     * @param param the request object
     */
    listVirtualMachineInstanceMigrationForAllNamespaces(param?: DefaultApiListVirtualMachineInstanceMigrationForAllNamespacesRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineInstanceMigrationList>;
    /**
     * Get a list of all VirtualMachineInstancePreset objects.
     * @param param the request object
     */
    listVirtualMachineInstancePresetForAllNamespacesWithHttpInfo(param?: DefaultApiListVirtualMachineInstancePresetForAllNamespacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstancePresetList>>;
    /**
     * Get a list of all VirtualMachineInstancePreset objects.
     * @param param the request object
     */
    listVirtualMachineInstancePresetForAllNamespaces(param?: DefaultApiListVirtualMachineInstancePresetForAllNamespacesRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineInstancePresetList>;
    /**
     * Get a list of all VirtualMachineInstanceReplicaSet objects.
     * @param param the request object
     */
    listVirtualMachineInstanceReplicaSetForAllNamespacesWithHttpInfo(param?: DefaultApiListVirtualMachineInstanceReplicaSetForAllNamespacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceReplicaSetList>>;
    /**
     * Get a list of all VirtualMachineInstanceReplicaSet objects.
     * @param param the request object
     */
    listVirtualMachineInstanceReplicaSetForAllNamespaces(param?: DefaultApiListVirtualMachineInstanceReplicaSetForAllNamespacesRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineInstanceReplicaSetList>;
    /**
     * Get a list of all VirtualMachineInstancetype objects.
     * @param param the request object
     */
    listVirtualMachineInstancetypeForAllNamespacesWithHttpInfo(param?: DefaultApiListVirtualMachineInstancetypeForAllNamespacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineInstancetypeList>>;
    /**
     * Get a list of all VirtualMachineInstancetype objects.
     * @param param the request object
     */
    listVirtualMachineInstancetypeForAllNamespaces(param?: DefaultApiListVirtualMachineInstancetypeForAllNamespacesRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineInstancetypeList>;
    /**
     * Get a list of all VirtualMachinePool objects.
     * @param param the request object
     */
    listVirtualMachinePoolForAllNamespacesWithHttpInfo(param?: DefaultApiListVirtualMachinePoolForAllNamespacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1alpha1VirtualMachinePoolList>>;
    /**
     * Get a list of all VirtualMachinePool objects.
     * @param param the request object
     */
    listVirtualMachinePoolForAllNamespaces(param?: DefaultApiListVirtualMachinePoolForAllNamespacesRequest, options?: ConfigurationOptions): Promise<V1alpha1VirtualMachinePoolList>;
    /**
     * Get a list of all VirtualMachinePreference objects.
     * @param param the request object
     */
    listVirtualMachinePreferenceForAllNamespacesWithHttpInfo(param?: DefaultApiListVirtualMachinePreferenceForAllNamespacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachinePreferenceList>>;
    /**
     * Get a list of all VirtualMachinePreference objects.
     * @param param the request object
     */
    listVirtualMachinePreferenceForAllNamespaces(param?: DefaultApiListVirtualMachinePreferenceForAllNamespacesRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachinePreferenceList>;
    /**
     * Get a list of all VirtualMachineRestore objects.
     * @param param the request object
     */
    listVirtualMachineRestoreForAllNamespacesWithHttpInfo(param?: DefaultApiListVirtualMachineRestoreForAllNamespacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineRestoreList>>;
    /**
     * Get a list of all VirtualMachineRestore objects.
     * @param param the request object
     */
    listVirtualMachineRestoreForAllNamespaces(param?: DefaultApiListVirtualMachineRestoreForAllNamespacesRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineRestoreList>;
    /**
     * Get a list of all VirtualMachineSnapshotContent objects.
     * @param param the request object
     */
    listVirtualMachineSnapshotContentForAllNamespacesWithHttpInfo(param?: DefaultApiListVirtualMachineSnapshotContentForAllNamespacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineSnapshotContentList>>;
    /**
     * Get a list of all VirtualMachineSnapshotContent objects.
     * @param param the request object
     */
    listVirtualMachineSnapshotContentForAllNamespaces(param?: DefaultApiListVirtualMachineSnapshotContentForAllNamespacesRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineSnapshotContentList>;
    /**
     * Get a list of all VirtualMachineSnapshot objects.
     * @param param the request object
     */
    listVirtualMachineSnapshotForAllNamespacesWithHttpInfo(param?: DefaultApiListVirtualMachineSnapshotForAllNamespacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineSnapshotList>>;
    /**
     * Get a list of all VirtualMachineSnapshot objects.
     * @param param the request object
     */
    listVirtualMachineSnapshotForAllNamespaces(param?: DefaultApiListVirtualMachineSnapshotForAllNamespacesRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineSnapshotList>;
    /**
     * Patch a MigrationPolicy object.
     * @param param the request object
     */
    patchMigrationPolicyWithHttpInfo(param: DefaultApiPatchMigrationPolicyRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1alpha1MigrationPolicy>>;
    /**
     * Patch a MigrationPolicy object.
     * @param param the request object
     */
    patchMigrationPolicy(param: DefaultApiPatchMigrationPolicyRequest, options?: ConfigurationOptions): Promise<V1alpha1MigrationPolicy>;
    /**
     * Patch a KubeVirt object.
     * @param param the request object
     */
    patchNamespacedKubeVirtWithHttpInfo(param: DefaultApiPatchNamespacedKubeVirtRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1KubeVirt>>;
    /**
     * Patch a KubeVirt object.
     * @param param the request object
     */
    patchNamespacedKubeVirt(param: DefaultApiPatchNamespacedKubeVirtRequest, options?: ConfigurationOptions): Promise<V1KubeVirt>;
    /**
     * Patch a VirtualMachine object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineWithHttpInfo(param: DefaultApiPatchNamespacedVirtualMachineRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachine>>;
    /**
     * Patch a VirtualMachine object.
     * @param param the request object
     */
    patchNamespacedVirtualMachine(param: DefaultApiPatchNamespacedVirtualMachineRequest, options?: ConfigurationOptions): Promise<V1VirtualMachine>;
    /**
     * Patch a VirtualMachineExport object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineExportWithHttpInfo(param: DefaultApiPatchNamespacedVirtualMachineExportRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineExport>>;
    /**
     * Patch a VirtualMachineExport object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineExport(param: DefaultApiPatchNamespacedVirtualMachineExportRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineExport>;
    /**
     * Patch a VirtualMachineInstance object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineInstanceWithHttpInfo(param: DefaultApiPatchNamespacedVirtualMachineInstanceRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstance>>;
    /**
     * Patch a VirtualMachineInstance object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineInstance(param: DefaultApiPatchNamespacedVirtualMachineInstanceRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineInstance>;
    /**
     * Patch a VirtualMachineInstanceMigration object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineInstanceMigrationWithHttpInfo(param: DefaultApiPatchNamespacedVirtualMachineInstanceMigrationRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceMigration>>;
    /**
     * Patch a VirtualMachineInstanceMigration object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineInstanceMigration(param: DefaultApiPatchNamespacedVirtualMachineInstanceMigrationRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineInstanceMigration>;
    /**
     * Patch a VirtualMachineInstancePreset object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineInstancePresetWithHttpInfo(param: DefaultApiPatchNamespacedVirtualMachineInstancePresetRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstancePreset>>;
    /**
     * Patch a VirtualMachineInstancePreset object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineInstancePreset(param: DefaultApiPatchNamespacedVirtualMachineInstancePresetRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineInstancePreset>;
    /**
     * Patch a VirtualMachineInstanceReplicaSet object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(param: DefaultApiPatchNamespacedVirtualMachineInstanceReplicaSetRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceReplicaSet>>;
    /**
     * Patch a VirtualMachineInstanceReplicaSet object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineInstanceReplicaSet(param: DefaultApiPatchNamespacedVirtualMachineInstanceReplicaSetRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineInstanceReplicaSet>;
    /**
     * Patch a VirtualMachineInstancetype object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineInstancetypeWithHttpInfo(param: DefaultApiPatchNamespacedVirtualMachineInstancetypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineInstancetype>>;
    /**
     * Patch a VirtualMachineInstancetype object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineInstancetype(param: DefaultApiPatchNamespacedVirtualMachineInstancetypeRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineInstancetype>;
    /**
     * Patch a VirtualMachinePool object.
     * @param param the request object
     */
    patchNamespacedVirtualMachinePoolWithHttpInfo(param: DefaultApiPatchNamespacedVirtualMachinePoolRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1alpha1VirtualMachinePool>>;
    /**
     * Patch a VirtualMachinePool object.
     * @param param the request object
     */
    patchNamespacedVirtualMachinePool(param: DefaultApiPatchNamespacedVirtualMachinePoolRequest, options?: ConfigurationOptions): Promise<V1alpha1VirtualMachinePool>;
    /**
     * Patch a VirtualMachinePreference object.
     * @param param the request object
     */
    patchNamespacedVirtualMachinePreferenceWithHttpInfo(param: DefaultApiPatchNamespacedVirtualMachinePreferenceRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachinePreference>>;
    /**
     * Patch a VirtualMachinePreference object.
     * @param param the request object
     */
    patchNamespacedVirtualMachinePreference(param: DefaultApiPatchNamespacedVirtualMachinePreferenceRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachinePreference>;
    /**
     * Patch a VirtualMachineRestore object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineRestoreWithHttpInfo(param: DefaultApiPatchNamespacedVirtualMachineRestoreRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineRestore>>;
    /**
     * Patch a VirtualMachineRestore object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineRestore(param: DefaultApiPatchNamespacedVirtualMachineRestoreRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineRestore>;
    /**
     * Patch a VirtualMachineSnapshot object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineSnapshotWithHttpInfo(param: DefaultApiPatchNamespacedVirtualMachineSnapshotRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineSnapshot>>;
    /**
     * Patch a VirtualMachineSnapshot object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineSnapshot(param: DefaultApiPatchNamespacedVirtualMachineSnapshotRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineSnapshot>;
    /**
     * Patch a VirtualMachineSnapshotContent object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineSnapshotContentWithHttpInfo(param: DefaultApiPatchNamespacedVirtualMachineSnapshotContentRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineSnapshotContent>>;
    /**
     * Patch a VirtualMachineSnapshotContent object.
     * @param param the request object
     */
    patchNamespacedVirtualMachineSnapshotContent(param: DefaultApiPatchNamespacedVirtualMachineSnapshotContentRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineSnapshotContent>;
    /**
     * Patch a VirtualMachineClone object.
     * @param param the request object
     */
    patchVirtualMachineCloneWithHttpInfo(param: DefaultApiPatchVirtualMachineCloneRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1alpha1VirtualMachineClone>>;
    /**
     * Patch a VirtualMachineClone object.
     * @param param the request object
     */
    patchVirtualMachineClone(param: DefaultApiPatchVirtualMachineCloneRequest, options?: ConfigurationOptions): Promise<V1alpha1VirtualMachineClone>;
    /**
     * Patch a VirtualMachineClusterInstancetype object.
     * @param param the request object
     */
    patchVirtualMachineClusterInstancetypeWithHttpInfo(param: DefaultApiPatchVirtualMachineClusterInstancetypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineClusterInstancetype>>;
    /**
     * Patch a VirtualMachineClusterInstancetype object.
     * @param param the request object
     */
    patchVirtualMachineClusterInstancetype(param: DefaultApiPatchVirtualMachineClusterInstancetypeRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineClusterInstancetype>;
    /**
     * Patch a VirtualMachineClusterPreference object.
     * @param param the request object
     */
    patchVirtualMachineClusterPreferenceWithHttpInfo(param: DefaultApiPatchVirtualMachineClusterPreferenceRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineClusterPreference>>;
    /**
     * Patch a VirtualMachineClusterPreference object.
     * @param param the request object
     */
    patchVirtualMachineClusterPreference(param: DefaultApiPatchVirtualMachineClusterPreferenceRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineClusterPreference>;
    /**
     * Get a MigrationPolicy object.
     * @param param the request object
     */
    readMigrationPolicyWithHttpInfo(param: DefaultApiReadMigrationPolicyRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1alpha1MigrationPolicy>>;
    /**
     * Get a MigrationPolicy object.
     * @param param the request object
     */
    readMigrationPolicy(param: DefaultApiReadMigrationPolicyRequest, options?: ConfigurationOptions): Promise<V1alpha1MigrationPolicy>;
    /**
     * Get a KubeVirt object.
     * @param param the request object
     */
    readNamespacedKubeVirtWithHttpInfo(param: DefaultApiReadNamespacedKubeVirtRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1KubeVirt>>;
    /**
     * Get a KubeVirt object.
     * @param param the request object
     */
    readNamespacedKubeVirt(param: DefaultApiReadNamespacedKubeVirtRequest, options?: ConfigurationOptions): Promise<V1KubeVirt>;
    /**
     * Get a VirtualMachine object.
     * @param param the request object
     */
    readNamespacedVirtualMachineWithHttpInfo(param: DefaultApiReadNamespacedVirtualMachineRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachine>>;
    /**
     * Get a VirtualMachine object.
     * @param param the request object
     */
    readNamespacedVirtualMachine(param: DefaultApiReadNamespacedVirtualMachineRequest, options?: ConfigurationOptions): Promise<V1VirtualMachine>;
    /**
     * Get a VirtualMachineExport object.
     * @param param the request object
     */
    readNamespacedVirtualMachineExportWithHttpInfo(param: DefaultApiReadNamespacedVirtualMachineExportRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineExport>>;
    /**
     * Get a VirtualMachineExport object.
     * @param param the request object
     */
    readNamespacedVirtualMachineExport(param: DefaultApiReadNamespacedVirtualMachineExportRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineExport>;
    /**
     * Get a VirtualMachineInstance object.
     * @param param the request object
     */
    readNamespacedVirtualMachineInstanceWithHttpInfo(param: DefaultApiReadNamespacedVirtualMachineInstanceRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstance>>;
    /**
     * Get a VirtualMachineInstance object.
     * @param param the request object
     */
    readNamespacedVirtualMachineInstance(param: DefaultApiReadNamespacedVirtualMachineInstanceRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineInstance>;
    /**
     * Get a VirtualMachineInstanceMigration object.
     * @param param the request object
     */
    readNamespacedVirtualMachineInstanceMigrationWithHttpInfo(param: DefaultApiReadNamespacedVirtualMachineInstanceMigrationRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceMigration>>;
    /**
     * Get a VirtualMachineInstanceMigration object.
     * @param param the request object
     */
    readNamespacedVirtualMachineInstanceMigration(param: DefaultApiReadNamespacedVirtualMachineInstanceMigrationRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineInstanceMigration>;
    /**
     * Get a VirtualMachineInstancePreset object.
     * @param param the request object
     */
    readNamespacedVirtualMachineInstancePresetWithHttpInfo(param: DefaultApiReadNamespacedVirtualMachineInstancePresetRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstancePreset>>;
    /**
     * Get a VirtualMachineInstancePreset object.
     * @param param the request object
     */
    readNamespacedVirtualMachineInstancePreset(param: DefaultApiReadNamespacedVirtualMachineInstancePresetRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineInstancePreset>;
    /**
     * Get a VirtualMachineInstanceReplicaSet object.
     * @param param the request object
     */
    readNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(param: DefaultApiReadNamespacedVirtualMachineInstanceReplicaSetRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceReplicaSet>>;
    /**
     * Get a VirtualMachineInstanceReplicaSet object.
     * @param param the request object
     */
    readNamespacedVirtualMachineInstanceReplicaSet(param: DefaultApiReadNamespacedVirtualMachineInstanceReplicaSetRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineInstanceReplicaSet>;
    /**
     * Get a VirtualMachineInstancetype object.
     * @param param the request object
     */
    readNamespacedVirtualMachineInstancetypeWithHttpInfo(param: DefaultApiReadNamespacedVirtualMachineInstancetypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineInstancetype>>;
    /**
     * Get a VirtualMachineInstancetype object.
     * @param param the request object
     */
    readNamespacedVirtualMachineInstancetype(param: DefaultApiReadNamespacedVirtualMachineInstancetypeRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineInstancetype>;
    /**
     * Get a VirtualMachinePool object.
     * @param param the request object
     */
    readNamespacedVirtualMachinePoolWithHttpInfo(param: DefaultApiReadNamespacedVirtualMachinePoolRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1alpha1VirtualMachinePool>>;
    /**
     * Get a VirtualMachinePool object.
     * @param param the request object
     */
    readNamespacedVirtualMachinePool(param: DefaultApiReadNamespacedVirtualMachinePoolRequest, options?: ConfigurationOptions): Promise<V1alpha1VirtualMachinePool>;
    /**
     * Get a VirtualMachinePreference object.
     * @param param the request object
     */
    readNamespacedVirtualMachinePreferenceWithHttpInfo(param: DefaultApiReadNamespacedVirtualMachinePreferenceRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachinePreference>>;
    /**
     * Get a VirtualMachinePreference object.
     * @param param the request object
     */
    readNamespacedVirtualMachinePreference(param: DefaultApiReadNamespacedVirtualMachinePreferenceRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachinePreference>;
    /**
     * Get a VirtualMachineRestore object.
     * @param param the request object
     */
    readNamespacedVirtualMachineRestoreWithHttpInfo(param: DefaultApiReadNamespacedVirtualMachineRestoreRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineRestore>>;
    /**
     * Get a VirtualMachineRestore object.
     * @param param the request object
     */
    readNamespacedVirtualMachineRestore(param: DefaultApiReadNamespacedVirtualMachineRestoreRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineRestore>;
    /**
     * Get a VirtualMachineSnapshot object.
     * @param param the request object
     */
    readNamespacedVirtualMachineSnapshotWithHttpInfo(param: DefaultApiReadNamespacedVirtualMachineSnapshotRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineSnapshot>>;
    /**
     * Get a VirtualMachineSnapshot object.
     * @param param the request object
     */
    readNamespacedVirtualMachineSnapshot(param: DefaultApiReadNamespacedVirtualMachineSnapshotRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineSnapshot>;
    /**
     * Get a VirtualMachineSnapshotContent object.
     * @param param the request object
     */
    readNamespacedVirtualMachineSnapshotContentWithHttpInfo(param: DefaultApiReadNamespacedVirtualMachineSnapshotContentRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineSnapshotContent>>;
    /**
     * Get a VirtualMachineSnapshotContent object.
     * @param param the request object
     */
    readNamespacedVirtualMachineSnapshotContent(param: DefaultApiReadNamespacedVirtualMachineSnapshotContentRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineSnapshotContent>;
    /**
     * Get a VirtualMachineClone object.
     * @param param the request object
     */
    readVirtualMachineCloneWithHttpInfo(param: DefaultApiReadVirtualMachineCloneRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1alpha1VirtualMachineClone>>;
    /**
     * Get a VirtualMachineClone object.
     * @param param the request object
     */
    readVirtualMachineClone(param: DefaultApiReadVirtualMachineCloneRequest, options?: ConfigurationOptions): Promise<V1alpha1VirtualMachineClone>;
    /**
     * Get a VirtualMachineClusterInstancetype object.
     * @param param the request object
     */
    readVirtualMachineClusterInstancetypeWithHttpInfo(param: DefaultApiReadVirtualMachineClusterInstancetypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineClusterInstancetype>>;
    /**
     * Get a VirtualMachineClusterInstancetype object.
     * @param param the request object
     */
    readVirtualMachineClusterInstancetype(param: DefaultApiReadVirtualMachineClusterInstancetypeRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineClusterInstancetype>;
    /**
     * Get a VirtualMachineClusterPreference object.
     * @param param the request object
     */
    readVirtualMachineClusterPreferenceWithHttpInfo(param: DefaultApiReadVirtualMachineClusterPreferenceRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineClusterPreference>>;
    /**
     * Get a VirtualMachineClusterPreference object.
     * @param param the request object
     */
    readVirtualMachineClusterPreference(param: DefaultApiReadVirtualMachineClusterPreferenceRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineClusterPreference>;
    /**
     * Update a MigrationPolicy object.
     * @param param the request object
     */
    replaceMigrationPolicyWithHttpInfo(param: DefaultApiReplaceMigrationPolicyRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1alpha1MigrationPolicy>>;
    /**
     * Update a MigrationPolicy object.
     * @param param the request object
     */
    replaceMigrationPolicy(param: DefaultApiReplaceMigrationPolicyRequest, options?: ConfigurationOptions): Promise<V1alpha1MigrationPolicy>;
    /**
     * Update a KubeVirt object.
     * @param param the request object
     */
    replaceNamespacedKubeVirtWithHttpInfo(param: DefaultApiReplaceNamespacedKubeVirtRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1KubeVirt>>;
    /**
     * Update a KubeVirt object.
     * @param param the request object
     */
    replaceNamespacedKubeVirt(param: DefaultApiReplaceNamespacedKubeVirtRequest, options?: ConfigurationOptions): Promise<V1KubeVirt>;
    /**
     * Update a VirtualMachine object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineWithHttpInfo(param: DefaultApiReplaceNamespacedVirtualMachineRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachine>>;
    /**
     * Update a VirtualMachine object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachine(param: DefaultApiReplaceNamespacedVirtualMachineRequest, options?: ConfigurationOptions): Promise<V1VirtualMachine>;
    /**
     * Update a VirtualMachineExport object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineExportWithHttpInfo(param: DefaultApiReplaceNamespacedVirtualMachineExportRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineExport>>;
    /**
     * Update a VirtualMachineExport object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineExport(param: DefaultApiReplaceNamespacedVirtualMachineExportRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineExport>;
    /**
     * Update a VirtualMachineInstance object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineInstanceWithHttpInfo(param: DefaultApiReplaceNamespacedVirtualMachineInstanceRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstance>>;
    /**
     * Update a VirtualMachineInstance object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineInstance(param: DefaultApiReplaceNamespacedVirtualMachineInstanceRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineInstance>;
    /**
     * Update a VirtualMachineInstanceMigration object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineInstanceMigrationWithHttpInfo(param: DefaultApiReplaceNamespacedVirtualMachineInstanceMigrationRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceMigration>>;
    /**
     * Update a VirtualMachineInstanceMigration object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineInstanceMigration(param: DefaultApiReplaceNamespacedVirtualMachineInstanceMigrationRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineInstanceMigration>;
    /**
     * Update a VirtualMachineInstancePreset object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineInstancePresetWithHttpInfo(param: DefaultApiReplaceNamespacedVirtualMachineInstancePresetRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstancePreset>>;
    /**
     * Update a VirtualMachineInstancePreset object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineInstancePreset(param: DefaultApiReplaceNamespacedVirtualMachineInstancePresetRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineInstancePreset>;
    /**
     * Update a VirtualMachineInstanceReplicaSet object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(param: DefaultApiReplaceNamespacedVirtualMachineInstanceReplicaSetRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceReplicaSet>>;
    /**
     * Update a VirtualMachineInstanceReplicaSet object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineInstanceReplicaSet(param: DefaultApiReplaceNamespacedVirtualMachineInstanceReplicaSetRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineInstanceReplicaSet>;
    /**
     * Update a VirtualMachineInstancetype object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineInstancetypeWithHttpInfo(param: DefaultApiReplaceNamespacedVirtualMachineInstancetypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineInstancetype>>;
    /**
     * Update a VirtualMachineInstancetype object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineInstancetype(param: DefaultApiReplaceNamespacedVirtualMachineInstancetypeRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineInstancetype>;
    /**
     * Update a VirtualMachinePool object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachinePoolWithHttpInfo(param: DefaultApiReplaceNamespacedVirtualMachinePoolRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1alpha1VirtualMachinePool>>;
    /**
     * Update a VirtualMachinePool object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachinePool(param: DefaultApiReplaceNamespacedVirtualMachinePoolRequest, options?: ConfigurationOptions): Promise<V1alpha1VirtualMachinePool>;
    /**
     * Update a VirtualMachinePreference object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachinePreferenceWithHttpInfo(param: DefaultApiReplaceNamespacedVirtualMachinePreferenceRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachinePreference>>;
    /**
     * Update a VirtualMachinePreference object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachinePreference(param: DefaultApiReplaceNamespacedVirtualMachinePreferenceRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachinePreference>;
    /**
     * Update a VirtualMachineRestore object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineRestoreWithHttpInfo(param: DefaultApiReplaceNamespacedVirtualMachineRestoreRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineRestore>>;
    /**
     * Update a VirtualMachineRestore object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineRestore(param: DefaultApiReplaceNamespacedVirtualMachineRestoreRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineRestore>;
    /**
     * Update a VirtualMachineSnapshot object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineSnapshotWithHttpInfo(param: DefaultApiReplaceNamespacedVirtualMachineSnapshotRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineSnapshot>>;
    /**
     * Update a VirtualMachineSnapshot object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineSnapshot(param: DefaultApiReplaceNamespacedVirtualMachineSnapshotRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineSnapshot>;
    /**
     * Update a VirtualMachineSnapshotContent object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineSnapshotContentWithHttpInfo(param: DefaultApiReplaceNamespacedVirtualMachineSnapshotContentRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineSnapshotContent>>;
    /**
     * Update a VirtualMachineSnapshotContent object.
     * @param param the request object
     */
    replaceNamespacedVirtualMachineSnapshotContent(param: DefaultApiReplaceNamespacedVirtualMachineSnapshotContentRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineSnapshotContent>;
    /**
     * Update a VirtualMachineClone object.
     * @param param the request object
     */
    replaceVirtualMachineCloneWithHttpInfo(param: DefaultApiReplaceVirtualMachineCloneRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1alpha1VirtualMachineClone>>;
    /**
     * Update a VirtualMachineClone object.
     * @param param the request object
     */
    replaceVirtualMachineClone(param: DefaultApiReplaceVirtualMachineCloneRequest, options?: ConfigurationOptions): Promise<V1alpha1VirtualMachineClone>;
    /**
     * Update a VirtualMachineClusterInstancetype object.
     * @param param the request object
     */
    replaceVirtualMachineClusterInstancetypeWithHttpInfo(param: DefaultApiReplaceVirtualMachineClusterInstancetypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineClusterInstancetype>>;
    /**
     * Update a VirtualMachineClusterInstancetype object.
     * @param param the request object
     */
    replaceVirtualMachineClusterInstancetype(param: DefaultApiReplaceVirtualMachineClusterInstancetypeRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineClusterInstancetype>;
    /**
     * Update a VirtualMachineClusterPreference object.
     * @param param the request object
     */
    replaceVirtualMachineClusterPreferenceWithHttpInfo(param: DefaultApiReplaceVirtualMachineClusterPreferenceRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1beta1VirtualMachineClusterPreference>>;
    /**
     * Update a VirtualMachineClusterPreference object.
     * @param param the request object
     */
    replaceVirtualMachineClusterPreference(param: DefaultApiReplaceVirtualMachineClusterPreferenceRequest, options?: ConfigurationOptions): Promise<V1beta1VirtualMachineClusterPreference>;
    /**
     * Health endpoint
     * @param param the request object
     */
    v1CheckHealthWithHttpInfo(param?: DefaultApiV1CheckHealthRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Health endpoint
     * @param param the request object
     */
    v1CheckHealth(param?: DefaultApiV1CheckHealthRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Open a websocket connection to a serial console on the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1ConsoleWithHttpInfo(param: DefaultApiV1ConsoleRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection to a serial console on the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1Console(param: DefaultApiV1ConsoleRequest, options?: ConfigurationOptions): Promise<void>;
    /**
     * Expands instancetype and preference into the passed VirtualMachine object.
     * @param param the request object
     */
    v1ExpandSpecWithHttpInfo(param: DefaultApiV1ExpandSpecRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Expands instancetype and preference into the passed VirtualMachine object.
     * @param param the request object
     */
    v1ExpandSpec(param: DefaultApiV1ExpandSpecRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Get list of active filesystems on guest machine via guest agent
     * @param param the request object
     */
    v1FilesystemlistWithHttpInfo(param: DefaultApiV1FilesystemlistRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceFileSystemList>>;
    /**
     * Get list of active filesystems on guest machine via guest agent
     * @param param the request object
     */
    v1Filesystemlist(param: DefaultApiV1FilesystemlistRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineInstanceFileSystemList>;
    /**
     * Freeze a VirtualMachineInstance object.
     * @param param the request object
     */
    v1FreezeWithHttpInfo(param: DefaultApiV1FreezeRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Freeze a VirtualMachineInstance object.
     * @param param the request object
     */
    v1Freeze(param: DefaultApiV1FreezeRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Get a KubeVirt API Group
     * @param param the request object
     */
    v1GetSubAPIGroupWithHttpInfo(param?: DefaultApiV1GetSubAPIGroupRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIGroup>>;
    /**
     * Get a KubeVirt API Group
     * @param param the request object
     */
    v1GetSubAPIGroup(param?: DefaultApiV1GetSubAPIGroupRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIGroup>;
    /**
     * @param param the request object
     */
    v1GuestfsWithHttpInfo(param?: DefaultApiV1GuestfsRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * @param param the request object
     */
    v1Guestfs(param?: DefaultApiV1GuestfsRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Get guest agent os information
     * @param param the request object
     */
    v1GuestosinfoWithHttpInfo(param: DefaultApiV1GuestosinfoRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceGuestAgentInfo>>;
    /**
     * Get guest agent os information
     * @param param the request object
     */
    v1Guestosinfo(param: DefaultApiV1GuestosinfoRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineInstanceGuestAgentInfo>;
    /**
     * Dumps a VirtualMachineInstance memory.
     * @param param the request object
     */
    v1MemoryDumpWithHttpInfo(param: DefaultApiV1MemoryDumpRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Dumps a VirtualMachineInstance memory.
     * @param param the request object
     */
    v1MemoryDump(param: DefaultApiV1MemoryDumpRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Migrate a running VirtualMachine to another node.
     * @param param the request object
     */
    v1MigrateWithHttpInfo(param: DefaultApiV1MigrateRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Migrate a running VirtualMachine to another node.
     * @param param the request object
     */
    v1Migrate(param: DefaultApiV1MigrateRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Pause a VirtualMachineInstance object.
     * @param param the request object
     */
    v1PauseWithHttpInfo(param: DefaultApiV1PauseRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Pause a VirtualMachineInstance object.
     * @param param the request object
     */
    v1Pause(param: DefaultApiV1PauseRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Remove memory dump association.
     * @param param the request object
     */
    v1RemoveMemoryDumpWithHttpInfo(param: DefaultApiV1RemoveMemoryDumpRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Remove memory dump association.
     * @param param the request object
     */
    v1RemoveMemoryDump(param: DefaultApiV1RemoveMemoryDumpRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Restart a VirtualMachine object.
     * @param param the request object
     */
    v1RestartWithHttpInfo(param: DefaultApiV1RestartRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Restart a VirtualMachine object.
     * @param param the request object
     */
    v1Restart(param: DefaultApiV1RestartRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Fetch SEV certificate chain from the node where Virtual Machine is scheduled
     * @param param the request object
     */
    v1SEVFetchCertChainWithHttpInfo(param: DefaultApiV1SEVFetchCertChainRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1SEVPlatformInfo>>;
    /**
     * Fetch SEV certificate chain from the node where Virtual Machine is scheduled
     * @param param the request object
     */
    v1SEVFetchCertChain(param: DefaultApiV1SEVFetchCertChainRequest, options?: ConfigurationOptions): Promise<V1SEVPlatformInfo>;
    /**
     * Inject SEV launch secret into a Virtual Machine
     * @param param the request object
     */
    v1SEVInjectLaunchSecretWithHttpInfo(param: DefaultApiV1SEVInjectLaunchSecretRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Inject SEV launch secret into a Virtual Machine
     * @param param the request object
     */
    v1SEVInjectLaunchSecret(param: DefaultApiV1SEVInjectLaunchSecretRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Query SEV launch measurement from a Virtual Machine
     * @param param the request object
     */
    v1SEVQueryLaunchMeasurementWithHttpInfo(param: DefaultApiV1SEVQueryLaunchMeasurementRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1SEVMeasurementInfo>>;
    /**
     * Query SEV launch measurement from a Virtual Machine
     * @param param the request object
     */
    v1SEVQueryLaunchMeasurement(param: DefaultApiV1SEVQueryLaunchMeasurementRequest, options?: ConfigurationOptions): Promise<V1SEVMeasurementInfo>;
    /**
     * Setup SEV session parameters for a Virtual Machine
     * @param param the request object
     */
    v1SEVSetupSessionWithHttpInfo(param: DefaultApiV1SEVSetupSessionRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Setup SEV session parameters for a Virtual Machine
     * @param param the request object
     */
    v1SEVSetupSession(param: DefaultApiV1SEVSetupSessionRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Soft reboot a VirtualMachineInstance object.
     * @param param the request object
     */
    v1SoftRebootWithHttpInfo(param: DefaultApiV1SoftRebootRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Soft reboot a VirtualMachineInstance object.
     * @param param the request object
     */
    v1SoftReboot(param: DefaultApiV1SoftRebootRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Start a VirtualMachine object.
     * @param param the request object
     */
    v1StartWithHttpInfo(param: DefaultApiV1StartRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Start a VirtualMachine object.
     * @param param the request object
     */
    v1Start(param: DefaultApiV1StartRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Stop a VirtualMachine object.
     * @param param the request object
     */
    v1StopWithHttpInfo(param: DefaultApiV1StopRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Stop a VirtualMachine object.
     * @param param the request object
     */
    v1Stop(param: DefaultApiV1StopRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Unfreeze a VirtualMachineInstance object.
     * @param param the request object
     */
    v1UnfreezeWithHttpInfo(param: DefaultApiV1UnfreezeRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Unfreeze a VirtualMachineInstance object.
     * @param param the request object
     */
    v1Unfreeze(param: DefaultApiV1UnfreezeRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Unpause a VirtualMachineInstance object.
     * @param param the request object
     */
    v1UnpauseWithHttpInfo(param: DefaultApiV1UnpauseRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Unpause a VirtualMachineInstance object.
     * @param param the request object
     */
    v1Unpause(param: DefaultApiV1UnpauseRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Get list of active users via guest agent
     * @param param the request object
     */
    v1UserlistWithHttpInfo(param: DefaultApiV1UserlistRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceGuestOSUserList>>;
    /**
     * Get list of active users via guest agent
     * @param param the request object
     */
    v1Userlist(param: DefaultApiV1UserlistRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineInstanceGuestOSUserList>;
    /**
     * Open a websocket connection to connect to VNC on the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1VNCWithHttpInfo(param: DefaultApiV1VNCRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection to connect to VNC on the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1VNC(param: DefaultApiV1VNCRequest, options?: ConfigurationOptions): Promise<void>;
    /**
     * Get a PNG VNC screenshot of the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1VNCScreenshotWithHttpInfo(param: DefaultApiV1VNCScreenshotRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Get a PNG VNC screenshot of the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1VNCScreenshot(param: DefaultApiV1VNCScreenshotRequest, options?: ConfigurationOptions): Promise<void>;
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port via VSOCK.
     * @param param the request object
     */
    v1VSOCKWithHttpInfo(param: DefaultApiV1VSOCKRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port via VSOCK.
     * @param param the request object
     */
    v1VSOCK(param: DefaultApiV1VSOCKRequest, options?: ConfigurationOptions): Promise<void>;
    /**
     * @param param the request object
     */
    v1VersionWithHttpInfo(param?: DefaultApiV1VersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * @param param the request object
     */
    v1Version(param?: DefaultApiV1VersionRequest, options?: ConfigurationOptions): Promise<void>;
    /**
     * Health endpoint
     * @param param the request object
     */
    v1alpha3CheckHealthWithHttpInfo(param?: DefaultApiV1alpha3CheckHealthRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Health endpoint
     * @param param the request object
     */
    v1alpha3CheckHealth(param?: DefaultApiV1alpha3CheckHealthRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Open a websocket connection to a serial console on the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1alpha3ConsoleWithHttpInfo(param: DefaultApiV1alpha3ConsoleRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection to a serial console on the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1alpha3Console(param: DefaultApiV1alpha3ConsoleRequest, options?: ConfigurationOptions): Promise<void>;
    /**
     * Expands instancetype and preference into the passed VirtualMachine object.
     * @param param the request object
     */
    v1alpha3ExpandSpecWithHttpInfo(param: DefaultApiV1alpha3ExpandSpecRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Expands instancetype and preference into the passed VirtualMachine object.
     * @param param the request object
     */
    v1alpha3ExpandSpec(param: DefaultApiV1alpha3ExpandSpecRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Get list of active filesystems on guest machine via guest agent
     * @param param the request object
     */
    v1alpha3FilesystemlistWithHttpInfo(param: DefaultApiV1alpha3FilesystemlistRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceFileSystemList>>;
    /**
     * Get list of active filesystems on guest machine via guest agent
     * @param param the request object
     */
    v1alpha3Filesystemlist(param: DefaultApiV1alpha3FilesystemlistRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineInstanceFileSystemList>;
    /**
     * Freeze a VirtualMachineInstance object.
     * @param param the request object
     */
    v1alpha3FreezeWithHttpInfo(param: DefaultApiV1alpha3FreezeRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Freeze a VirtualMachineInstance object.
     * @param param the request object
     */
    v1alpha3Freeze(param: DefaultApiV1alpha3FreezeRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * @param param the request object
     */
    v1alpha3GuestfsWithHttpInfo(param?: DefaultApiV1alpha3GuestfsRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * @param param the request object
     */
    v1alpha3Guestfs(param?: DefaultApiV1alpha3GuestfsRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Get guest agent os information
     * @param param the request object
     */
    v1alpha3GuestosinfoWithHttpInfo(param: DefaultApiV1alpha3GuestosinfoRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceGuestAgentInfo>>;
    /**
     * Get guest agent os information
     * @param param the request object
     */
    v1alpha3Guestosinfo(param: DefaultApiV1alpha3GuestosinfoRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineInstanceGuestAgentInfo>;
    /**
     * Dumps a VirtualMachineInstance memory.
     * @param param the request object
     */
    v1alpha3MemoryDumpWithHttpInfo(param: DefaultApiV1alpha3MemoryDumpRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Dumps a VirtualMachineInstance memory.
     * @param param the request object
     */
    v1alpha3MemoryDump(param: DefaultApiV1alpha3MemoryDumpRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Migrate a running VirtualMachine to another node.
     * @param param the request object
     */
    v1alpha3MigrateWithHttpInfo(param: DefaultApiV1alpha3MigrateRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Migrate a running VirtualMachine to another node.
     * @param param the request object
     */
    v1alpha3Migrate(param: DefaultApiV1alpha3MigrateRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Pause a VirtualMachineInstance object.
     * @param param the request object
     */
    v1alpha3PauseWithHttpInfo(param: DefaultApiV1alpha3PauseRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Pause a VirtualMachineInstance object.
     * @param param the request object
     */
    v1alpha3Pause(param: DefaultApiV1alpha3PauseRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Remove memory dump association.
     * @param param the request object
     */
    v1alpha3RemoveMemoryDumpWithHttpInfo(param: DefaultApiV1alpha3RemoveMemoryDumpRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Remove memory dump association.
     * @param param the request object
     */
    v1alpha3RemoveMemoryDump(param: DefaultApiV1alpha3RemoveMemoryDumpRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Restart a VirtualMachine object.
     * @param param the request object
     */
    v1alpha3RestartWithHttpInfo(param: DefaultApiV1alpha3RestartRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Restart a VirtualMachine object.
     * @param param the request object
     */
    v1alpha3Restart(param: DefaultApiV1alpha3RestartRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Fetch SEV certificate chain from the node where Virtual Machine is scheduled
     * @param param the request object
     */
    v1alpha3SEVFetchCertChainWithHttpInfo(param: DefaultApiV1alpha3SEVFetchCertChainRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1SEVPlatformInfo>>;
    /**
     * Fetch SEV certificate chain from the node where Virtual Machine is scheduled
     * @param param the request object
     */
    v1alpha3SEVFetchCertChain(param: DefaultApiV1alpha3SEVFetchCertChainRequest, options?: ConfigurationOptions): Promise<V1SEVPlatformInfo>;
    /**
     * Inject SEV launch secret into a Virtual Machine
     * @param param the request object
     */
    v1alpha3SEVInjectLaunchSecretWithHttpInfo(param: DefaultApiV1alpha3SEVInjectLaunchSecretRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Inject SEV launch secret into a Virtual Machine
     * @param param the request object
     */
    v1alpha3SEVInjectLaunchSecret(param: DefaultApiV1alpha3SEVInjectLaunchSecretRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Query SEV launch measurement from a Virtual Machine
     * @param param the request object
     */
    v1alpha3SEVQueryLaunchMeasurementWithHttpInfo(param: DefaultApiV1alpha3SEVQueryLaunchMeasurementRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1SEVMeasurementInfo>>;
    /**
     * Query SEV launch measurement from a Virtual Machine
     * @param param the request object
     */
    v1alpha3SEVQueryLaunchMeasurement(param: DefaultApiV1alpha3SEVQueryLaunchMeasurementRequest, options?: ConfigurationOptions): Promise<V1SEVMeasurementInfo>;
    /**
     * Setup SEV session parameters for a Virtual Machine
     * @param param the request object
     */
    v1alpha3SEVSetupSessionWithHttpInfo(param: DefaultApiV1alpha3SEVSetupSessionRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Setup SEV session parameters for a Virtual Machine
     * @param param the request object
     */
    v1alpha3SEVSetupSession(param: DefaultApiV1alpha3SEVSetupSessionRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Soft reboot a VirtualMachineInstance object.
     * @param param the request object
     */
    v1alpha3SoftRebootWithHttpInfo(param: DefaultApiV1alpha3SoftRebootRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Soft reboot a VirtualMachineInstance object.
     * @param param the request object
     */
    v1alpha3SoftReboot(param: DefaultApiV1alpha3SoftRebootRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Start a VirtualMachine object.
     * @param param the request object
     */
    v1alpha3StartWithHttpInfo(param: DefaultApiV1alpha3StartRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Start a VirtualMachine object.
     * @param param the request object
     */
    v1alpha3Start(param: DefaultApiV1alpha3StartRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Stop a VirtualMachine object.
     * @param param the request object
     */
    v1alpha3StopWithHttpInfo(param: DefaultApiV1alpha3StopRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Stop a VirtualMachine object.
     * @param param the request object
     */
    v1alpha3Stop(param: DefaultApiV1alpha3StopRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Unfreeze a VirtualMachineInstance object.
     * @param param the request object
     */
    v1alpha3UnfreezeWithHttpInfo(param: DefaultApiV1alpha3UnfreezeRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Unfreeze a VirtualMachineInstance object.
     * @param param the request object
     */
    v1alpha3Unfreeze(param: DefaultApiV1alpha3UnfreezeRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Unpause a VirtualMachineInstance object.
     * @param param the request object
     */
    v1alpha3UnpauseWithHttpInfo(param: DefaultApiV1alpha3UnpauseRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Unpause a VirtualMachineInstance object.
     * @param param the request object
     */
    v1alpha3Unpause(param: DefaultApiV1alpha3UnpauseRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Get list of active users via guest agent
     * @param param the request object
     */
    v1alpha3UserlistWithHttpInfo(param: DefaultApiV1alpha3UserlistRequest, options?: ConfigurationOptions): Promise<HttpInfo<V1VirtualMachineInstanceGuestOSUserList>>;
    /**
     * Get list of active users via guest agent
     * @param param the request object
     */
    v1alpha3Userlist(param: DefaultApiV1alpha3UserlistRequest, options?: ConfigurationOptions): Promise<V1VirtualMachineInstanceGuestOSUserList>;
    /**
     * Open a websocket connection to connect to VNC on the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1alpha3VNCWithHttpInfo(param: DefaultApiV1alpha3VNCRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection to connect to VNC on the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1alpha3VNC(param: DefaultApiV1alpha3VNCRequest, options?: ConfigurationOptions): Promise<void>;
    /**
     * Get a PNG VNC screenshot of the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1alpha3VNCScreenshotWithHttpInfo(param: DefaultApiV1alpha3VNCScreenshotRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Get a PNG VNC screenshot of the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1alpha3VNCScreenshot(param: DefaultApiV1alpha3VNCScreenshotRequest, options?: ConfigurationOptions): Promise<void>;
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port via VSOCK.
     * @param param the request object
     */
    v1alpha3VSOCKWithHttpInfo(param: DefaultApiV1alpha3VSOCKRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port via VSOCK.
     * @param param the request object
     */
    v1alpha3VSOCK(param: DefaultApiV1alpha3VSOCKRequest, options?: ConfigurationOptions): Promise<void>;
    /**
     * @param param the request object
     */
    v1alpha3VersionWithHttpInfo(param?: DefaultApiV1alpha3VersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * @param param the request object
     */
    v1alpha3Version(param?: DefaultApiV1alpha3VersionRequest, options?: ConfigurationOptions): Promise<void>;
    /**
     * @param param the request object
     */
    v1alpha3dumpClusterProfilerWithHttpInfo(param?: DefaultApiV1alpha3dumpClusterProfilerRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * @param param the request object
     */
    v1alpha3dumpClusterProfiler(param?: DefaultApiV1alpha3dumpClusterProfilerRequest, options?: ConfigurationOptions): Promise<void>;
    /**
     * Get a KubeVirt API resources
     * @param param the request object
     */
    v1alpha3getAPISubResourcesWithHttpInfo(param?: DefaultApiV1alpha3getAPISubResourcesRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIResourceList>>;
    /**
     * Get a KubeVirt API resources
     * @param param the request object
     */
    v1alpha3getAPISubResources(param?: DefaultApiV1alpha3getAPISubResourcesRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIResourceList>;
    /**
     * @param param the request object
     */
    v1alpha3startClusterProfilerWithHttpInfo(param?: DefaultApiV1alpha3startClusterProfilerRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * @param param the request object
     */
    v1alpha3startClusterProfiler(param?: DefaultApiV1alpha3startClusterProfilerRequest, options?: ConfigurationOptions): Promise<void>;
    /**
     * @param param the request object
     */
    v1alpha3stopClusterProfilerWithHttpInfo(param?: DefaultApiV1alpha3stopClusterProfilerRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * @param param the request object
     */
    v1alpha3stopClusterProfiler(param?: DefaultApiV1alpha3stopClusterProfilerRequest, options?: ConfigurationOptions): Promise<void>;
    /**
     * Open a websocket connection to connect to USB device on the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1alpha3usbredirWithHttpInfo(param: DefaultApiV1alpha3usbredirRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection to connect to USB device on the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1alpha3usbredir(param: DefaultApiV1alpha3usbredirRequest, options?: ConfigurationOptions): Promise<void>;
    /**
     * Add a volume and disk to a running Virtual Machine.
     * @param param the request object
     */
    v1alpha3vmAddvolumeWithHttpInfo(param: DefaultApiV1alpha3vmAddvolumeRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Add a volume and disk to a running Virtual Machine.
     * @param param the request object
     */
    v1alpha3vmAddvolume(param: DefaultApiV1alpha3vmAddvolumeRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Get VirtualMachine object with expanded instancetype and preference.
     * @param param the request object
     */
    v1alpha3vmExpandSpecWithHttpInfo(param: DefaultApiV1alpha3vmExpandSpecRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Get VirtualMachine object with expanded instancetype and preference.
     * @param param the request object
     */
    v1alpha3vmExpandSpec(param: DefaultApiV1alpha3vmExpandSpecRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Open a websocket connection forwarding traffic to the running VMI for the specified VirtualMachine and port.
     * @param param the request object
     */
    v1alpha3vmPortForwardWithHttpInfo(param: DefaultApiV1alpha3vmPortForwardRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection forwarding traffic to the running VMI for the specified VirtualMachine and port.
     * @param param the request object
     */
    v1alpha3vmPortForward(param: DefaultApiV1alpha3vmPortForwardRequest, options?: ConfigurationOptions): Promise<void>;
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachine and port.
     * @param param the request object
     */
    v1alpha3vmPortForwardWithProtocolWithHttpInfo(param: DefaultApiV1alpha3vmPortForwardWithProtocolRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachine and port.
     * @param param the request object
     */
    v1alpha3vmPortForwardWithProtocol(param: DefaultApiV1alpha3vmPortForwardWithProtocolRequest, options?: ConfigurationOptions): Promise<void>;
    /**
     * Removes a volume and disk from a running Virtual Machine.
     * @param param the request object
     */
    v1alpha3vmRemovevolumeWithHttpInfo(param: DefaultApiV1alpha3vmRemovevolumeRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Removes a volume and disk from a running Virtual Machine.
     * @param param the request object
     */
    v1alpha3vmRemovevolume(param: DefaultApiV1alpha3vmRemovevolumeRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Add a volume and disk to a running Virtual Machine Instance
     * @param param the request object
     */
    v1alpha3vmiAddvolumeWithHttpInfo(param: DefaultApiV1alpha3vmiAddvolumeRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Add a volume and disk to a running Virtual Machine Instance
     * @param param the request object
     */
    v1alpha3vmiAddvolume(param: DefaultApiV1alpha3vmiAddvolumeRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port.
     * @param param the request object
     */
    v1alpha3vmiPortForwardWithHttpInfo(param: DefaultApiV1alpha3vmiPortForwardRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port.
     * @param param the request object
     */
    v1alpha3vmiPortForward(param: DefaultApiV1alpha3vmiPortForwardRequest, options?: ConfigurationOptions): Promise<void>;
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachineInstance and port.
     * @param param the request object
     */
    v1alpha3vmiPortForwardWithProtocolWithHttpInfo(param: DefaultApiV1alpha3vmiPortForwardWithProtocolRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachineInstance and port.
     * @param param the request object
     */
    v1alpha3vmiPortForwardWithProtocol(param: DefaultApiV1alpha3vmiPortForwardWithProtocolRequest, options?: ConfigurationOptions): Promise<void>;
    /**
     * Removes a volume and disk from a running Virtual Machine Instance
     * @param param the request object
     */
    v1alpha3vmiRemovevolumeWithHttpInfo(param: DefaultApiV1alpha3vmiRemovevolumeRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Removes a volume and disk from a running Virtual Machine Instance
     * @param param the request object
     */
    v1alpha3vmiRemovevolume(param: DefaultApiV1alpha3vmiRemovevolumeRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * @param param the request object
     */
    v1dumpClusterProfilerWithHttpInfo(param?: DefaultApiV1dumpClusterProfilerRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * @param param the request object
     */
    v1dumpClusterProfiler(param?: DefaultApiV1dumpClusterProfilerRequest, options?: ConfigurationOptions): Promise<void>;
    /**
     * Get a KubeVirt API resources
     * @param param the request object
     */
    v1getAPISubResourcesWithHttpInfo(param?: DefaultApiV1getAPISubResourcesRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1APIResourceList>>;
    /**
     * Get a KubeVirt API resources
     * @param param the request object
     */
    v1getAPISubResources(param?: DefaultApiV1getAPISubResourcesRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1APIResourceList>;
    /**
     * @param param the request object
     */
    v1startClusterProfilerWithHttpInfo(param?: DefaultApiV1startClusterProfilerRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * @param param the request object
     */
    v1startClusterProfiler(param?: DefaultApiV1startClusterProfilerRequest, options?: ConfigurationOptions): Promise<void>;
    /**
     * @param param the request object
     */
    v1stopClusterProfilerWithHttpInfo(param?: DefaultApiV1stopClusterProfilerRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * @param param the request object
     */
    v1stopClusterProfiler(param?: DefaultApiV1stopClusterProfilerRequest, options?: ConfigurationOptions): Promise<void>;
    /**
     * Open a websocket connection to connect to USB device on the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1usbredirWithHttpInfo(param: DefaultApiV1usbredirRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection to connect to USB device on the specified VirtualMachineInstance.
     * @param param the request object
     */
    v1usbredir(param: DefaultApiV1usbredirRequest, options?: ConfigurationOptions): Promise<void>;
    /**
     * Add a volume and disk to a running Virtual Machine.
     * @param param the request object
     */
    v1vmAddvolumeWithHttpInfo(param: DefaultApiV1vmAddvolumeRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Add a volume and disk to a running Virtual Machine.
     * @param param the request object
     */
    v1vmAddvolume(param: DefaultApiV1vmAddvolumeRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Get VirtualMachine object with expanded instancetype and preference.
     * @param param the request object
     */
    v1vmExpandSpecWithHttpInfo(param: DefaultApiV1vmExpandSpecRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Get VirtualMachine object with expanded instancetype and preference.
     * @param param the request object
     */
    v1vmExpandSpec(param: DefaultApiV1vmExpandSpecRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Open a websocket connection forwarding traffic to the running VMI for the specified VirtualMachine and port.
     * @param param the request object
     */
    v1vmPortForwardWithHttpInfo(param: DefaultApiV1vmPortForwardRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection forwarding traffic to the running VMI for the specified VirtualMachine and port.
     * @param param the request object
     */
    v1vmPortForward(param: DefaultApiV1vmPortForwardRequest, options?: ConfigurationOptions): Promise<void>;
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachine and port.
     * @param param the request object
     */
    v1vmPortForwardWithProtocolWithHttpInfo(param: DefaultApiV1vmPortForwardWithProtocolRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachine and port.
     * @param param the request object
     */
    v1vmPortForwardWithProtocol(param: DefaultApiV1vmPortForwardWithProtocolRequest, options?: ConfigurationOptions): Promise<void>;
    /**
     * Removes a volume and disk from a running Virtual Machine.
     * @param param the request object
     */
    v1vmRemovevolumeWithHttpInfo(param: DefaultApiV1vmRemovevolumeRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Removes a volume and disk from a running Virtual Machine.
     * @param param the request object
     */
    v1vmRemovevolume(param: DefaultApiV1vmRemovevolumeRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Add a volume and disk to a running Virtual Machine Instance
     * @param param the request object
     */
    v1vmiAddvolumeWithHttpInfo(param: DefaultApiV1vmiAddvolumeRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Add a volume and disk to a running Virtual Machine Instance
     * @param param the request object
     */
    v1vmiAddvolume(param: DefaultApiV1vmiAddvolumeRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port.
     * @param param the request object
     */
    v1vmiPortForwardWithHttpInfo(param: DefaultApiV1vmiPortForwardRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port.
     * @param param the request object
     */
    v1vmiPortForward(param: DefaultApiV1vmiPortForwardRequest, options?: ConfigurationOptions): Promise<void>;
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachineInstance and port.
     * @param param the request object
     */
    v1vmiPortForwardWithProtocolWithHttpInfo(param: DefaultApiV1vmiPortForwardWithProtocolRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>>;
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachineInstance and port.
     * @param param the request object
     */
    v1vmiPortForwardWithProtocol(param: DefaultApiV1vmiPortForwardWithProtocolRequest, options?: ConfigurationOptions): Promise<void>;
    /**
     * Removes a volume and disk from a running Virtual Machine Instance
     * @param param the request object
     */
    v1vmiRemovevolumeWithHttpInfo(param: DefaultApiV1vmiRemovevolumeRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>>;
    /**
     * Removes a volume and disk from a running Virtual Machine Instance
     * @param param the request object
     */
    v1vmiRemovevolume(param: DefaultApiV1vmiRemovevolumeRequest, options?: ConfigurationOptions): Promise<string>;
    /**
     * Watch a KubeVirtList object.
     * @param param the request object
     */
    watchKubeVirtListForAllNamespacesWithHttpInfo(param?: DefaultApiWatchKubeVirtListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a KubeVirtList object.
     * @param param the request object
     */
    watchKubeVirtListForAllNamespaces(param?: DefaultApiWatchKubeVirtListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a MigrationPolicyList object.
     * @param param the request object
     */
    watchMigrationPolicyListForAllNamespacesWithHttpInfo(param?: DefaultApiWatchMigrationPolicyListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a MigrationPolicyList object.
     * @param param the request object
     */
    watchMigrationPolicyListForAllNamespaces(param?: DefaultApiWatchMigrationPolicyListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a KubeVirt object.
     * @param param the request object
     */
    watchNamespacedKubeVirtWithHttpInfo(param: DefaultApiWatchNamespacedKubeVirtRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a KubeVirt object.
     * @param param the request object
     */
    watchNamespacedKubeVirt(param: DefaultApiWatchNamespacedKubeVirtRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachine object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineWithHttpInfo(param: DefaultApiWatchNamespacedVirtualMachineRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachine object.
     * @param param the request object
     */
    watchNamespacedVirtualMachine(param: DefaultApiWatchNamespacedVirtualMachineRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineExport object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineExportWithHttpInfo(param: DefaultApiWatchNamespacedVirtualMachineExportRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineExport object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineExport(param: DefaultApiWatchNamespacedVirtualMachineExportRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineInstance object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineInstanceWithHttpInfo(param: DefaultApiWatchNamespacedVirtualMachineInstanceRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineInstance object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineInstance(param: DefaultApiWatchNamespacedVirtualMachineInstanceRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineInstanceMigration object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineInstanceMigrationWithHttpInfo(param: DefaultApiWatchNamespacedVirtualMachineInstanceMigrationRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineInstanceMigration object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineInstanceMigration(param: DefaultApiWatchNamespacedVirtualMachineInstanceMigrationRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineInstancePreset object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineInstancePresetWithHttpInfo(param: DefaultApiWatchNamespacedVirtualMachineInstancePresetRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineInstancePreset object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineInstancePreset(param: DefaultApiWatchNamespacedVirtualMachineInstancePresetRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineInstanceReplicaSet object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(param: DefaultApiWatchNamespacedVirtualMachineInstanceReplicaSetRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineInstanceReplicaSet object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineInstanceReplicaSet(param: DefaultApiWatchNamespacedVirtualMachineInstanceReplicaSetRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineInstancetype object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineInstancetypeWithHttpInfo(param: DefaultApiWatchNamespacedVirtualMachineInstancetypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineInstancetype object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineInstancetype(param: DefaultApiWatchNamespacedVirtualMachineInstancetypeRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachinePool object.
     * @param param the request object
     */
    watchNamespacedVirtualMachinePoolWithHttpInfo(param: DefaultApiWatchNamespacedVirtualMachinePoolRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachinePool object.
     * @param param the request object
     */
    watchNamespacedVirtualMachinePool(param: DefaultApiWatchNamespacedVirtualMachinePoolRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachinePreference object.
     * @param param the request object
     */
    watchNamespacedVirtualMachinePreferenceWithHttpInfo(param: DefaultApiWatchNamespacedVirtualMachinePreferenceRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachinePreference object.
     * @param param the request object
     */
    watchNamespacedVirtualMachinePreference(param: DefaultApiWatchNamespacedVirtualMachinePreferenceRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineRestore object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineRestoreWithHttpInfo(param: DefaultApiWatchNamespacedVirtualMachineRestoreRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineRestore object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineRestore(param: DefaultApiWatchNamespacedVirtualMachineRestoreRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineSnapshot object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineSnapshotWithHttpInfo(param: DefaultApiWatchNamespacedVirtualMachineSnapshotRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineSnapshot object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineSnapshot(param: DefaultApiWatchNamespacedVirtualMachineSnapshotRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineSnapshotContent object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineSnapshotContentWithHttpInfo(param: DefaultApiWatchNamespacedVirtualMachineSnapshotContentRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineSnapshotContent object.
     * @param param the request object
     */
    watchNamespacedVirtualMachineSnapshotContent(param: DefaultApiWatchNamespacedVirtualMachineSnapshotContentRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineCloneList object.
     * @param param the request object
     */
    watchVirtualMachineCloneListForAllNamespacesWithHttpInfo(param?: DefaultApiWatchVirtualMachineCloneListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineCloneList object.
     * @param param the request object
     */
    watchVirtualMachineCloneListForAllNamespaces(param?: DefaultApiWatchVirtualMachineCloneListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineClusterInstancetypeList object.
     * @param param the request object
     */
    watchVirtualMachineClusterInstancetypeListForAllNamespacesWithHttpInfo(param?: DefaultApiWatchVirtualMachineClusterInstancetypeListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineClusterInstancetypeList object.
     * @param param the request object
     */
    watchVirtualMachineClusterInstancetypeListForAllNamespaces(param?: DefaultApiWatchVirtualMachineClusterInstancetypeListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineClusterPreferenceList object.
     * @param param the request object
     */
    watchVirtualMachineClusterPreferenceListForAllNamespacesWithHttpInfo(param?: DefaultApiWatchVirtualMachineClusterPreferenceListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineClusterPreferenceList object.
     * @param param the request object
     */
    watchVirtualMachineClusterPreferenceListForAllNamespaces(param?: DefaultApiWatchVirtualMachineClusterPreferenceListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineExportList object.
     * @param param the request object
     */
    watchVirtualMachineExportListForAllNamespacesWithHttpInfo(param?: DefaultApiWatchVirtualMachineExportListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineExportList object.
     * @param param the request object
     */
    watchVirtualMachineExportListForAllNamespaces(param?: DefaultApiWatchVirtualMachineExportListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineInstanceList object.
     * @param param the request object
     */
    watchVirtualMachineInstanceListForAllNamespacesWithHttpInfo(param?: DefaultApiWatchVirtualMachineInstanceListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineInstanceList object.
     * @param param the request object
     */
    watchVirtualMachineInstanceListForAllNamespaces(param?: DefaultApiWatchVirtualMachineInstanceListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineInstanceMigrationList object.
     * @param param the request object
     */
    watchVirtualMachineInstanceMigrationListForAllNamespacesWithHttpInfo(param?: DefaultApiWatchVirtualMachineInstanceMigrationListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineInstanceMigrationList object.
     * @param param the request object
     */
    watchVirtualMachineInstanceMigrationListForAllNamespaces(param?: DefaultApiWatchVirtualMachineInstanceMigrationListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineInstancePresetList object.
     * @param param the request object
     */
    watchVirtualMachineInstancePresetListForAllNamespacesWithHttpInfo(param?: DefaultApiWatchVirtualMachineInstancePresetListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineInstancePresetList object.
     * @param param the request object
     */
    watchVirtualMachineInstancePresetListForAllNamespaces(param?: DefaultApiWatchVirtualMachineInstancePresetListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineInstanceReplicaSetList object.
     * @param param the request object
     */
    watchVirtualMachineInstanceReplicaSetListForAllNamespacesWithHttpInfo(param?: DefaultApiWatchVirtualMachineInstanceReplicaSetListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineInstanceReplicaSetList object.
     * @param param the request object
     */
    watchVirtualMachineInstanceReplicaSetListForAllNamespaces(param?: DefaultApiWatchVirtualMachineInstanceReplicaSetListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineInstancetypeList object.
     * @param param the request object
     */
    watchVirtualMachineInstancetypeListForAllNamespacesWithHttpInfo(param?: DefaultApiWatchVirtualMachineInstancetypeListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineInstancetypeList object.
     * @param param the request object
     */
    watchVirtualMachineInstancetypeListForAllNamespaces(param?: DefaultApiWatchVirtualMachineInstancetypeListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineList object.
     * @param param the request object
     */
    watchVirtualMachineListForAllNamespacesWithHttpInfo(param?: DefaultApiWatchVirtualMachineListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineList object.
     * @param param the request object
     */
    watchVirtualMachineListForAllNamespaces(param?: DefaultApiWatchVirtualMachineListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachinePoolList object.
     * @param param the request object
     */
    watchVirtualMachinePoolListForAllNamespacesWithHttpInfo(param?: DefaultApiWatchVirtualMachinePoolListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachinePoolList object.
     * @param param the request object
     */
    watchVirtualMachinePoolListForAllNamespaces(param?: DefaultApiWatchVirtualMachinePoolListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachinePreferenceList object.
     * @param param the request object
     */
    watchVirtualMachinePreferenceListForAllNamespacesWithHttpInfo(param?: DefaultApiWatchVirtualMachinePreferenceListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachinePreferenceList object.
     * @param param the request object
     */
    watchVirtualMachinePreferenceListForAllNamespaces(param?: DefaultApiWatchVirtualMachinePreferenceListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineRestoreList object.
     * @param param the request object
     */
    watchVirtualMachineRestoreListForAllNamespacesWithHttpInfo(param?: DefaultApiWatchVirtualMachineRestoreListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineRestoreList object.
     * @param param the request object
     */
    watchVirtualMachineRestoreListForAllNamespaces(param?: DefaultApiWatchVirtualMachineRestoreListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineSnapshotContentList object.
     * @param param the request object
     */
    watchVirtualMachineSnapshotContentListForAllNamespacesWithHttpInfo(param?: DefaultApiWatchVirtualMachineSnapshotContentListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineSnapshotContentList object.
     * @param param the request object
     */
    watchVirtualMachineSnapshotContentListForAllNamespaces(param?: DefaultApiWatchVirtualMachineSnapshotContentListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
    /**
     * Watch a VirtualMachineSnapshotList object.
     * @param param the request object
     */
    watchVirtualMachineSnapshotListForAllNamespacesWithHttpInfo(param?: DefaultApiWatchVirtualMachineSnapshotListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<K8sIoApimachineryPkgApisMetaV1WatchEvent>>;
    /**
     * Watch a VirtualMachineSnapshotList object.
     * @param param the request object
     */
    watchVirtualMachineSnapshotListForAllNamespaces(param?: DefaultApiWatchVirtualMachineSnapshotListForAllNamespacesRequest, options?: ConfigurationOptions): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent>;
}
//# sourceMappingURL=ObjectParamAPI.d.ts.map