const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssWebpackMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: __dirname + '/dist',
        filename: 'main.js',
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.pug',
            filename: 'index.html',
            minify: false,  // Полное отключение минификации
            cache: false,    // Отключаем кеширование для разработки
            inject: true,
        }),
        new TerserWebpackPlugin(),
        new CssWebpackMinimizerPlugin(),
    ],
    optimization: {
        minimizer: [new TerserWebpackPlugin(), new CssWebpackMinimizerPlugin()],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: true,
                    }
                }, 'css-loader'],
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            esModule: false,
                            minimize: {
                                collapseWhitespace: false,
                                removeComments: false,
                                removeRedundantAttributes: false,
                                removeScriptTypeAttributes: false,
                                removeStyleLinkTypeAttributes: false,
                                useShortDoctype: false,
                            },
                        }
                    },
                    {
                        loader: 'pug-plain-loader',
                        options: {
                            pretty: true,
                        }
                    }
                ],
            }
        ]
    }
}