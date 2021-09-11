#!/bin/sh
./scripts/compile-plugins.sh
./scripts/export-env.sh
go build -o lake
./lake
