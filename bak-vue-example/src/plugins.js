import Vue from 'vue'

const componentsContext = require.context('./components', true,   /\w+\.vue$/)

componentsContext.keys().forEach(component => {
    // 获取文件中的 default 模块
    const componentConfig = componentsContext(component).default
    Vue.component(componentConfig.name, componentConfig)
})
