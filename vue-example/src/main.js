import Vue from 'vue'
import App from './App.vue'
import vdr from 'vue-draggable-resizable-gorkys'

// 导入默认样式
import 'vue-draggable-resizable-gorkys/dist/VueDraggableResizable.css'
Vue.component('vdr', vdr)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
