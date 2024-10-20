'use strict';

const path = require('path');

module.exports = {
  mode: 'development',
  devtool: false,
  target: 'web',
  optimization: {
    minimize: false
  },
  entry: {
    index: './index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: '@masteringjs/vuetensils',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        type: 'asset/source'
      }
    ]
  }
};
