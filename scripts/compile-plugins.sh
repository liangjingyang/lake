#!/bin/sh
for PLUG in $(find plugins/* -maxdepth 0 -type d -not -name core -not -empty); do
  NAME=$(basename $PLUG)
  echo $PLUG/$NAME
  go build -buildmode=plugin "$@" -o bin/plugins/$NAME.so $PLUG/*.go
done
