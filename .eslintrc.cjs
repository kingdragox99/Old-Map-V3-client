/* eslint-env node */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "prettier",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  plugins: ["prettier"],
  rules: {
    camelcase: 0,
    "@typescript-eslint/no-unused-vars": 0,
    "vue/multi-word-component-names": 0,
  },
};
