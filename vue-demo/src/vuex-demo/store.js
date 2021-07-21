import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        list: [],
    },
    mutations: {
        add(state) {
            const no = state.list.length + 1
            state.list = [...state.list, { id: no, name: 'xiaoming' + no }]
        },
        remove(state) {
            state.list = state.list.filter((item, index) => index !== 0)
        },
    },
})

export default store
