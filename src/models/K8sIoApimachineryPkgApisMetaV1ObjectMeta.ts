/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
import type { K8sIoApimachineryPkgApisMetaV1OwnerReference } from './K8sIoApimachineryPkgApisMetaV1OwnerReference';
import {
    K8sIoApimachineryPkgApisMetaV1OwnerReferenceFromJSON,
    K8sIoApimachineryPkgApisMetaV1OwnerReferenceFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1OwnerReferenceToJSON,
    K8sIoApimachineryPkgApisMetaV1OwnerReferenceToJSONTyped,
} from './K8sIoApimachineryPkgApisMetaV1OwnerReference';
import type { K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry } from './K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry';
import {
    K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntryFromJSON,
    K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntryFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntryToJSON,
    K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntryToJSONTyped,
} from './K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry';

/**
 * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
 * @export
 * @interface K8sIoApimachineryPkgApisMetaV1ObjectMeta
 */
export interface K8sIoApimachineryPkgApisMetaV1ObjectMeta {
    /**
     * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
     * @type {{ [key: string]: string; }}
     * @memberof K8sIoApimachineryPkgApisMetaV1ObjectMeta
     */
    annotations?: { [key: string]: string; };
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1ObjectMeta
     */
    creationTimestamp?: string;
    /**
     * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
     * @type {number}
     * @memberof K8sIoApimachineryPkgApisMetaV1ObjectMeta
     */
    deletionGracePeriodSeconds?: number;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1ObjectMeta
     */
    deletionTimestamp?: string;
    /**
     * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
     * @type {Array<string>}
     * @memberof K8sIoApimachineryPkgApisMetaV1ObjectMeta
     */
    finalizers?: Array<string>;
    /**
     * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
     * 
     * If this field is specified and the generated name exists, the server will return a 409.
     * 
     * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1ObjectMeta
     */
    generateName?: string;
    /**
     * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
     * @type {number}
     * @memberof K8sIoApimachineryPkgApisMetaV1ObjectMeta
     */
    generation?: number;
    /**
     * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
     * @type {{ [key: string]: string; }}
     * @memberof K8sIoApimachineryPkgApisMetaV1ObjectMeta
     */
    labels?: { [key: string]: string; };
    /**
     * ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
     * @type {Array<K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry>}
     * @memberof K8sIoApimachineryPkgApisMetaV1ObjectMeta
     */
    managedFields?: Array<K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry>;
    /**
     * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1ObjectMeta
     */
    name?: string;
    /**
     * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
     * 
     * Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1ObjectMeta
     */
    namespace?: string;
    /**
     * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
     * @type {Array<K8sIoApimachineryPkgApisMetaV1OwnerReference>}
     * @memberof K8sIoApimachineryPkgApisMetaV1ObjectMeta
     */
    ownerReferences?: Array<K8sIoApimachineryPkgApisMetaV1OwnerReference>;
    /**
     * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
     * 
     * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1ObjectMeta
     */
    resourceVersion?: string;
    /**
     * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1ObjectMeta
     */
    selfLink?: string;
    /**
     * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
     * 
     * Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1ObjectMeta
     */
    uid?: string;
}

/**
 * Check if a given object implements the K8sIoApimachineryPkgApisMetaV1ObjectMeta interface.
 */
export function instanceOfK8sIoApimachineryPkgApisMetaV1ObjectMeta(value: object): value is K8sIoApimachineryPkgApisMetaV1ObjectMeta {
    return true;
}

export function K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON(json: any): K8sIoApimachineryPkgApisMetaV1ObjectMeta {
    return K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped(json, false);
}

export function K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): K8sIoApimachineryPkgApisMetaV1ObjectMeta {
    if (json == null) {
        return json;
    }
    return {
        
        'annotations': json['annotations'] == null ? undefined : json['annotations'],
        'creationTimestamp': json['creationTimestamp'] == null ? undefined : json['creationTimestamp'],
        'deletionGracePeriodSeconds': json['deletionGracePeriodSeconds'] == null ? undefined : json['deletionGracePeriodSeconds'],
        'deletionTimestamp': json['deletionTimestamp'] == null ? undefined : json['deletionTimestamp'],
        'finalizers': json['finalizers'] == null ? undefined : json['finalizers'],
        'generateName': json['generateName'] == null ? undefined : json['generateName'],
        'generation': json['generation'] == null ? undefined : json['generation'],
        'labels': json['labels'] == null ? undefined : json['labels'],
        'managedFields': json['managedFields'] == null ? undefined : ((json['managedFields'] as Array<any>).map(K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntryFromJSON)),
        'name': json['name'] == null ? undefined : json['name'],
        'namespace': json['namespace'] == null ? undefined : json['namespace'],
        'ownerReferences': json['ownerReferences'] == null ? undefined : ((json['ownerReferences'] as Array<any>).map(K8sIoApimachineryPkgApisMetaV1OwnerReferenceFromJSON)),
        'resourceVersion': json['resourceVersion'] == null ? undefined : json['resourceVersion'],
        'selfLink': json['selfLink'] == null ? undefined : json['selfLink'],
        'uid': json['uid'] == null ? undefined : json['uid'],
    };
}

export function K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON(json: any): K8sIoApimachineryPkgApisMetaV1ObjectMeta {
    return K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSONTyped(json, false);
}

export function K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSONTyped(value?: K8sIoApimachineryPkgApisMetaV1ObjectMeta | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'annotations': value['annotations'],
        'creationTimestamp': value['creationTimestamp'],
        'deletionGracePeriodSeconds': value['deletionGracePeriodSeconds'],
        'deletionTimestamp': value['deletionTimestamp'],
        'finalizers': value['finalizers'],
        'generateName': value['generateName'],
        'generation': value['generation'],
        'labels': value['labels'],
        'managedFields': value['managedFields'] == null ? undefined : ((value['managedFields'] as Array<any>).map(K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntryToJSON)),
        'name': value['name'],
        'namespace': value['namespace'],
        'ownerReferences': value['ownerReferences'] == null ? undefined : ((value['ownerReferences'] as Array<any>).map(K8sIoApimachineryPkgApisMetaV1OwnerReferenceToJSON)),
        'resourceVersion': value['resourceVersion'],
        'selfLink': value['selfLink'],
        'uid': value['uid'],
    };
}

