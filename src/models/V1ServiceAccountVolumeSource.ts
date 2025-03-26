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
* ServiceAccountVolumeSource adapts a ServiceAccount into a volume.
*/
export class V1ServiceAccountVolumeSource {
    /**
    * Name of the service account in the pod\'s namespace to use. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
    */
    'serviceAccountName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "serviceAccountName",
            "baseName": "serviceAccountName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1ServiceAccountVolumeSource.attributeTypeMap;
    }

    public constructor() {
    }
}
