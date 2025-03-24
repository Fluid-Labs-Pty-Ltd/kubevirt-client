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
/**
 * Check if a given object implements the K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement interface.
 */
export function instanceOfK8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement(value) {
    if (!('key' in value) || value['key'] === undefined)
        return false;
    if (!('operator' in value) || value['operator'] === undefined)
        return false;
    return true;
}
export function K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirementFromJSON(json) {
    return K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirementFromJSONTyped(json, false);
}
export function K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirementFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'key': json['key'],
        'operator': json['operator'],
        'values': json['values'] == null ? undefined : json['values'],
    };
}
export function K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirementToJSON(json) {
    return K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirementToJSONTyped(json, false);
}
export function K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirementToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'key': value['key'],
        'operator': value['operator'],
        'values': value['values'],
    };
}
//# sourceMappingURL=K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement.js.map