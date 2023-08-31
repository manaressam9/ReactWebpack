const path = require("path");

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 8080;
module.exports = {
    //webpack configs
    mode: 'development',
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, "public"),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: 'inline-source-map', //help with debug in dev mode
    module: {
        rules:[
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                // use: [
                //     {
                //         loader: 'style-loader'
                //     },
                //     {
                //         loader: 'css-loader',
                //         options: {
                //             modules: true,
                //             localsConvention: 'camelCase',
                //             sourceMap: true
                //         }
                //     }
                // ]
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            //favicon: 'public/favicon.ico'
        })
    ],
    devServer: {
        host:'localhost',
        port: port,
        historyApiFallback: true,
        open:true,
        hot:true,
    }
}