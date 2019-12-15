const path = require('path');
const webpack = require('webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const library = '[name]_library';

module.exports = {
  mode: 'production',
  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-router-dom'
    ]
  },
  output: {
    path: path.join(__dirname, '../static/js'),
    filename: '[name]_library_[chunkhash].js',
    library, // 全局变量名 var vendor_library = function() { react + react-dom + ...  }
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../static/json/[name]-manifest.json'),
      name: library,
      context: path.join(__dirname, '..')
    })
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
