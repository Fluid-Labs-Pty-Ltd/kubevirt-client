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
* PreferenceMatcher references a set of preference that is used to fill fields in the VMI template.
*/
export class V1PreferenceMatcher {
    /**
    * InferFromVolume lists the name of a volume that should be used to infer or discover the preference to be used through known annotations on the underlying resource. Once applied to the PreferenceMatcher this field is removed.
    */
    'inferFromVolume'?: string;
    /**
    * InferFromVolumeFailurePolicy controls what should happen on failure when preference the instancetype. Allowed values are: \"RejectInferFromVolumeFailure\" and \"IgnoreInferFromVolumeFailure\". If not specified, \"RejectInferFromVolumeFailure\" is used by default.
    */
    'inferFromVolumeFailurePolicy'?: string;
    /**
    * Kind specifies which preference resource is referenced. Allowed values are: \"VirtualMachinePreference\" and \"VirtualMachineClusterPreference\". If not specified, \"VirtualMachineClusterPreference\" is used by default.
    */
    'kind'?: string;
    /**
    * Name is the name of the VirtualMachinePreference or VirtualMachineClusterPreference
    */
    'name'?: string;
    /**
    * RevisionName specifies a ControllerRevision containing a specific copy of the VirtualMachinePreference or VirtualMachineClusterPreference to be used. This is initially captured the first time the instancetype is applied to the VirtualMachineInstance.
    */
    'revisionName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "inferFromVolume",
            "baseName": "inferFromVolume",
            "type": "string",
            "format": ""
        },
        {
            "name": "inferFromVolumeFailurePolicy",
            "baseName": "inferFromVolumeFailurePolicy",
            "type": "string",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "revisionName",
            "baseName": "revisionName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PreferenceMatcher.attributeTypeMap;
    }

    public constructor() {
    }
}
