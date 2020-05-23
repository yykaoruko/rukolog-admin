module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // より厳しいルールにするには`plugin:vue/strongly-recommended` もしくは `plugin:vue/recommended` に切り替えることを検討してください。
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    '@nuxtjs/eslint-config-typescript',
  ],
  // *.vue ファイルを lint にかけるために必要
  plugins: ['vue'],
  rules: {
    'comma-dangle': 'off',
    semi: 'off',
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': ['error', { semi: true, singleQuote: true }],
  },
};
