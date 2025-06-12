const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: __dirname + '/dist',
        filename: 'main.js',
    },
    plugins: [ new MiniCssExtractPlugin() ],
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
            }
        ]
    }
}