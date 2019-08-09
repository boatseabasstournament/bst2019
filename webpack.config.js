const webpack = require('webpack');

module.exports = {
  entry: [
    './source/assets/javascripts/site.js'
  ],
  output: {
    filename: 'site.js',
    path: __dirname + '/build/assets/javascripts'
  }
};