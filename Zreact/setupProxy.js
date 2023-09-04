const proxy = require('http-proxy-middleware');
// "proxy": "http://zhouyi.run:5222",
module.exports = function (app) {
    app.use('/mg', proxy.createProxyMiddleware({
        target: 'http://zhouyi.run:5222',
        changeOrigin: true,
        pathRewrite: {
            '^/mg': ''
        }
    }))
};
