const path = require("path");
const { CheckerPlugin } = require("awesome-typescript-loader");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", "json"],
    },
    entry: [
        "webpack/hot/dev-server",
        "@babel/polyfill",
        path.resolve("./src/adapters/primaries/react-app/src/index.js"),
    ],
    mode: "development",
    output: {
        path: path.resolve("./dist"),
        filename: "bundle.js",
        publicPath: "/",
    },
    optimization: { minimize: false },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                            plugins: ["@babel/plugin-proposal-class-properties"],
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                use: ["awesome-typescript-loader"],
            },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
            {
                test: /\.(png|jpg|jpeg|gif|woff|svg|eot|ttf|woff2|ico)$/,
                use: ["file-loader"],
            },
        ],
    },
    plugins: [
        new CheckerPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(
                `./src/adapters/primaries/react-app/public/index.html`
            ),
            filename: "index.html",
        }),
    ],
    devServer: {
        contentBase: path.resolve("./dist"),
        clientLogLevel: "warning",
        publicPath: "/",
        compress: true,
        historyApiFallback: true,
        hot: true,
        overlay: {
            warnings: false,
            errors: true,
        },
        port: 3006,
        quiet: true,
    },
};

module.exports = config;
