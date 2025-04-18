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
* Flags will create a patch that will replace all flags for the container\'s command field. The only flags that will be used are those define. There are no guarantees around forward/backward compatibility.  If set incorrectly this will cause the resource when rolled out to error until flags are updated.
*/
export class V1Flags {
    'api'?: { [key: string]: string; };
    'controller'?: { [key: string]: string; };
    'handler'?: { [key: string]: string; };

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "api",
            "baseName": "api",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "controller",
            "baseName": "controller",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "handler",
            "baseName": "handler",
            "type": "{ [key: string]: string; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1Flags.attributeTypeMap;
    }

    public constructor() {
    }
}
