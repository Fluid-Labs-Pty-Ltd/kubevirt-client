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
 * GenerationStatus keeps track of the generation for a given resource so that decisions about forced updates can be made.
 * @export
 * @interface V1GenerationStatus
 */
export interface V1GenerationStatus {
    /**
     * group is the group of the thing you're tracking
     * @type {string}
     * @memberof V1GenerationStatus
     */
    group: string;
    /**
     * hash is an optional field set for resources without generation that are content sensitive like secrets and configmaps
     * @type {string}
     * @memberof V1GenerationStatus
     */
    hash?: string;
    /**
     * lastGeneration is the last generation of the workload controller involved
     * @type {number}
     * @memberof V1GenerationStatus
     */
    lastGeneration: number;
    /**
     * name is the name of the thing you're tracking
     * @type {string}
     * @memberof V1GenerationStatus
     */
    name: string;
    /**
     * namespace is where the thing you're tracking is
     * @type {string}
     * @memberof V1GenerationStatus
     */
    namespace?: string;
    /**
     * resource is the resource type of the thing you're tracking
     * @type {string}
     * @memberof V1GenerationStatus
     */
    resource: string;
}

/**
 * Check if a given object implements the V1GenerationStatus interface.
 */
export function instanceOfV1GenerationStatus(value: object): value is V1GenerationStatus {
    if (!('group' in value) || value['group'] === undefined) return false;
    if (!('lastGeneration' in value) || value['lastGeneration'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('resource' in value) || value['resource'] === undefined) return false;
    return true;
}

export function V1GenerationStatusFromJSON(json: any): V1GenerationStatus {
    return V1GenerationStatusFromJSONTyped(json, false);
}

export function V1GenerationStatusFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1GenerationStatus {
    if (json == null) {
        return json;
    }
    return {
        
        'group': json['group'],
        'hash': json['hash'] == null ? undefined : json['hash'],
        'lastGeneration': json['lastGeneration'],
        'name': json['name'],
        'namespace': json['namespace'] == null ? undefined : json['namespace'],
        'resource': json['resource'],
    };
}

export function V1GenerationStatusToJSON(json: any): V1GenerationStatus {
    return V1GenerationStatusToJSONTyped(json, false);
}

export function V1GenerationStatusToJSONTyped(value?: V1GenerationStatus | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'group': value['group'],
        'hash': value['hash'],
        'lastGeneration': value['lastGeneration'],
        'name': value['name'],
        'namespace': value['namespace'],
        'resource': value['resource'],
    };
}

