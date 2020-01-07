# @weahead/markdownlint-config

[We aheads](https://www.weahead.se/) markdownlint config.

## Install

This config and its dependencies are included in We ahead's tooling packages and don't need to be installed in new We ahead projects. Instead use one of the tooling packages that have all configs and dependencies needed for its use.

- For **non-React** projects use [@weahead/tooling](https://github.com/weahead/tooling)
- For **React** projects use [@weahead/tooling-react](https://github.com/weahead/tooling-react)

### Install the config by its own

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
