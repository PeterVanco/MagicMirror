#!/bin/bash -e

pushd "$(dirname "$0")"

    git fetch
    git pull --rebase
    git submodules update --rebase

popd
