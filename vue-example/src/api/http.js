import axios from 'axios'
import { InterceptorManage } from './interceptor'
let instance = axios.create({
    timeout: 1000 * 30, //超时时间
    baseURL: '/api' //设置baseURL，区分开发环境和生产环境
})

// 请求拦截
instance.interceptors.request.use(
    config => {
        let interceptor = new InterceptorManage(config)
        return interceptor.handleReq()
    },
    error => Promise.error(error)
)

// 响应拦截
instance.interceptors.response.use(
    // 请求成功
    res => {
        let interceptor = new InterceptorManage(res.config, res.data)
        return interceptor.handleRes()
    },
    // 请求失败
    error => {
        const { response } = error
        let interceptor = new InterceptorManage(response)
        return interceptor.handleErr()
    }
)

export default instance
