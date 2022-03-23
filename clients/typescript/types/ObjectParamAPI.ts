import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AccountBalanceRequest } from '../models/AccountBalanceRequest';
import { AccountBalanceResponse } from '../models/AccountBalanceResponse';
import { AccountCoinsRequest } from '../models/AccountCoinsRequest';
import { AccountCoinsResponse } from '../models/AccountCoinsResponse';
import { AccountIdentifier } from '../models/AccountIdentifier';
import { Allow } from '../models/Allow';
import { Amount } from '../models/Amount';
import { BalanceExemption } from '../models/BalanceExemption';
import { Block } from '../models/Block';
import { BlockEvent } from '../models/BlockEvent';
import { BlockEventType } from '../models/BlockEventType';
import { BlockIdentifier } from '../models/BlockIdentifier';
import { BlockRequest } from '../models/BlockRequest';
import { BlockResponse } from '../models/BlockResponse';
import { BlockTransaction } from '../models/BlockTransaction';
import { BlockTransactionRequest } from '../models/BlockTransactionRequest';
import { BlockTransactionResponse } from '../models/BlockTransactionResponse';
import { CallRequest } from '../models/CallRequest';
import { CallResponse } from '../models/CallResponse';
import { Coin } from '../models/Coin';
import { CoinAction } from '../models/CoinAction';
import { CoinChange } from '../models/CoinChange';
import { CoinIdentifier } from '../models/CoinIdentifier';
import { ConstructionCombineRequest } from '../models/ConstructionCombineRequest';
import { ConstructionCombineResponse } from '../models/ConstructionCombineResponse';
import { ConstructionDeriveRequest } from '../models/ConstructionDeriveRequest';
import { ConstructionDeriveResponse } from '../models/ConstructionDeriveResponse';
import { ConstructionHashRequest } from '../models/ConstructionHashRequest';
import { ConstructionMetadataRequest } from '../models/ConstructionMetadataRequest';
import { ConstructionMetadataResponse } from '../models/ConstructionMetadataResponse';
import { ConstructionParseRequest } from '../models/ConstructionParseRequest';
import { ConstructionParseResponse } from '../models/ConstructionParseResponse';
import { ConstructionPayloadsRequest } from '../models/ConstructionPayloadsRequest';
import { ConstructionPayloadsResponse } from '../models/ConstructionPayloadsResponse';
import { ConstructionPreprocessRequest } from '../models/ConstructionPreprocessRequest';
import { ConstructionPreprocessResponse } from '../models/ConstructionPreprocessResponse';
import { ConstructionSubmitRequest } from '../models/ConstructionSubmitRequest';
import { Currency } from '../models/Currency';
import { CurveType } from '../models/CurveType';
import { Direction } from '../models/Direction';
import { ErrorResponse } from '../models/ErrorResponse';
import { EventsBlocksRequest } from '../models/EventsBlocksRequest';
import { EventsBlocksResponse } from '../models/EventsBlocksResponse';
import { ExemptionType } from '../models/ExemptionType';
import { MempoolResponse } from '../models/MempoolResponse';
import { MempoolTransactionRequest } from '../models/MempoolTransactionRequest';
import { MempoolTransactionResponse } from '../models/MempoolTransactionResponse';
import { MetadataRequest } from '../models/MetadataRequest';
import { NetworkIdentifier } from '../models/NetworkIdentifier';
import { NetworkListResponse } from '../models/NetworkListResponse';
import { NetworkOptionsResponse } from '../models/NetworkOptionsResponse';
import { NetworkRequest } from '../models/NetworkRequest';
import { NetworkStatusResponse } from '../models/NetworkStatusResponse';
import { Operation } from '../models/Operation';
import { OperationIdentifier } from '../models/OperationIdentifier';
import { OperationStatus } from '../models/OperationStatus';
import { Operator } from '../models/Operator';
import { PartialBlockIdentifier } from '../models/PartialBlockIdentifier';
import { Peer } from '../models/Peer';
import { PublicKey } from '../models/PublicKey';
import { RelatedTransaction } from '../models/RelatedTransaction';
import { SearchTransactionsRequest } from '../models/SearchTransactionsRequest';
import { SearchTransactionsResponse } from '../models/SearchTransactionsResponse';
import { Signature } from '../models/Signature';
import { SignatureType } from '../models/SignatureType';
import { SigningPayload } from '../models/SigningPayload';
import { StringCasing } from '../models/StringCasing';
import { SubAccountIdentifier } from '../models/SubAccountIdentifier';
import { SubNetworkIdentifier } from '../models/SubNetworkIdentifier';
import { SyncStatus } from '../models/SyncStatus';
import { Transaction } from '../models/Transaction';
import { TransactionIdentifier } from '../models/TransactionIdentifier';
import { TransactionIdentifierResponse } from '../models/TransactionIdentifierResponse';
import { Version } from '../models/Version';

