const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    devServer: {
        port: 1000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ]
}