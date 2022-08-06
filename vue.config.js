const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    // 入口文件的相关配置
    index: {
      entry: "examples/main.js", // 把src改为examples这里入口文件也要跟着改
      template: "public/index.html",
      filename: "index.html",
    },
  },
  css: { extract: false },
  chainWebpack: (config) => {
    config.module
      .rule("js")
      .include.add("/packages/") // 在根目录下加了新的文件webpack不会去打包所以要增加进去
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        // 修改它的选项...
        return options;
      });
  },
});
