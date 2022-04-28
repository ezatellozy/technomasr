module.exports = {
  env: {
    node: true,
    jquery: true,
    amd: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/this-in-template': 'off',

    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  },
  globals: {
    globalThis: false, // means it is not writeable
  },
}
