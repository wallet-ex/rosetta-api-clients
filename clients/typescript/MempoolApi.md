# rosettaApi.MempoolApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mempool**](MempoolApi.md#mempool) | **POST** /mempool | Get All Mempool Transactions
[**mempoolTransaction**](MempoolApi.md#mempoolTransaction) | **POST** /mempool/transaction | Get a Mempool Transaction


# **mempool**
> MempoolResponse mempool(networkRequest)

Get all Transaction Identifiers in the mempool

### Example


```typescript
import * as rosettaApi from '@wallet-ex/rosetta-api-client';
import * as fs from 'fs';

const configuration = rosettaApi.createConfiguration();
const apiInstance = new rosettaApi.MempoolApi(configuration);

let body:rosettaApi.MempoolApiMempoolRequest = {
  // NetworkRequest
  networkRequest: {
    networkIdentifier: {
      blockchain: "bitcoin",
      network: "mainnet",
      subNetworkIdentifier: {
        network: "shard 1",
        metadata: {},
      },
    },
    metadata: {},
  },
};

apiInstance.mempool(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkRequest** | **NetworkRequest**|  |


### Return type

**MempoolResponse**

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

# **mempoolTransaction**
> MempoolTransactionResponse mempoolTransaction(mempoolTransactionRequest)

Get a transaction in the mempool by its Transaction Identifier. This is a separate request than fetching a block transaction (/block/transaction) because some blockchain nodes need to know that a transaction query is for something in the mempool instead of a transaction in a block. Transactions may not be fully parsable until they are in a block (ex: may not be possible to determine the fee to pay before a transaction is executed). On this endpoint, it is ok that returned transactions are only estimates of what may actually be included in a block.

### Example


```typescript
import * as rosettaApi from '@wallet-ex/rosetta-api-client';
import * as fs from 'fs';

const configuration = rosettaApi.createConfiguration();
const apiInstance = new rosettaApi.MempoolApi(configuration);

let body:rosettaApi.MempoolApiMempoolTransactionRequest = {
  // MempoolTransactionRequest
  mempoolTransactionRequest: {
    networkIdentifier: {
      blockchain: "bitcoin",
      network: "mainnet",
      subNetworkIdentifier: {
        network: "shard 1",
        metadata: {},
      },
    },
    transactionIdentifier: {
      hash: "0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f",
    },
  },
};

apiInstance.mempoolTransaction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mempoolTransactionRequest** | **MempoolTransactionRequest**|  |


### Return type

**MempoolTransactionResponse**

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

