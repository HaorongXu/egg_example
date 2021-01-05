import Vue from 'vue'
import App from './App.vue'
import router from './router' // 导入路由
import axios from 'axios'
// axios.defaults.baseURL = 'http://120.78.134.117:7001';
Vue.prototype.$http = axios;

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')