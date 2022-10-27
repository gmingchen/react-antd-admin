const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  if (process.env.REACT_APP_PROXY === 'true') {
    app.use(
      proxy('/proxy', {
        target:'http://localhost:8806',
        changeOrigin:true,
        pathRewrite:{
          '^/proxy': '/'
        }
      })
    )
  }
}
