import axios from 'axios'
import qs from 'qs'
const baseURL = '/api'

const instance = axios.create({
    baseURL,
    timeout: 1000 * 60
})

// 添加请求拦截器
instance.interceptors.request.use(
    function(config) {
        addHeader(config)
        formatReq(config)
        return config
    },
    function(error) {
        // 对请求错误做些什么
        return Promise.reject(error)
    }
)
function addHeader(config) {
    const TOKEN = 'Beard good'
    const uid = '18181881'
    config.headers.token = TOKEN
    config.headers.uid = uid
}
function formatReq(config) {
    // 如果参数类型不是formdata，把请求参数转化为x-www-urlencoded
    if (!(config.data instanceof FormData)) {
        config.data = qs.stringify(config.data)
    }
}


// 添加响应拦截器
instance.interceptors.response.use(
    function(response) {
        // 对响应数据做点什么
        handleResponseCode(response)
        return response
    },
    function(error) {
        // 对响应错误做点什么
        return Promise.reject(error)
    }
)
const CODE={
    SUCCESS:2000,
    AUTH_ERR:4000
}
function handleResponseCode(response){
    console.log("handleResponseCode -> response", response)
    if(typeof response.data !=='object')return 
    const code=response.data.code
    if(!code)return 
    switch (code) {
        case CODE.SUCCESS:
            console.log('success')
            return             
        case CODE.AUTH_ERR:
            console.log('auth error,跳转登录')
            return            
        default:
            console.log('error',response.config.url,response.data.desc)
           return 
    }

}
export default instance
