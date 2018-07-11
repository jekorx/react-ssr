const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const session = require('express-session')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const isDev = process.env.NODE_ENV === 'development'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
  maxAge: 10 * 60 * 1000,
  name: 'tid',
  resave: false,
  saveUninitialized: false,
  secret: 'react-ssr'
}))
app.use(favicon(resolve('favicon.ico')))

app.use('/api/user', require('./util/handle-login'))
app.use('/api', require('./util/proxy'))

if (!isDev) {
  const ReactDomServer = require('react-dom/server')
  const fs = require('fs')
  const serverEntry = require('../dist/server-entry').default
  const template = fs.readFileSync(resolve('dist/index.html'), 'UTF-8')
  app.use('/public', express.static(resolve('dist')))
  app.get('*', function (req, res) {
    const appString = ReactDomServer.renderToString(serverEntry)
    res.send(template.replace('<!-- app -->', appString))
  })
} else {
  const devStatic = require('./util/dev-static')
  devStatic(app)
}

const server = app.listen(3333, function () {
  let host = server.address().address
  let port = server.address().port
  console.log('Server listening at http://%s:%s', host, port)
})
