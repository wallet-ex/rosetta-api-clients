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

import { AccountIdentifier } from './AccountIdentifier';
import { Currency } from './Currency';
import { NetworkIdentifier } from './NetworkIdentifier';
import { HttpFile } from '../http/http';

/**
* AccountCoinsRequest is utilized to make a request on the /account/coins endpoint.
*/
export class AccountCoinsRequest {
    'networkIdentifier': NetworkIdentifier;
    'accountIdentifier': AccountIdentifier;
    /**
    * Include state from the mempool when looking up an account's unspent coins. Note, using this functionality breaks any guarantee of idempotency.
    */
    'includeMempool': boolean;
    /**
    * In some cases, the caller may not want to retrieve coins for all currencies for an AccountIdentifier. If the currencies field is populated, only coins for the specified currencies will be returned. If not populated, all unspent coins will be returned.
    */
    'currencies'?: Array<Currency>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "networkIdentifier",
            "baseName": "network_identifier",
            "type": "NetworkIdentifier",
            "format": ""
        },
        {
            "name": "accountIdentifier",
            "baseName": "account_identifier",
            "type": "AccountIdentifier",
            "format": ""
        },
        {
            "name": "includeMempool",
            "baseName": "include_mempool",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "currencies",
            "baseName": "currencies",
            "type": "Array<Currency>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AccountCoinsRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

