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
/**
* ResourceClaim references one entry in PodSpec.ResourceClaims.
*/
export class K8sIoApiCoreV1ResourceClaim {
    /**
    * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
    */
    'name';
    /**
    * Request is the name chosen for a request in the referenced claim. If empty, everything from the claim is made available, otherwise only the result of this request.
    */
    'request';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "request",
            "baseName": "request",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return K8sIoApiCoreV1ResourceClaim.attributeTypeMap;
    }
    constructor() {
    }
}
//# sourceMappingURL=K8sIoApiCoreV1ResourceClaim.js.map