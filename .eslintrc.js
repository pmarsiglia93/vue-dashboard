module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    'standard',
    'prettier' // <-- adiciona isso aqui no final
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // Regras opcionais para reduzir alertas chatos:
    'space-before-function-paren': 'off',
    'no-trailing-spaces': 'off',
    'padded-blocks': 'off',
    'indent': ['error', 2], // ou 4 se preferir
  }
}
