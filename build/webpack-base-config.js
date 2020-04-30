const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { dllScript } = require('./config');

module.exports = {
  entry: {
    app: path.join(__dirname, '../src/index.tsx')
  },
  output: {
    path: path.join(__dirname, '../dist')
  },
  externals: {
    AMap: 'AMap'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@components': path.join(__dirname, '../src/components'),
      '@config': path.join(__dirname, '../src/config'),
      '@pages': path.join(__dirname, '../src/pages'),
      '@router': path.join(__dirname, '../src/router'),
      '@store': path.join(__dirname, '../src/store'),
      '@type': path.join(__dirname, '../src/type'),
      '@assets': path.join(__dirname, '../src/assets'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.join(__dirname, '../src'),
        exclude: path.join(__dirname, '../node_modules'),
        use: [
          'cache-loader', // npm -> https://www.npmjs.com/package/cache-loader
          'thread-loader', // npm -> https://www.npmjs.com/package/thread-loader
          {
            loader: 'ts-loader', // npm -> https://www.npmjs.com/package/ts-loader
            options: {
              happyPackMode: true, // 使用多进程打包, 需要开启的当前配置, (具体看文档)
              transpileOnly: true // 禁用ts-loader上的类型检查
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: path.join(__dirname, '../node_modules'),
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        exclude: path.join(__dirname, '../node_modules'), // 排除路径,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[contenthash].[ext]',
              limit: 500,
              outputPath: 'images',
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      dllScript,
      filename: 'index.html',
      title: '博客项目类',
      template: path.join(__dirname, '../public/index.html'),
      favicon: path.join(__dirname, '../public/images/favicon.ico'),
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        'theme-color': '#4285f4'
      }
    }),
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, '..'),
      manifest: require('../static/json/vendor-manifest.json')
    }),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, '../static'),
      to: path.join(__dirname, '../dist')
    }]),
    new ForkTsCheckerWebpackPlugin(),
  ]
};
