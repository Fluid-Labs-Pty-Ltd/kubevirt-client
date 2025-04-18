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

import { HttpFile } from '../http/http.js';

/**
* TLSConfiguration holds TLS options
*/
export class V1TLSConfiguration {
    'ciphers'?: Array<string>;
    /**
    * MinTLSVersion is a way to specify the minimum protocol version that is acceptable for TLS connections. Protocol versions are based on the following most common TLS configurations:    https://ssl-config.mozilla.org/  Note that SSLv3.0 is not a supported protocol version due to well known vulnerabilities such as POODLE: https://en.wikipedia.org/wiki/POODLE
    */
    'minTLSVersion'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "ciphers",
            "baseName": "ciphers",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "minTLSVersion",
            "baseName": "minTLSVersion",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1TLSConfiguration.attributeTypeMap;
    }

    public constructor() {
    }
}
