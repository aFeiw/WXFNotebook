const { resolve } = require("path");
const path = require("path");
//引入插件
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  /**
   * 1.入口:entry
   * 2.出口:output
   * 3.loader
   * 4.pulgins
   * 5.模式：mode:
   */
  //开始打包的入口文件
  entry: "./src/index.js",
  //打包之后的文件
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  //配置解析模块的规则
  module: {
    rules: [
      {
        test: "/.js$/",
        loader: "babel-loader",
        include: path.join(__dirname, "src"),
        exclude: /node_moudles/,
      },
    ],
  },
  //插件
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
      filename: "index.html",
    }),
  ],
  devServer: {
    port: "8000",
    static: path.join(__dirname, "dist"),
  },
  mode: "de velopment",
  //***sorce-map*******
  //打包之后的js文件与开发模式的js文件形成映射关系，快速定位错误所在位置
  devtool: "inline-cheap-source-map",
  // devtool : eval,
  //**HMR(热模块替换)*****
  //优化代码开发调试,改变组件内的样式(css),马上改变
  hot: true,
  /**
   * 插件
   *  1.purgecss-webpack-plugin
   *  注：清除无用的样式
   *  2.happypack
   *  注：对大量文件处理时，文件越多，速度越慢,happypack可以解析任务分成多个子进程
   *  提高构建速度
   */
};
//webpack是一个资源打包工具

// 五个核心概念：
/**
 * 1.Entry
 * 入口
 * 2.Output
 * 出口
 * 3.Loader
 * 解析
 * 4.Plugins
 * 插件(优化、压缩)
 * 5.Mode
 * 模式(开发模式/生产模式)
 * development/production
 * */

//开发服务器devServe：用来自动化（自动打开浏览器，自动刷新浏览器，自动编译）
// 只会在内存中进行打包
//  : {
//   contentBase: resolve(__dirname, "build");
//   启动gzip压缩
//   conpress: true;
//    端口号：
//    port:3000
// }

// 开发环境的性能优化
/**
 * 优化打包构建速度
 * HMR(热模块替换功能)、
 * 优化代码调试
 * source-map(映射技术，追踪源代码错误)
 */

//生产环境的性能优化
/**
 * 优化打包构建速度
 *  oneOf()只能由一个loader，匹配后不再查找
 *  babel缓存，js文件处理
 * 优化代码运行速度
 */
//  缓存(hash、chunkhash()、contenthash(文件))
