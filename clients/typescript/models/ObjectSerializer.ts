export * from './AccountBalanceRequest';
export * from './AccountBalanceResponse';
export * from './AccountCoinsRequest';
export * from './AccountCoinsResponse';
export * from './AccountIdentifier';
export * from './Allow';
export * from './Amount';
export * from './BalanceExemption';
export * from './Block';
export * from './BlockEvent';
export * from './BlockEventType';
export * from './BlockIdentifier';
export * from './BlockRequest';
export * from './BlockResponse';
export * from './BlockTransaction';
export * from './BlockTransactionRequest';
export * from './BlockTransactionResponse';
export * from './CallRequest';
export * from './CallResponse';
export * from './Coin';
export * from './CoinAction';
export * from './CoinChange';
export * from './CoinIdentifier';
export * from './ConstructionCombineRequest';
export * from './ConstructionCombineResponse';
export * from './ConstructionDeriveRequest';
export * from './ConstructionDeriveResponse';
export * from './ConstructionHashRequest';
export * from './ConstructionMetadataRequest';
export * from './ConstructionMetadataResponse';
export * from './ConstructionParseRequest';
export * from './ConstructionParseResponse';
export * from './ConstructionPayloadsRequest';
export * from './ConstructionPayloadsResponse';
export * from './ConstructionPreprocessRequest';
export * from './ConstructionPreprocessResponse';
export * from './ConstructionSubmitRequest';
export * from './Currency';
export * from './CurveType';
export * from './Direction';
export * from './ErrorResponse';
export * from './EventsBlocksRequest';
export * from './EventsBlocksResponse';
export * from './ExemptionType';
export * from './MempoolResponse';
export * from './MempoolTransactionRequest';
export * from './MempoolTransactionResponse';
export * from './MetadataRequest';
export * from './NetworkIdentifier';
export * from './NetworkListResponse';
export * from './NetworkOptionsResponse';
export * from './NetworkRequest';
export * from './NetworkStatusResponse';
export * from './Operation';
export * from './OperationIdentifier';
export * from './OperationStatus';
export * from './Operator';
export * from './PartialBlockIdentifier';
export * from './Peer';
export * from './PublicKey';
export * from './RelatedTransaction';
export * from './SearchTransactionsRequest';
export * from './SearchTransactionsResponse';
export * from './Signature';
export * from './SignatureType';
export * from './SigningPayload';
export * from './StringCasing';
export * from './SubAccountIdentifier';
export * from './SubNetworkIdentifier';
export * from './SyncStatus';
export * from './Transaction';
export * from './TransactionIdentifier';
export * from './TransactionIdentifierResponse';
export * from './Version';

import { AccountBalanceRequest } from './AccountBalanceRequest';
import { AccountBalanceResponse } from './AccountBalanceResponse';
import { AccountCoinsRequest } from './AccountCoinsRequest';
import { AccountCoinsResponse } from './AccountCoinsResponse';
import { AccountIdentifier } from './AccountIdentifier';
import { Allow } from './Allow';
import { Amount } from './Amount';
import { BalanceExemption } from './BalanceExemption';
import { Block } from './Block';
import { BlockEvent } from './BlockEvent';
import { BlockEventType } from './BlockEventType';
import { BlockIdentifier } from './BlockIdentifier';
import { BlockRequest } from './BlockRequest';
import { BlockResponse } from './BlockResponse';
import { BlockTransaction } from './BlockTransaction';
import { BlockTransactionRequest } from './BlockTransactionRequest';
import { BlockTransactionResponse } from './BlockTransactionResponse';
import { CallRequest } from './CallRequest';
import { CallResponse } from './CallResponse';
import { Coin } from './Coin';
import { CoinAction } from './CoinAction';
import { CoinChange } from './CoinChange';
import { CoinIdentifier } from './CoinIdentifier';
import { ConstructionCombineRequest } from './ConstructionCombineRequest';
import { ConstructionCombineResponse } from './ConstructionCombineResponse';
import { ConstructionDeriveRequest } from './ConstructionDeriveRequest';
import { ConstructionDeriveResponse } from './ConstructionDeriveResponse';
import { ConstructionHashRequest } from './ConstructionHashRequest';
import { ConstructionMetadataRequest } from './ConstructionMetadataRequest';
import { ConstructionMetadataResponse } from './ConstructionMetadataResponse';
import { ConstructionParseRequest } from './ConstructionParseRequest';
import { ConstructionParseResponse } from './ConstructionParseResponse';
import { ConstructionPayloadsRequest } from './ConstructionPayloadsRequest';
import { ConstructionPayloadsResponse } from './ConstructionPayloadsResponse';
import { ConstructionPreprocessRequest } from './ConstructionPreprocessRequest';
import { ConstructionPreprocessResponse } from './ConstructionPreprocessResponse';
import { ConstructionSubmitRequest } from './ConstructionSubmitRequest';
import { Currency } from './Currency';
import { CurveType } from './CurveType';
import { Direction } from './Direction';
import { ErrorResponse } from './ErrorResponse';
import { EventsBlocksRequest } from './EventsBlocksRequest';
import { EventsBlocksResponse } from './EventsBlocksResponse';
import { ExemptionType } from './ExemptionType';
import { MempoolResponse } from './MempoolResponse';
import { MempoolTransactionRequest } from './MempoolTransactionRequest';
import { MempoolTransactionResponse } from './MempoolTransactionResponse';
import { MetadataRequest } from './MetadataRequest';
import { NetworkIdentifier } from './NetworkIdentifier';
import { NetworkListResponse } from './NetworkListResponse';
import { NetworkOptionsResponse } from './NetworkOptionsResponse';
import { NetworkRequest } from './NetworkRequest';
import { NetworkStatusResponse } from './NetworkStatusResponse';
import { Operation } from './Operation';
import { OperationIdentifier } from './OperationIdentifier';
import { OperationStatus } from './OperationStatus';
import { Operator } from './Operator';
import { PartialBlockIdentifier } from './PartialBlockIdentifier';
import { Peer } from './Peer';
import { PublicKey } from './PublicKey';
import { RelatedTransaction } from './RelatedTransaction';
import { SearchTransactionsRequest } from './SearchTransactionsRequest';
import { SearchTransactionsResponse } from './SearchTransactionsResponse';
import { Signature } from './Signature';
import { SignatureType } from './SignatureType';
import { SigningPayload } from './SigningPayload';
import { StringCasing } from './StringCasing';
import { SubAccountIdentifier } from './SubAccountIdentifier';
import { SubNetworkIdentifier } from './SubNetworkIdentifier';
import { SyncStatus } from './SyncStatus';
import { Transaction } from './Transaction';
import { TransactionIdentifier } from './TransactionIdentifier';
import { TransactionIdentifierResponse } from './TransactionIdentifierResponse';
import { Version } from './Version';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
    "BlockEventType",
    "CoinAction",
    "CurveType",
    "Direction",
    "ExemptionType",
    "Operator",
    "SignatureType",
    "StringCasing",
]);

