import Vue from 'vue'
import 'dayjs/locale/zh-cn'
import 'normalize.css/normalize.css'

import App from './App.vue'
import store from './store'
import '@/styles/index.scss'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
