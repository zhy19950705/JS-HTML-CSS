const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'main/[name].[hash:8].js',
        publicPath: ''
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'main page',
            // inject: false,
            template: path.resolve(__dirname, '../src/index.html'),
            templateParameters: {
                param1: 'hello',
            }
        }),
        
    ],
    resolve: {
        extensions: ['.js', 'vue'],
        alias: {
            'test': path.resolve(__dirname, '../面试')
        }
    },
    devServer: {
        contentBase: '../dist',
        port: '8080',
        host: 'localhost'
    },
    module: {
        rules: [
            
        ]
    }
}