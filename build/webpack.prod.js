const webpack = require("webpack");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin =
    require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const webpackCommonConf = require("./webpack.common.js");
const { distPath } = require("./paths.js");

const isAnalyzer = process.env.NODE_ENV === "production_analyzer";

const plugins = [
    new webpack.DefinePlugin({
        ENV: JSON.stringify("production"),
    }),
    new CleanWebpackPlugin(),
];
if (isAnalyzer) {
    plugins.push(new BundleAnalyzerPlugin());
}

module.exports = merge(webpackCommonConf, {
    mode: "production",
    output: {
        filename: "bundle.[contenthash:8].js",
        path: distPath,
    },
    plugins,
    devtool: "source-map",
});
