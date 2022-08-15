const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: "development",
    devServer: {
        port: 1001,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "linechart",
            filename: "remoteEntry.js",
            exposes: {
                "./LinearchartIndex": "./src/index"
            }
        }),
        
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ]
}