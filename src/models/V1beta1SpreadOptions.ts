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

export class V1beta1SpreadOptions {
    /**
    * Across optionally defines how to spread vCPUs across the guest visible topology. Default: SocketsCores
    */
    'across'?: string;
    /**
    * Ratio optionally defines the ratio to spread vCPUs across the guest visible topology:  CoresThreads        - 1:2   - Controls the ratio of cores to threads. Only a ratio of 2 is currently accepted. SocketsCores        - 1:N   - Controls the ratio of socket to cores. SocketsCoresThreads - 1:N:2 - Controls the ratio of socket to cores. Each core providing 2 threads.  Default: 2
    */
    'ratio'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "across",
            "baseName": "across",
            "type": "string",
            "format": ""
        },
        {
            "name": "ratio",
            "baseName": "ratio",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return V1beta1SpreadOptions.attributeTypeMap;
    }

    public constructor() {
    }
}
