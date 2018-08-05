const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');
const webpack = require('webpack');

let config = {
    entry: path.resolve(__dirname, 'src', 'components', 'App.jsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.[hash].js'
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
                MiniCssExtractPlugin.loader,
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
        new CleanWebpackPlugin(['build']),
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].js.map'
        }),
        new WebpackMd5Hash(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ]
};

module.exports =  {
    config: config
};