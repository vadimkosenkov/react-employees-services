const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",

  entry: {
    index: "./src/index/index.js",
    auth: "./src/auth/auth.js",
    profile: "./src/profile/profile.js",
    roles: "./src/roles/roles.js",
  },

  devServer: {
    port: 8080,
    writeToDisk: false,
  },

  module: {
    rules: [
      {
        test: /\.m?js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/auth/auth.html",
      inject: true,
      chunks: ["auth"],
      filename: "auth.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/profile/profile.html",
      inject: true,
      chunks: ["profile"],
      filename: "profile.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/roles/roles.html",
      inject: true,
      chunks: ["roles"],
      filename: "roles.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "./assets", to: "./assets" }],
    }),
  ],
};
