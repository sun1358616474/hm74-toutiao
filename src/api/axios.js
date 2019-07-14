// 配置axios
import axios from 'axios'
const instance = axios.create({
  // 配置对象 基准路径 头部消息
  baseURL: 'http://ttapi.research.itcast.cn/mp/v1_0/',
  headers: {
    // Authorization: 'Bearer ' + JSON.parse(window.sessionStorage.getItem('hm74-toutiao')).token
  }
})
export default instance
