#!/bin/bash

set -o nounset
set -o errexit
set -o pipefail

while getopts ":l:" opt; do
  case "$opt" in
    l)
      lang="${OPTARG}"
    ;;
    :)
      echo "option is missing required argument: '-${OPTARG}' (language)"
      exit 1
    ;;
    ?)
      echo "unrecognised option: '-${OPTARG}'"
    ;;
  esac
done

# Run the provided sh script with args if it exists
run_if_exists() {
  if [ -f "$1" ]; then
    "$1" ${@:2}
  fi
}

out_dir="clients/${lang}"
cfg_dir="configs/${lang}"
scripts_dir="configs/${lang}/scripts"

git_user_id=wallet-ex
git_repo_id=rosetta-api-clients

cfg_file="${cfg_dir}/config.yaml"
cfg_flag="" && [[ -f $cfg_file ]] && cfg_flag="-c ${cfg_file}"
templates_dir="${cfg_dir}/templates"
templates_flag="" && [[ -d $templates_dir ]] && templates_flag="-t $templates_dir"

# before generate script hook
spec_sha="006676fde3ac8c544a0b526448eb6c54c4f567c8"
spec="https://raw.githubusercontent.com/coinbase/rosetta-specifications/${spec_sha}/api.json"
spec_file="${cfg_dir}/api.json"

echo "downloading spec ${spec} to ${spec_file}"
curl "${spec}" --output "${spec_file}"

run_if_exists "${scripts_dir}/process_spec.sh" "${PWD}/${spec_file}"

generator_version=$(cat "${cfg_dir}/gen_version")

echo "using openapi generator version ${generator_version}"

docker run --user "$(id -u):$(id -g)" --rm -v $(pwd):/local --workdir /local \
openapitools/openapi-generator-cli:${generator_version} generate \
-v \
-i $spec_file \
-g $lang \
-o $out_dir \
--git-user-id ${git_user_id} \
--git-repo-id ${git_repo_id} \
$cfg_flag \
$templates_flag;

rm ${spec_file}

rm ${out_dir}/git_push.sh

# after generate script hook
# build script hook
# publish script hook
