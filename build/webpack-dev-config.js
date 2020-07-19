const path = require('path');
const merge = require('webpack-merge');
const webpackBase = require('./webpack-base-config');

module.exports = merge(webpackBase, {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    publicPath: '/',
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.join(__dirname, '../src'),
        exclude: path.join(__dirname, '../node_modules'),
        use: [
          'cache-loader',
          'thread-loader',
          // {
          //   loader: 'eslint-loader',
          //   options: {
          //     formatter: require('eslint-friendly-formatter'),
          //     emitWarning: true
          //   }
          // }
        ]
      }
    ],
  },
  devServer: {
    host: '0.0.0.0',
    port: 8888,
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    },
    contentBase: path.join(__dirname, '../dist'),
    historyApiFallback: {
      index: '/index.html'
    },
    proxy: {
      '/api': {
        target: 'http://yiyanxing.cn:8080/',
        pathRewrite: { '^/api': '' }
      }
    },
  }
});
