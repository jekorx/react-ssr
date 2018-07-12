const axios = require('axios')
const webpack = require('webpack')
const path = require('path')
const MemoryFs = require('memory-fs')
const ReactDomServer = require('react-dom/server')
const serialize = require('serialize-javascript')
const proxy = require('http-proxy-middleware')
const ejs = require('ejs')
const asyncBootstrap = require('react-async-bootstrapper')
const serverConfig = require('../../build/webpack.config.server')

const getTemplate = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://127.0.0.1:8888/public/server.ejs')
      .then(res => {
        resolve(res.data)
      })
      .catch(reject)
  })
}

const Module = module.constructor
const mfs = new MemoryFs()
const serverCompiler = webpack(serverConfig)
serverCompiler.outputFileSystem = mfs
let serverBundle, createStoreMap
serverCompiler.watch({}, (err, stats) => {
  if (err) throw err
  stats = stats.toJson()
  stats.errors.forEach(e => console.error(e))
  stats.warnings.forEach(w => console.warn(w))

  const bundlePath = path.join(
    serverConfig.output.path,
    serverConfig.output.filename
  )
  const bundle = mfs.readFileSync(bundlePath, 'UTF-8')
  const m = new Module()
  m._compile(bundle, 'server-entry.js')
  serverBundle = m.exports.default
  createStoreMap = m.exports.createStoreMap
  console.log('Load entry file success.')
})

const getStoreState = stores => {
  return Object.keys(stores).reduce((result, storeName) => {
    result[storeName] = stores[storeName].toJson()
    return result
  }, {})
}

module.exports = function (app) {
  app.use('/public', proxy({
    target: 'http://127.0.0.1:8888'
  }))
  app.get('*', function (req, res) {
    getTemplate().then(template => {
      const routerContext = {}
      const stores = createStoreMap()
      const app = serverBundle(stores, routerContext, req.url)

      asyncBootstrap(app).then(() => {
        if (routerContext.url) {
          res.status(302).setHeader('Location', routerContext.url)
          res.end()
          return
        }
        const state = getStoreState(stores)
        const content = ReactDomServer.renderToString(app)
        // res.send(template.replace('<!-- app -->', content))
        const html = ejs.render(template, {
          appString: content,
          initialState: serialize(state)
        })
        res.send(html)
      }).catch(err => {
        console.log(err)
      })
    }).catch(err => {
      console.log(err)
    })
  })
}
