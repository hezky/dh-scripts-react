const path = require("path");
const pwd = process.cwd();
const webpack = require("webpack");

module.exports = {
  devtool: "inline-source-map",
  entry: [
    "webpack-hot-middleware/client",
    require.resolve("react-error-overlay"),
    path.join(pwd, "src/conf/conf.js"),
    path.join(pwd, "src/js/index.js"),
  ],
  mode: "development",
  module: {
    rules: [],
  },
  output: {
    path: path.join(pwd, "dist"),
    filename: "app.js",
    publicPath: "/static/",
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  resolve: {
    extensions: [".webpack.js", ".web.js", ".js", ".jsx", ".ts", ".tsx"],
  },
};
