const webpack = require("webpack");
const { merge } = require("webpack-merge");
const webpackCommonConf = require("./webpack.common.js");
const { distPath } = require("./paths.js");

module.exports = merge(webpackCommonConf, {
    mode: "development",
    plugins: [
        new webpack.DefinePlugin({
            ENV: JSON.stringify("development"),
        }),
    ],
    devServer: {
        port: 3000,
        progress: true,
        contentBase: distPath,
        compress: true,
    },
    devtool: "eval-cheap-source-map",
});
