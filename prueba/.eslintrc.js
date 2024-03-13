const stylistic = require("@stylistic/eslint-plugin");

const customized = stylistic.configs.customize({
  braceStyle: "1tbs",
  commaDangle: "never",
  quotes: "double",
  semi: true
});

module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "next/core-web-vitals"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    "@stylistic"
  ],
  rules: {
    "arrow-body-style": ["warn", "as-needed"],
    "camelcase": "warn",
    "curly": "warn",
    "dot-notation": "warn",
    "eqeqeq": "error",
    "no-else-return": "warn",
    "no-eval": "error",
    "no-implied-eval": "error",
    "no-multi-assign": "error",
    "no-var": "error",
    "prefer-arrow-callback": "warn",
    "prefer-const": "warn",
    "yoda": "error",
    "@stylistic/function-call-spacing": "error",
    "@stylistic/jsx-pascal-case": "error",
    "@stylistic/linebreak-style": "error",
    "@stylistic/semi-style": "error",
    ...customized.rules
  }
};