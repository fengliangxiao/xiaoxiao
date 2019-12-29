import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// iconfont 资源
import './assets/iconfont/iconfont.js'
import './assets/iconfont/iconfont.css'
// 公共js
import './assets/common.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
