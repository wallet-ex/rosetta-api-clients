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

import { SubAccountIdentifier } from './SubAccountIdentifier';
import { HttpFile } from '../http/http';

/**
* The account_identifier uniquely identifies an account within a network. All fields in the account_identifier are utilized to determine this uniqueness (including the metadata field, if populated).
*/
export class AccountIdentifier {
    /**
    * The address may be a cryptographic public key (or some encoding of it) or a provided username.
    */
    'address': string;
    'subAccount'?: SubAccountIdentifier;
    /**
    * Blockchains that utilize a username model (where the address is not a derivative of a cryptographic public key) should specify the public key(s) owned by the address in metadata.
    */
    'metadata'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "string",
            "format": ""
        },
        {
            "name": "subAccount",
            "baseName": "sub_account",
            "type": "SubAccountIdentifier",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AccountIdentifier.attributeTypeMap;
    }

    public constructor() {
    }
}