import { ObservableAccountApi } from "./ObservableAPI";
import { AccountApiRequestFactory, AccountApiResponseProcessor} from "../apis/AccountApi";

export interface AccountApiAccountBalanceRequest {
    /**
     * 
     * @type AccountBalanceRequest
     * @memberof AccountApiaccountBalance
     */
    accountBalanceRequest: AccountBalanceRequest
}

export interface AccountApiAccountCoinsRequest {
    /**
     * 
     * @type AccountCoinsRequest
     * @memberof AccountApiaccountCoins
     */
    accountCoinsRequest: AccountCoinsRequest
}

export class ObjectAccountApi {
    private api: ObservableAccountApi

    public constructor(configuration: Configuration, requestFactory?: AccountApiRequestFactory, responseProcessor?: AccountApiResponseProcessor) {
        this.api = new ObservableAccountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get an array of all AccountBalances for an AccountIdentifier and the BlockIdentifier at which the balance lookup was performed. The BlockIdentifier must always be returned because some consumers of account balance data need to know specifically at which block the balance was calculated to compare balances they compute from operations with the balance returned by the node. It is important to note that making a balance request for an account without populating the SubAccountIdentifier should not result in the balance of all possible SubAccountIdentifiers being returned. Rather, it should result in the balance pertaining to no SubAccountIdentifiers being returned (sometimes called the liquid balance). To get all balances associated with an account, it may be necessary to perform multiple balance requests with unique AccountIdentifiers. It is also possible to perform a historical balance lookup (if the server supports it) by passing in an optional BlockIdentifier.
     * Get an Account's Balance
     * @param param the request object
     */
    public accountBalance(param: AccountApiAccountBalanceRequest, options?: Configuration): Promise<AccountBalanceResponse> {
        return this.api.accountBalance(param.accountBalanceRequest,  options).toPromise();
    }

    /**
     * Get an array of all unspent coins for an AccountIdentifier and the BlockIdentifier at which the lookup was performed. If your implementation does not support coins (i.e. it is for an account-based blockchain), you do not need to implement this endpoint. If you implementation does support coins (i.e. it is fro a UTXO-based blockchain), you MUST also complete the `/account/balance` endpoint. It is important to note that making a coins request for an account without populating the SubAccountIdentifier should not result in the coins of all possible SubAccountIdentifiers being returned. Rather, it should result in the coins pertaining to no SubAccountIdentifiers being returned. To get all coins associated with an account, it may be necessary to perform multiple coin requests with unique AccountIdentifiers. Optionally, an implementation may choose to support updating an AccountIdentifier's unspent coins based on the contents of the mempool. Note, using this functionality breaks any guarantee of idempotency.
     * Get an Account's Unspent Coins
     * @param param the request object
     */
    public accountCoins(param: AccountApiAccountCoinsRequest, options?: Configuration): Promise<AccountCoinsResponse> {
        return this.api.accountCoins(param.accountCoinsRequest,  options).toPromise();
    }

}

import { ObservableBlockApi } from "./ObservableAPI";
import { BlockApiRequestFactory, BlockApiResponseProcessor} from "../apis/BlockApi";

export interface BlockApiBlockRequest {
    /**
     * 
     * @type BlockRequest
     * @memberof BlockApiblock
     */
    blockRequest: BlockRequest
}

export interface BlockApiBlockTransactionRequest {
    /**
     * 
     * @type BlockTransactionRequest
     * @memberof BlockApiblockTransaction
     */
    blockTransactionRequest: BlockTransactionRequest
}

export class ObjectBlockApi {
    private api: ObservableBlockApi

