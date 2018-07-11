const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const HTMLPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config.base')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const isDev = process.env.NODE_ENV === 'development'

const config = webpackMerge(baseConfig, {
  target: 'web',
  mode: 'development',
  entry: {
    main: resolve('client/main.js')
  },
  output: {
    filename: '[name].[hash].js'
  },
  plugins: [
    new HTMLPlugin({
      template: resolve('client/template.html')
    }),
    new HTMLPlugin({
      template: '!!ejs-compiled-loader!' + resolve('client/server.template.ejs'),
      filename: 'server.ejs'
    })
  ]
})

if (isDev) {
  config.entry = {
    main: [
      'react-hot-loader/patch',
      resolve('client/main.js')
    ]
  }
  config.devServer = {
    host: '0.0.0.0',
    port: '8888',
    contentBase: resolve('dist'),
    publicPath: '/public',
    historyApiFallback: {
      index: '/public/index.html'
    },
    hot: true,
    overlay: {
      errors: true
    },
    proxy: {
      '/api': 'http://127.0.0.1:3333'
    }
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )
}

module.exports = config
