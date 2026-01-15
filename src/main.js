import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n' // <--- 引入配置
import '@/assets/styles/_reset.scss'

Vue.config.productionTip = false

new Vue({
  router,
  i18n, // <--- 挂载到实例
  render: h => h(App)
}).$mount('#app')