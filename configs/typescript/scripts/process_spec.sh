#!/bin/bash

set -o nounset
set -o errexit
set -o pipefail

spec_file=$1
sed_iflag=(-i'')

# Rename "Error" -> "ErrorResponse"
sed "${sed_iflag[@]}" "s#"'"Error"'"#"'"ErrorResponse"'"#g" "${spec_file}";
sed "${sed_iflag[@]}" "s#mas\/Error#mas\/ErrorResponse#g" "${spec_file}";

# rename "Case" -> "StringCasing"
sed "${sed_iflag[@]}" "s#"'"Case"'"#"'"StringCasing"'"#g" "${spec_file}";
sed "${sed_iflag[@]}" "s#mas\/Case#mas\/StringCasing#g" "${spec_file}";

# remove invalid null entry from "SringCasing" enum
echo $(cat $spec_file | jq "(. | .components.schemas.StringCasing.enum = .components.schemas.StringCasing.enum - [null])") > $spec_file

