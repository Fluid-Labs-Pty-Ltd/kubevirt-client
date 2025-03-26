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

import { K8sIoApimachineryPkgApisMetaV1LabelSelector } from '../models/K8sIoApimachineryPkgApisMetaV1LabelSelector.js';
import { V1alpha1VirtualMachineTemplateSpec } from '../models/V1alpha1VirtualMachineTemplateSpec.js';
import { HttpFile } from '../http/http.js';

export class V1alpha1VirtualMachinePoolSpec {
    /**
    * Indicates that the pool is paused.
    */
    'paused'?: boolean;
    /**
    * Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
    */
    'replicas'?: number;
    'selector': K8sIoApimachineryPkgApisMetaV1LabelSelector;
    'virtualMachineTemplate': V1alpha1VirtualMachineTemplateSpec;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "paused",
            "baseName": "paused",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "replicas",
            "baseName": "replicas",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "selector",
            "baseName": "selector",
            "type": "K8sIoApimachineryPkgApisMetaV1LabelSelector",
            "format": ""
        },
        {
            "name": "virtualMachineTemplate",
            "baseName": "virtualMachineTemplate",
            "type": "V1alpha1VirtualMachineTemplateSpec",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1VirtualMachinePoolSpec.attributeTypeMap;
    }

    public constructor() {
    }
}
