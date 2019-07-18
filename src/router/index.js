// 配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入Login组件
import Login from '@/views/login'
// 导入首页组件
import Home from '@/views/home'
// 导入欢迎页
import Welcome from '@/views/Welcome'
// 导入内容管理页面
import Article from '@/views/article'
// 导入404页面
import NotFound from '@/views/404'
// 导入素材管理页面
import Image from '@/views/image'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { name: 'login', path: '/login', component: Login },
    {
      path: '/',
      component: Home,
      children: [
        { name: 'welcome', path: '/', component: Welcome },
        { name: 'article', path: '/article', component: Article },
        { name: 'image', path: '/image', component: Image }
      ]
    },
    { name: '404', path: '*', component: NotFound }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const user = window.sessionStorage.getItem('hm74-toutiao')
  if (user) return next()
  next('/login')
})
export default router
