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
import { V1KubeVirtSelfSignConfigurationFromJSON, V1KubeVirtSelfSignConfigurationToJSON, } from './V1KubeVirtSelfSignConfiguration.js';
/**
 * Check if a given object implements the V1KubeVirtCertificateRotateStrategy interface.
 */
export function instanceOfV1KubeVirtCertificateRotateStrategy(value) {
    return true;
}
export function V1KubeVirtCertificateRotateStrategyFromJSON(json) {
    return V1KubeVirtCertificateRotateStrategyFromJSONTyped(json, false);
}
export function V1KubeVirtCertificateRotateStrategyFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'selfSigned': json['selfSigned'] == null ? undefined : V1KubeVirtSelfSignConfigurationFromJSON(json['selfSigned']),
    };
}
export function V1KubeVirtCertificateRotateStrategyToJSON(json) {
    return V1KubeVirtCertificateRotateStrategyToJSONTyped(json, false);
}
export function V1KubeVirtCertificateRotateStrategyToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'selfSigned': V1KubeVirtSelfSignConfigurationToJSON(value['selfSigned']),
    };
}
//# sourceMappingURL=V1KubeVirtCertificateRotateStrategy.js.map