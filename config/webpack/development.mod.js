var path = require("path");
var webpack = require("webpack");

var pwd = process.cwd();

console.log("jsem zde ...");

module.exports = {
  devtool: "inline-source-map",
  entry: [
    "webpack-hot-middleware/client",
    require.resolve("react-error-overlay"),
    path.join(pwd, "devel/app.js"),
  ],
  mode: "development",
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
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
