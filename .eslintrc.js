module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    // parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  // add your custom rules here
  rules: {
    "no-console": "off",
    "no-unused-vars": "off",
    "nuxt/no-env-in-hooks": "off",
    "implicit-arrow-linebreak": "off",
    "vue/comment-directive": 0,
  }
}
