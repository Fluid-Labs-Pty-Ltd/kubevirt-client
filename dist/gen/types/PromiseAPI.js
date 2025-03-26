"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseDefaultApi = void 0;
const middleware_js_1 = require("../middleware.js");
const ObservableAPI_js_1 = require("./ObservableAPI.js");
class PromiseDefaultApi {
    api;
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_js_1.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Create a MigrationPolicy object.
     * @param body
     */
    createMigrationPolicyWithHttpInfo(body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createMigrationPolicyWithHttpInfo(body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a MigrationPolicy object.
     * @param body
     */
    createMigrationPolicy(body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createMigrationPolicy(body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a KubeVirt object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedKubeVirtWithHttpInfo(namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createNamespacedKubeVirtWithHttpInfo(namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a KubeVirt object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedKubeVirt(namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createNamespacedKubeVirt(namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a VirtualMachine object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineWithHttpInfo(namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createNamespacedVirtualMachineWithHttpInfo(namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a VirtualMachine object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachine(namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createNamespacedVirtualMachine(namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a VirtualMachineExport object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineExportWithHttpInfo(namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createNamespacedVirtualMachineExportWithHttpInfo(namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a VirtualMachineExport object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineExport(namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createNamespacedVirtualMachineExport(namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a VirtualMachineInstance object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineInstanceWithHttpInfo(namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createNamespacedVirtualMachineInstanceWithHttpInfo(namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a VirtualMachineInstance object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineInstance(namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createNamespacedVirtualMachineInstance(namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a VirtualMachineInstanceMigration object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineInstanceMigrationWithHttpInfo(namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createNamespacedVirtualMachineInstanceMigrationWithHttpInfo(namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a VirtualMachineInstanceMigration object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineInstanceMigration(namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createNamespacedVirtualMachineInstanceMigration(namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a VirtualMachineInstancePreset object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineInstancePresetWithHttpInfo(namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createNamespacedVirtualMachineInstancePresetWithHttpInfo(namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a VirtualMachineInstancePreset object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineInstancePreset(namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createNamespacedVirtualMachineInstancePreset(namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a VirtualMachineInstanceReplicaSet object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a VirtualMachineInstanceReplicaSet object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineInstanceReplicaSet(namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createNamespacedVirtualMachineInstanceReplicaSet(namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a VirtualMachineInstancetype object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineInstancetypeWithHttpInfo(namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createNamespacedVirtualMachineInstancetypeWithHttpInfo(namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a VirtualMachineInstancetype object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineInstancetype(namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createNamespacedVirtualMachineInstancetype(namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a VirtualMachinePool object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachinePoolWithHttpInfo(namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createNamespacedVirtualMachinePoolWithHttpInfo(namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a VirtualMachinePool object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachinePool(namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createNamespacedVirtualMachinePool(namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a VirtualMachinePreference object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachinePreferenceWithHttpInfo(namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createNamespacedVirtualMachinePreferenceWithHttpInfo(namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a VirtualMachinePreference object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachinePreference(namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createNamespacedVirtualMachinePreference(namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a VirtualMachineRestore object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineRestoreWithHttpInfo(namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createNamespacedVirtualMachineRestoreWithHttpInfo(namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a VirtualMachineRestore object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineRestore(namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createNamespacedVirtualMachineRestore(namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a VirtualMachineSnapshot object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineSnapshotWithHttpInfo(namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createNamespacedVirtualMachineSnapshotWithHttpInfo(namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a VirtualMachineSnapshot object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineSnapshot(namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createNamespacedVirtualMachineSnapshot(namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a VirtualMachineSnapshotContent object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineSnapshotContentWithHttpInfo(namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createNamespacedVirtualMachineSnapshotContentWithHttpInfo(namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a VirtualMachineSnapshotContent object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    createNamespacedVirtualMachineSnapshotContent(namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createNamespacedVirtualMachineSnapshotContent(namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a VirtualMachineClone object.
     * @param body
     */
    createVirtualMachineCloneWithHttpInfo(body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createVirtualMachineCloneWithHttpInfo(body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a VirtualMachineClone object.
     * @param body
     */
    createVirtualMachineClone(body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createVirtualMachineClone(body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a VirtualMachineClusterInstancetype object.
     * @param body
     */
    createVirtualMachineClusterInstancetypeWithHttpInfo(body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createVirtualMachineClusterInstancetypeWithHttpInfo(body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a VirtualMachineClusterInstancetype object.
     * @param body
     */
    createVirtualMachineClusterInstancetype(body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createVirtualMachineClusterInstancetype(body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a VirtualMachineClusterPreference object.
     * @param body
     */
    createVirtualMachineClusterPreferenceWithHttpInfo(body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createVirtualMachineClusterPreferenceWithHttpInfo(body, observableOptions);
        return result.toPromise();
    }
    /**
     * Create a VirtualMachineClusterPreference object.
     * @param body
     */
    createVirtualMachineClusterPreference(body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.createVirtualMachineClusterPreference(body, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionMigrationPolicyWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionMigrationPolicyWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionMigrationPolicy(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionMigrationPolicy(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionNamespacedKubeVirtWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionNamespacedKubeVirtWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionNamespacedKubeVirt(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionNamespacedKubeVirt(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionNamespacedVirtualMachineWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionNamespacedVirtualMachineWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionNamespacedVirtualMachine(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionNamespacedVirtualMachine(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionNamespacedVirtualMachineExportWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionNamespacedVirtualMachineExportWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionNamespacedVirtualMachineExport(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionNamespacedVirtualMachineExport(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionNamespacedVirtualMachineInstanceWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionNamespacedVirtualMachineInstanceWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionNamespacedVirtualMachineInstance(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionNamespacedVirtualMachineInstance(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionNamespacedVirtualMachineInstanceMigrationWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionNamespacedVirtualMachineInstanceMigrationWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionNamespacedVirtualMachineInstanceMigration(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionNamespacedVirtualMachineInstanceMigration(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionNamespacedVirtualMachineInstancePresetWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionNamespacedVirtualMachineInstancePresetWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionNamespacedVirtualMachineInstancePreset(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionNamespacedVirtualMachineInstancePreset(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionNamespacedVirtualMachineInstanceReplicaSet(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionNamespacedVirtualMachineInstanceReplicaSet(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionNamespacedVirtualMachineInstancetypeWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionNamespacedVirtualMachineInstancetypeWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionNamespacedVirtualMachineInstancetype(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionNamespacedVirtualMachineInstancetype(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionNamespacedVirtualMachinePoolWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionNamespacedVirtualMachinePoolWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionNamespacedVirtualMachinePool(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionNamespacedVirtualMachinePool(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionNamespacedVirtualMachinePreferenceWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionNamespacedVirtualMachinePreferenceWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionNamespacedVirtualMachinePreference(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionNamespacedVirtualMachinePreference(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionNamespacedVirtualMachineRestoreWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionNamespacedVirtualMachineRestoreWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionNamespacedVirtualMachineRestore(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionNamespacedVirtualMachineRestore(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionNamespacedVirtualMachineSnapshotWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionNamespacedVirtualMachineSnapshotWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionNamespacedVirtualMachineSnapshot(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionNamespacedVirtualMachineSnapshot(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionNamespacedVirtualMachineSnapshotContentWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionNamespacedVirtualMachineSnapshotContentWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionNamespacedVirtualMachineSnapshotContent(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionNamespacedVirtualMachineSnapshotContent(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionVirtualMachineCloneWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionVirtualMachineCloneWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionVirtualMachineClone(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionVirtualMachineClone(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionVirtualMachineClusterInstancetypeWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionVirtualMachineClusterInstancetypeWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionVirtualMachineClusterInstancetype(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionVirtualMachineClusterInstancetype(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionVirtualMachineClusterPreferenceWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionVirtualMachineClusterPreferenceWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    deleteCollectionVirtualMachineClusterPreference(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteCollectionVirtualMachineClusterPreference(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a MigrationPolicy object.
     * @param name Name of the resource
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteMigrationPolicyWithHttpInfo(name, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteMigrationPolicyWithHttpInfo(name, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a MigrationPolicy object.
     * @param name Name of the resource
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteMigrationPolicy(name, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteMigrationPolicy(name, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a KubeVirt object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedKubeVirtWithHttpInfo(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteNamespacedKubeVirtWithHttpInfo(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a KubeVirt object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedKubeVirt(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteNamespacedKubeVirt(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineWithHttpInfo(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteNamespacedVirtualMachineWithHttpInfo(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachine(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteNamespacedVirtualMachine(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a VirtualMachineExport object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineExportWithHttpInfo(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteNamespacedVirtualMachineExportWithHttpInfo(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a VirtualMachineExport object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineExport(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteNamespacedVirtualMachineExport(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineInstanceWithHttpInfo(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteNamespacedVirtualMachineInstanceWithHttpInfo(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineInstance(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteNamespacedVirtualMachineInstance(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a VirtualMachineInstanceMigration object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineInstanceMigrationWithHttpInfo(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteNamespacedVirtualMachineInstanceMigrationWithHttpInfo(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a VirtualMachineInstanceMigration object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineInstanceMigration(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteNamespacedVirtualMachineInstanceMigration(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a VirtualMachineInstancePreset object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineInstancePresetWithHttpInfo(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteNamespacedVirtualMachineInstancePresetWithHttpInfo(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a VirtualMachineInstancePreset object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineInstancePreset(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteNamespacedVirtualMachineInstancePreset(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a VirtualMachineInstanceReplicaSet object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a VirtualMachineInstanceReplicaSet object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineInstanceReplicaSet(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteNamespacedVirtualMachineInstanceReplicaSet(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a VirtualMachineInstancetype object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineInstancetypeWithHttpInfo(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteNamespacedVirtualMachineInstancetypeWithHttpInfo(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a VirtualMachineInstancetype object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineInstancetype(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteNamespacedVirtualMachineInstancetype(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a VirtualMachinePool object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachinePoolWithHttpInfo(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteNamespacedVirtualMachinePoolWithHttpInfo(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a VirtualMachinePool object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachinePool(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteNamespacedVirtualMachinePool(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a VirtualMachinePreference object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachinePreferenceWithHttpInfo(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteNamespacedVirtualMachinePreferenceWithHttpInfo(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a VirtualMachinePreference object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachinePreference(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteNamespacedVirtualMachinePreference(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a VirtualMachineRestore object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineRestoreWithHttpInfo(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteNamespacedVirtualMachineRestoreWithHttpInfo(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a VirtualMachineRestore object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineRestore(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteNamespacedVirtualMachineRestore(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a VirtualMachineSnapshot object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineSnapshotWithHttpInfo(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteNamespacedVirtualMachineSnapshotWithHttpInfo(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a VirtualMachineSnapshot object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineSnapshot(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteNamespacedVirtualMachineSnapshot(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a VirtualMachineSnapshotContent object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineSnapshotContentWithHttpInfo(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteNamespacedVirtualMachineSnapshotContentWithHttpInfo(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a VirtualMachineSnapshotContent object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteNamespacedVirtualMachineSnapshotContent(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteNamespacedVirtualMachineSnapshotContent(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a VirtualMachineClone object.
     * @param name Name of the resource
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteVirtualMachineCloneWithHttpInfo(name, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteVirtualMachineCloneWithHttpInfo(name, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a VirtualMachineClone object.
     * @param name Name of the resource
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteVirtualMachineClone(name, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteVirtualMachineClone(name, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a VirtualMachineClusterInstancetype object.
     * @param name Name of the resource
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteVirtualMachineClusterInstancetypeWithHttpInfo(name, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteVirtualMachineClusterInstancetypeWithHttpInfo(name, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a VirtualMachineClusterInstancetype object.
     * @param name Name of the resource
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteVirtualMachineClusterInstancetype(name, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteVirtualMachineClusterInstancetype(name, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a VirtualMachineClusterPreference object.
     * @param name Name of the resource
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteVirtualMachineClusterPreferenceWithHttpInfo(name, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteVirtualMachineClusterPreferenceWithHttpInfo(name, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Delete a VirtualMachineClusterPreference object.
     * @param name Name of the resource
     * @param body
     * @param [gracePeriodSeconds] The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param [orphanDependents] Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param [propagationPolicy] Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    deleteVirtualMachineClusterPreference(name, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.deleteVirtualMachineClusterPreference(name, body, gracePeriodSeconds, orphanDependents, propagationPolicy, observableOptions);
        return result.toPromise();
    }
    /**
     * Health endpoint
     */
    func13WithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.func13WithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * Health endpoint
     */
    func13(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.func13(observableOptions);
        return result.toPromise();
    }
    /**
     */
    func6WithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.func6WithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     */
    func6(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.func6(observableOptions);
        return result.toPromise();
    }
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupCloneKubevirtIoWithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getAPIGroupCloneKubevirtIoWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupCloneKubevirtIo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getAPIGroupCloneKubevirtIo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupExportKubevirtIoWithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getAPIGroupExportKubevirtIoWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupExportKubevirtIo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getAPIGroupExportKubevirtIo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupInstancetypeKubevirtIoWithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getAPIGroupInstancetypeKubevirtIoWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupInstancetypeKubevirtIo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getAPIGroupInstancetypeKubevirtIo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupKubevirtIoWithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getAPIGroupKubevirtIoWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupKubevirtIo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getAPIGroupKubevirtIo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get a KubeVirt API GroupList
     */
    getAPIGroupListWithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getAPIGroupListWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get a KubeVirt API GroupList
     */
    getAPIGroupList(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getAPIGroupList(observableOptions);
        return result.toPromise();
    }
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupMigrationsKubevirtIoWithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getAPIGroupMigrationsKubevirtIoWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupMigrationsKubevirtIo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getAPIGroupMigrationsKubevirtIo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupPoolKubevirtIoWithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getAPIGroupPoolKubevirtIoWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupPoolKubevirtIo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getAPIGroupPoolKubevirtIo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupSnapshotKubevirtIoWithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getAPIGroupSnapshotKubevirtIoWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get a KubeVirt API group
     */
    getAPIGroupSnapshotKubevirtIo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getAPIGroupSnapshotKubevirtIo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesCloneKubevirtIoV1alpha1WithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getAPIResourcesCloneKubevirtIoV1alpha1WithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesCloneKubevirtIoV1alpha1(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getAPIResourcesCloneKubevirtIoV1alpha1(observableOptions);
        return result.toPromise();
    }
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesExportKubevirtIoV1beta1WithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getAPIResourcesExportKubevirtIoV1beta1WithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesExportKubevirtIoV1beta1(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getAPIResourcesExportKubevirtIoV1beta1(observableOptions);
        return result.toPromise();
    }
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesInstancetypeKubevirtIoV1beta1WithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getAPIResourcesInstancetypeKubevirtIoV1beta1WithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesInstancetypeKubevirtIoV1beta1(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getAPIResourcesInstancetypeKubevirtIoV1beta1(observableOptions);
        return result.toPromise();
    }
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesKubevirtIoV1WithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getAPIResourcesKubevirtIoV1WithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesKubevirtIoV1(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getAPIResourcesKubevirtIoV1(observableOptions);
        return result.toPromise();
    }
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesMigrationsKubevirtIoV1alpha1WithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getAPIResourcesMigrationsKubevirtIoV1alpha1WithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesMigrationsKubevirtIoV1alpha1(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getAPIResourcesMigrationsKubevirtIoV1alpha1(observableOptions);
        return result.toPromise();
    }
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesPoolKubevirtIoV1alpha1WithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getAPIResourcesPoolKubevirtIoV1alpha1WithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesPoolKubevirtIoV1alpha1(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getAPIResourcesPoolKubevirtIoV1alpha1(observableOptions);
        return result.toPromise();
    }
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesSnapshotKubevirtIoV1beta1WithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getAPIResourcesSnapshotKubevirtIoV1beta1WithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get KubeVirt API Resources
     */
    getAPIResourcesSnapshotKubevirtIoV1beta1(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getAPIResourcesSnapshotKubevirtIoV1beta1(observableOptions);
        return result.toPromise();
    }
    /**
     * Get KubeVirt API root paths
     */
    getRootPathsWithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getRootPathsWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get KubeVirt API root paths
     */
    getRootPaths(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.getRootPaths(observableOptions);
        return result.toPromise();
    }
    /**
     * dump profiler results endpoint
     */
    handleDumpProfilerWithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.handleDumpProfilerWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * dump profiler results endpoint
     */
    handleDumpProfiler(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.handleDumpProfiler(observableOptions);
        return result.toPromise();
    }
    /**
     * start profiler endpoint
     */
    handleStartProfilerWithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.handleStartProfilerWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * start profiler endpoint
     */
    handleStartProfiler(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.handleStartProfiler(observableOptions);
        return result.toPromise();
    }
    /**
     * stop profiler endpoint
     */
    handleStopProfilerWithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.handleStopProfilerWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * stop profiler endpoint
     */
    handleStopProfiler(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.handleStopProfiler(observableOptions);
        return result.toPromise();
    }
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
    listKubeVirtForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listKubeVirtForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listKubeVirtForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listKubeVirtForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listMigrationPolicyWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listMigrationPolicyWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listMigrationPolicy(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listMigrationPolicy(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listNamespacedKubeVirtWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listNamespacedKubeVirtWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listNamespacedKubeVirt(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listNamespacedKubeVirt(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listNamespacedVirtualMachineWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listNamespacedVirtualMachineWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listNamespacedVirtualMachine(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listNamespacedVirtualMachine(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listNamespacedVirtualMachineExportWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listNamespacedVirtualMachineExportWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listNamespacedVirtualMachineExport(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listNamespacedVirtualMachineExport(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listNamespacedVirtualMachineInstanceWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listNamespacedVirtualMachineInstanceWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listNamespacedVirtualMachineInstance(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listNamespacedVirtualMachineInstance(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listNamespacedVirtualMachineInstanceMigrationWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listNamespacedVirtualMachineInstanceMigrationWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listNamespacedVirtualMachineInstanceMigration(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listNamespacedVirtualMachineInstanceMigration(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listNamespacedVirtualMachineInstancePresetWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listNamespacedVirtualMachineInstancePresetWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listNamespacedVirtualMachineInstancePreset(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listNamespacedVirtualMachineInstancePreset(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listNamespacedVirtualMachineInstanceReplicaSet(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listNamespacedVirtualMachineInstanceReplicaSet(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listNamespacedVirtualMachineInstancetypeWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listNamespacedVirtualMachineInstancetypeWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listNamespacedVirtualMachineInstancetype(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listNamespacedVirtualMachineInstancetype(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listNamespacedVirtualMachinePoolWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listNamespacedVirtualMachinePoolWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listNamespacedVirtualMachinePool(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listNamespacedVirtualMachinePool(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listNamespacedVirtualMachinePreferenceWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listNamespacedVirtualMachinePreferenceWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listNamespacedVirtualMachinePreference(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listNamespacedVirtualMachinePreference(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listNamespacedVirtualMachineRestoreWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listNamespacedVirtualMachineRestoreWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listNamespacedVirtualMachineRestore(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listNamespacedVirtualMachineRestore(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listNamespacedVirtualMachineSnapshotWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listNamespacedVirtualMachineSnapshotWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listNamespacedVirtualMachineSnapshot(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listNamespacedVirtualMachineSnapshot(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listNamespacedVirtualMachineSnapshotContentWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listNamespacedVirtualMachineSnapshotContentWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listNamespacedVirtualMachineSnapshotContent(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listNamespacedVirtualMachineSnapshotContent(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listVirtualMachineCloneWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listVirtualMachineCloneWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listVirtualMachineClone(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listVirtualMachineClone(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listVirtualMachineClusterInstancetypeWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listVirtualMachineClusterInstancetypeWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listVirtualMachineClusterInstancetype(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listVirtualMachineClusterInstancetype(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listVirtualMachineClusterPreferenceWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listVirtualMachineClusterPreferenceWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listVirtualMachineClusterPreference(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listVirtualMachineClusterPreference(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listVirtualMachineExportForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listVirtualMachineExportForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listVirtualMachineExportForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listVirtualMachineExportForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listVirtualMachineForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listVirtualMachineForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listVirtualMachineForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listVirtualMachineForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listVirtualMachineInstanceForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listVirtualMachineInstanceForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listVirtualMachineInstanceForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listVirtualMachineInstanceForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listVirtualMachineInstanceMigrationForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listVirtualMachineInstanceMigrationForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listVirtualMachineInstanceMigrationForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listVirtualMachineInstanceMigrationForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listVirtualMachineInstancePresetForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listVirtualMachineInstancePresetForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listVirtualMachineInstancePresetForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listVirtualMachineInstancePresetForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listVirtualMachineInstanceReplicaSetForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listVirtualMachineInstanceReplicaSetForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listVirtualMachineInstanceReplicaSetForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listVirtualMachineInstanceReplicaSetForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listVirtualMachineInstancetypeForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listVirtualMachineInstancetypeForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listVirtualMachineInstancetypeForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listVirtualMachineInstancetypeForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listVirtualMachinePoolForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listVirtualMachinePoolForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listVirtualMachinePoolForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listVirtualMachinePoolForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listVirtualMachinePreferenceForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listVirtualMachinePreferenceForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listVirtualMachinePreferenceForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listVirtualMachinePreferenceForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listVirtualMachineRestoreForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listVirtualMachineRestoreForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listVirtualMachineRestoreForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listVirtualMachineRestoreForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listVirtualMachineSnapshotContentForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listVirtualMachineSnapshotContentForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listVirtualMachineSnapshotContentForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listVirtualMachineSnapshotContentForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listVirtualMachineSnapshotForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listVirtualMachineSnapshotForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    listVirtualMachineSnapshotForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.listVirtualMachineSnapshotForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a MigrationPolicy object.
     * @param name Name of the resource
     * @param body
     */
    patchMigrationPolicyWithHttpInfo(name, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchMigrationPolicyWithHttpInfo(name, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a MigrationPolicy object.
     * @param name Name of the resource
     * @param body
     */
    patchMigrationPolicy(name, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchMigrationPolicy(name, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a KubeVirt object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedKubeVirtWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchNamespacedKubeVirtWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a KubeVirt object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedKubeVirt(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchNamespacedKubeVirt(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchNamespacedVirtualMachineWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachine(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchNamespacedVirtualMachine(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a VirtualMachineExport object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineExportWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchNamespacedVirtualMachineExportWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a VirtualMachineExport object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineExport(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchNamespacedVirtualMachineExport(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineInstanceWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchNamespacedVirtualMachineInstanceWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineInstance(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchNamespacedVirtualMachineInstance(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a VirtualMachineInstanceMigration object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineInstanceMigrationWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchNamespacedVirtualMachineInstanceMigrationWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a VirtualMachineInstanceMigration object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineInstanceMigration(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchNamespacedVirtualMachineInstanceMigration(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a VirtualMachineInstancePreset object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineInstancePresetWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchNamespacedVirtualMachineInstancePresetWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a VirtualMachineInstancePreset object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineInstancePreset(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchNamespacedVirtualMachineInstancePreset(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a VirtualMachineInstanceReplicaSet object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a VirtualMachineInstanceReplicaSet object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineInstanceReplicaSet(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchNamespacedVirtualMachineInstanceReplicaSet(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a VirtualMachineInstancetype object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineInstancetypeWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchNamespacedVirtualMachineInstancetypeWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a VirtualMachineInstancetype object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineInstancetype(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchNamespacedVirtualMachineInstancetype(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a VirtualMachinePool object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachinePoolWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchNamespacedVirtualMachinePoolWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a VirtualMachinePool object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachinePool(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchNamespacedVirtualMachinePool(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a VirtualMachinePreference object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachinePreferenceWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchNamespacedVirtualMachinePreferenceWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a VirtualMachinePreference object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachinePreference(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchNamespacedVirtualMachinePreference(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a VirtualMachineRestore object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineRestoreWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchNamespacedVirtualMachineRestoreWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a VirtualMachineRestore object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineRestore(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchNamespacedVirtualMachineRestore(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a VirtualMachineSnapshot object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineSnapshotWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchNamespacedVirtualMachineSnapshotWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a VirtualMachineSnapshot object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineSnapshot(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchNamespacedVirtualMachineSnapshot(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a VirtualMachineSnapshotContent object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineSnapshotContentWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchNamespacedVirtualMachineSnapshotContentWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a VirtualMachineSnapshotContent object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    patchNamespacedVirtualMachineSnapshotContent(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchNamespacedVirtualMachineSnapshotContent(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a VirtualMachineClone object.
     * @param name Name of the resource
     * @param body
     */
    patchVirtualMachineCloneWithHttpInfo(name, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchVirtualMachineCloneWithHttpInfo(name, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a VirtualMachineClone object.
     * @param name Name of the resource
     * @param body
     */
    patchVirtualMachineClone(name, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchVirtualMachineClone(name, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a VirtualMachineClusterInstancetype object.
     * @param name Name of the resource
     * @param body
     */
    patchVirtualMachineClusterInstancetypeWithHttpInfo(name, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchVirtualMachineClusterInstancetypeWithHttpInfo(name, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a VirtualMachineClusterInstancetype object.
     * @param name Name of the resource
     * @param body
     */
    patchVirtualMachineClusterInstancetype(name, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchVirtualMachineClusterInstancetype(name, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a VirtualMachineClusterPreference object.
     * @param name Name of the resource
     * @param body
     */
    patchVirtualMachineClusterPreferenceWithHttpInfo(name, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchVirtualMachineClusterPreferenceWithHttpInfo(name, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Patch a VirtualMachineClusterPreference object.
     * @param name Name of the resource
     * @param body
     */
    patchVirtualMachineClusterPreference(name, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.patchVirtualMachineClusterPreference(name, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a MigrationPolicy object.
     * @param name Name of the resource
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readMigrationPolicyWithHttpInfo(name, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readMigrationPolicyWithHttpInfo(name, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a MigrationPolicy object.
     * @param name Name of the resource
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readMigrationPolicy(name, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readMigrationPolicy(name, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a KubeVirt object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedKubeVirtWithHttpInfo(name, namespace, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readNamespacedKubeVirtWithHttpInfo(name, namespace, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a KubeVirt object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedKubeVirt(name, namespace, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readNamespacedKubeVirt(name, namespace, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineWithHttpInfo(name, namespace, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readNamespacedVirtualMachineWithHttpInfo(name, namespace, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachine(name, namespace, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readNamespacedVirtualMachine(name, namespace, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a VirtualMachineExport object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineExportWithHttpInfo(name, namespace, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readNamespacedVirtualMachineExportWithHttpInfo(name, namespace, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a VirtualMachineExport object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineExport(name, namespace, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readNamespacedVirtualMachineExport(name, namespace, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineInstanceWithHttpInfo(name, namespace, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readNamespacedVirtualMachineInstanceWithHttpInfo(name, namespace, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineInstance(name, namespace, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readNamespacedVirtualMachineInstance(name, namespace, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a VirtualMachineInstanceMigration object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineInstanceMigrationWithHttpInfo(name, namespace, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readNamespacedVirtualMachineInstanceMigrationWithHttpInfo(name, namespace, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a VirtualMachineInstanceMigration object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineInstanceMigration(name, namespace, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readNamespacedVirtualMachineInstanceMigration(name, namespace, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a VirtualMachineInstancePreset object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineInstancePresetWithHttpInfo(name, namespace, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readNamespacedVirtualMachineInstancePresetWithHttpInfo(name, namespace, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a VirtualMachineInstancePreset object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineInstancePreset(name, namespace, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readNamespacedVirtualMachineInstancePreset(name, namespace, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a VirtualMachineInstanceReplicaSet object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(name, namespace, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(name, namespace, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a VirtualMachineInstanceReplicaSet object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineInstanceReplicaSet(name, namespace, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readNamespacedVirtualMachineInstanceReplicaSet(name, namespace, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a VirtualMachineInstancetype object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineInstancetypeWithHttpInfo(name, namespace, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readNamespacedVirtualMachineInstancetypeWithHttpInfo(name, namespace, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a VirtualMachineInstancetype object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineInstancetype(name, namespace, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readNamespacedVirtualMachineInstancetype(name, namespace, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a VirtualMachinePool object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachinePoolWithHttpInfo(name, namespace, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readNamespacedVirtualMachinePoolWithHttpInfo(name, namespace, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a VirtualMachinePool object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachinePool(name, namespace, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readNamespacedVirtualMachinePool(name, namespace, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a VirtualMachinePreference object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachinePreferenceWithHttpInfo(name, namespace, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readNamespacedVirtualMachinePreferenceWithHttpInfo(name, namespace, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a VirtualMachinePreference object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachinePreference(name, namespace, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readNamespacedVirtualMachinePreference(name, namespace, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a VirtualMachineRestore object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineRestoreWithHttpInfo(name, namespace, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readNamespacedVirtualMachineRestoreWithHttpInfo(name, namespace, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a VirtualMachineRestore object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineRestore(name, namespace, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readNamespacedVirtualMachineRestore(name, namespace, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a VirtualMachineSnapshot object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineSnapshotWithHttpInfo(name, namespace, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readNamespacedVirtualMachineSnapshotWithHttpInfo(name, namespace, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a VirtualMachineSnapshot object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineSnapshot(name, namespace, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readNamespacedVirtualMachineSnapshot(name, namespace, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a VirtualMachineSnapshotContent object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineSnapshotContentWithHttpInfo(name, namespace, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readNamespacedVirtualMachineSnapshotContentWithHttpInfo(name, namespace, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a VirtualMachineSnapshotContent object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readNamespacedVirtualMachineSnapshotContent(name, namespace, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readNamespacedVirtualMachineSnapshotContent(name, namespace, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a VirtualMachineClone object.
     * @param name Name of the resource
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readVirtualMachineCloneWithHttpInfo(name, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readVirtualMachineCloneWithHttpInfo(name, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a VirtualMachineClone object.
     * @param name Name of the resource
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readVirtualMachineClone(name, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readVirtualMachineClone(name, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a VirtualMachineClusterInstancetype object.
     * @param name Name of the resource
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readVirtualMachineClusterInstancetypeWithHttpInfo(name, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readVirtualMachineClusterInstancetypeWithHttpInfo(name, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a VirtualMachineClusterInstancetype object.
     * @param name Name of the resource
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readVirtualMachineClusterInstancetype(name, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readVirtualMachineClusterInstancetype(name, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a VirtualMachineClusterPreference object.
     * @param name Name of the resource
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readVirtualMachineClusterPreferenceWithHttpInfo(name, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readVirtualMachineClusterPreferenceWithHttpInfo(name, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a VirtualMachineClusterPreference object.
     * @param name Name of the resource
     * @param [exact] Should the export be exact. Exact export maintains cluster-specific fields like \&#39;Namespace\&#39;.
     * @param [_export] Should this value be exported. Export strips fields that a user can not specify.
     */
    readVirtualMachineClusterPreference(name, exact, _export, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.readVirtualMachineClusterPreference(name, exact, _export, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a MigrationPolicy object.
     * @param name Name of the resource
     * @param body
     */
    replaceMigrationPolicyWithHttpInfo(name, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceMigrationPolicyWithHttpInfo(name, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a MigrationPolicy object.
     * @param name Name of the resource
     * @param body
     */
    replaceMigrationPolicy(name, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceMigrationPolicy(name, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a KubeVirt object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedKubeVirtWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceNamespacedKubeVirtWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a KubeVirt object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedKubeVirt(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceNamespacedKubeVirt(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceNamespacedVirtualMachineWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachine(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceNamespacedVirtualMachine(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a VirtualMachineExport object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineExportWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceNamespacedVirtualMachineExportWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a VirtualMachineExport object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineExport(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceNamespacedVirtualMachineExport(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineInstanceWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceNamespacedVirtualMachineInstanceWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineInstance(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceNamespacedVirtualMachineInstance(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a VirtualMachineInstanceMigration object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineInstanceMigrationWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceNamespacedVirtualMachineInstanceMigrationWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a VirtualMachineInstanceMigration object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineInstanceMigration(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceNamespacedVirtualMachineInstanceMigration(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a VirtualMachineInstancePreset object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineInstancePresetWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceNamespacedVirtualMachineInstancePresetWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a VirtualMachineInstancePreset object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineInstancePreset(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceNamespacedVirtualMachineInstancePreset(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a VirtualMachineInstanceReplicaSet object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a VirtualMachineInstanceReplicaSet object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineInstanceReplicaSet(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceNamespacedVirtualMachineInstanceReplicaSet(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a VirtualMachineInstancetype object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineInstancetypeWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceNamespacedVirtualMachineInstancetypeWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a VirtualMachineInstancetype object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineInstancetype(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceNamespacedVirtualMachineInstancetype(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a VirtualMachinePool object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachinePoolWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceNamespacedVirtualMachinePoolWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a VirtualMachinePool object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachinePool(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceNamespacedVirtualMachinePool(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a VirtualMachinePreference object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachinePreferenceWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceNamespacedVirtualMachinePreferenceWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a VirtualMachinePreference object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachinePreference(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceNamespacedVirtualMachinePreference(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a VirtualMachineRestore object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineRestoreWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceNamespacedVirtualMachineRestoreWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a VirtualMachineRestore object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineRestore(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceNamespacedVirtualMachineRestore(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a VirtualMachineSnapshot object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineSnapshotWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceNamespacedVirtualMachineSnapshotWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a VirtualMachineSnapshot object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineSnapshot(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceNamespacedVirtualMachineSnapshot(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a VirtualMachineSnapshotContent object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineSnapshotContentWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceNamespacedVirtualMachineSnapshotContentWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a VirtualMachineSnapshotContent object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    replaceNamespacedVirtualMachineSnapshotContent(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceNamespacedVirtualMachineSnapshotContent(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a VirtualMachineClone object.
     * @param name Name of the resource
     * @param body
     */
    replaceVirtualMachineCloneWithHttpInfo(name, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceVirtualMachineCloneWithHttpInfo(name, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a VirtualMachineClone object.
     * @param name Name of the resource
     * @param body
     */
    replaceVirtualMachineClone(name, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceVirtualMachineClone(name, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a VirtualMachineClusterInstancetype object.
     * @param name Name of the resource
     * @param body
     */
    replaceVirtualMachineClusterInstancetypeWithHttpInfo(name, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceVirtualMachineClusterInstancetypeWithHttpInfo(name, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a VirtualMachineClusterInstancetype object.
     * @param name Name of the resource
     * @param body
     */
    replaceVirtualMachineClusterInstancetype(name, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceVirtualMachineClusterInstancetype(name, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a VirtualMachineClusterPreference object.
     * @param name Name of the resource
     * @param body
     */
    replaceVirtualMachineClusterPreferenceWithHttpInfo(name, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceVirtualMachineClusterPreferenceWithHttpInfo(name, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Update a VirtualMachineClusterPreference object.
     * @param name Name of the resource
     * @param body
     */
    replaceVirtualMachineClusterPreference(name, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.replaceVirtualMachineClusterPreference(name, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Health endpoint
     */
    v1CheckHealthWithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1CheckHealthWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * Health endpoint
     */
    v1CheckHealth(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1CheckHealth(observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection to a serial console on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1ConsoleWithHttpInfo(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1ConsoleWithHttpInfo(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection to a serial console on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1Console(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1Console(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Expands instancetype and preference into the passed VirtualMachine object.
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1ExpandSpecWithHttpInfo(namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1ExpandSpecWithHttpInfo(namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Expands instancetype and preference into the passed VirtualMachine object.
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1ExpandSpec(namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1ExpandSpec(namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Get list of active filesystems on guest machine via guest agent
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1FilesystemlistWithHttpInfo(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1FilesystemlistWithHttpInfo(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Get list of active filesystems on guest machine via guest agent
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1Filesystemlist(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1Filesystemlist(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Freeze a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1FreezeWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1FreezeWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Freeze a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1Freeze(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1Freeze(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a KubeVirt API Group
     */
    v1GetSubAPIGroupWithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1GetSubAPIGroupWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get a KubeVirt API Group
     */
    v1GetSubAPIGroup(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1GetSubAPIGroup(observableOptions);
        return result.toPromise();
    }
    /**
     */
    v1GuestfsWithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1GuestfsWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     */
    v1Guestfs(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1Guestfs(observableOptions);
        return result.toPromise();
    }
    /**
     * Get guest agent os information
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1GuestosinfoWithHttpInfo(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1GuestosinfoWithHttpInfo(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Get guest agent os information
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1Guestosinfo(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1Guestosinfo(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Dumps a VirtualMachineInstance memory.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1MemoryDumpWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1MemoryDumpWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Dumps a VirtualMachineInstance memory.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1MemoryDump(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1MemoryDump(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Migrate a running VirtualMachine to another node.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1MigrateWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1MigrateWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Migrate a running VirtualMachine to another node.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1Migrate(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1Migrate(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Pause a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1PauseWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1PauseWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Pause a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1Pause(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1Pause(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Remove memory dump association.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1RemoveMemoryDumpWithHttpInfo(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1RemoveMemoryDumpWithHttpInfo(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Remove memory dump association.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1RemoveMemoryDump(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1RemoveMemoryDump(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Restart a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [body]
     */
    v1RestartWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1RestartWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Restart a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [body]
     */
    v1Restart(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1Restart(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Fetch SEV certificate chain from the node where Virtual Machine is scheduled
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1SEVFetchCertChainWithHttpInfo(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1SEVFetchCertChainWithHttpInfo(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Fetch SEV certificate chain from the node where Virtual Machine is scheduled
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1SEVFetchCertChain(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1SEVFetchCertChain(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Inject SEV launch secret into a Virtual Machine
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1SEVInjectLaunchSecretWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1SEVInjectLaunchSecretWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Inject SEV launch secret into a Virtual Machine
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1SEVInjectLaunchSecret(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1SEVInjectLaunchSecret(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Query SEV launch measurement from a Virtual Machine
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1SEVQueryLaunchMeasurementWithHttpInfo(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1SEVQueryLaunchMeasurementWithHttpInfo(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Query SEV launch measurement from a Virtual Machine
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1SEVQueryLaunchMeasurement(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1SEVQueryLaunchMeasurement(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Setup SEV session parameters for a Virtual Machine
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1SEVSetupSessionWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1SEVSetupSessionWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Setup SEV session parameters for a Virtual Machine
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1SEVSetupSession(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1SEVSetupSession(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Soft reboot a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1SoftRebootWithHttpInfo(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1SoftRebootWithHttpInfo(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Soft reboot a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1SoftReboot(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1SoftReboot(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Start a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1StartWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1StartWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Start a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1Start(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1Start(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Stop a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [body]
     */
    v1StopWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1StopWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Stop a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [body]
     */
    v1Stop(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1Stop(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Unfreeze a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1UnfreezeWithHttpInfo(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1UnfreezeWithHttpInfo(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Unfreeze a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1Unfreeze(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1Unfreeze(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Unpause a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1UnpauseWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1UnpauseWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Unpause a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1Unpause(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1Unpause(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Get list of active users via guest agent
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1UserlistWithHttpInfo(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1UserlistWithHttpInfo(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Get list of active users via guest agent
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1Userlist(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1Userlist(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection to connect to VNC on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1VNCWithHttpInfo(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1VNCWithHttpInfo(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection to connect to VNC on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1VNC(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1VNC(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a PNG VNC screenshot of the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [moveCursor] Move the cursor on the VNC display to wake up the screen
     */
    v1VNCScreenshotWithHttpInfo(name, namespace, moveCursor, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1VNCScreenshotWithHttpInfo(name, namespace, moveCursor, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a PNG VNC screenshot of the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [moveCursor] Move the cursor on the VNC display to wake up the screen
     */
    v1VNCScreenshot(name, namespace, moveCursor, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1VNCScreenshot(name, namespace, moveCursor, observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port via VSOCK.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The port which the VSOCK application listens to.
     * @param [tls] Weather to request a TLS encrypted session from the VSOCK application.
     */
    v1VSOCKWithHttpInfo(name, namespace, port, tls, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1VSOCKWithHttpInfo(name, namespace, port, tls, observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port via VSOCK.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The port which the VSOCK application listens to.
     * @param [tls] Weather to request a TLS encrypted session from the VSOCK application.
     */
    v1VSOCK(name, namespace, port, tls, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1VSOCK(name, namespace, port, tls, observableOptions);
        return result.toPromise();
    }
    /**
     */
    v1VersionWithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1VersionWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     */
    v1Version(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1Version(observableOptions);
        return result.toPromise();
    }
    /**
     * Health endpoint
     */
    v1alpha3CheckHealthWithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3CheckHealthWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * Health endpoint
     */
    v1alpha3CheckHealth(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3CheckHealth(observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection to a serial console on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3ConsoleWithHttpInfo(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3ConsoleWithHttpInfo(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection to a serial console on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3Console(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3Console(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Expands instancetype and preference into the passed VirtualMachine object.
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3ExpandSpecWithHttpInfo(namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3ExpandSpecWithHttpInfo(namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Expands instancetype and preference into the passed VirtualMachine object.
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3ExpandSpec(namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3ExpandSpec(namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Get list of active filesystems on guest machine via guest agent
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3FilesystemlistWithHttpInfo(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3FilesystemlistWithHttpInfo(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Get list of active filesystems on guest machine via guest agent
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3Filesystemlist(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3Filesystemlist(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Freeze a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3FreezeWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3FreezeWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Freeze a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3Freeze(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3Freeze(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     */
    v1alpha3GuestfsWithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3GuestfsWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     */
    v1alpha3Guestfs(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3Guestfs(observableOptions);
        return result.toPromise();
    }
    /**
     * Get guest agent os information
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3GuestosinfoWithHttpInfo(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3GuestosinfoWithHttpInfo(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Get guest agent os information
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3Guestosinfo(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3Guestosinfo(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Dumps a VirtualMachineInstance memory.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3MemoryDumpWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3MemoryDumpWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Dumps a VirtualMachineInstance memory.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3MemoryDump(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3MemoryDump(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Migrate a running VirtualMachine to another node.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3MigrateWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3MigrateWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Migrate a running VirtualMachine to another node.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3Migrate(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3Migrate(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Pause a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3PauseWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3PauseWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Pause a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3Pause(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3Pause(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Remove memory dump association.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3RemoveMemoryDumpWithHttpInfo(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3RemoveMemoryDumpWithHttpInfo(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Remove memory dump association.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3RemoveMemoryDump(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3RemoveMemoryDump(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Restart a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [body]
     */
    v1alpha3RestartWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3RestartWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Restart a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [body]
     */
    v1alpha3Restart(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3Restart(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Fetch SEV certificate chain from the node where Virtual Machine is scheduled
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3SEVFetchCertChainWithHttpInfo(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3SEVFetchCertChainWithHttpInfo(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Fetch SEV certificate chain from the node where Virtual Machine is scheduled
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3SEVFetchCertChain(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3SEVFetchCertChain(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Inject SEV launch secret into a Virtual Machine
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3SEVInjectLaunchSecretWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3SEVInjectLaunchSecretWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Inject SEV launch secret into a Virtual Machine
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3SEVInjectLaunchSecret(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3SEVInjectLaunchSecret(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Query SEV launch measurement from a Virtual Machine
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3SEVQueryLaunchMeasurementWithHttpInfo(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3SEVQueryLaunchMeasurementWithHttpInfo(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Query SEV launch measurement from a Virtual Machine
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3SEVQueryLaunchMeasurement(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3SEVQueryLaunchMeasurement(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Setup SEV session parameters for a Virtual Machine
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3SEVSetupSessionWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3SEVSetupSessionWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Setup SEV session parameters for a Virtual Machine
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3SEVSetupSession(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3SEVSetupSession(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Soft reboot a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3SoftRebootWithHttpInfo(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3SoftRebootWithHttpInfo(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Soft reboot a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3SoftReboot(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3SoftReboot(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Start a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3StartWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3StartWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Start a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3Start(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3Start(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Stop a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [body]
     */
    v1alpha3StopWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3StopWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Stop a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [body]
     */
    v1alpha3Stop(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3Stop(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Unfreeze a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3UnfreezeWithHttpInfo(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3UnfreezeWithHttpInfo(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Unfreeze a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3Unfreeze(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3Unfreeze(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Unpause a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3UnpauseWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3UnpauseWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Unpause a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3Unpause(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3Unpause(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Get list of active users via guest agent
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3UserlistWithHttpInfo(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3UserlistWithHttpInfo(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Get list of active users via guest agent
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3Userlist(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3Userlist(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection to connect to VNC on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3VNCWithHttpInfo(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3VNCWithHttpInfo(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection to connect to VNC on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3VNC(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3VNC(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a PNG VNC screenshot of the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [moveCursor] Move the cursor on the VNC display to wake up the screen
     */
    v1alpha3VNCScreenshotWithHttpInfo(name, namespace, moveCursor, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3VNCScreenshotWithHttpInfo(name, namespace, moveCursor, observableOptions);
        return result.toPromise();
    }
    /**
     * Get a PNG VNC screenshot of the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param [moveCursor] Move the cursor on the VNC display to wake up the screen
     */
    v1alpha3VNCScreenshot(name, namespace, moveCursor, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3VNCScreenshot(name, namespace, moveCursor, observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port via VSOCK.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The port which the VSOCK application listens to.
     * @param [tls] Weather to request a TLS encrypted session from the VSOCK application.
     */
    v1alpha3VSOCKWithHttpInfo(name, namespace, port, tls, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3VSOCKWithHttpInfo(name, namespace, port, tls, observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port via VSOCK.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The port which the VSOCK application listens to.
     * @param [tls] Weather to request a TLS encrypted session from the VSOCK application.
     */
    v1alpha3VSOCK(name, namespace, port, tls, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3VSOCK(name, namespace, port, tls, observableOptions);
        return result.toPromise();
    }
    /**
     */
    v1alpha3VersionWithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3VersionWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     */
    v1alpha3Version(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3Version(observableOptions);
        return result.toPromise();
    }
    /**
     */
    v1alpha3dumpClusterProfilerWithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3dumpClusterProfilerWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     */
    v1alpha3dumpClusterProfiler(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3dumpClusterProfiler(observableOptions);
        return result.toPromise();
    }
    /**
     * Get a KubeVirt API resources
     */
    v1alpha3getAPISubResourcesWithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3getAPISubResourcesWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get a KubeVirt API resources
     */
    v1alpha3getAPISubResources(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3getAPISubResources(observableOptions);
        return result.toPromise();
    }
    /**
     */
    v1alpha3startClusterProfilerWithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3startClusterProfilerWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     */
    v1alpha3startClusterProfiler(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3startClusterProfiler(observableOptions);
        return result.toPromise();
    }
    /**
     */
    v1alpha3stopClusterProfilerWithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3stopClusterProfilerWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     */
    v1alpha3stopClusterProfiler(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3stopClusterProfiler(observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection to connect to USB device on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3usbredirWithHttpInfo(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3usbredirWithHttpInfo(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection to connect to USB device on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3usbredir(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3usbredir(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Add a volume and disk to a running Virtual Machine.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3vmAddvolumeWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3vmAddvolumeWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Add a volume and disk to a running Virtual Machine.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3vmAddvolume(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3vmAddvolume(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Get VirtualMachine object with expanded instancetype and preference.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3vmExpandSpecWithHttpInfo(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3vmExpandSpecWithHttpInfo(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Get VirtualMachine object with expanded instancetype and preference.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1alpha3vmExpandSpec(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3vmExpandSpec(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic to the running VMI for the specified VirtualMachine and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     */
    v1alpha3vmPortForwardWithHttpInfo(name, namespace, port, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3vmPortForwardWithHttpInfo(name, namespace, port, observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic to the running VMI for the specified VirtualMachine and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     */
    v1alpha3vmPortForward(name, namespace, port, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3vmPortForward(name, namespace, port, observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachine and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     * @param protocol The protocol for portforward on the VirtualMachineInstance.
     */
    v1alpha3vmPortForwardWithProtocolWithHttpInfo(name, namespace, port, protocol, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3vmPortForwardWithProtocolWithHttpInfo(name, namespace, port, protocol, observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachine and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     * @param protocol The protocol for portforward on the VirtualMachineInstance.
     */
    v1alpha3vmPortForwardWithProtocol(name, namespace, port, protocol, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3vmPortForwardWithProtocol(name, namespace, port, protocol, observableOptions);
        return result.toPromise();
    }
    /**
     * Removes a volume and disk from a running Virtual Machine.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3vmRemovevolumeWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3vmRemovevolumeWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Removes a volume and disk from a running Virtual Machine.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3vmRemovevolume(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3vmRemovevolume(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Add a volume and disk to a running Virtual Machine Instance
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3vmiAddvolumeWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3vmiAddvolumeWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Add a volume and disk to a running Virtual Machine Instance
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3vmiAddvolume(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3vmiAddvolume(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     */
    v1alpha3vmiPortForwardWithHttpInfo(name, namespace, port, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3vmiPortForwardWithHttpInfo(name, namespace, port, observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     */
    v1alpha3vmiPortForward(name, namespace, port, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3vmiPortForward(name, namespace, port, observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachineInstance and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     * @param protocol The protocol for portforward on the VirtualMachineInstance.
     */
    v1alpha3vmiPortForwardWithProtocolWithHttpInfo(name, namespace, port, protocol, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3vmiPortForwardWithProtocolWithHttpInfo(name, namespace, port, protocol, observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachineInstance and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     * @param protocol The protocol for portforward on the VirtualMachineInstance.
     */
    v1alpha3vmiPortForwardWithProtocol(name, namespace, port, protocol, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3vmiPortForwardWithProtocol(name, namespace, port, protocol, observableOptions);
        return result.toPromise();
    }
    /**
     * Removes a volume and disk from a running Virtual Machine Instance
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3vmiRemovevolumeWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3vmiRemovevolumeWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Removes a volume and disk from a running Virtual Machine Instance
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1alpha3vmiRemovevolume(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1alpha3vmiRemovevolume(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     */
    v1dumpClusterProfilerWithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1dumpClusterProfilerWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     */
    v1dumpClusterProfiler(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1dumpClusterProfiler(observableOptions);
        return result.toPromise();
    }
    /**
     * Get a KubeVirt API resources
     */
    v1getAPISubResourcesWithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1getAPISubResourcesWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     * Get a KubeVirt API resources
     */
    v1getAPISubResources(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1getAPISubResources(observableOptions);
        return result.toPromise();
    }
    /**
     */
    v1startClusterProfilerWithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1startClusterProfilerWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     */
    v1startClusterProfiler(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1startClusterProfiler(observableOptions);
        return result.toPromise();
    }
    /**
     */
    v1stopClusterProfilerWithHttpInfo(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1stopClusterProfilerWithHttpInfo(observableOptions);
        return result.toPromise();
    }
    /**
     */
    v1stopClusterProfiler(_options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1stopClusterProfiler(observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection to connect to USB device on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1usbredirWithHttpInfo(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1usbredirWithHttpInfo(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection to connect to USB device on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1usbredir(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1usbredir(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Add a volume and disk to a running Virtual Machine.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1vmAddvolumeWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1vmAddvolumeWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Add a volume and disk to a running Virtual Machine.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1vmAddvolume(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1vmAddvolume(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Get VirtualMachine object with expanded instancetype and preference.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1vmExpandSpecWithHttpInfo(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1vmExpandSpecWithHttpInfo(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Get VirtualMachine object with expanded instancetype and preference.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    v1vmExpandSpec(name, namespace, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1vmExpandSpec(name, namespace, observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic to the running VMI for the specified VirtualMachine and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     */
    v1vmPortForwardWithHttpInfo(name, namespace, port, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1vmPortForwardWithHttpInfo(name, namespace, port, observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic to the running VMI for the specified VirtualMachine and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     */
    v1vmPortForward(name, namespace, port, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1vmPortForward(name, namespace, port, observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachine and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     * @param protocol The protocol for portforward on the VirtualMachineInstance.
     */
    v1vmPortForwardWithProtocolWithHttpInfo(name, namespace, port, protocol, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1vmPortForwardWithProtocolWithHttpInfo(name, namespace, port, protocol, observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachine and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     * @param protocol The protocol for portforward on the VirtualMachineInstance.
     */
    v1vmPortForwardWithProtocol(name, namespace, port, protocol, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1vmPortForwardWithProtocol(name, namespace, port, protocol, observableOptions);
        return result.toPromise();
    }
    /**
     * Removes a volume and disk from a running Virtual Machine.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1vmRemovevolumeWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1vmRemovevolumeWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Removes a volume and disk from a running Virtual Machine.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1vmRemovevolume(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1vmRemovevolume(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Add a volume and disk to a running Virtual Machine Instance
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1vmiAddvolumeWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1vmiAddvolumeWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Add a volume and disk to a running Virtual Machine Instance
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1vmiAddvolume(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1vmiAddvolume(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     */
    v1vmiPortForwardWithHttpInfo(name, namespace, port, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1vmiPortForwardWithHttpInfo(name, namespace, port, observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     */
    v1vmiPortForward(name, namespace, port, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1vmiPortForward(name, namespace, port, observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachineInstance and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     * @param protocol The protocol for portforward on the VirtualMachineInstance.
     */
    v1vmiPortForwardWithProtocolWithHttpInfo(name, namespace, port, protocol, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1vmiPortForwardWithProtocolWithHttpInfo(name, namespace, port, protocol, observableOptions);
        return result.toPromise();
    }
    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachineInstance and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     * @param protocol The protocol for portforward on the VirtualMachineInstance.
     */
    v1vmiPortForwardWithProtocol(name, namespace, port, protocol, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1vmiPortForwardWithProtocol(name, namespace, port, protocol, observableOptions);
        return result.toPromise();
    }
    /**
     * Removes a volume and disk from a running Virtual Machine Instance
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1vmiRemovevolumeWithHttpInfo(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1vmiRemovevolumeWithHttpInfo(name, namespace, body, observableOptions);
        return result.toPromise();
    }
    /**
     * Removes a volume and disk from a running Virtual Machine Instance
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body
     */
    v1vmiRemovevolume(name, namespace, body, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.v1vmiRemovevolume(name, namespace, body, observableOptions);
        return result.toPromise();
    }
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
    watchKubeVirtListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchKubeVirtListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchKubeVirtListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchKubeVirtListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchMigrationPolicyListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchMigrationPolicyListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchMigrationPolicyListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchMigrationPolicyListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchNamespacedKubeVirtWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchNamespacedKubeVirtWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchNamespacedKubeVirt(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchNamespacedKubeVirt(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchNamespacedVirtualMachineWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchNamespacedVirtualMachineWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchNamespacedVirtualMachine(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchNamespacedVirtualMachine(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchNamespacedVirtualMachineExportWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchNamespacedVirtualMachineExportWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchNamespacedVirtualMachineExport(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchNamespacedVirtualMachineExport(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchNamespacedVirtualMachineInstanceWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchNamespacedVirtualMachineInstanceWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchNamespacedVirtualMachineInstance(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchNamespacedVirtualMachineInstance(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchNamespacedVirtualMachineInstanceMigrationWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchNamespacedVirtualMachineInstanceMigrationWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchNamespacedVirtualMachineInstanceMigration(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchNamespacedVirtualMachineInstanceMigration(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchNamespacedVirtualMachineInstancePresetWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchNamespacedVirtualMachineInstancePresetWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchNamespacedVirtualMachineInstancePreset(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchNamespacedVirtualMachineInstancePreset(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchNamespacedVirtualMachineInstanceReplicaSetWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchNamespacedVirtualMachineInstanceReplicaSet(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchNamespacedVirtualMachineInstanceReplicaSet(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchNamespacedVirtualMachineInstancetypeWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchNamespacedVirtualMachineInstancetypeWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchNamespacedVirtualMachineInstancetype(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchNamespacedVirtualMachineInstancetype(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchNamespacedVirtualMachinePoolWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchNamespacedVirtualMachinePoolWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchNamespacedVirtualMachinePool(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchNamespacedVirtualMachinePool(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchNamespacedVirtualMachinePreferenceWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchNamespacedVirtualMachinePreferenceWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchNamespacedVirtualMachinePreference(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchNamespacedVirtualMachinePreference(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchNamespacedVirtualMachineRestoreWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchNamespacedVirtualMachineRestoreWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchNamespacedVirtualMachineRestore(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchNamespacedVirtualMachineRestore(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchNamespacedVirtualMachineSnapshotWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchNamespacedVirtualMachineSnapshotWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchNamespacedVirtualMachineSnapshot(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchNamespacedVirtualMachineSnapshot(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchNamespacedVirtualMachineSnapshotContentWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchNamespacedVirtualMachineSnapshotContentWithHttpInfo(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchNamespacedVirtualMachineSnapshotContent(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchNamespacedVirtualMachineSnapshotContent(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchVirtualMachineCloneListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchVirtualMachineCloneListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchVirtualMachineCloneListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchVirtualMachineCloneListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchVirtualMachineClusterInstancetypeListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchVirtualMachineClusterInstancetypeListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchVirtualMachineClusterInstancetypeListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchVirtualMachineClusterInstancetypeListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchVirtualMachineClusterPreferenceListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchVirtualMachineClusterPreferenceListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchVirtualMachineClusterPreferenceListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchVirtualMachineClusterPreferenceListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchVirtualMachineExportListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchVirtualMachineExportListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchVirtualMachineExportListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchVirtualMachineExportListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchVirtualMachineInstanceListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchVirtualMachineInstanceListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchVirtualMachineInstanceListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchVirtualMachineInstanceListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchVirtualMachineInstanceMigrationListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchVirtualMachineInstanceMigrationListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchVirtualMachineInstanceMigrationListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchVirtualMachineInstanceMigrationListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchVirtualMachineInstancePresetListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchVirtualMachineInstancePresetListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchVirtualMachineInstancePresetListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchVirtualMachineInstancePresetListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchVirtualMachineInstanceReplicaSetListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchVirtualMachineInstanceReplicaSetListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchVirtualMachineInstanceReplicaSetListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchVirtualMachineInstanceReplicaSetListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchVirtualMachineInstancetypeListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchVirtualMachineInstancetypeListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchVirtualMachineInstancetypeListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchVirtualMachineInstancetypeListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchVirtualMachineListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchVirtualMachineListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchVirtualMachineListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchVirtualMachineListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchVirtualMachinePoolListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchVirtualMachinePoolListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchVirtualMachinePoolListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchVirtualMachinePoolListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchVirtualMachinePreferenceListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchVirtualMachinePreferenceListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchVirtualMachinePreferenceListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchVirtualMachinePreferenceListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchVirtualMachineRestoreListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchVirtualMachineRestoreListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchVirtualMachineRestoreListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchVirtualMachineRestoreListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchVirtualMachineSnapshotContentListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchVirtualMachineSnapshotContentListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchVirtualMachineSnapshotContentListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchVirtualMachineSnapshotContentListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchVirtualMachineSnapshotListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchVirtualMachineSnapshotListForAllNamespacesWithHttpInfo(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
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
    watchVirtualMachineSnapshotListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options) {
        let observableOptions;
        if (_options) {
            observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(m => new middleware_js_1.PromiseMiddlewareWrapper(m)),
                middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
            };
        }
        const result = this.api.watchVirtualMachineSnapshotListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, observableOptions);
        return result.toPromise();
    }
}
exports.PromiseDefaultApi = PromiseDefaultApi;
//# sourceMappingURL=PromiseAPI.js.map