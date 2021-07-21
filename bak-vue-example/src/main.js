import Vue from 'vue'
import App from './App.vue'
import vdr from 'vue-draggable-resizable-gorkys'
import './plugins'
// 导入默认样式
import 'vue-draggable-resizable-gorkys/dist/VueDraggableResizable.css'
Vue.component('vdr', vdr)
Vue.config.productionTip = false

Vue.mixin({
  computed:{
    userName(){
      return 'xiaoMing'
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
