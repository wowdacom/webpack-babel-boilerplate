const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("@babel/register");

const config = {
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    publicPath: "",
    path: __dirname + "/public",
    assetModuleFilename: "images/[hash][ext][query]",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|jpe?g|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
  ],
  resolve: {
    modules: [path.resolve("./src"), path.resolve("./node_modules")],
  },
  devServer: {
    contentBase: __dirname + "/public",
    compress: true,
    port: 9000,
    open: true,
    stats: {
      assets: false,
      children: false,
      chunks: false,
      chunkModules: false,
      colors: true,
      entrypoints: false,
      hash: false,
      modules: false,
      timings: false,
      version: false,
    },
  },
  watch: false,
  devtool: "source-map",
};

module.exports = config;
