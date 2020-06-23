module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/recommended", "@vue/standard"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-self-closing": "off"
  },
  parserOptions: {
    // parser: 'babel-eslint'
    ecmaVersion: 2018,
    sourceType: "module"
  },
  globals: {
    uni: "readonly"
  }
}
