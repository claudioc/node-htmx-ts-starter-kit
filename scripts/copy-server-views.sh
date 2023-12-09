#!/usr/bin/env bash

# Tiny helper to copy server views to dist folder when building
# During dev, the server views are served from the server folder
viewsPath="server/views"
test -d ${viewsPath} && cp -r ./${viewsPath} ./dist/${viewsPath}
