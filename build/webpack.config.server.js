const path = require('path')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = webpackMerge(baseConfig, {
  target: 'node',
  mode: 'development',
  entry: {
    main: resolve('client/server-entry.js')
  },
  output: {
    filename: 'server-entry.js',
    libraryTarget: 'commonjs2'
  }
})
