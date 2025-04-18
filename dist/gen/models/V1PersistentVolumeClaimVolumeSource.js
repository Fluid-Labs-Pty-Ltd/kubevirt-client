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
exports.V1PersistentVolumeClaimVolumeSource = void 0;
/**
* PersistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. Directly attached to the vmi via qemu. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
*/
class V1PersistentVolumeClaimVolumeSource {
    /**
    * claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
    */
    'claimName';
    /**
    * Hotpluggable indicates whether the volume can be hotplugged and hotunplugged.
    */
    'hotpluggable';
    /**
    * readOnly Will force the ReadOnly setting in VolumeMounts. Default false.
    */
    'readOnly';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "claimName",
            "baseName": "claimName",
            "type": "string",
            "format": ""
        },
        {
            "name": "hotpluggable",
            "baseName": "hotpluggable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1PersistentVolumeClaimVolumeSource.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1PersistentVolumeClaimVolumeSource = V1PersistentVolumeClaimVolumeSource;
//# sourceMappingURL=V1PersistentVolumeClaimVolumeSource.js.map