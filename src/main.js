import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// axios
import axios from 'axios';
axios.defaults.baseURL = 'http://jh.com/standard/ajaxHttp.php';
axios.defaults.withCredentials = true;
Vue.prototype.axios = axios;

// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 全局组件
// import navHead from './components/navHead';
// Vue.component("navHead", navHead);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
