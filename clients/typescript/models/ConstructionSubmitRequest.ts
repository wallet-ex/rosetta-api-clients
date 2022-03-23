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
import { HttpFile } from '../http/http';

/**
* The transaction submission request includes a signed transaction.
*/
export class ConstructionSubmitRequest {
    'networkIdentifier': NetworkIdentifier;
    'signedTransaction': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "networkIdentifier",
            "baseName": "network_identifier",
            "type": "NetworkIdentifier",
            "format": ""
        },
        {
            "name": "signedTransaction",
            "baseName": "signed_transaction",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConstructionSubmitRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

