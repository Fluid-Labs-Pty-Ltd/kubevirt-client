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
 * Flags will create a patch that will replace all flags for the container's command field. The only flags that will be used are those define. There are no guarantees around forward/backward compatibility.  If set incorrectly this will cause the resource when rolled out to error until flags are updated.
 * @export
 * @interface V1Flags
 */
export interface V1Flags {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof V1Flags
     */
    api?: { [key: string]: string; };
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof V1Flags
     */
    controller?: { [key: string]: string; };
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof V1Flags
     */
    handler?: { [key: string]: string; };
}

/**
 * Check if a given object implements the V1Flags interface.
 */
export function instanceOfV1Flags(value: object): value is V1Flags {
    return true;
}

export function V1FlagsFromJSON(json: any): V1Flags {
    return V1FlagsFromJSONTyped(json, false);
}

export function V1FlagsFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1Flags {
    if (json == null) {
        return json;
    }
    return {
        
        'api': json['api'] == null ? undefined : json['api'],
        'controller': json['controller'] == null ? undefined : json['controller'],
        'handler': json['handler'] == null ? undefined : json['handler'],
    };
}

export function V1FlagsToJSON(json: any): V1Flags {
    return V1FlagsToJSONTyped(json, false);
}

export function V1FlagsToJSONTyped(value?: V1Flags | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'api': value['api'],
        'controller': value['controller'],
        'handler': value['handler'],
    };
}

