var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './test',
    output: {
        filename: 'test.bundle.js'
    },
    resolveLoader: {
        alias: {
            'path-replace-loader': path.join(__dirname, 'index')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'path-replace-loader',
                exclude: /(node_modules)/,
                options: {
                    path: path.join(__dirname, 'test', 'core'),
                    replacePath: path.join(__dirname, 'test', 'local')
                }
            }
        ]
    }
};