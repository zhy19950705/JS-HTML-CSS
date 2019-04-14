const path = require('path');
const root = path.resolve(__dirname, '../');

module.exports = {
    entry: {
        'main': root + '\\index.js',
    },
    module: {
        rules: [{
                test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }

        ]
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            test: path.resolve(__dirname, '../components/test')
        }
    }
}