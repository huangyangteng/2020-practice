import axios from 'axios'
import store from '../store'
import router from '../router'
import { Message } from 'view-design'
Message.config({
    duration: 3
})
// 管理权限相关
class AuthManage {
    constructor() {
        let state = localStorage.getItem('vuex')
        try {
            state = JSON.parse(state)
            if (state.user.jwt) {
                this.jwt = state.user.jwt
            } else {
                //未登录
            }
        } catch (error) {
            //未登录
        }
    }
    goLogin() {
        Message.error('登录过期！')
        router.push({ name: 'login' })
    }
    getJwt() {
        return this.jwt
    }
    updateJwt(jwt) {
        store.dispatch('user/updateJwt', jwt)
        this.jwt = jwt
    }
}
/**
 *防止重复发起请求
 *
 * @class PendingM
 */
class PendingM {
    constructor() {
        this.pending = []
        this.cancelToken = axios.CancelToken
    }
    remove(ever) {
        for (let p in this.pending) {
            if (this.pending[p].u === ever.url + '&' + ever.method) {
                //当当前请求在数组中存在时执行函数体
                this.pending[p].f() //执行取消操作
                this.pending.splice(p, 1) //把这条记录从数组中移除
            }
        }
    }
}

let pendingM = new PendingM()
/**
 *
 * 处理请求拦截
 * @class InterceptorManage
 */
export class InterceptorManage {
    constructor(config, resData) {
        this.config = config
        this.resData = resData
        this.authM = new AuthManage()
        this.pendingM = pendingM
    }
    handleReq() {
        this.handleCommonReq()
        this.addJwtHeader()
        return this.config
    }
    handleRes() {
        this.handleCommonRes()
        let code = this.resData.code.toString()
        this.handleResCode(code)
        return this.resData
    }
    handleResCode(code) {
        const map = {
            '1000': () => {
                //请求成功
                let jwt = this.resData.jwt
                this.authM.updateJwt(jwt)
            },
            '2000': () => {
                //登录过期
                // Message.error('登录已过期，请重新登录')
                this.authM.goLogin()
            },
            default: () => {
                //其他错误
                Message.error('请求失败:' + this.resData.data)
            }
        }
        // 处理code的逻辑
        let keys = Object.keys(map)
        let hasOne = keys.some(item => code.includes(item))
        if (hasOne) {
            //根据状态码执行逻辑
            keys.forEach(item => {
                if (code.includes(item)) {
                    map[item]()
                }
            })
        } else {
            //执行默认逻辑
            map['default']()
        }
    }
    handleErr() {
        let response = this.config
        if (typeof response == 'undefined') {
            Message.error('接口超时未响应，请检查接口是否正常')
            return false
        }
        Message.error({
            background: true,
            content: `
            接口访问失败：
            URL：${response.config.url}，
            ErrorCode：${response.status}，
            StatusText：${response.statusText}
            `
        })
        return Promise.reject(response)
    }

    addJwtHeader() {
        let jwt = this.authM.getJwt()
        this.config.headers.jwt = jwt
    }
    handleCommonReq() {
        //处理重复请求
        //在请求发送之前执行下取消操作
        this.pendingM.remove(this.config)
        // 把一个请求的标识记录在pending数组中
        let cancelToken = this.pendingM.cancelToken
        this.config.cancelToken = new cancelToken(c => {
            this.pendingM.pending.push({
                u: this.config.url + '&' + this.config.method,
                f: c
            })
        })
    }
    handleCommonRes() {
        //在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
        this.pendingM.remove(this.config)
    }
}
