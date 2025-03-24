#!/usr/bin/env bash
set -eu

# Copied from https://github.com/kubevirt-ui/kubevirt-api

error_handler() {
    echo "Error occurred in script at line: ${BASH_LINENO[0]}"
    echo "Command: '${BASH_COMMAND}'"
    exit 1
}

trap 'error_handler' ERR

## Fixes for bad generated code from typescript-fetch generator
## Specific for current releases

# Patch missing globalFetch type in generated files
git apply ./scripts/globalFetchFix.patch

# Patch ignoreDiscriminator
sed -i "s/ignoreDiscriminator/_ignoreDiscriminator/g" ./src/models/* 

# Patch Data type to steing conversion
sed -i "s/.toISOString()//g" ./src/models/*
sed -i "s/new Date\((json\['.*'\])\)/\1/g" ./src/models/*

