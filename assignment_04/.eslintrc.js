module.exports = {
  env: {
    browser: false,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:jest/recommended'],
  rules: {
    // Define your own rules, for example:
    'no-unused-vars': 'warn',
    'no-console': 'off',
    // and more based on your coding standards
  },
};
