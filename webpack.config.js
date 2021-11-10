const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',

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