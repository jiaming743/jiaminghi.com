const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: 'localhost:5921/account.jiaminghi.com/api/public',
      // target: apiUrl,
      changeOrigin: true,
      pathRewrite: {
        '^/rest': '/rest',
      },
    })
  )
};