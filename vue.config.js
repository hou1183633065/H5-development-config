const vConsolePlugin = require("vconsole-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production" ? true : false;

module.exports = {
  configureWebpack: config => {
    if (!isProduction) {
      console.log(
        "--------此操作为开发及测试环境, 默认开启控制台打印任务--------"
      );
      // 开发及测试环境
      config.plugins.push(new vConsolePlugin({ enable: !isProduction }));
    } else {
      // 线上环境
      console.log("--------此操作为正式环境环境--------");
    }
  },

  css: {
    requireModuleExtension: true
  },

  publicPath: undefined,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  lintOnSave: undefined
};
