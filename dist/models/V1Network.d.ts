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
import type { V1PodNetwork } from './V1PodNetwork.js';
import type { V1MultusNetwork } from './V1MultusNetwork.js';
/**
 * Network represents a network type and a resource that should be connected to the vm.
 * @export
 * @interface V1Network
 */
export interface V1Network {
    /**
     *
     * @type {V1MultusNetwork}
     * @memberof V1Network
     */
    multus?: V1MultusNetwork;
    /**
     * Network name. Must be a DNS_LABEL and unique within the vm. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * @type {string}
     * @memberof V1Network
     */
    name: string;
    /**
     *
     * @type {V1PodNetwork}
     * @memberof V1Network
     */
    pod?: V1PodNetwork;
}
/**
 * Check if a given object implements the V1Network interface.
 */
export declare function instanceOfV1Network(value: object): value is V1Network;
export declare function V1NetworkFromJSON(json: any): V1Network;
export declare function V1NetworkFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1Network;
export declare function V1NetworkToJSON(json: any): V1Network;
export declare function V1NetworkToJSONTyped(value?: V1Network | null, _ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1Network.d.ts.map