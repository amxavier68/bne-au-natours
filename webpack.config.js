const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  target: 'node',

  entry: './App.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].js',
    libraryTarget: 'commonjs2',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        use: { loader: 'babel-loader' },
        exclude: /node_modules/
      }
    ],
  },
};