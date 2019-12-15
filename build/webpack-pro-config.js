const merge = require('webpack-merge');
const webpackBase = require('./webpack-base-config');

module.exports = merge(webpackBase, {
  mode: 'production',
  output: {
    publicPath: './',
    filename: 'js/[name]-[chunkhash].js',
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
    splitChunks: { // 分块打包
      chunks: 'all', // 同时分割同步和异步代码
      cacheGroups: {
        vendors: { // 打包 node_modules 下的第三方包, 打入vendors.js (除按需加载的)
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          minSize: 30000, // 生成包的大小 以字节为单位
          // maxInitialRequests: 3, // 初始页面加载时并行请求的最大数量将小于或等于4 默认是3 (意思打开第一个页面的js不许超过3个请求)
          minChunks: 1,
          chunks: 'initial', // 设置为 all 会导致异步加载的库如果满足了当前 cacheGroups 的条件也会导致被打包到一起
          // priority: 1 // 该配置项是设置 cacheGroups 分组处理的优先级，数值越大越优先处理 (默认 -10)
        },
        // rcCalendarBase: { // 把 rc-calendar、moment 打入  calender-moment-base.js
        //   name: 'calender-moment-base',
        //   test: (module) => {
        //     return /rc-calendar|moment/.test(module.context)
        //   },
        //   chunks: 'initial',
        //   priority: 2, // 优先 rcCalendarBase 打包
        // },
        // commons: { // 达不到 30kb 所以先注释
        //   test: /[\\/]src[\\/]common[\\/]/,
        //   name: 'commons',
        //   minSize: 30000,
        //   minChunks: 3,
        //   chunks: 'initial',
        //   priority: 1,
        //   reuseExistingChunk: true // 这个配置允许我们使用已经存在的代码块
        // },
        // momentBase: {
        //   name: 'moment-base',
        //   test: (module) => {
        //     return /moment/.test(module.context);
        //   },
        //   chunks: 'initial',
        //   priority: 1,
        // },
      },
    },
  },
});
