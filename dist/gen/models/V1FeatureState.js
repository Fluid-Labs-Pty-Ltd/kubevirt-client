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
exports.V1FeatureState = void 0;
/**
* Represents if a feature is enabled or disabled.
*/
class V1FeatureState {
    /**
    * Enabled determines if the feature should be enabled or disabled on the guest. Defaults to true.
    */
    'enabled';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1FeatureState.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1FeatureState = V1FeatureState;
//# sourceMappingURL=V1FeatureState.js.map