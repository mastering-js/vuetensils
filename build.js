'use strict';

const webpack = require('webpack');

const compiler = webpack(require('./webpack.config'));

try {
  fs.mkdirSync('./dist');
} catch (err) {}

compiler.run((err) => {
  if (err) {
    process.nextTick(() => { throw err; });
  }
  console.log('Webpack compiled successfully');
});