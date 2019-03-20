//var path = require('path');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var VueLoaderPlugin = require('vue-loader/lib/plugin')

/*
var config = {
  mode: 'none',
  entry: {
    main: './main'
  },
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
            //css: MiniCssExtractPlugin({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            })
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
        //use: MiniCssExtractPlugin.extract({
          //use: 'css-loader',
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false,
                minimize: true,
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("main.js"),
    //new MiniCssExtractPlugin("main.css"),
    new VueLoaderPlugin()
  ]
};
*/
module.exports = config;