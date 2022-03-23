/**
 * Rosetta
 * Build Once. Integrate Your Blockchain Everywhere.
 *
 * OpenAPI spec version: 1.4.12
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Allow } from './Allow';
import { Version } from './Version';
import { HttpFile } from '../http/http';

/**
* NetworkOptionsResponse contains information about the versioning of the node and the allowed operation statuses, operation types, and errors.
*/
export class NetworkOptionsResponse {
    'version': Version;
    'allow': Allow;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "version",
            "baseName": "version",
            "type": "Version",
            "format": ""
        },
        {
            "name": "allow",
            "baseName": "allow",
            "type": "Allow",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NetworkOptionsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

