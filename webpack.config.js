var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");


//利用相对路径通过解析得到绝对路径
var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: {
        index: './src/script/index.js',
        detail: './src/script/detail.js',
        topic: './src/script/topic.js'
    },
    output: {
        path: DIST_DIR + '/app',
        filename: "js/[name]-[chunkhash].js",
        publicPath: "/app/"
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    'url-loader?limit=1000&name=img/[name]-[hash:5].[ext]',
                    'image-webpack-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),  //必须是绝对路径或者是正则表达式
                include: SRC_DIR,  //必须是绝对路径或者是正则表达式
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test: /\.less$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                include: SRC_DIR,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('postcss-smart-import'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    'less-loader'
                ]
            },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                include: SRC_DIR,
                // loader: 'style-loader!css-loader',
                use: [
                    'style-loader',
                    'css-loader?importLoaders=1',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('postcss-smart-import'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    }
                ],



            }
        ]
    },


    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/template/index.html',
            inject: 'body',
            title: 'this is index',
            chunks: ['index'],// array


        }),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/template/detail.html',
            inject: 'body',
            title: 'this is detail',
            chunks: ['detail']
        }),

        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/template/topic.html',
            inject: 'body',
            title: 'this is topic',
            chunks: ['topic']
        })
    ]
};

module.exports = config;