let typeMap: {[index: string]: any} = {
    "AccountBalanceRequest": AccountBalanceRequest,
    "AccountBalanceResponse": AccountBalanceResponse,
    "AccountCoinsRequest": AccountCoinsRequest,
    "AccountCoinsResponse": AccountCoinsResponse,
    "AccountIdentifier": AccountIdentifier,
    "Allow": Allow,
    "Amount": Amount,
    "BalanceExemption": BalanceExemption,
    "Block": Block,
    "BlockEvent": BlockEvent,
    "BlockIdentifier": BlockIdentifier,
    "BlockRequest": BlockRequest,
    "BlockResponse": BlockResponse,
    "BlockTransaction": BlockTransaction,
    "BlockTransactionRequest": BlockTransactionRequest,
    "BlockTransactionResponse": BlockTransactionResponse,
    "CallRequest": CallRequest,
    "CallResponse": CallResponse,
    "Coin": Coin,
    "CoinChange": CoinChange,
    "CoinIdentifier": CoinIdentifier,
    "ConstructionCombineRequest": ConstructionCombineRequest,
    "ConstructionCombineResponse": ConstructionCombineResponse,
    "ConstructionDeriveRequest": ConstructionDeriveRequest,
    "ConstructionDeriveResponse": ConstructionDeriveResponse,
    "ConstructionHashRequest": ConstructionHashRequest,
    "ConstructionMetadataRequest": ConstructionMetadataRequest,
    "ConstructionMetadataResponse": ConstructionMetadataResponse,
    "ConstructionParseRequest": ConstructionParseRequest,
    "ConstructionParseResponse": ConstructionParseResponse,
    "ConstructionPayloadsRequest": ConstructionPayloadsRequest,
    "ConstructionPayloadsResponse": ConstructionPayloadsResponse,
    "ConstructionPreprocessRequest": ConstructionPreprocessRequest,
    "ConstructionPreprocessResponse": ConstructionPreprocessResponse,
    "ConstructionSubmitRequest": ConstructionSubmitRequest,
    "Currency": Currency,
    "ErrorResponse": ErrorResponse,
    "EventsBlocksRequest": EventsBlocksRequest,
    "EventsBlocksResponse": EventsBlocksResponse,
    "MempoolResponse": MempoolResponse,
    "MempoolTransactionRequest": MempoolTransactionRequest,
    "MempoolTransactionResponse": MempoolTransactionResponse,
    "MetadataRequest": MetadataRequest,
    "NetworkIdentifier": NetworkIdentifier,
    "NetworkListResponse": NetworkListResponse,
    "NetworkOptionsResponse": NetworkOptionsResponse,
    "NetworkRequest": NetworkRequest,
    "NetworkStatusResponse": NetworkStatusResponse,
    "Operation": Operation,
    "OperationIdentifier": OperationIdentifier,
    "OperationStatus": OperationStatus,
    "PartialBlockIdentifier": PartialBlockIdentifier,
    "Peer": Peer,
    "PublicKey": PublicKey,
    "RelatedTransaction": RelatedTransaction,
    "SearchTransactionsRequest": SearchTransactionsRequest,
    "SearchTransactionsResponse": SearchTransactionsResponse,
    "Signature": Signature,
    "SigningPayload": SigningPayload,
    "SubAccountIdentifier": SubAccountIdentifier,
    "SubNetworkIdentifier": SubNetworkIdentifier,
    "SyncStatus": SyncStatus,
    "Transaction": Transaction,
    "TransactionIdentifier": TransactionIdentifier,
    "TransactionIdentifierResponse": TransactionIdentifierResponse,
    "Version": Version,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
