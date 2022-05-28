const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(createProxyMiddleware('/', {
    target: process.env.REACT_BASE_URL,
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/api',
    },
  }));
};
