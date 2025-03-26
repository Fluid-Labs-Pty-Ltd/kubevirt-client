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
* MediatedHostDevice represents a host mediated device allowed for passthrough
*/
export class V1MediatedHostDevice {
    'externalResourceProvider';
    'mdevNameSelector';
    'resourceName';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "externalResourceProvider",
            "baseName": "externalResourceProvider",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "mdevNameSelector",
            "baseName": "mdevNameSelector",
            "type": "string",
            "format": ""
        },
        {
            "name": "resourceName",
            "baseName": "resourceName",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1MediatedHostDevice.attributeTypeMap;
    }
    constructor() {
    }
}
//# sourceMappingURL=V1MediatedHostDevice.js.map