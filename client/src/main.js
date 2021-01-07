import Vue from 'vue'
import App from './App.vue'
import router from './router' // 导入路由
import axios from 'axios'
// axios.defaults.baseURL = 'http://www.xuhaorong.cn';  //存在跨域 
Vue.prototype.$http = axios;

console.log('process.env',process.env) // 开发和生产环境地址信息

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')