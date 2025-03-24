/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
import type { K8sIoApiCoreV1ResourceClaim } from './K8sIoApiCoreV1ResourceClaim.js';
import {
    K8sIoApiCoreV1ResourceClaimFromJSON,
    K8sIoApiCoreV1ResourceClaimFromJSONTyped,
    K8sIoApiCoreV1ResourceClaimToJSON,
    K8sIoApiCoreV1ResourceClaimToJSONTyped,
} from './K8sIoApiCoreV1ResourceClaim.js';

/**
 * ResourceRequirements describes the compute resource requirements.
 * @export
 * @interface K8sIoApiCoreV1ResourceRequirements
 */
export interface K8sIoApiCoreV1ResourceRequirements {
    /**
     * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container.
     * 
     * This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.
     * 
     * This field is immutable. It can only be set for containers.
     * @type {Array<K8sIoApiCoreV1ResourceClaim>}
     * @memberof K8sIoApiCoreV1ResourceRequirements
     */
    claims?: Array<K8sIoApiCoreV1ResourceClaim>;
    /**
     * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
     * @type {{ [key: string]: string; }}
     * @memberof K8sIoApiCoreV1ResourceRequirements
     */
    limits?: { [key: string]: string; };
    /**
     * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
     * @type {{ [key: string]: string; }}
     * @memberof K8sIoApiCoreV1ResourceRequirements
     */
    requests?: { [key: string]: string; };
}

/**
 * Check if a given object implements the K8sIoApiCoreV1ResourceRequirements interface.
 */
export function instanceOfK8sIoApiCoreV1ResourceRequirements(value: object): value is K8sIoApiCoreV1ResourceRequirements {
    return true;
}

export function K8sIoApiCoreV1ResourceRequirementsFromJSON(json: any): K8sIoApiCoreV1ResourceRequirements {
    return K8sIoApiCoreV1ResourceRequirementsFromJSONTyped(json, false);
}

export function K8sIoApiCoreV1ResourceRequirementsFromJSONTyped(json: any, _ignoreDiscriminator: boolean): K8sIoApiCoreV1ResourceRequirements {
    if (json == null) {
        return json;
    }
    return {
        
        'claims': json['claims'] == null ? undefined : ((json['claims'] as Array<any>).map(K8sIoApiCoreV1ResourceClaimFromJSON)),
        'limits': json['limits'] == null ? undefined : json['limits'],
        'requests': json['requests'] == null ? undefined : json['requests'],
    };
}

export function K8sIoApiCoreV1ResourceRequirementsToJSON(json: any): K8sIoApiCoreV1ResourceRequirements {
    return K8sIoApiCoreV1ResourceRequirementsToJSONTyped(json, false);
}

export function K8sIoApiCoreV1ResourceRequirementsToJSONTyped(value?: K8sIoApiCoreV1ResourceRequirements | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'claims': value['claims'] == null ? undefined : ((value['claims'] as Array<any>).map(K8sIoApiCoreV1ResourceClaimToJSON)),
        'limits': value['limits'],
        'requests': value['requests'],
    };
}

