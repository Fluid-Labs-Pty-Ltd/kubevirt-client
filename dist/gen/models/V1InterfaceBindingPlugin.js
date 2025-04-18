"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1InterfaceBindingPlugin = void 0;
class V1InterfaceBindingPlugin {
    'computeResourceOverhead';
    /**
    * DomainAttachmentType is a standard domain network attachment method kubevirt supports. Supported values: \"tap\", \"managedTap\" (since v1.4). The standard domain attachment can be used instead or in addition to the sidecarImage. version: 1alphav1
    */
    'domainAttachmentType';
    /**
    * DownwardAPI specifies what kind of data should be exposed to the binding plugin sidecar. Supported values: \"device-info\" version: v1alphav1
    */
    'downwardAPI';
    'migration';
    /**
    * NetworkAttachmentDefinition references to a NetworkAttachmentDefinition CR object. Format: <name>, <namespace>/<name>. If namespace is not specified, VMI namespace is assumed. version: 1alphav1
    */
    'networkAttachmentDefinition';
    /**
    * SidecarImage references a container image that runs in the virt-launcher pod. The sidecar handles (libvirt) domain configuration and optional services. version: 1alphav1
    */
    'sidecarImage';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "computeResourceOverhead",
            "baseName": "computeResourceOverhead",
            "type": "V1ResourceRequirementsWithoutClaims",
            "format": ""
        },
        {
            "name": "domainAttachmentType",
            "baseName": "domainAttachmentType",
            "type": "string",
            "format": ""
        },
        {
            "name": "downwardAPI",
            "baseName": "downwardAPI",
            "type": "string",
            "format": ""
        },
        {
            "name": "migration",
            "baseName": "migration",
            "type": "V1InterfaceBindingMigration",
            "format": ""
        },
        {
            "name": "networkAttachmentDefinition",
            "baseName": "networkAttachmentDefinition",
            "type": "string",
            "format": ""
        },
        {
            "name": "sidecarImage",
            "baseName": "sidecarImage",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1InterfaceBindingPlugin.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1InterfaceBindingPlugin = V1InterfaceBindingPlugin;
//# sourceMappingURL=V1InterfaceBindingPlugin.js.map