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

import { K8sIoApiCoreV1LocalObjectReference } from '../models/K8sIoApiCoreV1LocalObjectReference.js';
import { V1ComponentConfig } from '../models/V1ComponentConfig.js';
import { V1CustomizeComponents } from '../models/V1CustomizeComponents.js';
import { V1KubeVirtCertificateRotateStrategy } from '../models/V1KubeVirtCertificateRotateStrategy.js';
import { V1KubeVirtConfiguration } from '../models/V1KubeVirtConfiguration.js';
import { V1KubeVirtWorkloadUpdateStrategy } from '../models/V1KubeVirtWorkloadUpdateStrategy.js';
import { HttpFile } from '../http/http.js';

export class V1KubeVirtSpec {
    'certificateRotateStrategy'?: V1KubeVirtCertificateRotateStrategy;
    'configuration'?: V1KubeVirtConfiguration;
    'customizeComponents'?: V1CustomizeComponents;
    /**
    * The ImagePullPolicy to use.  Possible enum values:  - `\"Always\"` means that kubelet always attempts to pull the latest image. Container will fail If the pull fails.  - `\"IfNotPresent\"` means that kubelet pulls if the image isn\'t present on disk. Container will fail if the image isn\'t present and the pull fails.  - `\"Never\"` means that kubelet never pulls an image, but only uses a local image. Container will fail if the image isn\'t present
    */
    'imagePullPolicy'?: V1KubeVirtSpecImagePullPolicyEnum;
    /**
    * The imagePullSecrets to pull the container images from Defaults to none
    */
    'imagePullSecrets'?: Array<K8sIoApiCoreV1LocalObjectReference>;
    /**
    * The image registry to pull the container images from Defaults to the same registry the operator\'s container image is pulled from.
    */
    'imageRegistry'?: string;
    /**
    * The image tag to use for the continer images installed. Defaults to the same tag as the operator\'s container image.
    */
    'imageTag'?: string;
    'infra'?: V1ComponentConfig;
    /**
    * The name of the Prometheus service account that needs read-access to KubeVirt endpoints Defaults to prometheus-k8s
    */
    'monitorAccount'?: string;
    /**
    * The namespace Prometheus is deployed in Defaults to openshift-monitor
    */
    'monitorNamespace'?: string;
    /**
    * Designate the apps.kubevirt.io/component label for KubeVirt components. Useful if KubeVirt is included as part of a product. If ProductComponent is not specified, the component label default value is kubevirt.
    */
    'productComponent'?: string;
    /**
    * Designate the apps.kubevirt.io/part-of label for KubeVirt components. Useful if KubeVirt is included as part of a product. If ProductName is not specified, the part-of label will be omitted.
    */
    'productName'?: string;
    /**
    * Designate the apps.kubevirt.io/version label for KubeVirt components. Useful if KubeVirt is included as part of a product. If ProductVersion is not specified, KubeVirt\'s version will be used.
    */
    'productVersion'?: string;
    /**
    * The namespace the service monitor will be deployed  When ServiceMonitorNamespace is set, then we\'ll install the service monitor object in that namespace otherwise we will use the monitoring namespace.
    */
    'serviceMonitorNamespace'?: string;
    /**
    * Specifies if kubevirt can be deleted if workloads are still present. This is mainly a precaution to avoid accidental data loss
    */
    'uninstallStrategy'?: string;
    'workloadUpdateStrategy'?: V1KubeVirtWorkloadUpdateStrategy;
    'workloads'?: V1ComponentConfig;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "certificateRotateStrategy",
            "baseName": "certificateRotateStrategy",
            "type": "V1KubeVirtCertificateRotateStrategy",
            "format": ""
        },
        {
            "name": "configuration",
            "baseName": "configuration",
            "type": "V1KubeVirtConfiguration",
            "format": ""
        },
        {
            "name": "customizeComponents",
            "baseName": "customizeComponents",
            "type": "V1CustomizeComponents",
            "format": ""
        },
        {
            "name": "imagePullPolicy",
            "baseName": "imagePullPolicy",
            "type": "V1KubeVirtSpecImagePullPolicyEnum",
            "format": ""
        },
        {
            "name": "imagePullSecrets",
            "baseName": "imagePullSecrets",
            "type": "Array<K8sIoApiCoreV1LocalObjectReference>",
            "format": ""
        },
        {
            "name": "imageRegistry",
            "baseName": "imageRegistry",
            "type": "string",
            "format": ""
        },
        {
            "name": "imageTag",
            "baseName": "imageTag",
            "type": "string",
            "format": ""
        },
        {
            "name": "infra",
            "baseName": "infra",
            "type": "V1ComponentConfig",
            "format": ""
        },
        {
            "name": "monitorAccount",
            "baseName": "monitorAccount",
            "type": "string",
            "format": ""
        },
        {
            "name": "monitorNamespace",
            "baseName": "monitorNamespace",
            "type": "string",
            "format": ""
        },
        {
            "name": "productComponent",
            "baseName": "productComponent",
            "type": "string",
            "format": ""
        },
        {
            "name": "productName",
            "baseName": "productName",
            "type": "string",
            "format": ""
        },
        {
            "name": "productVersion",
            "baseName": "productVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "serviceMonitorNamespace",
            "baseName": "serviceMonitorNamespace",
            "type": "string",
            "format": ""
        },
        {
            "name": "uninstallStrategy",
            "baseName": "uninstallStrategy",
            "type": "string",
            "format": ""
        },
        {
            "name": "workloadUpdateStrategy",
            "baseName": "workloadUpdateStrategy",
            "type": "V1KubeVirtWorkloadUpdateStrategy",
            "format": ""
        },
        {
            "name": "workloads",
            "baseName": "workloads",
            "type": "V1ComponentConfig",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1KubeVirtSpec.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum V1KubeVirtSpecImagePullPolicyEnum {
    Always = 'Always',
    IfNotPresent = 'IfNotPresent',
    Never = 'Never'
}

