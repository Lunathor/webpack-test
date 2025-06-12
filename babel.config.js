module.exports = {
  presets: [
    ['@babel/preset-env', {
      modules: 'commonjs' // Оставляем require/exports
    }]
  ]
};