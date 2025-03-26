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
export class V1RTCTimer {
    /**
    * Enabled set to false makes sure that the machine type or a preset can\'t add the timer. Defaults to true.
    */
    'present';
    /**
    * TickPolicy determines what happens when QEMU misses a deadline for injecting a tick to the guest. One of \"delay\", \"catchup\".
    */
    'tickPolicy';
    /**
    * Track the guest or the wall clock.
    */
    'track';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "present",
            "baseName": "present",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "tickPolicy",
            "baseName": "tickPolicy",
            "type": "string",
            "format": ""
        },
        {
            "name": "track",
            "baseName": "track",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1RTCTimer.attributeTypeMap;
    }
    constructor() {
    }
}
//# sourceMappingURL=V1RTCTimer.js.map