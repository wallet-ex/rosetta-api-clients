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

import { NetworkIdentifier } from './NetworkIdentifier';
import { PublicKey } from './PublicKey';
import { HttpFile } from '../http/http';

/**
* ConstructionDeriveRequest is passed to the `/construction/derive` endpoint. Network is provided in the request because some blockchains have different address formats for different networks. Metadata is provided in the request because some blockchains allow for multiple address types (i.e. different address for validators vs normal accounts).
*/
export class ConstructionDeriveRequest {
    'networkIdentifier': NetworkIdentifier;
    'publicKey': PublicKey;
    'metadata'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "networkIdentifier",
            "baseName": "network_identifier",
            "type": "NetworkIdentifier",
            "format": ""
        },
        {
            "name": "publicKey",
            "baseName": "public_key",
            "type": "PublicKey",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConstructionDeriveRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
