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
exports.V1FreezeUnfreezeTimeout = void 0;
/**
* FreezeUnfreezeTimeout represent the time unfreeze will be triggered if guest was not unfrozen by unfreeze command
*/
class V1FreezeUnfreezeTimeout {
    /**
    * Duration is a wrapper around time.Duration which supports correct marshaling to YAML and JSON. In particular, it marshals into strings, which can be used as map keys in json.
    */
    'unfreezeTimeout';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "unfreezeTimeout",
            "baseName": "unfreezeTimeout",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1FreezeUnfreezeTimeout.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1FreezeUnfreezeTimeout = V1FreezeUnfreezeTimeout;
//# sourceMappingURL=V1FreezeUnfreezeTimeout.js.map