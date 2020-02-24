const fs = require('fs');
const path = require('path');

const markdownlintPath = path.join(process.env.INIT_CWD, '.markdownlint.json');

const markdownlintConfig = {
  extends: ['@weahead/markdownlint-config'],
};

if (!fs.existsSync(markdownlintPath)) {
  fs.writeFileSync(
    markdownlintPath,
    JSON.stringify(markdownlintConfig, null, 2)
  );
}
