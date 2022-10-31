const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: "0.0.0.0",
    // 开启IP域名访问
    allowedHosts: "all", //这样就可以在本地通过host文件，设置代理了
    port: 8080, //qq登录密匙绑定的是8080，所以必须是8080
    proxy: {
      [process.env.VUE_APP_FLAG]: {
        target: process.env.VUE_APP_APIURL,
        ws: false, // webstock
        changeOrigin: true, // 是否开启跨域
        pathRewrite: { [`^${process.env.VUE_APP_FLAG}`]: "" },
      },
    },
    // proxy: "http://localhost:8989",

    //上述方法都不行，之后再想想

    // proxy: {
    //   "/api": {
    //     target: "http://localhost:8080",
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "^/api": "",
    //     },
    //   },
    // },
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        path.join(__dirname, "./src/assets/styles/variables.less"),
        path.join(__dirname, "./src/assets/styles/mixins.less"),
      ],
    },
  },
  // chainWebpack: (config) => {
  //   // 图片加载
  //   config.module
  //     .rule("images")
  //     .use("url-loader")
  //     .loader("url-loader")
  //     .tap((options) => Object.assign(options, { limit: 10000 }));

  //   // 开启IP域名访问
  //   config.devServer.disableHostCheck(true);
  // },

  //上述方式不能用了，使用下面的方式images 是src/assets下的文件夹
  chainWebpack: (config) => {
    config.module.rule("images").set("parser", {
      dataUrlCondition: {
        maxSize: 1 * 1024, // 4KiB
      },
    });
  },

  configureWebpack: {
    externals: {
      qc: "QC",
    },
  },
});
