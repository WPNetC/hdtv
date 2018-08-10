const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const webpack = require('webpack');

let config = {
    entry: path.resolve(__dirname, 'src', 'components', 'App.jsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.[hash].js',
        publicPath: 'http://localhost:3100/',
        chunkFilename: '[name].js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        hot: true,
        inline: true,
        historyApiFallback: true,
        host: 'localhost',
        open: false,
        port: 3100,
        watchContentBase: true
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.(jpe?g|png|gif)$/,
            use: [{
                /* inline if smaller than 10 KB, otherwise load as a file */
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }]
        }, {
            test: /\.svg$/,
            use: [{
                    loader: "babel-loader"
                },
                {
                    loader: "react-svg-loader",
                    options: {
                        jsx: true // true outputs JSX tags
                    }
                }
            ]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader'
            ]
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',
        }),
        new WebpackMd5Hash(),
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].js.map'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new CopyWebpackPlugin([{
            from: 'public/api/',
            to: 'api/'
        }]),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: 'localhost:3100'
        }, {
            reload: true
        })
    ]
};

module.exports = config;