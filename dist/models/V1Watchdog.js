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
* Named watchdog device.
*/
export class V1Watchdog {
    'i6300esb';
    /**
    * Name of the watchdog.
    */
    'name';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "i6300esb",
            "baseName": "i6300esb",
            "type": "V1I6300ESBWatchdog",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1Watchdog.attributeTypeMap;
    }
    constructor() {
    }
}
//# sourceMappingURL=V1Watchdog.js.map