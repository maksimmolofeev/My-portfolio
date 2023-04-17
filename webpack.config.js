const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactRefreshWebpackPlugin = require('react-refresh-webpack-plugin');

const PORT = 3000

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    devtool: 'inline-source-map',
    devServer: {
        port: PORT,
        open: true,
        hot: true
    },
    resolve: {
        preferAbsolute: true,
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        mainFiles: ['index'],
        alias: {}
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        // new webpack.HotModuleReplacementPlugin(),
        // new ReactRefreshWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                auto: (resPath) => Boolean(resPath.includes('.module.')),
                                localIdentName: '[path][name]__[local]--[hash:base64:5]'
                            },
                        }
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(png|jpe?g|gif|woff2|woff|pdf)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    }
};