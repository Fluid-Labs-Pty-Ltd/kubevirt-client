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
exports.V1alpha1VirtualMachineCloneStatus = void 0;
class V1alpha1VirtualMachineCloneStatus {
    'conditions';
    /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
    'creationTime';
    'phase';
    'restoreName';
    'snapshotName';
    'targetName';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1alpha1Condition>",
            "format": ""
        },
        {
            "name": "creationTime",
            "baseName": "creationTime",
            "type": "string",
            "format": "date-time"
        },
        {
            "name": "phase",
            "baseName": "phase",
            "type": "string",
            "format": ""
        },
        {
            "name": "restoreName",
            "baseName": "restoreName",
            "type": "string",
            "format": ""
        },
        {
            "name": "snapshotName",
            "baseName": "snapshotName",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetName",
            "baseName": "targetName",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return V1alpha1VirtualMachineCloneStatus.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1alpha1VirtualMachineCloneStatus = V1alpha1VirtualMachineCloneStatus;
//# sourceMappingURL=V1alpha1VirtualMachineCloneStatus.js.map