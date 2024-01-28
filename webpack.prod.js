const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config");

const devConfig = merge(commonConfig, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "[name].[hash].min.js", // minตัดพวกcomment
    assetModuleFilename: "images/[hash][ext][query]",
  },
  // Loader
  module: {
    rules: [
      {
        test: /\.s?css$/i, // เฉพาะกับ .css .scss
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], // ใช้ Loader อะไรบ้าง ทำงานจากขวาไปซ้าย
      }
    ],
  },
   // Plugin
   plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/template/index.html",
    }),
  ],

//   optimization: {
//     minimizer: [
//         new TerserPlugin(),
//         new CssMinimizerPlugin(),
//         new HtmlWebpackPlugin({
//             template: './src/template/index.html',
//             filename: 'index.min.html',
//             minify: {
//                 removeAttributeQuotes: true,
//                 collapseWhitespace: true,
//                 removeComments: true,
//             },
//         }),
//     ],
// },
});

module.exports = devConfig;
