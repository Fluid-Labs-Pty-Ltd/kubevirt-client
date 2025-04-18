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
import { V1ClockOffsetUTC } from '../models/V1ClockOffsetUTC.js';
import { V1Timer } from '../models/V1Timer.js';
/**
* Represents the clock and timers of a vmi.
*/
export declare class V1Clock {
    'timer'?: V1Timer;
    /**
    * Timezone sets the guest clock to the specified timezone. Zone name follows the TZ environment variable format (e.g. \'America/New_York\').
    */
    'timezone'?: string;
    'utc'?: V1ClockOffsetUTC;
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
//# sourceMappingURL=V1Clock.d.ts.map