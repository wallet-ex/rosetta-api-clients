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
import { Peer } from './Peer';
import { SyncStatus } from './SyncStatus';
import { HttpFile } from '../http/http';

/**
* NetworkStatusResponse contains basic information about the node's view of a blockchain network. It is assumed that any BlockIdentifier.Index less than or equal to CurrentBlockIdentifier.Index can be queried. If a Rosetta implementation prunes historical state, it should populate the optional `oldest_block_identifier` field with the oldest block available to query. If this is not populated, it is assumed that the `genesis_block_identifier` is the oldest queryable block. If a Rosetta implementation performs some pre-sync before it is possible to query blocks, sync_status should be populated so that clients can still monitor healthiness. Without this field, it may appear that the implementation is stuck syncing and needs to be terminated.
*/
export class NetworkStatusResponse {
    'currentBlockIdentifier': BlockIdentifier;
    /**
    * The timestamp of the block in milliseconds since the Unix Epoch. The timestamp is stored in milliseconds because some blockchains produce blocks more often than once a second.
    */
    'currentBlockTimestamp': number;
    'genesisBlockIdentifier': BlockIdentifier;
    'oldestBlockIdentifier'?: BlockIdentifier;
    'syncStatus'?: SyncStatus;
    'peers': Array<Peer>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "currentBlockIdentifier",
            "baseName": "current_block_identifier",
            "type": "BlockIdentifier",
            "format": ""
        },
        {
            "name": "currentBlockTimestamp",
            "baseName": "current_block_timestamp",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "genesisBlockIdentifier",
            "baseName": "genesis_block_identifier",
            "type": "BlockIdentifier",
            "format": ""
        },
        {
            "name": "oldestBlockIdentifier",
            "baseName": "oldest_block_identifier",
            "type": "BlockIdentifier",
            "format": ""
        },
        {
            "name": "syncStatus",
            "baseName": "sync_status",
            "type": "SyncStatus",
            "format": ""
        },
        {
            "name": "peers",
            "baseName": "peers",
            "type": "Array<Peer>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NetworkStatusResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
