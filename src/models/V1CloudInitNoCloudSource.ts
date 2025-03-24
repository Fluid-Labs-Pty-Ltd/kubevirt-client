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

import { mapValues } from '../runtime.js';
import type { K8sIoApiCoreV1LocalObjectReference } from './K8sIoApiCoreV1LocalObjectReference.js';
import {
    K8sIoApiCoreV1LocalObjectReferenceFromJSON,
    K8sIoApiCoreV1LocalObjectReferenceFromJSONTyped,
    K8sIoApiCoreV1LocalObjectReferenceToJSON,
    K8sIoApiCoreV1LocalObjectReferenceToJSONTyped,
} from './K8sIoApiCoreV1LocalObjectReference.js';

/**
 * Represents a cloud-init nocloud user data source. More info: http://cloudinit.readthedocs.io/en/latest/topics/datasources/nocloud.html
 * @export
 * @interface V1CloudInitNoCloudSource
 */
export interface V1CloudInitNoCloudSource {
    /**
     * NetworkData contains NoCloud inline cloud-init networkdata.
     * @type {string}
     * @memberof V1CloudInitNoCloudSource
     */
    networkData?: string;
    /**
     * NetworkDataBase64 contains NoCloud cloud-init networkdata as a base64 encoded string.
     * @type {string}
     * @memberof V1CloudInitNoCloudSource
     */
    networkDataBase64?: string;
    /**
     * 
     * @type {K8sIoApiCoreV1LocalObjectReference}
     * @memberof V1CloudInitNoCloudSource
     */
    networkDataSecretRef?: K8sIoApiCoreV1LocalObjectReference;
    /**
     * 
     * @type {K8sIoApiCoreV1LocalObjectReference}
     * @memberof V1CloudInitNoCloudSource
     */
    secretRef?: K8sIoApiCoreV1LocalObjectReference;
    /**
     * UserData contains NoCloud inline cloud-init userdata.
     * @type {string}
     * @memberof V1CloudInitNoCloudSource
     */
    userData?: string;
    /**
     * UserDataBase64 contains NoCloud cloud-init userdata as a base64 encoded string.
     * @type {string}
     * @memberof V1CloudInitNoCloudSource
     */
    userDataBase64?: string;
}

/**
 * Check if a given object implements the V1CloudInitNoCloudSource interface.
 */
export function instanceOfV1CloudInitNoCloudSource(value: object): value is V1CloudInitNoCloudSource {
    return true;
}

export function V1CloudInitNoCloudSourceFromJSON(json: any): V1CloudInitNoCloudSource {
    return V1CloudInitNoCloudSourceFromJSONTyped(json, false);
}

export function V1CloudInitNoCloudSourceFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1CloudInitNoCloudSource {
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

export function V1CloudInitNoCloudSourceToJSON(json: any): V1CloudInitNoCloudSource {
    return V1CloudInitNoCloudSourceToJSONTyped(json, false);
}

export function V1CloudInitNoCloudSourceToJSONTyped(value?: V1CloudInitNoCloudSource | null, _ignoreDiscriminator: boolean = false): any {
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

