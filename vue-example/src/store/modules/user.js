import { USER_M } from '../mutation-types'

const state = {
    //定义用户相关状态
    info: {},
    jwt: ''
}

const getters = {
    //定义需要经过处理才能返回的state
}

const actions = {
    //处理异步请求及复杂逻辑
    login({ commit }, userInfo) {
        console.log(userInfo)
        commit(USER_M.LOGIN, userInfo)
        commit(USER_M.UPDATE_JWT, userInfo.jwt)
    },
    logout({ commit }) {
        commit(USER_M.LOGOUT)
    },
    updateJwt({ commit }, newJwt) {
        commit(USER_M.UPDATE_JWT, newJwt)
    }
}

const mutations = {
    //更改state中的状态
    [USER_M.LOGIN](state, userInfo) {
        state.info = userInfo.data
    },
    [USER_M.LOGOUT](state) {
        state.info = {}
        state.jwt = ''
        localStorage.removeItem('vuex')
    },
    [USER_M.UPDATE_JWT](state, jwt) {
        state.jwt = jwt
    }
}

export default {
    //导出用户模块相关信息
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
