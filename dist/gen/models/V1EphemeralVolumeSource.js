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
exports.V1EphemeralVolumeSource = void 0;
class V1EphemeralVolumeSource {
    'persistentVolumeClaim';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "persistentVolumeClaim",
            "baseName": "persistentVolumeClaim",
            "type": "K8sIoApiCoreV1PersistentVolumeClaimVolumeSource",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1EphemeralVolumeSource.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1EphemeralVolumeSource = V1EphemeralVolumeSource;
//# sourceMappingURL=V1EphemeralVolumeSource.js.map