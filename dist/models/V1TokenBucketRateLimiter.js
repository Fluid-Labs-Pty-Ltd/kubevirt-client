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
export class V1TokenBucketRateLimiter {
    /**
    * Maximum burst for throttle. If it\'s zero, the component default will be used
    */
    'burst';
    /**
    * QPS indicates the maximum QPS to the apiserver from this client. If it\'s zero, the component default will be used
    */
    'qps';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "burst",
            "baseName": "burst",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "qps",
            "baseName": "qps",
            "type": "number",
            "format": "float"
        }
    ];
    static getAttributeTypeMap() {
        return V1TokenBucketRateLimiter.attributeTypeMap;
    }
    constructor() {
    }
}
//# sourceMappingURL=V1TokenBucketRateLimiter.js.map