#!/bin/bash

# This script generates HTML, cleans it, and formats it using Prettier.

npm run create \
  | awk 'NR > 5' \
  | sed 's/className/class/g' \
  | npx prettier --stdin-filepath index.html \
  > ./public/index.html

# Check if the operation was successful
if [ $? -eq 0 ]; then
  echo "HTML generated, cleaned, and formatted successfully to ./public/index.html"
else
  echo "An error occurred during the HTML processing."
fi
