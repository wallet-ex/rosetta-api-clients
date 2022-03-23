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
* SyncStatus is used to provide additional context about an implementation's sync status. This object is often used by implementations to indicate healthiness when block data cannot be queried until some sync phase completes or cannot be determined by comparing the timestamp of the most recent block with the current time.
*/
export class SyncStatus {
    /**
    * CurrentIndex is the index of the last synced block in the current stage. This is a separate field from current_block_identifier in NetworkStatusResponse because blocks with indices up to and including the current_index may not yet be queryable by the caller. To reiterate, all indices up to and including current_block_identifier in NetworkStatusResponse must be queryable via the /block endpoint (excluding indices less than oldest_block_identifier).
    */
    'currentIndex'?: number;
    /**
    * TargetIndex is the index of the block that the implementation is attempting to sync to in the current stage.
    */
    'targetIndex'?: number;
    /**
    * Stage is the phase of the sync process.
    */
    'stage'?: string;
    /**
    * synced is a boolean that indicates if an implementation has synced up to the most recent block. If this field is not populated, the caller should rely on a traditional tip timestamp comparison to determine if an implementation is synced. This field is particularly useful for quiescent blockchains (blocks only produced when there are pending transactions). In these blockchains, the most recent block could have a timestamp far behind the current time but the node could be healthy and at tip.
    */
    'synced'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "currentIndex",
            "baseName": "current_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "targetIndex",
            "baseName": "target_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "stage",
            "baseName": "stage",
            "type": "string",
            "format": ""
        },
        {
            "name": "synced",
            "baseName": "synced",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SyncStatus.attributeTypeMap;
    }

    public constructor() {
    }
}
