module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    camelcase: 0,
    '@typescript-eslint/no-unused-vars': 0,
    'vue/multi-word-component-names': 0,
  },
};
