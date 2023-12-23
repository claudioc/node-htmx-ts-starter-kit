#!/usr/bin/env bash

# Extracts the release information from ../package.json to a git tag
tag_name=v$(grep -o '"version": *"[^"]*"' package.json | cut -d'"' -f4)
echo "Tagging ${tag_name}"
git tag ${tag_name}
git push origin ${tag_name}
git push
