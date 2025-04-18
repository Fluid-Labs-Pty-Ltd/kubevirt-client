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
import { K8sIoApimachineryPkgApisMetaV1GroupVersionForDiscovery } from '../models/K8sIoApimachineryPkgApisMetaV1GroupVersionForDiscovery.js';
import { K8sIoApimachineryPkgApisMetaV1ServerAddressByClientCIDR } from '../models/K8sIoApimachineryPkgApisMetaV1ServerAddressByClientCIDR.js';
/**
* APIGroup contains the name, the supported versions, and the preferred version of a group.
*/
export declare class K8sIoApimachineryPkgApisMetaV1APIGroup {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    /**
    * name is the name of the group.
    */
    'name': string;
    'preferredVersion'?: K8sIoApimachineryPkgApisMetaV1GroupVersionForDiscovery;
    /**
    * a map of client CIDR to server address that is serving this group. This is to help clients reach servers in the most network-efficient way possible. Clients can use the appropriate server address as per the CIDR that they match. In case of multiple matches, clients should use the longest matching CIDR. The server returns only those CIDRs that it thinks that the client can match. For example: the master will return an internal IP CIDR only, if the client reaches the server using an internal IP. Server looks at X-Forwarded-For header or X-Real-Ip header or request.RemoteAddr (in that order) to get the client IP.
    */
    'serverAddressByClientCIDRs'?: Array<K8sIoApimachineryPkgApisMetaV1ServerAddressByClientCIDR>;
    /**
    * versions are the versions supported in this group.
    */
    'versions': Array<K8sIoApimachineryPkgApisMetaV1GroupVersionForDiscovery>;
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
//# sourceMappingURL=K8sIoApimachineryPkgApisMetaV1APIGroup.d.ts.map