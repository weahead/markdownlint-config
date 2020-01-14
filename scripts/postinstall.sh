#!/bin/sh

if [ ! -f "${INIT_CWD}/.markdownlint.json" ]; then
  echo '{\n  "extends": ["@weahead/markdownlint-config"]\n}' > "${INIT_CWD}/.markdownlint.json"
fi
