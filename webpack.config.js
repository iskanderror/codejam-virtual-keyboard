const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin= require('copy-webpack-plugin');

module.exports = {
  devtool: "source-map",
  entry: { main: './src/js/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {sourceMap: true}
          }, 
          {
            loader: 'sass-loader',
            options: {sourceMap: true}
          }
        ]
      })
    }]
  },
  plugins: [ 
    new ExtractTextPlugin({filename: 'css/style.css'}),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: './src/fonts',
        to: './fonts'
      },
      {
        from: './src/favicon',
        to: './favicon'
      },
      {
        from: './src/img',
        to: './img'
      },
      {
        from: './src/uploads',
        to: './uploads'
      }
    ]),
  ]
}