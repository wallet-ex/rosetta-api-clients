# rosettaApi.ConstructionApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**constructionCombine**](ConstructionApi.md#constructionCombine) | **POST** /construction/combine | Create Network Transaction from Signatures
[**constructionDerive**](ConstructionApi.md#constructionDerive) | **POST** /construction/derive | Derive an AccountIdentifier from a PublicKey
[**constructionHash**](ConstructionApi.md#constructionHash) | **POST** /construction/hash | Get the Hash of a Signed Transaction
[**constructionMetadata**](ConstructionApi.md#constructionMetadata) | **POST** /construction/metadata | Get Metadata for Transaction Construction
[**constructionParse**](ConstructionApi.md#constructionParse) | **POST** /construction/parse | Parse a Transaction
[**constructionPayloads**](ConstructionApi.md#constructionPayloads) | **POST** /construction/payloads | Generate an Unsigned Transaction and Signing Payloads
[**constructionPreprocess**](ConstructionApi.md#constructionPreprocess) | **POST** /construction/preprocess | Create a Request to Fetch Metadata
[**constructionSubmit**](ConstructionApi.md#constructionSubmit) | **POST** /construction/submit | Submit a Signed Transaction


# **constructionCombine**
> ConstructionCombineResponse constructionCombine(constructionCombineRequest)

Combine creates a network-specific transaction from an unsigned transaction and an array of provided signatures. The signed transaction returned from this method will be sent to the `/construction/submit` endpoint by the caller.

### Example


```typescript
import * as rosettaApi from '@wallet-ex/rosetta-api-client';
import * as fs from 'fs';

const configuration = rosettaApi.createConfiguration();
const apiInstance = new rosettaApi.ConstructionApi(configuration);

let body:rosettaApi.ConstructionApiConstructionCombineRequest = {
  // ConstructionCombineRequest
  constructionCombineRequest: {
    networkIdentifier: {
      blockchain: "bitcoin",
      network: "mainnet",
      subNetworkIdentifier: {
        network: "shard 1",
        metadata: {},
      },
    },
    unsignedTransaction: "unsignedTransaction_example",
    signatures: [
      {
        signingPayload: {
          address: "address_example",
          accountIdentifier: {
            address: "0x3a065000ab4183c6bf581dc1e55a605455fc6d61",
            subAccount: {
              address: "0x6b175474e89094c44da98b954eedeac495271d0f",
              metadata: {},
            },
            metadata: {},
          },
          hexBytes: "hexBytes_example",
          signatureType: "ecdsa",
        },
        publicKey: {
          hexBytes: "hexBytes_example",
          curveType: "secp256k1",
        },
        signatureType: "ecdsa",
        hexBytes: "hexBytes_example",
      },
    ],
  },
};

apiInstance.constructionCombine(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **constructionCombineRequest** | **ConstructionCombineRequest**|  |


### Return type

**ConstructionCombineResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected response to a valid request |  -  |
**500** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **constructionDerive**
> ConstructionDeriveResponse constructionDerive(constructionDeriveRequest)

Derive returns the AccountIdentifier associated with a public key. Blockchains that require an on-chain action to create an account should not implement this method.

### Example


```typescript
import * as rosettaApi from '@wallet-ex/rosetta-api-client';
import * as fs from 'fs';

const configuration = rosettaApi.createConfiguration();
const apiInstance = new rosettaApi.ConstructionApi(configuration);

let body:rosettaApi.ConstructionApiConstructionDeriveRequest = {
  // ConstructionDeriveRequest
  constructionDeriveRequest: {
    networkIdentifier: {
      blockchain: "bitcoin",
      network: "mainnet",
      subNetworkIdentifier: {
        network: "shard 1",
        metadata: {},
      },
    },
    publicKey: {
      hexBytes: "hexBytes_example",
      curveType: "secp256k1",
    },
    metadata: {},
  },
};

apiInstance.constructionDerive(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **constructionDeriveRequest** | **ConstructionDeriveRequest**|  |


### Return type

**ConstructionDeriveResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected response to a valid request |  -  |
**500** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **constructionHash**
> TransactionIdentifierResponse constructionHash(constructionHashRequest)

TransactionHash returns the network-specific transaction hash for a signed transaction.

### Example


```typescript
import * as rosettaApi from '@wallet-ex/rosetta-api-client';
import * as fs from 'fs';

const configuration = rosettaApi.createConfiguration();
const apiInstance = new rosettaApi.ConstructionApi(configuration);

let body:rosettaApi.ConstructionApiConstructionHashRequest = {
  // ConstructionHashRequest
  constructionHashRequest: {
    networkIdentifier: {
      blockchain: "bitcoin",
      network: "mainnet",
      subNetworkIdentifier: {
        network: "shard 1",
        metadata: {},
      },
    },
    signedTransaction: "signedTransaction_example",
  },
};

apiInstance.constructionHash(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **constructionHashRequest** | **ConstructionHashRequest**|  |


### Return type

**TransactionIdentifierResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected response to a valid request |  -  |
**500** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **constructionMetadata**
> ConstructionMetadataResponse constructionMetadata(constructionMetadataRequest)

Get any information required to construct a transaction for a specific network. Metadata returned here could be a recent hash to use, an account sequence number, or even arbitrary chain state. The request used when calling this endpoint is created by calling `/construction/preprocess` in an offline environment. You should NEVER assume that the request sent to this endpoint will be created by the caller or populated with any custom parameters. This must occur in `/construction/preprocess`. It is important to clarify that this endpoint should not pre-construct any transactions for the client (this should happen in `/construction/payloads`). This endpoint is left purposely unstructured because of the wide scope of metadata that could be required.

### Example


```typescript
import * as rosettaApi from '@wallet-ex/rosetta-api-client';
import * as fs from 'fs';

const configuration = rosettaApi.createConfiguration();
const apiInstance = new rosettaApi.ConstructionApi(configuration);

let body:rosettaApi.ConstructionApiConstructionMetadataRequest = {
  // ConstructionMetadataRequest
  constructionMetadataRequest: {
    networkIdentifier: {
      blockchain: "bitcoin",
      network: "mainnet",
      subNetworkIdentifier: {
        network: "shard 1",
        metadata: {},
      },
    },
    options: {},
    publicKeys: [
      {
        hexBytes: "hexBytes_example",
        curveType: "secp256k1",
      },
    ],
  },
};

apiInstance.constructionMetadata(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **constructionMetadataRequest** | **ConstructionMetadataRequest**|  |


### Return type

**ConstructionMetadataResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected response to a valid request |  -  |
**500** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **constructionParse**
> ConstructionParseResponse constructionParse(constructionParseRequest)

Parse is called on both unsigned and signed transactions to understand the intent of the formulated transaction. This is run as a sanity check before signing (after `/construction/payloads`) and before broadcast (after `/construction/combine`). 

### Example


```typescript
import * as rosettaApi from '@wallet-ex/rosetta-api-client';
import * as fs from 'fs';

const configuration = rosettaApi.createConfiguration();
const apiInstance = new rosettaApi.ConstructionApi(configuration);

let body:rosettaApi.ConstructionApiConstructionParseRequest = {
  // ConstructionParseRequest
  constructionParseRequest: {
    networkIdentifier: {
      blockchain: "bitcoin",
      network: "mainnet",
      subNetworkIdentifier: {
        network: "shard 1",
        metadata: {},
      },
    },
    signed: true,
    transaction: "transaction_example",
  },
};

apiInstance.constructionParse(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **constructionParseRequest** | **ConstructionParseRequest**|  |


### Return type

**ConstructionParseResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected response to a valid request |  -  |
**500** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **constructionPayloads**
> ConstructionPayloadsResponse constructionPayloads(constructionPayloadsRequest)

Payloads is called with an array of operations and the response from `/construction/metadata`. It returns an unsigned transaction blob and a collection of payloads that must be signed by particular AccountIdentifiers using a certain SignatureType. The array of operations provided in transaction construction often times can not specify all \"effects\" of a transaction (consider invoked transactions in Ethereum). However, they can deterministically specify the \"intent\" of the transaction, which is sufficient for construction. For this reason, parsing the corresponding transaction in the Data API (when it lands on chain) will contain a superset of whatever operations were provided during construction.

### Example


```typescript
import * as rosettaApi from '@wallet-ex/rosetta-api-client';
import * as fs from 'fs';

const configuration = rosettaApi.createConfiguration();
const apiInstance = new rosettaApi.ConstructionApi(configuration);

let body:rosettaApi.ConstructionApiConstructionPayloadsRequest = {
  // ConstructionPayloadsRequest
  constructionPayloadsRequest: {
    networkIdentifier: {
      blockchain: "bitcoin",
      network: "mainnet",
      subNetworkIdentifier: {
        network: "shard 1",
        metadata: {},
      },
    },
    operations: [
      {
        operationIdentifier: {
          index: 5,
          networkIndex: 0,
        },
        relatedOperations: [
          {
            index: 5,
            networkIndex: 0,
          },
        ],
        type: "Transfer",
        status: "Reverted",
        account: {
          address: "0x3a065000ab4183c6bf581dc1e55a605455fc6d61",
          subAccount: {
            address: "0x6b175474e89094c44da98b954eedeac495271d0f",
            metadata: {},
          },
          metadata: {},
        },
        amount: {
          value: "1238089899992",
          currency: {
            symbol: "BTC",
            decimals: 8,
            metadata: {},
          },
          metadata: {},
        },
        coinChange: {
          coinIdentifier: {
            identifier: "0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f:1",
          },
          coinAction: "coin_created",
        },
        metadata: {},
      },
    ],
    metadata: {},
    publicKeys: [
      {
        hexBytes: "hexBytes_example",
        curveType: "secp256k1",
      },
    ],
  },
};

apiInstance.constructionPayloads(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **constructionPayloadsRequest** | **ConstructionPayloadsRequest**|  |


### Return type

**ConstructionPayloadsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected response to a valid request |  -  |
**500** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **constructionPreprocess**
> ConstructionPreprocessResponse constructionPreprocess(constructionPreprocessRequest)

Preprocess is called prior to `/construction/payloads` to construct a request for any metadata that is needed for transaction construction given (i.e. account nonce). The `options` object returned from this endpoint will be sent to the `/construction/metadata` endpoint UNMODIFIED by the caller (in an offline execution environment). If your Construction API implementation has configuration options, they MUST be specified in the `/construction/preprocess` request (in the `metadata` field).

### Example


```typescript
import * as rosettaApi from '@wallet-ex/rosetta-api-client';
import * as fs from 'fs';

const configuration = rosettaApi.createConfiguration();
const apiInstance = new rosettaApi.ConstructionApi(configuration);

let body:rosettaApi.ConstructionApiConstructionPreprocessRequest = {
  // ConstructionPreprocessRequest
  constructionPreprocessRequest: {
    networkIdentifier: {
      blockchain: "bitcoin",
      network: "mainnet",
      subNetworkIdentifier: {
        network: "shard 1",
        metadata: {},
      },
    },
    operations: [
      {
        operationIdentifier: {
          index: 5,
          networkIndex: 0,
        },
        relatedOperations: [
          {
            index: 5,
            networkIndex: 0,
          },
        ],
        type: "Transfer",
        status: "Reverted",
        account: {
          address: "0x3a065000ab4183c6bf581dc1e55a605455fc6d61",
          subAccount: {
            address: "0x6b175474e89094c44da98b954eedeac495271d0f",
            metadata: {},
          },
          metadata: {},
        },
        amount: {
          value: "1238089899992",
          currency: {
            symbol: "BTC",
            decimals: 8,
            metadata: {},
          },
          metadata: {},
        },
        coinChange: {
          coinIdentifier: {
            identifier: "0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f:1",
          },
          coinAction: "coin_created",
        },
        metadata: {},
      },
    ],
    metadata: {},
    maxFee: [
      {
        value: "1238089899992",
        currency: {
          symbol: "BTC",
          decimals: 8,
          metadata: {},
        },
        metadata: {},
      },
    ],
    suggestedFeeMultiplier: 0,
  },
};

apiInstance.constructionPreprocess(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **constructionPreprocessRequest** | **ConstructionPreprocessRequest**|  |


### Return type

**ConstructionPreprocessResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected response to a valid request |  -  |
**500** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **constructionSubmit**
> TransactionIdentifierResponse constructionSubmit(constructionSubmitRequest)

Submit a pre-signed transaction to the node. This call should not block on the transaction being included in a block. Rather, it should return immediately with an indication of whether or not the transaction was included in the mempool. The transaction submission response should only return a 200 status if the submitted transaction could be included in the mempool. Otherwise, it should return an error.

### Example


```typescript
import * as rosettaApi from '@wallet-ex/rosetta-api-client';
import * as fs from 'fs';

const configuration = rosettaApi.createConfiguration();
const apiInstance = new rosettaApi.ConstructionApi(configuration);

let body:rosettaApi.ConstructionApiConstructionSubmitRequest = {
  // ConstructionSubmitRequest
  constructionSubmitRequest: {
    networkIdentifier: {
      blockchain: "bitcoin",
      network: "mainnet",
      subNetworkIdentifier: {
        network: "shard 1",
        metadata: {},
      },
    },
    signedTransaction: "signedTransaction_example",
  },
};

apiInstance.constructionSubmit(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **constructionSubmitRequest** | **ConstructionSubmitRequest**|  |


### Return type

**TransactionIdentifierResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected response to a valid request |  -  |
**500** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

