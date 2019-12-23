const path = require('path');
const Os = require('os');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { dllScript } = require('./config');

module.exports = {
  entry: {
    app: path.join(__dirname, '../src/index.tsx')
  },
  output: {
    path: path.join(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.join(__dirname, '../src'),
        exclude: path.join(__dirname, '../node_modules'),
        use: [
          'cache-loader', // npm -> https://www.npmjs.com/package/cache-loader
          {
            loader: 'thread-loader', // npm -> https://www.npmjs.com/package/thread-loader
            options: {
              workers: Os.cpus().length - 1,
              poolTimeout: Infinity
            }
          },
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
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name]-[contenthash].[ext]',
            limit: 500,
            outputPath: 'images',
          }
        }]
      },
      // {
      //   test: /\.(js|jsx)$/,
      //   include: path.join(__dirname, '../src'),
      //   exclude: path.join(__dirname, '../node_modules'),
      //   use: [
      //     {
      //       loader: 'babel-loader', // https://babeljs.io/docs/en/usage
      //       options: {
      //         babelrc: false, // 不读取.babelrc文件
      //         configFile: path.join(__dirname, '../babel/index.tsx') // 引用配置文件
      //       }
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      dllScript,
      filename: 'index.html',
      title: '体育资讯',
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
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, '../static'),
        to: path.join(__dirname, '../dist')
      }
    ]),
    new ForkTsCheckerWebpackPlugin(),
    // new BundleAnalyzerPlugin({ // 可视化工具 http://127.0.0.1:8888
    //   analyzerMode: 'server',
    //   analyzerHost: '127.0.0.1',
    //   analyzerPort: 7788,
    //   reportFilename: 'report.html',
    //   defaultSizes: 'parsed',
    //   openAnalyzer: true,
    //   generateStatsFile: false,
    //   statsFilename: 'stats.json',
    //   logLevel: 'info'
    // })
  ]
};
