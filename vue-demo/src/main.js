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
//---------------测试接口转发
import axios from 'axios'
///http://localhost:8080/file/1.jpeg ->  http://111.229.14.189/file/1.jpeg
axios.get('/file/1.jpeg').then(res=>{console.log('file response',res)})
///http://localhost:8080/my-custom-prefix/gk-api/util/test  ->http://111.229.14.189/gk-api/util/test
axios.get('/my-custom-prefix/gk-api/util/test').then(res=>{console.log('api response',res)})