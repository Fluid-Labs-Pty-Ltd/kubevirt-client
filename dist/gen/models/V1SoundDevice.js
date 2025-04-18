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
exports.V1SoundDevice = void 0;
/**
* Represents the user\'s configuration to emulate sound cards in the VMI.
*/
class V1SoundDevice {
    /**
    * We only support ich9 or ac97. If SoundDevice is not set: No sound card is emulated. If SoundDevice is set but Model is not: ich9
    */
    'model';
    /**
    * User\'s defined name for this sound device
    */
    'name';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "model",
            "baseName": "model",
            "type": "string",
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
        return V1SoundDevice.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1SoundDevice = V1SoundDevice;
//# sourceMappingURL=V1SoundDevice.js.map