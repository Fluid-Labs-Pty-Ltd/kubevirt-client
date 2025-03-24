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
 * LogVerbosity sets log verbosity level of  various components
 * @export
 * @interface V1LogVerbosity
 */
export interface V1LogVerbosity {
    /**
     * NodeVerbosity represents a map of nodes with a specific verbosity level
     * @type {{ [key: string]: number; }}
     * @memberof V1LogVerbosity
     */
    nodeVerbosity?: { [key: string]: number; };
    /**
     * 
     * @type {number}
     * @memberof V1LogVerbosity
     */
    virtAPI?: number;
    /**
     * 
     * @type {number}
     * @memberof V1LogVerbosity
     */
    virtController?: number;
    /**
     * 
     * @type {number}
     * @memberof V1LogVerbosity
     */
    virtHandler?: number;
    /**
     * 
     * @type {number}
     * @memberof V1LogVerbosity
     */
    virtLauncher?: number;
    /**
     * 
     * @type {number}
     * @memberof V1LogVerbosity
     */
    virtOperator?: number;
}

/**
 * Check if a given object implements the V1LogVerbosity interface.
 */
export function instanceOfV1LogVerbosity(value: object): value is V1LogVerbosity {
    return true;
}

export function V1LogVerbosityFromJSON(json: any): V1LogVerbosity {
    return V1LogVerbosityFromJSONTyped(json, false);
}

export function V1LogVerbosityFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1LogVerbosity {
    if (json == null) {
        return json;
    }
    return {
        
        'nodeVerbosity': json['nodeVerbosity'] == null ? undefined : json['nodeVerbosity'],
        'virtAPI': json['virtAPI'] == null ? undefined : json['virtAPI'],
        'virtController': json['virtController'] == null ? undefined : json['virtController'],
        'virtHandler': json['virtHandler'] == null ? undefined : json['virtHandler'],
        'virtLauncher': json['virtLauncher'] == null ? undefined : json['virtLauncher'],
        'virtOperator': json['virtOperator'] == null ? undefined : json['virtOperator'],
    };
}

export function V1LogVerbosityToJSON(json: any): V1LogVerbosity {
    return V1LogVerbosityToJSONTyped(json, false);
}

export function V1LogVerbosityToJSONTyped(value?: V1LogVerbosity | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'nodeVerbosity': value['nodeVerbosity'],
        'virtAPI': value['virtAPI'],
        'virtController': value['virtController'],
        'virtHandler': value['virtHandler'],
        'virtLauncher': value['virtLauncher'],
        'virtOperator': value['virtOperator'],
    };
}

