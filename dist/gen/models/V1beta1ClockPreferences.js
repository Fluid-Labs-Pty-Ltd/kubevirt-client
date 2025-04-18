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
exports.V1beta1ClockPreferences = void 0;
/**
* ClockPreferences contains various optional defaults for Clock.
*/
class V1beta1ClockPreferences {
    'preferredClockOffset';
    'preferredTimer';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "preferredClockOffset",
            "baseName": "preferredClockOffset",
            "type": "V1ClockOffset",
            "format": ""
        },
        {
            "name": "preferredTimer",
            "baseName": "preferredTimer",
            "type": "V1Timer",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1beta1ClockPreferences.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1beta1ClockPreferences = V1beta1ClockPreferences;
//# sourceMappingURL=V1beta1ClockPreferences.js.map