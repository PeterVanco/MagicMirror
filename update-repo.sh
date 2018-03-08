#!/bin/bash -e

pushd "$(dirname "$0")"

    git fetch
    git pull --rebase
    git submodule update --rebase

popd
