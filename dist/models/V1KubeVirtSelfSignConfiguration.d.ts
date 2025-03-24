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
import type { V1CertConfig } from './V1CertConfig.js';
/**
 *
 * @export
 * @interface V1KubeVirtSelfSignConfiguration
 */
export interface V1KubeVirtSelfSignConfiguration {
    /**
     *
     * @type {V1CertConfig}
     * @memberof V1KubeVirtSelfSignConfiguration
     */
    ca?: V1CertConfig;
    /**
     * Duration is a wrapper around time.Duration which supports correct marshaling to YAML and JSON. In particular, it marshals into strings, which can be used as map keys in json.
     * @type {string}
     * @memberof V1KubeVirtSelfSignConfiguration
     */
    caOverlapInterval?: string;
    /**
     * Duration is a wrapper around time.Duration which supports correct marshaling to YAML and JSON. In particular, it marshals into strings, which can be used as map keys in json.
     * @type {string}
     * @memberof V1KubeVirtSelfSignConfiguration
     */
    caRotateInterval?: string;
    /**
     * Duration is a wrapper around time.Duration which supports correct marshaling to YAML and JSON. In particular, it marshals into strings, which can be used as map keys in json.
     * @type {string}
     * @memberof V1KubeVirtSelfSignConfiguration
     */
    certRotateInterval?: string;
    /**
     *
     * @type {V1CertConfig}
     * @memberof V1KubeVirtSelfSignConfiguration
     */
    server?: V1CertConfig;
}
/**
 * Check if a given object implements the V1KubeVirtSelfSignConfiguration interface.
 */
export declare function instanceOfV1KubeVirtSelfSignConfiguration(value: object): value is V1KubeVirtSelfSignConfiguration;
export declare function V1KubeVirtSelfSignConfigurationFromJSON(json: any): V1KubeVirtSelfSignConfiguration;
export declare function V1KubeVirtSelfSignConfigurationFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1KubeVirtSelfSignConfiguration;
export declare function V1KubeVirtSelfSignConfigurationToJSON(json: any): V1KubeVirtSelfSignConfiguration;
export declare function V1KubeVirtSelfSignConfigurationToJSONTyped(value?: V1KubeVirtSelfSignConfiguration | null, _ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1KubeVirtSelfSignConfiguration.d.ts.map