require('dotenv').config()
const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const devMode = process.env.NODE_ENV !== 'development'
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

//require("@babel/polyfill");

var devConfig = {
    entry:['./src/browser/index.jsx'],
    output:{
        path:path.resolve(__dirname,'Devbuild'),
        filename:'juet.[hash].js',
    },
    mode: 'development',
  devtool: 'inline-source-map',
    devServer:{
        compress: true,
        port: 4000,
        historyApiFallback: true
    },
    module:{
        rules:[
            {
                test:[/\.svg$/,/\.gif$/,/\.jpe?g$/,/\.png$/],
                loader:"file-loader",
            },
            {
               
                test: /\.(sa|sc|c)ss$/,
                use: [
                MiniCssExtractPlugin.loader,'css-loader',
                {loader:'postcss-loader',
                 options:{sourceMap:true,ident:'postcss',plugins:[require('autoprefixer')()]}
                }
                ],
           },
            {
                test:/\.(js|jsx)$/,
                exclude:/(node_modules)/,
                use:'babel-loader'
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            __isBrowser__:'true'
        }),
        new CleanWebpackPlugin(['Devbuild']),
        new MiniCssExtractPlugin({
            filename:'[hash].css',
            chunkFilename: '[id].css' 
          }),
          new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
          }),
          new Dotenv()
    ]
}

var browserConfig = {
    entry:['./src/browser/index.jsx'],
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'juet_bundle.js',
    },
    devtool: false,
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    module:{
        rules:[
            {
                test:[/\.svg$/,/\.gif$/,/\.jpe?g$/,/\.png$/],
                loader:"file-loader",
                options:{
                    name:"build/media/[name].[ext]",
                    publicPath:url => url.replace('/build',"")
                }
            }
            ,
            {
                test:/\.(js|jsx)$/,
                exclude:/(node_modules)/,
                use:'babel-loader'
            },
            {
               
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                    MiniCssExtractPlugin.loader,'css-loader',
                    {loader:'postcss-loader',
                     options:{sourceMap:true,ident:'postcss',plugins:[require('autoprefixer')()]}
                    }
                    ],
              }
        ]
    },
    optimization: {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true 
          }),
          new OptimizeCSSAssetsPlugin({})
        ]
      },
    plugins:[
        new webpack.DefinePlugin({
            __isBrowser__:'true'
        }),
        new CleanWebpackPlugin(['build']),
        new MiniCssExtractPlugin({
            filename:'/css/[name].css',
            chunkFilename: '/css/[id].css' 
          }),
          new Dotenv()
    ]
}
var serverConfig = {
    entry: ['./src/server/index.js'],
    target: 'node',
    externals: [nodeExternals()],
    output: {
      path: __dirname,
      filename: "server.js",
      libraryTarget:"commonjs2"
    },
    devtool: false,
    module: {
      rules: [
        {
            test:[/\.svg$/,/\.gif$/,/\.jpe?g$/,/\.png$/],
            loader:"file-loader",
            options:{
                name:"build/media/[name].[ext]",
                publicPath:url => url.replace('/build',"")
                ,emit:false
            }
        },
        {
          test:/\.css$/,
          use:[
              {
                  loader:"postcss-loader",
                  options:{sourceMap:true,ident:'postcss',plugins:[require('autoprefixer')()]}
              }
          ]
        },
        {   
            test: /\.(js|jsx)$/,
            exclude:/(node_modules)/,
            use: 'babel-loader' 
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        __isBrowser__: "false"
      }),
      new CleanWebpackPlugin(['server.js']),
      new Dotenv()
    ]
  }

  module.exports = devMode ? [browserConfig,serverConfig] : [devConfig]