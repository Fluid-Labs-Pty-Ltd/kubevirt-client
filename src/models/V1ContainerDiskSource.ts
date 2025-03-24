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
 * Represents a docker image with an embedded disk.
 * @export
 * @interface V1ContainerDiskSource
 */
export interface V1ContainerDiskSource {
    /**
     * Image is the name of the image with the embedded disk.
     * @type {string}
     * @memberof V1ContainerDiskSource
     */
    image: string;
    /**
     * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
     * 
     * Possible enum values:
     *  - `"Always"` means that kubelet always attempts to pull the latest image. Container will fail If the pull fails.
     *  - `"IfNotPresent"` means that kubelet pulls if the image isn't present on disk. Container will fail if the image isn't present and the pull fails.
     *  - `"Never"` means that kubelet never pulls an image, but only uses a local image. Container will fail if the image isn't present
     * @type {string}
     * @memberof V1ContainerDiskSource
     */
    imagePullPolicy?: V1ContainerDiskSourceImagePullPolicyEnum;
    /**
     * ImagePullSecret is the name of the Docker registry secret required to pull the image. The secret must already exist.
     * @type {string}
     * @memberof V1ContainerDiskSource
     */
    imagePullSecret?: string;
    /**
     * Path defines the path to disk file in the container
     * @type {string}
     * @memberof V1ContainerDiskSource
     */
    path?: string;
}


/**
 * @export
 */
export const V1ContainerDiskSourceImagePullPolicyEnum = {
    Always: 'Always',
    IfNotPresent: 'IfNotPresent',
    Never: 'Never'
} as const;
export type V1ContainerDiskSourceImagePullPolicyEnum = typeof V1ContainerDiskSourceImagePullPolicyEnum[keyof typeof V1ContainerDiskSourceImagePullPolicyEnum];


/**
 * Check if a given object implements the V1ContainerDiskSource interface.
 */
export function instanceOfV1ContainerDiskSource(value: object): value is V1ContainerDiskSource {
    if (!('image' in value) || value['image'] === undefined) return false;
    return true;
}

export function V1ContainerDiskSourceFromJSON(json: any): V1ContainerDiskSource {
    return V1ContainerDiskSourceFromJSONTyped(json, false);
}

export function V1ContainerDiskSourceFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1ContainerDiskSource {
    if (json == null) {
        return json;
    }
    return {
        
        'image': json['image'],
        'imagePullPolicy': json['imagePullPolicy'] == null ? undefined : json['imagePullPolicy'],
        'imagePullSecret': json['imagePullSecret'] == null ? undefined : json['imagePullSecret'],
        'path': json['path'] == null ? undefined : json['path'],
    };
}

export function V1ContainerDiskSourceToJSON(json: any): V1ContainerDiskSource {
    return V1ContainerDiskSourceToJSONTyped(json, false);
}

export function V1ContainerDiskSourceToJSONTyped(value?: V1ContainerDiskSource | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'image': value['image'],
        'imagePullPolicy': value['imagePullPolicy'],
        'imagePullSecret': value['imagePullSecret'],
        'path': value['path'],
    };
}

