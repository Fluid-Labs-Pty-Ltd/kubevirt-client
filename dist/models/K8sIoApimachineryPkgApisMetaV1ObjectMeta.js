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
import { K8sIoApimachineryPkgApisMetaV1OwnerReferenceFromJSON, K8sIoApimachineryPkgApisMetaV1OwnerReferenceToJSON, } from './K8sIoApimachineryPkgApisMetaV1OwnerReference.js';
import { K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntryFromJSON, K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntryToJSON, } from './K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry.js';
/**
 * Check if a given object implements the K8sIoApimachineryPkgApisMetaV1ObjectMeta interface.
 */
export function instanceOfK8sIoApimachineryPkgApisMetaV1ObjectMeta(value) {
    return true;
}
export function K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON(json) {
    return K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped(json, false);
}
export function K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped(json, _ignoreDiscriminator) {
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
        'managedFields': json['managedFields'] == null ? undefined : (json['managedFields'].map(K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntryFromJSON)),
        'name': json['name'] == null ? undefined : json['name'],
        'namespace': json['namespace'] == null ? undefined : json['namespace'],
        'ownerReferences': json['ownerReferences'] == null ? undefined : (json['ownerReferences'].map(K8sIoApimachineryPkgApisMetaV1OwnerReferenceFromJSON)),
        'resourceVersion': json['resourceVersion'] == null ? undefined : json['resourceVersion'],
        'selfLink': json['selfLink'] == null ? undefined : json['selfLink'],
        'uid': json['uid'] == null ? undefined : json['uid'],
    };
}
export function K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON(json) {
    return K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSONTyped(json, false);
}
export function K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSONTyped(value, _ignoreDiscriminator = false) {
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
        'managedFields': value['managedFields'] == null ? undefined : (value['managedFields'].map(K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntryToJSON)),
        'name': value['name'],
        'namespace': value['namespace'],
        'ownerReferences': value['ownerReferences'] == null ? undefined : (value['ownerReferences'].map(K8sIoApimachineryPkgApisMetaV1OwnerReferenceToJSON)),
        'resourceVersion': value['resourceVersion'],
        'selfLink': value['selfLink'],
        'uid': value['uid'],
    };
}
//# sourceMappingURL=K8sIoApimachineryPkgApisMetaV1ObjectMeta.js.map