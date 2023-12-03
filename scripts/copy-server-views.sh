#!/usr/bin/env bash

viewsPath="./server/src/views"
distViewsPath="./dist/server/views"
if test -d ${viewsPath}; then
  cp -r ${viewsPath} ${distViewsPath}
fi
