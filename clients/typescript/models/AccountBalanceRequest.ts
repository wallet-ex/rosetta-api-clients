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
import { PartialBlockIdentifier } from './PartialBlockIdentifier';
import { HttpFile } from '../http/http';

/**
* An AccountBalanceRequest is utilized to make a balance request on the /account/balance endpoint. If the block_identifier is populated, a historical balance query should be performed.
*/
export class AccountBalanceRequest {
    'networkIdentifier': NetworkIdentifier;
    'accountIdentifier': AccountIdentifier;
    'blockIdentifier'?: PartialBlockIdentifier;
    /**
    * In some cases, the caller may not want to retrieve all available balances for an AccountIdentifier. If the currencies field is populated, only balances for the specified currencies will be returned. If not populated, all available balances will be returned.
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
            "name": "blockIdentifier",
            "baseName": "block_identifier",
            "type": "PartialBlockIdentifier",
            "format": ""
        },
        {
            "name": "currencies",
            "baseName": "currencies",
            "type": "Array<Currency>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AccountBalanceRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

