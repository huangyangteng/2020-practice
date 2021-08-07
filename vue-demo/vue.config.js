module.exports = {
    devServer: {
        proxy: {
            '/migu-monitor': {
                target: 'http://c.musicapp.migu.cn/MIGUM2.0/v1.0',
                changeOrigin: true,
                autoRewrite: true,
                cookieDomainRewrite: true,
                pathRewrite: {
                    '^/migu-monitor': '',
                },
            },
        },
    },
}

// location /migu-monitor {
//     proxy_pass http://c.musicapp.migu.cn/MIGUM2.0/v1.0/
// }
