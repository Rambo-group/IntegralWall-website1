const webpack = require("webpack");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const chalk = require("chalk");
const path = require("path");
function resolve(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  configureWebpack: (config) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
      })
    );
    config.plugins.push(
      new ProgressBarPlugin({
        format:
          " build [:bar] " +
          chalk.green.bold(":percent") +
          " (:elapsed seconds)",
        clear: false,
      })
    );
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@i18n", resolve("src/i18n"))
      .set("@utils", resolve("src/utils"));
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach((type) =>
      addStyleResource(config.module.rule("less").oneOf(type))
    );
  },

  publicPath: "/",
  assetsDir: "assets",
  outputDir: "dist",
  lintOnSave: false,
  productionSourceMap: false,
};

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [resolve("./src/config.less")],
    });
}
