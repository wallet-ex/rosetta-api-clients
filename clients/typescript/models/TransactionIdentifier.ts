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

import { HttpFile } from '../http/http';

/**
* The transaction_identifier uniquely identifies a transaction in a particular network and block or in the mempool.
*/
export class TransactionIdentifier {
    /**
    * Any transactions that are attributable only to a block (ex: a block event) should use the hash of the block as the identifier. This should be normalized according to the case specified in the transaction_hash_case in network options.
    */
    'hash': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "hash",
            "baseName": "hash",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TransactionIdentifier.attributeTypeMap;
    }

    public constructor() {
    }
}

