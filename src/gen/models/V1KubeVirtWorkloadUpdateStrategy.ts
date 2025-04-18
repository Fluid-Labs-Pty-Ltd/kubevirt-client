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
* KubeVirtWorkloadUpdateStrategy defines options related to updating a KubeVirt install
*/
export class V1KubeVirtWorkloadUpdateStrategy {
    /**
    * Duration is a wrapper around time.Duration which supports correct marshaling to YAML and JSON. In particular, it marshals into strings, which can be used as map keys in json.
    */
    'batchEvictionInterval'?: string;
    /**
    * BatchEvictionSize Represents the number of VMIs that can be forced updated per the BatchShutdownInteral interval  Defaults to 10
    */
    'batchEvictionSize'?: number;
    /**
    * WorkloadUpdateMethods defines the methods that can be used to disrupt workloads during automated workload updates. When multiple methods are present, the least disruptive method takes precedence over more disruptive methods. For example if both LiveMigrate and Shutdown methods are listed, only VMs which are not live migratable will be restarted/shutdown  An empty list defaults to no automated workload updating
    */
    'workloadUpdateMethods'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "batchEvictionInterval",
            "baseName": "batchEvictionInterval",
            "type": "string",
            "format": ""
        },
        {
            "name": "batchEvictionSize",
            "baseName": "batchEvictionSize",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "workloadUpdateMethods",
            "baseName": "workloadUpdateMethods",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1KubeVirtWorkloadUpdateStrategy.attributeTypeMap;
    }

    public constructor() {
    }
}
