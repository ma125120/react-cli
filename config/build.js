var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var Compression=require('compression-webpack-plugin');
var BUILD=path.resolve(__dirname,'../build/static/');

module.exports = {
  // configuration
  entry: {
    app: './src/index.js',
    vendors: ['react','react-dom','react-router','redux','react-redux','prop-types']
  }, //代表入口(总)文件，可以写多个
  output: {
    path: BUILD, //输出文件夹
    filename: "js/[name].[chunkHash:5].js",  //最终打包生成的文件名
    publicPath:'./static/'
  },
  module: {
    rules:  [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        //resolve-url-loader may be chained before sass-loader if necessary
        use: [{ loader: 'css-loader' , options: { importLoaders: 1 } },
            'postcss-loader', 'sass-loader']
      })
    },{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader' , options: { importLoaders: 1 } },
            'postcss-loader'
          ]
        })
    }, {
      test: /\.js|jsx$/, //是一个正则，代表js或者jsx后缀的文件要使用下面的loader
      exclude: /node_modules/,
      use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0', 'react']
          }
      }
    },{
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
    },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'font/[name].[hash:7].[ext]'
        }
    }]
  },
  plugins: [
    new ExtractTextPlugin('css/my.css'),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: path.join(__dirname,'../src/temp.html'),
      chunks: ['app', 'vendors']
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments:false,
      compress: {
            properties: false,
            warnings: false
      },
      mangle: {
        crew_ie8: false
      },
      sourceMap: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'js/vendors.js'
    }),
    new Compression({
      asset:'[path].gz[query]',
      algorithm:'gzip',
      test:new RegExp('\.(js|css)$'),
      threshold:10240,
      minRatio:0.8
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
  ]
};