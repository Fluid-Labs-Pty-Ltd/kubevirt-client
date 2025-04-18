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
* SEVMeasurementInfo contains information about the guest launch measurement.
*/
export class V1SEVMeasurementInfo {
    /**
    * API major version of the SEV host.
    */
    'apiMajor'?: number;
    /**
    * API minor version of the SEV host.
    */
    'apiMinor'?: number;
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Build ID of the SEV host.
    */
    'buildID'?: number;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    /**
    * SHA256 of the loader binary
    */
    'loaderSHA'?: string;
    /**
    * Base64 encoded launch measurement of the SEV guest.
    */
    'measurement'?: string;
    /**
    * Policy of the SEV guest.
    */
    'policy'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiMajor",
            "baseName": "apiMajor",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "apiMinor",
            "baseName": "apiMinor",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "buildID",
            "baseName": "buildID",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "loaderSHA",
            "baseName": "loaderSHA",
            "type": "string",
            "format": ""
        },
        {
            "name": "measurement",
            "baseName": "measurement",
            "type": "string",
            "format": ""
        },
        {
            "name": "policy",
            "baseName": "policy",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return V1SEVMeasurementInfo.attributeTypeMap;
    }

    public constructor() {
    }
}
