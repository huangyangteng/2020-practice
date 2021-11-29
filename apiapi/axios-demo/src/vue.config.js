const SERVER1='http://10.1.62.116:2000'
const FILE_SERVER1='http://10.1.62.116:3000/files'
const SERVER2='http://10.1.62.116:9999/api'
modules.exports={
    devServer: {
        //只在开发时有效，打包后失效
        open: true, //自动打开浏览器
        proxy: {
            //配置接口转发
            '/example-1': {
                target: SERVER1, //开发环境后端接口地址
                changeOrigin: true,
                autoRewrite: true,
                cookieDomainRewrite: true,
                pathRewrite: {
                    '^/example-1': ''
                }
            },
            '/files':{
                target: FILE_SERVER1, //开发环境后端接口地址
                changeOrigin: true,
                autoRewrite: true,
                cookieDomainRewrite: true,
            },
            '/api':{
                target: SERVER2, //开发环境后端接口地址
                changeOrigin: true,
                autoRewrite: true,
                cookieDomainRewrite: true,
            }
        }
    },
}