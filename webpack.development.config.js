const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpack = require('webpack');

let config = {
    entry: path.resolve(__dirname, 'src', 'components', 'App.jsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.[hash].js',
        publicPath: '/build',
        chunkFilename: '[name].js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        hot: true,
        historyApiFallback: true,
        open: true,
        port: 3000,
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
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].js.map'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.php')
        }),
        new CopyWebpackPlugin([{
            from: 'public/api/',
            to: 'api/'
        }]),
        new BrowserSyncPlugin(
            // BrowserSync options
            {
                // browse to http://localhost:3000/ during development
                host: 'localhost',
                port: 3000,
                // proxy the Webpack Dev Server endpoint
                // (which should be serving on http://localhost:3100/)
                // through BrowserSync
                proxy: 'http://localhost:2262/'
            },
            // plugin options
            {
                // prevent BrowserSync from reloading the page
                // and let Webpack Dev Server take care of this
                reload: true
            }
        )
    ]
};

module.exports = {
    config: config
};