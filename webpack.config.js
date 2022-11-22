const path = require("path")
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "source-map",
    context: path.resolve(__dirname, "src"),
    entry: "./index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: '[name].js',
        chunkFilename: '[id].js',
        libraryTarget: 'var',
        library: 'libName'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                  compress: {},
                  mangle: true,
                  format: {
                    comments: false,
                  },
                },
                extractComments: false,
                parallel: true,
            }),
            "...",
            new CssMinimizerPlugin({
                minimizerOptions: {
                  preset: [
                    "default",
                    {
                      discardComments: { removeAll: true },
                    },
                  ],
                },
            })
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
}