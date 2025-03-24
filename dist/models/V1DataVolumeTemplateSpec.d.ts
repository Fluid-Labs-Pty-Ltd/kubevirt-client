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
import type { V1beta1DataVolumeSpec } from './V1beta1DataVolumeSpec.js';
import type { K8sIoApimachineryPkgApisMetaV1ObjectMeta } from './K8sIoApimachineryPkgApisMetaV1ObjectMeta.js';
/**
 *
 * @export
 * @interface V1DataVolumeTemplateSpec
 */
export interface V1DataVolumeTemplateSpec {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1DataVolumeTemplateSpec
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1DataVolumeTemplateSpec
     */
    kind?: string;
    /**
     *
     * @type {K8sIoApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof V1DataVolumeTemplateSpec
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
    /**
     *
     * @type {V1beta1DataVolumeSpec}
     * @memberof V1DataVolumeTemplateSpec
     */
    spec: V1beta1DataVolumeSpec;
    /**
     *
     * @type {object}
     * @memberof V1DataVolumeTemplateSpec
     */
    status?: object;
}
/**
 * Check if a given object implements the V1DataVolumeTemplateSpec interface.
 */
export declare function instanceOfV1DataVolumeTemplateSpec(value: object): value is V1DataVolumeTemplateSpec;
export declare function V1DataVolumeTemplateSpecFromJSON(json: any): V1DataVolumeTemplateSpec;
export declare function V1DataVolumeTemplateSpecFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1DataVolumeTemplateSpec;
export declare function V1DataVolumeTemplateSpecToJSON(json: any): V1DataVolumeTemplateSpec;
export declare function V1DataVolumeTemplateSpecToJSONTyped(value?: V1DataVolumeTemplateSpec | null, _ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1DataVolumeTemplateSpec.d.ts.map