    public constructor(configuration: Configuration, requestFactory?: BlockApiRequestFactory, responseProcessor?: BlockApiResponseProcessor) {
        this.api = new ObservableBlockApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a block by its Block Identifier. If transactions are returned in the same call to the node as fetching the block, the response should include these transactions in the Block object. If not, an array of Transaction Identifiers should be returned so /block/transaction fetches can be done to get all transaction information. When requesting a block by the hash component of the BlockIdentifier, this request MUST be idempotent: repeated invocations for the same hash-identified block must return the exact same block contents. No such restriction is imposed when requesting a block by height, given that a chain reorg event might cause the specific block at height `n` to be set to a different one.
     * Get a Block
     * @param param the request object
     */
    public block(param: BlockApiBlockRequest, options?: Configuration): Promise<BlockResponse> {
        return this.api.block(param.blockRequest,  options).toPromise();
    }

    /**
     * Get a transaction in a block by its Transaction Identifier. This endpoint should only be used when querying a node for a block does not return all transactions contained within it. All transactions returned by this endpoint must be appended to any transactions returned by the /block method by consumers of this data. Fetching a transaction by hash is considered an Explorer Method (which is classified under the Future Work section). This method can be used to let consumers to paginate results when the block trasactions count is too big to be returned in a single BlockResponse. Calling this endpoint requires reference to a BlockIdentifier because transaction parsing can change depending on which block contains the transaction. For example, in Bitcoin it is necessary to know which block contains a transaction to determine the destination of fee payments. Without specifying a block identifier, the node would have to infer which block to use (which could change during a re-org). Implementations that require fetching previous transactions to populate the response (ex: Previous UTXOs in Bitcoin) may find it useful to run a cache within the Rosetta server in the /data directory (on a path that does not conflict with the node).
     * Get a Block Transaction
     * @param param the request object
     */
    public blockTransaction(param: BlockApiBlockTransactionRequest, options?: Configuration): Promise<BlockTransactionResponse> {
        return this.api.blockTransaction(param.blockTransactionRequest,  options).toPromise();
    }

}

import { ObservableCallApi } from "./ObservableAPI";
import { CallApiRequestFactory, CallApiResponseProcessor} from "../apis/CallApi";

export interface CallApiCallRequest {
    /**
     * 
     * @type CallRequest
     * @memberof CallApicall
     */
    callRequest: CallRequest
}

export class ObjectCallApi {
    private api: ObservableCallApi

    public constructor(configuration: Configuration, requestFactory?: CallApiRequestFactory, responseProcessor?: CallApiResponseProcessor) {
        this.api = new ObservableCallApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Call invokes an arbitrary, network-specific procedure call with network-specific parameters. The guidance for what this endpoint should or could do is purposely left vague. In Ethereum, this could be used to invoke `eth_call` to implement an entire Rosetta API interface for some smart contract that is not parsed by the implementation creator (like a DEX). This endpoint could also be used to provide access to data that does not map to any Rosetta models instead of requiring an integrator to use some network-specific SDK and call some network-specific endpoint (like surfacing staking parameters). Call is NOT a replacement for implementing Rosetta API endpoints or mapping network-specific data to Rosetta models. Rather, it enables developers to build additional Rosetta API interfaces for things they care about without introducing complexity into a base-level Rosetta implementation. Simply put, imagine that the average integrator will use layered Rosetta API implementations that each surfaces unique data.
     * Make a Network-Specific Procedure Call
     * @param param the request object
     */
    public call(param: CallApiCallRequest, options?: Configuration): Promise<CallResponse> {
        return this.api.call(param.callRequest,  options).toPromise();
    }

}

import { ObservableConstructionApi } from "./ObservableAPI";
import { ConstructionApiRequestFactory, ConstructionApiResponseProcessor} from "../apis/ConstructionApi";

export interface ConstructionApiConstructionCombineRequest {
    /**
     * 
     * @type ConstructionCombineRequest
     * @memberof ConstructionApiconstructionCombine
     */
    constructionCombineRequest: ConstructionCombineRequest
}

export interface ConstructionApiConstructionDeriveRequest {
    /**
     * 
     * @type ConstructionDeriveRequest
     * @memberof ConstructionApiconstructionDerive
     */
    constructionDeriveRequest: ConstructionDeriveRequest
}

export interface ConstructionApiConstructionHashRequest {
    /**
     * 
     * @type ConstructionHashRequest
     * @memberof ConstructionApiconstructionHash
     */
    constructionHashRequest: ConstructionHashRequest
}

export interface ConstructionApiConstructionMetadataRequest {
    /**
     * 
     * @type ConstructionMetadataRequest
     * @memberof ConstructionApiconstructionMetadata
     */
    constructionMetadataRequest: ConstructionMetadataRequest
}

export interface ConstructionApiConstructionParseRequest {
    /**
     * 
     * @type ConstructionParseRequest
     * @memberof ConstructionApiconstructionParse
     */
    constructionParseRequest: ConstructionParseRequest
}

export interface ConstructionApiConstructionPayloadsRequest {
    /**
     * 
     * @type ConstructionPayloadsRequest
     * @memberof ConstructionApiconstructionPayloads
     */
    constructionPayloadsRequest: ConstructionPayloadsRequest
}

export interface ConstructionApiConstructionPreprocessRequest {
    /**
     * 
     * @type ConstructionPreprocessRequest
     * @memberof ConstructionApiconstructionPreprocess
     */
    constructionPreprocessRequest: ConstructionPreprocessRequest
}

export interface ConstructionApiConstructionSubmitRequest {
    /**
     * 
     * @type ConstructionSubmitRequest
     * @memberof ConstructionApiconstructionSubmit
     */
    constructionSubmitRequest: ConstructionSubmitRequest
}

export class ObjectConstructionApi {
    private api: ObservableConstructionApi

