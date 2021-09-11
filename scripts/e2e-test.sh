#!/bin/sh
./scripts/compile-plugins.sh
./scripts/export-env.sh
go test -v ./test/...
