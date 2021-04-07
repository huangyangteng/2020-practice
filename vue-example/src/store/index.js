import Vue from 'vue'
import Vuex from 'vuex'
import vuexStore from 'vuex-persistedstate'
import user from './modules/user'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        user
    },
    plugins: [vuexStore()]
})
