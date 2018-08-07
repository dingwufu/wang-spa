// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint', // 放在外面 import()生效
  parserOptions: {
    // sourceType: 'module',
    allowImportExportEverywhere: true
  },
  plugins: ["import"],
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
    // "eslint-config-airbnb",
  ],
  // add your custom rules here
  rules : {
    // allow async-await
    'generator-star-spacing': 'off',
    'semi': ['error', 'always'], // 分号
    "radix": 2, // parseInt必须指定第二个参数
    "comma-dangle": ["error", "always-multiline"],
    "no-trailing-spaces": [
      "error",
      {"skipBlankLines": true}
    ],
  }
}
