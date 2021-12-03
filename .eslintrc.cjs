module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'semistandard'
  ],
  settings:{
    react:{
      version: 'detect'
    }
  },
  globals: {
    "_": 'readonly',
    React: 'readonly',
    ReactDOM: 'readonly',
    moment: 'readonly',
    Navigo: 'readonly',
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: false
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    "id-length": [2, {min:2, max:35}],
    "no-nested-ternary": 2,
    "no-extra-parens": ["error", "all", { "returnAssign": false }],
    "no-with": 2
  }
}