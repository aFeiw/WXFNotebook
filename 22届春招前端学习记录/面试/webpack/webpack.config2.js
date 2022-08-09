const { resolve } = require("path");

/**
 * 1.loader: 下载->使用->
 * 2.pulgins:下载->引用->使用
 */
// 引入插件;
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "built.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    //loader配置
    rules: [
      //具体配置
    ],
  },
  plugins: [
    //插件的配置
    //html-webpack-plugins
    // 功能：默认创建一个空的html，自动引入（js、css）
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  mode: "development",
};
