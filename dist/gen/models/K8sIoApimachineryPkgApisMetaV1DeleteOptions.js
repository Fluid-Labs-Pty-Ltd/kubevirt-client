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
exports.K8sIoApimachineryPkgApisMetaV1DeleteOptions = void 0;
/**
* DeleteOptions may be provided when deleting an API object.
*/
class K8sIoApimachineryPkgApisMetaV1DeleteOptions {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion';
    /**
    * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
    */
    'dryRun';
    /**
    * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
    */
    'gracePeriodSeconds';
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind';
    /**
    * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \"orphan\" finalizer will be added to/removed from the object\'s finalizers list. Either this field or PropagationPolicy may be set, but not both.
    */
    'orphanDependents';
    'preconditions';
    /**
    * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \'Orphan\' - orphan the dependents; \'Background\' - allow the garbage collector to delete the dependents in the background; \'Foreground\' - a cascading policy that deletes all dependents in the foreground.
    */
    'propagationPolicy';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "dryRun",
            "baseName": "dryRun",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "gracePeriodSeconds",
            "baseName": "gracePeriodSeconds",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "orphanDependents",
            "baseName": "orphanDependents",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "preconditions",
            "baseName": "preconditions",
            "type": "K8sIoApimachineryPkgApisMetaV1Preconditions",
            "format": ""
        },
        {
            "name": "propagationPolicy",
            "baseName": "propagationPolicy",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return K8sIoApimachineryPkgApisMetaV1DeleteOptions.attributeTypeMap;
    }
    constructor() {
    }
}
exports.K8sIoApimachineryPkgApisMetaV1DeleteOptions = K8sIoApimachineryPkgApisMetaV1DeleteOptions;
//# sourceMappingURL=K8sIoApimachineryPkgApisMetaV1DeleteOptions.js.map