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
exports.V1beta1DataVolumeSourceRef = void 0;
/**
* DataVolumeSourceRef defines an indirect reference to the source of data for the DataVolume
*/
class V1beta1DataVolumeSourceRef {
    /**
    * The kind of the source reference, currently only \"DataSource\" is supported
    */
    'kind';
    /**
    * The name of the source reference
    */
    'name';
    /**
    * The namespace of the source reference, defaults to the DataVolume namespace
    */
    'namespace';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
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
            "name": "namespace",
            "baseName": "namespace",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1beta1DataVolumeSourceRef.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1beta1DataVolumeSourceRef = V1beta1DataVolumeSourceRef;
//# sourceMappingURL=V1beta1DataVolumeSourceRef.js.map