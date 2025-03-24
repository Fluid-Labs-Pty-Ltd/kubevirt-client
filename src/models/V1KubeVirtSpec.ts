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

import { mapValues } from '../runtime';
import type { V1ComponentConfig } from './V1ComponentConfig';
import {
    V1ComponentConfigFromJSON,
    V1ComponentConfigFromJSONTyped,
    V1ComponentConfigToJSON,
    V1ComponentConfigToJSONTyped,
} from './V1ComponentConfig';
import type { V1KubeVirtConfiguration } from './V1KubeVirtConfiguration';
import {
    V1KubeVirtConfigurationFromJSON,
    V1KubeVirtConfigurationFromJSONTyped,
    V1KubeVirtConfigurationToJSON,
    V1KubeVirtConfigurationToJSONTyped,
} from './V1KubeVirtConfiguration';
import type { V1KubeVirtWorkloadUpdateStrategy } from './V1KubeVirtWorkloadUpdateStrategy';
import {
    V1KubeVirtWorkloadUpdateStrategyFromJSON,
    V1KubeVirtWorkloadUpdateStrategyFromJSONTyped,
    V1KubeVirtWorkloadUpdateStrategyToJSON,
    V1KubeVirtWorkloadUpdateStrategyToJSONTyped,
} from './V1KubeVirtWorkloadUpdateStrategy';
import type { K8sIoApiCoreV1LocalObjectReference } from './K8sIoApiCoreV1LocalObjectReference';
import {
    K8sIoApiCoreV1LocalObjectReferenceFromJSON,
    K8sIoApiCoreV1LocalObjectReferenceFromJSONTyped,
    K8sIoApiCoreV1LocalObjectReferenceToJSON,
    K8sIoApiCoreV1LocalObjectReferenceToJSONTyped,
} from './K8sIoApiCoreV1LocalObjectReference';
import type { V1CustomizeComponents } from './V1CustomizeComponents';
import {
    V1CustomizeComponentsFromJSON,
    V1CustomizeComponentsFromJSONTyped,
    V1CustomizeComponentsToJSON,
    V1CustomizeComponentsToJSONTyped,
} from './V1CustomizeComponents';
import type { V1KubeVirtCertificateRotateStrategy } from './V1KubeVirtCertificateRotateStrategy';
import {
    V1KubeVirtCertificateRotateStrategyFromJSON,
    V1KubeVirtCertificateRotateStrategyFromJSONTyped,
    V1KubeVirtCertificateRotateStrategyToJSON,
    V1KubeVirtCertificateRotateStrategyToJSONTyped,
} from './V1KubeVirtCertificateRotateStrategy';

/**
 * 
 * @export
 * @interface V1KubeVirtSpec
 */
export interface V1KubeVirtSpec {
    /**
     * 
     * @type {V1KubeVirtCertificateRotateStrategy}
     * @memberof V1KubeVirtSpec
     */
    certificateRotateStrategy?: V1KubeVirtCertificateRotateStrategy;
    /**
     * 
     * @type {V1KubeVirtConfiguration}
     * @memberof V1KubeVirtSpec
     */
    _configuration?: V1KubeVirtConfiguration;
    /**
     * 
     * @type {V1CustomizeComponents}
     * @memberof V1KubeVirtSpec
     */
    customizeComponents?: V1CustomizeComponents;
    /**
     * The ImagePullPolicy to use.
     * 
     * Possible enum values:
     *  - `"Always"` means that kubelet always attempts to pull the latest image. Container will fail If the pull fails.
     *  - `"IfNotPresent"` means that kubelet pulls if the image isn't present on disk. Container will fail if the image isn't present and the pull fails.
     *  - `"Never"` means that kubelet never pulls an image, but only uses a local image. Container will fail if the image isn't present
     * @type {string}
     * @memberof V1KubeVirtSpec
     */
    imagePullPolicy?: V1KubeVirtSpecImagePullPolicyEnum;
    /**
     * The imagePullSecrets to pull the container images from Defaults to none
     * @type {Array<K8sIoApiCoreV1LocalObjectReference>}
     * @memberof V1KubeVirtSpec
     */
    imagePullSecrets?: Array<K8sIoApiCoreV1LocalObjectReference>;
    /**
     * The image registry to pull the container images from Defaults to the same registry the operator's container image is pulled from.
     * @type {string}
     * @memberof V1KubeVirtSpec
     */
    imageRegistry?: string;
    /**
     * The image tag to use for the continer images installed. Defaults to the same tag as the operator's container image.
     * @type {string}
     * @memberof V1KubeVirtSpec
     */
    imageTag?: string;
    /**
     * 
     * @type {V1ComponentConfig}
     * @memberof V1KubeVirtSpec
     */
    infra?: V1ComponentConfig;
    /**
     * The name of the Prometheus service account that needs read-access to KubeVirt endpoints Defaults to prometheus-k8s
     * @type {string}
     * @memberof V1KubeVirtSpec
     */
    monitorAccount?: string;
    /**
     * The namespace Prometheus is deployed in Defaults to openshift-monitor
     * @type {string}
     * @memberof V1KubeVirtSpec
     */
    monitorNamespace?: string;
    /**
     * Designate the apps.kubevirt.io/component label for KubeVirt components. Useful if KubeVirt is included as part of a product. If ProductComponent is not specified, the component label default value is kubevirt.
     * @type {string}
     * @memberof V1KubeVirtSpec
     */
    productComponent?: string;
    /**
     * Designate the apps.kubevirt.io/part-of label for KubeVirt components. Useful if KubeVirt is included as part of a product. If ProductName is not specified, the part-of label will be omitted.
     * @type {string}
     * @memberof V1KubeVirtSpec
     */
    productName?: string;
    /**
     * Designate the apps.kubevirt.io/version label for KubeVirt components. Useful if KubeVirt is included as part of a product. If ProductVersion is not specified, KubeVirt's version will be used.
     * @type {string}
     * @memberof V1KubeVirtSpec
     */
    productVersion?: string;
    /**
     * The namespace the service monitor will be deployed
     *  When ServiceMonitorNamespace is set, then we'll install the service monitor object in that namespace
     * otherwise we will use the monitoring namespace.
     * @type {string}
     * @memberof V1KubeVirtSpec
     */
    serviceMonitorNamespace?: string;
    /**
     * Specifies if kubevirt can be deleted if workloads are still present. This is mainly a precaution to avoid accidental data loss
     * @type {string}
     * @memberof V1KubeVirtSpec
     */
    uninstallStrategy?: string;
    /**
     * 
     * @type {V1KubeVirtWorkloadUpdateStrategy}
     * @memberof V1KubeVirtSpec
     */
    workloadUpdateStrategy?: V1KubeVirtWorkloadUpdateStrategy;
    /**
     * 
     * @type {V1ComponentConfig}
     * @memberof V1KubeVirtSpec
     */
    workloads?: V1ComponentConfig;
}


