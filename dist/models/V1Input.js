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
export class V1Input {
    /**
    * Bus indicates the bus of input device to emulate. Supported values: virtio, usb.
    */
    'bus';
    /**
    * Name is the device name
    */
    'name';
    /**
    * Type indicated the type of input device. Supported values: tablet.
    */
    'type';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "bus",
            "baseName": "bus",
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
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1Input.attributeTypeMap;
    }
    constructor() {
    }
}
//# sourceMappingURL=V1Input.js.map