    public constructor(configuration: Configuration, requestFactory?: ConstructionApiRequestFactory, responseProcessor?: ConstructionApiResponseProcessor) {
        this.api = new ObservableConstructionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Combine creates a network-specific transaction from an unsigned transaction and an array of provided signatures. The signed transaction returned from this method will be sent to the `/construction/submit` endpoint by the caller.
     * Create Network Transaction from Signatures
     * @param param the request object
     */
    public constructionCombine(param: ConstructionApiConstructionCombineRequest, options?: Configuration): Promise<ConstructionCombineResponse> {
        return this.api.constructionCombine(param.constructionCombineRequest,  options).toPromise();
    }

    /**
     * Derive returns the AccountIdentifier associated with a public key. Blockchains that require an on-chain action to create an account should not implement this method.
     * Derive an AccountIdentifier from a PublicKey
     * @param param the request object
     */
    public constructionDerive(param: ConstructionApiConstructionDeriveRequest, options?: Configuration): Promise<ConstructionDeriveResponse> {
        return this.api.constructionDerive(param.constructionDeriveRequest,  options).toPromise();
    }

    /**
     * TransactionHash returns the network-specific transaction hash for a signed transaction.
     * Get the Hash of a Signed Transaction
     * @param param the request object
     */
    public constructionHash(param: ConstructionApiConstructionHashRequest, options?: Configuration): Promise<TransactionIdentifierResponse> {
        return this.api.constructionHash(param.constructionHashRequest,  options).toPromise();
    }

    /**
     * Get any information required to construct a transaction for a specific network. Metadata returned here could be a recent hash to use, an account sequence number, or even arbitrary chain state. The request used when calling this endpoint is created by calling `/construction/preprocess` in an offline environment. You should NEVER assume that the request sent to this endpoint will be created by the caller or populated with any custom parameters. This must occur in `/construction/preprocess`. It is important to clarify that this endpoint should not pre-construct any transactions for the client (this should happen in `/construction/payloads`). This endpoint is left purposely unstructured because of the wide scope of metadata that could be required.
     * Get Metadata for Transaction Construction
     * @param param the request object
     */
    public constructionMetadata(param: ConstructionApiConstructionMetadataRequest, options?: Configuration): Promise<ConstructionMetadataResponse> {
        return this.api.constructionMetadata(param.constructionMetadataRequest,  options).toPromise();
    }

    /**
     * Parse is called on both unsigned and signed transactions to understand the intent of the formulated transaction. This is run as a sanity check before signing (after `/construction/payloads`) and before broadcast (after `/construction/combine`). 
     * Parse a Transaction
     * @param param the request object
     */
    public constructionParse(param: ConstructionApiConstructionParseRequest, options?: Configuration): Promise<ConstructionParseResponse> {
        return this.api.constructionParse(param.constructionParseRequest,  options).toPromise();
    }

    /**
     * Payloads is called with an array of operations and the response from `/construction/metadata`. It returns an unsigned transaction blob and a collection of payloads that must be signed by particular AccountIdentifiers using a certain SignatureType. The array of operations provided in transaction construction often times can not specify all \"effects\" of a transaction (consider invoked transactions in Ethereum). However, they can deterministically specify the \"intent\" of the transaction, which is sufficient for construction. For this reason, parsing the corresponding transaction in the Data API (when it lands on chain) will contain a superset of whatever operations were provided during construction.
     * Generate an Unsigned Transaction and Signing Payloads
     * @param param the request object
     */
    public constructionPayloads(param: ConstructionApiConstructionPayloadsRequest, options?: Configuration): Promise<ConstructionPayloadsResponse> {
        return this.api.constructionPayloads(param.constructionPayloadsRequest,  options).toPromise();
    }

    /**
     * Preprocess is called prior to `/construction/payloads` to construct a request for any metadata that is needed for transaction construction given (i.e. account nonce). The `options` object returned from this endpoint will be sent to the `/construction/metadata` endpoint UNMODIFIED by the caller (in an offline execution environment). If your Construction API implementation has configuration options, they MUST be specified in the `/construction/preprocess` request (in the `metadata` field).
     * Create a Request to Fetch Metadata
     * @param param the request object
     */
    public constructionPreprocess(param: ConstructionApiConstructionPreprocessRequest, options?: Configuration): Promise<ConstructionPreprocessResponse> {
        return this.api.constructionPreprocess(param.constructionPreprocessRequest,  options).toPromise();
    }

    /**
     * Submit a pre-signed transaction to the node. This call should not block on the transaction being included in a block. Rather, it should return immediately with an indication of whether or not the transaction was included in the mempool. The transaction submission response should only return a 200 status if the submitted transaction could be included in the mempool. Otherwise, it should return an error.
     * Submit a Signed Transaction
     * @param param the request object
     */
    public constructionSubmit(param: ConstructionApiConstructionSubmitRequest, options?: Configuration): Promise<TransactionIdentifierResponse> {
        return this.api.constructionSubmit(param.constructionSubmitRequest,  options).toPromise();
    }

}

import { ObservableEventsApi } from "./ObservableAPI";
import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";

export interface EventsApiEventsBlocksRequest {
    /**
     * 
     * @type EventsBlocksRequest
     * @memberof EventsApieventsBlocks
     */
    eventsBlocksRequest: EventsBlocksRequest
}

export class ObjectEventsApi {
    private api: ObservableEventsApi

