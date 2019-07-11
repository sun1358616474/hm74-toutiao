// 配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入Login组件
import Login from '@/views/login'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { name: 'login', path: '/login', component: Login }
  ]
})
export default router
