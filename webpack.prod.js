const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const uglify = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [new uglify()],
  }
});