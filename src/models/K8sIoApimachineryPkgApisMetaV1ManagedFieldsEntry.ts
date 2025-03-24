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
/**
 * ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.
 * @export
 * @interface K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry
 */
export interface K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry {
    /**
     * APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry
     */
    apiVersion?: string;
    /**
     * FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry
     */
    fieldsType?: string;
    /**
     * FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.
     * 
     * Each key is either a '.' representing the field itself, and will always map to an empty set, or a string representing a sub-field or item. The string will follow one of these four formats: 'f:<name>', where <name> is the name of a field in a struct, or key in a map 'v:<value>', where <value> is the exact json formatted value of a list item 'i:<index>', where <index> is position of a item in a list 'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values If a key maps to an empty Fields value, the field that key represents is part of the set.
     * 
     * The exact format is defined in sigs.k8s.io/structured-merge-diff
     * @type {object}
     * @memberof K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry
     */
    fieldsV1?: object;
    /**
     * Manager is an identifier of the workflow managing these fields.
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry
     */
    manager?: string;
    /**
     * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry
     */
    operation?: string;
    /**
     * Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry
     */
    subresource?: string;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {string}
     * @memberof K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry
     */
    time?: string;
}

/**
 * Check if a given object implements the K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry interface.
 */
export function instanceOfK8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry(value: object): value is K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry {
    return true;
}

export function K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntryFromJSON(json: any): K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry {
    return K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntryFromJSONTyped(json, false);
}

export function K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry {
    if (json == null) {
        return json;
    }
    return {
        
        'apiVersion': json['apiVersion'] == null ? undefined : json['apiVersion'],
        'fieldsType': json['fieldsType'] == null ? undefined : json['fieldsType'],
        'fieldsV1': json['fieldsV1'] == null ? undefined : json['fieldsV1'],
        'manager': json['manager'] == null ? undefined : json['manager'],
        'operation': json['operation'] == null ? undefined : json['operation'],
        'subresource': json['subresource'] == null ? undefined : json['subresource'],
        'time': json['time'] == null ? undefined : json['time'],
    };
}

export function K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntryToJSON(json: any): K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry {
    return K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntryToJSONTyped(json, false);
}

export function K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntryToJSONTyped(value?: K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'apiVersion': value['apiVersion'],
        'fieldsType': value['fieldsType'],
        'fieldsV1': value['fieldsV1'],
        'manager': value['manager'],
        'operation': value['operation'],
        'subresource': value['subresource'],
        'time': value['time'],
    };
}

