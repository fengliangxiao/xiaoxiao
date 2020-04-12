import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// iconfont 资源
import './assets/iconfont/iconfont.js'
import './assets/iconfont/iconfont.css'
// 公共js
import './assets/common.css'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
