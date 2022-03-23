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

import { CurveType } from './CurveType';
import { HttpFile } from '../http/http';

/**
* PublicKey contains a public key byte array for a particular CurveType encoded in hex. Note that there is no PrivateKey struct as this is NEVER the concern of an implementation.
*/
export class PublicKey {
    /**
    * Hex-encoded public key bytes in the format specified by the CurveType.
    */
    'hexBytes': string;
    'curveType': CurveType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "hexBytes",
            "baseName": "hex_bytes",
            "type": "string",
            "format": ""
        },
        {
            "name": "curveType",
            "baseName": "curve_type",
            "type": "CurveType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicKey.attributeTypeMap;
    }

    public constructor() {
    }
}

