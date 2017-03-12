var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var UglifyJsPlugin = require('uglify-js-plugin');

//利用相对路径通过解析得到绝对路径
var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: {
        index: './src/script/index.js',
        detail: './src/script/detail.js',
        topic: './src/script/topic.js',

    },
    output: {
        path: DIST_DIR + '/app',
        filename: "js/[name]-[hash].min.js",
        publicPath: "/"
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
                use : ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 
                          'less-loader',
                          {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function() {
                                    return [
                                        require('postcss-smart-import'),
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        },
                        
                    ]
                })
                // use: [
                //     'style-loader',
                //     'css-loader',
                //     {
                //         loader: 'postcss-loader',
                //         options: {
                //             plugins: function () {
                //                 return [
                //                     require('postcss-smart-import'),
                //                     require('autoprefixer')
                //                 ];
                //             }
                //         }
                //     },
                //     'less-loader'
                // ]
            },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                include: SRC_DIR,
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
        new ExtractTextPlugin("css/[name].min.css"),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/template/index.html',
            inject: 'body',
            title: '云山舆情',
            chunks: ['index'],// array


        }),
        new htmlWebpackPlugin({
            filename: 'detail.html',
            template: './src/template/detail.html',
            inject: 'body',
            title: '云山舆情',
            chunks: ['detail']
        }),

        new htmlWebpackPlugin({
            filename: 'topic.html',
            template: './src/template/topic.html',
            inject: 'body',
            title: '云山舆情',
            chunks: ['topic']
        }),
        new UglifyJsPlugin({
            compress: true, //default 'true', you can pass 'false' to disable this plugin 
            debug: true //default 'false', it will display some information in console 
        }),
        new webpack.DefinePlugin({
          "process.env": { 
             NODE_ENV: JSON.stringify("production") 
           }
        })
    ]
};

module.exports = config;