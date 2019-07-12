// 配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入Login组件
import Login from '@/views/login'
// 导入首页组件
import Home from '@/views/home'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { name: 'login', path: '/login', component: Login },
    { name: 'home', path: '/', component: Home }
  ]
})
export default router
