# rosettaApi.SearchApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchTransactions**](SearchApi.md#searchTransactions) | **POST** /search/transactions | [INDEXER] Search for Transactions


# **searchTransactions**
> SearchTransactionsResponse searchTransactions(searchTransactionsRequest)

`/search/transactions` allows the caller to search for transactions that meet certain conditions. Some conditions include matching a transaction hash, containing an operation with a certain status, or containing an operation that affects a certain account. `/search/transactions` is considered an \"indexer\" endpoint and Rosetta implementations are not required to complete it to adhere to the Rosetta spec. However, any Rosetta \"indexer\" MUST support this endpoint.

### Example


```typescript
import * as rosettaApi from '@wallet-ex/rosetta-api-client';
import * as fs from 'fs';

const configuration = rosettaApi.createConfiguration();
const apiInstance = new rosettaApi.SearchApi(configuration);

let body:rosettaApi.SearchApiSearchTransactionsRequest = {
  // SearchTransactionsRequest
  searchTransactionsRequest: {
    networkIdentifier: {
      blockchain: "bitcoin",
      network: "mainnet",
      subNetworkIdentifier: {
        network: "shard 1",
        metadata: {},
      },
    },
    operator: "or",
    maxBlock: 5,
    offset: 5,
    limit: 5,
    transactionIdentifier: {
      hash: "0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f",
    },
    accountIdentifier: {
      address: "0x3a065000ab4183c6bf581dc1e55a605455fc6d61",
      subAccount: {
        address: "0x6b175474e89094c44da98b954eedeac495271d0f",
        metadata: {},
      },
      metadata: {},
    },
    coinIdentifier: {
      identifier: "0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f:1",
    },
    currency: {
      symbol: "BTC",
      decimals: 8,
      metadata: {},
    },
    status: "reverted",
    type: "transfer",
    address: "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
    success: true,
  },
};

apiInstance.searchTransactions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchTransactionsRequest** | **SearchTransactionsRequest**|  |


### Return type

**SearchTransactionsResponse**

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

