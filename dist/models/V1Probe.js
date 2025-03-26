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
* Probe describes a health check to be performed against a VirtualMachineInstance to determine whether it is alive or ready to receive traffic.
*/
export class V1Probe {
    'exec';
    /**
    * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
    */
    'failureThreshold';
    /**
    * GuestAgentPing configures the guest-agent based ping probe
    */
    'guestAgentPing';
    'httpGet';
    /**
    * Number of seconds after the VirtualMachineInstance has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
    */
    'initialDelaySeconds';
    /**
    * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
    */
    'periodSeconds';
    /**
    * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness. Minimum value is 1.
    */
    'successThreshold';
    'tcpSocket';
    /**
    * Number of seconds after which the probe times out. For exec probes the timeout fails the probe but does not terminate the command running on the guest. This means a blocking command can result in an increasing load on the guest. A small buffer will be added to the resulting workload exec probe to compensate for delays caused by the qemu guest exec mechanism. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
    */
    'timeoutSeconds';
    static discriminator = undefined;
    static mapping = undefined;
    static attributeTypeMap = [
        {
            "name": "exec",
            "baseName": "exec",
            "type": "K8sIoApiCoreV1ExecAction",
            "format": ""
        },
        {
            "name": "failureThreshold",
            "baseName": "failureThreshold",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "guestAgentPing",
            "baseName": "guestAgentPing",
            "type": "any",
            "format": ""
        },
        {
            "name": "httpGet",
            "baseName": "httpGet",
            "type": "K8sIoApiCoreV1HTTPGetAction",
            "format": ""
        },
        {
            "name": "initialDelaySeconds",
            "baseName": "initialDelaySeconds",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "periodSeconds",
            "baseName": "periodSeconds",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "successThreshold",
            "baseName": "successThreshold",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "tcpSocket",
            "baseName": "tcpSocket",
            "type": "K8sIoApiCoreV1TCPSocketAction",
            "format": ""
        },
        {
            "name": "timeoutSeconds",
            "baseName": "timeoutSeconds",
            "type": "number",
            "format": "int32"
        }
    ];
    static getAttributeTypeMap() {
        return V1Probe.attributeTypeMap;
    }
    constructor() {
    }
}
//# sourceMappingURL=V1Probe.js.map