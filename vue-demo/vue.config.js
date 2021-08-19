//接口服务器
const API_SERVER='http://111.229.14.189'
//文件服务器
const FILE_SERVER='http://111.229.14.189'

module.exports={
    devServer: {
        //只在开发时有效，打包后失效
        open: true, //自动打开浏览器
        proxy: {
            '/file':{
                target: FILE_SERVER, //开发环境后端接口地址
                changeOrigin: true,
                autoRewrite: true,
                cookieDomainRewrite: true,
            },
            '/my-custom-prefix':{
                target: API_SERVER, //开发环境后端接口地址
                changeOrigin: true,
                autoRewrite: true,
                cookieDomainRewrite: true,
                pathRewrite:{
                    '^/my-custom-prefix': ''
                }
            }
        }
    },
}