    public constructor(configuration: Configuration, requestFactory?: EventsApiRequestFactory, responseProcessor?: EventsApiResponseProcessor) {
        this.api = new ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * `/events/blocks` allows the caller to query a sequence of BlockEvents indicating which blocks were added and removed from storage to reach the current state. Following BlockEvents allows lightweight clients to update their state without needing to implement their own syncing logic (like finding the common parent in a reorg). `/events/blocks` is considered an \"indexer\" endpoint and Rosetta implementations are not required to complete it to adhere to the Rosetta spec. However, any Rosetta \"indexer\" MUST support this endpoint.
     * [INDEXER] Get a range of BlockEvents
     * @param param the request object
     */
    public eventsBlocks(param: EventsApiEventsBlocksRequest, options?: Configuration): Promise<EventsBlocksResponse> {
        return this.api.eventsBlocks(param.eventsBlocksRequest,  options).toPromise();
    }

}

import { ObservableMempoolApi } from "./ObservableAPI";
import { MempoolApiRequestFactory, MempoolApiResponseProcessor} from "../apis/MempoolApi";

export interface MempoolApiMempoolRequest {
    /**
     * 
     * @type NetworkRequest
     * @memberof MempoolApimempool
     */
    networkRequest: NetworkRequest
}

export interface MempoolApiMempoolTransactionRequest {
    /**
     * 
     * @type MempoolTransactionRequest
     * @memberof MempoolApimempoolTransaction
     */
    mempoolTransactionRequest: MempoolTransactionRequest
}

export class ObjectMempoolApi {
    private api: ObservableMempoolApi

