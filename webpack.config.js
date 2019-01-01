require('dotenv').config()
const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const devMode = process.env.NODE_ENV !== 'production'
const CleanWebpackPlugin = require('clean-webpack-plugin')

var browserConfig = {
    entry:'./src/browser/index.jsx',
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
          })
    ]
}
var serverConfig = {
    entry: './src/server/index.js',
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
      })
    ]
  }

  module.exports = [browserConfig,serverConfig]