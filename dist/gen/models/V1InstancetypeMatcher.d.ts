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
/**
* InstancetypeMatcher references a instancetype that is used to fill fields in the VMI template.
*/
export declare class V1InstancetypeMatcher {
    /**
    * InferFromVolume lists the name of a volume that should be used to infer or discover the instancetype to be used through known annotations on the underlying resource. Once applied to the InstancetypeMatcher this field is removed.
    */
    'inferFromVolume'?: string;
    /**
    * InferFromVolumeFailurePolicy controls what should happen on failure when inferring the instancetype. Allowed values are: \"RejectInferFromVolumeFailure\" and \"IgnoreInferFromVolumeFailure\". If not specified, \"RejectInferFromVolumeFailure\" is used by default.
    */
    'inferFromVolumeFailurePolicy'?: string;
    /**
    * Kind specifies which instancetype resource is referenced. Allowed values are: \"VirtualMachineInstancetype\" and \"VirtualMachineClusterInstancetype\". If not specified, \"VirtualMachineClusterInstancetype\" is used by default.
    */
    'kind'?: string;
    /**
    * Name is the name of the VirtualMachineInstancetype or VirtualMachineClusterInstancetype
    */
    'name'?: string;
    /**
    * RevisionName specifies a ControllerRevision containing a specific copy of the VirtualMachineInstancetype or VirtualMachineClusterInstancetype to be used. This is initially captured the first time the instancetype is applied to the VirtualMachineInstance.
    */
    'revisionName'?: string;
    static readonly discriminator: string | undefined;
    static readonly mapping: {
        [index: string]: string;
    } | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
//# sourceMappingURL=V1InstancetypeMatcher.d.ts.map