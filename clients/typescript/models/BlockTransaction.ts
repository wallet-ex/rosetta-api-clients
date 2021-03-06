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

import { BlockIdentifier } from './BlockIdentifier';
import { Transaction } from './Transaction';
import { HttpFile } from '../http/http';

/**
* BlockTransaction contains a populated Transaction and the BlockIdentifier that contains it.
*/
export class BlockTransaction {
    'blockIdentifier': BlockIdentifier;
    'transaction': Transaction;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "blockIdentifier",
            "baseName": "block_identifier",
            "type": "BlockIdentifier",
            "format": ""
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "Transaction",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BlockTransaction.attributeTypeMap;
    }

    public constructor() {
    }
}

