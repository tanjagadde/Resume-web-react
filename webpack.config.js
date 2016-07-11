var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel'],
    }, {
        test: /\.html$/,
        loader: "html"
      },
      {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }, ],
    htmlLoader: {
    ignoreCustomFragments: [/\{\{.*?}}/]
  }
  },
  plugins: [
      new ExtractTextPlugin("global.css")
    ],
  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  resolve: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};
module.exports = config;