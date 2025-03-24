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
/**
 * DataVolumeSourceRegistry provides the parameters to create a Data Volume from an registry source
 * @export
 * @interface V1beta1DataVolumeSourceRegistry
 */
export interface V1beta1DataVolumeSourceRegistry {
    /**
     * CertConfigMap provides a reference to the Registry certs
     * @type {string}
     * @memberof V1beta1DataVolumeSourceRegistry
     */
    certConfigMap?: string;
    /**
     * ImageStream is the name of image stream for import
     * @type {string}
     * @memberof V1beta1DataVolumeSourceRegistry
     */
    imageStream?: string;
    /**
     * PullMethod can be either "pod" (default import), or "node" (node docker cache based import)
     * @type {string}
     * @memberof V1beta1DataVolumeSourceRegistry
     */
    pullMethod?: string;
    /**
     * SecretRef provides the secret reference needed to access the Registry source
     * @type {string}
     * @memberof V1beta1DataVolumeSourceRegistry
     */
    secretRef?: string;
    /**
     * URL is the url of the registry source (starting with the scheme: docker, oci-archive)
     * @type {string}
     * @memberof V1beta1DataVolumeSourceRegistry
     */
    url?: string;
}

/**
 * Check if a given object implements the V1beta1DataVolumeSourceRegistry interface.
 */
export function instanceOfV1beta1DataVolumeSourceRegistry(value: object): value is V1beta1DataVolumeSourceRegistry {
    return true;
}

export function V1beta1DataVolumeSourceRegistryFromJSON(json: any): V1beta1DataVolumeSourceRegistry {
    return V1beta1DataVolumeSourceRegistryFromJSONTyped(json, false);
}

export function V1beta1DataVolumeSourceRegistryFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1beta1DataVolumeSourceRegistry {
    if (json == null) {
        return json;
    }
    return {
        
        'certConfigMap': json['certConfigMap'] == null ? undefined : json['certConfigMap'],
        'imageStream': json['imageStream'] == null ? undefined : json['imageStream'],
        'pullMethod': json['pullMethod'] == null ? undefined : json['pullMethod'],
        'secretRef': json['secretRef'] == null ? undefined : json['secretRef'],
        'url': json['url'] == null ? undefined : json['url'],
    };
}

export function V1beta1DataVolumeSourceRegistryToJSON(json: any): V1beta1DataVolumeSourceRegistry {
    return V1beta1DataVolumeSourceRegistryToJSONTyped(json, false);
}

export function V1beta1DataVolumeSourceRegistryToJSONTyped(value?: V1beta1DataVolumeSourceRegistry | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'certConfigMap': value['certConfigMap'],
        'imageStream': value['imageStream'],
        'pullMethod': value['pullMethod'],
        'secretRef': value['secretRef'],
        'url': value['url'],
    };
}

