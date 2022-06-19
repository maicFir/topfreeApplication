module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'airbnb-base',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },

  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'no-unused-vars': 0,
    'object-curly-newline': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'class-methods-use-this': 0,
    'vue/html-self-closing': 0,
    'vue/max-attributes-per-line': 0,
    'no-shadow': 0,
    'max-len': 0,
    'no-restricted-syntax': 0,
    'implicit-arrow-linebreak': 0,
    'consistent-return': 0,
    'comma-dangle': 0,
  },
};
