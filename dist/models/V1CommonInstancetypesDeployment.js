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
/**
 * Check if a given object implements the V1CommonInstancetypesDeployment interface.
 */
export function instanceOfV1CommonInstancetypesDeployment(value) {
    return true;
}
export function V1CommonInstancetypesDeploymentFromJSON(json) {
    return V1CommonInstancetypesDeploymentFromJSONTyped(json, false);
}
export function V1CommonInstancetypesDeploymentFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'enabled': json['enabled'] == null ? undefined : json['enabled'],
    };
}
export function V1CommonInstancetypesDeploymentToJSON(json) {
    return V1CommonInstancetypesDeploymentToJSONTyped(json, false);
}
export function V1CommonInstancetypesDeploymentToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'enabled': value['enabled'],
    };
}
//# sourceMappingURL=V1CommonInstancetypesDeployment.js.map