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
// 导入发布文章页面
import Publish from '@/views/publish'
// 导入评论管理页面
import Comment from '@/views/comment'
// 导入个人设置页面
import Setting from '@/views/setting'
// 导入粉丝管理页面
import Fans from '@/views/fans'
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
        { name: 'image', path: '/image', component: Image },
        { name: 'publish', path: '/publish', component: Publish },
        { name: 'comment', path: '/comment', component: Comment },
        { name: 'setting', path: '/setting', component: Setting },
        { name: 'fans', path: '/fans', component: Fans }
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
