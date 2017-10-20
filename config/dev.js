var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
const BUILD="build";

module.exports = {
  // configuration
  entry:  ['react-hot-loader/patch',
    // 开启 React 代码的模块热替换(HMR)
     'webpack-dev-server/client?http://localhost:3001/',
    './src/index.js']
  , //代表入口(总)文件，可以写多个
  output: {
    path: path.resolve(__dirname), //输出文件夹
    filename: "bundle.js", //最终打包生成的文件名
    publicPath:'/'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
        fallback: 'style-loader',
        //resolve-url-loader may be chained before sass-loader if necessary
        use: ['css-loader', 'sass-loader']
      }))
    },{
        test: /\.css$/,
        exclude: /node_modules/,
        use:['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
          ]
        }))
    }, {
      test: /\.js|jsx$/, //是一个正则，代表js或者jsx后缀的文件要使用下面的loader
      exclude: /node_modules/,
      use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0', 'react'],
            plugins: [
              'react-hot-loader/babel'
            ]
          }
      }
    },{
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader?name=img/[name].[ext]'
    },{
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'font/[name].[hash:7].[ext]'
        }
    }]
  },
  devServer:{
    hot:true,
    inline:true,
    contentBase: path.resolve(__dirname, './src'),
    // 输出文件的路径
    publicPath: '/',
    port:3001,
    historyApiFallback:true
  },
  plugins: [
  new ExtractTextPlugin("index.css"),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "index.html"),
      template: path.resolve(__dirname, "../src/index.html"),
      chunks: ['app']
    }),
  ]
};