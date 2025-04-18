/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1RateLimiter } from '../models/V1RateLimiter.js';
import { HttpFile } from '../http/http.js';

/**
* RESTClientConfiguration allows configuring certain aspects of the k8s rest client.
*/
export class V1RESTClientConfiguration {
    'rateLimiter'?: V1RateLimiter;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "rateLimiter",
            "baseName": "rateLimiter",
            "type": "V1RateLimiter",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1RESTClientConfiguration.attributeTypeMap;
    }

    public constructor() {
    }
}
