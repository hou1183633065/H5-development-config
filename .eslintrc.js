module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ["plugin:vue/recommended", "@vue/prettier"],

  parserOptions: {
    parser: "babel-eslint"
  },

  rules: {
    "no-console": "off",
    "no-debugger": "error",
    "vue/no-async-in-computed-properties": "warning",
    "vue/no-dupe-keys": "off",
    "no-unused-vars": "off",
    "vue/require-default-prop": "off",
    "no-inner-declarations": "off",
    "no-undef": "off"
  }
};
