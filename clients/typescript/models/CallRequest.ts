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
* CallRequest is the input to the `/call` endpoint.
*/
export class CallRequest {
    'networkIdentifier': NetworkIdentifier;
    /**
    * Method is some network-specific procedure call. This method could map to a network-specific RPC endpoint, a method in an SDK generated from a smart contract, or some hybrid of the two. The implementation must define all available methods in the Allow object. However, it is up to the caller to determine which parameters to provide when invoking `/call`.
    */
    'method': string;
    /**
    * Parameters is some network-specific argument for a method. It is up to the caller to determine which parameters to provide when invoking `/call`.
    */
    'parameters': any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "networkIdentifier",
            "baseName": "network_identifier",
            "type": "NetworkIdentifier",
            "format": ""
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "string",
            "format": ""
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CallRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

