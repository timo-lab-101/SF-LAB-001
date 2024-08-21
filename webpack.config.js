const path = require('path');

module.exports = {
  entry: './src/index.js',  // 项目的入口文件
  output: {
    filename: '[name].[contenthash].js',  // 输出文件名带有内容哈希
    path: path.resolve(__dirname, 'dist'),  // 输出路径
    clean: true,  // 每次构建前清理输出目录
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // 处理 .js 文件
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // 使用 Babel 转换 ES6+ 语法
        },
      },
      {
        test: /\.css$/,  // 处理 .css 文件
        use: ['style-loader', 'css-loader'],  // 使用 style-loader 和 css-loader
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 244000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
};