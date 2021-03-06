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

import { BlockEventType } from './BlockEventType';
import { BlockIdentifier } from './BlockIdentifier';
import { HttpFile } from '../http/http';

/**
* BlockEvent represents the addition or removal of a BlockIdentifier from storage. Streaming BlockEvents allows lightweight clients to update their own state without needing to implement their own syncing logic.
*/
export class BlockEvent {
    /**
    * sequence is the unique identifier of a BlockEvent within the context of a NetworkIdentifier.
    */
    'sequence': number;
    'blockIdentifier': BlockIdentifier;
    'type': BlockEventType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "sequence",
            "baseName": "sequence",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "blockIdentifier",
            "baseName": "block_identifier",
            "type": "BlockIdentifier",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "BlockEventType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BlockEvent.attributeTypeMap;
    }

    public constructor() {
    }
}

