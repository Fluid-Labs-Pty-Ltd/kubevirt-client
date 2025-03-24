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
import type { V1CustomizeComponentsPatch } from './V1CustomizeComponentsPatch.js';
import type { V1Flags } from './V1Flags.js';
/**
 *
 * @export
 * @interface V1CustomizeComponents
 */
export interface V1CustomizeComponents {
    /**
     *
     * @type {V1Flags}
     * @memberof V1CustomizeComponents
     */
    flags?: V1Flags;
    /**
     *
     * @type {Array<V1CustomizeComponentsPatch>}
     * @memberof V1CustomizeComponents
     */
    patches?: Array<V1CustomizeComponentsPatch>;
}
/**
 * Check if a given object implements the V1CustomizeComponents interface.
 */
export declare function instanceOfV1CustomizeComponents(value: object): value is V1CustomizeComponents;
export declare function V1CustomizeComponentsFromJSON(json: any): V1CustomizeComponents;
export declare function V1CustomizeComponentsFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1CustomizeComponents;
export declare function V1CustomizeComponentsToJSON(json: any): V1CustomizeComponents;
export declare function V1CustomizeComponentsToJSONTyped(value?: V1CustomizeComponents | null, _ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1CustomizeComponents.d.ts.map