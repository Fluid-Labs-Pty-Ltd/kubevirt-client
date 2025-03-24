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
 *
 * @export
 * @interface V1AccessCredentialSecretSource
 */
export interface V1AccessCredentialSecretSource {
    /**
     * SecretName represents the name of the secret in the VMI's namespace
     * @type {string}
     * @memberof V1AccessCredentialSecretSource
     */
    secretName: string;
}
/**
 * Check if a given object implements the V1AccessCredentialSecretSource interface.
 */
export declare function instanceOfV1AccessCredentialSecretSource(value: object): value is V1AccessCredentialSecretSource;
export declare function V1AccessCredentialSecretSourceFromJSON(json: any): V1AccessCredentialSecretSource;
export declare function V1AccessCredentialSecretSourceFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1AccessCredentialSecretSource;
export declare function V1AccessCredentialSecretSourceToJSON(json: any): V1AccessCredentialSecretSource;
export declare function V1AccessCredentialSecretSourceToJSONTyped(value?: V1AccessCredentialSecretSource | null, _ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=V1AccessCredentialSecretSource.d.ts.map