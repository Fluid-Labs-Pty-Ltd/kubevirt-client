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
import { K8sIoApimachineryPkgApisMetaV1ListMeta } from '../models/K8sIoApimachineryPkgApisMetaV1ListMeta.js';
import { K8sIoApimachineryPkgApisMetaV1StatusDetails } from '../models/K8sIoApimachineryPkgApisMetaV1StatusDetails.js';
/**
* Status is a return value for calls that don\'t return other objects.
*/
export declare class K8sIoApimachineryPkgApisMetaV1Status {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Suggested HTTP return code for this status, 0 if not set.
    */
    'code'?: number;
    'details'?: K8sIoApimachineryPkgApisMetaV1StatusDetails;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    /**
    * A human-readable description of the status of this operation.
    */
    'message'?: string;
    'metadata'?: K8sIoApimachineryPkgApisMetaV1ListMeta;
    /**
    * A machine-readable description of why this operation is in the \"Failure\" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it.
    */
    'reason'?: string;
    /**
    * Status of the operation. One of: \"Success\" or \"Failure\". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
    */
    'status'?: string;
    static readonly discriminator: string | undefined;
    static readonly mapping: {
        [index: string]: string;
    } | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
//# sourceMappingURL=K8sIoApimachineryPkgApisMetaV1Status.d.ts.map