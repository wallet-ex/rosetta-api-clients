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

import { HttpFile } from '../http/http';

/**
* SignatureType is the type of a cryptographic signature. clients codegen.sh configs test.ts ecdsa: `r (32-bytes) || s (32-bytes)` - `64 bytes` clients codegen.sh configs test.ts ecdsa_recovery: `r (32-bytes) || s (32-bytes) || v (1-byte)` - `65 bytes` clients codegen.sh configs test.ts ed25519: `R (32-byte) || s (32-bytes)` - `64 bytes` clients codegen.sh configs test.ts schnorr_1: `r (32-bytes) || s (32-bytes)` - `64 bytes` (schnorr signature implemented by Zilliqa where both `r` and `s` are scalars encoded as `32-bytes` values, most significant byte first.) clients codegen.sh configs test.ts schnorr_poseidon: `r (32-bytes) || s (32-bytes)` where s = Hash(1st pk || 2nd pk || r) - `64 bytes` (schnorr signature w/ Poseidon hash function implemented by O(1) Labs where both `r` and `s` are scalars encoded as `32-bytes` values, least significant byte first. https://github.com/CodaProtocol/signer-reference/blob/master/schnorr.ml )
*/
export type SignatureType = "ecdsa" | "ecdsa_recovery" | "ed25519" | "schnorr_1" | "schnorr_poseidon" ;
