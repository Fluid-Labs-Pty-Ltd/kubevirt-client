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
exports.V1beta1DataVolumeSourceImageIO = void 0;
/**
* DataVolumeSourceImageIO provides the parameters to create a Data Volume from an imageio source
*/
class V1beta1DataVolumeSourceImageIO {
    /**
    * CertConfigMap provides a reference to the CA cert
    */
    'certConfigMap';
    /**
    * DiskID provides id of a disk to be imported
    */
    'diskId';
    /**
    * SecretRef provides the secret reference needed to access the ovirt-engine
    */
    'secretRef';
    /**
    * URL is the URL of the ovirt-engine
    */
    'url';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "certConfigMap",
            "baseName": "certConfigMap",
            "type": "string",
            "format": ""
        },
        {
            "name": "diskId",
            "baseName": "diskId",
            "type": "string",
            "format": ""
        },
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1beta1DataVolumeSourceImageIO.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1beta1DataVolumeSourceImageIO = V1beta1DataVolumeSourceImageIO;
//# sourceMappingURL=V1beta1DataVolumeSourceImageIO.js.map