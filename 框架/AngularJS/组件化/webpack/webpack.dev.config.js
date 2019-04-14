var baseconf = require('./webpack.base.config');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var server = require('./configDevServer');
var path = require('path');
var root = path.resolve(__dirname, '../');

var plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify("development")
        }
    }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, '../index.html'),
        inject: true
    }),
    new webpack.HotModuleReplacementPlugin()
]

module.exports = merge(baseconf, {
    output: {
        path: root + '/dist',
        publicPath: '/',
        filename: './js/[name].[hash:8].js'
    },
    optimization: {
        minimize: false,
        splitChunks: {
            // include all types of chunks
            chunks: 'all'
        }
    },
    devtool: 'source-map',
    devServer: server,
    plugins: plugins
})