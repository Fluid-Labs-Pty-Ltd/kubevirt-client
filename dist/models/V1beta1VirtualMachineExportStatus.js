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
* VirtualMachineExportStatus is the status for a VirtualMachineExport resource
*/
export class V1beta1VirtualMachineExportStatus {
    'conditions';
    'links';
    'phase';
    /**
    * ServiceName is the name of the service created associated with the Virtual Machine export. It will be used to create the internal URLs for downloading the images
    */
    'serviceName';
    /**
    * TokenSecretRef is the name of the secret that contains the token used by the export server pod
    */
    'tokenSecretRef';
    /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
    'ttlExpirationTime';
    /**
    * VirtualMachineName shows the name of the source virtual machine if the source is either a VirtualMachine or a VirtualMachineSnapshot. This is mainly to easily identify the source VirtualMachine in case of a VirtualMachineSnapshot
    */
    'virtualMachineName';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1beta1Condition>",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "V1beta1VirtualMachineExportLinks",
            "format": ""
        },
        {
            "name": "phase",
            "baseName": "phase",
            "type": "string",
            "format": ""
        },
        {
            "name": "serviceName",
            "baseName": "serviceName",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokenSecretRef",
            "baseName": "tokenSecretRef",
            "type": "string",
            "format": ""
        },
        {
            "name": "ttlExpirationTime",
            "baseName": "ttlExpirationTime",
            "type": "string",
            "format": "date-time"
        },
        {
            "name": "virtualMachineName",
            "baseName": "virtualMachineName",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1beta1VirtualMachineExportStatus.attributeTypeMap;
    }
    constructor() {
    }
}
//# sourceMappingURL=V1beta1VirtualMachineExportStatus.js.map