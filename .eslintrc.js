module.exports = {
  root: false,
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
  },
  extends: ['airbnb-base'],
  rules: {
    camelcase: 'off',
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'func-names': 'off',
    'import/extensions': 'off',
  },
};
