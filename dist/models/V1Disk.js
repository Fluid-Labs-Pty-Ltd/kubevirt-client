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
import { V1DiskTargetFromJSON, V1DiskTargetToJSON, } from './V1DiskTarget.js';
import { V1LunTargetFromJSON, V1LunTargetToJSON, } from './V1LunTarget.js';
import { V1BlockSizeFromJSON, V1BlockSizeToJSON, } from './V1BlockSize.js';
import { V1CDRomTargetFromJSON, V1CDRomTargetToJSON, } from './V1CDRomTarget.js';
/**
 * Check if a given object implements the V1Disk interface.
 */
export function instanceOfV1Disk(value) {
    if (!('name' in value) || value['name'] === undefined)
        return false;
    return true;
}
export function V1DiskFromJSON(json) {
    return V1DiskFromJSONTyped(json, false);
}
export function V1DiskFromJSONTyped(json, _ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'blockSize': json['blockSize'] == null ? undefined : V1BlockSizeFromJSON(json['blockSize']),
        'bootOrder': json['bootOrder'] == null ? undefined : json['bootOrder'],
        'cache': json['cache'] == null ? undefined : json['cache'],
        'cdrom': json['cdrom'] == null ? undefined : V1CDRomTargetFromJSON(json['cdrom']),
        'dedicatedIOThread': json['dedicatedIOThread'] == null ? undefined : json['dedicatedIOThread'],
        'disk': json['disk'] == null ? undefined : V1DiskTargetFromJSON(json['disk']),
        'errorPolicy': json['errorPolicy'] == null ? undefined : json['errorPolicy'],
        'io': json['io'] == null ? undefined : json['io'],
        'lun': json['lun'] == null ? undefined : V1LunTargetFromJSON(json['lun']),
        'name': json['name'],
        'serial': json['serial'] == null ? undefined : json['serial'],
        'shareable': json['shareable'] == null ? undefined : json['shareable'],
        'tag': json['tag'] == null ? undefined : json['tag'],
    };
}
export function V1DiskToJSON(json) {
    return V1DiskToJSONTyped(json, false);
}
export function V1DiskToJSONTyped(value, _ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'blockSize': V1BlockSizeToJSON(value['blockSize']),
        'bootOrder': value['bootOrder'],
        'cache': value['cache'],
        'cdrom': V1CDRomTargetToJSON(value['cdrom']),
        'dedicatedIOThread': value['dedicatedIOThread'],
        'disk': V1DiskTargetToJSON(value['disk']),
        'errorPolicy': value['errorPolicy'],
        'io': value['io'],
        'lun': V1LunTargetToJSON(value['lun']),
        'name': value['name'],
        'serial': value['serial'],
        'shareable': value['shareable'],
        'tag': value['tag'],
    };
}
//# sourceMappingURL=V1Disk.js.map