/**
 * @export
 */
export const V1KubeVirtSpecImagePullPolicyEnum = {
    Always: 'Always',
    IfNotPresent: 'IfNotPresent',
    Never: 'Never'
} as const;
export type V1KubeVirtSpecImagePullPolicyEnum = typeof V1KubeVirtSpecImagePullPolicyEnum[keyof typeof V1KubeVirtSpecImagePullPolicyEnum];


/**
 * Check if a given object implements the V1KubeVirtSpec interface.
 */
export function instanceOfV1KubeVirtSpec(value: object): value is V1KubeVirtSpec {
    return true;
}

export function V1KubeVirtSpecFromJSON(json: any): V1KubeVirtSpec {
    return V1KubeVirtSpecFromJSONTyped(json, false);
}

export function V1KubeVirtSpecFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1KubeVirtSpec {
    if (json == null) {
        return json;
    }
    return {
        
        'certificateRotateStrategy': json['certificateRotateStrategy'] == null ? undefined : V1KubeVirtCertificateRotateStrategyFromJSON(json['certificateRotateStrategy']),
        '_configuration': json['configuration'] == null ? undefined : V1KubeVirtConfigurationFromJSON(json['configuration']),
        'customizeComponents': json['customizeComponents'] == null ? undefined : V1CustomizeComponentsFromJSON(json['customizeComponents']),
        'imagePullPolicy': json['imagePullPolicy'] == null ? undefined : json['imagePullPolicy'],
        'imagePullSecrets': json['imagePullSecrets'] == null ? undefined : ((json['imagePullSecrets'] as Array<any>).map(K8sIoApiCoreV1LocalObjectReferenceFromJSON)),
        'imageRegistry': json['imageRegistry'] == null ? undefined : json['imageRegistry'],
        'imageTag': json['imageTag'] == null ? undefined : json['imageTag'],
        'infra': json['infra'] == null ? undefined : V1ComponentConfigFromJSON(json['infra']),
        'monitorAccount': json['monitorAccount'] == null ? undefined : json['monitorAccount'],
        'monitorNamespace': json['monitorNamespace'] == null ? undefined : json['monitorNamespace'],
        'productComponent': json['productComponent'] == null ? undefined : json['productComponent'],
        'productName': json['productName'] == null ? undefined : json['productName'],
        'productVersion': json['productVersion'] == null ? undefined : json['productVersion'],
        'serviceMonitorNamespace': json['serviceMonitorNamespace'] == null ? undefined : json['serviceMonitorNamespace'],
        'uninstallStrategy': json['uninstallStrategy'] == null ? undefined : json['uninstallStrategy'],
        'workloadUpdateStrategy': json['workloadUpdateStrategy'] == null ? undefined : V1KubeVirtWorkloadUpdateStrategyFromJSON(json['workloadUpdateStrategy']),
        'workloads': json['workloads'] == null ? undefined : V1ComponentConfigFromJSON(json['workloads']),
    };
}

export function V1KubeVirtSpecToJSON(json: any): V1KubeVirtSpec {
    return V1KubeVirtSpecToJSONTyped(json, false);
}

export function V1KubeVirtSpecToJSONTyped(value?: V1KubeVirtSpec | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'certificateRotateStrategy': V1KubeVirtCertificateRotateStrategyToJSON(value['certificateRotateStrategy']),
        'configuration': V1KubeVirtConfigurationToJSON(value['_configuration']),
        'customizeComponents': V1CustomizeComponentsToJSON(value['customizeComponents']),
        'imagePullPolicy': value['imagePullPolicy'],
        'imagePullSecrets': value['imagePullSecrets'] == null ? undefined : ((value['imagePullSecrets'] as Array<any>).map(K8sIoApiCoreV1LocalObjectReferenceToJSON)),
        'imageRegistry': value['imageRegistry'],
        'imageTag': value['imageTag'],
        'infra': V1ComponentConfigToJSON(value['infra']),
        'monitorAccount': value['monitorAccount'],
        'monitorNamespace': value['monitorNamespace'],
        'productComponent': value['productComponent'],
        'productName': value['productName'],
        'productVersion': value['productVersion'],
        'serviceMonitorNamespace': value['serviceMonitorNamespace'],
        'uninstallStrategy': value['uninstallStrategy'],
        'workloadUpdateStrategy': V1KubeVirtWorkloadUpdateStrategyToJSON(value['workloadUpdateStrategy']),
        'workloads': V1ComponentConfigToJSON(value['workloads']),
    };
}

