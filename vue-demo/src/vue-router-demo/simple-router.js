// vue 路由      组件-路由规则
import VueRouter from 'vue-router'
//首页
//关于我们
//新闻
import Home from './Home.vue'

// 2.定义路由规则
export const routes = [
    { path: '/', component: Home },
    { path: '/about', component: () => import('./About.vue') },
    { path: '/news', component: () => import('./News.vue') },
]
// 3. 创建router实例，传入`routes`配置
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})
export default router
