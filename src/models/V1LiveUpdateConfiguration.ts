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

import { mapValues } from '../runtime.js';
/**
 * 
 * @export
 * @interface V1LiveUpdateConfiguration
 */
export interface V1LiveUpdateConfiguration {
    /**
     * MaxCpuSockets provides a MaxSockets value for VMs that do not provide their own. For VMs with more sockets than maximum the MaxSockets will be set to equal number of sockets.
     * @type {number}
     * @memberof V1LiveUpdateConfiguration
     */
    maxCpuSockets?: number;
    /**
     * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
     * 
     * The serialization format is:
     * 
     * ``` <quantity>        ::= <signedNumber><suffix>
     * 
     * 	(Note that <suffix> may be empty, from the "" case in <decimalSI>.)
     * 
     * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
     * 
     * 	(International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
     * 
     * <decimalSI>       ::= m | "" | k | M | G | T | P | E
     * 
     * 	(Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
     * 
     * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber> ```
     * 
     * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
     * 
     * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
     * 
     * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
     * 
     * - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible.
     * 
     * The sign will be omitted unless the number is negative.
     * 
     * Examples:
     * 
     * - 1.5 will be serialized as "1500m" - 1.5Gi will be serialized as "1536Mi"
     * 
     * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
     * 
     * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
     * 
     * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
     * @type {string}
     * @memberof V1LiveUpdateConfiguration
     */
    maxGuest?: string;
    /**
     * MaxHotplugRatio is the ratio used to define the max amount of a hotplug resource that can be made available to a VM when the specific Max* setting is not defined (MaxCpuSockets, MaxGuest) Example: VM is configured with 512Mi of guest memory, if MaxGuest is not defined and MaxHotplugRatio is 2 then MaxGuest = 1Gi defaults to 4
     * @type {number}
     * @memberof V1LiveUpdateConfiguration
     */
    maxHotplugRatio?: number;
}

/**
 * Check if a given object implements the V1LiveUpdateConfiguration interface.
 */
export function instanceOfV1LiveUpdateConfiguration(value: object): value is V1LiveUpdateConfiguration {
    return true;
}

export function V1LiveUpdateConfigurationFromJSON(json: any): V1LiveUpdateConfiguration {
    return V1LiveUpdateConfigurationFromJSONTyped(json, false);
}

export function V1LiveUpdateConfigurationFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1LiveUpdateConfiguration {
    if (json == null) {
        return json;
    }
    return {
        
        'maxCpuSockets': json['maxCpuSockets'] == null ? undefined : json['maxCpuSockets'],
        'maxGuest': json['maxGuest'] == null ? undefined : json['maxGuest'],
        'maxHotplugRatio': json['maxHotplugRatio'] == null ? undefined : json['maxHotplugRatio'],
    };
}

export function V1LiveUpdateConfigurationToJSON(json: any): V1LiveUpdateConfiguration {
    return V1LiveUpdateConfigurationToJSONTyped(json, false);
}

export function V1LiveUpdateConfigurationToJSONTyped(value?: V1LiveUpdateConfiguration | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'maxCpuSockets': value['maxCpuSockets'],
        'maxGuest': value['maxGuest'],
        'maxHotplugRatio': value['maxHotplugRatio'],
    };
}

