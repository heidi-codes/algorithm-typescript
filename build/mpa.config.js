/**
 * @description MPA webpack configure
 * @author Heidi Codes
 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        home: "./src/home/index.js",
        product: "./src/product/index.js",
        about: "./src/about/index.js",
    },
    output: {
        filename: "js/[name].[contentHash].js",
        path: path.resolve(__dirname, "./dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Home",
            template: "./template/index.html",
            filename: "home.html",
            chunks: ["home"],
        }),
        new HtmlWebpackPlugin({
            title: "Product",
            template: "./template/product.html",
            filename: "product.html",
            chunks: ["product"],
        }),
        new HtmlWebpackPlugin({
            title: "About",
            template: "./template/about.html",
            filename: "about.html",
            chunks: ["about"],
        }),
    ],
};
