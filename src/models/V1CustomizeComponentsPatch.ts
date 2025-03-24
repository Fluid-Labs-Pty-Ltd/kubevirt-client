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
 * 
 * @export
 * @interface V1CustomizeComponentsPatch
 */
export interface V1CustomizeComponentsPatch {
    /**
     * 
     * @type {string}
     * @memberof V1CustomizeComponentsPatch
     */
    patch: string;
    /**
     * 
     * @type {string}
     * @memberof V1CustomizeComponentsPatch
     */
    resourceName: string;
    /**
     * 
     * @type {string}
     * @memberof V1CustomizeComponentsPatch
     */
    resourceType: string;
    /**
     * 
     * @type {string}
     * @memberof V1CustomizeComponentsPatch
     */
    type: string;
}

/**
 * Check if a given object implements the V1CustomizeComponentsPatch interface.
 */
export function instanceOfV1CustomizeComponentsPatch(value: object): value is V1CustomizeComponentsPatch {
    if (!('patch' in value) || value['patch'] === undefined) return false;
    if (!('resourceName' in value) || value['resourceName'] === undefined) return false;
    if (!('resourceType' in value) || value['resourceType'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function V1CustomizeComponentsPatchFromJSON(json: any): V1CustomizeComponentsPatch {
    return V1CustomizeComponentsPatchFromJSONTyped(json, false);
}

export function V1CustomizeComponentsPatchFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1CustomizeComponentsPatch {
    if (json == null) {
        return json;
    }
    return {
        
        'patch': json['patch'],
        'resourceName': json['resourceName'],
        'resourceType': json['resourceType'],
        'type': json['type'],
    };
}

export function V1CustomizeComponentsPatchToJSON(json: any): V1CustomizeComponentsPatch {
    return V1CustomizeComponentsPatchToJSONTyped(json, false);
}

export function V1CustomizeComponentsPatchToJSONTyped(value?: V1CustomizeComponentsPatch | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'patch': value['patch'],
        'resourceName': value['resourceName'],
        'resourceType': value['resourceType'],
        'type': value['type'],
    };
}

