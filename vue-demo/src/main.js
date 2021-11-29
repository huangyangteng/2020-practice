import Vue from 'vue'
import App from './App.vue'

import router from './router'

Vue.config.productionTip = false
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)
import store from './vuex-demo/store'
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
