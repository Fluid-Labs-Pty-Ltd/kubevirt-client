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
import { V1InterfaceBindingMigrationFromJSON, V1InterfaceBindingMigrationToJSON, } from './V1InterfaceBindingMigration.js';
import { V1ResourceRequirementsWithoutClaimsFromJSON, V1ResourceRequirementsWithoutClaimsToJSON, } from './V1ResourceRequirementsWithoutClaims.js';
/**
 * Check if a given object implements the V1InterfaceBindingPlugin interface.
 */
export function instanceOfV1InterfaceBindingPlugin(value) {
    return true;
}
export function V1InterfaceBindingPluginFromJSON(json) {
    return V1InterfaceBindingPluginFromJSONTyped(json, false);
}
export function V1InterfaceBindingPluginFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'computeResourceOverhead': json['computeResourceOverhead'] == null ? undefined : V1ResourceRequirementsWithoutClaimsFromJSON(json['computeResourceOverhead']),
        'domainAttachmentType': json['domainAttachmentType'] == null ? undefined : json['domainAttachmentType'],
        'downwardAPI': json['downwardAPI'] == null ? undefined : json['downwardAPI'],
        'migration': json['migration'] == null ? undefined : V1InterfaceBindingMigrationFromJSON(json['migration']),
        'networkAttachmentDefinition': json['networkAttachmentDefinition'] == null ? undefined : json['networkAttachmentDefinition'],
        'sidecarImage': json['sidecarImage'] == null ? undefined : json['sidecarImage'],
    };
}
export function V1InterfaceBindingPluginToJSON(json) {
    return V1InterfaceBindingPluginToJSONTyped(json, false);
}
export function V1InterfaceBindingPluginToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'computeResourceOverhead': V1ResourceRequirementsWithoutClaimsToJSON(value['computeResourceOverhead']),
        'domainAttachmentType': value['domainAttachmentType'],
        'downwardAPI': value['downwardAPI'],
        'migration': V1InterfaceBindingMigrationToJSON(value['migration']),
        'networkAttachmentDefinition': value['networkAttachmentDefinition'],
        'sidecarImage': value['sidecarImage'],
    };
}
//# sourceMappingURL=V1InterfaceBindingPlugin.js.map