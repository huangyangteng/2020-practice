//vue.config.js
let host = require('./src/config/host')

module.exports = {
    devServer: {
        //只在开发时有效，打包后失效
        open: true, //自动打开浏览器
        proxy: {
            //配置接口转发
            '/api': {
                target: host.dev, //开发环境后端接口地址
                changeOrigin: true,
                autoRewrite: true,
                cookieDomainRewrite: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    chainWebpack: config => {
        // ----性能分析插件
        if (process.env.NODE_ENV === 'production') {
            config
                .plugin('webpack-bundle-analyzer')
                .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        }
    }
}
