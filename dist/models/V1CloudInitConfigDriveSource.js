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
import { K8sIoApiCoreV1LocalObjectReferenceFromJSON, K8sIoApiCoreV1LocalObjectReferenceToJSON, } from './K8sIoApiCoreV1LocalObjectReference.js';
/**
 * Check if a given object implements the V1CloudInitConfigDriveSource interface.
 */
export function instanceOfV1CloudInitConfigDriveSource(value) {
    return true;
}
export function V1CloudInitConfigDriveSourceFromJSON(json) {
    return V1CloudInitConfigDriveSourceFromJSONTyped(json, false);
}
export function V1CloudInitConfigDriveSourceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'networkData': json['networkData'] == null ? undefined : json['networkData'],
        'networkDataBase64': json['networkDataBase64'] == null ? undefined : json['networkDataBase64'],
        'networkDataSecretRef': json['networkDataSecretRef'] == null ? undefined : K8sIoApiCoreV1LocalObjectReferenceFromJSON(json['networkDataSecretRef']),
        'secretRef': json['secretRef'] == null ? undefined : K8sIoApiCoreV1LocalObjectReferenceFromJSON(json['secretRef']),
        'userData': json['userData'] == null ? undefined : json['userData'],
        'userDataBase64': json['userDataBase64'] == null ? undefined : json['userDataBase64'],
    };
}
export function V1CloudInitConfigDriveSourceToJSON(json) {
    return V1CloudInitConfigDriveSourceToJSONTyped(json, false);
}
export function V1CloudInitConfigDriveSourceToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'networkData': value['networkData'],
        'networkDataBase64': value['networkDataBase64'],
        'networkDataSecretRef': K8sIoApiCoreV1LocalObjectReferenceToJSON(value['networkDataSecretRef']),
        'secretRef': K8sIoApiCoreV1LocalObjectReferenceToJSON(value['secretRef']),
        'userData': value['userData'],
        'userDataBase64': value['userDataBase64'],
    };
}
//# sourceMappingURL=V1CloudInitConfigDriveSource.js.map