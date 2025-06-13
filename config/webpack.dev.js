// config/webpack.dev.js
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true,
    port: 3000,
    proxy: [{
      context: ['/api'], // Массив путей для прокси
      target: 'http://localhost:3001',
      changeOrigin: true
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});