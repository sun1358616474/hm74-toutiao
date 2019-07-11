import Vue from 'vue'
import App from './App.vue'
// 导入ui框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入vue-router
import router from '@/router'
// 导入axios
import axios from 'axios'
Vue.prototype.axios = axios
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
