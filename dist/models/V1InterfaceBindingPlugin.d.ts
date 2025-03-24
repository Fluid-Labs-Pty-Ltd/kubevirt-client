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
import type { V1InterfaceBindingMigration } from './V1InterfaceBindingMigration.js';
import type { V1ResourceRequirementsWithoutClaims } from './V1ResourceRequirementsWithoutClaims.js';
/**
 *
 * @export
 * @interface V1InterfaceBindingPlugin
 */
export interface V1InterfaceBindingPlugin {
    /**
     *
     * @type {V1ResourceRequirementsWithoutClaims}
     * @memberof V1InterfaceBindingPlugin
     */
    computeResourceOverhead?: V1ResourceRequirementsWithoutClaims;
    /**
     * DomainAttachmentType is a standard domain network attachment method kubevirt supports. Supported values: "tap", "managedTap" (since v1.4). The standard domain attachment can be used instead or in addition to the sidecarImage. version: 1alphav1
     * @type {string}
     * @memberof V1InterfaceBindingPlugin
     */
    domainAttachmentType?: string;
    /**
     * DownwardAPI specifies what kind of data should be exposed to the binding plugin sidecar. Supported values: "device-info" version: v1alphav1
     * @type {string}
     * @memberof V1InterfaceBindingPlugin
     */
    downwardAPI?: string;
    /**
     *
     * @type {V1InterfaceBindingMigration}
     * @memberof V1InterfaceBindingPlugin
     */
    migration?: V1InterfaceBindingMigration;
    /**
     * NetworkAttachmentDefinition references to a NetworkAttachmentDefinition CR object. Format: <name>, <namespace>/<name>. If namespace is not specified, VMI namespace is assumed. version: 1alphav1
     * @type {string}
     * @memberof V1InterfaceBindingPlugin
     */
    networkAttachmentDefinition?: string;
    /**
     * SidecarImage references a container image that runs in the virt-launcher pod. The sidecar handles (libvirt) domain configuration and optional services. version: 1alphav1
     * @type {string}
     * @memberof V1InterfaceBindingPlugin
     */
    sidecarImage?: string;
}
/**
 * Check if a given object implements the V1InterfaceBindingPlugin interface.
 */
export declare function instanceOfV1InterfaceBindingPlugin(value: object): value is V1InterfaceBindingPlugin;
export declare function V1InterfaceBindingPluginFromJSON(json: any): V1InterfaceBindingPlugin;
export declare function V1InterfaceBindingPluginFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1InterfaceBindingPlugin;
export declare function V1InterfaceBindingPluginToJSON(json: any): V1InterfaceBindingPlugin;
export declare function V1InterfaceBindingPluginToJSONTyped(value?: V1InterfaceBindingPlugin | null, _ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1InterfaceBindingPlugin.d.ts.map