const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  output: {
    path: resolve('dist'),
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.(js|jsx)$/,
        use: 'eslint-loader',
        exclude: [
          resolve('node_modules')
        ]
      },
      {
        test: /.js$/,
        use: 'babel-loader',
        exclude: [
          resolve('node_modules')
        ]
      },
      {
        test: /.jsx$/,
        use: 'babel-loader'
      }
    ]
  }
}
