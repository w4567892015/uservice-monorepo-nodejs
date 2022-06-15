const path = require('path');

const rootPath = path.join(__dirname, '../../');

module.exports = {
  tags: {
    allowUnknownTags: [
      'category',
    ],
  },
  source: {
    includePattern: '.js$',
    excludePattern: '(node_modules/|docs)',
  },
  plugins: [
    'plugins/markdown',
    `${rootPath}/node_modules/better-docs/category`,
  ],
  opts: {
    encoding: 'utf8',
    destination: 'doc/js',
    readme: 'README.md',
    recurse: true,
    verbose: true,
    template: `${rootPath}/node_modules/better-docs`,
  },
  templates: {
    cleverLinks: false,
    monospaceLinks: false,
    search: true,
    'better-docs': {
      name: 'graphql-api',
      title: 'uService',
      hideGenerator: false,
    },
  },
};
