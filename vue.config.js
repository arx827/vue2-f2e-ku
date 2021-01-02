const path = require("path");
const resolve = dir => path.join(__dirname, dir);
// const name = require("./package.json").name;

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? process.env.VUE_APP_CONTEXT_PATH
      : "/",
  outputDir: `dist/${process.env.VUE_APP_MODENAME}`,
  assetsDir: "assets",
  productionSourceMap: false,

  lintOnSave: true,
  css: {
    extract: true, // 是否使用css分離外掛 ExtractTextPlugin
    sourceMap: false, // 開啟 CSS source maps?是否在構建樣式地圖，false將提高構建速度
    loaderOptions: {
      // css預設器配置項
      scss: {
        prependData: `
            @import "~@/assets/helpers/_var.scss";
            @import "~@/assets/helpers/_mixins.scss";
          `
      }
    }
  },
  devServer: {
    port: 8002,
    open: true
  },
  configureWebpack: config => {
    // if (IS_PROD) {
    config.optimization = {
      splitChunks: {
        // 表示選擇哪些 chunks 進行分割，可選值有：async，initial和all
        chunks: "all",
        // 表示新分離開出的chunk必須大於等於minSize，默認為30000，約30kb。
        minSize: 30000,
        // 表示一個模塊至少應被minChunks個chunk所包含才能分割。默認為1。
        minChunks: 1,
        // 表示按需加載文件時，並行請求的最大數目。默認為5。
        maxAsyncRequests: 5,
        // 表示加載入口文件時，並行請求的最大數目。默認為3。
        maxInitialRequests: 3,
        // 表示拆分出的chunk的名稱連接符，默認為~
        automaticNameDelimiter: "-",
        cacheGroups: {
          bootstrap: {
            name: "bootstrap",
            test: /[\\/]node_modules[\\/]bootstrap[\\/]/,
            priority: 10
          },
          jquery: {
            name: "jquery",
            test: /[\\/]node_modules[\\/]jquery[\\/]/,
            priority: 10
          }
        }
      }
    };
    // }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@components", resolve("src/components"))
      .set("@layout", resolve("src/components/layout"))
      .set("@views", resolve("src/components/views"))
      .set("@static", resolve("src/static"));
    config.module.rule("eslint").use("eslint-loader");
  }
};
