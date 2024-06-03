const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

    ///////
    //const isDev = env.MODE === 'development';
    //mode: env.MODE,
    ///////
    mode: "development",

    entry:{
        main: path.resolve(__dirname, "./src/index.tsx"),
    },

    devtool: 'inline-source-map',
    devServer: {
    open: true,
    hot: true,
    port: 3000,
    },

    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].bundle.js',
        clean: true,
        assetModuleFilename: "assets/[hash][ext][query]",
    },

    plugins: [
        new HtmlWebpackPlugin(
            {template: './src/index.html'},
        ),

        new MiniCssExtractPlugin(
            {filename: "[name].[contenthash].css",},
        ),

    ],

    module:{

        rules:[

            { 
                test: /\.css$/i,
                use:[MiniCssExtractPlugin.loader, "css-loader"],
            },

            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type: "asset/resource",
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader"
                }
            }
            



        ]

    },
}