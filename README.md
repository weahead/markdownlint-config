# @weahead/markdownlint-config

[We aheads](https://www.weahead.se/) markdownlint config.

## Install

`npx install-peerdeps -d -x '-E' @weahead/markdownlint-config`

### Usage

1. Create a file named `.markdownlint.json` and fill it with:

   ```json
   {
     "extends": "./node_modules/@weahead/markdownlint-config/index.json"
   }
   ```

2. Optionally, add a run target to `scripts` in `package.json`:

   ```json
   {
     "scripts": {
       "lint:md": "markdownlint *.md"
     }
   }
   ```

## License

[X11](LICENSE)
