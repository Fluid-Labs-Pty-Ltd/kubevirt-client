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
* Represents a docker image with an embedded disk.
*/
export declare class V1ContainerDiskSource {
    /**
    * Image is the name of the image with the embedded disk.
    */
    'image': string;
    /**
    * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images  Possible enum values:  - `\"Always\"` means that kubelet always attempts to pull the latest image. Container will fail If the pull fails.  - `\"IfNotPresent\"` means that kubelet pulls if the image isn\'t present on disk. Container will fail if the image isn\'t present and the pull fails.  - `\"Never\"` means that kubelet never pulls an image, but only uses a local image. Container will fail if the image isn\'t present
    */
    'imagePullPolicy'?: V1ContainerDiskSourceImagePullPolicyEnum;
    /**
    * ImagePullSecret is the name of the Docker registry secret required to pull the image. The secret must already exist.
    */
    'imagePullSecret'?: string;
    /**
    * Path defines the path to disk file in the container
    */
    'path'?: string;
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
export declare enum V1ContainerDiskSourceImagePullPolicyEnum {
    Always = "Always",
    IfNotPresent = "IfNotPresent",
    Never = "Never"
}
//# sourceMappingURL=V1ContainerDiskSource.d.ts.map