    public constructor(configuration: Configuration, requestFactory?: MempoolApiRequestFactory, responseProcessor?: MempoolApiResponseProcessor) {
        this.api = new ObservableMempoolApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all Transaction Identifiers in the mempool
     * Get All Mempool Transactions
     * @param param the request object
     */
    public mempool(param: MempoolApiMempoolRequest, options?: Configuration): Promise<MempoolResponse> {
        return this.api.mempool(param.networkRequest,  options).toPromise();
    }

    /**
     * Get a transaction in the mempool by its Transaction Identifier. This is a separate request than fetching a block transaction (/block/transaction) because some blockchain nodes need to know that a transaction query is for something in the mempool instead of a transaction in a block. Transactions may not be fully parsable until they are in a block (ex: may not be possible to determine the fee to pay before a transaction is executed). On this endpoint, it is ok that returned transactions are only estimates of what may actually be included in a block.
     * Get a Mempool Transaction
     * @param param the request object
     */
    public mempoolTransaction(param: MempoolApiMempoolTransactionRequest, options?: Configuration): Promise<MempoolTransactionResponse> {
        return this.api.mempoolTransaction(param.mempoolTransactionRequest,  options).toPromise();
    }

}

import { ObservableNetworkApi } from "./ObservableAPI";
import { NetworkApiRequestFactory, NetworkApiResponseProcessor} from "../apis/NetworkApi";

export interface NetworkApiNetworkListRequest {
    /**
     * 
     * @type MetadataRequest
     * @memberof NetworkApinetworkList
     */
    metadataRequest: MetadataRequest
}

export interface NetworkApiNetworkOptionsRequest {
    /**
     * 
     * @type NetworkRequest
     * @memberof NetworkApinetworkOptions
     */
    networkRequest: NetworkRequest
}

export interface NetworkApiNetworkStatusRequest {
    /**
     * 
     * @type NetworkRequest
     * @memberof NetworkApinetworkStatus
     */
    networkRequest: NetworkRequest
}

export class ObjectNetworkApi {
    private api: ObservableNetworkApi

    public constructor(configuration: Configuration, requestFactory?: NetworkApiRequestFactory, responseProcessor?: NetworkApiResponseProcessor) {
        this.api = new ObservableNetworkApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint returns a list of NetworkIdentifiers that the Rosetta server supports.
     * Get List of Available Networks
     * @param param the request object
     */
    public networkList(param: NetworkApiNetworkListRequest, options?: Configuration): Promise<NetworkListResponse> {
        return this.api.networkList(param.metadataRequest,  options).toPromise();
    }

    /**
     * This endpoint returns the version information and allowed network-specific types for a NetworkIdentifier. Any NetworkIdentifier returned by /network/list should be accessible here. Because options are retrievable in the context of a NetworkIdentifier, it is possible to define unique options for each network.
     * Get Network Options
     * @param param the request object
     */
    public networkOptions(param: NetworkApiNetworkOptionsRequest, options?: Configuration): Promise<NetworkOptionsResponse> {
        return this.api.networkOptions(param.networkRequest,  options).toPromise();
    }

    /**
     * This endpoint returns the current status of the network requested. Any NetworkIdentifier returned by /network/list should be accessible here.
     * Get Network Status
     * @param param the request object
     */
    public networkStatus(param: NetworkApiNetworkStatusRequest, options?: Configuration): Promise<NetworkStatusResponse> {
        return this.api.networkStatus(param.networkRequest,  options).toPromise();
    }

}

import { ObservableSearchApi } from "./ObservableAPI";
import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";

export interface SearchApiSearchTransactionsRequest {
    /**
     * 
     * @type SearchTransactionsRequest
     * @memberof SearchApisearchTransactions
     */
    searchTransactionsRequest: SearchTransactionsRequest
}

export class ObjectSearchApi {
    private api: ObservableSearchApi

    public constructor(configuration: Configuration, requestFactory?: SearchApiRequestFactory, responseProcessor?: SearchApiResponseProcessor) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * `/search/transactions` allows the caller to search for transactions that meet certain conditions. Some conditions include matching a transaction hash, containing an operation with a certain status, or containing an operation that affects a certain account. `/search/transactions` is considered an \"indexer\" endpoint and Rosetta implementations are not required to complete it to adhere to the Rosetta spec. However, any Rosetta \"indexer\" MUST support this endpoint.
     * [INDEXER] Search for Transactions
     * @param param the request object
     */
    public searchTransactions(param: SearchApiSearchTransactionsRequest, options?: Configuration): Promise<SearchTransactionsResponse> {
        return this.api.searchTransactions(param.searchTransactionsRequest,  options).toPromise();
    }

}
