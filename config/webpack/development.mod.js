var path = require("path");
var webpack = require("webpack");

var pwd = process.cwd();

console.log("config development ...");

module.exports = {
  devtool: "inline-source-map",
  entry: [
    "webpack-hot-middleware/client",
    require.resolve("react-error-overlay"),
    path.join(pwd, "devel/app.jsx"),
  ],
  mode: "development",
  module: {
    rules: [
      {
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [
                "@babel/plugin-transform-react-jsx",
                "@babel/plugin-transform-runtime",
              ],
            },
          },
        ],
        exclude: /node_modules/,
        include: [
          path.join(pwd, "./devel/"),
          path.join(pwd, "./src/js/")
        ],
        test: /\.(j|t)s(x)?$/,
      },
    ],
  },
  output: {
    path: path.join(pwd, "dist"),
    filename: "app.js",
    publicPath: "/static/",
  },
  plugins: [
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
